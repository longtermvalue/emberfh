import React from 'react';
import { Link } from 'react-router-dom';

const RESERVATION_URL = 'https://www.opentable.ca/r/ember-reservations-innisfil?restref=1498666&lang=en-CA&ot_source=Restaurant%20website';
const INSTAGRAM_URL = 'https://www.instagram.com/emberfridayharbour/';
const FACEBOOK_URL = 'https://www.facebook.com/emberfridayharbour';
const MAPS_URL = 'https://maps.app.goo.gl/EfgvJpAkTF2ETsff6';
const REVIEW_URL = 'https://search.google.com/local/writereview?placeid=ChIJYUcWlrOvKogRh8rHHD16gZ0';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 pt-10 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          <div>
            <img src="/ember-logo.png" alt="Ember" className="h-10 w-auto mb-4" style={{ mixBlendMode: 'screen', padding: 0, boxShadow: 'none', border: 'none' }} />
            <p className="text-[14px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Flavours of the Mediterranean
            </p>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase mb-5 font-medium" style={{ color: 'var(--color-accent)' }}>
              Contact
            </p>
            <div className="space-y-1.5 text-[14px]" style={{ color: 'rgba(255,255,255,0.6)' }}>
              <p style={{ color: 'var(--color-text-secondary)', fontFamily: 'Playfair Display, serif', fontSize: '13px' }}>Ember - Friday Harbour</p>
              <p>Friday Harbour Resort</p>
              <p>261 Sunseeker Ave</p>
              <p>Innisfil ON L9S 0J7</p>
              <a
                href="tel:7056159832"
                style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', display: 'block', marginTop: '4px' }}
                className="transition-opacity hover:opacity-80"
              >705-615-9832</a>
              <div className="mt-3 space-y-1.5">
                <p>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#d4953a', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
                    className="transition-opacity hover:opacity-80"
                  >
                    Get Directions →
                  </a>
                </p>
                <p>
                  <a
                    href={REVIEW_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', letterSpacing: '0.05em', textDecoration: 'none', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#d4953a'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'; }}
                  >
                    Leave Us a Review on Google
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase mb-5 font-medium" style={{ color: 'var(--color-accent)' }}>
              Summer Hours
            </p>
            <div className="space-y-2 text-[13px]" style={{ color: 'rgba(255,255,255,0.6)' }}>
              <p style={{ color: 'var(--color-accent)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2px' }}>Lunch</p>
              <p>Daily: 12:00 PM - 3:00 PM</p>
              <p style={{ color: 'var(--color-accent)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '8px', marginBottom: '2px' }}>Dinner</p>
              <p>Sun – Thu: 5:00 PM - 9:00 PM</p>
              <p>Fri – Sat: 5:00 PM - 11:00 PM</p>
              <p style={{ fontSize: '11px', fontStyle: 'italic', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>Subject to change due to Stat Holidays.</p>
            </div>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase mb-5 font-medium" style={{ color: 'var(--color-accent)' }}>
              Quick Links
            </p>
            <div className="flex flex-col gap-2.5 text-[14px]">
              {[
                { label: 'Lunch Menu', href: '/menu/lunch' },
                { label: 'Dinner Menu', href: '/menu/dinner' },
                { label: 'Private Events', href: '/private-events' },
                { label: 'Hours & Directions', href: '/hours-directions' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="transition-colors duration-200"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,1)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'; }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://ember.gpr.globalpaymentsinc.ca/gift"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200"
                style={{ color: 'rgba(255,255,255,0.6)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,1)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'; }}
              >
                Gift Cards
              </a>
              <a
                href={RESERVATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80 mt-1"
                style={{ color: 'var(--color-accent)' }}
              >
                Make a Reservation
              </a>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid var(--color-border-subtle)' }}
        >
          <p className="text-[12px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
            &copy; 2026 Ember - Flavours of the Mediterranean. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-opacity hover:opacity-70"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="3.5"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="transition-opacity hover:opacity-70"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
