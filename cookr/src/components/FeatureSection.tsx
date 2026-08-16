import React from 'react';
import { TabType } from '../types';

interface FeatureSectionProps {
  onNavigate: (tab: TabType) => void;
}

const FEATURES = [
  { icon: 'restaurant', title: 'Real Home Food', desc: 'Discover comforting recipes made in real home kitchens, not factory-style kitchens.' },
  { icon: 'groups', title: 'Meet the Chef', desc: 'See who is behind your food, their story, speciality and signature dishes.' },
  { icon: 'explore', title: 'Discover Nearby', desc: 'Explore home-food experiences and chefs available around your city.' },
  { icon: 'favorite', title: 'Made With Care', desc: 'A food-first community built around trust, taste and the feeling of home.' },
];

export const FeatureSection: React.FC<FeatureSectionProps> = ({ onNavigate }) => (
  <section className="relative overflow-hidden py-20 md:py-28 bg-[#1b1008] text-white">
    <div className="absolute -top-40 -right-32 w-96 h-96 rounded-full bg-[#ff6a00]/20 blur-3xl" />
    <div className="absolute -bottom-48 -left-24 w-96 h-96 rounded-full bg-[#ff9b5b]/10 blur-3xl" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-[0.9fr_1.4fr] gap-12 items-end">
        <div className="reveal-on-scroll">
          <span className="eyebrow-dark">More than a meal</span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Discover the people, stories & flavours behind home food.
          </h2>
          <p className="mt-5 text-sm sm:text-base text-white/60 leading-relaxed max-w-md">
            Bachelor Food is your window into authentic home cooking. Explore chefs, food and experiences — then continue the journey in the app.
          </p>
          <button onClick={() => onNavigate('chefs')} className="btn-glow mt-7 px-6 py-3 rounded-full bg-[#ff6a00] text-white font-bold text-sm inline-flex items-center gap-2">
            Meet the chefs <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {FEATURES.map((feature, i) => (
            <div key={feature.title} className="feature-card reveal-on-scroll" style={{ transitionDelay: `${i * 90}ms` }}>
              <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-[#ff9b5b]">
                <span className="material-symbols-outlined text-xl">{feature.icon}</span>
              </div>
              <h3 className="mt-5 text-base font-bold">{feature.title}</h3>
              <p className="mt-2 text-xs text-white/55 leading-relaxed">{feature.desc}</p>
              <span className="feature-number absolute top-5 right-5 text-white/10 text-5xl font-black">0{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
