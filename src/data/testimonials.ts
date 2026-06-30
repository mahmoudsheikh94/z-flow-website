export interface Testimonial {
  /** Stable id used to attach a testimonial to a project (Project.testimonialId). */
  id: string
  name: string
  role: string
  company: string
  quote_en: string
  quote_de: string
  avatar?: string
  /** Optional outbound link to the client's company website. */
  companyUrl?: string
  /** Optional outbound link to the person's LinkedIn profile. */
  linkedinUrl?: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'prospectify',
    name: 'Wouter Wippert',
    role: 'Founder',
    company: 'Prospectify',
    quote_en:
      "If you're looking for a partner who genuinely thinks along with your business instead of simply building what you ask for, you're in the right place. Mahmoud consistently thinks a few steps ahead and often identifies opportunities and solutions before they become problems.",
    quote_de:
      'Wenn Sie einen Partner suchen, der wirklich mit Ihrem Unternehmen mitdenkt, statt nur das zu bauen, worum Sie bitten, sind Sie hier richtig. Mahmoud denkt durchweg ein paar Schritte voraus und erkennt oft Chancen und Lösungen, bevor daraus Probleme werden.',
    avatar: '/images/testimonials/wouter-wippert.jpg',
    companyUrl: 'https://weprospectify.com/',
    linkedinUrl: 'https://www.linkedin.com/in/wouterwippert/',
  },
]

export function getTestimonialById(id: string): Testimonial | undefined {
  return testimonials.find((t) => t.id === id)
}
