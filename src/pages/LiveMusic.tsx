import React from 'react';

const RESERVATION_URL = 'https://www.opentable.ca/r/ember-reservations-innisfil?restref=1498666&lang=en-CA&ot_source=Restaurant%20website';
const INSTAGRAM_URL = 'https://www.instagram.com/emberfridayharbour/';

export default function LiveMusic() {
  return (
    <div style={{ background: 'var(--color-bg-primary)', minHeight: '100vh', paddingTop: '80px' }}>
      <section
        style={{
          position: 'relative',
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <img
          src="/Ember.jpg"
          alt="Live Music at Ember"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            filter: 'brightness(0.35)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(13,13,13,0.4) 0%, rgba(13,13,13,0.8) 100%)',
          }}
        />
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20" style={{ position: 'relative', zIndex: 1 }}>
          <p className="text-[11px] tracking-[0.35em] uppercase mb-4 font-medium" style={{ color: 'var(--color-accent)' }}>
            Saturdays at Ember
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1, marginBottom: '1.5rem', maxWidth: '700px' }}>
            Live Music at Ember
          </h1>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-10 inner-content-padding">
        <div className="max-w-[800px] mb-14">
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Saturday Nights at Ember - Where Music Meets Conversation
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Join us Saturday evenings at Ember for live music designed to complement - not compete with - the moment. Whether you're celebrating something special, catching up with friends, or unwinding after a long week, the atmosphere is set for conversation to take centre stage.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Relax, sip, and settle into a space where great music enhances the experience without ever overpowering it.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
            Live music runs select Saturdays from May 16 through September 5, 2026. Reservations after 8pm are highly recommended for those seeking the full evening experience.
          </p>
        </div>

        <div className="mb-16" style={{ borderTop: '1px solid var(--color-border-subtle)' }}>
          <div
            className="flex flex-col sm:flex-row sm:items-center gap-4 py-6"
            style={{ borderBottom: '1px solid var(--color-border-subtle)' }}
          >
            <div
              className="flex-shrink-0 text-center py-3 px-4"
              style={{
                background: 'var(--color-bg-card)',
                border: '1px solid var(--color-border)',
              }}
            >
              <span className="block text-[12px] font-medium tracking-[0.1em] uppercase" style={{ color: 'var(--color-accent)' }}>
                Select Saturdays
              </span>
              <span className="block text-[11px] tracking-[0.05em] uppercase mt-1" style={{ color: 'var(--color-text-muted)' }}>
                May 16 - Sep 5, 2026
              </span>
            </div>
            <div className="flex-1 sm:pl-4">
              <p
                className="text-[18px] font-medium mb-1"
                style={{ fontFamily: 'Playfair Display, serif', color: 'var(--color-text-primary)' }}
              >
                Live Music at Ember
              </p>
              <p className="text-[13px]" style={{ color: 'var(--color-text-muted)' }}>
                8:00 PM - 11:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href={RESERVATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Make a Reservation
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ background: 'transparent', border: '1px solid var(--color-accent)' }}
          >
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
