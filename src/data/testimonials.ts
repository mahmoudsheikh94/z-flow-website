export interface Testimonial {
  /** Stable id used to attach a testimonial to a project (Project.testimonialId). */
  id: string
  name: string
  role: string
  company: string
  quote_en: string
  quote_de: string
  avatar?: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'weprospectify',
    // NOTE: This quote is a DRAFT placeholder. Replace with the client's exact, approved
    // words from the testimonial-capture email (Step 0 of the GTM plan) before promoting
    // the case study. Do not publish invented client speech.
    name: '[VERIFY: client name]',
    role: '[VERIFY: role]',
    company: 'WeProspectify',
    quote_en:
      '[VERIFY — replace with the client’s approved words] Z-Flow took our prospecting from a manual grind to a system that runs itself. We roughly tripled booked meetings and got 20+ hours a week back — and the product still scales as we grow.',
    quote_de:
      '[VERIFY — durch die freigegebenen Worte des Kunden ersetzen] Z-Flow hat unser Prospecting von Handarbeit zu einem System gemacht, das sich selbst betreibt. Wir haben unsere gebuchten Meetings etwa verdreifacht und 20+ Stunden pro Woche zurückgewonnen — und das Produkt skaliert weiter mit uns.',
  },
]

export function getTestimonialById(id: string): Testimonial | undefined {
  return testimonials.find((t) => t.id === id)
}
