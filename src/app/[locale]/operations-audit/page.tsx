import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { JsonLd, schemas } from '@/components/seo/JsonLd'

export default async function GrowthOpsTeardownPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'teardown' })

  const whatPoints = t.raw('what.points') as string[]
  const deliverableItems = t.raw('deliverable.items') as {
    title: string
    description: string
  }[]
  const howSteps = t.raw('how.steps') as {
    step: string
    title: string
    description: string
  }[]
  const guaranteeItems = t.raw('guarantee.items') as {
    title: string
    description: string
  }[]
  const faqItems = t.raw('faq.items') as { q: string; a: string }[]

  const teardownUrl = `https://z-flow.de/${locale}/operations-audit`

  return (
    <>
      <JsonLd
        data={schemas.service({
          name: 'Operations Audit',
          description: t('hero.subtitle'),
          url: teardownUrl,
          price: '2500',
        })}
      />
      <JsonLd
        data={schemas.faqPage(
          faqItems.map((item) => ({ question: item.q, answer: item.a }))
        )}
      />

      {/* ───────── Hero ───────── */}
      <section className="section-dark pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="glow-subtle top-1/3 -right-48" />
        <div className="glow-subtle bottom-1/4 -left-32" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="hero-animate hero-animate-1 badge badge-orange text-xs tracking-widest mb-8 inline-block">
              {t('hero.badge')}
            </span>
            <h1 className="hero-animate hero-animate-2 text-display font-bold text-white mb-8">
              {t('hero.title')}
            </h1>
            <p className="hero-animate hero-animate-3 text-body-lg text-white/60 leading-relaxed mb-10 max-w-2xl">
              {t('hero.subtitle')}
            </p>

            {/* Price chip */}
            <div className="hero-animate hero-animate-4 inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-4 mb-10">
              <div>
                <p className="text-white/40 text-xs font-medium uppercase tracking-wider">
                  {t('hero.priceLabel')}
                </p>
                <p className="text-brand-orange font-bold text-3xl">
                  {t('hero.price')}
                </p>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <p className="text-white/60 text-sm max-w-[12rem]">
                {t('hero.priceNote')}
              </p>
            </div>

            {/* CTAs */}
            <div className="hero-animate hero-animate-5 flex flex-col sm:flex-row gap-5">
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
              <Link
                href="/projects/prospectify"
                locale={locale}
                className="btn btn-secondary"
              >
                {t('hero.ctaSecondary')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── What it is ───────── */}
      <section className="section-light py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div data-animate="blur-up">
              <span className="badge badge-orange mb-6">{t('what.badge')}</span>
              <h2 className="text-headline font-bold text-text-primary mb-8">
                {t('what.title')}
              </h2>
              <p className="text-body-lg text-text-secondary leading-relaxed mb-10">
                {t('what.intro')}
              </p>
            </div>
            <ul className="space-y-4" data-animate="fade-up" data-delay="100">
              {whatPoints.map((point, index) => (
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

      {/* ───────── Deliverable ───────── */}
      <section className="section-gray py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16" data-animate="blur-up">
            <span className="badge badge-orange mb-6">
              {t('deliverable.badge')}
            </span>
            <h2 className="text-headline font-bold text-text-primary">
              {t('deliverable.title')}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {deliverableItems.map((item, index) => (
              <div
                key={index}
                className="card bg-white"
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

      {/* ───────── How it works ───────── */}
      <section className="section-light py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16" data-animate="blur-up">
            <span className="badge badge-orange mb-6">{t('how.badge')}</span>
            <h2 className="text-headline font-bold text-text-primary">
              {t('how.title')}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howSteps.map((step, index) => (
              <div
                key={index}
                data-animate="fade-up"
                data-delay={String((index + 1) * 100)}
              >
                <p className="text-brand-orange font-bold text-3xl mb-4">
                  {step.step}
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

      {/* ───────── Guarantee ───────── */}
      <section className="section-gray py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16" data-animate="blur-up">
            <span className="badge badge-orange mb-6">
              {t('guarantee.badge')}
            </span>
            <h2 className="text-headline font-bold text-text-primary">
              {t('guarantee.title')}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {guaranteeItems.map((item, index) => (
              <div
                key={index}
                className="card bg-white border-l-4 border-l-brand-orange"
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

      {/* ───────── Proof ───────── */}
      <section className="section-dark py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="glow-subtle top-1/2 left-1/4 -translate-y-1/2" />
        <div
          className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center"
          data-animate="blur-up"
        >
          <svg
            className="w-12 h-12 text-brand-orange/40 mx-auto mb-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
          </svg>
          <blockquote className="text-2xl lg:text-3xl font-medium text-white leading-relaxed mb-10">
            “{t('proof.quote')}”
          </blockquote>
          <Link
            href="/projects"
            locale={locale}
            className="text-brand-orange font-medium inline-flex items-center gap-2 hover:gap-3 transition-all duration-500"
          >
            {t('proof.linkLabel')}
          </Link>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="section-gray py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-16" data-animate="blur-up">
            <span className="badge badge-orange mb-6">{t('faq.badge')}</span>
            <h2 className="text-headline font-bold text-text-primary">
              {t('faq.title')}
            </h2>
          </div>
          <div className="space-y-8">
            {faqItems.map((item, index) => (
              <div
                key={index}
                data-animate="fade-up"
                data-delay={String((index + 1) * 100)}
              >
                <h3 className="text-title text-text-primary mb-3">{item.q}</h3>
                <p className="text-text-secondary leading-relaxed text-lg">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="section-light py-32 lg:py-44">
        <div
          className="mx-auto max-w-7xl px-6 lg:px-8 text-center"
          data-animate="scale-up"
        >
          <h2 className="text-headline lg:text-display font-bold text-text-primary mb-8">
            {t('cta.title')}
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto mb-12">
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
