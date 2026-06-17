import React from 'react';
import MenuTabNav from '../components/MenuTabNav';

const RESERVATION_URL = 'https://www.opentable.ca/r/ember-reservations-innisfil?restref=1498666&lang=en-CA&ot_source=Restaurant%20website';

const featuredItems = [
  {
    image: '/3555487642342552074.png',
    name: 'Camar\u00e3o Alhinho',
    description: 'Portuguese garlic shrimp, Gavi di Gavi, tomato sofrito, chili olive oil, charred bread',
  },
  {
    image: '/5088007181280402459.png',
    name: 'Wagyu Picanha',
    description: 'Australian Wagyu coulotte, duck-fat herb potatoes, verdura, chimichurri verde',
  },
  {
    image: '/18980.png',
    name: 'Spanish Paella',
    description: 'Shrimp, mussels, scallops, octopus, Ib\u00e9rico chorizo, saffron rice, peas, tomato sofrito',
  },
  {
    image: '/19149.png',
    name: 'Piri-Piri Chicken',
    description: 'Confit & fire-grilled half free-range chicken, charred rapini, salsa verde, piri-piri emulsion',
  },
];

type Badge = { label: string };
type MenuItem = { name: string; description: string; badges?: Badge[] };
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

const dinnerSections: Section[] = [
  {
    category: 'To Share / For the Table',
    items: [
      { name: 'Artisan Sourdough', description: 'Casa Pons lemon EVOO, aged balsamic', badges: [{ label: 'V' }] },
      { name: 'Marinated Olives', description: 'Warm mixed olives, citrus zest, fresh herbs, Biquinho peppers', badges: [{ label: 'VG' }] },
      { name: 'Pulpo Con Puttanesca', description: 'Charred octopus, chorizo puttanesca, Calabrian chili oil, squid ink tapioca crisp' },
      { name: 'La Brasa Mussels', description: 'Madri lager, \u2018nduja, Ib\u00e9rico chorizo, fennel, confit tomato, lemon, charred bread', badges: [{ label: 'SF' }] },
      { name: 'Camar\u00e3o Alhinho', description: 'Portuguese garlic shrimp, Gavi di Gavi, tomato sofrito, chili olive oil, charred bread', badges: [{ label: 'SF' }] },
      { name: 'Mezze Plate', description: 'Hummus, whipped feta, muhammara, grilled pita', badges: [{ label: 'V' }] },
      { name: 'Black Tartufo Frites', description: 'Pommes frites, black truffle aioli, tartufo, wild mushroom ketchup, Pecorino romano, chives', badges: [{ label: 'V' }] },
      { name: 'Hokkaido Scallops', description: 'Seared sea scallops, caviar beurre blanc, chive oil', badges: [{ label: 'SF' }] },
      { name: 'Burrata', description: 'Pistachio pesto, lemon EVOO, aged balsamic, grilled sourdough', badges: [{ label: 'V' }] },
    ],
  },
  {
    category: 'Raw + Cured',
    items: [
      { name: 'Shucked Oysters', description: 'Daily selection, mignonette, shaved horseradish, lemon', badges: [{ label: 'GF' }, { label: 'SF' }] },
      { name: 'Itsumo Tuna Pok\u00e9', description: 'Sashimi-grade tuna, ginger soy, miso honey crema, lotus crisp, yuzu oil' },
      { name: 'Wagyu Beef Carpaccio', description: 'Australian Wagyu, caper salsa verde, shaved pecorino, arugula, pink peppercorn mignonette, Casa Pons lemon EVOO', badges: [{ label: 'GF' }] },
      { name: 'Colossal Shrimp Cocktail', description: 'Chilled tiger shrimp, yuzu horseradish cocktail sauce, lemon', badges: [{ label: 'SF' }] },
    ],
  },
  {
    category: 'Salads',
    items: [
      { name: 'Ember Beet Garden', description: 'Roasted heirloom beets, whipped feta, pistachio dust, sumac onions, shaved radish, arugula, truffle honey, Casa Pons lemon EVOO', badges: [{ label: 'V' }, { label: 'GF' }] },
      { name: 'Stracciatella e Prosciutto', description: 'Stracciatella, prosciutto di Parma, seasonal stone fruit, arugula, toasted hazelnuts, aged balsamic, EVOO', badges: [{ label: 'GF' }] },
      { name: 'Tahina Caesar', description: 'Artisan greens, tahina garlic dressing, crispy chickpeas, pecorino, sumac, lemon', badges: [{ label: 'V' }] },
    ],
  },
  {
    category: 'Fresh Pasta',
    items: [
      { name: 'Duck Carbonara', description: 'Muscovy duck confit, guanciale, honey mushrooms, egg yolk, Chardonnay carbonara cream, Pecorino romano' },
      { name: 'Wagyu Polpette', description: 'Australian Wagyu meatballs, tomato sugo, Calabrian truffle chili, lemon ricotta, pangrattato' },
      { name: 'Seafood \u00e0 Portuguesa', description: 'Shrimp, mussels, scallops, tomato sofrito, saffron cream, Gavi di Gavi, garlic confit, chives', badges: [{ label: 'SF' }] },
      { name: 'Lobster & Truffle Paccheri', description: 'Maine lobster, lemon beurre blanc, Calabrian chili, black truffle, confit tomatoes, caviar, chives', badges: [{ label: 'SF' }] },
      { name: 'Paccheri Al Limone', description: 'Paccheri, lemon beurre blanc, pistachio pesto, stracciatella, lemon zest', badges: [{ label: 'V' }] },
    ],
  },
  {
    category: 'Main',
    items: [
      { name: 'Wagyu + Ib\u00e9rico Burger', description: 'Australian Wagyu & Ib\u00e9rico pork blend, smoked cheddar, arugula, onion chutney, mushroom ketchup, black truffle aioli, brioche, tallow frites' },
      { name: 'Wagyu Picanha', description: 'Australian Wagyu coulotte, duck-fat herb potatoes, verdura, chimichurri verde', badges: [{ label: 'GF' }] },
      { name: 'Wood-Fired Garden Verdura', description: 'Wood-fired seasonal vegetables, hummus, artichokes, charred radicchio, Casa Pons lemon EVOO', badges: [{ label: 'VG' }, { label: 'GF' }] },
      { name: 'Piri-Piri Chicken', description: 'Confit & fire-grilled half free-range chicken, charred rapini, salsa verde, piri-piri emulsion', badges: [{ label: 'GF' }] },
      { name: 'Spanish Paella', description: 'Shrimp, mussels, scallops, octopus, Ib\u00e9rico chorizo, saffron rice, peas, tomato sofrito', badges: [{ label: 'GF' }, { label: 'SF' }] },
      { name: 'Whole Grilled Sea Bass', description: 'Mediterranean seabass, Verjus beurre blanc, shaved fennel\u2013watercress salad, charred lemon', badges: [{ label: 'GF' }] },
      { name: 'Chicken Souvlaki', description: 'Free-range chicken, saffron rice, roasted herb potatoes, Horiatiki salad, house-made tzatziki', badges: [{ label: 'GF' }] },
    ],
  },
];

const menuFooterNote = `*All groups of 8 or more are subject to an automatic 20% gratuity. Plus applicable tax and 3% resort fee as per resort management. Please address any known allergies or dietary restrictions with your server including Gluten-Free intolerances.`;

export default function DinnerMenu() {
  return (
    <div style={{ background: 'var(--color-bg-primary)', minHeight: '100vh', paddingTop: '80px' }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-10 inner-content-padding">
        <div className="mb-10">
          <p className="section-label" style={{ marginBottom: '1rem' }}>Our Menu</p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1, marginBottom: '0.5rem', fontWeight: 400 }}>
            Dinner Menu
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
                <h3 style={{ fontSize: '18px', fontFamily: 'Playfair Display, serif', color: 'var(--color-text-primary)', fontWeight: 400, marginBottom: '8px' }}>
                  {item.name}
                </h3>
                <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-10 pb-6" style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
          <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--color-accent)', fontFamily: 'DM Sans, sans-serif' }}>
            Served 5:00PM - 9:30PM
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-14 mb-16">
          {dinnerSections.map((section) => (
            <div key={section.category}>
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--color-accent)', paddingBottom: '12px', borderBottom: '1px solid rgba(212,149,58,0.18)', marginBottom: '8px', marginTop: 0 }}>
                {section.category}
              </h3>
              <div className="space-y-6">
                {section.items.map((item) => (
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
