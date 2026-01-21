import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

export default function NotFound() {
  const t = useTranslations('notFound')

  return (
    <section className="min-h-[80vh] flex items-center justify-center section-light">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="text-8xl lg:text-9xl font-bold text-brand-orange/20 mb-8">
          404
        </div>
        <h1 className="text-headline font-bold text-text-primary mb-6">
          {t('title')}
        </h1>
        <p className="text-body-lg text-text-secondary max-w-xl mx-auto mb-12">
          {t('description')}
        </p>
        <Link href="/" className="btn btn-primary">
          {t('backHome')}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
