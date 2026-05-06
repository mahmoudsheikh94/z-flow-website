import { QuoteDisplay } from '@/components/quote/QuoteDisplay';
import { notFound } from 'next/navigation';
import type { Quote } from '@/lib/types/quote';
import type { Metadata } from 'next';

// This page is outside the locale structure for cleaner share URLs

async function getQuote(id: string): Promise<Quote | null> {
  try {
    // In production, this would be a direct database call
    // For now, we fetch from the API
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/quote/${id}`, {
      cache: 'no-store',
    });

    if (!response.ok) return null;

    const data = await response.json();
    return data.quote;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const quote = await getQuote(id);

  if (!quote) {
    return {
      title: 'Quote Not Found',
    };
  }

  return {
    title: `${quote.title} | Quote ${quote.id}`,
    description: quote.summary,
    openGraph: {
      title: quote.title,
      description: quote.summary,
      type: 'website',
    },
  };
}

export default async function QuotePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const quote = await getQuote(id);

  if (!quote) {
    notFound();
  }

  return <QuoteDisplay quote={quote} />;
}
