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
      url: `${baseUrl}/${locale}/growth-ops-teardown`,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/growth-ops-teardown`,
      languages: {
        de: `${baseUrl}/de/growth-ops-teardown`,
        en: `${baseUrl}/en/growth-ops-teardown`,
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
