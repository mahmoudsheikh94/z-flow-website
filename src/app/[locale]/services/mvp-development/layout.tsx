import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { JsonLd, schemas } from '@/components/seo/JsonLd'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata.mvpDevelopment' })
  const baseUrl = 'https://z-flow.de'

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${baseUrl}/${locale}/services/mvp-development`,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/services/mvp-development`,
      languages: {
        de: `${baseUrl}/de/services/mvp-development`,
        en: `${baseUrl}/en/services/mvp-development`,
      },
    },
  }
}

export default function MvpDevelopmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const serviceSchema = schemas.service({
    name: 'MVP Development',
    description: 'Build your MVP in 2-6 weeks with Next.js/React or No-Code tools. Backend powered by Xano or Supabase.',
    url: 'https://z-flow.de/en/services/mvp-development',
    price: '15000',
  })

  return (
    <>
      <JsonLd data={serviceSchema} />
      {children}
    </>
  )
}
