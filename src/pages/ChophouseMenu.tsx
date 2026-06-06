import React from 'react';
import MenuTabNav from '../components/MenuTabNav';

const RESERVATION_URL = 'https://www.opentable.ca/r/ember-reservations-innisfil?restref=1498666&lang=en-CA&ot_source=Restaurant%20website';

export default function ChophouseMenu() {
  return (
    <div style={{ background: 'var(--color-bg-primary)', minHeight: '100vh', paddingTop: '80px' }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-10 inner-content-padding">
        <div className="mb-10">
          <p className="text-[11px] tracking-[0.35em] uppercase mb-4 font-medium" style={{ color: 'var(--color-accent)' }}>
            Coming Soon
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1, fontWeight: 400 }}>
            Chophouse
          </h1>
        </div>

        <MenuTabNav />

        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '4px',
            marginTop: '40px',
            marginBottom: '60px',
            minHeight: '480px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src="/BE1503B2-9436-4471-AE4C-5E421EA5A3DF.png"
            alt="Chophouse at Ember"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'brightness(0.45)',
            }}
          />

          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(13,13,13,0.3) 0%, rgba(13,13,13,0.65) 100%)',
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 1,
              textAlign: 'center',
              maxWidth: '680px',
              padding: '60px 32px',
            }}
          >
            <p
              style={{
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.35em',
                color: 'var(--color-accent)',
                fontFamily: 'DM Sans, sans-serif',
                marginBottom: '1.5rem',
              }}
            >
              The Chophouse Experience
            </p>

            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                lineHeight: 1.1,
                fontWeight: 400,
                color: '#f5f0eb',
                marginBottom: '1rem',
              }}
            >
              Opening May 16, 2026
            </h2>

            <div
              style={{
                width: '48px',
                height: '1px',
                background: 'var(--color-accent)',
                margin: '0 auto 1.75rem',
                opacity: 0.7,
              }}
            />

            <p
              style={{
                color: 'rgba(255,255,255,0.75)',
                lineHeight: 1.85,
                fontSize: '15px',
                fontFamily: 'DM Sans, sans-serif',
                marginBottom: '2rem',
              }}
            >
              Ember's Chophouse is an upscale casual dining experience dedicated to the art of fire and aged chops, seafood and a daily fish feature - in an elevated dining experience set against the backdrop of Friday Harbour, located on the shores of Lake Simcoe.
            </p>

            <p
              style={{
                fontSize: '12px',
                color: 'rgba(255,255,255,0.45)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontFamily: 'DM Sans, sans-serif',
              }}
            >
              Stay tuned - details coming soon
            </p>
          </div>
        </div>

        <div className="text-center mt-6">
          <a href={RESERVATION_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Make a Reservation
          </a>
        </div>
      </div>
    </div>
  );
}
