import { getQuote, saveQuote, incrementViewCount } from '@/lib/store/quotes';
import type { Quote } from '@/lib/types/quote';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const quote = getQuote(id);
  if (!quote) {
    return Response.json(
      { error: 'Quote not found' },
      { status: 404 }
    );
  }

  // Increment view count
  incrementViewCount(id);

  return Response.json({ quote });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const quote = body.quote as Quote;

    if (!quote || !quote.id) {
      return Response.json(
        { error: 'Invalid quote data' },
        { status: 400 }
      );
    }

    saveQuote(quote);

    return Response.json({ success: true, id: quote.id });
  } catch (error) {
    console.error('Error saving quote:', error);
    return Response.json(
      { error: 'Failed to save quote' },
      { status: 500 }
    );
  }
}
