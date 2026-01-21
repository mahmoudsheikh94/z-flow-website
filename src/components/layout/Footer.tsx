'use client'

import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import { Link } from '@/i18n/navigation'

const tools = ['n8n', 'Make.com', 'WeWeb', 'Xano', 'Supabase', 'Airtable', 'Claude Code']

export function Footer() {
  const t = useTranslations('common')
  const locale = useLocale()
  const contactEmail = locale === 'de' ? 'hallo@z-flow.de' : 'hello@z-flow.de'

  const footerLinks = {
    services: [
      { name: t('navigation.services') === 'Services' ? 'MVP Development' : 'MVP Entwicklung', href: '/services/mvp-development' },
      { name: t('navigation.services') === 'Services' ? 'Automation' : 'Automatisierung', href: '/services/automation' },
      { name: t('navigation.services') === 'Services' ? 'AI Integration' : 'KI-Integration', href: '/services/ai-integration' },
    ],
    company: [
      { name: t('navigation.about'), href: '/about' },
      { name: t('navigation.projects'), href: '/projects' },
      { name: t('navigation.process'), href: '/process' },
      { name: t('navigation.pricing'), href: '/pricing' },
    ],
    legal: [
      { name: t('footer.imprint'), href: '/imprint' },
      { name: t('footer.privacy'), href: '/privacy' },
    ],
  }

  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <Image
                src="/images/logo-256.png"
                alt="Z-Flow Logo"
                width={36}
                height={36}
                className="w-9 h-9"
              />
              <span className="text-xl font-semibold transition-colors duration-300 group-hover:text-brand-orange">
                Z-Flow
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {t('footer.tagline')}
            </p>
            <p className="text-white/40 text-sm">
              {t('footer.location')}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/80">
              {t('footer.servicesTitle')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/80">
              {t('footer.companyTitle')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/80">
              {t('footer.contactTitle')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-white/60 hover:text-white transition-colors duration-300 text-sm"
                >
                  {contactEmail}
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-brand-orange hover:text-brand-orange-hover transition-colors duration-300 text-sm font-medium"
                >
                  {t('cta.requestProject')} →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Tools */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-white/40 text-xs uppercase tracking-wider mb-4 text-center">
            {t('footer.techWeUse')}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 bg-white/5 text-white/50 text-sm rounded-lg border border-white/10"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/40 hover:text-white/60 transition-colors duration-300 text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
