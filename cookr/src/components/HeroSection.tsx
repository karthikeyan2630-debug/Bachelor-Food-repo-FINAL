import React, { useState, useEffect } from 'react';
import { TabType } from '../types';

interface HeroSectionProps {
  onNavigate: (tab: TabType) => void;
}

const STATS = [
  { value: '12,000+', label: 'Monthly Orders' },
  { value: '200+', label: 'Home Chefs' },
  { value: '4.9★', label: 'Avg Rating' },
  { value: '5', label: 'Cities' },
];

// Curated food photos — 4 rotating hero images
const HERO_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=900&q=85',
    label: 'Chettinad Chicken Curry',
    tag: 'South Indian',
  },
  {
    url: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=900&q=85',
    label: 'Kerala Fish Curry',
    tag: 'Kerala Special',
  },
  {
    url: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=85',
    label: 'Idli Sambar Platter',
    tag: 'Breakfast',
  },
  {
    url: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85',
    label: 'Samosa & Chai',
    tag: 'Evening Snack',
  },
];

// Small floating photo grid items
const GRID_PHOTOS = [
  'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=300&q=75',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAChBc9YVTOsLe96o-LqKo8olPnwawI6IMEXMsFJs2n5GBRRTGgswLuEOvVha0BjDF5erBLhoshBQAeJqUpeYejSBI75GW9CQr-xulnc-WSLnSuPTel2zdD8vvBPZOspgYpMrIb9h3cEe3Suwr78jPiY9PbApq_Qbka7LsHjx8e9aDnHY-mSxd7obmWRLretEl9J4H_EUVgHXpVO3hE2NHkYuLyXopjlmCE0claYtta1XnxnME5xN5yOQ',
  'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=300&q=75',
  'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=300&q=75',
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [activeImg, setActiveImg] = useState(0);

  // Auto-rotate every 3.5 s
  useEffect(() => {
    const id = setInterval(() => setActiveImg((p) => (p + 1) % HERO_IMAGES.length), 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="relative overflow-hidden pt-8 pb-0 md:pt-14">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(900px,90vw)] h-[min(500px,50vh)] bg-[#ff6a00]/6 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* ── LEFT: copy ── */}
          <div className="flex flex-col items-start gap-5">
            <span className="inline-flex items-center gap-1.5 bg-[#ffdbcc] text-[#7a2a00] text-xs font-bold px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00] animate-ping inline-block" />
              Now live in 5 South Indian cities
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-extrabold tracking-tight text-[#1b1c1c] leading-[1.1]">
              Taste of home,{' '}
              <span className="relative inline-block">
                <span className="text-[#ff6a00]">every morning.</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 240 10" fill="none">
                  <path d="M2 8 C50 2, 100 2, 120 5 S200 9 238 4" stroke="#FF6A00" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.45" />
                </svg>
              </span>
            </h1>

            <p className="text-base md:text-lg text-[#5a4136] max-w-md leading-relaxed">
              Bachelor Food connects you with verified home chefs who cook
              fresh South Indian meals daily — delivered to your hostel, PG,
              or office by 8:30 AM. No preservatives. No ghost kitchens. Just
              real food from real kitchens.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3 mt-2 w-full sm:w-auto">
              <button
                onClick={() => onNavigate('menu')}
                className="btn-gradient text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-md flex items-center gap-2 group w-full sm:w-auto justify-center"
              >
                <span>Browse Menu</span>
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
              <button
                onClick={() => onNavigate('chefs')}
                className="bg-white border-2 border-[#ff6a00] text-[#ff6a00] px-8 py-3.5 rounded-full text-sm font-bold hover:bg-[#fff5ee] transition-colors w-full sm:w-auto text-center"
              >
                Meet Our Chefs
              </button>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-[#f0eded] w-full">
              {[
                { icon: 'verified', label: 'Verified Chefs' },
                { icon: 'schedule', label: 'By 8:30 AM' },
                { icon: 'eco', label: 'No Preservatives' },
                { icon: 'payments', label: 'From ₹70/meal' },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-1.5 text-xs font-semibold text-[#5a4136]">
                  <span className="material-symbols-outlined text-[#ff6a00] text-base">{b.icon}</span>
                  {b.label}
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: photo carousel card ── */}
          <div className="relative">
            {/* Main big image */}
            <div className="relative h-[380px] sm:h-[460px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/60">
              {HERO_IMAGES.map((img, idx) => (
                <img
                  key={img.url}
                  src={img.url}
                  alt={img.label}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    idx === activeImg ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                  referrerPolicy="no-referrer"
                />
              ))}

              {/* Dark gradient bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

              {/* Dish name label bottom */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <span className="bg-[#ff6a00] text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                    {HERO_IMAGES[activeImg].tag}
                  </span>
                  <p className="text-white font-bold text-base mt-1.5 drop-shadow-sm">
                    {HERO_IMAGES[activeImg].label}
                  </p>
                </div>
                {/* Dot indicators */}
                <div className="flex gap-1.5 mb-1">
                  {HERO_IMAGES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className={`rounded-full transition-all duration-300 ${
                        i === activeImg ? 'w-5 h-2 bg-white' : 'w-2 h-2 bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Top right badge */}
              <div className="absolute top-4 right-4 glass-panel rounded-2xl px-3.5 py-2.5 shadow-xl border border-white/80 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined filled text-lg">verified</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1b1c1c]">200+ Chefs</p>
                  <p className="text-[10px] text-[#5a4136]">Kitchen-audited</p>
                </div>
              </div>
            </div>

            {/* Thumbnail strip + rating in one row */}
            <div className="flex gap-2.5 mt-3 items-center overflow-x-auto no-scrollbar pb-1">
              {GRID_PHOTOS.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-20 h-16 rounded-2xl overflow-hidden border-2 transition-all duration-200 ${
                    i === activeImg ? 'border-[#ff6a00]' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
              {/* Rating badge — inline with thumbnails, always visible */}
              <div className="glass-panel rounded-2xl px-3 py-2.5 shadow-xl border border-white/80 shrink-0 bg-white ml-auto">
                <div className="flex items-center gap-1 mb-0.5">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className="material-symbols-outlined filled text-amber-400 text-sm">star</span>
                  ))}
                  <span className="text-sm font-bold text-[#1b1c1c] ml-1">4.9</span>
                </div>
                <p className="text-[10px] text-[#5a4136]">12,000+ happy customers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-14 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-2xl px-6 py-5 text-center soft-shadow border border-[#f0eded]"
            >
              <p className="text-2xl font-extrabold text-[#ff6a00]">{s.value}</p>
              <p className="text-xs font-semibold text-[#5a4136] mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Wave divider */}
      <div className="mt-12 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" className="w-full text-[#f6f3f2]" fill="currentColor">
          <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </header>
  );
};
