import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: '#020617',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#38BDF8',
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          letterSpacing: '-1px',
          border: '2px solid #38BDF8',
          borderRadius: '6px',
        }}
      >
        MK
      </div>
    ),
    { ...size }
  )
}
