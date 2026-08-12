import React from 'react';
import { TabType } from '../types';

interface FooterProps { onNavigate: (tab: TabType) => void; }

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const go = (tab: TabType) => { onNavigate(tab); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  return (
    <footer className="footer-premium mt-0 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="download" className="footer-cta">
          <div className="relative z-10 max-w-2xl">
            <span className="eyebrow-dark">Take Bachelor Food with you</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">Your next favourite home chef is waiting.</h2>
            <p className="mt-4 text-sm sm:text-base text-white/60 leading-relaxed">Explore chefs, discover food stories and make authentic home food part of your routine.</p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="store-button">
                <span className="material-symbols-outlined text-2xl">android</span>
                <span><small>GET IT ON</small><strong>Google Play</strong></span>
              </a>
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="store-button">
                <span className="material-symbols-outlined text-2xl">phone_iphone</span>
                <span><small>DOWNLOAD ON THE</small><strong>App Store</strong></span>
              </a>
            </div>
          </div>
          <div className="footer-orb">
            <span className="material-symbols-outlined filled">soup_kitchen</span>
          </div>
        </div>

        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.8fr_0.8fr] gap-10 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#ff6a00] flex items-center justify-center shadow-[0_8px_30px_rgba(255,106,0,.25)]">
                <span className="material-symbols-outlined filled text-white text-2xl">soup_kitchen</span>
              </div>
              <div>
                <p className="font-black text-lg">Bachelor Food</p>
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#ff9b5b] font-bold">Home food · Real stories</p>
              </div>
            </div>
            <p className="mt-5 text-sm text-white/45 leading-relaxed max-w-sm">A discovery platform connecting people with authentic home chefs, food stories and the feeling of home.</p>
            <div className="mt-6 flex gap-2">
              {['instagram', 'facebook', 'smart_display'].map((icon) => (
                <a key={icon} href="#" aria-label={icon} className="footer-social"><span className="material-symbols-outlined text-lg">{icon}</span></a>
              ))}
            </div>
          </div>

          <FooterColumn title="Discover" items={[
            ['Home', 'home'], ['Explore Food', 'menu'], ['Meet Chefs', 'chefs'], ['How It Works', 'how-it-works'], ['Reviews', 'reviews']
          ]} onNavigate={go} />
          <FooterColumn title="Company" items={[
            ['About Us', 'home'], ['Our Mission', 'home'], ['Careers', 'home'], ['Blog', 'home'], ['Terms & Conditions', 'terms']
          ]} onNavigate={go} />
          <div>
            <h3 className="footer-title">Support</h3>
            <ul className="space-y-3 text-sm text-white/45">
              <li><a href="mailto:info.bachelorfood@gmail.com" className="footer-link">Help Center</a></li>
              <li><a href="mailto:info.bachelorfood@gmail.com" className="footer-link">Contact Support</a></li>
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
              <li><a href="#" className="footer-link">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="py-7 flex flex-col lg:flex-row gap-4 justify-between items-center text-[11px] text-white/35">
          <p>© 2026 Bachelor Food Home Kitchen Pvt. Ltd. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-5">
            {['Chennai', 'Bengaluru', 'Coimbatore', 'Madurai', 'Hyderabad', 'Mumbai', 'Pune', '+14 more cities'].map((city, i) => <span key={city} className={i === 7 ? 'text-[#ff8c33] font-bold' : ''}>{city}</span>)}
          </div>
          <p>Made with <span className="text-[#ff6a00]">♥</span> for people who miss home food.</p>
        </div>
      </div>
    </footer>
  );
};

interface FooterColumnProps {
  title: string;
  items: [string, TabType][];
  onNavigate: (tab: TabType) => void;
}
const FooterColumn: React.FC<FooterColumnProps> = ({ title, items, onNavigate }) => (
  <div>
    <h3 className="footer-title">{title}</h3>
    <ul className="space-y-3 text-sm text-white/45">
      {items.map(([label, tab]) => <li key={label}><button onClick={() => onNavigate(tab)} className="footer-link">{label}</button></li>)}
    </ul>
  </div>
);
