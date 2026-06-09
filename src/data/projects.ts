export type ProjectCategory = 'digitalization' | 'software' | 'ai' | 'automation'

export interface Project {
  slug: string
  category: ProjectCategory
  stack: string[]
  timeline: string
  thumbnail: string
  screenshots: string[]
  relatedSlugs: string[]
  featured: boolean
  status: 'live' | 'built'
  /** Slug into the `testimonials` array (src/data/testimonials.ts) to render a named client quote on the case study. */
  testimonialId?: string
}

export const projects: Project[] = [
  // --- Software / Product Development ---
  {
    slug: 'weprospectify',
    category: 'software',
    stack: ['Next.js', 'Supabase', 'n8n', 'OpenAI', 'Smartlead', 'HeyReach', 'Airtable', 'Stripe', 'MCP'],
    timeline: '8-week MVP · 12-week product',
    thumbnail: '/images/projects/weprospectify/thumbnail.webp',
    screenshots: [],
    relatedSlugs: ['lead-generation-pipeline', 'layovr'],
    featured: true,
    status: 'live',
    testimonialId: 'weprospectify',
  },
  {
    slug: 'layovr',
    category: 'software',
    stack: ['Next.js', 'Supabase', 'AviationStack API', 'Tailwind CSS'],
    timeline: '6 weeks',
    thumbnail: '/images/projects/layovr/thumbnail.webp',
    screenshots: [],
    relatedSlugs: ['weprospectify', 'volunteer-management'],
    featured: false,
    status: 'built',
  },
  {
    slug: 'volunteer-management',
    category: 'software',
    stack: ['WeWeb', 'Xano', 'Airtable', 'n8n'],
    timeline: '4 weeks',
    thumbnail: '/images/projects/volunteer-management/thumbnail.webp',
    screenshots: [],
    relatedSlugs: ['layovr', 'weprospectify'],
    featured: false,
    status: 'live',
  },

  // --- AI Integration ---
  {
    slug: 'ai-video-generation',
    category: 'ai',
    stack: ['n8n', 'OpenAI', 'Ideogram', 'Airtable', 'Google Sheets'],
    timeline: '3 weeks',
    thumbnail: '/images/projects/ai-video-generation/thumbnail.webp',
    screenshots: [],
    relatedSlugs: ['ai-voice-agent', 'lead-generation-pipeline'],
    featured: false,
    status: 'live',
  },
  {
    slug: 'ai-voice-agent',
    category: 'ai',
    stack: ['n8n', 'OpenAI', '11Labs', 'Supabase', 'Twilio'],
    timeline: '2 weeks',
    thumbnail: '/images/projects/ai-voice-agent/thumbnail.webp',
    screenshots: [],
    relatedSlugs: ['ai-video-generation', 'automated-invoicing'],
    featured: false,
    status: 'live',
  },

  // --- Process Digitalization ---
  {
    slug: 'lead-generation-pipeline',
    category: 'digitalization',
    stack: ['n8n', 'Make.com', 'Airtable', 'Google Sheets', 'OpenAI'],
    timeline: '4 weeks',
    thumbnail: '/images/projects/lead-generation-pipeline/thumbnail.webp',
    screenshots: [],
    relatedSlugs: ['weprospectify', 'automated-invoicing'],
    featured: false,
    status: 'live',
  },
  {
    slug: 'automated-invoicing',
    category: 'digitalization',
    stack: ['n8n', 'Xano', 'Google Sheets', 'PDF Generation'],
    timeline: '2 weeks',
    thumbnail: '/images/projects/automated-invoicing/thumbnail.webp',
    screenshots: [],
    relatedSlugs: ['invoice-distribution', 'financial-folders'],
    featured: false,
    status: 'live',
  },

  // --- Workflow Automation ---
  {
    slug: 'stripe-refund-automation',
    category: 'automation',
    stack: ['n8n', 'Stripe API', 'Slack', 'Google Sheets'],
    timeline: '1 week',
    thumbnail: '/images/projects/stripe-refund-automation/thumbnail.webp',
    screenshots: [],
    relatedSlugs: ['automated-invoicing', 'car-supplier-integration'],
    featured: false,
    status: 'live',
  },
  {
    slug: 'car-supplier-integration',
    category: 'automation',
    stack: ['n8n', 'REST APIs', 'PostgreSQL', 'Airtable'],
    timeline: '2 weeks',
    thumbnail: '/images/projects/car-supplier-integration/thumbnail.webp',
    screenshots: [],
    relatedSlugs: ['stripe-refund-automation', 'lead-generation-pipeline'],
    featured: false,
    status: 'live',
  },
  {
    slug: 'invoice-distribution',
    category: 'automation',
    stack: ['n8n', 'Google Drive', 'Gmail', 'PDF Processing'],
    timeline: '1 week',
    thumbnail: '/images/projects/invoice-distribution/thumbnail.webp',
    screenshots: [],
    relatedSlugs: ['automated-invoicing', 'financial-folders'],
    featured: false,
    status: 'live',
  },
  {
    slug: 'financial-folders',
    category: 'automation',
    stack: ['n8n', 'Google Drive', 'Airtable', 'Slack'],
    timeline: '1 week',
    thumbnail: '/images/projects/financial-folders/thumbnail.webp',
    screenshots: [],
    relatedSlugs: ['invoice-distribution', 'automated-invoicing'],
    featured: false,
    status: 'live',
  },
]

export const categoryLabels: Record<ProjectCategory, string> = {
  digitalization: 'categories.digitalization',
  software: 'categories.software',
  ai: 'categories.ai',
  automation: 'categories.automation',
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category)
}

export function getRelatedProjects(slug: string): Project[] {
  const project = getProjectBySlug(slug)
  if (!project) return []
  return project.relatedSlugs
    .map((s) => getProjectBySlug(s))
    .filter((p): p is Project => p !== undefined)
}
