import React from 'react';
import MenuTabNav from '../components/MenuTabNav';

const RESERVATION_URL = 'https://www.opentable.ca/r/ember-reservations-innisfil?restref=1498666&lang=en-CA&ot_source=Restaurant%20website';

export default function BrunchMenu() {
  return (
    <div style={{ background: 'var(--color-bg-primary)', minHeight: '100vh', paddingTop: '80px' }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-10 inner-content-padding">
        <div className="mb-10">
          <p className="text-[11px] tracking-[0.35em] uppercase mb-4 font-medium" style={{ color: 'var(--color-accent)' }}>
            Sundays
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1, fontWeight: 400 }}>
            Coastal Brunch
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
            minHeight: '520px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src="https://images.pexels.com/photos/5638527/pexels-photo-5638527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Mediterranean Brunch at Ember"
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
              maxWidth: '720px',
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
              Sunday Brunch
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
              Coming Summer 2026
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
                color: 'rgba(255,255,255,0.85)',
                lineHeight: 1.85,
                fontSize: '16px',
                fontFamily: 'Playfair Display, serif',
                fontStyle: 'italic',
                marginBottom: '1.5rem',
              }}
            >
              A new kind of Sunday is coming.
            </p>

            <p
              style={{
                color: 'rgba(255,255,255,0.75)',
                lineHeight: 1.85,
                fontSize: '15px',
                fontFamily: 'DM Sans, sans-serif',
                marginBottom: '1.25rem',
              }}
            >
              This isn't your traditional brunch - this is brunch, the Ember way.
            </p>

            <p
              style={{
                color: 'rgba(255,255,255,0.75)',
                lineHeight: 1.85,
                fontSize: '15px',
                fontFamily: 'DM Sans, sans-serif',
                marginBottom: '1.25rem',
              }}
            >
              Fresh, vibrant, and built around Mediterranean flavour, our coastal brunch celebrates seasonal ingredients, shareable moments, and dishes designed to wake up your palate.
            </p>

            <p
              style={{
                color: 'rgba(255,255,255,0.75)',
                lineHeight: 1.85,
                fontSize: '15px',
                fontFamily: 'DM Sans, sans-serif',
                marginBottom: '1.25rem',
              }}
            >
              This summer, brunch gets a new identity at Friday Harbour Resort.
            </p>

            <p
              style={{
                color: 'var(--color-accent)',
                lineHeight: 1.85,
                fontSize: '14px',
                fontFamily: 'DM Sans, sans-serif',
                marginBottom: '0',
              }}
            >
              However you arrive - by land, air, or water - join us on the shores of Lake Simcoe.
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
