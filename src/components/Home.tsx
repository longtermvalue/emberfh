import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const RESERVATION_URL = 'https://www.opentable.ca/r/ember-reservations-innisfil?restref=1498666&lang=en-CA&ot_source=Restaurant%20website';
const INSTAGRAM_URL = 'https://www.instagram.com/emberfridayharbour/';
const MAPS_URL = 'https://maps.app.goo.gl/EfgvJpAkTF2ETsff6';
const MAP_EMBED_SRC = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2844.5!2d-79.5334052!3d44.3935775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882aafb396164761%3A0x9d817a3d1cc7ca87!2sEmber%20(Friday%20Harbour%20Resort)!5e0!3m2!1sen!2sca!4v1';

function useReveal(options?: { threshold?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: options?.threshold ?? 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}


const galleryImages = [
  '/18391.png',
  '/1E981809-6162-4FCC-ADE7-9AF62DD390D2_1_102_o.jpeg',
  '/1272606979295578937.JPG',
  '/7CB2DDC6-3E1F-4323-9BDB-ADD081821DF6_1_102_o.jpeg',
  '/5088007181280402459.png',
  '/file_000000005f60722fb029d3e6c97fd271.png',
  '/4968202418405417010.JPG',
  '/BE1503B2-9436-4471-AE4C-5E421EA5A3DF.png',
  '/3555487642342552074.png',
  '/91C8DCB5-3F3B-4B0C-80C1-ACDCC87D3D61_1_102_o.jpeg',
];

const privateEventImages = [
  '/file_000000005f60722fb029d3e6c97fd271.png',
  '/18391.png',
  '/19149.png',
  '/1061985640872727360.png',
];

const lunchCarouselImages = [
  { src: '/B388505A-33CA-40A6-9E74-7D97A4C4B4D3.jpeg', alt: 'Ember Lunch - Sandwich' },
  { src: '/IMG_46873456.jpg', alt: 'Ember Lunch - Burger and Fries' },
  { src: '/715142997249475228.png', alt: 'Ember Lunch - Caesar Salad' },
  { src: '/1129295551161571653.png', alt: 'Ember Lunch - Chicken Souvlaki' },
];

const dinnerCarouselImages = [
  { src: '/3555487642342552074.png', alt: 'Camarão Alhinho' },
  { src: '/5088007181280402459.png', alt: 'Wagyu Picanha' },
  { src: '/19149.png', alt: 'Piri-Piri Chicken' },
  { src: '/18980.png', alt: 'Spanish Paella' },
];

function LunchCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (index: number) => {
    if (animating || index === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 400);
  };

  const prev = () => goTo((current - 1 + lunchCarouselImages.length) % lunchCarouselImages.length);
  const next = () => goTo((current + 1) % lunchCarouselImages.length);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setCurrent((c) => (c + 1) % lunchCarouselImages.length);
    }, 4000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current]);

  return (
    <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', aspectRatio: '4/3', background: '#111' }}>
      {lunchCarouselImages.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          loading="lazy"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: i === current ? (animating ? 0 : 1) : 0,
            transition: 'opacity 0.5s ease',
          }}
        />
      ))}
      <button
        onClick={prev}
        aria-label="Previous"
        style={{
          position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.45)', border: 'none', borderRadius: '50%',
          width: '40px', height: '40px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontSize: '18px', zIndex: 2, backdropFilter: 'blur(4px)',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.7)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.45)')}
      >&#8249;</button>
      <button
        onClick={next}
        aria-label="Next"
        style={{
          position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.45)', border: 'none', borderRadius: '50%',
          width: '40px', height: '40px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontSize: '18px', zIndex: 2, backdropFilter: 'blur(4px)',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.7)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.45)')}
      >&#8250;</button>
      <div style={{ position: 'absolute', bottom: '14px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 2 }}>
        {lunchCarouselImages.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === current ? '24px' : '8px', height: '8px',
              borderRadius: '4px', border: 'none', cursor: 'pointer',
              background: i === current ? 'var(--color-accent, #c8a96e)' : 'rgba(255,255,255,0.5)',
              transition: 'all 0.3s ease', padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function DinnerCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (index: number) => {
    if (animating || index === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 400);
  };

  const prev = () => goTo((current - 1 + dinnerCarouselImages.length) % dinnerCarouselImages.length);
  const next = () => goTo((current + 1) % dinnerCarouselImages.length);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setCurrent((c) => (c + 1) % dinnerCarouselImages.length);
    }, 4000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current]);

  return (
    <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', aspectRatio: '4/3', background: '#111' }}>
      {dinnerCarouselImages.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          loading="lazy"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: i === current ? (animating ? 0 : 1) : 0,
            transition: 'opacity 0.5s ease',
          }}
        />
      ))}
      <button
        onClick={prev}
        aria-label="Previous"
        style={{
          position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.45)', border: 'none', borderRadius: '50%',
          width: '40px', height: '40px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontSize: '18px', zIndex: 2, backdropFilter: 'blur(4px)',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.7)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.45)')}
      >&#8249;</button>
      <button
        onClick={next}
        aria-label="Next"
        style={{
          position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.45)', border: 'none', borderRadius: '50%',
          width: '40px', height: '40px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontSize: '18px', zIndex: 2, backdropFilter: 'blur(4px)',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.7)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.45)')}
      >&#8250;</button>
      <div style={{ position: 'absolute', bottom: '14px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 2 }}>
        {dinnerCarouselImages.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === current ? '24px' : '8px', height: '8px',
              borderRadius: '4px', border: 'none', cursor: 'pointer',
              background: i === current ? 'var(--color-accent, #c8a96e)' : 'rgba(255,255,255,0.5)',
              transition: 'all 0.3s ease', padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const welcomeReveal = useReveal();
  const lunchTextReveal = useReveal();
  const lunchImgReveal = useReveal();
  const dinnerTextReveal = useReveal();
  const dinnerImgReveal = useReveal();
  const drinksTextReveal = useReveal();
  const drinksImgReveal = useReveal();
  const brunchTextReveal = useReveal();
  const brunchImgReveal = useReveal();
  const eventsReveal = useReveal();
  const privateHeadReveal = useReveal();
  const privateGridReveal = useReveal({ threshold: 0.08 });
  const igReveal = useReveal();
  return (
    <>
      {/* HERO */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ height: '100vh', minHeight: '600px' }}
      >
        <div
          className="hero-bg absolute inset-0"
          style={{ backgroundImage: 'url(/3555487642342552074.png)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.12) 40%, rgba(0,0,0,0.30) 70%, rgba(13,13,13,0.96) 100%)',
            zIndex: 1,
          }}
        />

        <div
          className="hero-content relative text-center px-6 max-w-3xl mx-auto"
          style={{ zIndex: 2, background: 'none', backgroundColor: 'transparent', backdropFilter: 'none', WebkitBackdropFilter: 'none', boxShadow: 'none', border: 'none' }}
        >
          <img
            src="/ember-logo.png"
            alt="Ember"
            className="hero-logo mx-auto"
            style={{
              maxWidth: '630px',
              width: '100%',
              mixBlendMode: 'screen',
              padding: 0,
              boxShadow: 'none',
              border: 'none',
            }}
          />
          <h1
            style={{
              fontFamily: 'Playfair Display, serif',
              color: '#f5f0eb',
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              lineHeight: 1.2,
              fontWeight: 400,
              marginBottom: '1rem',
            }}
          >
            Upscale Casual Dining Rooted in Fire and Coastal Flavour
          </h1>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '13px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '2.5rem',
              lineHeight: 1.6,
            }}
          >
            <span style={{ color: '#b8a99a' }}>Friday Harbour Resort, Innisfil ON</span>
            <br />
            <span style={{ color: '#d4953a' }}>Open To The Public</span>
          </p>
          <a href={RESERVATION_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <span className="btn-primary-text">Make a Reservation</span>
          </a>
        </div>

        <div className="scroll-indicator" style={{ zIndex: 2 }} />
      </section>

      {/* WELCOME */}
      <section
        className="welcome-section section-padding"
        style={{
          position: 'relative',
          padding: '48px 0',
          backgroundImage: 'url(/adventure.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(13,13,13,0.62) 0%, rgba(13,13,13,0.52) 50%, rgba(13,13,13,0.62) 100%)',
            zIndex: 0,
          }}
        />
        <div className="max-w-[750px] mx-auto px-6 text-center" style={{ position: 'relative', zIndex: 1 }}>
          <div
            ref={welcomeReveal.ref}
            className={`reveal ${welcomeReveal.visible ? 'visible' : ''}`}
          >
            <div style={{ marginBottom: '1.5rem' }}>
              <p className="section-label" style={{ marginBottom: '1rem' }}>Welcome to</p>
              <img
                src="/ember-logo.png"
                alt="Ember"
                style={{ height: 'clamp(60px, 10vw, 100px)', width: 'auto', margin: '0 auto', display: 'block' }}
              />
            </div>
            <h2
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.2, marginBottom: '1.5rem' }}
            >
              Inspired by Five Mediterranean Coastal Countries
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              At Ember, fire meets flavour through a menu inspired by five of the world's most iconic coastal cuisines: Portugal, Greece, Spain, France, and Italy.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              From the bold char of Portuguese piri piri, to the bright, herb-driven flavours of Greece, the rich traditions of Spain, the refined coastal elegance of France, and the soulful simplicity of Italy. Every dish is rooted in authenticity and brought to life over fire.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              By day, enjoy fresh sandwiches, crisp seasonal salads, elevated burgers, and handcrafted pastas, perfect for a relaxed lunch or lakeside takeout.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              By night, the experience deepens with premium steaks, seafood, and shareable plates designed around fire, flavour, and the spirit of coastal dining.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Thoughtfully curated menus include gluten-free, vegetarian, and vegan options, ensuring every guest can indulge without compromise.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
              A place to gather, unwind, and indulge. Ember delivers a warm, energetic dining experience at Friday Harbour Resort.
            </p>
          </div>
        </div>
      </section>

      {/* LUNCH */}
      <section style={{ background: 'var(--color-bg-section-alt)', padding: '48px 0' }} className="section-padding">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div
              ref={lunchTextReveal.ref}
              className={`reveal-left ${lunchTextReveal.visible ? 'visible' : ''}`}
            >
              <p className="section-label">Our Menu</p>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.2, marginBottom: '0.25rem' }}>
                Lunch
              </h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Daily, 12:00 PM – 3:00 PM
              </p>
              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--color-accent)', fontFamily: 'Playfair Display, serif', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: 1.4 }}>
                Fired by Flavour
              </p>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                At Ember, lunch is where fire meets fresh, bringing together the bold coastal flavours of Portugal, Greece, Spain, France, and Italy in a relaxed, energetic setting.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                From handcrafted sandwiches layered with premium ingredients to house-made pastas and bright, seasonal salads, every dish is built with purpose and designed for midday indulgence.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Enjoy signature creations like charred Portuguese chicken with piri piri, wagyu bolognese, and truffle pasta, alongside fresh, composed salads like chicken souvlaki and beet garden, all rooted in Mediterranean tradition and elevated with Ember's fire-driven approach.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                Whether you're joining us for a casual lunch, a business meeting, or a lakeside escape, Ember delivers bold flavour without the formality. Dine in, take it to the water, or settle in and stay awhile. Lunch at Ember is anything but ordinary.
              </p>
              <Link to="/menu/lunch" className="btn-primary">
                <span className="btn-primary-text">View Lunch Menu</span>
              </Link>
            </div>
            <div
              ref={lunchImgReveal.ref}
              className={`reveal-right ${lunchImgReveal.visible ? 'visible' : ''}`}
            >
              <LunchCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* DINNER */}
      <section style={{ background: 'var(--color-bg-primary)', padding: '48px 0' }} className="section-padding">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div
              ref={dinnerImgReveal.ref}
              className={`reveal-left ${dinnerImgReveal.visible ? 'visible' : ''} order-last lg:order-first`}
            >
              <DinnerCarousel />
            </div>
            <div
              ref={dinnerTextReveal.ref}
              className={`reveal-right ${dinnerTextReveal.visible ? 'visible' : ''}`}
            >
              <p className="section-label">Our Menu</p>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.2, marginBottom: '0.25rem' }}>
                Dinner
              </h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Daily, 5:00 PM – Close
              </p>
              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--color-accent)', fontFamily: 'Playfair Display, serif', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: 1.4 }}>
                Mediterranean Inspired
              </p>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                From fresh seafood and handcrafted pastas to vibrant, shareable plates inspired by coastal Mediterranean cuisines, Ember's dinner menu is designed for connection and discovery.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Traditional favourites like chicken souvlaki, slow-braised lamb shanks, and fresh daily fish are paired with bold flavours and seasonal ingredients-alongside approachable offerings like handcrafted pastas and signature burgers.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                Whether you're joining us for a full evening by the water or a relaxed night out, Ember offers a distinctive yet welcoming dining experience in Innisfil at Friday Harbour Resort.
              </p>
              <Link to="/menu/dinner" className="btn-primary">
                <span className="btn-primary-text">View Dinner Menu</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COCKTAILS & DRINKS */}
      <section style={{ background: 'var(--color-bg-section-alt)', padding: '48px 0' }} className="section-padding">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div
              ref={drinksTextReveal.ref}
              className={`reveal-left ${drinksTextReveal.visible ? 'visible' : ''}`}
            >
              <p className="section-label">The Bar</p>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
                Cocktails, Wine, and Evenings at Ember
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                An elevated beverage experience featuring handcrafted cocktails, spirit-free creations, and a curated selection of wines and beers inspired by the Mediterranean and beyond.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Seasonally driven and thoughtfully composed, our offerings evolve throughout the year - highlighting fresh ingredients, balanced flavours, and both classic and modern expressions. On Saturdays, enjoy unique and well-crafted feature offerings designed to complement the evening experience.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                Whether you're joining us for a pre-dinner cocktail, a relaxed evening with friends, or a full dining experience, Ember offers a refined yet welcoming destination for drinks at Friday Harbour Resort.
              </p>
              <Link to="/menu/drinks" className="btn-primary">
                <span className="btn-primary-text">View Drink Menu</span>
              </Link>
            </div>
            <div className={`reveal-right ${drinksImgReveal.visible ? 'visible' : ''}`} ref={drinksImgReveal.ref}>
              <div className="section-img-wrap" style={{ aspectRatio: '4/3', marginBottom: '12px' }}>
                <img
                  src="/F1225AF5-433D-49C3-8575-9675ED58C245.jpeg"
                  alt="Cocktails at Ember"
                  loading="lazy"
                />
              </div>
              <div className="grid grid-cols-3" style={{ gap: '8px' }}>
                {[
                  '/AC3C1F4A-84E5-487B-B327-3659C2A82098.jpg',
                  '/3A3A7773-9474-48BB-A7DC-03797C388EF1.jpeg',
                  '/B10B1132-581A-4FF1-A8F5-54AFDB00673C.jpeg',
                ].map((src, i) => (
                  <div key={i} className="section-img-wrap" style={{ aspectRatio: '1' }}>
                    <img src={src} alt="Ember drinks" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUNDAY BRUNCH */}
      <section style={{ background: 'var(--color-bg-section-alt)', padding: '48px 0' }} className="section-padding">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div
              ref={brunchImgReveal.ref}
              className={`section-img-wrap reveal-left ${brunchImgReveal.visible ? 'visible' : ''} order-last lg:order-first`}
              style={{ aspectRatio: '4/3' }}
            >
              <img
                src="https://images.pexels.com/photos/5638527/pexels-photo-5638527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Mediterranean Brunch at Ember"
                loading="lazy"
              />
            </div>
            <div
              ref={brunchTextReveal.ref}
              className={`reveal-right ${brunchTextReveal.visible ? 'visible' : ''}`}
            >
              <p className="section-label">Sundays</p>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.2, marginBottom: '0.5rem' }}>
                Sunday Brunch at Ember
              </h2>
              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--color-accent)', fontFamily: 'Playfair Display, serif', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: 1.4 }}>
                Coming Summer 2026
              </p>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                A new kind of Sunday is coming. This isn't your traditional brunch - this is brunch, the Ember way. Fresh, vibrant, and built around Mediterranean flavour.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                This summer, brunch gets a new identity at Friday Harbour Resort. However you arrive - by land, air, or water - join us on the shores of Lake Simcoe.
              </p>
              <Link to="/menu/brunch" className="btn-primary">
                <span className="btn-primary-text">View Brunch Menu</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE MUSIC */}
      <section style={{ background: 'var(--color-bg-primary)', padding: '48px 0' }} className="section-padding">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div
            ref={eventsReveal.ref}
            className={`reveal ${eventsReveal.visible ? 'visible' : ''}`}
          >
            <div className="max-w-[750px] mb-12">
              <p className="section-label">Saturdays at Ember</p>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
                Saturday Nights at Ember - Where Music Meets Conversation
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Join us Saturday evenings at Ember for live music designed to complement - not compete with - the moment. Whether you're celebrating something special, catching up with friends, or unwinding after a long week, the atmosphere is set for conversation to take centre stage.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Relax, sip, and settle into a space where great music enhances the experience without ever overpowering it.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                Live music runs select Saturdays from May 16 through September 5, 2026. Reservations after 8pm are highly recommended for those seeking the full evening experience.
              </p>
              <Link to="/live-music" className="btn-primary">
                <span className="btn-primary-text">View Music Calendar</span>
              </Link>
            </div>

            <div style={{ borderTop: '1px solid var(--color-border-subtle)' }}>
              <div
                className="flex items-center gap-6 py-5"
                style={{ borderBottom: '1px solid var(--color-border-subtle)' }}
              >
                <div style={{ color: 'var(--color-accent)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.05em', width: '7rem', flexShrink: 0 }}>
                  Select Saturdays
                </div>
                <div style={{ color: 'var(--color-text-muted)', fontSize: '13px', letterSpacing: '0.05em', width: '6rem', flexShrink: 0 }}>
                  8:00 PM
                </div>
                <div style={{ color: 'var(--color-text-primary)', fontSize: '15px' }}>
                  Live Music at Ember
                </div>
              </div>
              <div
                className="flex items-center gap-6 py-4"
                style={{ borderBottom: '1px solid var(--color-border-subtle)' }}
              >
                <div style={{ color: 'var(--color-text-muted)', fontSize: '12px', letterSpacing: '0.05em', fontStyle: 'italic' }}>
                  May 16 - September 5, 2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVATE EVENTS */}
      <section style={{ background: 'var(--color-bg-section-alt)', padding: '48px 0' }} className="section-padding">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div
            ref={privateHeadReveal.ref}
            className={`reveal ${privateHeadReveal.visible ? 'visible' : ''} max-w-[700px] mb-14`}
          >
            <p className="section-label">Gather</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              Private Dining and Events at Ember
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Whether you're hosting a corporate dinner, milestone celebration, or special gathering, Ember offers a refined setting for private dining and group events at Friday Harbour Resort. From intimate dinners to full restaurant buyouts, our team works closely with you to curate menus, cocktails, and a seamless guest experience.
            </p>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Located in Innisfil, Ember provides a distinctive backdrop for elevated events, combining exceptional service with Mediterranean-inspired cuisine.
            </p>
            <Link to="/private-events" className="btn-primary">
              <span className="btn-primary-text">Inquire About Private Events</span>
            </Link>
          </div>

          <div
            ref={privateGridReveal.ref}
            className={`reveal-stagger grid grid-cols-2 lg:grid-cols-4 gap-3`}
          >
            {privateEventImages.map((img, i) => (
              <div key={i} className={`reveal section-img-wrap ${privateGridReveal.visible ? 'visible' : ''}`} style={{ aspectRatio: '1' }}>
                <img
                  src={img}
                  alt="Private events at Ember"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section style={{ background: 'var(--color-bg-secondary)', padding: '48px 0' }} className="section-padding">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div
            ref={igReveal.ref}
            className={`reveal ${igReveal.visible ? 'visible' : ''}`}
          >
            <div className="text-center mb-12">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mb-3"
                style={{ color: 'var(--color-text-primary)', textDecoration: 'none' }}
              >
                <Instagram size={18} style={{ color: 'var(--color-accent)' }} />
                <span style={{ fontSize: '15px', fontWeight: 500, letterSpacing: '0.05em' }}>@emberfridayharbour</span>
              </a>
              <p style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                Mediterranean steakhouse at Friday Harbour Resort, Innisfil. Open for lunch, dinner & Sunday brunch.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5" style={{ gap: '2px' }}>
              {galleryImages.map((img, i) => (
                <a
                  key={i}
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden relative"
                  style={{ aspectRatio: '1', position: 'relative' }}
                >
                  <img
                    src={img}
                    alt="Ember on Instagram"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    style={{ transition: 'transform 0.5s ease, filter 0.5s ease' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.08)'; (e.currentTarget as HTMLImageElement).style.filter = 'brightness(0.8)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLImageElement).style.filter = 'brightness(1)'; }}
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ background: 'rgba(212, 149, 58, 0)', transition: 'background 0.3s ease', pointerEvents: 'none' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(212, 149, 58, 0.12)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(212, 149, 58, 0)'; }}
                  />
                </a>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span className="btn-primary-text">Follow on Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FIND US */}
      <section
        className="section-padding"
        style={{
          padding: '48px 0',
          background: 'var(--color-bg-secondary)',
          borderTop: '1px solid rgba(245, 240, 235, 0.05)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            alignItems: 'center',
          }}
          className="find-us-grid"
        >
          <div>
            <p className="text-[11px] tracking-[0.35em] uppercase mb-4 font-medium" style={{ color: 'var(--color-accent)' }}>
              Find Us
            </p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              Friday Harbour Resort, Innisfil
            </h2>
            <div className="text-[14px] space-y-1" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
              <p style={{ fontFamily: 'Playfair Display, serif', color: 'var(--color-text-primary)', fontSize: '15px' }}>Ember - Friday Harbour</p>
              <p>Friday Harbour Resort</p>
              <p>261 Sunseeker Ave</p>
              <p>Innisfil ON L9S 0J7</p>
              <a
                href="tel:7056159832"
                style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}
                className="transition-opacity hover:opacity-80"
              >705-615-9832</a>
            </div>

            <div className="mt-6 space-y-2" style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: '1.5rem' }}>
              <p className="text-[11px] tracking-[0.25em] uppercase font-medium mb-3" style={{ color: 'var(--color-accent)' }}>Summer Hours</p>
              <div className="text-[14px] space-y-1.5" style={{ color: 'var(--color-text-muted)' }}>
                <p className="text-[11px] uppercase tracking-wider font-medium" style={{ color: 'var(--color-accent)', marginBottom: '2px' }}>Lunch</p>
                <p><span style={{ color: 'var(--color-text-primary)' }}>Daily:</span> 12:00 PM - 3:00 PM</p>
                <p className="text-[11px] uppercase tracking-wider font-medium" style={{ color: 'var(--color-accent)', marginTop: '8px', marginBottom: '2px' }}>Dinner</p>
                <p><span style={{ color: 'var(--color-text-primary)' }}>Sun – Thu:</span> 5:00 PM - 9:00 PM</p>
                <p><span style={{ color: 'var(--color-text-primary)' }}>Fri – Sat:</span> 5:00 PM - 11:00 PM</p>
                <p style={{ fontSize: '12px', fontStyle: 'italic', marginTop: '4px' }}>Subject to change due to Stat Holidays.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span className="btn-primary-text">Get Directions</span>
              </a>
              <a
                href={RESERVATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span className="btn-primary-text">Make a Reservation</span>
              </a>
            </div>
          </div>

          <div
            style={{
              width: '100%',
              height: '400px',
              borderRadius: '2px',
              overflow: 'hidden',
              border: '1px solid rgba(245, 240, 235, 0.05)',
            }}
          >
            <iframe
              title="Ember location"
              src={MAP_EMBED_SRC}
              width="100%"
              height="400"
              style={{ border: 0, filter: 'grayscale(40%) contrast(1.1) brightness(0.85)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

    </>
  );
}
