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

// No testimonials are published yet. The case-study page guards on this array, so the
// testimonial block simply does not render while it's empty — nothing unverified ships.
//
// WHEN THE WEPROSPECTIFY CLIENT APPROVES A QUOTE (Step 0 of the GTM plan), uncomment and
// fill the entry below with their EXACT words + real name/role. Until then it stays empty.
//
// {
//   id: 'weprospectify',
//   name: '<client name>',
//   role: '<role>',
//   company: 'WeProspectify',
//   quote_en: '<client-approved English quote>',
//   quote_de: '<client-approved German quote>',
// },
export const testimonials: Testimonial[] = []

export function getTestimonialById(id: string): Testimonial | undefined {
  return testimonials.find((t) => t.id === id)
}
