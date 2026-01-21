'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { useState } from 'react'

type CategoryKey = 'all' | 'ai' | 'automation' | 'tools' | 'pipelines'

const projectKeys = [
  'aiVideo',
  'aiPhone',
  'stripeRefund',
  'carSupplier',
  'invoicing',
  'invoiceDistribution',
  'financialFolders',
  'volunteerTool',
  'salesPipeline',
] as const

const categoryColors: Record<CategoryKey, string> = {
  all: 'badge-orange',
  ai: 'badge-purple',
  automation: 'badge-orange',
  tools: 'badge-blue',
  pipelines: 'badge-green',
}

export default function ProjektePage() {
  const t = useTranslations('projects')
  const common = useTranslations('common')
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all')

  const categories: CategoryKey[] = ['all', 'ai', 'automation', 'tools', 'pipelines']

  const filteredProjects = projectKeys.filter((key) => {
    if (activeCategory === 'all') return true
    return t(`${key}.category`) === activeCategory
  })

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

      {/* Category Filter */}
      <section className="section-light py-8 border-b border-neutral-200 sticky top-[72px] z-40 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-neutral-900 text-white'
                    : 'bg-neutral-100 text-text-secondary hover:bg-neutral-200'
                }`}
              >
                {t(`categories.${category}`)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-light py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {filteredProjects.map((projectKey, index) => {
              const category = t(`${projectKey}.category`) as CategoryKey
              const tags = t.raw(`${projectKey}.tags`) as string[]

              return (
                <div
                  key={projectKey}
                  className="card"
                  data-animate="blur-up"
                  data-delay={String(index * 100)}
                >
                  <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className={`badge ${categoryColors[category] || 'badge-orange'}`}>
                          {t(`categories.${category}`)}
                        </span>
                        <span className="text-sm text-text-tertiary">
                          {t(`${projectKey}.industry`)}
                        </span>
                      </div>
                      <h2 className="text-headline font-bold text-text-primary mb-6">
                        {t(`${projectKey}.title`)}
                      </h2>
                      <p className="text-body-lg text-text-secondary leading-relaxed mb-8">
                        {t(`${projectKey}.description`)}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="px-4 py-1.5 bg-neutral-100 text-text-secondary text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-title text-text-primary mb-6">{common('results')}</h3>
                      <ul className="space-y-4">
                        {[1, 2, 3].map((num) => (
                          <li key={num} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-text-secondary text-lg">
                              {t(`${projectKey}.result${num}`)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-text-secondary text-lg">No projects found in this category.</p>
            </div>
          )}
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
            {common('cta.discussProject')}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
