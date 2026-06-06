import React, { useState } from 'react';

const INSTAGRAM_URL = 'https://www.instagram.com/emberfridayharbour/';
const FACEBOOK_URL = 'https://www.facebook.com/emberfridayharbour';
const MAPS_URL = 'https://maps.app.goo.gl/EfgvJpAkTF2ETsff6';
const REVIEW_URL = 'https://search.google.com/local/writereview?placeid=ChIJYUcWlrOvKogRh8rHHD16gZ0';
const MAP_EMBED_SRC = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2844.5!2d-79.5334052!3d44.3935775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882aafb396164761%3A0x9d817a3d1cc7ca87!2sEmber%20(Friday%20Harbour%20Resort)!5e0!3m2!1sen!2sca!4v1';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  });

  const inputStyle: React.CSSProperties = {
    background: 'var(--color-bg-card)',
    border: '1px solid var(--color-border-subtle)',
    color: 'var(--color-text-primary)',
    fontFamily: 'DM Sans, sans-serif',
    outline: 'none',
    width: '100%',
    padding: '12px 16px',
    fontSize: '14px',
  };

  return (
    <div style={{ background: 'var(--color-bg-primary)', minHeight: '100vh', paddingTop: '80px' }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-10 inner-content-padding">
        <div className="mb-14 max-w-[700px]">
          <p className="text-[11px] tracking-[0.35em] uppercase mb-4 font-medium" style={{ color: 'var(--color-accent)' }}>
            Reach Out
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1, marginBottom: '1.25rem' }}>
            Contact Ember
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
            Questions about reservations, private events, or anything else? Reach out below and we'll get back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            {submitted ? (
              <div
                className="p-10 text-center"
                style={{ background: 'var(--color-bg-section-alt)', border: '1px solid var(--color-border-subtle)' }}
              >
                <p className="text-[17px] mb-2" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--color-text-primary)' }}>
                  Message received.
                </p>
                <p className="text-[14px]" style={{ color: 'var(--color-text-muted)' }}>
                  We'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form
                className="space-y-4"
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone (optional)"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  style={inputStyle}
                />
                <select
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  style={{ ...inputStyle, appearance: 'none' as const }}
                >
                  <option value="" disabled>Subject</option>
                  <option>General Inquiry</option>
                  <option>Reservations</option>
                  <option>Private Events</option>
                  <option>Feedback</option>
                  <option>Other</option>
                </select>
                <textarea
                  placeholder="Your message..."
                  rows={6}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, resize: 'vertical' as const }}
                />
                <button type="submit" className="btn-primary w-full text-center">
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div>
            <div
              className="p-8 mb-6"
              style={{
                background: 'var(--color-bg-section-alt)',
                border: '1px solid var(--color-border-subtle)',
              }}
            >
              <p className="text-[18px] font-medium mb-5" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--color-text-primary)' }}>
                Ember - Friday Harbour
              </p>
              <div className="space-y-1 text-[14px]" style={{ color: 'var(--color-text-secondary)' }}>
                <p>Friday Harbour Resort</p>
                <p>261 Sunseeker Ave</p>
                <p>Innisfil ON L9S 0J7</p>
              </div>
              <div className="mt-3">
                <a
                  href="tel:7056159832"
                  className="text-[14px] transition-opacity hover:opacity-80"
                  style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}
                >
                  705-615-9832
                </a>
              </div>
              <div className="mt-4 space-y-1.5">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#d4953a', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block' }}
                  className="transition-opacity hover:opacity-80"
                >
                  Get Directions →
                </a>
                <a
                  href={REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#8a7e72', fontSize: '12px', letterSpacing: '0.05em', textDecoration: 'none', display: 'block', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#d4953a'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#8a7e72'; }}
                >
                  Leave Us a Review on Google
                </a>
              </div>
              <div className="mt-8 pt-6" style={{ borderTop: '1px solid var(--color-border-subtle)' }}>
                <p className="text-[11px] tracking-[0.3em] uppercase mb-4 font-medium" style={{ color: 'var(--color-accent)' }}>
                  Follow Us
                </p>
                <div className="flex gap-4">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] transition-opacity hover:opacity-70"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    Instagram
                  </a>
                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] transition-opacity hover:opacity-70"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{
                width: '100%',
                height: '300px',
                borderRadius: '2px',
                overflow: 'hidden',
                border: '1px solid rgba(245, 240, 235, 0.05)',
              }}
            >
              <iframe
                title="Ember location map"
                src={MAP_EMBED_SRC}
                width="100%"
                height="300"
                style={{ border: 0, filter: 'grayscale(40%) contrast(1.1) brightness(0.85)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
