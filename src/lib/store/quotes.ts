import type { Quote } from '@/lib/types/quote';

// In-memory store for development
// In production, replace with Supabase/PostgreSQL
const quotes = new Map<string, Quote>();

export function saveQuote(quote: Quote): void {
  quotes.set(quote.id, quote);
}

export function getQuote(id: string): Quote | null {
  return quotes.get(id) || null;
}

export function updateQuote(id: string, updates: Partial<Quote>): Quote | null {
  const quote = quotes.get(id);
  if (!quote) return null;

  const updated = { ...quote, ...updates };
  quotes.set(id, updated);
  return updated;
}

export function deleteQuote(id: string): boolean {
  return quotes.delete(id);
}

export function incrementViewCount(id: string): Quote | null {
  const quote = quotes.get(id);
  if (!quote) return null;

  quote.viewCount = (quote.viewCount || 0) + 1;
  quote.lastViewedAt = new Date().toISOString();
  quotes.set(id, quote);
  return quote;
}
