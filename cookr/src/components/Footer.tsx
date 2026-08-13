import React from 'react';
import { TabType } from '../types';

interface FooterProps { onNavigate: (tab: TabType) => void; }

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const go = (tab: TabType) => { onNavigate(tab); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  return (
    <footer id="download" className="footer-professional">
      <div className="footer-professional-top">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 footer-professional-cta">
          <div>
            <span className="footer-badge"><span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]" /> Bachelor Food app</span>
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight max-w-2xl">Good food feels better when you know the story behind it.</h2>
            <p className="mt-4 text-sm sm:text-base text-white/55 leading-relaxed max-w-xl">Discover home chefs, signature dishes and food stories — then take the full experience with you in the Bachelor Food app.</p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="store-button"><span className="material-symbols-outlined text-2xl">android</span><span><small>GET IT ON</small><strong>Google Play</strong></span></a>
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="store-button"><span className="material-symbols-outlined text-2xl">phone_iphone</span><span><small>DOWNLOAD ON THE</small><strong>App Store</strong></span></a>
            </div>
          </div>

          <div className="footer-app-panel">
            <div className="flex items-center justify-between"><span className="text-[9px] uppercase tracking-[.18em] text-white/45 font-black">In the app</span><span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,.7)]" /></div>
            <div className="mt-5 rounded-2xl bg-[#20140d] border border-white/8 p-5">
              <div className="w-11 h-11 rounded-2xl bg-[#ff6a00] flex items-center justify-center shadow-[0_12px_30px_rgba(255,106,0,.25)]"><span className="material-symbols-outlined filled">restaurant</span></div>
              <p className="mt-5 text-xl font-black">Find your kind of home food.</p>
              <p className="mt-2 text-xs text-white/45 leading-relaxed">Explore chefs and stories around you.</p>
              <div className="mt-5 h-1.5 rounded-full bg-white/8 overflow-hidden"><div className="h-full w-2/3 rounded-full bg-[#ff6a00]" /></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_.75fr_.75fr_.75fr] gap-10 pb-12 border-b border-white/9">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#ff6a00] flex items-center justify-center"><span className="material-symbols-outlined filled text-2xl">soup_kitchen</span></div>
              <div><p className="font-black text-lg">Bachelor Food</p><p className="text-[9px] uppercase tracking-[.2em] text-[#ff9b5b] font-bold">Home food · Real stories</p></div>
            </div>
            <p className="mt-5 text-sm text-white/45 leading-relaxed max-w-sm">A discovery platform built around real home chefs, authentic food and the people who make every meal feel personal.</p>
            <div className="mt-6 grid grid-cols-2 gap-2 max-w-sm">
              <div className="footer-contact-card"><span className="text-[9px] text-white/35 uppercase tracking-wider">Email</span><a href="mailto:info.bachelorfood@gmail.com" className="block mt-1 text-xs text-white/75 hover:text-[#ff9b5b]">info.bachelorfood@gmail.com</a></div>
              <div className="footer-contact-card"><span className="text-[9px] text-white/35 uppercase tracking-wider">Support</span><a href="mailto:support@bachelorfood.in" className="block mt-1 text-xs text-white/75 hover:text-[#ff9b5b]">support@bachelorfood.in</a></div>
            </div>
          </div>

          <FooterColumn title="Discover" items={[["Home",'home'],['Explore Food','menu'],['Meet Chefs','chefs'],['How It Works','how-it-works'],['Reviews','reviews']]} onNavigate={go} />
          <FooterColumn title="Company" items={[["About Us",'home'],['Our Mission','home'],['Careers','home'],['Blog','home'],['Terms & Conditions','terms']]} onNavigate={go} />
          <FooterColumn title="Support" items={[["Help Center",'home'],['Contact','home'],['Privacy Policy','home'],['Refund Policy','home'],['Download App','home']]} onNavigate={go} />
        </div>

        <div className="pt-7 flex flex-col lg:flex-row gap-5 justify-between items-start lg:items-center">
          <div><p className="text-[11px] text-white/35">© 2026 Bachelor Food Home Kitchen Pvt. Ltd. All rights reserved.</p><p className="text-[10px] text-white/22 mt-1">Made for people who miss the taste of home.</p></div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-[10px] text-white/35">{['Chennai','Bengaluru','Coimbatore','Madurai','Hyderabad','Mumbai','Pune'].map(city => <span key={city}>{city}</span>)}<span className="text-[#ff8c33] font-bold">+14 more cities</span></div>
          <div className="flex gap-2">
            {['instagram','facebook','smart_display'].map(icon => <a key={icon} href="#" aria-label={icon} className="footer-social"><span className="material-symbols-outlined text-lg">{icon}</span></a>)}
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterColumnProps { title: string; items: [string, TabType][]; onNavigate: (tab: TabType) => void; }
const FooterColumn: React.FC<FooterColumnProps> = ({ title, items, onNavigate }) => (
  <div>
    <h3 className="footer-title">{title}</h3>
    <ul className="space-y-3">{items.map(([label, tab]) => <li key={label}><button onClick={() => onNavigate(tab)} className="footer-professional-link">{label}</button></li>)}</ul>
  </div>
);
