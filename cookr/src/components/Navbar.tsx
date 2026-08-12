import React, { useState, useEffect } from 'react';
import { TabType } from '../types';

interface NavbarProps { activeTab: TabType; setActiveTab: (tab: TabType) => void; }

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems: { id: TabType; label: string }[] = [
    { id: 'menu', label: 'Explore Food' },
    { id: 'chefs', label: 'Meet Chefs' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'plans', label: 'Plans' },
  ];

  const handleNavClick = (tab: TabType) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`sticky top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'nav-scrolled' : 'nav-top'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
        <button onClick={() => handleNavClick('home')} className="flex items-center gap-2.5 group">
          <div className="logo-mark"><span className="material-symbols-outlined filled text-white text-xl">soup_kitchen</span></div>
          <div className="text-left leading-none">
            <span className="text-lg font-black tracking-tight text-[#211813] group-hover:text-[#ff6a00] transition-colors block">Bachelor Food</span>
            <span className="text-[8px] font-bold text-[#a14000] tracking-[0.18em] uppercase">Home food · Real stories</span>
          </div>
        </button>

        <div className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => handleNavClick(item.id)} className={`nav-link ${activeTab === item.id ? 'nav-link-active' : ''}`}>
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#download" className="text-sm font-bold text-[#8f3d10] hover:text-[#ff6a00] transition-colors">Join as Chef</a>
          <a href="#download" className="btn-gradient btn-glow text-white px-5 py-2.5 rounded-full text-sm font-bold inline-flex items-center gap-1.5">
            Download App <span className="material-symbols-outlined text-base">arrow_forward</span>
          </a>
        </div>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden w-10 h-10 rounded-full bg-white border border-[#eadfd7] flex items-center justify-center text-[#8f3d10]" aria-label="Toggle menu">
          <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu lg:hidden">
          {navItems.map((item) => <button key={item.id} onClick={() => handleNavClick(item.id)} className={activeTab === item.id ? 'mobile-active' : ''}>{item.label}</button>)}
          <a href="#download" onClick={() => setMobileMenuOpen(false)} className="btn-gradient text-white text-center py-3 rounded-full font-bold text-sm mt-2">Download the App</a>
        </div>
      )}
    </nav>
  );
};
