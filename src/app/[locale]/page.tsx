import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'

const tools = [
  { name: 'n8n', category: 'Automation', logo: '/images/N8N.Io_idQ-KxEpHW_1.svg' },
  { name: 'Make.com', category: 'Automation', logo: '/images/make-color.svg' },
  { name: 'WeWeb', category: 'No-Code Frontend', logo: '/images/weweb-logo-wordmark-square-black.svg' },
  { name: 'Xano', category: 'No-Code Backend', logo: '/images/Xano_idwFIbN61u_1.svg' },
  { name: 'Supabase', category: 'Database & Auth', logo: '/images/supabase-logo-icon.svg' },
  { name: 'Airtable', category: 'Data Management', logo: '/images/Airtable_idksKOtgp1_0.svg' },
  { name: 'Claude Code', category: 'AI Development', logo: '/images/claude-color.svg' },
]

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'home' })
  const common = await getTranslations({ locale, namespace: 'common' })

  const services = [
    {
      title: t('services.mvp.title'),
      description: t('services.mvp.description'),
      href: '/services/mvp-development' as const,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: t('services.automation.title'),
      description: t('services.automation.description'),
      href: '/services/automation' as const,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      title: t('services.ai.title'),
      description: t('services.ai.description'),
      href: '/services/ai-integration' as const,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

  const processSteps = [
    {
      number: '01',
      title: t('process.step1.title'),
      description: t('process.step1.description'),
    },
    {
      number: '02',
      title: t('process.step2.title'),
      description: t('process.step2.description'),
    },
    {
      number: '03',
      title: t('process.step3.title'),
      description: t('process.step3.description'),
    },
  ]

  const trustSignals = [
    t('trustSignals.transparentPricing'),
    t('trustSignals.fullDocumentation'),
    t('trustSignals.noVendorLockIn'),
    t('trustSignals.germanQuality'),
  ]

  const supportPoints = [
    t('support.point1'),
    t('support.point2'),
    t('support.point3'),
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center section-dark overflow-hidden">
        {/* Background Effects - More subtle */}
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="glow-subtle top-1/3 left-1/4 -translate-x-1/2" />
        <div className="glow-subtle bottom-1/3 right-1/4 translate-x-1/2" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-0">
          <div className="max-w-3xl lg:max-w-4xl">
            {/* Badge */}
            <div className="hero-animate hero-animate-1 mb-6">
              <span className="badge badge-dark text-xs tracking-widest">
                {common('badges.engineeringStudio')}
              </span>
            </div>

            {/* Headline - Much larger with text-display */}
            <h1 className="hero-animate hero-animate-2 text-display font-bold tracking-tight mb-8">
              <span className="gradient-text">{t('hero.tagline')}</span>
              <br />
              <span className="text-white">{t('hero.headline')}</span>
            </h1>

            {/* Subheadline - More breathing room */}
            <p className="hero-animate hero-animate-3 text-body-lg text-white/60 max-w-xl mb-12 leading-relaxed">
              {t('hero.subheadline')}
            </p>

            {/* CTAs - More space */}
            <div className="hero-animate hero-animate-4 flex flex-col sm:flex-row gap-5">
              <Link href="/contact" className="btn btn-primary">
                {common('cta.discussProject')}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/projects" className="btn btn-secondary">
                {common('cta.viewProjects')}
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="hero-animate hero-animate-5 mt-20 flex flex-wrap gap-x-8 gap-y-4">
              {trustSignals.map((signal) => (
                <div key={signal} className="flex items-center gap-2 text-white/40 text-sm">
                  <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {signal}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-light py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20" data-animate="blur-up">
            <span className="badge badge-orange mb-6">{t('services.badge')}</span>
            <h2 className="text-headline font-bold text-text-primary mb-6">
              {t('services.title')}
            </h2>
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className="card group"
                data-animate="fade-up"
                data-delay={String((index + 1) * 100)}
              >
                <div className="text-brand-orange mb-8 transition-transform duration-500 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-title text-text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>
                <span className="text-brand-orange font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-500">
                  {common('cta.learnMore')}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-gray py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20" data-animate="blur-up">
            <span className="badge badge-orange mb-6">{t('process.badge')}</span>
            <h2 className="text-headline font-bold text-text-primary mb-6">
              {t('process.title')}
            </h2>
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
              {t('process.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className="relative"
                data-animate="fade-up"
                data-delay={String((index + 1) * 100)}
              >
                <div className="text-7xl lg:text-8xl font-bold text-brand-orange/10 mb-6">
                  {step.number}
                </div>
                <h3 className="text-title text-text-primary mb-4">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16" data-animate="fade-up" data-delay="400">
            <Link href="/process" className="btn btn-outline">
              {t('process.detailCta')}
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-light py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16" data-animate="blur-up">
            <span className="badge badge-orange mb-6">{t('tools.badge')}</span>
            <h2 className="text-headline font-bold text-text-primary mb-6">
              {t('tools.title')}
            </h2>
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
              {t('tools.subtitle')}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 lg:gap-6" data-animate="fade-up">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="group flex items-center gap-4 px-6 py-4 bg-neutral-50 rounded-2xl border border-neutral-200 hover:border-brand-orange/30 hover:bg-white transition-all duration-300"
              >
                {tool.logo ? (
                  <Image
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center">
                    <span className="text-brand-orange font-bold text-sm">
                      {tool.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <div className="text-lg font-semibold text-text-primary group-hover:text-brand-orange transition-colors">
                    {tool.name}
                  </div>
                  <div className="text-sm text-text-muted">
                    {tool.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="section-gray py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16" data-animate="fade-up">
            <h3 className="text-title font-semibold text-text-primary text-center md:text-left">
              {t('support.title')}
            </h3>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {supportPoints.map((point) => (
                <div key={point} className="flex items-center gap-2 text-text-secondary">
                  <svg className="w-5 h-5 text-brand-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-dark py-32 lg:py-44 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="glow-subtle top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div data-animate="scale-up">
            <h2 className="text-headline lg:text-display font-bold text-white mb-8">
              {t('cta.title')}
            </h2>
            <p className="text-body-lg text-white/60 max-w-2xl mx-auto mb-12">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/contact" className="btn btn-primary">
                {common('cta.freeConsultation')}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/pricing" className="btn btn-secondary">
                {common('cta.viewPricing')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
