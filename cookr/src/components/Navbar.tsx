import React, { useEffect, useState } from 'react';
import { TabType } from '../types';
import { BachelorFoodLogo } from './Logo';

interface NavbarProps { activeTab: TabType; setActiveTab: (tab: TabType) => void; }

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
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
        <button onClick={() => handleNavClick('home')} className="flex items-center group" aria-label="Bachelor Food home">
          <BachelorFoodLogo compact />
        </button>

        <div className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => handleNavClick(item.id)} className={`nav-link ${activeTab === item.id ? 'nav-link-active' : ''}`}>
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="#download" className="text-sm font-bold text-[#8f3d10] hover:text-[#ff6a00] transition-all duration-300 hover:-translate-y-0.5">Join as Chef</a>
          <a href="#download" className="btn-gradient btn-glow group text-white px-5 py-2.5 rounded-full text-sm font-bold inline-flex items-center gap-1.5">
            Download App <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
          </a>
        </div>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden w-10 h-10 rounded-full bg-white border border-[#eadfd7] flex items-center justify-center text-[#8f3d10] transition-all duration-300 hover:border-[#ffb47f] hover:shadow-md" aria-label="Toggle menu">
          <span className="material-symbols-outlined transition-transform duration-300" style={{ transform: mobileMenuOpen ? 'rotate(90deg)' : 'none' }}>{mobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      <div className={`mobile-menu lg:hidden ${mobileMenuOpen ? 'mobile-menu-open' : 'mobile-menu-closed'}`}>
        {navItems.map((item) => <button key={item.id} onClick={() => handleNavClick(item.id)} className={activeTab === item.id ? 'mobile-active' : ''}>{item.label}</button>)}
        <a href="#download" onClick={() => setMobileMenuOpen(false)} className="btn-gradient text-white text-center py-3 rounded-full font-bold text-sm mt-2">Download App</a>
      </div>
    </nav>
  );
};
