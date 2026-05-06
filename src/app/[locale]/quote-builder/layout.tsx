import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Quote Builder - Create Professional Quotes in Seconds',
  description: 'Free AI-powered quote builder for marketing agencies and automotive services. Create beautiful, professional proposals instantly.',
  openGraph: {
    title: 'AI Quote Builder - Create Professional Quotes in Seconds',
    description: 'Free AI-powered quote builder for marketing agencies and automotive services.',
    type: 'website',
  },
};

export default function QuoteBuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
