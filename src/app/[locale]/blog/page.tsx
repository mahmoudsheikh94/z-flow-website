'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { useState } from 'react'
import { getSortedBlogPosts, type BlogCategory } from '@/data/blog'
import { BlogCard } from '@/components/blog/BlogCard'

type FilterKey = 'all' | BlogCategory

export default function BlogPage() {
  const t = useTranslations('blog')
  const common = useTranslations('common')
  const [activeCategory, setActiveCategory] = useState<FilterKey>('all')

  const allPosts = getSortedBlogPosts()
  const filteredPosts = activeCategory === 'all'
    ? allPosts
    : allPosts.filter((p) => p.category === activeCategory)

  const categories: FilterKey[] = ['all', 'guide', 'service-explainer', 'case-study']

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
                {t(`categories.${category === 'service-explainer' ? 'serviceExplainer' : category === 'case-study' ? 'caseStudy' : category === 'guide' ? 'guide' : 'all'}`)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-light py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-text-secondary text-lg">{t('noPosts')}</p>
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
