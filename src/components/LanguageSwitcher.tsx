'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { useTransition } from 'react'

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()
  const t = useTranslations('languageSwitcher')

  const otherLocale = locale === 'de' ? 'en' : 'de'
  const flag = locale === 'de' ? '🇬🇧' : '🇩🇪'
  const label = locale === 'de' ? 'EN' : 'DE'

  const handleSwitch = () => {
    // Set cookie for persistence
    document.cookie = `NEXT_LOCALE=${otherLocale};path=/;max-age=31536000;SameSite=Lax`

    startTransition(() => {
      router.replace(pathname, { locale: otherLocale })
    })
  }

  return (
    <button
      onClick={handleSwitch}
      disabled={isPending}
      className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 disabled:opacity-50 rounded-lg hover:bg-white/5"
      aria-label={t('switchTo')}
    >
      <span>{flag}</span>
      <span>{label}</span>
    </button>
  )
}
