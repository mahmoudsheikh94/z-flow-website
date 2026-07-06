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
  {
    id: 'surge',
    name: 'Kiran Schroeder',
    role: 'Founder',
    company: 'Surge',
    quote_en:
      "Clipping at scale was just a grind for us — sitting through entire episodes hunting for the good bits, then reframing everything vertical and writing hooks one by one. I figured the actual judgment part was the bit you could never really hand off. Turns out you can. What Z-Flow built pulls out the moments that matter, keeps the camera on whoever's talking instead of some empty chair, and stops clips on a proper finish instead of chopping someone off mid-sentence. It even gives you two different hook styles to choose from. The clips come out at a level we'd happily post, and honestly it just slots into the way we already work. The Z-Flow team was quick, easy to deal with, and actually listened — every round it got a bit better.",
    quote_de:
      'Clips in großem Maßstab zu erstellen war für uns pure Plackerei — stundenlang durch ganze Episoden sitzen und nach den guten Momenten suchen, alles für Vertical umrahmen und Hooks einen nach dem anderen schreiben. Ich dachte, der eigentliche Urteilsteil ist der, den man nie wirklich abgeben kann. Aber das kann man. Was Z-Flow gebaut hat, filtert die Momente heraus, die wirklich zählen, hält die Kamera auf den Sprecher statt auf einen leeren Stuhl und schneidet Clips an einem richtigen Endpunkt statt mitten im Satz. Es bietet sogar zwei verschiedene Hook-Stile zur Auswahl. Die Clips kommen auf einem Niveau heraus, das wir direkt posten würden, und es fügt sich ehrlich gesagt einfach in die Art und Weise ein, wie wir bereits arbeiten. Das Z-Flow-Team war schnell, unkompliziert und hat wirklich zugehört — jede Runde wurde es ein bisschen besser.',
    companyUrl: 'https://www.surgemusic.io/',
    linkedinUrl: 'https://www.linkedin.com/in/kiran-schroeder-71b3361aa/',
  },
]

export function getTestimonialById(id: string): Testimonial | undefined {
  return testimonials.find((t) => t.id === id)
}
