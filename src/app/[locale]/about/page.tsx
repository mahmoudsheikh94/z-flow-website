'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export default function AboutPage() {
  const t = useTranslations('about')
  const common = useTranslations('common')

  const values = [
    { key: 'speed', title: t('values.speed.title'), description: t('values.speed.description') },
    { key: 'transparency', title: t('values.transparency.title'), description: t('values.transparency.description') },
    { key: 'ownership', title: t('values.ownership.title'), description: t('values.ownership.description') },
    { key: 'pragmatism', title: t('values.pragmatism.title'), description: t('values.pragmatism.description') },
  ]

  const networkBenefits = [
    t('network.benefit1'),
    t('network.benefit2'),
    t('network.benefit3'),
    t('network.benefit4'),
  ]

  const networkRoles = [
    t('network.role1'),
    t('network.role2'),
    t('network.role3'),
    t('network.role4'),
    t('network.role5'),
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

      {/* Story */}
      <section className="section-light py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div data-animate="blur-up">
              <h2 className="text-headline font-bold text-text-primary mb-8">
                {t('story.title')}
              </h2>
              <div className="space-y-6 text-body-lg text-text-secondary leading-relaxed">
                <p>{t('story.p1')}</p>
                <p>{t('story.p2')}</p>
                <p>{t('story.p3')}</p>
              </div>
            </div>

            <div className="card bg-neutral-50" data-animate="fade-up" data-delay="100">
              <h3 className="text-title text-text-primary mb-8">{t('team.title')}</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-semibold text-text-primary">{t('team.mahmoud.name')}</h4>
                  <p className="text-text-secondary">{t('team.mahmoud.role')}</p>
                </div>
              </div>
              <div className="mt-10 pt-8 border-t border-neutral-200">
                <p className="text-text-secondary">
                  <strong className="text-text-primary">{t('team.location')}:</strong> Berlin, Deutschland
                </p>
                <p className="text-text-secondary mt-3">
                  <strong className="text-text-primary">{t('team.contact')}:</strong>{' '}
                  <a href="mailto:hello@z-flow.de" className="text-brand-orange hover:underline">
                    hello@z-flow.de
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Network Model */}
      <section className="section-gray py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20" data-animate="blur-up">
            <h2 className="text-headline font-bold text-text-primary mb-6">
              {t('network.title')}
            </h2>
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
              {t('network.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            <div data-animate="fade-up">
              <h3 className="text-title text-text-primary mb-6">
                {t('network.benefitsTitle')}
              </h3>
              <ul className="space-y-4">
                {networkBenefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-secondary text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div data-animate="fade-up" data-delay="100">
              <h3 className="text-title text-text-primary mb-6">
                {t('network.networkTitle')}
              </h3>
              <div className="flex flex-wrap gap-3">
                {networkRoles.map((role) => (
                  <span
                    key={role}
                    className="px-5 py-2.5 bg-white text-text-secondary rounded-xl shadow-sm"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-light py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20" data-animate="blur-up">
            <h2 className="text-headline font-bold text-text-primary mb-6">
              {t('values.title')}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.key}
                data-animate="fade-up"
                data-delay={String((index % 2) * 100)}
              >
                <h3 className="text-title text-text-primary mb-4">
                  {value.title}
                </h3>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {value.description}
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
            {common('cta.getInTouch')}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
