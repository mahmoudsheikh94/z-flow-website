'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { useState } from 'react'
import { projects, type ProjectCategory } from '@/data/projects'
import { BrowserMockup } from '@/components/ui/BrowserMockup'

type FilterKey = 'all' | ProjectCategory

const categoryBadgeColor: Record<ProjectCategory, string> = {
  digitalization: 'badge-orange',
  software: 'badge-blue',
  ai: 'badge-purple',
  automation: 'badge-green',
}

export default function ProjectsPage() {
  const t = useTranslations('projects')
  const common = useTranslations('common')
  const [activeCategory, setActiveCategory] = useState<FilterKey>('all')

  const categories: FilterKey[] = ['all', 'software', 'digitalization', 'ai', 'automation']

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'all') return true
    return project.category === activeCategory
  })

  const featuredProject = filteredProjects.find((p) => p.featured)
  const regularProjects = filteredProjects.filter((p) => !p.featured || activeCategory !== 'all')

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

      {/* Featured Project */}
      {featuredProject && activeCategory === 'all' && (
        <section className="section-light pt-16 pb-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Link
              href={`/projects/${featuredProject.slug}`}
              className="card group block"
            >
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                <div className="order-2 lg:order-1">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className={`badge ${categoryBadgeColor[featuredProject.category]}`}>
                      {t(`categories.${featuredProject.category}`)}
                    </span>
                    <span className="text-sm text-text-tertiary">
                      {t(`${featuredProject.slug}.industry`)}
                    </span>
                    {featuredProject.status === 'built' && (
                      <span className="badge badge-dark text-xs">Built by Z-Flow</span>
                    )}
                  </div>
                  <h2 className="text-headline font-bold text-text-primary mb-6 group-hover:text-brand-orange transition-colors">
                    {t(`${featuredProject.slug}.title`)}
                  </h2>
                  <p className="text-body-lg text-text-secondary leading-relaxed mb-8">
                    {t(`${featuredProject.slug}.description`)}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {(t.raw(`${featuredProject.slug}.tags`) as string[]).map((tag: string) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 bg-neutral-100 text-text-secondary text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-brand-orange font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-500">
                    {common('cta.learnMore')}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
                <div className="order-1 lg:order-2">
                  <BrowserMockup
                    title={t(`${featuredProject.slug}.title`)}
                    stack={featuredProject.stack}
                  />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Projects Grid */}
      <section className="section-light py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {regularProjects.map((project) => {
              const tags = t.raw(`${project.slug}.tags`) as string[]

              return (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="card group block"
                >
                  {/* Thumbnail */}
                  <div className="mb-6 -mx-6 -mt-6 md:-mx-8 md:-mt-8">
                    <BrowserMockup
                      title={t(`${project.slug}.title`)}
                      stack={project.stack}
                      className="rounded-none rounded-t-xl border-0 shadow-none"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`badge ${categoryBadgeColor[project.category]}`}>
                      {t(`categories.${project.category}`)}
                    </span>
                    <span className="text-sm text-text-tertiary">
                      {t(`${project.slug}.industry`)}
                    </span>
                    {project.status === 'built' && (
                      <span className="badge badge-dark text-xs">Built by Z-Flow</span>
                    )}
                  </div>

                  <h3 className="text-title text-text-primary mb-4 group-hover:text-brand-orange transition-colors">
                    {t(`${project.slug}.title`)}
                  </h3>

                  <p className="text-text-secondary leading-relaxed mb-6 line-clamp-3">
                    {t(`${project.slug}.description`)}
                  </p>

                  {/* Results preview */}
                  <ul className="space-y-2 mb-6">
                    {[1, 2, 3].map((num) => (
                      <li key={num} className="flex items-start gap-2 text-sm text-text-secondary">
                        <svg className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {t(`${project.slug}.result${num}`)}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tags.slice(0, 4).map((tag: string) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-neutral-100 text-text-muted text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {tags.length > 4 && (
                      <span className="px-3 py-1 bg-neutral-100 text-text-muted text-xs rounded-full">
                        +{tags.length - 4}
                      </span>
                    )}
                  </div>

                  <span className="text-brand-orange font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-500 text-sm">
                    {common('cta.learnMore')}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
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
