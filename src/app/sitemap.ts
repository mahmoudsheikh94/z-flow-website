import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://z-flow.de'
  const currentDate = new Date()

  // Define all pages with their locale variations
  const pages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/services/mvp-development', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/automation', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/ai-integration', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/projects', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/process', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/pricing', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/imprint', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  const locales = ['en', 'de']

  // Generate sitemap entries for all pages in all locales
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

  return sitemapEntries
}
