import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const RESERVATION_URL = 'https://www.opentable.ca/r/ember-reservations-innisfil?restref=1498666&lang=en-CA&ot_source=Restaurant%20website';

const menuItems = [
  { label: 'Lunch', href: '/menu/lunch' },
  { label: 'Dinner', href: '/menu/dinner' },
  { label: 'Chophouse', href: '/menu/chophouse' },
  { label: 'Coastal Brunch', href: '/menu/brunch' },
  { label: 'Drink', href: '/menu/drinks' },
];

const navLinks = [
  { label: 'Private Events', href: '/private-events' },
  { label: 'Live Music', href: '/live-music' },
  { label: 'Gift Cards', href: '/gift-cards' },
  { label: 'Hours & Directions', href: '/hours-directions' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuDropdownOpen, setMenuDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMenuDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setMenuDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isMenuActive = location.pathname.startsWith('/menu');

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50"
        style={{
          height: '80px',
          background: scrolled ? 'rgba(13, 13, 13, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(212, 149, 58, 0.1)' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            <Link
              to="/"
              className="flex-shrink-0"
              style={{ background: 'transparent', padding: 0, boxShadow: 'none', border: 'none' }}
            >
              <img
                src="/ember-logo_(2).png"
                alt="Ember"
                style={{ height: '68px', width: 'auto', padding: 0, boxShadow: 'none', border: 'none', mixBlendMode: 'screen', display: 'block', objectPosition: 'left' }}
              />
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              <div className="relative" ref={dropdownRef}>
                <button
                  className={`nav-link flex items-center gap-1 text-[13px] font-medium tracking-[0.1em] uppercase`}
                  style={{ color: isMenuActive ? 'var(--color-accent)' : 'var(--color-text-secondary)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  onMouseEnter={() => setMenuDropdownOpen(true)}
                  onClick={() => setMenuDropdownOpen(!menuDropdownOpen)}
                >
                  Menu
                  <ChevronDown
                    size={13}
                    style={{
                      transition: 'transform 0.2s ease',
                      transform: menuDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </button>

                <div
                  className={`nav-dropdown ${menuDropdownOpen ? 'open' : ''}`}
                  onMouseLeave={() => setMenuDropdownOpen(false)}
                >
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      style={{ color: location.pathname === item.href ? 'var(--color-accent)' : undefined }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`nav-link text-[13px] font-medium tracking-[0.1em] uppercase`}
                  style={{ color: location.pathname === link.href ? 'var(--color-accent)' : 'var(--color-text-secondary)', textDecoration: 'none' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-text-primary)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = location.pathname === link.href ? 'var(--color-accent)' : 'var(--color-text-secondary)'; }}
                >
                  {link.label}
                </Link>
              ))}

              <a
                href={RESERVATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: '10px 24px', fontSize: '12px' }}
              >
                <span className="btn-primary-text">Reservations</span>
              </a>
            </div>

            <button
              className={`hamburger lg:hidden ${mobileOpen ? 'open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`} style={{ zIndex: 200 }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 16px',
            borderBottom: '1px solid rgba(245, 240, 235, 0.06)',
          }}
        >
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            style={{ background: 'transparent', padding: 0, boxShadow: 'none', border: 'none' }}
          >
            <img
              src="/ember-logo_(2).png"
              alt="Ember"
              style={{ height: '60px', width: 'auto', mixBlendMode: 'screen' }}
            />
          </Link>
          <button
            className={`hamburger open`}
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', flexGrow: 1, justifyContent: 'center', paddingTop: '16px', paddingBottom: '32px' }}>
          {menuItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="mobile-menu-link"
              onClick={() => setMobileOpen(false)}
              style={{ color: location.pathname === item.href ? 'var(--color-accent)' : undefined }}
            >
              {item.label}
            </Link>
          ))}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="mobile-menu-link"
              onClick={() => setMobileOpen(false)}
              style={{ color: location.pathname === link.href ? 'var(--color-accent)' : undefined }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mobile-menu-link"
            onClick={() => setMobileOpen(false)}
            style={{ color: location.pathname === '/contact' ? 'var(--color-accent)' : undefined }}
          >
            Contact
          </Link>
          <div style={{ marginTop: '24px' }}>
            <a
              href={RESERVATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mobile-menu-link"
              onClick={() => setMobileOpen(false)}
              style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', padding: '14px 56px' }}
            >
              <span className="btn-primary-text">Make a Reservation</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
