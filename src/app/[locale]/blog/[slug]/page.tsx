import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { notFound } from 'next/navigation'
import { blogPosts, getBlogPostBySlug, categoryBadgeColor } from '@/data/blog'
import { getBlogPostContent } from '@/lib/mdx'
import { locales } from '@/i18n/routing'
import { JsonLd, schemas } from '@/components/seo/JsonLd'
import { RelatedPosts } from '@/components/blog/RelatedPosts'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  const params: { slug: string; locale: string }[] = []
  for (const locale of locales) {
    for (const post of blogPosts) {
      params.push({ slug: post.slug, locale })
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
  const post = getBlogPostBySlug(slug)
  if (!post) return {}

  const t = await getTranslations({ locale, namespace: 'blog.posts' })
  const baseUrl = 'https://z-flow.de'

  return {
    title: t(`${slug}.title`),
    description: t(`${slug}.description`),
    openGraph: {
      title: t(`${slug}.title`),
      description: t(`${slug}.description`),
      url: `${baseUrl}/${locale}/blog/${slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/blog/${slug}`,
      languages: {
        de: `${baseUrl}/de/blog/${slug}`,
        en: `${baseUrl}/en/blog/${slug}`,
      },
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  const mdx = await getBlogPostContent(slug, locale)
  if (!mdx) notFound()

  const t = await getTranslations({ locale, namespace: 'blog' })
  const postT = await getTranslations({ locale, namespace: 'blog.posts' })
  const common = await getTranslations({ locale, namespace: 'common' })

  const formattedDate = new Intl.DateTimeFormat(locale === 'de' ? 'de-DE' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(post.publishedAt))

  const baseUrl = 'https://z-flow.de'

  const blogPostingSchema = schemas.blogPosting({
    title: postT(`${slug}.title`),
    description: postT(`${slug}.description`),
    url: `${baseUrl}/${locale}/blog/${slug}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: post.author,
    locale,
  })

  return (
    <>
      <JsonLd data={blogPostingSchema} />

      {/* Hero */}
      <section className="section-dark pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="glow-subtle top-1/3 -right-48" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/blog"
            className="hero-animate hero-animate-1 inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('backToBlog')}
          </Link>

          <div className="max-w-3xl">
            {/* Category + meta */}
            <div className="hero-animate hero-animate-1 flex flex-wrap items-center gap-3 mb-6">
              <span className={`badge ${categoryBadgeColor[post.category]}`}>
                {t(`categories.${post.category === 'service-explainer' ? 'serviceExplainer' : post.category === 'case-study' ? 'caseStudy' : 'guide'}`)}
              </span>
              <span className="text-sm text-white/50">{formattedDate}</span>
              <span className="text-sm text-white/50">
                {t('readingTime', { minutes: mdx.readingTime })}
              </span>
            </div>

            {/* Title */}
            <h1 className="hero-animate hero-animate-2 text-display font-bold text-white mb-6">
              {postT(`${slug}.title`)}
            </h1>

            {/* Author */}
            <p className="hero-animate hero-animate-3 text-white/60">
              {post.author}
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-light py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <article data-animate="blur-up">
            {mdx.content}
          </article>

          {/* Tags */}
          <div className="mt-16 pt-8 border-t border-neutral-200">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-neutral-100 text-text-secondary text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <RelatedPosts slug={slug} />

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
