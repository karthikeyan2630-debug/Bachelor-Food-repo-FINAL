import React from 'react';
import { TabType } from '../types';

interface HowItWorksProps {
  onNavigate: (tab: TabType) => void;
}

const STEPS = [
  { number: '01', icon: 'explore', title: 'Discover', desc: 'Open the app and explore home chefs, cuisines and food stories around you.' },
  { number: '02', icon: 'person_search', title: 'Meet', desc: 'Get to know the person behind the food — speciality, story and signature dishes.' },
  { number: '03', icon: 'favorite', title: 'Choose', desc: 'Save the chefs and food experiences that feel right for your taste and routine.' },
  { number: '04', icon: 'restaurant', title: 'Enjoy', desc: 'Continue in the app and make authentic home food part of your everyday.' },
];

export const HowItWorksSection: React.FC<HowItWorksProps> = ({ onNavigate }) => (
  <section className="py-20 md:py-28 bg-[#f4eee9] overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto reveal-on-scroll">
        <span className="eyebrow">A simple journey</span>
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">From discovery to your table.</h2>
        <p className="mt-4 text-sm sm:text-base text-[#6a5043]">
          No complicated process. Just a better way to discover the people and food that feel like home.
        </p>
      </div>

      <div className="journey mt-16 relative">
        <div className="journey-line" />
        <div className="journey-traveller" />
        <div className="grid md:grid-cols-4 gap-5 relative z-10">
          {STEPS.map((step, index) => (
            <div key={step.number} className="journey-step reveal-on-scroll" style={{ animationDelay: `${index * 120}ms` }}>
              <div className="journey-node">
                <span className="material-symbols-outlined">{step.icon}</span>
              </div>
              <span className="text-[10px] tracking-[0.2em] font-black text-[#ff6a00]">{step.number}</span>
              <h3 className="mt-2 text-xl font-extrabold">{step.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#6a5043]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-[2rem] bg-[#1b1008] text-white p-8 md:p-12 relative overflow-hidden reveal-on-scroll">
        <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-[#ff6a00]/20 blur-3xl" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-7">
          <div>
            <span className="eyebrow-dark">Ready when you are</span>
            <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold">Your food discovery starts with one tap.</h3>
            <p className="mt-2 text-sm text-white/55">Explore chefs and home-food stories in the Bachelor Food app.</p>
          </div>
          <a href="#download" className="btn-gradient btn-glow shrink-0 px-7 py-3.5 rounded-full text-sm font-bold inline-flex items-center gap-2">
            Download the App <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);
