'use client'

import { useTranslations, useLocale } from 'next-intl'
import { Link } from '@/i18n/navigation'
import type { BlogPost } from '@/data/blog'
import { categoryBadgeColor } from '@/data/blog'

interface BlogCardProps {
  post: BlogPost
  readingTime?: number
}

export function BlogCard({ post, readingTime }: BlogCardProps) {
  const t = useTranslations('blog')
  const locale = useLocale()

  const formattedDate = new Intl.DateTimeFormat(locale === 'de' ? 'de-DE' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(post.publishedAt))

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="card group block"
    >
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className={`badge ${categoryBadgeColor[post.category]}`}>
          {t(`categories.${post.category === 'service-explainer' ? 'serviceExplainer' : 'caseStudy'}`)}
        </span>
        <span className="text-sm text-text-tertiary">
          {formattedDate}
        </span>
        {readingTime && (
          <span className="text-sm text-text-tertiary">
            {t('readingTime', { minutes: readingTime })}
          </span>
        )}
      </div>

      <h3 className="text-title text-text-primary mb-4 group-hover:text-brand-orange transition-colors">
        {t(`posts.${post.slug}.title`)}
      </h3>

      <p className="text-text-secondary leading-relaxed mb-6 line-clamp-3">
        {t(`posts.${post.slug}.excerpt`)}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {post.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-neutral-100 text-text-muted text-xs rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <span className="text-brand-orange font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-500 text-sm">
        {t('readMore')}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </Link>
  )
}
