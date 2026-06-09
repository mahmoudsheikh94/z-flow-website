import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata.digitalisierung' })
  const baseUrl = 'https://z-flow.de'

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${baseUrl}/${locale}/digitalisierung`,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/digitalisierung`,
      languages: {
        de: `${baseUrl}/de/digitalisierung`,
        en: `${baseUrl}/en/digitalisierung`,
      },
    },
  }
}

export default function DigitalisierungLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
