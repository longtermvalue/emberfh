import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const tabs = [
  { label: 'Lunch', href: '/menu/lunch' },
  { label: 'Dinner', href: '/menu/dinner' },
  { label: 'Chophouse', href: '/menu/chophouse' },
  { label: 'Coastal Brunch', href: '/menu/brunch' },
  { label: 'Drink', href: '/menu/drinks' },
];

export default function MenuTabNav() {
  const location = useLocation();

  return (
    <div
      className="flex flex-wrap gap-1 mb-14"
      style={{ borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '0' }}
    >
      {tabs.map((tab) => {
        const active = location.pathname === tab.href;
        return (
          <Link
            key={tab.href}
            to={tab.href}
            className="px-6 py-3 text-[13px] font-medium tracking-[0.08em] uppercase transition-all duration-200 relative"
            style={{
              color: active ? 'var(--color-accent)' : 'var(--color-text-muted)',
              borderBottom: active ? '2px solid var(--color-accent)' : '2px solid transparent',
              marginBottom: '-1px',
              fontFamily: 'DM Sans, sans-serif',
            }}
            onMouseEnter={(e) => { if (!active) (e.currentTarget as HTMLElement).style.color = 'var(--color-text-secondary)'; }}
            onMouseLeave={(e) => { if (!active) (e.currentTarget as HTMLElement).style.color = 'var(--color-text-muted)'; }}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
