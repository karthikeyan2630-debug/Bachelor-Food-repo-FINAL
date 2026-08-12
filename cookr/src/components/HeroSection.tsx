import React, { useEffect, useState } from 'react';
import { TabType } from '../types';

interface HeroSectionProps {
  onNavigate: (tab: TabType) => void;
}

const HERO_IMAGES = [
  { url: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=1000&q=85', label: 'Chettinad Chicken', tag: 'South Indian' },
  { url: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=85', label: 'Kerala Fish Curry', tag: 'Kerala Special' },
  { url: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=85', label: 'Idli & Sambar', tag: 'Breakfast' },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setActiveImg((p) => (p + 1) % HERO_IMAGES.length), 4000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <header className="relative overflow-hidden hero-shell">
      <div className="hero-grid" />
      <div className="absolute -top-40 left-1/3 w-[36rem] h-[36rem] rounded-full bg-[#ff6a00]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-16 pb-16 md:pb-24 relative z-10">
        <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-12 xl:gap-20 items-center">
          <div className="max-w-2xl">
            <div className="hero-reveal">
              <span className="eyebrow inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00] animate-pulse" />
                Home food, reimagined for the app
              </span>
            </div>

            <h1 className="hero-reveal delay-1 mt-6 text-5xl sm:text-6xl xl:text-7xl font-black tracking-[-0.045em] leading-[0.98] text-[#1b1c1c]">
              Home food.
              <span className="block text-[#ff6a00]">Made with heart.</span>
            </h1>

            <p className="hero-reveal delay-2 mt-6 text-base sm:text-lg text-[#654c40] max-w-xl leading-relaxed">
              Discover authentic home chefs, their stories and the food they love to cook — all through the Bachelor Food app.
            </p>

            <div className="hero-reveal delay-3 mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#download" className="btn-gradient btn-glow text-white px-7 py-3.5 rounded-full text-sm font-bold inline-flex items-center justify-center gap-2 group">
                Download the App
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
              <button onClick={() => onNavigate('chefs')} className="btn-outline px-7 py-3.5 rounded-full text-sm font-bold inline-flex items-center justify-center gap-2">
                Meet Our Chefs
              </button>
            </div>

            <div className="hero-reveal delay-4 mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-[#6f584d]">
              {[
                ['verified', 'Verified home chefs'],
                ['favorite', 'Real food stories'],
                ['location_on', 'Growing across cities'],
              ].map(([icon, label]) => (
                <span key={label} className="inline-flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#ff6a00] text-base">{icon}</span>{label}
                </span>
              ))}
            </div>
          </div>

          <div className="relative hero-reveal delay-2">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-[#ff6a00]/10 blur-2xl" />
            <div className="relative rounded-[2rem] overflow-hidden border border-white/80 shadow-[0_30px_80px_rgba(58,31,15,0.18)] h-[440px] sm:h-[560px]">
              {HERO_IMAGES.map((image, index) => (
                <img
                  key={image.url}
                  src={image.url}
                  alt={image.label}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${index === activeImg ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                  referrerPolicy="no-referrer"
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b1008]/80 via-transparent to-[#1b1008]/10" />

              <div className="absolute top-5 left-5 glass-dark px-4 py-3 rounded-2xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#ff6a00] text-white flex items-center justify-center">
                  <span className="material-symbols-outlined filled text-lg">home</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Real home kitchens</p>
                  <p className="text-[10px] text-white/60">Real people. Real recipes.</p>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#ffb47f]">{HERO_IMAGES[activeImg].tag}</span>
                  <p className="text-xl font-extrabold text-white mt-1">{HERO_IMAGES[activeImg].label}</p>
                  <p className="text-xs text-white/60 mt-1">Explore this chef experience in the app</p>
                </div>
                <div className="flex gap-1.5">
                  {HERO_IMAGES.map((_, index) => (
                    <button aria-label={`Show slide ${index + 1}`} key={index} onClick={() => setActiveImg(index)} className={`h-1.5 rounded-full transition-all ${index === activeImg ? 'w-7 bg-white' : 'w-1.5 bg-white/40'}`} />
                  ))}
                </div>
              </div>
            </div>

            <div className="hero-float glass-light absolute -left-5 sm:-left-10 top-1/2 -translate-y-1/2 rounded-2xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined filled text-[#ff6a00]">star</span>
                <div>
                  <p className="text-sm font-black">4.9 / 5</p>
                  <p className="text-[10px] text-[#765d50]">Loved by foodies</p>
                </div>
              </div>
            </div>

            <div className="hero-float hero-float-delay glass-light absolute -right-3 sm:-right-8 bottom-14 rounded-2xl px-4 py-3 shadow-xl">
              <p className="text-[10px] uppercase tracking-widest font-bold text-[#a14000]">Your next favourite</p>
              <p className="text-sm font-extrabold mt-0.5">Could be a home chef.</p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            ['200+', 'Home chefs'],
            ['12K+', 'Food lovers'],
            ['5+', 'Cities & growing'],
            ['4.9★', 'Community rating'],
          ].map(([value, label]) => (
            <div key={label} className="stat-pill">
              <p className="text-2xl font-black text-[#ff6a00]">{value}</p>
              <p className="text-[11px] font-semibold text-[#6d564a] mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};
