import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Free AI Quote Builder - Create Professional Quotes in Seconds | Z-Flow',
  description: 'Create beautiful, professional quotes and proposals instantly with AI. Free for marketing agencies and automotive businesses. No signup required.',
  keywords: [
    'quote builder',
    'proposal generator',
    'AI quote generator',
    'free quote maker',
    'professional proposal',
    'marketing agency quote',
    'automotive quote',
    'estimate generator',
  ],
  openGraph: {
    title: 'Free AI Quote Builder - Create Professional Quotes in Seconds',
    description: 'Create beautiful, professional quotes and proposals instantly with AI. Free for marketing agencies and automotive businesses.',
    type: 'website',
  },
};

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'AI-Powered',
    description: 'Our AI understands your project and creates detailed, professional quotes automatically.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Beautiful Design',
    description: 'Stunning, interactive web-based quotes that impress clients. No more boring PDFs.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
    title: 'Easy Sharing',
    description: 'Get a unique URL for each quote. Share it with clients via email, WhatsApp, or anywhere.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '100% Free',
    description: 'Create up to 5 quotes per day completely free. No signup or credit card required.',
  },
];

const useCases = [
  {
    industry: 'Marketing & Creative',
    examples: ['Website redesign proposals', 'Brand identity packages', 'Social media retainers', 'Content strategy plans'],
  },
  {
    industry: 'Automotive',
    examples: ['Vehicle service estimates', 'Custom build quotes', 'Fleet maintenance plans', 'Parts installation quotes'],
  },
];

export default function QuoteBuilderLandingPage() {
  return (
    <div className="min-h-screen bg-brand-dark">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/logo-256.png"
              alt="Z-Flow"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-lg font-semibold text-white group-hover:text-brand-orange transition-colors">
              Z-Flow
            </span>
          </Link>
          <Link
            href="/en/quote-builder"
            className="btn btn-primary text-sm"
          >
            Start Building
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="glow-subtle top-1/4 left-1/4" />
        <div className="glow-subtle bottom-1/4 right-1/4" />

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-full text-sm font-medium mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            Free AI Tool
          </div>

          <h1 className="text-display font-bold text-white mb-6">
            Create Professional Quotes
            <br />
            <span className="gradient-text">in Seconds</span>
          </h1>

          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop wasting hours on proposals. Describe your project, and our AI creates a beautiful, detailed quote ready to send to your client.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/en/quote-builder" className="btn btn-primary text-lg px-8 py-4">
              Create Free Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <p className="text-sm text-white/40 mt-6">
            No signup required &bull; 5 free quotes per day
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="badge badge-orange mb-4">Features</span>
            <h2 className="text-headline font-bold text-text-primary mb-4">
              Everything You Need to Close More Deals
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Our quote builder is designed to help you create professional proposals that win clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="card">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="badge badge-orange mb-4">Use Cases</span>
            <h2 className="text-headline font-bold text-text-primary mb-4">
              Perfect for Your Industry
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase) => (
              <div key={useCase.industry} className="card">
                <h3 className="text-title font-semibold text-text-primary mb-4">
                  {useCase.industry}
                </h3>
                <ul className="space-y-3">
                  {useCase.examples.map((example) => (
                    <li key={example} className="flex items-center gap-3 text-text-secondary">
                      <svg className="w-5 h-5 text-brand-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="badge badge-orange mb-4">How It Works</span>
            <h2 className="text-headline font-bold text-text-primary mb-4">
              Three Simple Steps
            </h2>
          </div>

          <div className="space-y-12">
            {[
              {
                step: '01',
                title: 'Choose Your Industry',
                description: 'Select whether you\'re creating a quote for marketing/creative services or automotive services.',
              },
              {
                step: '02',
                title: 'Describe Your Project',
                description: 'Tell our AI about the project in natural language. Include scope, requirements, and any specific details.',
              },
              {
                step: '03',
                title: 'Share Your Quote',
                description: 'Get a beautiful, interactive quote with a unique URL. Share it directly with your client.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="text-6xl font-bold text-brand-orange/20 leading-none">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="glow-subtle top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="text-headline font-bold text-white mb-6">
            Ready to Create Your First Quote?
          </h2>
          <p className="text-lg text-white/60 mb-10">
            Join hundreds of businesses using our free AI quote builder to win more clients.
          </p>
          <Link href="/en/quote-builder" className="btn btn-primary text-lg px-8 py-4">
            Start Building Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-256.png"
              alt="Z-Flow"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span className="text-white/60 text-sm">
              A free tool by Z-Flow
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <Link href="/" className="hover:text-white transition-colors">
              Z-Flow Website
            </Link>
            <Link href="/en/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="/en/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
