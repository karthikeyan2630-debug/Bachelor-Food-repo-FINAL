import React from 'react';
import { TabType } from '../types';

interface FooterProps {
  onNavigate: (tab: TabType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#1b1c1c] text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-white/10">

          {/* Brand */}
          <div className="col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FF6A00] to-[#FF8C33] flex items-center justify-center">
                <span className="material-symbols-outlined filled text-white text-lg">soup_kitchen</span>
              </div>
              <div className="leading-none">
                <span className="text-base font-extrabold tracking-tight block">Bachelor Food</span>
                <span className="text-[9px] text-[#ff8c33] font-semibold tracking-widest uppercase">Home Cooked · Delivered</span>
              </div>
            </div>
            <p className="text-xs text-white/50 leading-relaxed">
              Connecting home chefs with people who miss home-cooked food. Fresh, real, delivered daily across South India.
            </p>
            <p className="text-xs text-white/30">© 2025 Bachelor Food. All rights reserved.</p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-xs font-bold text-[#ff8c33] uppercase tracking-wider mb-4">Explore</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-white/60">
              {[
                { label: 'Browse Menu', tab: 'menu' as TabType },
                { label: 'Plans & Pricing', tab: 'plans' as TabType },
                { label: 'Meet Chefs', tab: 'chefs' as TabType },
                { label: 'How It Works', tab: 'how-it-works' as TabType },
                { label: 'Customer Reviews', tab: 'reviews' as TabType },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => { onNavigate(item.tab); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-[#ff8c33] transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold text-[#ff8c33] uppercase tracking-wider mb-4">Company</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-white/60">
              {['About Us', 'Careers', 'Press Kit', 'Become a Chef', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#ff8c33] transition-colors">{item}</a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => { onNavigate('terms'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#ff8c33] transition-colors text-left"
                >
                  Terms &amp; Conditions
                </button>
              </li>
            </ul>
          </div>

          {/* App download */}
          <div id="download">
            <h4 className="text-xs font-bold text-[#ff8c33] uppercase tracking-wider mb-4">Get the App</h4>
            <p className="text-xs text-white/60 mb-4 leading-relaxed">
              Subscribe, manage your meals, and track your chef — all from the Bachelor Food app.
            </p>
            <div className="flex flex-col gap-2">
              {/* App Store — replace APP_STORE_URL with your live link when available */}
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2.5 rounded-xl border border-white/10 cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl">phone_iphone</span>
                <div>
                  <p className="text-[9px] text-white/50 leading-none">Download on the</p>
                  <p className="text-xs font-bold leading-tight">App Store</p>
                </div>
              </a>
              {/* Google Play — replace PLAY_STORE_URL with your live link when available */}
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2.5 rounded-xl border border-white/10 cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl">android</span>
                <div>
                  <p className="text-[9px] text-white/50 leading-none">Get it on</p>
                  <p className="text-xs font-bold leading-tight">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-white/30">
          <p>Made with ❤️ for people who miss home food.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white/60 transition-colors">Instagram</a>
            <a href="#" className="hover:text-white/60 transition-colors">Twitter</a>
            <a href="#" className="hover:text-white/60 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
