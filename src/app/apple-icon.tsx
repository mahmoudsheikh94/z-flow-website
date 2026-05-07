import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0e0918',
          borderRadius: 32,
        }}
      >
        <svg
          viewBox="0 0 100 100"
          width="120"
          height="120"
        >
          {/* Main lightning bolt */}
          <path
            d="M 58 4 L 22 50 L 44 50 L 38 96 L 78 46 L 54 46 Z"
            fill="none"
            stroke="#ee4f27"
            strokeWidth="5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          {/* Branch line going left from top */}
          <line x1="40" y1="27" x2="26" y2="18" stroke="#ee4f27" strokeWidth="5" strokeLinecap="round" />
          {/* Circuit node dots */}
          <circle cx="40" cy="27" r="3.5" fill="#ee4f27" />
          <circle cx="26" cy="18" r="3.5" fill="#ee4f27" />
          <circle cx="44" cy="50" r="3.5" fill="#ee4f27" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
