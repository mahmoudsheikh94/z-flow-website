'use client'

export function HeroBrandVisual() {
  return (
    <div className="hero-animate hero-animate-6 relative flex items-center justify-center">
      <div className="relative w-full max-w-[420px] mx-auto aspect-square">
        {/* Warm radial glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[80%] h-[80%] rounded-full bg-brand-orange/15 blur-[60px] animate-pulse" />
        </div>

        {/* Concentric rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-[55%] h-[55%] rounded-full border border-white/10 hero-ring-1" />
          <div className="absolute w-[75%] h-[75%] rounded-full border border-white/[0.07] hero-ring-2" />
          <div className="absolute w-[95%] h-[95%] rounded-full border border-dashed border-white/[0.05] hero-ring-3" />
        </div>

        {/* Orbiting dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[55%] h-[55%] hero-orbit">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-brand-orange shadow-[0_0_12px_rgba(238,79,39,0.9)]" />
          </div>
        </div>

        {/* Center logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <svg
              viewBox="0 0 120 120"
              className="w-28 h-28 lg:w-36 lg:h-36 drop-shadow-[0_0_24px_rgba(238,79,39,0.4)]"
              aria-label="Z-Flow"
            >
              <path
                d="M 70 10 L 28 64 L 56 64 L 50 110 L 92 56 L 64 56 Z"
                fill="none"
                stroke="#ee4f27"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="hero-bolt-draw"
              />
              <path
                d="M 56 78 L 64 78"
                fill="none"
                stroke="#ee4f27"
                strokeWidth="7"
                strokeLinecap="round"
                className="hero-bolt-detail"
              />
              <circle cx="56" cy="78" r="3" fill="#ee4f27" className="hero-bolt-dot" />
            </svg>
          </div>
        </div>

        {/* Tick marks on outer ring */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[95%] h-[95%]">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-px bg-white/15" />
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-px bg-white/15" />
            <span className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-px h-2.5 bg-white/15" />
            <span className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-px h-2.5 bg-white/15" />
          </div>
        </div>
      </div>
    </div>
  )
}
