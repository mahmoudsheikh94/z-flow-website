import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Z-Flow - Engineering Studio Berlin'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          backgroundImage: 'radial-gradient(circle at 25% 25%, #1a1a2e 0%, transparent 50%), radial-gradient(circle at 75% 75%, #16213e 0%, transparent 50%)',
        }}
      >
        {/* Logo and brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 16,
              background: 'linear-gradient(135deg, #ff6b35 0%, #ff8f5a 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 24,
              fontSize: 48,
              fontWeight: 700,
              color: 'white',
            }}
          >
            Z
          </div>
          <span
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: 'white',
              letterSpacing: '-2px',
            }}
          >
            Z-Flow
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: 36,
              color: '#ff6b35',
              fontWeight: 600,
              marginBottom: 16,
            }}
          >
            Engineering Studio Berlin
          </span>
          <span
            style={{
              fontSize: 28,
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: 400,
            }}
          >
            MVPs & Automation that deliver
          </span>
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: 'linear-gradient(90deg, #ff6b35 0%, #ff8f5a 50%, #ff6b35 100%)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
