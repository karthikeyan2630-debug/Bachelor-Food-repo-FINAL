import React from 'react';
import { TabType } from '../types';

const HeroCharacterSVG: React.FC = () => (
  <svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <radialGradient id="cBg" cx="50%" cy="35%" r="75%">
        <stop offset="0%" stopColor="#6b260c"/>
        <stop offset="100%" stopColor="#210b03"/>
      </radialGradient>
      <linearGradient id="apron" x1="0" x2="1">
        <stop offset="0%" stopColor="#ff6a00"/>
        <stop offset="100%" stopColor="#ff9b5b"/>
      </linearGradient>
      <filter id="softShadow" x="-30%" y="-30%" width="160%" height="180%">
        <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#160700" floodOpacity=".45"/>
      </filter>
    </defs>
    <rect width="480" height="480" fill="url(#cBg)"/>
    <circle cx="240" cy="190" r="145" fill="#ff6a00" opacity=".08"/>
    <ellipse cx="240" cy="420" rx="145" ry="24" fill="#120603" opacity=".45"/>

    {/* floating food accents */}
    <g fill="#ffb47f" opacity=".85">
      <circle cx="88" cy="128" r="5"/><circle cx="108" cy="105" r="3"/>
      <circle cx="386" cy="126" r="5"/><circle cx="366" cy="96" r="3"/>
    </g>
    <g stroke="#ff8b3d" strokeWidth="3" strokeLinecap="round" opacity=".65">
      <path d="M75 160l-16 9"/><path d="M405 158l16 9"/>
    </g>

    {/* chef body */}
    <path d="M136 410c5-86 36-129 104-129s99 43 104 129z" fill="url(#apron)" filter="url(#softShadow)"/>
    <path d="M181 300c18 16 36 24 59 24s41-8 59-24l-8 110h-102z" fill="#fff7f0" opacity=".94"/>
    <path d="M213 328h54v82h-54z" fill="#7b2f12" opacity=".12"/>

    {/* neck + face */}
    <rect x="218" y="244" width="44" height="47" rx="18" fill="#d9824a"/>
    <circle cx="240" cy="193" r="74" fill="#e79a62" filter="url(#softShadow)"/>
    <path d="M174 190c2-51 29-78 67-78 45 0 72 29 67 79-13-17-31-27-52-30-24 14-51 25-82 29z" fill="#3b170b"/>
    <path d="M179 174c11-43 38-62 64-62 25 0 51 11 63 37-29-13-67-15-104 25z" fill="#4b1d0c"/>
    <circle cx="214" cy="195" r="5" fill="#24100a"/>
    <circle cx="266" cy="195" r="5" fill="#24100a"/>
    <path d="M224 225q16 12 32 0" fill="none" stroke="#7a3417" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="191" cy="211" r="8" fill="#f4b08a" opacity=".5"/>
    <circle cx="289" cy="211" r="8" fill="#f4b08a" opacity=".5"/>

    {/* chef hat */}
    <path d="M190 124c-13-29 7-53 31-44 5-28 43-28 48 0 27-10 47 16 31 45z" fill="#fff7f0"/>
    <path d="M187 126h127v18H187z" fill="#fff7f0"/>

    {/* arms */}
    <path d="M148 334c-24 11-38 30-38 51 0 12 10 20 22 16l54-29z" fill="#e79a62"/>
    <path d="M332 334c24 11 38 30 38 51 0 12-10 20-22 16l-54-29z" fill="#e79a62"/>

    {/* bowl */}
    <ellipse cx="240" cy="350" rx="96" ry="23" fill="#f7e6d7" filter="url(#softShadow)"/>
    <path d="M151 348c8 54 46 78 89 78s81-24 89-78c-46 12-132 12-178 0z" fill="#ff6a00"/>
    <ellipse cx="240" cy="347" rx="88" ry="19" fill="#fff1e6"/>
    <ellipse cx="240" cy="347" rx="76" ry="14" fill="#8d3a13"/>
    <circle cx="209" cy="343" r="9" fill="#65a30d"/>
    <circle cx="237" cy="338" r="10" fill="#eab308"/>
    <circle cx="267" cy="344" r="9" fill="#65a30d"/>
    <path d="M226 324q-8-24 4-39M254 324q9-22-1-39" fill="none" stroke="#fff3d8" strokeWidth="4" strokeLinecap="round" opacity=".5"/>

    {/* tiny heart/food spark */}
    <path d="M392 246c-8-12-28-2-18 11l18 18 18-18c10-13-10-23-18-11z" fill="#ff9b5b" opacity=".85"/>
  </svg>
);

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
                  <HeroCharacterSVG />
                  <div className="hero-photo-shade" />
                </div>
              </div>
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
