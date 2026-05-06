'use client'

import { useState, useEffect } from 'react'

export function SplashScreen() {
  const [visible, setVisible] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)
  const [pct, setPct] = useState(0)

  useEffect(() => {
    if (sessionStorage.getItem('z-flow-splash-seen')) return
    setVisible(true)
    document.body.style.overflow = 'hidden'
    sessionStorage.setItem('z-flow-splash-seen', '1')

    const loaderStart = 1700
    const loaderDur = 2400
    const t0 = performance.now()

    function tick(now: number) {
      const elapsed = now - t0
      let p: number
      if (elapsed < loaderStart) p = 0
      else if (elapsed > loaderStart + loaderDur) p = 100
      else {
        const x = (elapsed - loaderStart) / loaderDur
        const eased = x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2
        p = Math.round(eased * 100)
      }
      setPct(p)
      if (p < 100) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)

    const fadeTimer = setTimeout(() => setFadeOut(true), 4200)
    const removeTimer = setTimeout(() => {
      setVisible(false)
      document.body.style.overflow = ''
    }, 5000)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
      document.body.style.overflow = ''
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className={`splash-screen ${fadeOut ? 'splash-fade-out' : ''}`}
      aria-hidden="true"
    >
      {/* Dot grid */}
      <div className="splash-grid" />

      {/* Warm glow */}
      <div className="splash-glow" />

      {/* Rings */}
      <div className="splash-rings">
        <div className="splash-ring splash-r1" />
        <div className="splash-ring splash-r2" />
        <div className="splash-ring splash-r3" />
        <div className="splash-orbit splash-o1">
          <div className="splash-orbit-dot" />
        </div>
        <div className="splash-orbit splash-o2">
          <div className="splash-orbit-dot" />
        </div>
      </div>

      {/* Tick marks */}
      <div className="splash-ticks">
        <span className="splash-tick-n" />
        <span className="splash-tick-s" />
        <span className="splash-tick-e" />
        <span className="splash-tick-w" />
      </div>

      {/* Corner UI */}
      <div className="splash-corners">
        <div className="splash-corner splash-c-tl" />
        <div className="splash-corner splash-c-tr" />
        <div className="splash-corner splash-c-bl" />
        <div className="splash-corner splash-c-br" />
      </div>
      <div className="splash-corner-label splash-cl-tl">{'// boot.seq 03'}</div>
      <div className="splash-corner-label splash-cl-tr">x:1240 · y:0480</div>
      <div className="splash-corner-label splash-cl-bl">
        <span className="splash-status-dot" />
        connection · live
      </div>

      {/* Logo + Wordmark */}
      <div className="splash-logo-wrap">
        <div className="splash-logo">
          <svg viewBox="0 0 120 120" aria-label="Z-Flow">
            <path
              className="splash-bolt-stroke"
              d="M 70 10 L 28 64 L 56 64 L 50 110 L 92 56 L 64 56 Z"
            />
            <path
              className="splash-bolt-detail"
              d="M 56 78 L 64 78"
            />
            <circle className="splash-bolt-dot" cx="56" cy="78" r="3.2" />
          </svg>
        </div>

        <div className="splash-wordmark">
          <span className="splash-wm-z">z</span>
          <span className="splash-wm-dash">-</span>
          <span>flow</span>
        </div>

        <div className="splash-tag">
          <span className="splash-tag-line" />
          Digitalization Partner
          <span className="splash-tag-line splash-tag-line-r" />
        </div>
      </div>

      {/* Loader */}
      <div className="splash-loader">
        <div className="splash-loader-track">
          <div className="splash-loader-fill" />
        </div>
        <div className="splash-loader-row">
          <span>Initializing process map</span>
          <span className="splash-loader-pct">
            {String(pct).padStart(3, '0')}%
          </span>
        </div>
      </div>

      {/* Version pill */}
      <div className="splash-version">
        <span className="splash-version-dot" />
        v.024 · berlin
      </div>
    </div>
  )
}
