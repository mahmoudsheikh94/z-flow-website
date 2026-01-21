import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { JsonLd, schemas } from '@/components/seo/JsonLd'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata.contact' })
  const baseUrl = 'https://z-flow.de'

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${baseUrl}/${locale}/contact`,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/contact`,
      languages: {
        de: `${baseUrl}/de/contact`,
        en: `${baseUrl}/en/contact`,
      },
    },
  }
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <JsonLd data={schemas.localBusiness()} />
      {children}
    </>
  )
}
