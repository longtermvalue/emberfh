import React, { useEffect, useRef, useState } from 'react';

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

const galleryImages = [
  '/91C8DCB5-3F3B-4B0C-80C1-ACDCC87D3D61_1_102_o.jpeg',
  '/7CB2DDC6-3E1F-4323-9BDB-ADD081821DF6_1_102_o.jpeg',
  '/1E981809-6162-4FCC-ADE7-9AF62DD390D2_1_102_o.jpeg',
  '/CCA8C609-2CF2-464B-A4A0-2293AC5A046F_1_102_o.jpeg',
];

export default function PrivateEvents() {
  const introReveal = useReveal();
  const galleryReveal = useReveal();
  const closingReveal = useReveal();
  const eventsReveal = useReveal();

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
          src="/CCA8C609-2CF2-464B-A4A0-2293AC5A046F_1_102_o.jpeg"
          alt="Private Dining at Ember"
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
            Gather
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1, marginBottom: '1.5rem', maxWidth: '700px' }}>
            Private Dining & Events
          </h1>
          <a
            href="#event-request"
            className="btn-primary"
          >
            Inquire About Events
          </a>
        </div>
      </section>

      <div style={{ background: 'var(--color-bg-section-alt)', padding: '40px 0' }} className="inner-content-padding">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div
            ref={introReveal.ref}
            className={`reveal ${introReveal.visible ? 'visible' : ''} grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`}
          >
            <div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: 1.3, marginBottom: '1.5rem' }}>
                Celebrate life's biggest moments at Ember.
              </h2>
              <p className="mb-6" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
                From milestone celebrations and engagement parties to corporate gatherings and holiday events, Ember offers a refined, coastal setting designed to bring people together. Located on the shores of Lake Simcoe at Friday Harbour Resort, it's the perfect destination for unforgettable group experiences.
              </p>
              <p className="mb-6" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
                With flexible seating arrangements and a team that truly cares about the details, we host private dinners, cocktail receptions, and full restaurant buyouts with ease.
              </p>
              <p className="mb-10" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
                Inquire about booking your private event and allow our team to take care of every detail - so you can be fully present for the occasion.
              </p>
              <a href="#event-request" className="btn-primary">
                Submit an Event Request
              </a>
            </div>
            <div className="img-hover-zoom aspect-[4/3] lg:h-[480px] overflow-hidden">
              <img
                src="/CCA8C609-2CF2-464B-A4A0-2293AC5A046F_1_102_o.jpeg"
                alt="Private events at Ember"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: 'var(--color-bg-primary)', padding: '40px 0' }} className="inner-content-padding">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div
            ref={galleryReveal.ref}
            className={`reveal ${galleryReveal.visible ? 'visible' : ''} grid grid-cols-2 gap-4`}
          >
            {galleryImages.map((img, i) => (
              <div key={i} className="img-hover-zoom aspect-[4/3] overflow-hidden">
                <img
                  src={img}
                  alt="Ember dining"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: 'var(--color-bg-section-alt)', padding: '40px 0' }} className="inner-content-padding">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <div
            ref={closingReveal.ref}
            className={`reveal ${closingReveal.visible ? 'visible' : ''}`}
          >
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: 1.3, marginBottom: '1.5rem' }}>
              Special Events & Experiences
            </h2>
            <p className="mb-6" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
              Join us for unique experiences, including winemaker dinners, curated scotch and tequila tastings, and interactive cocktail and cooking classes.
            </p>
            <p className="mb-10" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
              At Ember, we're always creating what's next - because it's about more than just great food in a vibrant atmosphere.
            </p>
            <a href="#event-request" className="btn-primary">
              Submit an Event Request
            </a>
          </div>
        </div>
      </div>

      <div id="event-request" style={{ background: 'var(--color-bg-primary)', padding: '40px 0' }} className="inner-content-padding">
        <div className="max-w-[700px] mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-[11px] tracking-[0.35em] uppercase mb-4 font-medium" style={{ color: 'var(--color-accent)' }}>
              Get in Touch
            </p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', lineHeight: 1.2 }}>
              Event Request Form
            </h2>
          </div>
          <EventRequestForm />
        </div>
      </div>
    </div>
  );
}

function EventRequestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', eventType: '', date: '', guests: '', message: '',
  });

  const inputStyle = {
    background: 'var(--color-bg-card)',
    border: '1px solid var(--color-border-subtle)',
    color: 'var(--color-text-primary)',
    fontFamily: 'DM Sans, sans-serif',
    outline: 'none',
    width: '100%',
    padding: '12px 16px',
    fontSize: '14px',
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <p className="text-[16px]" style={{ color: 'var(--color-text-primary)' }}>
          Thank you for your inquiry.
        </p>
        <p className="text-[14px] mt-2" style={{ color: 'var(--color-text-muted)' }}>
          Our events team will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your Name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={inputStyle}
        />
        <input
          type="email"
          placeholder="Email Address"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={inputStyle}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="tel"
          placeholder="Phone Number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          style={inputStyle}
        />
        <select
          required
          value={form.eventType}
          onChange={(e) => setForm({ ...form, eventType: e.target.value })}
          style={{ ...inputStyle, appearance: 'none' as const }}
        >
          <option value="" disabled>Event Type</option>
          <option>Corporate Dinner</option>
          <option>Birthday Celebration</option>
          <option>Anniversary</option>
          <option>Rehearsal Dinner</option>
          <option>Holiday Party</option>
          <option>Other</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="date"
          placeholder="Preferred Date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          style={inputStyle}
        />
        <input
          type="number"
          placeholder="Number of Guests"
          value={form.guests}
          onChange={(e) => setForm({ ...form, guests: e.target.value })}
          style={inputStyle}
        />
      </div>
      <textarea
        placeholder="Tell us about your event..."
        rows={5}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        style={{ ...inputStyle, resize: 'vertical' as const }}
      />
      <button type="submit" className="btn-primary w-full text-center">
        Submit Request
      </button>
    </form>
  );
}
