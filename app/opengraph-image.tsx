import { SOCIAL_LINKS } from '@/lib/data'
import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Maulik Koli | Full Stack Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#020617',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            backgroundColor: '#38BDF8',
            boxShadow: '0 0 20px 4px rgba(56, 189, 248, 0.8)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            right: '-10%',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: 480,
            fontWeight: 'bold',
            color: '#38BDF8',
            opacity: 0.05,
            lineHeight: 1,
            letterSpacing: '-20px',
            pointerEvents: 'none',
          }}
        >
          MK
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
            paddingLeft: '80px',
            zIndex: 10,
          }}
        >
          <div
            style={{
              color: '#38BDF8',
              fontFamily: 'monospace',
              fontSize: 20,
              letterSpacing: '4px',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}
          >
            FULL STACK DEVELOPER
          </div>
          
          <div
            style={{
              color: '#F1F5F9',
              fontSize: 96,
              fontWeight: 700,
              fontFamily: 'serif',
              letterSpacing: '-2px',
              lineHeight: 1,
              marginBottom: '24px',
            }}
          >
            Maulik Koli
          </div>

          <div
            style={{
              color: '#38BDF8',
              fontSize: 24,
              fontFamily: 'monospace',
              marginBottom: '48px',
            }}
          >
            {SOCIAL_LINKS.DOMAIN}
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            {['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL'].map((tech) => (
              <div
                key={tech}
                style={{
                  color: '#F1F5F9',
                  backgroundColor: '#0F172A',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  padding: '8px 24px',
                  borderRadius: '9999px',
                  fontSize: 18,
                  fontFamily: 'monospace',
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '60px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            color: '#38BDF8',
            fontFamily: 'monospace',
            fontSize: 18,
            letterSpacing: '2px',
          }}
        >
          <div
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: '#38BDF8',
              borderRadius: '50%',
              boxShadow: '0 0 12px 2px rgba(56, 189, 248, 0.8)',
            }}
          />
          STATUS: AVAILABLE FOR HIRE
        </div>
      </div>
    ),
    { ...size }
  )
}
