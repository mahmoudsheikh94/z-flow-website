import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { Metadata } from 'next'
import { JsonLd, schemas } from '@/components/seo/JsonLd'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata.companyBrain' })
  const baseUrl = 'https://z-flow.de'

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${baseUrl}/${locale}/company-brain`,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/company-brain`,
      languages: {
        de: `${baseUrl}/de/company-brain`,
        en: `${baseUrl}/en/company-brain`,
      },
    },
  }
}

const dimensions = ['output', 'collaboration', 'knowledge', 'growth', 'leadership'] as const

const integrations = [
  { key: 'github', icon: '⌥' },
  { key: 'slack', icon: '💬' },
  { key: 'jira', icon: '📋' },
  { key: 'confluence', icon: '📖' },
  { key: 'google', icon: '📧' },
  { key: 'linear', icon: '🔷' },
] as const

export default async function CompanyBrainPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'companyBrain' })
  const common = await getTranslations({ locale, namespace: 'common' })

  const faqData = [
    { question: t('faq.q1.question'), answer: t('faq.q1.answer') },
    { question: t('faq.q2.question'), answer: t('faq.q2.answer') },
    { question: t('faq.q3.question'), answer: t('faq.q3.answer') },
    { question: t('faq.q4.question'), answer: t('faq.q4.answer') },
    { question: t('faq.q5.question'), answer: t('faq.q5.answer') },
  ]

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Company Brain',
    applicationCategory: 'BusinessApplication',
    description: t('hero.subtitle'),
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'EUR',
    },
    provider: {
      '@type': 'Organization',
      name: 'Z-Flow',
      url: 'https://z-flow.de',
    },
  }

  return (
    <>
      <JsonLd data={softwareSchema} />
      <JsonLd data={schemas.faqPage(faqData)} />

      {/* Hero */}
      <section className="section-dark pt-32 pb-24 lg:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="glow-subtle top-1/3 left-1/4 -translate-x-1/2" />
        <div className="glow-subtle bottom-1/3 right-1/4 translate-x-1/2" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="hero-animate hero-animate-1 mb-6">
              <span className="badge badge-orange text-xs tracking-widest">
                {t('hero.badge')}
              </span>
            </div>
            <h1 className="hero-animate hero-animate-2 text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              {t('hero.title')}
            </h1>
            <p className="hero-animate hero-animate-3 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="hero-animate hero-animate-4 flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/contact" locale={locale} className="btn btn-primary">
                {t('hero.cta1')}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a href="#how-it-works" className="btn btn-secondary">
                {t('hero.cta2')}
              </a>
            </div>
          </div>

          {/* Dashboard mockup */}
          <div className="hero-animate hero-animate-5 mt-16 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 lg:p-8">
              <div className="grid grid-cols-5 gap-4">
                {dimensions.map((dim) => {
                  const score = parseInt(t(`dimensions.${dim}.score`))
                  return (
                    <div key={dim} className="text-center">
                      <div className="relative w-16 h-16 mx-auto mb-3">
                        <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
                          <circle cx="32" cy="32" r="28" fill="none" stroke="white" strokeOpacity="0.1" strokeWidth="4" />
                          <circle
                            cx="32" cy="32" r="28" fill="none"
                            stroke="#ee4f27" strokeWidth="4" strokeLinecap="round"
                            strokeDasharray={`${(score / 100) * 175.93} 175.93`}
                          />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
                          {score}
                        </span>
                      </div>
                      <span className="text-white/60 text-xs font-medium">
                        {t(`dimensions.${dim}.title`)}
                      </span>
                    </div>
                  )
                })}
              </div>
              <div className="mt-6 flex justify-center gap-6 text-white/40 text-xs">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  {locale === 'de' ? 'Steigend' : 'Rising'}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-yellow-400" />
                  {locale === 'de' ? 'Stabil' : 'Stable'}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white/30" />
                  {locale === 'de' ? 'Rückläufig' : 'Declining'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="section-light py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16" data-animate="blur-up">
            <span className="badge badge-orange mb-6">{t('problem.badge')}</span>
            <h2 className="text-headline font-bold text-text-primary mb-6">
              {t('problem.title')}
            </h2>
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
              {t('problem.subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {(['card1', 'card2', 'card3', 'card4'] as const).map((card, index) => (
              <div
                key={card}
                className="card"
                data-animate="fade-up"
                data-delay={String((index % 2) * 100)}
              >
                <h3 className="text-title text-text-primary mb-3">
                  {t(`problem.${card}.title`)}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {t(`problem.${card}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section-gray py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16" data-animate="blur-up">
            <span className="badge badge-orange mb-6">{t('howItWorks.badge')}</span>
            <h2 className="text-headline font-bold text-text-primary mb-6">
              {t('howItWorks.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {(['step1', 'step2', 'step3'] as const).map((step, index) => (
              <div
                key={step}
                className="relative"
                data-animate="fade-up"
                data-delay={String((index + 1) * 100)}
              >
                <div className="text-7xl font-bold text-brand-orange/10 mb-4">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-title text-text-primary mb-3">
                  {t(`howItWorks.${step}.title`)}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {t(`howItWorks.${step}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Dimensions */}
      <section className="section-light py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16" data-animate="blur-up">
            <span className="badge badge-orange mb-6">{t('dimensions.badge')}</span>
            <h2 className="text-headline font-bold text-text-primary mb-6">
              {t('dimensions.title')}
            </h2>
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
              {t('dimensions.subtitle')}
            </p>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {dimensions.map((dim, index) => {
              const score = parseInt(t(`dimensions.${dim}.score`))
              return (
                <div
                  key={dim}
                  className="bg-white rounded-xl border border-neutral-200 p-6"
                  data-animate="fade-up"
                  data-delay={String((index + 1) * 80)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-text-primary">
                      {t(`dimensions.${dim}.title`)}
                    </h3>
                    <span className="text-2xl font-bold text-brand-orange">{score}</span>
                  </div>
                  <div className="w-full bg-neutral-100 rounded-full h-2 mb-3">
                    <div
                      className="bg-brand-orange rounded-full h-2 transition-all duration-1000"
                      style={{ width: `${score}%` }}
                    />
                  </div>
                  <p className="text-text-secondary text-sm">
                    {t(`dimensions.${dim}.description`)}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="section-gray py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16" data-animate="blur-up">
            <span className="badge badge-orange mb-6">{t('integrations.badge')}</span>
            <h2 className="text-headline font-bold text-text-primary mb-6">
              {t('integrations.title')}
            </h2>
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
              {t('integrations.subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {integrations.map((integration, index) => (
              <div
                key={integration.key}
                className="bg-white rounded-xl border border-neutral-200 p-6 hover:border-brand-orange/30 transition-colors"
                data-animate="fade-up"
                data-delay={String((index % 3) * 100)}
              >
                <div className="text-3xl mb-3">{integration.icon}</div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {t(`integrations.${integration.key}.title`)}
                </h3>
                <p className="text-text-secondary text-sm">
                  {t(`integrations.${integration.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="section-dark py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16" data-animate="blur-up">
            <span className="badge badge-dark text-xs tracking-widest mb-6">{t('privacy.badge')}</span>
            <h2 className="text-headline font-bold text-white mb-6">
              {t('privacy.title')}
            </h2>
            <p className="text-body-lg text-white/60 max-w-2xl mx-auto">
              {t('privacy.subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {(['point1', 'point2', 'point3', 'point4'] as const).map((point, index) => (
              <div
                key={point}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6"
                data-animate="fade-up"
                data-delay={String((index % 2) * 100)}
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {t(`privacy.${point}.title`)}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {t(`privacy.${point}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="section-light py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16" data-animate="blur-up">
            <span className="badge badge-orange mb-6">{t('audience.badge')}</span>
            <h2 className="text-headline font-bold text-text-primary mb-6">
              {t('audience.title')}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {(['engineering', 'cto', 'hr', 'coo'] as const).map((role, index) => (
              <div
                key={role}
                className="card"
                data-animate="fade-up"
                data-delay={String((index % 2) * 100)}
              >
                <h3 className="text-title text-text-primary mb-3">
                  {t(`audience.roles.${role}.title`)}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {t(`audience.roles.${role}.description`)}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-text-muted mt-8" data-animate="fade-up" data-delay="200">
            {t('audience.teamSize')}
          </p>
        </div>
      </section>

      {/* Deployment */}
      <section className="section-gray py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16" data-animate="blur-up">
            <span className="badge badge-orange mb-6">{t('deployment.badge')}</span>
            <h2 className="text-headline font-bold text-text-primary mb-6">
              {t('deployment.title')}
            </h2>
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
              {t('deployment.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {(['point1', 'point2', 'point3'] as const).map((point, index) => (
              <div
                key={point}
                data-animate="fade-up"
                data-delay={String((index + 1) * 100)}
              >
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  {t(`deployment.${point}.title`)}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {t(`deployment.${point}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-light py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16" data-animate="blur-up">
            <span className="badge badge-orange mb-6">{t('faq.badge')}</span>
            <h2 className="text-headline font-bold text-text-primary mb-6">
              {t('faq.title')}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-neutral-200 p-6"
                data-animate="fade-up"
                data-delay={String((index + 1) * 80)}
              >
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  {faq.question}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {faq.answer}
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
          <h2 className="text-headline lg:text-display font-bold text-white mb-8">
            {t('cta.title')}
          </h2>
          <p className="text-body-lg text-white/60 max-w-2xl mx-auto mb-12">
            {t('cta.subtitle')}
          </p>
          <Link href="/contact" locale={locale} className="btn btn-primary">
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
