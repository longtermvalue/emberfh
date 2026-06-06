import React from 'react';
import { Link } from 'react-router-dom';

const RESERVATION_URL = 'https://www.opentable.ca/r/ember-reservations-innisfil?restref=1498666&lang=en-CA&ot_source=Restaurant%20website';
const MAPS_URL = 'https://maps.app.goo.gl/EfgvJpAkTF2ETsff6';
const MAP_EMBED_SRC = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2844.5!2d-79.5334052!3d44.3935775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882aafb396164761%3A0x9d817a3d1cc7ca87!2sEmber%20(Friday%20Harbour%20Resort)!5e0!3m2!1sen!2sca!4v1';

const weeklyHours = [
  { day: 'Monday – Tuesday', time: 'Closed', closed: true },
  { day: 'Wednesday', time: '5:00pm – 9:00pm' },
  { day: 'Thursday', time: '5:00pm – 10:00pm' },
  { day: 'Friday – Saturday', time: '12:00pm – Late' },
  { day: 'Sunday', time: '12:00pm – 9:00pm' },
];

const directions = [
  { from: 'From Toronto', text: 'Approximately 50 minutes north via Highway 400. Take Exit 75 (Innisfil Beach Road) and follow signs to Friday Harbour Resort.' },
  { from: 'From Barrie', text: 'Approximately 20 minutes south via Highway 400. Take Exit 75 (Innisfil Beach Road) east to Friday Harbour Resort.' },
  { from: 'From Newmarket', text: 'Approximately 30 minutes northwest. Take Highway 404 north to Highway 400 north, then Exit 75.' },
  { from: 'From Orillia', text: 'Approximately 35 minutes south via Highway 11 to Highway 400 south, then Exit 75.' },
];

function HoursBlock({ rows }: { rows: { day: string; time: string; closed?: boolean }[] }) {
  return (
    <div className="mb-6">
      <div style={{ borderTop: '1px solid var(--color-border-subtle)' }}>
        {rows.map((h) => (
          <div
            key={h.day}
            className="flex justify-between items-center py-3.5"
            style={{ borderBottom: '1px solid var(--color-border-subtle)' }}
          >
            <span className="text-[14px]" style={{ color: 'var(--color-text-secondary)' }}>{h.day}</span>
            <span className="text-[14px] font-medium" style={{ color: h.closed ? 'var(--color-text-muted)' : 'var(--color-text-primary)' }}>{h.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HoursDirections() {
  return (
    <div style={{ background: 'var(--color-bg-primary)', minHeight: '100vh', paddingTop: '80px' }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-10 inner-content-padding">
        <div className="mb-14 max-w-[700px]">
          <p className="text-[11px] tracking-[0.35em] uppercase mb-4 font-medium" style={{ color: 'var(--color-accent)' }}>
            Plan Your Visit
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1, marginBottom: '1.25rem' }}>
            Hours and Directions
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
            Ember is located at Friday Harbour Resort in Innisfil, Ontario, on the shores of Lake Simcoe. Use the information below to plan your visit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="mb-8" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', lineHeight: 1.2 }}>
              Hours
            </h2>
            <HoursBlock rows={weeklyHours} />
            <p className="mt-4 text-[12px] italic" style={{ color: 'var(--color-text-muted)' }}>
              Hours are subject to change seasonally and on holiday weekends. Check our social media or call ahead to confirm.
            </p>
          </div>

          <div>
            <h2 className="mb-8" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', lineHeight: 1.2 }}>
              Address
            </h2>
            <div
              className="p-6 mb-8"
              style={{
                background: 'var(--color-bg-section-alt)',
                border: '1px solid var(--color-border-subtle)',
              }}
            >
              <p className="text-[16px] font-medium mb-1" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--color-text-primary)' }}>
                Ember - Flavours of the Mediterranean
              </p>
              <p className="text-[14px] mt-2" style={{ color: 'var(--color-text-secondary)' }}>Friday Harbour Resort</p>
              <p className="text-[14px]" style={{ color: 'var(--color-text-secondary)' }}>261 Sunseeker Ave</p>
              <p className="text-[14px]" style={{ color: 'var(--color-text-secondary)' }}>Innisfil, ON L9S 0J7</p>
              <p className="text-[13px] mt-1" style={{ color: 'var(--color-text-muted)' }}>On the shores of Lake Simcoe</p>
            </div>

            <h3
              className="mb-4 text-[11px] tracking-[0.35em] uppercase font-medium"
              style={{ color: 'var(--color-accent)', fontFamily: 'DM Sans, sans-serif' }}
            >
              Getting Here
            </h3>
            <div className="space-y-4 mb-6">
              {directions.map((d) => (
                <div key={d.from}>
                  <span className="text-[13px] font-medium block mb-1" style={{ color: 'var(--color-text-primary)' }}>
                    {d.from}
                  </span>
                  <span className="text-[13px]" style={{ color: 'var(--color-text-muted)' }}>{d.text}</span>
                </div>
              ))}
            </div>
            <div
              className="p-4 text-[13px] space-y-2"
              style={{ background: 'var(--color-bg-section-alt)', border: '1px solid var(--color-border-subtle)' }}
            >
              <p style={{ color: 'var(--color-text-secondary)' }}>
                <strong style={{ color: 'var(--color-text-primary)' }}>Parking:</strong> Free parking available at Friday Harbour Resort, steps from the restaurant entrance.
              </p>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                <strong style={{ color: 'var(--color-text-primary)' }}>Reservations:</strong> Recommended, especially for Friday and Saturday evenings. Walk-ins welcome based on availability.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            width: '100%',
            height: '450px',
            borderRadius: '2px',
            overflow: 'hidden',
            border: '1px solid rgba(245, 240, 235, 0.05)',
            marginBottom: '2rem',
          }}
        >
          <iframe
            title="Ember at Friday Harbour"
            src={MAP_EMBED_SRC}
            width="100%"
            height="450"
            style={{ border: 0, filter: 'grayscale(40%) contrast(1.1) brightness(0.85)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <span className="btn-primary-text">Get Directions on Google Maps</span>
          </a>
          <a href={RESERVATION_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <span className="btn-primary-text">Make a Reservation</span>
          </a>
          <Link to="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
