import React from 'react';
import { Gift, Mail, Utensils } from 'lucide-react';

export default function GiftCards() {
  return (
    <div style={{ background: 'var(--color-bg-primary)', minHeight: '100vh', paddingTop: '80px' }}>
      <section
        style={{
          position: 'relative',
          minHeight: '350px',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
        className="inner-hero-padding"
      >
        <img
          src="/91C8DCB5-3F3B-4B0C-80C1-ACDCC87D3D61_1_102_o.jpeg"
          alt="Gift Cards at Ember"
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
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-12" style={{ position: 'relative', zIndex: 1 }}>
          <p className="text-[11px] tracking-[0.35em] uppercase mb-4 font-medium" style={{ color: 'var(--color-accent)' }}>
            Give the Gift of Ember
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1, marginBottom: '1rem', maxWidth: '700px' }}>
            Gift Cards
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', lineHeight: 1.7 }}>
            The perfect gift for any occasion - share an unforgettable dining experience at Ember.
          </p>
        </div>
      </section>

      <div style={{ background: 'var(--color-bg-section-alt)', padding: '40px 0' }} className="inner-content-padding">
        <div className="max-w-[900px] mx-auto px-6">
          <div
            className="p-10 mb-12"
            style={{
              background: 'var(--color-bg-primary)',
              border: '1px solid var(--color-border-subtle)',
            }}
          >
            <p className="mb-6" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
              Give someone a night at Ember. Gift cards are available in any amount and can be used for lunch, dinner, brunch, drinks, or private events.
            </p>
            <p className="mb-10" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
              Purchase online and receive your gift card by email, or pick one up in person at the restaurant.
            </p>
            <a
              href="https://ember.gpr.globalpaymentsinc.ca/gift"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Purchase a Gift Card
            </a>
          </div>

          <div className="mb-8">
            <p className="text-[11px] tracking-[0.35em] uppercase mb-6 font-medium text-center" style={{ color: 'var(--color-accent)' }}>
              How It Works
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div
                className="w-16 h-16 mx-auto mb-4 flex items-center justify-center"
                style={{
                  background: 'var(--color-bg-primary)',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: '50%',
                }}
              >
                <Gift size={28} style={{ color: 'var(--color-accent)' }} />
              </div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', color: 'var(--color-text-primary)', marginBottom: '0.75rem' }}>
                Choose Your Amount
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                Gift cards are available in any denomination - pick the amount that suits the occasion.
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-16 h-16 mx-auto mb-4 flex items-center justify-center"
                style={{
                  background: 'var(--color-bg-primary)',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: '50%',
                }}
              >
                <Mail size={28} style={{ color: 'var(--color-accent)' }} />
              </div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', color: 'var(--color-text-primary)', marginBottom: '0.75rem' }}>
                Send or Print
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                Purchase online and receive your gift card instantly by email, or pick one up in person at the restaurant.
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-16 h-16 mx-auto mb-4 flex items-center justify-center"
                style={{
                  background: 'var(--color-bg-primary)',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: '50%',
                }}
              >
                <Utensils size={28} style={{ color: 'var(--color-accent)' }} />
              </div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', color: 'var(--color-text-primary)', marginBottom: '0.75rem' }}>
                Enjoy Ember
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                Gift cards can be used for lunch, dinner, brunch, drinks, or private events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
