import { MetadataRoute } from 'next'
import { projects } from '@/data/projects'
import { blogPosts } from '@/data/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://z-flow.de'
  const currentDate = new Date()

  const pages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/services/mvp-development', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/automation', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/ai-integration', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/growth-ops-teardown', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/digitalisierung', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/projects', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/pricing', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/imprint', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  const locales = ['en', 'de']

  const sitemapEntries: MetadataRoute.Sitemap = []

  for (const page of pages) {
    for (const locale of locales) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: currentDate,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: {
            en: `${baseUrl}/en${page.path}`,
            de: `${baseUrl}/de${page.path}`,
          },
        },
      })
    }
  }

  for (const project of projects) {
    for (const locale of locales) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/projects/${project.slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
        alternates: {
          languages: {
            en: `${baseUrl}/en/projects/${project.slug}`,
            de: `${baseUrl}/de/projects/${project.slug}`,
          },
        },
      })
    }
  }

  for (const post of blogPosts) {
    for (const locale of locales) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(post.publishedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
        alternates: {
          languages: {
            en: `${baseUrl}/en/blog/${post.slug}`,
            de: `${baseUrl}/de/blog/${post.slug}`,
          },
        },
      })
    }
  }

  return sitemapEntries
}
