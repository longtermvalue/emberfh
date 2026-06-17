import React from 'react';
import MenuTabNav from '../components/MenuTabNav';

const RESERVATION_URL = 'https://www.opentable.ca/r/ember-reservations-innisfil?restref=1498666&lang=en-CA&ot_source=Restaurant%20website';

type DrinkItem = { name: string; description?: string; sub?: string };
type Section = { category: string; items: DrinkItem[] };

const menuFooterNote = `All wines by the glass are 5oz pours. Vintages and availability subject to change.`;

const wineDisclaimer = `Our wine program is intentionally dynamic, evolving with the seasons and guided by availability and quality. As such, selections may change without notice. We are proud to showcase a curated collection of exceptional Canadian and international wines.`;

const cocktailSections: Section[] = [
  {
    category: 'Cocktails',
    items: [
      { name: 'Heated Rivalry', description: 'Hornitos Black Barrel Tequila, Cointreau, Japanese Yuzu, Lime, Agave, Fire Bitters' },
      { name: 'Smoke & Oak', description: 'Buffalo Trace Bourbon, Licor 43, Smoked Dark Walnut Bitters, Fig & Cinnamon' },
      { name: 'Basil Limoncello Smash', description: 'House Flavoured Basil Vodka, Luxardo Limoncello, Lemon, Sugar, Soda, Fresh Basil' },
      { name: 'Spiced Tide', description: 'Empress Gin, Canton Ginger Liqueur, Pineapple, Lemon, Honey, Ginger Bitters' },
      { name: 'Sun Over Sardinia', description: 'Gosling\'s Black Rum, Pineapple, Lemon, Coconut, Better Bitters' },
      { name: 'Sicilian Negroni', description: 'Malfy Gin Con Arancia, Campari, Sweet Vermouth, Blood Orange' },
    ],
  },
  {
    category: 'Spirit-Free Cocktails',
    items: [
      { name: 'Pisticci Punch', description: 'Lucano Amaro Zero, Grapefruit, Fresh Orange, Soda' },
      { name: 'Heirloom', description: 'Sobrii, Kiwi Puree, House Made Lemonade, Sumac & Kiwi Bitters' },
      { name: 'Pink Passion', description: 'Sobrii, Dragon Fruit, Mint, Fresh Lime, Lime Soda' },
    ],
  },
];

const wineSections: Section[] = [
  {
    category: 'White \u2014 Coastal & Mineral',
    items: [
      { name: 'Vermentino \u2014 Cecchi La Mora (Organic)', sub: 'Sardinia, Italy' },
      { name: 'Gavi di Gavi \u2014 Fontanafredda', sub: 'Piedmont, Italy' },
    ],
  },
  {
    category: 'White \u2014 Crisp & Refreshing',
    items: [
      { name: 'Riesling \u2014 Vineland Estates Elevation', sub: 'Niagara Peninsula, Ontario' },
      { name: 'Pinot Grigio \u2014 Santa Margherita', sub: 'Alto Adige, Italy' },
      { name: 'Sauvignon Blanc \u2014 Kim Crawford', sub: 'Marlborough, New Zealand' },
      { name: 'Sauvignon Blanc \u2014 Hubert Brochard Sancerre', sub: 'Loire Valley, France' },
    ],
  },
  {
    category: 'White \u2014 Rich & Textured',
    items: [
      { name: 'Chardonnay \u2014 Louis Jadot', sub: 'Burgundy, France' },
      { name: 'Chardonnay \u2014 Hidden Bench Estate', sub: 'Niagara Peninsula, Ontario' },
      { name: 'Chablis "Reserve de l\'Orangerie" \u2014 Albert Bichot', sub: 'Chablis, France' },
    ],
  },
  {
    category: 'Ros\u00e9',
    items: [
      { name: 'C\u00f4te des Roses Ros\u00e9 \u2014 G\u00e9rard Bertrand', sub: 'Languedoc, France' },
      { name: 'Miraval Ros\u00e9 \u2014 Ch\u00e2teau Miraval', sub: 'C\u00f4tes de Provence, France' },
    ],
  },
  {
    category: 'Sparkling',
    items: [
      { name: 'Villa Sandi Prosecco DOC', sub: 'Veneto, Italy' },
      { name: 'Taittinger Brut R\u00e9serve', sub: 'Champagne, France' },
      { name: 'Dom P\u00e9rignon Brut Vintage', sub: 'Champagne, France' },
    ],
  },
  {
    category: 'Red \u2014 Elegant & Approachable',
    items: [
      { name: 'G\u00e9rard Bertrand R\u00e9serve Sp\u00e9ciale', sub: 'Languedoc, France' },
      { name: 'Pinot Noir \u2014 Kim Crawford', sub: 'Marlborough, New Zealand' },
      { name: 'Chianti Classico \u2014 Ruffino', sub: 'Tuscany, Italy' },
      { name: 'Rioja Crianza \u2014 Campo Viejo', sub: 'Rioja, Spain' },
      { name: 'Bourgogne Pinot Noir \u2014 Louis Jadot', sub: 'Burgundy, France' },
      { name: 'Rioja Reserva \u2014 Muga', sub: 'Rioja, Spain' },
    ],
  },
  {
    category: 'Red \u2014 Earthy & Food-Driven',
    items: [
      { name: 'C\u00f4tes du Rh\u00f4ne \u2014 E. Guigal', sub: 'Rh\u00f4ne Valley, France' },
      { name: 'Malbec \u2014 Luigi Bosca', sub: 'Mendoza, Argentina' },
      { name: 'Ripasso Valpolicella \u2014 Tommasi', sub: 'Veneto, Italy' },
    ],
  },
  {
    category: 'Red \u2014 Structured & Age-Worthy',
    items: [
      { name: 'Famille Perrin C\u00f4tes du Rh\u00f4ne R\u00e9serve', sub: 'Rh\u00f4ne Valley, France' },
      { name: 'Cabernet Sauvignon \u2014 J. Lohr Seven Oaks', sub: 'Paso Robles, USA' },
      { name: 'Chianti Classico Gran Selezione \u2014 Castello di Ama', sub: 'Tuscany, Italy' },
      { name: 'Barolo \u2014 Fontanafredda', sub: 'Piedmont, Italy' },
      { name: 'Amarone della Valpolicella Classico \u2014 Zenato', sub: 'Veneto, Italy' },
    ],
  },
  {
    category: 'From the Cellar',
    items: [
      { name: 'Banfi Brunello de Montalcino', sub: 'Tuscany, Italy' },
      { name: 'Guidalberto \u2014 Tenuta San Guido', sub: 'Tuscany, Italy' },
      { name: 'Cabernet Sauvignon \u2014 Duckhorn 2022', sub: 'Napa Valley' },
      { name: 'Cabernet Sauvignon \u2014 Stag\'s Leap "Artemis" 2021', sub: 'Napa Valley' },
      { name: 'Cabernet Sauvignon \u2014 Cakebread Cellars 2020', sub: 'Napa Valley' },
    ],
  },
  {
    category: 'By the Glass \u2014 5oz Pour',
    items: [
      { name: 'Pinot Grigio \u2014 Santa Margherita', sub: 'White' },
      { name: 'Sauvignon Blanc \u2014 Kim Crawford', sub: 'White' },
      { name: 'Chardonnay \u2014 Wakefield Estate Label', sub: 'White' },
      { name: 'Villa Sandi Prosecco DOC', sub: 'Sparkling' },
      { name: 'Miraval Ros\u00e9 \u2014 Ch\u00e2teau Miraval', sub: 'Ros\u00e9' },
      { name: 'Chianti Classico \u2014 Ruffino', sub: 'Red' },
      { name: 'Pinot Noir \u2014 Kim Crawford', sub: 'Red' },
      { name: 'Malbec \u2014 Luigi Bosca', sub: 'Red' },
      { name: 'G\u00e9rard Bertrand R\u00e9serve Sp\u00e9ciale', sub: 'Red' },
    ],
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
            <div className="mb-1">
              <span className="text-[15px] font-medium" style={{ color: 'var(--color-text-primary)', fontFamily: 'Playfair Display, serif' }}>
                {item.name}
              </span>
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
              marginBottom: '0.5rem',
              fontFamily: 'Playfair Display, serif',
            }}
          >
            Wine Collection
          </h2>
          <p className="text-[11px] tracking-[0.2em] uppercase mb-6" style={{ color: 'var(--color-text-muted)' }}>
            Summer 2026
          </p>
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
