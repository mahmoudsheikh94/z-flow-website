'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const t = useTranslations('common')

  const navigation = [
    { name: t('navigation.services'), href: '/services' },
    { name: t('navigation.projects'), href: '/projects' },
    { name: t('navigation.process'), href: '/process' },
    { name: t('navigation.pricing'), href: '/pricing' },
    { name: t('navigation.about'), href: '/about' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
      style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/images/logo-256.png"
              alt="Z-Flow Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-brand-orange">
              Z-Flow
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium text-white/80 hover:text-white transition-colors duration-300 link-underline"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button & Language Switcher */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <Link href="/contact" className="btn btn-primary text-sm">
              {t('cta.startProject')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          <div className="flex flex-col gap-4 pt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/80 hover:text-white transition-colors duration-300 py-2"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center gap-4 mt-2">
              <LanguageSwitcher />
            </div>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn btn-primary mt-2 w-full text-center"
            >
              {t('cta.startProject')}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
