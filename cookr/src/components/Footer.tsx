import React from 'react';
import { TabType } from '../types';

interface FooterProps { onNavigate: (tab: TabType) => void; }

const links: { label: string; tab: TabType }[] = [
  { label: 'Discover meals', tab: 'menu' }, { label: 'Plans & pricing', tab: 'plans' },
  { label: 'Meet home chefs', tab: 'chefs' }, { label: 'How it works', tab: 'how-it-works' },
  { label: 'Customer stories', tab: 'reviews' },
];

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const go = (tab: TabType) => { onNavigate(tab); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  return <footer className="bg-[#171210] text-white mt-16 relative overflow-hidden">
    <div className="absolute -top-48 right-0 w-[34rem] h-[34rem] rounded-full bg-[#ff6a00]/15 blur-[120px] pointer-events-none" />
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 md:py-14 relative">
      <div id="download" className="rounded-3xl border border-white/15 bg-white/[.07] backdrop-blur-xl p-6 md:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="max-w-xl"><p className="text-[#ff8c33] text-xs font-bold uppercase tracking-[.2em] mb-2">Bachelor Food app</p><h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">A more thoughtful way to plan your food week.</h2><p className="text-sm text-white/60 mt-2 leading-relaxed">Save your chef, manage your meal routine, and get a little closer to home—one app at a time.</p></div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="btn-gradient px-5 py-3 rounded-2xl flex items-center gap-2 text-sm font-bold"><span className="material-symbols-outlined">android</span>Get it on Google Play</a>
          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-2xl flex items-center gap-2 text-sm font-bold bg-white/10 border border-white/15 hover:bg-white/20 transition-colors"><span className="material-symbols-outlined">phone_iphone</span>App Store</a>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] gap-10 py-12 border-b border-white/10">
        <div className="space-y-4"><div className="flex items-center gap-2"><div className="w-9 h-9 rounded-xl bg-[#ff6a00] grid place-items-center"><span className="material-symbols-outlined filled">soup_kitchen</span></div><div><p className="font-extrabold">Bachelor Food</p><p className="text-[9px] text-[#ff8c33] font-bold tracking-widest uppercase">Made for real routines</p></div></div><p className="text-sm text-white/55 max-w-xs leading-relaxed">Helping busy people find the comfort, consistency and care of local home cooking.</p><div className="flex gap-2">{['photo_camera','alternate_email','play_circle'].map(icon => <a key={icon} href="#" aria-label={icon} className="w-9 h-9 rounded-full border border-white/15 grid place-items-center text-white/60 hover:text-[#ff8c33] hover:border-[#ff8c33]/50 transition-colors"><span className="material-symbols-outlined text-lg">{icon}</span></a>)}</div></div>
        <div><p className="text-xs font-bold uppercase tracking-widest text-[#ff8c33] mb-4">Explore</p><div className="grid gap-3">{links.map(link => <button key={link.label} onClick={() => go(link.tab)} className="text-left text-sm text-white/60 hover:text-white transition-colors">{link.label}</button>)}</div></div>
        <div><p className="text-xs font-bold uppercase tracking-widest text-[#ff8c33] mb-4">Need a hand?</p><div className="space-y-3 text-sm text-white/60"><a href="mailto:info.bachelorfood@gmail.com" className="block hover:text-white transition-colors">info.bachelorfood@gmail.com</a><a href="tel:8000007100" className="block hover:text-white transition-colors">+91 80000 07100</a><button onClick={() => go('terms')} className="block hover:text-white transition-colors">Terms &amp; privacy</button></div></div>
      </div>
      <div className="pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/35"><p>© 2026 Bachelor Food. Made with care in India.</p><p>Fresh thinking for everyday eating.</p></div>
    </div>
  </footer>;
};
