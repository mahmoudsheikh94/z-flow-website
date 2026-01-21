import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { JsonLd, schemas } from '@/components/seo/JsonLd'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata.automation' })
  const baseUrl = 'https://z-flow.de'

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${baseUrl}/${locale}/services/automation`,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/services/automation`,
      languages: {
        de: `${baseUrl}/de/services/automation`,
        en: `${baseUrl}/en/services/automation`,
      },
    },
  }
}

export default function AutomationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const serviceSchema = schemas.service({
    name: 'Process Automation',
    description: 'Automate workflows with n8n or Make.com. Reduce manual work, eliminate errors, and scale your operations.',
    url: 'https://z-flow.de/en/services/automation',
    price: '3000',
  })

  return (
    <>
      <JsonLd data={serviceSchema} />
      {children}
    </>
  )
}
