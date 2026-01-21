type JsonLdProps = {
  data: Record<string, unknown>
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Pre-built schema generators
export const schemas = {
  organization: () => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Z-Flow',
    url: 'https://z-flow.de',
    logo: 'https://z-flow.de/images/logo.png',
    description: 'Engineering Studio from Berlin. We build MVPs, automate processes, and integrate AI solutions.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Menzelstraße 3',
      addressLocality: 'Berlin',
      postalCode: '12157',
      addressCountry: 'DE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@z-flow.de',
      contactType: 'sales',
      availableLanguage: ['English', 'German'],
    },
    sameAs: ['https://www.linkedin.com/company/z-flow/'],
  }),

  localBusiness: () => ({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://z-flow.de/#localbusiness',
    name: 'Z-Flow',
    image: 'https://z-flow.de/images/logo.png',
    url: 'https://z-flow.de',
    email: 'hello@z-flow.de',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Menzelstraße 3',
      addressLocality: 'Berlin',
      postalCode: '12157',
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.4631,
      longitude: 13.3425,
    },
    priceRange: '€€€',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 52.52,
        longitude: 13.405,
      },
      geoRadius: '50000',
    },
  }),

  service: (service: {
    name: string
    description: string
    url: string
    price?: string
  }) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@type': 'Organization',
      name: 'Z-Flow',
      url: 'https://z-flow.de',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Germany',
    },
    ...(service.price && {
      offers: {
        '@type': 'Offer',
        price: service.price,
        priceCurrency: 'EUR',
      },
    }),
  }),

  faqPage: (faqs: { question: string; answer: string }[]) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }),

  breadcrumb: (items: { name: string; url: string }[]) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }),

  webPage: (page: {
    name: string
    description: string
    url: string
    locale: string
  }) => ({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.name,
    description: page.description,
    url: page.url,
    inLanguage: page.locale === 'de' ? 'de-DE' : 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Z-Flow',
      url: 'https://z-flow.de',
    },
  }),
}
