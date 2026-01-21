'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function ScrollAnimationProvider() {
  const pathname = usePathname()

  useEffect(() => {
    // Reset animations on route change
    document.querySelectorAll('[data-animate]').forEach((el) => {
      el.classList.remove('animated')
    })
    document.querySelectorAll('.hero-animate').forEach((el) => {
      el.classList.remove('loaded')
    })

    // Small delay to ensure DOM is ready after navigation
    const timeoutId = setTimeout(() => {
      // Scroll-triggered animations with refined thresholds
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Use requestAnimationFrame for smoother cascade
              requestAnimationFrame(() => {
                entry.target.classList.add('animated')
              })
            }
          })
        },
        {
          threshold: 0.15, // Trigger slightly later for more dramatic reveal
          rootMargin: '0px 0px -80px 0px', // Trigger earlier in viewport
        }
      )

      document.querySelectorAll('[data-animate]').forEach((el) => {
        observer.observe(el)
      })

      // Hero page load animations with slight delay
      requestAnimationFrame(() => {
        document.querySelectorAll('.hero-animate').forEach((el) => {
          el.classList.add('loaded')
        })
      })

      return () => observer.disconnect()
    }, 50)

    return () => clearTimeout(timeoutId)
  }, [pathname])

  return null
}
