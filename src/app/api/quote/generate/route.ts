import { anthropic } from '@ai-sdk/anthropic';
import { generateObject } from 'ai';
import { z } from 'zod';
import { nanoid } from 'nanoid';
import { headers } from 'next/headers';

// Rate limiting store (in production, use Redis/Upstash)
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

const RATE_LIMIT = 5; // quotes per IP per day
const RATE_LIMIT_WINDOW = 24 * 60 * 60 * 1000; // 24 hours

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return { allowed: true, remaining: RATE_LIMIT - 1 };
  }

  if (record.count >= RATE_LIMIT) {
    return { allowed: false, remaining: 0 };
  }

  record.count++;
  return { allowed: true, remaining: RATE_LIMIT - record.count };
}

const quoteSchema = z.object({
  title: z.string().describe('A professional title for the quote/proposal'),
  summary: z.string().describe('A 2-3 sentence professional summary of what is being proposed'),
  sections: z.array(z.object({
    id: z.string(),
    title: z.string().describe('Section title like "Discovery & Research", "Design", "Development"'),
    items: z.array(z.object({
      id: z.string(),
      description: z.string().describe('Line item description'),
      details: z.string().optional().describe('Additional details about this line item'),
      price: z.number().describe('Price for this item in EUR'),
      quantity: z.number().optional().default(1),
      unit: z.string().optional(),
    })),
  })),
  estimatedDuration: z.string().describe('Estimated project duration like "4-6 weeks"'),
  paymentTerms: z.string().describe('Payment terms like "50% upfront, 50% on completion"'),
  terms: z.array(z.string()).describe('3-5 professional terms and conditions'),
});

export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const headersList = await headers();
    const forwardedFor = headersList.get('x-forwarded-for');
    const ip = forwardedFor?.split(',')[0] || 'unknown';

    // Check rate limit
    const { allowed, remaining } = checkRateLimit(ip);
    if (!allowed) {
      return Response.json(
        { error: 'Rate limit exceeded. Please try again tomorrow or contact Z-Flow for unlimited access.' },
        {
          status: 429,
          headers: {
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': new Date(Date.now() + RATE_LIMIT_WINDOW).toISOString(),
          }
        }
      );
    }

    const body = await request.json();
    const { description, industry, clientName, clientCompany, businessName } = body;

    if (!description || !industry) {
      return Response.json(
        { error: 'Missing required fields: description and industry' },
        { status: 400 }
      );
    }

    const industryContext = industry === 'marketing'
      ? `You are creating a quote for a marketing/creative agency project. Common services include web design, branding, content creation, social media management, SEO, and digital marketing campaigns. Use industry-standard pricing for German market.`
      : `You are creating a quote for an automotive service. Common services include vehicle maintenance, repairs, detailing, custom builds, parts installation, and fleet services. Use industry-standard pricing for German market.`;

    const { object: quoteData } = await generateObject({
      model: anthropic('claude-sonnet-4-20250514'),
      schema: quoteSchema,
      prompt: `${industryContext}

Based on the following project description, create a professional, detailed quote/proposal:

"${description}"

${clientCompany ? `Client Company: ${clientCompany}` : ''}
${clientName ? `Client Contact: ${clientName}` : ''}
${businessName ? `From Business: ${businessName}` : ''}

Requirements:
1. Create clear, logical sections that break down the work
2. Each section should have 2-5 line items with realistic pricing in EUR
3. Pricing should be professional and competitive for the German market
4. Include a professional summary that captures the value proposition
5. Suggest a realistic timeline
6. Include standard payment terms (common: 50% upfront, 50% on completion)
7. Add 3-5 professional terms and conditions

Be specific and professional. The quote should look like it came from a real agency.`,
    });

    // Calculate totals
    const subtotal = quoteData.sections.reduce((total, section) => {
      return total + section.items.reduce((sectionTotal, item) => {
        return sectionTotal + (item.price * (item.quantity || 1));
      }, 0);
    }, 0);

    const taxRate = 19; // German VAT
    const tax = subtotal * (taxRate / 100);
    const total = subtotal + tax;

    // Create valid until date (30 days from now)
    const validUntil = new Date();
    validUntil.setDate(validUntil.getDate() + 30);

    const quote = {
      id: `Q-${nanoid(8).toUpperCase()}`,
      clientName: clientName || undefined,
      clientCompany: clientCompany || undefined,
      title: quoteData.title,
      summary: quoteData.summary,
      industry,
      sections: quoteData.sections,
      subtotal,
      tax,
      taxRate,
      total,
      currency: 'EUR',
      estimatedDuration: quoteData.estimatedDuration,
      validUntil: validUntil.toISOString(),
      paymentTerms: quoteData.paymentTerms,
      terms: quoteData.terms,
      createdAt: new Date().toISOString(),
      businessName: businessName || undefined,
      status: 'draft' as const,
    };

    return Response.json(
      { quote },
      {
        headers: {
          'X-RateLimit-Remaining': remaining.toString(),
        }
      }
    );

  } catch (error) {
    console.error('Quote generation error:', error);
    return Response.json(
      { error: 'Failed to generate quote. Please try again.' },
      { status: 500 }
    );
  }
}
