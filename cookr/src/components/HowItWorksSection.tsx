import React from 'react';
import { TabType } from '../types';

interface HowItWorksProps {
  onNavigate: (tab: TabType) => void;
}

const STEPS = [
  {
    icon: 'location_on',
    title: 'Set Your Location',
    desc: 'Enter your hostel, PG, or office address. Bachelor Food shows you verified home chefs who deliver to your exact pin — no more "area not serviceable."',
  },
  {
    icon: 'person_search',
    title: 'Pick a Chef',
    desc: 'Browse chef profiles, read their story, check their menu and real customer ratings. Choose someone who cooks the food you grew up eating.',
  },
  {
    icon: 'calendar_month',
    title: 'Subscribe or Try Once',
    desc: 'Lock in a weekly or monthly plan for the best per-meal price, or try a single meal on demand. Pause or skip any day — no questions asked.',
  },
  {
    icon: 'breakfast_dining',
    title: 'Receive by 8:30 AM',
    desc: 'Your chef preps fresh from 5 AM. Your meal arrives in insulated, eco-friendly packaging — hot, sealed, and ready to eat at your desk or dining table.',
  },
];

const GUARANTEES = [
  { icon: 'verified_user', label: 'Hygiene Guarantee', desc: 'Every kitchen is audited quarterly. If standards slip, the chef is suspended immediately — no exceptions.' },
  { icon: 'no_meals', label: 'No Ghost Kitchens', desc: 'Your food is cooked in a real home kitchen, not a central commissary optimised for speed over taste.' },
  { icon: 'replay', label: 'Skip Anytime', desc: 'Plans are yours to control. Pause, skip, or switch chefs with 12 hours notice — no lock-in, no penalty.' },
  { icon: 'eco', label: 'Zero Plastic', desc: 'All packaging is compostable or reusable. Bachelor Food is on a mission to remove single-use plastic from food delivery.' },
];

export const HowItWorksSection: React.FC<HowItWorksProps> = ({ onNavigate }) => {
  return (
    <section className="bg-[#f6f3f2] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="bg-[#ffdbcc] text-[#351000] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider inline-block">
            The Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1b1c1c] tracking-tight mt-2">
            From Their Kitchen to Your Door
          </h2>
          <p className="text-base sm:text-lg text-[#5a4136]">
            Four steps — all handled by Bachelor Food so you can focus on your morning.
          </p>
        </div>

        {/* Animated route: a visual of the app-led journey */}
        <div className="relative rounded-[2rem] bg-[#1b1c1c] p-6 md:p-10 overflow-hidden">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#ff6a00]/20 rounded-full blur-3xl" />
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-5 text-white mb-8">
            <div><p className="text-[#ff8c33] text-xs font-bold uppercase tracking-[.2em] mb-2">Your morning, mapped</p><h3 className="text-2xl font-extrabold">One app. A calmer food routine.</h3></div>
            <span className="text-sm text-white/60">From your neighbourhood kitchen to your table</span>
          </div>
          <svg viewBox="0 0 1000 120" className="relative w-full h-20 md:h-28 overflow-visible" aria-hidden="true"><path d="M20 82 C175 5 300 116 465 55 S720 14 980 70" fill="none" stroke="rgba(255,255,255,.18)" strokeWidth="5" strokeLinecap="round" /><path className="route-line" d="M20 82 C175 5 300 116 465 55 S720 14 980 70" fill="none" stroke="#ff6a00" strokeWidth="3" strokeLinecap="round" /><circle cx="20" cy="82" r="10" fill="#ff6a00" /><circle cx="980" cy="70" r="10" fill="#ff8c33" /></svg>
          <div className="relative flex justify-between text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white/65"><span>Find</span><span>Choose</span><span>Plan</span><span>Enjoy</span></div>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, idx) => (
            <div
              key={step.title}
              className="bg-white rounded-3xl p-6 soft-shadow border border-[#f0eded] space-y-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-500 reveal-card"
              style={{ animationDelay: `${idx * 90}ms` }}
            >
              <div className="flex justify-between items-center">
                <div className="w-12 h-12 rounded-2xl bg-[#fff0e6] text-[#ff6a00] flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">{step.icon}</span>
                </div>
                <span className="text-4xl font-extrabold text-[#ffdbcc] leading-none select-none">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-base font-bold text-[#1b1c1c]">{step.title}</h3>
              <p className="text-xs text-[#5a4136] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* The Promise */}
        <div>
          <h3 className="text-2xl font-extrabold text-[#1b1c1c] text-center mb-8">The Bachelor Food Promise</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {GUARANTEES.map((g) => (
              <div key={g.label} className="bg-white rounded-2xl p-5 soft-shadow border border-[#f0eded] space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#fff0e6] flex items-center justify-center text-[#ff6a00]">
                  <span className="material-symbols-outlined text-xl">{g.icon}</span>
                </div>
                <h4 className="text-sm font-bold text-[#1b1c1c]">{g.label}</h4>
                <p className="text-xs text-[#5a4136] leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cities */}
        <div className="bg-white rounded-3xl p-6 md:p-8 soft-shadow border border-[#f0eded]">
          <p className="text-xs font-bold uppercase tracking-widest text-[#a14000] mb-4">Currently Delivering In</p>
          <div className="flex flex-wrap gap-3">
            {['Salem', 'Chennai', 'Coimbatore', 'Bengaluru', 'Madurai'].map((city) => (
              <span
                key={city}
                className="flex items-center gap-1.5 bg-[#fff0e6] text-[#a14000] text-sm font-semibold px-4 py-2 rounded-full border border-[#ffdbcc]"
              >
                <span className="material-symbols-outlined text-base">location_on</span>
                {city}
              </span>
            ))}
            <span className="flex items-center gap-1.5 bg-[#f0eded] text-[#5a4136] text-sm font-semibold px-4 py-2 rounded-full border border-[#dcd9d9]">
              + 3 more cities Q1 2025
            </span>
          </div>
        </div>

        {/* Dark CTA */}
        <div className="bg-[#1b1c1c] text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-2xl">
          <div className="space-y-2 z-10 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold">Ready to eat like you're home?</h3>
            <p className="text-sm text-[#c6c6c7]">Your first Bachelor Food meal is on us. Download the app and claim your free breakfast.</p>
          </div>
          <button
            onClick={() => onNavigate('menu')}
            className="btn-gradient text-white px-8 py-3.5 rounded-full font-bold text-sm z-10 hover:scale-105 transition-transform whitespace-nowrap"
          >
            See Today's Menu
          </button>
          <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-[#ff6a00]/20 blur-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
