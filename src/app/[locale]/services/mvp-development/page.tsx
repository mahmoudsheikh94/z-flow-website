'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export default function MVPDevelopmentPage() {
  const t = useTranslations('mvpPage')
  const common = useTranslations('common')

  const featureKeys = ['nextjs', 'mobile', 'scalable', 'auth', 'api', 'deployment'] as const
  const faqKeys = ['q1', 'q2', 'q3', 'q4'] as const

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
                {common('cta.discussProject')}
              </Link>
              <Link href="/projects" className="btn btn-secondary">
                {common('cta.viewExamples')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-light py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16" data-animate="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              {t('features.title')}
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureKeys.map((key, index) => (
              <div
                key={key}
                className="card"
                data-animate="fade-up"
                data-delay={String((index % 3) * 100)}
              >
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {t(`features.${key}.title`)}
                </h3>
                <p className="text-text-secondary">
                  {t(`features.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-gray py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16" data-animate="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              {t('process.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', key: 'step1' },
              { step: '2', key: 'step2' },
              { step: '3', key: 'step3' },
              { step: '4', key: 'step4' },
            ].map((item, index) => (
              <div
                key={item.step}
                className="text-center"
                data-animate="fade-up"
                data-delay={String(index * 100)}
              >
                <div className="w-12 h-12 bg-brand-orange text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-text-primary mb-2">{t(`process.${item.key}.title`)}</h3>
                <p className="text-text-secondary text-sm">{t(`process.${item.key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-light py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-16" data-animate="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              {t('faq.title')}
            </h2>
          </div>

          <div className="space-y-8">
            {faqKeys.map((key, index) => (
              <div
                key={key}
                data-animate="fade-up"
                data-delay={String(index * 100)}
              >
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {t(`faq.${key}.question`)}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {t(`faq.${key}.answer`)}
                </p>
              </div>
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
