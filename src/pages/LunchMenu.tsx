import React from 'react';
import MenuTabNav from '../components/MenuTabNav';

const RESERVATION_URL = 'https://www.opentable.ca/r/ember-reservations-innisfil?restref=1498666&lang=en-CA&ot_source=Restaurant%20website';

const featuredItems = [
  {
    image: '/1061985640872727360.png',
    name: 'Stracciatella e Prosciutto',
    price: '$26',
    description: 'Stracciatella, prosciutto di Parma, seasonal stone fruit, arugula, roasted hazelnuts, aged balsamic, EVOO',
  },
  {
    image: '/715142997249475228.png',
    name: 'Tahini Caesar',
    price: '$19',
    description: 'Artisan greens, tahini garlic dressing, crispy chickpeas, pecorino, sumac, lemon',
  },
  {
    image: '/Adelizia.jpeg',
    name: 'A Delizia',
    price: '$25',
    description: 'Prosciutto, mortadella, basil puree, sun-dried tomato pesto, fior di latte, arugula, balsamic reduction',
  },
  {
    image: '/1129295551161571653.png',
    name: 'Chicken Souvlaki Salad',
    price: '$29',
    description: 'Charred souvlaki chicken, artisan greens, cucumber, tomatoes, sumac onions, feta, Kalamata olives, tzatziki',
  },
];

type Badge = { label: string };
type MenuItem = { name: string; price: string; description: string; badges?: Badge[] };
type Section = { category: string; items: MenuItem[] };

function DietaryBadge({ label }: { label: string }) {
  return (
    <span style={{
      display: 'inline-block',
      fontSize: '9px',
      textTransform: 'uppercase' as const,
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

const lunchSections: Section[] = [
  {
    category: 'Salad',
    items: [
      { name: 'Chicken Souvlaki Salad', price: '$29', description: 'Charred souvlaki chicken, artisan greens, cucumber, tomatoes, sumac onions, feta, Kalamata olives, tzatziki', badges: [{ label: 'GF' }] },
      { name: 'Beet Garden', price: '$24', description: 'Roasted heirloom beets, whipped feta, pistachio dust, sumac onions, shaved radish, arugula, truffle honey, Casa Pons lemon EVOO', badges: [{ label: 'V' }, { label: 'GF' }] },
      { name: 'Stracciatella e Prosciutto', price: '$26', description: 'Stracciatella, prosciutto di Parma, seasonal stone fruit, arugula, roasted hazelnuts, aged balsamic, EVOO', badges: [{ label: 'GF' }] },
      { name: 'Tahini Caesar', price: '$19', description: 'Artisan greens, tahini garlic dressing, crispy chickpeas, pecorino, sumac, lemon', badges: [{ label: 'V' }] },
    ],
  },
  {
    category: 'Sandwich',
    items: [
      { name: 'A Delizia', price: '$25', description: 'Prosciutto, mortadella, basil purée, sun-dried tomato pesto, fior di latte, arugula, balsamic reduction' },
      { name: 'Il Mortadella', price: '$24', description: 'Mortadella, pistacchio crema, stracciatella, arugula' },
      { name: 'La Mediterranea', price: '$21', description: 'Muhammara, charred zucchini, roasted red peppers, marinated artichoke, basil purée, arugula, aged balsamic', badges: [{ label: 'VG' }] },
      { name: 'Spicy Charcuterie', price: '$24', description: 'Prosciutto, capicola, fior di latte, Calabrian chili & roasted tomato pesto, arugula, hot honey' },
      { name: 'Il Tartufo', price: '$23', description: 'Roasted wild mushrooms, whipped lemon ricotta, arugula, black truffle cream, truffle honey', badges: [{ label: 'V' }] },
      { name: 'Frango Na Brasa', price: '$24', description: 'Charred Portuguese chicken, piquillo peppers, chimichurri, piri-piri sauce, arugula' },
      { name: 'Le Canard', price: '$27', description: 'Duck confit, whipped lemon ricotta, caramelized onion chutney, arugula, duck crackling, black truffle cream' },
    ],
  },
  {
    category: 'Fresh Pasta',
    items: [
      { name: 'Spaghetti Al Tartufo', price: '$24', description: 'Wild mushrooms, black truffle cream, white wine, chives, Grana Padano', badges: [{ label: 'V' }] },
      { name: 'Wagyu Bolognese', price: '$26', description: 'Slow-simmered wagyu beef ragù, whipped lemon ricotta, pangrattato, basil, Grana Padano' },
      { name: 'Carbonara', price: '$24', description: 'Pancetta, egg yolk, black pepper, Grana Padano, cream' },
      { name: 'Spaghetti All\'Arrabbiata', price: '$23', description: 'Pomodoro, roasted cherry tomatoes, Calabrian chili oil, Grana Padano', badges: [{ label: 'VG' }] },
      { name: 'Spaghetti Alla Vodka', price: '$21', description: 'Tomato cream, vodka, chili, chives, Grana Padano', badges: [{ label: 'V' }] },
    ],
  },
];

const menuFooterNote = `Plus applicable tax and 3% resort fee as per resort management. Please address any known allergies or dietary restrictions with your server including Gluten-Free intolerances.`;

export default function LunchMenu() {
  return (
    <div style={{ background: 'var(--color-bg-primary)', minHeight: '100vh', paddingTop: '80px' }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-10 inner-content-padding">
        <div className="mb-10">
          <p className="section-label" style={{ marginBottom: '1rem' }}>Our Menu</p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1, marginBottom: '0.5rem', fontWeight: 400 }}>
            Lunch Menu
          </h1>
        </div>

        <MenuTabNav />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {featuredItems.map((item, i) => (
            <div key={i} className="featured-card">
              <div className="card-img aspect-[4/3]">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 style={{ fontSize: '18px', fontFamily: 'Playfair Display, serif', color: 'var(--color-text-primary)', fontWeight: 400 }}>
                    {item.name}
                  </h3>
                  <span style={{ fontSize: '14px', color: 'var(--color-accent)', marginLeft: '12px', flexShrink: 0 }}>
                    {item.price}
                  </span>
                </div>
                <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-10 pb-6" style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
          <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--color-accent)', fontFamily: 'DM Sans, sans-serif' }}>
            LUNCH - Friday – Sunday 12:00pm to 4:00pm
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-14 mb-16">
          {lunchSections.map((section) => (
            <div key={section.category}>
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--color-accent)', paddingBottom: '12px', borderBottom: '1px solid rgba(212,149,58,0.18)', marginBottom: '8px', marginTop: 0 }}>
                {section.category}
              </h3>
              <div className="space-y-6">
                {section.items.map((item) => (
                  <div key={item.name} style={{ borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '1.25rem' }}>
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="text-[15px] font-medium" style={{ color: 'var(--color-text-primary)', fontFamily: 'Playfair Display, serif' }}>
                        {item.name}
                        {item.badges?.map((b) => <DietaryBadge key={b.label} label={b.label} />)}
                      </span>
                      <span className="text-[14px] ml-4 flex-shrink-0" style={{ color: 'var(--color-accent)' }}>
                        {item.price}
                      </span>
                    </div>
                    <p className="text-[13px] leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
