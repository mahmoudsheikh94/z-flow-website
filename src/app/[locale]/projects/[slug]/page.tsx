import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { notFound } from 'next/navigation'
import { projects, getProjectBySlug, getRelatedProjects } from '@/data/projects'
import { getTestimonialById } from '@/data/testimonials'
import { JsonLd, schemas } from '@/components/seo/JsonLd'
import type { Metadata } from 'next'
import type { ProjectCategory } from '@/data/projects'
import { locales } from '@/i18n/routing'

const categoryBadgeColor: Record<ProjectCategory, string> = {
  digitalization: 'badge-orange',
  software: 'badge-blue',
  ai: 'badge-purple',
  automation: 'badge-green',
}

export async function generateStaticParams() {
  const params: { slug: string; locale: string }[] = []
  for (const locale of locales) {
    for (const project of projects) {
      params.push({ slug: project.slug, locale })
    }
  }
  return params
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}

  const t = await getTranslations({ locale, namespace: 'projectDetails' })
  const baseUrl = 'https://z-flow.de'

  return {
    title: t(`${slug}.title`),
    description: t(`${slug}.subtitle`),
    openGraph: {
      title: t(`${slug}.title`),
      description: t(`${slug}.subtitle`),
      url: `${baseUrl}/${locale}/projects/${slug}`,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/projects/${slug}`,
      languages: {
        de: `${baseUrl}/de/projects/${slug}`,
        en: `${baseUrl}/en/projects/${slug}`,
      },
    },
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const t = await getTranslations({ locale, namespace: 'projectDetails' })
  const common = await getTranslations({ locale, namespace: 'projectDetails.common' })
  const commonNav = await getTranslations({ locale, namespace: 'common' })

  const painPoints = t.raw(`${slug}.challenge.painPoints`) as string[]
  const metrics = t.raw(`${slug}.results.metrics`) as {
    label: string
    before: string
    after: string
    improvement: string
  }[]
  const takeaways = t.raw(`${slug}.results.takeaways`) as string[]
  const relatedProjects = getRelatedProjects(slug)

  // Optional case-study enrichment fields (only render when present)
  const forWhom = t.has(`${slug}.forWhom`) ? t(`${slug}.forWhom`) : null
  const deliveryModel = t.has(`${slug}.deliveryModel`)
    ? t(`${slug}.deliveryModel`)
    : null
  const testimonial = project.testimonialId
    ? getTestimonialById(project.testimonialId)
    : undefined
  const testimonialQuote = testimonial
    ? locale === 'de'
      ? testimonial.quote_de
      : testimonial.quote_en
    : null

  return (
    <>
      <JsonLd
        data={schemas.breadcrumb([
          { name: 'Projects', url: `https://z-flow.de/${locale}/projects` },
          {
            name: t(`${slug}.title`),
            url: `https://z-flow.de/${locale}/projects/${slug}`,
          },
        ])}
      />
      <JsonLd
        data={schemas.webPage({
          name: t(`${slug}.title`),
          description: t(`${slug}.subtitle`),
          url: `https://z-flow.de/${locale}/projects/${slug}`,
          locale,
        })}
      />

      {/* ───────── Hero ───────── */}
      <section className="section-dark pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="glow-subtle top-1/3 -right-48" />
        <div className="glow-subtle bottom-1/4 -left-32" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/projects"
            locale={locale}
            className="hero-animate hero-animate-1 inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-10"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {common('backToProjects')}
          </Link>

          <div className="max-w-4xl">
            {/* Category badge */}
            <div className="hero-animate hero-animate-1 mb-6">
              <span
                className={`badge ${categoryBadgeColor[project.category]} text-xs tracking-widest`}
              >
                {t(`${slug}.industry`)}
              </span>
            </div>

            {/* Title */}
            <h1 className="hero-animate hero-animate-2 text-display font-bold text-white mb-6">
              {t(`${slug}.title`)}
            </h1>

            {/* Subtitle */}
            <p className="hero-animate hero-animate-3 text-body-lg text-white/60 leading-relaxed max-w-3xl mb-8">
              {t(`${slug}.subtitle`)}
            </p>

            {/* For-whom chip + delivery model (optional) */}
            {(forWhom || deliveryModel) && (
              <div className="hero-animate hero-animate-3 flex flex-col sm:flex-row sm:items-center gap-3 mb-12">
                {forWhom && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-4 py-2 text-sm font-medium text-brand-orange">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4z"
                      />
                    </svg>
                    {forWhom}
                  </span>
                )}
                {deliveryModel && (
                  <span className="text-sm text-white/50">{deliveryModel}</span>
                )}
              </div>
            )}

            {/* Quick Facts */}
            <div className="hero-animate hero-animate-4 grid grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Industry */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
                <p className="text-white/40 text-sm font-medium uppercase tracking-wider mb-2">
                  {common('industry')}
                </p>
                <p className="text-white font-semibold text-lg">
                  {t(`${slug}.industry`)}
                </p>
              </div>

              {/* Timeline */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
                <p className="text-white/40 text-sm font-medium uppercase tracking-wider mb-2">
                  {common('timeline')}
                </p>
                <p className="text-white font-semibold text-lg">
                  {project.timeline}
                </p>
              </div>

              {/* Key Metric */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
                <p className="text-white/40 text-sm font-medium uppercase tracking-wider mb-2">
                  {common('keyMetric')}
                </p>
                <p className="text-brand-orange font-bold text-lg">
                  {t(`${slug}.keyMetric`)}
                </p>
              </div>

              {/* Status */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
                <p className="text-white/40 text-sm font-medium uppercase tracking-wider mb-2">
                  {common('status')}
                </p>
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      project.status === 'live'
                        ? 'bg-emerald-400 animate-pulse'
                        : 'bg-brand-orange'
                    }`}
                  />
                  <p className="text-white font-semibold text-lg">
                    {project.status === 'live'
                      ? common('statusLive')
                      : common('statusBuilt')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Challenge ───────── */}
      <section className="section-light py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div data-animate="blur-up">
              <span className="badge badge-orange mb-6">
                {common('challengeTitle')}
              </span>
              <h2 className="text-headline font-bold text-text-primary mb-8">
                {common('challengeTitle')}
              </h2>
              <p className="text-body-lg text-text-secondary leading-relaxed mb-10">
                {t(`${slug}.challenge.intro`)}
              </p>
            </div>

            <ul className="space-y-4" data-animate="fade-up" data-delay="100">
              {painPoints.map((point, index) => (
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

      {/* ───────── Solution ───────── */}
      <section className="section-gray py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div data-animate="blur-up">
              <span className="badge badge-orange mb-6">
                {common('solutionTitle')}
              </span>
              <h2 className="text-headline font-bold text-text-primary mb-8">
                {common('solutionTitle')}
              </h2>
              <p className="text-body-lg text-text-secondary leading-relaxed mb-12">
                {t(`${slug}.solution.intro`)}
              </p>
            </div>

            <div
              className="card bg-white"
              data-animate="fade-up"
              data-delay="100"
            >
              <h3 className="text-title text-text-primary mb-4 flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-brand-orange"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                {common('approachTitle')}
              </h3>
              <p className="text-text-secondary text-lg leading-relaxed">
                {t(`${slug}.solution.approach`)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Results ───────── */}
      <section className="section-light py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16" data-animate="blur-up">
            <span className="badge badge-orange mb-6">
              {common('resultsTitle')}
            </span>
            <h2 className="text-headline font-bold text-text-primary">
              {common('resultsTitle')}
            </h2>
          </div>

          {/* Metrics Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="card group hover:border-brand-orange/20 transition-colors"
                data-animate="fade-up"
                data-delay={String((index + 1) * 100)}
              >
                <p className="text-text-muted text-sm font-medium uppercase tracking-wider mb-4">
                  {metric.label}
                </p>

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-text-secondary line-through text-lg">
                    {metric.before}
                  </span>
                  <svg
                    className="w-5 h-5 text-brand-orange flex-shrink-0"
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
                  <span className="text-text-primary font-bold text-xl">
                    {metric.after}
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-sm font-semibold">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                  {metric.improvement}
                </div>
              </div>
            ))}
          </div>

          {/* Takeaways */}
          <div className="max-w-3xl mx-auto" data-animate="fade-up">
            <h3 className="text-title text-text-primary mb-6">
              {common('takeawaysTitle')}
            </h3>
            <ul className="space-y-4">
              {takeaways.map((takeaway, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-text-secondary text-lg leading-relaxed">
                    {takeaway}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────── Testimonial ───────── */}
      {testimonial && testimonialQuote && (
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
              “{testimonialQuote}”
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="text-left">
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-white/50 text-sm">
                  {testimonial.role} · {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ───────── Tech Stack ───────── */}
      <section className="section-gray py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12" data-animate="blur-up">
            <h2 className="text-headline font-bold text-text-primary">
              {common('techStackTitle')}
            </h2>
          </div>

          <div
            className="flex flex-wrap justify-center gap-4"
            data-animate="fade-up"
            data-delay="100"
          >
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-6 py-3 bg-white text-text-primary font-medium rounded-xl shadow-sm border border-neutral-200 hover:border-brand-orange/30 hover:shadow-md transition-all duration-300 text-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Related Projects ───────── */}
      {relatedProjects.length > 0 && (
        <section className="section-light py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16" data-animate="blur-up">
              <h2 className="text-headline font-bold text-text-primary">
                {common('relatedTitle')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.slice(0, 3).map((related, index) => (
                <Link
                  key={related.slug}
                  href={`/projects/${related.slug}`}
                  locale={locale}
                  className="card group"
                  data-animate="fade-up"
                  data-delay={String((index + 1) * 100)}
                >
                  <div className="mb-4">
                    <span
                      className={`badge ${categoryBadgeColor[related.category]}`}
                    >
                      {t(`${related.slug}.industry`)}
                    </span>
                  </div>

                  <h3 className="text-title text-text-primary mb-3 group-hover:text-brand-orange transition-colors">
                    {t(`${related.slug}.title`)}
                  </h3>

                  <p className="text-text-secondary mb-6 line-clamp-2 leading-relaxed">
                    {t(`${related.slug}.subtitle`)}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {related.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-neutral-100 text-text-muted text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {related.stack.length > 3 && (
                      <span className="px-3 py-1 bg-neutral-100 text-text-muted text-sm rounded-full">
                        +{related.stack.length - 3}
                      </span>
                    )}
                  </div>

                  <span className="text-brand-orange font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-500 text-sm">
                    {commonNav('cta.learnMore')}
                    <svg
                      className="w-4 h-4"
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
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───────── CTA ───────── */}
      <section className="section-dark py-32 lg:py-44 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="glow-subtle top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <div
          className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center"
          data-animate="scale-up"
        >
          <h2 className="text-headline lg:text-display font-bold text-white mb-8">
            {common('ctaTitle')}
          </h2>
          <p className="text-body-lg text-white/60 max-w-2xl mx-auto mb-12">
            {common('ctaSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/contact" locale={locale} className="btn btn-primary">
              {commonNav('cta.discussProject')}
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
            <Link href="/pricing" locale={locale} className="btn btn-secondary">
              {commonNav('cta.viewPricing')}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
