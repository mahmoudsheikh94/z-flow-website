'use client'

import { useTranslations } from 'next-intl'
import { getRelatedBlogPosts } from '@/data/blog'
import { BlogCard } from './BlogCard'

interface RelatedPostsProps {
  slug: string
}

export function RelatedPosts({ slug }: RelatedPostsProps) {
  const t = useTranslations('blog')
  const relatedPosts = getRelatedBlogPosts(slug)

  if (relatedPosts.length === 0) return null

  return (
    <section className="section-gray py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16" data-animate="blur-up">
          <h2 className="text-headline font-bold text-text-primary">
            {t('relatedPosts')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedPosts.slice(0, 3).map((post, index) => (
            <div
              key={post.slug}
              data-animate="fade-up"
              data-delay={String((index + 1) * 100)}
            >
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
