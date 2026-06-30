import Image from 'next/image'
import type { Testimonial } from '@/data/testimonials'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
  locale: string
  translations: {
    badge: string
    title: string
    subtitle: string
  }
}

export function TestimonialsSection({ testimonials, locale, translations }: TestimonialsSectionProps) {
  if (testimonials.length === 0) return null

  return (
    <section className="py-32 lg:py-40 relative overflow-hidden testimonials-section">
      <div className="absolute inset-0 opacity-20" style={{
        background: 'radial-gradient(ellipse at 50% 0%, rgba(238,79,39,0.4) 0%, transparent 70%)'
      }} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-20" data-animate="blur-up">
          <span className="badge badge-dark text-xs tracking-widest mb-6">
            {translations.badge}
          </span>
          <h2 className="text-headline font-bold text-white mb-6">
            {translations.title}
          </h2>
          <p className="text-body-lg text-white/60 max-w-2xl mx-auto">
            {translations.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="testimonial-card rounded-2xl border border-white/10 p-6 lg:p-8
                         hover:border-white/20 transition-all duration-500"
              data-animate="fade-up"
              data-delay={String(Math.min((index + 1) * 100, 800))}
            >
              <div className="flex flex-col items-center text-center mb-5">
                {testimonial.avatar ? (
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white/20 mb-4"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border-2 border-white/20 mb-4">
                    <span className="text-brand-orange font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="font-semibold text-white text-sm">
                  {testimonial.name}
                </div>
                <div className="text-white/50 text-xs">
                  {testimonial.role}
                </div>
                <div className="text-white/50 text-xs">
                  {testimonial.company}
                </div>
                {(testimonial.linkedinUrl || testimonial.companyUrl) && (
                  <div className="mt-3 flex items-center justify-center gap-2">
                    {testimonial.linkedinUrl && (
                      <a
                        href={testimonial.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${testimonial.name} on LinkedIn`}
                        title="LinkedIn"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/60 hover:text-brand-orange hover:border-brand-orange transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                        </svg>
                      </a>
                    )}
                    {testimonial.companyUrl && (
                      <a
                        href={testimonial.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${testimonial.company} website`}
                        title={testimonial.company}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/60 hover:text-brand-orange hover:border-brand-orange transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
                          <circle cx="12" cy="12" r="9" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>

              <blockquote className="text-white/70 text-sm leading-relaxed">
                &ldquo;{locale === 'de' ? testimonial.quote_de : testimonial.quote_en}&rdquo;
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
