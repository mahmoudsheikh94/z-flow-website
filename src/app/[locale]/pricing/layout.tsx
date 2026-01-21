import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { JsonLd, schemas } from '@/components/seo/JsonLd'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata.pricing' })
  const baseUrl = 'https://z-flow.de'

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${baseUrl}/${locale}/pricing`,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/pricing`,
      languages: {
        de: `${baseUrl}/de/pricing`,
        en: `${baseUrl}/en/pricing`,
      },
    },
  }
}

export default async function PricingLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'pricing.faq' })

  const faqs = [
    { question: t('q1.question'), answer: t('q1.answer') },
    { question: t('q2.question'), answer: t('q2.answer') },
    { question: t('q3.question'), answer: t('q3.answer') },
    { question: t('q4.question'), answer: t('q4.answer') },
  ]

  return (
    <>
      <JsonLd data={schemas.faqPage(faqs)} />
      {children}
    </>
  )
}
