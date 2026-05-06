'use client';

import { motion } from 'framer-motion';
import type { Quote } from '@/lib/types/quote';
import { PoweredByBadge } from './PoweredByBadge';

interface QuoteDisplayProps {
  quote: Quote;
  isPreview?: boolean;
}

export function QuoteDisplay({ quote, isPreview = false }: QuoteDisplayProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: quote.currency || 'EUR',
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-neutral-50 to-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header Bar */}
      <motion.div
        className="bg-brand-dark text-white py-4"
        variants={itemVariants}
      >
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-orange/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-white/60">Quote</p>
              <p className="font-semibold">{quote.id}</p>
            </div>
          </div>
          {quote.status && (
            <div className={`px-4 py-1.5 rounded-full text-sm font-medium ${
              quote.status === 'accepted' ? 'bg-green-500/20 text-green-400' :
              quote.status === 'declined' ? 'bg-red-500/20 text-red-400' :
              quote.status === 'expired' ? 'bg-neutral-500/20 text-neutral-400' :
              'bg-brand-orange/20 text-brand-orange'
            }`}>
              {quote.status.charAt(0).toUpperCase() + quote.status.slice(1)}
            </div>
          )}
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Quote Header */}
        <motion.div className="mb-12" variants={itemVariants}>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div>
              {quote.businessName && (
                <p className="text-sm text-text-muted mb-2">From {quote.businessName}</p>
              )}
              <h1 className="text-headline font-bold text-text-primary mb-2">
                {quote.title}
              </h1>
              {quote.clientCompany && (
                <p className="text-lg text-text-secondary">
                  Prepared for <span className="font-semibold text-text-primary">{quote.clientCompany}</span>
                  {quote.clientName && <span> ({quote.clientName})</span>}
                </p>
              )}
            </div>
            <div className="text-right">
              <p className="text-sm text-text-muted mb-1">Total</p>
              <p className="text-4xl font-bold text-text-primary">
                {formatCurrency(quote.total)}
              </p>
              {quote.taxRate && quote.taxRate > 0 && (
                <p className="text-sm text-text-muted mt-1">
                  incl. {quote.taxRate}% VAT
                </p>
              )}
            </div>
          </div>

          {/* Summary Card */}
          <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
            <p className="text-text-secondary leading-relaxed">
              {quote.summary}
            </p>
          </div>
        </motion.div>

        {/* Timeline Info */}
        {(quote.estimatedDuration || quote.validUntil) && (
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            variants={itemVariants}
          >
            {quote.estimatedDuration && (
              <div className="bg-white rounded-xl border border-neutral-200 p-4">
                <p className="text-sm text-text-muted mb-1">Duration</p>
                <p className="font-semibold text-text-primary">{quote.estimatedDuration}</p>
              </div>
            )}
            {quote.startDate && (
              <div className="bg-white rounded-xl border border-neutral-200 p-4">
                <p className="text-sm text-text-muted mb-1">Start Date</p>
                <p className="font-semibold text-text-primary">{formatDate(quote.startDate)}</p>
              </div>
            )}
            {quote.deliveryDate && (
              <div className="bg-white rounded-xl border border-neutral-200 p-4">
                <p className="text-sm text-text-muted mb-1">Delivery</p>
                <p className="font-semibold text-text-primary">{formatDate(quote.deliveryDate)}</p>
              </div>
            )}
            <div className="bg-white rounded-xl border border-neutral-200 p-4">
              <p className="text-sm text-text-muted mb-1">Valid Until</p>
              <p className="font-semibold text-text-primary">{formatDate(quote.validUntil)}</p>
            </div>
          </motion.div>
        )}

        {/* Line Items by Section */}
        <motion.div className="space-y-8 mb-12" variants={itemVariants}>
          {quote.sections.map((section, sectionIndex) => (
            <motion.div
              key={section.id}
              className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm"
              variants={itemVariants}
            >
              <div className="bg-neutral-50 px-6 py-4 border-b border-neutral-200">
                <h3 className="font-semibold text-text-primary flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center text-sm font-bold text-brand-orange">
                    {sectionIndex + 1}
                  </span>
                  {section.title}
                </h3>
              </div>
              <div className="divide-y divide-neutral-100">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.id}
                    className="px-6 py-5 flex items-start justify-between gap-4 hover:bg-neutral-50/50 transition-colors"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * itemIndex }}
                  >
                    <div className="flex-1">
                      <p className="font-medium text-text-primary mb-1">
                        {item.description}
                      </p>
                      {item.details && (
                        <p className="text-sm text-text-muted">
                          {item.details}
                        </p>
                      )}
                    </div>
                    {item.price !== undefined && (
                      <div className="text-right flex-shrink-0">
                        <p className="font-semibold text-text-primary">
                          {formatCurrency(item.price * (item.quantity || 1))}
                        </p>
                        {item.quantity && item.quantity > 1 && (
                          <p className="text-sm text-text-muted">
                            {item.quantity} x {formatCurrency(item.price)}
                          </p>
                        )}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing Summary */}
        <motion.div
          className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm mb-12"
          variants={itemVariants}
        >
          <div className="p-6 space-y-4">
            <div className="flex justify-between text-text-secondary">
              <span>Subtotal</span>
              <span>{formatCurrency(quote.subtotal)}</span>
            </div>
            {quote.discount && quote.discount > 0 && (
              <div className="flex justify-between text-green-600">
                <span>Discount {quote.discountType === 'percentage' ? `(${quote.discount}%)` : ''}</span>
                <span>-{formatCurrency(
                  quote.discountType === 'percentage'
                    ? quote.subtotal * (quote.discount / 100)
                    : quote.discount
                )}</span>
              </div>
            )}
            {quote.tax && quote.tax > 0 && (
              <div className="flex justify-between text-text-secondary">
                <span>VAT ({quote.taxRate}%)</span>
                <span>{formatCurrency(quote.tax)}</span>
              </div>
            )}
            <div className="h-px bg-neutral-200 my-4" />
            <div className="flex justify-between text-xl font-bold text-text-primary">
              <span>Total</span>
              <span>{formatCurrency(quote.total)}</span>
            </div>
          </div>
        </motion.div>

        {/* Payment Terms */}
        {quote.paymentTerms && (
          <motion.div
            className="bg-neutral-50 rounded-2xl border border-neutral-200 p-6 mb-12"
            variants={itemVariants}
          >
            <h3 className="font-semibold text-text-primary mb-3">Payment Terms</h3>
            <p className="text-text-secondary">{quote.paymentTerms}</p>
          </motion.div>
        )}

        {/* Terms & Conditions */}
        {quote.terms && quote.terms.length > 0 && (
          <motion.div
            className="bg-neutral-50 rounded-2xl border border-neutral-200 p-6 mb-12"
            variants={itemVariants}
          >
            <h3 className="font-semibold text-text-primary mb-4">Terms & Conditions</h3>
            <ul className="space-y-3">
              {quote.terms.map((term, index) => (
                <li key={index} className="flex items-start gap-3 text-text-secondary">
                  <svg className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {term}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Action Buttons (only show if not preview) */}
        {!isPreview && (
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <button className="btn btn-primary">
              Accept Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </button>
            <button className="btn btn-outline">
              Request Changes
            </button>
          </motion.div>
        )}

        {/* Powered By Badge */}
        <motion.div
          className="mt-16 flex justify-center"
          variants={itemVariants}
        >
          <PoweredByBadge />
        </motion.div>
      </div>
    </motion.div>
  );
}
