import { ImageResponse } from 'next/og'

export const runtime = 'edge'

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
          background: 'linear-gradient(135deg, #ff6b35 0%, #ff8f5a 100%)',
          borderRadius: 32,
        }}
      >
        <span
          style={{
            fontSize: 120,
            fontWeight: 700,
            color: 'white',
            marginTop: -8,
          }}
        >
          Z
        </span>
      </div>
    ),
    {
      ...size,
    }
  )
}
