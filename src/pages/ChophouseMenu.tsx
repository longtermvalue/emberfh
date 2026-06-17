import React from 'react';
import MenuTabNav from '../components/MenuTabNav';

const RESERVATION_URL = 'https://www.opentable.ca/r/ember-reservations-innisfil?restref=1498666&lang=en-CA&ot_source=Restaurant%20website';

type MenuItem = { name: string; description: string; badges?: { label: string }[] };
type Section = { category: string; items: MenuItem[]; note?: string };

function DietaryBadge({ label }: { label: string }) {
  return (
    <span style={{
      display: 'inline-block',
      fontSize: '9px',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      padding: '2px 6px',
      border: '1px solid rgba(184, 169, 154, 0.3)',
      borderRadius: '2px',
      color: '#b8a99a',
      marginLeft: '8px',
      verticalAlign: 'middle',
      fontFamily: '\'DM Sans\', sans-serif',
    }}>
      {label}
    </span>
  );
}

const classicCuts: MenuItem[] = [
  { name: '8 oz Filet Mignon', description: '8oz centre-cut tenderloin, exceptionally tender' },
  { name: '24 oz Prime Porterhouse', description: '24oz Canadian prime beef, Alberta-raised, grain-finished' },
  { name: '12 oz Grass-Fed Striploin', description: '12oz Canadian beef, grass-fed and grass-finished, no hormones, no antibiotics' },
  { name: '16 oz Dry-Aged Ribeye', description: '16oz Canadian prime beef, dry-aged, deeply concentrated flavour' },
];

const specialtyCuts: MenuItem[] = [
  { name: '14 oz Kansas City Striploin', description: 'Bone-in Canadian prime striploin, Alberta-raised, grain-finished' },
  { name: 'Spanish Ib\u00e9rico Pork Chop', description: 'Free-range, acorn-finished, raised on the Spanish dehesa' },
  { name: 'Rack of Lamb', description: 'Australian Whitestripe lamb, premium grass-fed, exceptional quality' },
  { name: 'Game Feature', description: 'Weekly chef\u2019s selection \u2014 ask your server' },
];

const sides: MenuItem[] = [
  { name: 'Ginger\u2013Soy Shanghai Choy', description: 'Baby bok choy, ginger\u2013soy glaze, sesame', badges: [{ label: 'VG' }] },
  { name: 'Grilled Asparagus', description: 'Herb oil, lemon aioli, Maldon salt', badges: [{ label: 'V' }] },
  { name: 'Honey\u2013Miso Carrots', description: 'Roasted carrots, miso honey cream, chives', badges: [{ label: 'V' }] },
  { name: 'Truffle Saut\u00e9ed Mushrooms', description: 'Wild mushrooms, truffle, herbs', badges: [{ label: 'VG' }] },
  { name: 'Duck Fat Potatoes', description: 'Crispy potatoes, duck fat, chives' },
  { name: 'Pomme Pur\u00e9e', description: 'Whipped potatoes, butter', badges: [{ label: 'V' }] },
  { name: 'Tallow Frites', description: 'Hand-cut fries, beef tallow, house-made mushroom ketchup' },
  { name: 'Lobster Mac & Cheese', description: 'Maine lobster, smoked cheddar, pangrattato crumbs', badges: [{ label: 'SF' }] },
];

const sauces: MenuItem[] = [
  { name: 'Cognac Diane Sauce', description: '' },
  { name: 'Brandy Peppercorn', description: '' },
  { name: 'B\u00e9arnaise', description: '' },
  { name: 'Wild Berry Port Jus', description: '' },
  { name: 'Chimichurri Verde', description: '', badges: [{ label: 'VG' }] },
  { name: 'Horseradish Cream', description: '', badges: [{ label: 'V' }] },
  { name: 'House Hot Sauce', description: '', badges: [{ label: 'VG' }] },
  { name: 'Smoked Maldon Salt', description: '', badges: [{ label: 'VG' }] },
];

const menuFooterNote = `*All groups of 8 or more are subject to an automatic 20% gratuity. Plus applicable tax and 3% resort fee as per resort management. Please address any known allergies or dietary restrictions with your server including Gluten-Free intolerances.`;

export default function ChophouseMenu() {
  return (
    <div style={{ background: 'var(--color-bg-primary)', minHeight: '100vh', paddingTop: '80px' }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-10 inner-content-padding">
        <div className="mb-10">
          <p className="section-label" style={{ marginBottom: '1rem' }}>Our Menu</p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1, marginBottom: '0.5rem', fontWeight: 400 }}>
            Chophouse
          </h1>
        </div>

        <MenuTabNav />

        {/* Hero image */}
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '4px',
            marginTop: '20px',
            marginBottom: '48px',
            height: '320px',
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
          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '40px 32px' }}>
            <p
              style={{
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.35em',
                color: 'var(--color-accent)',
                fontFamily: 'DM Sans, sans-serif',
                marginBottom: '1rem',
              }}
            >
              The Chophouse Experience
            </p>
            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                lineHeight: 1.1,
                fontWeight: 400,
                color: '#f5f0eb',
                marginBottom: '1rem',
              }}
            >
              The Art of Fire & Aged Cuts
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', maxWidth: '550px', margin: '0 auto', lineHeight: 1.7 }}>
              All cuts are served simply, finished with sea salt. Sides available a la carte.
            </p>
          </div>
        </div>

        {/* Classic Cuts & Specialty Cuts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-14 mb-16">
          <div>
            <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--color-accent)', paddingBottom: '12px', borderBottom: '1px solid rgba(212,149,58,0.18)', marginBottom: '8px', marginTop: 0 }}>
              Classic Cuts
            </h3>
            <div className="space-y-6">
              {classicCuts.map((item) => (
                <div key={item.name} style={{ borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '1.25rem' }}>
                  <div className="mb-1">
                    <span className="text-[15px] font-medium" style={{ color: 'var(--color-text-primary)', fontFamily: 'Playfair Display, serif' }}>
                      {item.name}
                    </span>
                  </div>
                  <p className="text-[13px] leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--color-accent)', paddingBottom: '12px', borderBottom: '1px solid rgba(212,149,58,0.18)', marginBottom: '8px', marginTop: 0 }}>
              Specialty Cuts
            </h3>
            <div className="space-y-6">
              {specialtyCuts.map((item) => (
                <div key={item.name} style={{ borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '1.25rem' }}>
                  <div className="mb-1">
                    <span className="text-[15px] font-medium" style={{ color: 'var(--color-text-primary)', fontFamily: 'Playfair Display, serif' }}>
                      {item.name}
                    </span>
                  </div>
                  <p className="text-[13px] leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sides */}
        <div className="mb-16">
          <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--color-accent)', paddingBottom: '12px', borderBottom: '1px solid rgba(212,149,58,0.18)', marginBottom: '8px', marginTop: 0 }}>
            Sides
          </h3>
          <p className="text-[12px] mb-6" style={{ color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
            Serves 2-3 people
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-5">
            {sides.map((item) => (
              <div key={item.name} style={{ borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '1.25rem' }}>
                <div className="mb-1">
                  <span className="text-[15px] font-medium" style={{ color: 'var(--color-text-primary)', fontFamily: 'Playfair Display, serif' }}>
                    {item.name}
                    {item.badges?.map((b) => <DietaryBadge key={b.label} label={b.label} />)}
                  </span>
                </div>
                <p className="text-[13px] leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sauces */}
        <div className="mb-16">
          <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--color-accent)', paddingBottom: '12px', borderBottom: '1px solid rgba(212,149,58,0.18)', marginBottom: '8px', marginTop: 0 }}>
            Sauces
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-4 mt-4">
            {sauces.map((item) => (
              <div key={item.name} style={{ paddingBottom: '0.75rem' }}>
                <span className="text-[14px]" style={{ color: 'var(--color-text-primary)', fontFamily: 'Playfair Display, serif' }}>
                  {item.name}
                  {item.badges?.map((b) => <DietaryBadge key={b.label} label={b.label} />)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ fontSize: '12px', color: '#8a7e72', textAlign: 'center', maxWidth: '700px', margin: '60px auto 0', paddingTop: '30px', borderTop: '1px solid rgba(245, 240, 235, 0.05)', lineHeight: 1.6 }}>
          <p>{menuFooterNote}</p>
          <p style={{ marginTop: '16px', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '11px', color: '#8a7e72' }}>EMBERFH.COM</p>
        </div>

        <div className="text-center mt-14">
          <a href={RESERVATION_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Make a Reservation
          </a>
        </div>
      </div>
    </div>
  );
}
