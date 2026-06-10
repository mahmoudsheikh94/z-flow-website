export type BlogCategory = 'service-explainer' | 'case-study' | 'guide'

export interface BlogPost {
  slug: string
  category: BlogCategory
  publishedAt: string
  updatedAt?: string
  author: string
  thumbnail: string
  ogImage: string
  tags: string[]
  relatedSlugs: string[]
  featured: boolean
}

export const blogPosts: BlogPost[] = [
  {
    slug: '20-workflows-saas-teams-automate-first',
    category: 'guide',
    publishedAt: '2026-06-10',
    author: 'Mahmoud Sheikh Alard',
    thumbnail: '/images/blog/what-is-company-brain/thumbnail.webp',
    ogImage: '/images/blog/what-is-company-brain/og.png',
    tags: ['automation', 'b2b-saas', 'revops', 'n8n', 'guide'],
    relatedSlugs: ['automating-invoice-processing'],
    featured: true,
  },
  {
    slug: 'what-is-company-brain',
    category: 'service-explainer',
    publishedAt: '2026-05-08',
    author: 'Mahmoud Sheikh Alard',
    thumbnail: '/images/blog/what-is-company-brain/thumbnail.webp',
    ogImage: '/images/blog/what-is-company-brain/og.png',
    tags: ['ai', 'company-brain', 'rag', 'knowledge-base'],
    relatedSlugs: ['automating-invoice-processing'],
    featured: true,
  },
  {
    slug: 'automating-invoice-processing',
    category: 'case-study',
    publishedAt: '2026-05-08',
    author: 'Mahmoud Sheikh Alard',
    thumbnail: '/images/blog/automating-invoice-processing/thumbnail.webp',
    ogImage: '/images/blog/automating-invoice-processing/og.png',
    tags: ['automation', 'n8n', 'invoicing', 'case-study'],
    relatedSlugs: ['what-is-company-brain'],
    featured: false,
  },
]

export const categoryBadgeColor: Record<BlogCategory, string> = {
  'service-explainer': 'badge-purple',
  'case-study': 'badge-green',
  guide: 'badge-orange',
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getBlogPostsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts.filter((p) => p.category === category)
}

export function getRelatedBlogPosts(slug: string): BlogPost[] {
  const post = getBlogPostBySlug(slug)
  if (!post) return []
  return post.relatedSlugs
    .map((s) => getBlogPostBySlug(s))
    .filter((p): p is BlogPost => p !== undefined)
}

export function getSortedBlogPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}
