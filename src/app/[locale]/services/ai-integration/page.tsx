'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export default function AIIntegrationPage() {
  const t = useTranslations('aiPage')
  const common = useTranslations('common')

  const technologies = ['OpenAI GPT-4', 'Claude', 'Whisper', 'LangChain', 'Vector DBs', 'Custom Models']

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

      {/* Use Cases */}
      <section className="section-light py-24">
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
            <div className="card group" data-animate="fade-up" data-delay="0">
              <div className="text-brand-orange mb-4 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {t('useCases.documents.title')}
              </h3>
              <p className="text-text-secondary">
                {t('useCases.documents.description')}
              </p>
            </div>

            <div className="card group" data-animate="fade-up" data-delay="100">
              <div className="text-brand-orange mb-4 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {t('useCases.chatbots.title')}
              </h3>
              <p className="text-text-secondary">
                {t('useCases.chatbots.description')}
              </p>
            </div>

            <div className="card group" data-animate="fade-up" data-delay="0">
              <div className="text-brand-orange mb-4 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {t('useCases.content.title')}
              </h3>
              <p className="text-text-secondary">
                {t('useCases.content.description')}
              </p>
            </div>

            <div className="card group" data-animate="fade-up" data-delay="100">
              <div className="text-brand-orange mb-4 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {t('useCases.categorization.title')}
              </h3>
              <p className="text-text-secondary">
                {t('useCases.categorization.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-gray py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16" data-animate="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              {t('principles.title')}
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              {t('principles.subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div data-animate="fade-up" data-delay="0">
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {t('principles.noPurpose.title')}
              </h3>
              <p className="text-text-secondary">
                {t('principles.noPurpose.description')}
              </p>
            </div>
            <div data-animate="fade-up" data-delay="100">
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {t('principles.privacy.title')}
              </h3>
              <p className="text-text-secondary">
                {t('principles.privacy.description')}
              </p>
            </div>
            <div data-animate="fade-up" data-delay="0">
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {t('principles.explainable.title')}
              </h3>
              <p className="text-text-secondary">
                {t('principles.explainable.description')}
              </p>
            </div>
            <div data-animate="fade-up" data-delay="100">
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {t('principles.humanInLoop.title')}
              </h3>
              <p className="text-text-secondary">
                {t('principles.humanInLoop.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-light py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16" data-animate="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              {t('technologies.title')}
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4" data-animate="fade-up" data-delay="100">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-6 py-3 bg-neutral-100 text-text-primary font-medium rounded-lg"
              >
                {tech}
              </span>
            ))}
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
            {common('cta.freeConsultation')}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
