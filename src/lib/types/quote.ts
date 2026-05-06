export interface QuoteLineItem {
  id: string;
  description: string;
  details?: string;
  price?: number;
  quantity?: number;
  unit?: string;
}

export interface QuoteSection {
  id: string;
  title: string;
  items: QuoteLineItem[];
}

export interface Quote {
  id: string;
  // Client info
  clientName?: string;
  clientCompany?: string;
  clientEmail?: string;

  // Quote details
  title: string;
  summary: string;
  industry: 'marketing' | 'automotive' | 'other';

  // Sections and items
  sections: QuoteSection[];

  // Pricing
  subtotal: number;
  tax?: number;
  taxRate?: number;
  discount?: number;
  discountType?: 'percentage' | 'fixed';
  total: number;
  currency: string;

  // Timeline
  estimatedDuration?: string;
  startDate?: string;
  deliveryDate?: string;

  // Terms
  validUntil: string;
  paymentTerms?: string;
  terms?: string[];

  // Meta
  createdAt: string;
  createdBy?: string;
  businessName?: string;
  businessLogo?: string;

  // Status
  status: 'draft' | 'sent' | 'viewed' | 'accepted' | 'declined' | 'expired';
  viewCount?: number;
  lastViewedAt?: string;
}

export interface QuoteGenerationInput {
  description: string;
  industry: 'marketing' | 'automotive' | 'other';
  clientName?: string;
  clientCompany?: string;
  businessName?: string;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}
