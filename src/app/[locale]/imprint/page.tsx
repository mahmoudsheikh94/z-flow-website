'use client'

import { useTranslations, useLocale } from 'next-intl'

export default function ImprintPage() {
  const t = useTranslations('imprint')
  const locale = useLocale()
  const contactEmail = locale === 'de' ? 'hallo@z-flow.de' : 'hello@z-flow.de'

  return (
    <>
      <section className="section-dark pt-32 pb-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">{t('title')}</h1>
        </div>
      </section>

      <section className="section-light py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 prose prose-neutral max-w-none">
          <h2>{t('companyInfo.title')}</h2>
          <p>
            Z-Flow UG (haftungsbeschränkt)<br />
            Menzelstraße 3<br />
            12157 Berlin<br />
            Deutschland
          </p>

          <h2>{t('representedBy.title')}</h2>
          <p>
            Mahmoud Sheikh Alard
          </p>

          <h2>{t('contact.title')}</h2>
          <p>
            {t('contact.email')}: {contactEmail}
          </p>

          <h2>{t('registration.title')}</h2>
          <p>
            {t('registration.text')}<br />
            {t('registration.court')}: Amtsgericht Charlottenburg<br />
            {t('registration.number')}: HRB [Nummer folgt]
          </p>

          <h2>{t('vatId.title')}</h2>
          <p>
            {t('vatId.text')}<br />
            [Nummer folgt]
          </p>

          <h2>{t('responsible.title')}</h2>
          <p>
            Mahmoud Sheikh Alard<br />
            Menzelstraße 3<br />
            12157 Berlin
          </p>

          <h2>{t('dispute.title')}</h2>
          <p>
            {t('dispute.text1')}{' '}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p>
            {t('dispute.text2')}
          </p>
          <p>
            {t('dispute.text3')}
          </p>

          <h2>{t('liability.title')}</h2>
          <p>
            {t('liability.text1')}
          </p>
          <p>
            {t('liability.text2')}
          </p>

          <h2>{t('links.title')}</h2>
          <p>
            {t('links.text1')}
          </p>
          <p>
            {t('links.text2')}
          </p>

          <h2>{t('copyright.title')}</h2>
          <p>
            {t('copyright.text1')}
          </p>
          <p>
            {t('copyright.text2')}
          </p>
        </div>
      </section>
    </>
  )
}
