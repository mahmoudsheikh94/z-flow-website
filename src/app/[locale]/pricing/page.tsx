'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export default function PricingPage() {
  const t = useTranslations('pricing')
  const common = useTranslations('common')

  const packages = [
    {
      key: 'mvp',
      highlighted: true,
    },
    {
      key: 'automation',
      highlighted: false,
    },
    {
      key: 'retainer',
      highlighted: false,
    },
  ]

  const faqKeys = ['q1', 'q2', 'q3', 'q4'] as const

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

      {/* Pricing Cards */}
      <section className="section-light py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {packages.map((pkg, index) => (
              <div
                key={pkg.key}
                className={`card ${pkg.highlighted ? 'ring-2 ring-brand-orange' : ''}`}
                data-animate="fade-up"
                data-delay={String(index * 100)}
              >
                {pkg.highlighted && (
                  <span className="badge badge-orange mb-6">{common('popular')}</span>
                )}
                <h3 className="text-title text-text-primary mb-3">
                  {t(`packages.${pkg.key}.name`)}
                </h3>
                <p className="text-text-secondary mb-8">
                  {t(`packages.${pkg.key}.description`)}
                </p>

                <div className="mb-8">
                  <span className="text-4xl lg:text-5xl font-bold text-text-primary">
                    {t(`packages.${pkg.key}.price`)}
                  </span>
                  <span className="text-text-secondary ml-2">
                    / {t(`packages.${pkg.key}.duration`)}
                  </span>
                </div>

                <ul className="space-y-4 mb-10">
                  {pkg.key === 'mvp' && (
                    <>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-text-secondary">{t('packages.mvp.feature1')}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-text-secondary">{t('packages.mvp.feature2')}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-text-secondary">{t('packages.mvp.feature3')}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-text-secondary">{t('packages.mvp.feature4')}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-text-secondary">{t('packages.mvp.feature5')}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-text-secondary">{t('packages.mvp.feature6')}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-text-secondary">{t('packages.mvp.feature7')}</span>
                      </li>
                    </>
                  )}
                  {pkg.key === 'automation' && (
                    <>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-text-secondary">{t('packages.automation.feature1')}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-text-secondary">{t('packages.automation.feature2')}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-text-secondary">{t('packages.automation.feature3')}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-text-secondary">{t('packages.automation.feature4')}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-text-secondary">{t('packages.automation.feature5')}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-text-secondary">{t('packages.automation.feature6')}</span>
                      </li>
                    </>
                  )}
                  {pkg.key === 'retainer' && (
                    <>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-text-secondary">{t('packages.retainer.feature1')}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-text-secondary">{t('packages.retainer.feature2')}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-text-secondary">{t('packages.retainer.feature3')}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-text-secondary">{t('packages.retainer.feature4')}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-text-secondary">{t('packages.retainer.feature5')}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-text-secondary">{t('packages.retainer.feature6')}</span>
                      </li>
                    </>
                  )}
                </ul>

                <Link
                  href="/contact"
                  className={`btn w-full ${pkg.highlighted ? 'btn-primary' : 'btn-outline'}`}
                >
                  {t(`packages.${pkg.key}.cta`)}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Projects */}
      <section className="section-gray py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center" data-animate="blur-up">
            <h2 className="text-headline font-bold text-text-primary mb-8">
              {t('custom.title')}
            </h2>
            <p className="text-body-lg text-text-secondary mb-10">
              {t('custom.subtitle')}
            </p>
            <Link href="/contact" className="btn btn-primary">
              {common('cta.requestCustomQuote')}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-light py-32 lg:py-40">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-20" data-animate="blur-up">
            <h2 className="text-headline font-bold text-text-primary mb-6">
              {t('faq.title')}
            </h2>
          </div>

          <div className="space-y-10">
            {faqKeys.map((key, index) => (
              <div
                key={key}
                data-animate="fade-up"
                data-delay={String(index * 100)}
              >
                <h3 className="text-title text-text-primary mb-4">
                  {t(`faq.${key}.question`)}
                </h3>
                <p className="text-text-secondary leading-relaxed text-lg">
                  {t(`faq.${key}.answer`)}
                </p>
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
            {common('cta.scheduleAppointment')}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
