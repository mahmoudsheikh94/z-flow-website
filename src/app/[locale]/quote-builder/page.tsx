'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { nanoid } from 'nanoid';
import { ChatInterface } from '@/components/quote/ChatInterface';
import { IndustrySelector } from '@/components/quote/IndustrySelector';
import { QuoteDisplay } from '@/components/quote/QuoteDisplay';
import { PoweredByBadge } from '@/components/quote/PoweredByBadge';
import type { Quote, Message } from '@/lib/types/quote';
import Link from 'next/link';
import Image from 'next/image';

type Step = 'industry' | 'details' | 'chat' | 'generating' | 'preview';

export default function QuoteBuilderPage() {
  const [step, setStep] = useState<Step>('industry');
  const [industry, setIndustry] = useState<'marketing' | 'automotive' | null>(null);
  const [clientName, setClientName] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [quote, setQuote] = useState<Quote | null>(null);
  const [shareUrl, setShareUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleIndustrySelect = (selected: 'marketing' | 'automotive') => {
    setIndustry(selected);
    // Auto-advance after short delay
    setTimeout(() => setStep('details'), 300);
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('chat');

    // Add initial assistant message
    const welcomeMessage: Message = {
      id: nanoid(),
      role: 'assistant',
      content: industry === 'marketing'
        ? `Great! I'll help you create a professional quote for your marketing/creative project.\n\nPlease describe the project in detail:\n- What services do you need? (web design, branding, content, etc.)\n- What's the scope and any specific requirements?\n- Do you have a target timeline or budget in mind?`
        : `Great! I'll help you create a professional quote for your automotive service.\n\nPlease describe what you need:\n- What type of service? (maintenance, repair, detailing, custom work)\n- Vehicle details (make, model, year if relevant)\n- Any specific parts or requirements?`,
      timestamp: new Date(),
    };
    setMessages([welcomeMessage]);
  };

  const generateQuote = useCallback(async (description: string) => {
    setIsLoading(true);
    setError(null);
    setStep('generating');

    try {
      const response = await fetch('/api/quote/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          description,
          industry,
          clientName: clientName || undefined,
          clientCompany: clientCompany || undefined,
          businessName: businessName || undefined,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to generate quote');
      }

      const data = await response.json();
      setQuote(data.quote);

      // Save quote to get shareable URL
      await fetch(`/api/quote/${data.quote.id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quote: data.quote }),
      });

      setShareUrl(`${window.location.origin}/quote/${data.quote.id}`);
      setStep('preview');

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
      setStep('chat');
    } finally {
      setIsLoading(false);
    }
  }, [industry, clientName, clientCompany, businessName]);

  const handleSendMessage = useCallback((content: string) => {
    const userMessage: Message = {
      id: nanoid(),
      role: 'user',
      content,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // If this looks like a complete project description, generate the quote
    if (content.length > 50) {
      setIsLoading(true);

      // Add processing message
      setTimeout(() => {
        const processingMessage: Message = {
          id: nanoid(),
          role: 'assistant',
          content: 'Perfect! I have all the details I need. Generating your professional quote now...',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, processingMessage]);

        // Generate the quote
        generateQuote(content);
      }, 500);
    } else {
      // Ask for more details
      setTimeout(() => {
        const followUpMessage: Message = {
          id: nanoid(),
          role: 'assistant',
          content: 'Could you provide a bit more detail? The more specific you are, the more accurate your quote will be.',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, followUpMessage]);
      }, 500);
    }
  }, [generateQuote]);

  const handleStartOver = () => {
    setStep('industry');
    setIndustry(null);
    setClientName('');
    setClientCompany('');
    setBusinessName('');
    setMessages([]);
    setQuote(null);
    setShareUrl(null);
    setError(null);
  };

  const copyShareUrl = async () => {
    if (shareUrl) {
      await navigator.clipboard.writeText(shareUrl);
      // Could add toast notification here
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-dark via-brand-dark to-neutral-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
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
          <div className="flex items-center gap-4">
            <span className="badge badge-dark">Free Tool</span>
            {step !== 'industry' && step !== 'preview' && (
              <button
                onClick={handleStartOver}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Start Over
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="pt-20">
        <AnimatePresence mode="wait">
          {/* Step 1: Industry Selection */}
          {step === 'industry' && (
            <motion.div
              key="industry"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6"
            >
              <div className="max-w-3xl w-full">
                <div className="text-center mb-12">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-full text-sm font-medium mb-6"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    AI-Powered Quote Builder
                  </motion.div>
                  <h1 className="text-headline font-bold text-white mb-4">
                    Create a Professional Quote in Seconds
                  </h1>
                  <p className="text-lg text-white/60 max-w-xl mx-auto">
                    Select your industry to get started. Our AI will help you create a beautiful, detailed proposal.
                  </p>
                </div>

                <IndustrySelector
                  selected={industry}
                  onSelect={handleIndustrySelect}
                />

                <div className="mt-12 flex justify-center">
                  <PoweredByBadge variant="dark" />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Client Details */}
          {step === 'details' && (
            <motion.div
              key="details"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6"
            >
              <div className="max-w-md w-full">
                <div className="text-center mb-8">
                  <h2 className="text-title font-bold text-white mb-2">
                    Optional Details
                  </h2>
                  <p className="text-white/60">
                    Add client info to personalize the quote, or skip to continue.
                  </p>
                </div>

                <form onSubmit={handleDetailsSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Your Business Name
                    </label>
                    <input
                      type="text"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="e.g., Acme Agency"
                      className="input input-dark"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Client Company
                    </label>
                    <input
                      type="text"
                      value={clientCompany}
                      onChange={(e) => setClientCompany(e.target.value)}
                      placeholder="e.g., Tech Startup GmbH"
                      className="input input-dark"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Client Contact Name
                    </label>
                    <input
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g., Max Mustermann"
                      className="input input-dark"
                    />
                  </div>

                  <div className="pt-4 space-y-3">
                    <button type="submit" className="btn btn-primary w-full">
                      Continue
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep('industry')}
                      className="w-full text-center text-sm text-white/60 hover:text-white transition-colors"
                    >
                      Back to industry selection
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}

          {/* Step 3: Chat Interface */}
          {step === 'chat' && (
            <motion.div
              key="chat"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="h-[calc(100vh-80px)] flex flex-col"
            >
              <div className="flex-1 max-w-3xl w-full mx-auto flex flex-col bg-neutral-50 rounded-t-3xl mt-4 overflow-hidden">
                {error && (
                  <div className="bg-red-50 border-b border-red-100 px-4 py-3 text-red-600 text-sm">
                    {error}
                  </div>
                )}
                <ChatInterface
                  messages={messages}
                  isLoading={isLoading}
                  onSendMessage={handleSendMessage}
                  placeholder={
                    industry === 'marketing'
                      ? 'Describe your marketing/creative project...'
                      : 'Describe the automotive service you need...'
                  }
                />
              </div>
            </motion.div>
          )}

          {/* Step 4: Generating */}
          {step === 'generating' && (
            <motion.div
              key="generating"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-[calc(100vh-80px)] flex items-center justify-center"
            >
              <div className="text-center">
                <motion.div
                  className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-brand-orange/20 flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <svg className="w-10 h-10 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </motion.div>
                <h2 className="text-title font-bold text-white mb-2">
                  Generating Your Quote
                </h2>
                <p className="text-white/60">
                  Our AI is creating a professional proposal just for you...
                </p>
              </div>
            </motion.div>
          )}

          {/* Step 5: Preview */}
          {step === 'preview' && quote && (
            <motion.div
              key="preview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Action Bar */}
              <div className="sticky top-20 z-40 bg-white border-b border-neutral-200 shadow-sm">
                <div className="max-w-4xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-text-muted">Your quote is ready!</p>
                    <p className="font-semibold text-text-primary">Share it with your client</p>
                  </div>
                  <div className="flex items-center gap-3">
                    {shareUrl && (
                      <div className="flex items-center gap-2 bg-neutral-100 rounded-lg px-3 py-2">
                        <input
                          type="text"
                          value={shareUrl}
                          readOnly
                          className="bg-transparent text-sm text-text-secondary w-48 truncate focus:outline-none"
                        />
                        <button
                          onClick={copyShareUrl}
                          className="text-brand-orange hover:text-brand-orange-hover transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </button>
                      </div>
                    )}
                    <button
                      onClick={handleStartOver}
                      className="btn btn-outline text-sm py-2"
                    >
                      Create Another
                    </button>
                  </div>
                </div>
              </div>

              <QuoteDisplay quote={quote} isPreview />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
