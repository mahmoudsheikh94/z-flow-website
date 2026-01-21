import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata.process' })
  const baseUrl = 'https://z-flow.de'

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${baseUrl}/${locale}/process`,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/process`,
      languages: {
        de: `${baseUrl}/de/process`,
        en: `${baseUrl}/en/process`,
      },
    },
  }
}

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
