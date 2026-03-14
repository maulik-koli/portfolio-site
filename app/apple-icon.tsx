import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 80,
          background: '#020617',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#38BDF8',
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          letterSpacing: '-4px',
          border: '8px solid #38BDF8',
          borderRadius: '32px',
        }}
      >
        MK
      </div>
    ),
    { ...size }
  )
}
