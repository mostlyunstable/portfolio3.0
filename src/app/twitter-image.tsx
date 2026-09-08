import { ImageResponse } from 'next/og';
import { profile } from '@/data/profile';

export const runtime = 'edge';

export const alt = 'Mayank Kumar - Automation Engineer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#0c0a09', // stone-950
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <div
            style={{
              fontSize: 100,
              fontWeight: 800,
              letterSpacing: '-0.05em',
              color: '#f5f5f4', // stone-50
              lineHeight: 1,
            }}
          >
            {profile.name.toUpperCase()}
          </div>
          <div
            style={{
              fontSize: 48,
              fontWeight: 600,
              letterSpacing: '-0.02em',
              color: '#a8a29e', // stone-400
              lineHeight: 1,
            }}
          >
            {profile.role.toUpperCase()}
          </div>
        </div>
        
        <div
          style={{
            marginTop: 'auto',
            display: 'flex',
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: '0.1em',
            color: '#78716c', // stone-500
            textTransform: 'uppercase',
          }}
        >
          SYSTEM ARCHITECTURE • DATA PIPELINES • AUTOMATION
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
