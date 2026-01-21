'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export default function ProcessPage() {
  const t = useTranslations('process')
  const common = useTranslations('common')

  const phases = [
    { number: '01', key: 'discovery' },
    { number: '02', key: 'design' },
    { number: '03', key: 'build' },
    { number: '04', key: 'launch' },
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

      {/* Principles */}
      <section className="section-light py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            <div className="text-center" data-animate="fade-up" data-delay="0">
              <div className="w-14 h-14 bg-brand-orange/10 text-brand-orange rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-title text-text-primary mb-3">
                {t('principles.transparency.title')}
              </h3>
              <p className="text-text-secondary">
                {t('principles.transparency.description')}
              </p>
            </div>
            <div className="text-center" data-animate="fade-up" data-delay="100">
              <div className="w-14 h-14 bg-brand-orange/10 text-brand-orange rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-title text-text-primary mb-3">
                {t('principles.weeklyUpdates.title')}
              </h3>
              <p className="text-text-secondary">
                {t('principles.weeklyUpdates.description')}
              </p>
            </div>
            <div className="text-center" data-animate="fade-up" data-delay="200">
              <div className="w-14 h-14 bg-brand-orange/10 text-brand-orange rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-title text-text-primary mb-3">
                {t('principles.fixedPrices.title')}
              </h3>
              <p className="text-text-secondary">
                {t('principles.fixedPrices.description')}
              </p>
            </div>
            <div className="text-center" data-animate="fade-up" data-delay="300">
              <div className="w-14 h-14 bg-brand-orange/10 text-brand-orange rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-title text-text-primary mb-3">
                {t('principles.flexible.title')}
              </h3>
              <p className="text-text-secondary">
                {t('principles.flexible.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="section-gray py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20" data-animate="blur-up">
            <h2 className="text-headline font-bold text-text-primary mb-6">
              {t('phases.title')}
            </h2>
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
              {t('phases.subtitle')}
            </p>
          </div>

          <div className="space-y-16">
            {phases.map((phase, index) => (
              <div
                key={phase.number}
                className="card"
                data-animate="fade-up"
                data-delay={String(index * 100)}
              >
                <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
                  {/* Phase Info */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-5xl font-bold text-brand-orange/20">
                        {phase.number}
                      </span>
                      <div>
                        <h3 className="text-title text-text-primary">
                          {t(`phases.${phase.key}.title`)}
                        </h3>
                        <span className="text-text-secondary">
                          {t(`phases.${phase.key}.duration`)}
                        </span>
                      </div>
                    </div>
                    <p className="text-text-secondary leading-relaxed">
                      {t(`phases.${phase.key}.description`)}
                    </p>
                  </div>

                  {/* Activities */}
                  <div>
                    <h4 className="font-semibold text-text-primary mb-4 text-sm uppercase tracking-wider">
                      {t('phases.activities')}
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-text-secondary">
                        <span className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                        {t(`phases.${phase.key}.activity1`)}
                      </li>
                      <li className="flex items-center gap-3 text-text-secondary">
                        <span className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                        {t(`phases.${phase.key}.activity2`)}
                      </li>
                      <li className="flex items-center gap-3 text-text-secondary">
                        <span className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                        {t(`phases.${phase.key}.activity3`)}
                      </li>
                      <li className="flex items-center gap-3 text-text-secondary">
                        <span className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                        {t(`phases.${phase.key}.activity4`)}
                      </li>
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h4 className="font-semibold text-text-primary mb-4 text-sm uppercase tracking-wider">
                      {t('phases.deliverables')}
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-text-secondary">
                        <svg className="w-4 h-4 text-brand-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {t(`phases.${phase.key}.deliverable1`)}
                      </li>
                      <li className="flex items-center gap-3 text-text-secondary">
                        <svg className="w-4 h-4 text-brand-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {t(`phases.${phase.key}.deliverable2`)}
                      </li>
                      <li className="flex items-center gap-3 text-text-secondary">
                        <svg className="w-4 h-4 text-brand-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {t(`phases.${phase.key}.deliverable3`)}
                      </li>
                      <li className="flex items-center gap-3 text-text-secondary">
                        <svg className="w-4 h-4 text-brand-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {t(`phases.${phase.key}.deliverable4`)}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* After Project */}
      <section className="section-light py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16" data-animate="blur-up">
            <h2 className="text-headline font-bold text-text-primary mb-6">
              {t('support.title')}
            </h2>
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
              {t('support.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* During Project */}
            <div className="card" data-animate="fade-up">
              <div className="w-12 h-12 bg-brand-orange/10 text-brand-orange rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-title text-text-primary mb-4">{t('support.during.title')}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-text-secondary">
                  <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t('support.during.point1')}
                </li>
                <li className="flex items-start gap-3 text-text-secondary">
                  <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t('support.during.point2')}
                </li>
                <li className="flex items-start gap-3 text-text-secondary">
                  <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t('support.during.point3')}
                </li>
                <li className="flex items-start gap-3 text-text-secondary">
                  <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t('support.during.point4')}
                </li>
              </ul>
            </div>

            {/* After Project */}
            <div className="card" data-animate="fade-up" data-delay="100">
              <div className="w-12 h-12 bg-brand-orange/10 text-brand-orange rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-title text-text-primary mb-4">{t('support.after.title')}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-text-secondary">
                  <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t('support.after.point1')}
                </li>
                <li className="flex items-start gap-3 text-text-secondary">
                  <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t('support.after.point2')}
                </li>
                <li className="flex items-start gap-3 text-text-secondary">
                  <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t('support.after.point3')}
                </li>
                <li className="flex items-start gap-3 text-text-secondary">
                  <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t('support.after.point4')}
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-text-muted mt-12 max-w-2xl mx-auto" data-animate="fade-up" data-delay="200">
            {t('support.note')}
          </p>
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
