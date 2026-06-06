import React from 'react';
import MenuTabNav from '../components/MenuTabNav';

const RESERVATION_URL = 'https://www.opentable.ca/r/ember-reservations-innisfil?restref=1498666&lang=en-CA&ot_source=Restaurant%20website';

const featuredItems = [
  {
    image: '/3555487642342552074.png',
    name: 'Camarão Alhinho',
    price: '$26',
    description: 'Portuguese garlic shrimp, Gavi di Gavi, tomato sofrito, chili olive oil, charred bread',
  },
  {
    image: '/5088007181280402459.png',
    name: 'Wagyu Picanha',
    price: '$56',
    description: '10oz Australian Wagyu beef coulotte, duck-fat herb potatoes, wood-fired garden verdura, chimichurri verde',
  },
  {
    image: '/18980.png',
    name: 'Spanish Paella',
    price: '$62',
    description: 'Shrimp, mussels, scallops, octopus, Iberico chorizo, saffron bomba rice, peas, tomato sofrito',
  },
  {
    image: '/19149.png',
    name: 'Piri-Piri Chicken',
    price: '$38',
    description: 'Confit & fire-grilled half free-range chicken, duck-fat herb potatoes, wood-fired garden verdura, piri-piri emulsion',
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

const dinnerSections: Section[] = [
  {
    category: 'For the Table',
    items: [
      { name: 'Artisan Sourdough', price: '$12', description: 'Casa Pons lemon EVOO, aged balsamic', badges: [{ label: 'V' }] },
      { name: 'Marinated Olives', price: '$11', description: 'Warm mixed olives, citrus zest, fresh herbs, confit garlic', badges: [{ label: 'VG' }, { label: 'GF' }] },
      { name: 'Blistered Padrón Roulette', price: '$15', description: 'Fire-blistered Padrón peppers, Maldon Sea Salt, charred lemon aioli', badges: [{ label: 'VG' }, { label: 'GF' }] },
      { name: 'Pulpo Con Puttanesca', price: '$26', description: 'Charred octopus, chorizo puttanesca, Calabrian chili oil, squid ink tapioca crisp', badges: [{ label: 'SF' }] },
      { name: 'La Brasa Mussels', price: '$24', description: 'Madri lager, \'nduja, Ibérico chorizo, fennel, confit tomato, lemon, charred bread', badges: [{ label: 'SF' }] },
      { name: 'Camarão Alhinho', price: '$26', description: 'Portuguese garlic shrimp, Gavi di Gavi, tomato sofrito, chili olive oil, charred bread', badges: [{ label: 'SF' }] },
      { name: 'Mezze Plate', price: '$24', description: 'Hummus, whipped feta, muhammara, grilled pita', badges: [{ label: 'V' }] },
      { name: 'Duck Royale Frites', price: '$23', description: 'Duck confit, pommes frites, onion chutney, crispy skin, foie gras aioli, duck demi crème' },
      { name: 'Black Tartufo Frites', price: '$17', description: 'Pommes frites, black truffle aioli, tartufo, wild mushroom ketchup, Pecorino romano, chives', badges: [{ label: 'V' }] },
    ],
  },
  {
    category: 'Raw + Cured',
    items: [
      { name: 'Shucked Oysters', price: 'MP', description: 'Daily selection, mignonette, shaved horseradish, lemon', badges: [{ label: 'GF' }, { label: 'SF' }] },
      { name: 'Hamachi Crudo', price: '$23', description: 'Jicama & apple slaw, hibiscus–apple gastrique, biquinho peppers, Calabrian chili oil', badges: [{ label: 'GF' }] },
      { name: 'Beef Carpaccio', price: '$29', description: 'Australian Wagyu, caper salsa verde, shaved pecorino, arugula, pink peppercorn mignonette, Casa Pons lemon EVOO', badges: [{ label: 'GF' }] },
    ],
  },
  {
    category: 'Salad',
    items: [
      { name: 'Beet Garden', price: '$24', description: 'Roasted heirloom beets, whipped feta, pistachio dust, sumac onions, shaved radish, arugula, truffle honey, Casa Pons lemon EVOO', badges: [{ label: 'V' }, { label: 'GF' }] },
      { name: 'Stracciatella e Prosciutto', price: '$26', description: 'Stracciatella, prosciutto di Parma, seasonal stone fruit, arugula, toasted hazelnuts, aged balsamic, EVOO', badges: [{ label: 'GF' }] },
      { name: 'Tahini Caesar', price: '$19', description: 'Artisan greens, tahini garlic dressing, crispy chickpeas, pecorino, sumac, lemon', badges: [{ label: 'V' }] },
    ],
  },
  {
    category: 'Fresh Pasta',
    items: [
      { name: 'Duck Carbonara', price: '$29', description: 'Muscovy duck confit, guanciale, honey mushrooms, egg yolk, Chardonnay carbonara cream, Pecorino romano' },
      { name: 'Wagyu Polpette', price: '$34', description: 'Australian Wagyu meatballs, tomato sugo, Calabrian truffle chili, lemon ricotta, pangrattato' },
      { name: 'Seafood à Portuguesa', price: '$46', description: 'Shrimp, mussels, scallops, tomato sofrito, saffron cream, Gavi di Gavi, garlic confit, chives', badges: [{ label: 'SF' }] },
    ],
  },
  {
    category: 'Main',
    items: [
      { name: 'Wagyu + Ibérico Burger', price: '$32', description: 'Australian Wagyu & Ibérico pork blend, smoked cheddar, arugula, onion chutney, mushroom ketchup, black truffle aioli, brioche, tallow frites' },
      { name: 'Steak Au Poivre', price: '$120', description: '25oz prime bone-in ribeye, sauce Diane au Cognac, braised cipollini onions, tallow frites', badges: [{ label: 'GF' }] },
      { name: 'Wagyu Picanha', price: '$56', description: '10oz Australian Wagyu beef coulotte, duck-fat herb potatoes, wood-fired garden verdura, chimichurri verde', badges: [{ label: 'GF' }] },
      { name: 'Wood-Fired Garden Verdura', price: '$26', description: 'Wood-fired seasonal vegetables, hummus, muhammara, charred radicchio, Casa Pons lemon EVOO', badges: [{ label: 'VG' }, { label: 'GF' }] },
      { name: 'Piri-Piri Chicken', price: '$38', description: 'Confit & fire-grilled half free-range chicken, duck-fat herb potatoes, wood-fired garden verdura, piri-piri emulsion', badges: [{ label: 'GF' }] },
      { name: 'Spanish Paella', price: '$62', description: 'Shrimp, mussels, scallops, octopus, Ibérico chorizo, saffron bomba rice, peas, tomato sofrito', badges: [{ label: 'GF' }, { label: 'SF' }] },
      { name: 'Whole Grilled Seabream', price: '$46', description: 'Mediterranean seabream, herb-roasted potatoes, wood-fired garden verdura, caper & lemon olive oil', badges: [{ label: 'GF' }] },
    ],
  },
];

const menuFooterNote = `Plus applicable tax and 3% resort fee as per resort management. Please address any known allergies or dietary restrictions with your server including Gluten-Free intolerances.`;

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
            DINNER - Wednesday – Thursday from 5:00pm
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
