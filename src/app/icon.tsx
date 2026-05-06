import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
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
          borderRadius: 6,
        }}
      >
        <svg
          viewBox="0 0 120 120"
          width="26"
          height="26"
        >
          <path
            d="M 70 10 L 28 64 L 56 64 L 50 110 L 92 56 L 64 56 Z"
            fill="#ee4f27"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
