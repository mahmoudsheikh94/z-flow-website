import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata.teardown' })
  const baseUrl = 'https://z-flow.de'

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${baseUrl}/${locale}/operations-audit`,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/operations-audit`,
      languages: {
        de: `${baseUrl}/de/operations-audit`,
        en: `${baseUrl}/en/operations-audit`,
      },
    },
  }
}

export default function TeardownLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
