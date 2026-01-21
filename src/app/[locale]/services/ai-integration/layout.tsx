import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { JsonLd, schemas } from '@/components/seo/JsonLd'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata.aiIntegration' })
  const baseUrl = 'https://z-flow.de'

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${baseUrl}/${locale}/services/ai-integration`,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/services/ai-integration`,
      languages: {
        de: `${baseUrl}/de/services/ai-integration`,
        en: `${baseUrl}/en/services/ai-integration`,
      },
    },
  }
}

export default function AiIntegrationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const serviceSchema = schemas.service({
    name: 'AI Integration',
    description: 'Integrate AI capabilities into your business. Chatbots, voice agents, content generation, and more.',
    url: 'https://z-flow.de/en/services/ai-integration',
  })

  return (
    <>
      <JsonLd data={serviceSchema} />
      {children}
    </>
  )
}
