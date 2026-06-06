import React from 'react';
import MenuTabNav from '../components/MenuTabNav';

const RESERVATION_URL = 'https://www.opentable.ca/r/ember-reservations-innisfil?restref=1498666&lang=en-CA&ot_source=Restaurant%20website';

type DrinkItem = { name: string; price?: string; description?: string; sub?: string };
type Section = { category: string; items: DrinkItem[]; isWine?: boolean };

const menuFooterNote = `Plus applicable tax and 3% resort fee as per resort management. Please address any known allergies or dietary restrictions with your server including Gluten-Free intolerances.`;

const wineDisclaimer = `Our wine program is intentionally dynamic, evolving with the seasons and guided by availability and quality. As such, selections may change without notice. We are proud to showcase a curated collection of exceptional Canadian and international wines.`;

const cocktailSections: Section[] = [
  {
    category: 'Cocktails',
    items: [
      { name: 'Heated Rivalry', price: '$18', description: 'Hornitos Black Barrel Tequila, Cointreau, Japanese Yuzu, Lime, Agave, Fire Bitters' },
      { name: 'Smoke & Oak', price: '$18', description: 'Buffalo Trace Bourbon, Licor 43, Smoked Dark Walnut Bitters, Fig & Cinnamon' },
      { name: 'Basil Limoncello Smash', price: '$17', description: 'House Flavoured Basil Vodka, Luxardo Limoncello, Lemon, Sugar, Soda, Fresh Basil' },
      { name: 'Spiced Tide', price: '$18', description: 'Empress Gin, Canton Ginger Liqueur, Pineapple, Lemon, Honey, Ginger Bitters' },
      { name: 'Sun Over Sardinia', price: '$17', description: 'Gosling\'s Black Rum, Pineapple, Lemon, Coconut, Better Bitters' },
      { name: 'Sicilian Negroni', price: '$18', description: 'Malfy Gin Con Arancia, Campari, Sweet Vermouth, Blood Orange' },
    ],
  },
  {
    category: 'Spirit-Free Cocktails',
    items: [
      { name: 'Pisticci Punch', price: '$15', description: 'Lucano Amaro Zero, Grapefruit, Fresh Orange, Soda' },
      { name: 'Heirloom', price: '$15', description: 'Sobrii, Kiwi Puree, House Made Lemonade, Sumac & Kiwi Bitters' },
      { name: 'Pink Passion', price: '$15', description: 'Sobrii, Dragon Fruit, Mint, Fresh Lime, Lime Soda' },
    ],
  },
];

const wineSections: Section[] = [
  {
    category: 'Sparkling',
    isWine: true,
    items: [
      { name: 'Taittinger Brut Reserve Champagne', sub: 'Champagne, France' },
      { name: 'Crémant de Bourgogne', sub: 'Bourgogne, France' },
      { name: 'Villa Sandi Prosecco DOC', sub: 'Veneto, Italy' },
    ],
  },
  {
    category: 'White — Crisp & Refreshing',
    items: [
      { name: 'Santa Margherita Pinot Grigio', sub: 'Alto Adige, Italy' },
      { name: 'Vineland Estates Elevation Riesling', sub: 'Niagara Peninsula, Ontario' },
      { name: 'Remy Pannier Val de Loire Sauvignon Blanc', sub: 'Loire Valley, France' },
      { name: 'Pascal Jolivet Sancerre', sub: 'Loire Valley, France' },
      { name: 'Miraval Rosé (Seasonal Selection)', sub: 'Côtes De Provence, France' },
    ],
  },
  {
    category: 'White — Rich & Elegant',
    items: [
      { name: 'J. Moreau & Fils Glorie de Chablis', sub: 'Burgundy, France' },
      { name: 'Tormaresca Chardonnay', sub: 'Puglia, Italy' },
      { name: 'Albert Bichot Chablis Reserve de l\'Orangerie', sub: 'Burgundy, France' },
      { name: 'Chablis Premier Cru (John\'s Selection)', sub: 'Burgundy, France' },
    ],
  },
  {
    category: 'White — Mediterranean',
    items: [
      { name: 'Nostos Assyrtiko', sub: 'Crete, Greece' },
      { name: 'Santo Wines Santorini Assyrtiko', sub: 'Santorini, Greece' },
    ],
  },
  {
    category: 'Red — Smooth & Approachable',
    items: [
      { name: 'Campo Viejo Rioja Reserva', sub: 'Rioja, Spain' },
      { name: 'Gérard Bertrand Languedoc Réserve', sub: 'Languedoc, France' },
      { name: 'Ruffino Chianti Classico', sub: 'Tuscany, Italy' },
      { name: 'Marques de Riscal Rioja Reserva', sub: 'Rioja, Spain' },
      { name: 'Muga Rioja Reserva', sub: 'Rioja, Spain' },
    ],
  },
  {
    category: 'Red — Bold & Structured',
    items: [
      { name: 'J. Lohr Seven Oaks Cabernet Sauvignon', sub: 'Paso Robles, USA' },
      { name: 'Luigi Bosca Malbec', sub: 'Mendoza, Argentina' },
      { name: 'Famille Perrin Côtes du Rhône', sub: 'Rhône, France' },
      { name: 'Château Argadens Bordeaux Supérieur', sub: 'Bordeaux, France' },
    ],
  },
  {
    category: 'Red — Earthy & Food-Driven',
    items: [
      { name: 'E. Guigal Côtes du Rhône', sub: 'Rhône, France' },
      { name: 'Boutari Naoussa Xinomavro', sub: 'Naoussa, Greece' },
    ],
  },
  {
    category: 'Red — Feature & Premium',
    items: [
      { name: 'Castello di Neive Barbaresco', sub: 'Piedmont, Italy' },
      { name: 'Fontanafredda Barolo', sub: 'Piedmont, Italy' },
      { name: 'Louis Jadot Bourgogne Pinot Noir', sub: 'Burgundy, France' },
    ],
  },
  {
    category: 'From the Cellar',
    items: [
      { name: 'Dom Pérignon', sub: 'Champagne, France' },
      { name: 'Stag\'s Leap Wine Cellars Cabernet Sauvignon', sub: 'Napa Valley, USA' },
      { name: 'Tenuta San Guido Guidalberto', sub: 'Tuscany, Italy' },
      { name: 'Quinta do Crasto Touriga Nacional', sub: 'Douro Valley, Portugal' },
      { name: 'Ascheri Barolo', sub: 'Piedmont, Italy' },
      { name: 'Zenato Amarone della Valpolicella Classico', sub: 'Veneto, Italy' },
      { name: 'Famille Perrin Châteauneuf-du-Pape', sub: 'Rhône Valley, France' },
      { name: 'Hidden Bench Estate Chardonnay', sub: 'Niagara Peninsula, Ontario' },
    ],
    isWine: true,
  },
];

function DrinkSection({ section }: { section: Section }) {
  return (
    <div>
      <h3
        className="text-[11px] tracking-[0.35em] uppercase mb-6 font-medium"
        style={{ color: 'var(--color-accent)', fontFamily: 'DM Sans, sans-serif' }}
      >
        {section.category}
      </h3>
      <div className="space-y-5">
        {section.items.map((item) => (
          <div key={item.name} style={{ borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '1.25rem' }}>
            <div className="flex justify-between items-baseline mb-1">
              <span className="text-[15px] font-medium" style={{ color: 'var(--color-text-primary)', fontFamily: 'Playfair Display, serif' }}>
                {item.name}
              </span>
              {item.price && (
                <span className="text-[13px] ml-4 flex-shrink-0" style={{ color: 'var(--color-accent)' }}>
                  {item.price}
                </span>
              )}
            </div>
            {item.description && (
              <p className="text-[13px] leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                {item.description}
              </p>
            )}
            {item.sub && (
              <p className="text-[12px]" style={{ color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                {item.sub}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DrinksMenuPage() {
  return (
    <div style={{ background: 'var(--color-bg-primary)', minHeight: '100vh', paddingTop: '80px' }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-10 inner-content-padding">
        <div className="mb-10">
          <p className="text-[11px] tracking-[0.35em] uppercase mb-4 font-medium" style={{ color: 'var(--color-accent)' }}>
            The Bar
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
            Cocktails & Wine Menu
          </h1>
        </div>

        <MenuTabNav />

        <div className="mb-12">
          <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '1.25rem', maxWidth: '800px' }}>
            An elevated beverage experience featuring handcrafted cocktails, spirit-free creations, and a curated selection of wines and beers inspired by the Mediterranean and beyond.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '1.25rem', maxWidth: '800px' }}>
            Seasonally driven and thoughtfully composed, our offerings evolve throughout the year - highlighting fresh ingredients, balanced flavours, and both classic and modern expressions. On weekends, enjoy unique and well-crafted feature offerings designed to complement the evening experience.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, maxWidth: '800px' }}>
            Whether you're joining us for a pre-dinner cocktail, a relaxed evening with friends, or a full dining experience, Ember offers a refined yet welcoming destination for drinks at Friday Harbour Resort.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-14 mb-16">
          {cocktailSections.map((section) => (
            <DrinkSection key={section.category} section={section} />
          ))}
        </div>

        <div className="mb-16 pt-10" style={{ borderTop: '1px solid var(--color-border-subtle)' }}>
          <h2
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              lineHeight: 1.2,
              marginBottom: '1.5rem',
              fontFamily: 'Playfair Display, serif',
            }}
          >
            Wine Offerings
          </h2>
          <p
            style={{
              color: 'var(--color-text-muted)',
              lineHeight: 1.8,
              fontSize: '14px',
              fontStyle: 'italic',
              marginBottom: '2.5rem',
              maxWidth: '800px',
            }}
          >
            {wineDisclaimer}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-14">
            {wineSections.map((section) => (
              <DrinkSection key={section.category} section={section} />
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
