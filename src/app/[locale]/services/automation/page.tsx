'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export default function AutomationPage() {
  const t = useTranslations('automationPage')
  const common = useTranslations('common')

  const useCaseTools = {
    leadManagement: ['HubSpot', 'Pipedrive', 'Slack', 'Email'],
    documents: ['Google Drive', 'Dropbox', 'Notion', 'Airtable'],
    reporting: ['Google Sheets', 'Slack', 'Email', 'Notion'],
    ecommerce: ['Shopify', 'WooCommerce', 'Stripe', 'Klaviyo'],
  }

  return (
    <>
      {/* Hero */}
      <section className="section-dark pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="glow-orange top-1/2 -right-48" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/services"
              className="hero-animate hero-animate-1 inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-6"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {common('backToServices')}
            </Link>
            <h1 className="hero-animate hero-animate-2 text-4xl sm:text-5xl font-bold text-white mb-6">
              {t('hero.title')}
            </h1>
            <p className="hero-animate hero-animate-3 text-lg text-white/70 leading-relaxed mb-8">
              {t('hero.subtitle')}
            </p>
            <div className="hero-animate hero-animate-4 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn btn-primary">
                {t('hero.cta')}
              </Link>
              <Link href="/projects" className="btn btn-secondary">
                {common('cta.viewExamples')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-light py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center" data-animate="fade-up" data-delay="0">
              <div className="text-5xl sm:text-6xl font-bold text-brand-orange mb-2">
                {t('benefits.timeSaving.metric')}
              </div>
              <div className="text-xl font-semibold text-text-primary mb-1">
                {t('benefits.timeSaving.label')}
              </div>
              <div className="text-text-secondary">
                {t('benefits.timeSaving.description')}
              </div>
            </div>
            <div className="text-center" data-animate="fade-up" data-delay="100">
              <div className="text-5xl sm:text-6xl font-bold text-brand-orange mb-2">
                {t('benefits.errors.metric')}
              </div>
              <div className="text-xl font-semibold text-text-primary mb-1">
                {t('benefits.errors.label')}
              </div>
              <div className="text-text-secondary">
                {t('benefits.errors.description')}
              </div>
            </div>
            <div className="text-center" data-animate="fade-up" data-delay="200">
              <div className="text-5xl sm:text-6xl font-bold text-brand-orange mb-2">
                {t('benefits.availability.metric')}
              </div>
              <div className="text-xl font-semibold text-text-primary mb-1">
                {t('benefits.availability.label')}
              </div>
              <div className="text-text-secondary">
                {t('benefits.availability.description')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-gray py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16" data-animate="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              {t('useCases.title')}
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              {t('useCases.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {(['leadManagement', 'documents', 'reporting', 'ecommerce'] as const).map((key, index) => (
              <div
                key={key}
                className="card"
                data-animate="fade-up"
                data-delay={String((index % 2) * 100)}
              >
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {t(`useCases.${key}.title`)}
                </h3>
                <p className="text-text-secondary mb-4">
                  {t(`useCases.${key}.description`)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {useCaseTools[key].map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-neutral-100 text-text-secondary text-sm rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="section-light py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16" data-animate="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              {t('tools.title')}
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              {t('tools.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card" data-animate="fade-up">
              <h3 className="text-2xl font-bold text-text-primary mb-3">{t('tools.n8n.title')}</h3>
              <p className="text-text-secondary mb-4">
                {t('tools.n8n.description')}
              </p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t('tools.n8n.feature1')}
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t('tools.n8n.feature2')}
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t('tools.n8n.feature3')}
                </li>
              </ul>
            </div>

            <div className="card" data-animate="fade-up" data-delay="100">
              <h3 className="text-2xl font-bold text-text-primary mb-3">{t('tools.make.title')}</h3>
              <p className="text-text-secondary mb-4">
                {t('tools.make.description')}
              </p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t('tools.make.feature1')}
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t('tools.make.feature2')}
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t('tools.make.feature3')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="glow-orange top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center" data-animate="scale">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
            {t('cta.subtitle')}
          </p>
          <Link href="/contact" className="btn btn-primary">
            {t('cta.button')}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
