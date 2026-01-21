'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'

export default function ContactPage() {
  const t = useTranslations('contact')
  const common = useTranslations('common')
  const locale = useLocale()
  const contactEmail = locale === 'de' ? 'hallo@z-flow.de' : 'hello@z-flow.de'

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      service: formData.get('service'),
      budget: formData.get('budget'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        e.currentTarget.reset()
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="section-dark pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="glow-orange top-1/2 -right-48" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="hero-animate hero-animate-1 badge badge-dark mb-6 inline-block">
              {t('hero.badge')}
            </span>
            <h1 className="hero-animate hero-animate-2 text-4xl sm:text-5xl font-bold text-white mb-6">
              {t('hero.title')}
            </h1>
            <p className="hero-animate hero-animate-3 text-lg text-white/70 leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-light py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div data-animate="fade-up">
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                {t('form.title')}
              </h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                      {t('form.name')} {t('form.required')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="input"
                      placeholder={t('form.namePlaceholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
                      {t('form.company')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="input"
                      placeholder={t('form.companyPlaceholder')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                    {t('form.email')} {t('form.required')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="input"
                    placeholder={t('form.emailPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-text-primary mb-2">
                    {t('form.service')}
                  </label>
                  <select id="service" name="service" className="input">
                    <option value="">{t('form.servicePlaceholder')}</option>
                    <option value="mvp">{t('form.serviceMvp')}</option>
                    <option value="automation">{t('form.serviceAutomation')}</option>
                    <option value="ai">{t('form.serviceAi')}</option>
                    <option value="other">{t('form.serviceOther')}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-text-primary mb-2">
                    {t('form.budget')}
                  </label>
                  <select id="budget" name="budget" className="input">
                    <option value="">{t('form.budgetPlaceholder')}</option>
                    <option value="small">{t('form.budgetSmall')}</option>
                    <option value="medium">{t('form.budgetMedium')}</option>
                    <option value="large">{t('form.budgetLarge')}</option>
                    <option value="enterprise">{t('form.budgetEnterprise')}</option>
                    <option value="unsure">{t('form.budgetUnsure')}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                    {t('form.message')} {t('form.required')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="input resize-none"
                    placeholder={t('form.messagePlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      {locale === 'de' ? 'Wird gesendet...' : 'Sending...'}
                    </>
                  ) : (
                    <>
                      {common('cta.sendMessage')}
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    {locale === 'de'
                      ? 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns in Kürze.'
                      : 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'}
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                    {locale === 'de'
                      ? 'Etwas ist schief gelaufen. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per E-Mail.'
                      : 'Something went wrong. Please try again or contact us directly via email.'}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div data-animate="fade-up" data-delay="100">
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                {t('info.title')}
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">{t('info.email')}</h3>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-brand-orange hover:underline text-lg"
                  >
                    {contactEmail}
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-text-primary mb-2">{t('info.location')}</h3>
                  <p className="text-text-secondary">
                    {t('info.locationValue')}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-text-primary mb-2">{t('info.responseTime')}</h3>
                  <p className="text-text-secondary">
                    {t('info.responseTimeValue')}
                  </p>
                </div>

                <div className="pt-8 border-t border-neutral-200">
                  <h3 className="font-semibold text-text-primary mb-4">
                    {t('info.nextSteps.title')}
                  </h3>
                  <ol className="space-y-4">
                    <li className="flex gap-4">
                      <span className="w-8 h-8 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                        1
                      </span>
                      <div>
                        <p className="font-medium text-text-primary">{t('info.nextSteps.step1Title')}</p>
                        <p className="text-text-secondary text-sm">{t('info.nextSteps.step1Desc')}</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-8 h-8 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                        2
                      </span>
                      <div>
                        <p className="font-medium text-text-primary">{t('info.nextSteps.step2Title')}</p>
                        <p className="text-text-secondary text-sm">{t('info.nextSteps.step2Desc')}</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-8 h-8 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                        3
                      </span>
                      <div>
                        <p className="font-medium text-text-primary">{t('info.nextSteps.step3Title')}</p>
                        <p className="text-text-secondary text-sm">{t('info.nextSteps.step3Desc')}</p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Booking */}
      <section className="section-gray py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12" data-animate="blur-up">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              {t('calendar.title')}
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              {t('calendar.subtitle')}
            </p>
          </div>
          <div className="max-w-4xl mx-auto" data-animate="fade-up">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Ifc0ynbAkkxjax9_96PlTAuBg2jr2jNa2s0vI6ICsghU6txGo9JffDzT-1jwTQNFaI7RFlnOm?gv=true"
                style={{ border: 0 }}
                width="100%"
                height="600"
                frameBorder="0"
                title={t('calendar.title')}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
