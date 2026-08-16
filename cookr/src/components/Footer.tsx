import React from 'react';
import { TabType } from '../types';
import { BachelorFoodLogo } from './Logo';

interface FooterProps { onNavigate: (tab: TabType) => void; }

interface FooterColumnProps { title: string; items: [string, TabType][]; onNavigate: (tab: TabType) => void; }
const FooterColumn: React.FC<FooterColumnProps> = ({ title, items, onNavigate }) => (
  <div>
    <h3 className="footer-title">{title}</h3>
    <ul className="space-y-3">
      {items.map(([label, tab]) => (
        <li key={label}>
          <button onClick={() => onNavigate(tab)} className="footer-professional-link">
            {label}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

const SOCIAL = [
  // Update these four values if Bachelor Food's official handles change.

  { label: 'Instagram', url: 'https://www.instagram.com/bachelorfood/', icon: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8"/>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
    </svg>
  )},
  { label: 'X', url: 'https://x.com/bachelorfood', icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )},
  { label: 'YouTube', url: 'https://www.youtube.com/@BachelorFood', icon: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="5" width="20" height="14" rx="4" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M10 9.5l5 2.5-5 2.5V9.5z" fill="currentColor"/>
    </svg>
  )},
  { label: 'LinkedIn', url: 'https://www.linkedin.com/company/bachelorfood/', icon: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M7 10v7M7 7v.5M11 17v-4c0-1.7 1-2 2-2 1.5 0 2 .9 2 2.5V17M11 10v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  )},
];

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const go = (tab: TabType) => { onNavigate(tab); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <footer id="download" className="footer-professional">

      {/* ── App Download Banner ── */}
      <div className="footer-professional-top">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 footer-professional-cta">
          <div>
            <span className="footer-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]" />
              Bachelor Food app
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight max-w-2xl">
              Good food feels better when you know the story behind it.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white/55 leading-relaxed max-w-xl">
              Discover home chefs, signature dishes and food stories — then take the full experience with you in the Bachelor Food app.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href="https://play.google.com/store"
                target="_blank" rel="noopener noreferrer"
                className="store-button"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="opacity-80">
                  <path d="M3 20.5v-17c0-.83 1-.83 1.5-.5l14 8.5c.5.3.5 1 0 1.3L4.5 21c-.5.33-1.5.33-1.5-.5z"/>
                </svg>
                <span><small>GET IT ON</small><strong>Google Play</strong></span>
              </a>
              <a
                href="https://apps.apple.com"
                target="_blank" rel="noopener noreferrer"
                className="store-button"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="opacity-80">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.22.14-2.16 1.26-2.14 3.76.03 2.99 2.62 3.99 2.65 4-.03.08-.42 1.44-1.3 2.85M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span><small>DOWNLOAD ON THE</small><strong>App Store</strong></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main footer grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_.8fr_.8fr_.8fr] gap-10 pb-12 border-b border-white/9">

          {/* Brand col */}
          <div>
            <BachelorFoodLogo className="footer-brand-logo" />
            <p className="mt-5 text-sm text-white/45 leading-relaxed max-w-sm">
              A discovery platform built around real home chefs, authentic food and the people who make every meal feel personal — across India.
            </p>

            {/* Contact cards */}
            <div className="mt-6 grid grid-cols-1 gap-2 max-w-xs">
              <div className="footer-contact-card">
                <span className="text-[9px] text-white/35 uppercase tracking-wider">Email</span>
                <a href="mailto:info.bachelorfood@gmail.com" className="block mt-1 text-xs text-white/75 hover:text-[#ff9b5b] transition-colors">
                  info.bachelorfood@gmail.com
                </a>
              </div>
              <div className="footer-contact-card">
                <span className="text-[9px] text-white/35 uppercase tracking-wider">Support</span>
                <a href="mailto:support@bachelorfood.in" className="block mt-1 text-xs text-white/75 hover:text-[#ff9b5b] transition-colors">
                  support@bachelorfood.in
                </a>
              </div>
            </div>

            {/* Social icons */}
            <div className="mt-6 flex gap-2">
              {SOCIAL.map(s => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="footer-social"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <FooterColumn
            title="Discover"
            items={[['Home','home'],['Explore Food','menu'],['Meet Chefs','chefs'],['How It Works','how-it-works'],['Reviews','reviews'],['Plans','plans']]}
            onNavigate={go}
          />
          <FooterColumn
            title="Company"
            items={[['About Us','home'],['Our Mission','home'],['Careers','home'],['Blog','home'],['Press Kit','home'],['Terms & Conditions','terms']]}
            onNavigate={go}
          />
          <FooterColumn
            title="Support"
            items={[['Help Center','home'],['Contact Us','home'],['Privacy Policy','home'],['Refund Policy','home'],['Community','home'],['Download App','home']]}
            onNavigate={go}
          />
        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-7 flex flex-col lg:flex-row gap-5 justify-between items-start lg:items-center">
          <div>
            <p className="text-[11px] text-white/35">© 2026 Bachelor Food Home Kitchen Pvt. Ltd. All rights reserved.</p>
            <p className="text-[10px] text-white/22 mt-1">Made for people who miss the taste of home. · Built in Tamil Nadu 🍛</p>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-[10px] text-white/35">
            {['Chennai','Bengaluru','Coimbatore','Madurai','Hyderabad','Mumbai','Pune'].map(city => (
              <span key={city}>{city}</span>
            ))}
            <span className="text-[#ff8c33] font-bold">+14 more cities</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] text-white/30">All systems normal</span>
            </div>
            <div className="flex gap-2">
              {SOCIAL.map(s => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="footer-social">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
