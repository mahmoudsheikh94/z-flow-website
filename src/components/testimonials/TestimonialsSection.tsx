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
