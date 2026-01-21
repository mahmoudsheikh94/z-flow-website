import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata.services' })
  const baseUrl = 'https://z-flow.de'

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${baseUrl}/${locale}/services`,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/services`,
      languages: {
        de: `${baseUrl}/de/services`,
        en: `${baseUrl}/en/services`,
      },
    },
  }
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
