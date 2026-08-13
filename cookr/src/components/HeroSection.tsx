import React from 'react';
import { TabType } from '../types';

interface HeroSectionProps { onNavigate: (tab: TabType) => void; }

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const journeyNodes = [
    { label: 'Discover', icon: 'explore', pos: 'top-[9%] right-[22%]' },
    { label: 'Meet', icon: 'groups', pos: 'top-[31%] right-[8%]' },
    { label: 'Explore', icon: 'restaurant', pos: 'bottom-[30%] right-[8%]' },
    { label: 'Enjoy', icon: 'favorite', pos: 'bottom-[8%] right-[22%]' },
  ];

  return (
    <header className="hero-wireframe relative overflow-hidden bg-[#fff8f3]">
      <div className="absolute inset-0 pointer-events-none hero-wireframe-grid" />
      <div className="absolute -top-48 -right-40 w-[34rem] h-[34rem] rounded-full bg-[#ff6a00]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-40 w-[30rem] h-[30rem] rounded-full bg-[#ffb17c]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-10 xl:gap-16 items-center min-h-[600px]">
          <div className="max-w-xl">
            <span className="eyebrow hero-reveal">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00] animate-pulse" />
              More than a meal
            </span>
            <h1 className="hero-reveal delay-1 mt-6 text-5xl sm:text-6xl xl:text-[5.2rem] font-black tracking-[-0.055em] leading-[.94] text-[#1b1c1c]">
              Discover food.
              <span className="block text-[#ff6a00]">Discover people.</span>
            </h1>
            <p className="hero-reveal delay-2 mt-7 text-base sm:text-lg text-[#654c40] max-w-lg leading-relaxed">
              Explore authentic home chefs, their stories and signature flavours — then continue the experience in the Bachelor Food app.
            </p>
            <div className="hero-reveal delay-3 mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#download" className="btn-gradient btn-glow text-white px-7 py-3.5 rounded-full text-sm font-bold inline-flex items-center justify-center gap-2 group">
                Download the App <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
              <button onClick={() => onNavigate('chefs')} className="btn-outline px-7 py-3.5 rounded-full text-sm font-bold inline-flex items-center justify-center gap-2">
                Meet Home Chefs
              </button>
            </div>
            <div className="hero-reveal delay-4 mt-9 grid grid-cols-3 gap-3 max-w-md">
              {[
                ['200+', 'Home chefs'],
                ['12K+', 'Food lovers'],
                ['4.9★', 'Community rating'],
              ].map(([value, label]) => (
                <div key={label} className="hero-mini-stat">
                  <strong>{value}</strong><span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[520px] sm:min-h-[620px] flex items-center justify-center hero-reveal delay-2">
            <div className="hero-stage">
              <div className="hero-stage-orbit orbit-one" />
              <div className="hero-stage-orbit orbit-two" />
              <div className="hero-stage-arc" />
              <div className="hero-stage-inner">
                <div className="hero-stage-photo">
                  <img src="/gulab-jamun-reference.png" alt="Warm home-food experience" />
                  <div className="hero-photo-shade" />
                  <div className="absolute left-5 right-5 bottom-5 text-white">
                    <span className="text-[9px] uppercase tracking-[.22em] text-[#ffb47f] font-black">Inside the app</span>
                    <p className="text-xl font-black mt-1">Real food. Real stories.</p>
                  </div>
                </div>
              </div>
              <div className="hero-stage-label label-top"><span className="material-symbols-outlined">search</span> Search</div>
              <div className="hero-stage-label label-bottom"><span className="material-symbols-outlined">download</span> Discover in app</div>
              {journeyNodes.map((node) => (
                <div key={node.label} className={`hero-node ${node.pos}`} title={node.label}>
                  <span className="material-symbols-outlined">{node.icon}</span>
                  <span>{node.label}</span>
                </div>
              ))}
              <div className="hero-stage-pulse" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
