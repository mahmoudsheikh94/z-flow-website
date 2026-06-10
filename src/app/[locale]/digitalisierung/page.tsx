import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { JsonLd, schemas } from '@/components/seo/JsonLd'

export default async function DigitalisierungPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'digitalisierung' })

  const pains = t.raw('pains.items') as string[]
  const approachSteps = t.raw('approach.steps') as {
    title: string
    description: string
  }[]
  const trustItems = t.raw('trust.items') as {
    title: string
    description: string
  }[]

  return (
    <>
      <JsonLd
        data={schemas.service({
          name: 'Digitalisierung für den Mittelstand',
          description: t('hero.subtitle'),
          url: `https://z-flow.de/${locale}/digitalisierung`,
          price: '1500',
        })}
      />

      {/* ───────── Hero ───────── */}
      <section className="section-dark pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="glow-subtle top-1/3 -right-48" />
        <div className="glow-subtle bottom-1/4 -left-32" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="hero-animate hero-animate-1 badge badge-dark text-xs tracking-widest mb-8 inline-block">
              {t('hero.badge')}
            </span>
            <h1 className="hero-animate hero-animate-2 text-display font-bold text-white mb-8">
              {t('hero.title')}
            </h1>
            <p className="hero-animate hero-animate-3 text-body-lg text-white/60 leading-relaxed mb-10 max-w-2xl">
              {t('hero.subtitle')}
            </p>
            <div className="hero-animate hero-animate-4 flex flex-col sm:flex-row gap-5">
              <Link href="/contact" locale={locale} className="btn btn-primary">
                {t('hero.ctaPrimary')}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <a href="#approach" className="btn btn-secondary">
                {t('hero.ctaSecondary')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Pains ───────── */}
      <section className="section-light py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div data-animate="blur-up">
              <span className="badge badge-orange mb-6">{t('pains.badge')}</span>
              <h2 className="text-headline font-bold text-text-primary mb-8">
                {t('pains.title')}
              </h2>
            </div>
            <ul className="space-y-4" data-animate="fade-up" data-delay="100">
              {pains.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="mt-2.5 w-2 h-2 rounded-full bg-brand-orange flex-shrink-0" />
                  <span className="text-text-secondary text-lg leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────── Approach ───────── */}
      <section id="approach" className="section-gray py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16" data-animate="blur-up">
            <span className="badge badge-orange mb-6">{t('approach.badge')}</span>
            <h2 className="text-headline font-bold text-text-primary mb-6">
              {t('approach.title')}
            </h2>
            <p className="text-body-lg text-text-secondary leading-relaxed">
              {t('approach.intro')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {approachSteps.map((step, index) => (
              <div
                key={index}
                className="card bg-white"
                data-animate="fade-up"
                data-delay={String((index + 1) * 100)}
              >
                <p className="text-brand-orange font-bold text-3xl mb-4">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="text-title text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Trust ───────── */}
      <section className="section-light py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16" data-animate="blur-up">
            <span className="badge badge-orange mb-6">{t('trust.badge')}</span>
            <h2 className="text-headline font-bold text-text-primary">
              {t('trust.title')}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {trustItems.map((item, index) => (
              <div
                key={index}
                data-animate="fade-up"
                data-delay={String((index + 1) * 100)}
              >
                <h3 className="text-title text-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="section-dark py-32 lg:py-44 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="glow-subtle top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div
          className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center"
          data-animate="scale-up"
        >
          <h2 className="text-headline lg:text-display font-bold text-white mb-8">
            {t('cta.title')}
          </h2>
          <p className="text-body-lg text-white/60 max-w-2xl mx-auto mb-12">
            {t('cta.subtitle')}
          </p>
          <Link href="/contact" locale={locale} className="btn btn-primary">
            {t('cta.button')}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
