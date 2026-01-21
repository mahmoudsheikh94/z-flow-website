'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export default function ServicesPage() {
  const t = useTranslations('services')
  const common = useTranslations('common')

  const services = [
    {
      key: 'mvp',
      href: '/services/mvp-development',
    },
    {
      key: 'automation',
      href: '/services/automation',
    },
    {
      key: 'ai',
      href: '/services/ai-integration',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="section-dark pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="glow-subtle top-1/2 -right-48" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="hero-animate hero-animate-1 badge badge-dark text-xs tracking-widest mb-8 inline-block">
              {t('hero.badge')}
            </span>
            <h1 className="hero-animate hero-animate-2 text-display font-bold text-white mb-8">
              {t('hero.title')}
            </h1>
            <p className="hero-animate hero-animate-3 text-body-lg text-white/60 leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-light py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-32 lg:space-y-40">
            {services.map((service, index) => (
              <div
                key={service.key}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
                data-animate="blur-up"
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <span className="badge badge-orange mb-6">{t(`${service.key}.subtitle`)}</span>
                  <h2 className="text-headline font-bold text-text-primary mb-6">
                    {t(`${service.key}.title`)}
                  </h2>
                  <p className="text-body-lg text-text-secondary mb-10 leading-relaxed">
                    {t(`${service.key}.description`)}
                  </p>

                  <ul className="space-y-4 mb-10">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">{t(`${service.key}.features.1`)}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">{t(`${service.key}.features.2`)}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">{t(`${service.key}.features.3`)}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">{t(`${service.key}.features.4`)}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">{t(`${service.key}.features.5`)}</span>
                    </li>
                  </ul>

                  <Link href={service.href} className="btn btn-outline">
                    {common('cta.learnMore')}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

                {/* Metric Card */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="card bg-neutral-50 text-center py-20">
                    <div className="text-7xl sm:text-8xl font-bold text-brand-orange mb-4">
                      {t(`${service.key}.metric`)}
                    </div>
                    <div className="text-text-secondary text-lg">
                      {t(`${service.key}.metricLabel`)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-32 lg:py-44 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="glow-subtle top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center" data-animate="scale-up">
          <h2 className="text-headline font-bold text-white mb-8">
            {t('cta.title')}
          </h2>
          <p className="text-body-lg text-white/60 max-w-2xl mx-auto mb-12">
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
