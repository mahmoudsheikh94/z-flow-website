import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '../globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ScrollAnimationProvider } from '@/components/ui/ScrollAnimationProvider'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import { JsonLd, schemas } from '@/components/seo/JsonLd'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata.home' })

  const baseUrl = 'https://z-flow.de'

  return {
    title: {
      default: t('title'),
      template: '%s | Z-Flow',
    },
    description: t('description'),
    keywords: [
      'MVP Entwicklung',
      'MVP Development',
      'Automatisierung',
      'Automation',
      'n8n',
      'Make.com',
      'KI Integration',
      'AI Integration',
      'WeWeb',
      'Xano',
      'Supabase',
      'No-Code',
      'Low-Code',
      'Deutschland',
      'Germany',
      'Berlin',
    ],
    authors: [{ name: 'Z-Flow' }],
    creator: 'Z-Flow',
    publisher: 'Z-Flow',
    metadataBase: new URL(baseUrl),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${baseUrl}/${locale}`,
      siteName: 'Z-Flow',
      locale: locale === 'de' ? 'de_DE' : 'en_US',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: 'Z-Flow - Engineering Studio Berlin',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [`${baseUrl}/opengraph-image`],
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        de: `${baseUrl}/de`,
        en: `${baseUrl}/en`,
        'x-default': `${baseUrl}/en`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params

  // Validate the locale
  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound()
  }

  // Load messages for the current locale
  const messages = await getMessages({ locale })

  return (
    <html lang={locale}>
      <head>
        <JsonLd data={schemas.organization()} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ScrollAnimationProvider />
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
