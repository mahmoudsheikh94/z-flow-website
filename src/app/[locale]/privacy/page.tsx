'use client'

import { useTranslations, useLocale } from 'next-intl'

export default function PrivacyPage() {
  const t = useTranslations('privacy')
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
          <h2>{t('overview.title')}</h2>

          <h3>{t('overview.general.title')}</h3>
          <p>
            {t('overview.general.text')}
          </p>

          <h3>{t('overview.collection.title')}</h3>
          <p>
            <strong>{t('overview.collection.whoResponsible')}</strong><br />
            {t('overview.collection.whoResponsibleText')}
          </p>
          <p>
            <strong>{t('overview.collection.howCollect')}</strong><br />
            {t('overview.collection.howCollectText')}
          </p>
          <p>
            {t('overview.collection.automaticText')}
          </p>

          <h2>{t('hosting.title')}</h2>
          <p>
            {t('hosting.text')}
          </p>
          <p>
            {t('hosting.details')}{' '}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">
              https://vercel.com/legal/privacy-policy
            </a>
          </p>

          <h2>{t('general.title')}</h2>

          <h3>{t('general.privacy.title')}</h3>
          <p>
            {t('general.privacy.text')}
          </p>

          <h3>{t('general.responsible.title')}</h3>
          <p>
            {t('general.responsible.intro')}
          </p>
          <p>
            Z-Flow UG (haftungsbeschränkt)<br />
            Menzelstraße 3<br />
            12157 Berlin<br />
            {t('general.responsible.email')}: {contactEmail}
          </p>

          <h3>{t('general.duration.title')}</h3>
          <p>
            {t('general.duration.text')}
          </p>

          <h3>{t('general.revocation.title')}</h3>
          <p>
            {t('general.revocation.text')}
          </p>

          <h3>{t('general.portability.title')}</h3>
          <p>
            {t('general.portability.text')}
          </p>

          <h3>{t('general.access.title')}</h3>
          <p>
            {t('general.access.text')}
          </p>

          <h2>{t('collection.title')}</h2>

          <h3>{t('collection.form.title')}</h3>
          <p>
            {t('collection.form.text')}
          </p>

          <h3>{t('collection.email.title')}</h3>
          <p>
            {t('collection.email.text')}
          </p>

          <h2>{t('plugins.title')}</h2>

          <h3>{t('plugins.fonts.title')}</h3>
          <p>
            {t('plugins.fonts.text')}
          </p>

          <p className="mt-8 text-text-secondary">
            {t('updated')}
          </p>
        </div>
      </section>
    </>
  )
}
