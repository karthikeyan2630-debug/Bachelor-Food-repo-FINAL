import React, { useState, useEffect } from 'react';
import { TabType } from '../types';

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: TabType; label: string }[] = [
    { id: 'menu', label: 'Our Menu' },
    { id: 'plans', label: 'Plans & Pricing' },
    { id: 'chefs', label: 'Meet Chefs' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'reviews', label: 'Reviews' },
  ];

  const handleNavClick = (tab: TabType) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-[0px_4px_20px_rgba(255,106,0,0.08)]'
          : 'bg-white/70 backdrop-blur-sm'
      }`}
    >
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 focus:outline-none group"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FF6A00] to-[#FF8C33] flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined filled text-white text-lg">soup_kitchen</span>
          </div>
          <div className="leading-none">
            <span className="text-lg font-extrabold tracking-tight text-[#1b1c1c] group-hover:text-[#ff6a00] transition-colors block">
              Bachelor Food
            </span>
            <span className="text-[9px] font-semibold text-[#a14000] tracking-widest uppercase">Home Cooked · Delivered</span>
          </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-semibold transition-colors duration-200 py-1 relative ${
                  isActive ? 'text-[#ff6a00]' : 'text-[#5d5f5f] hover:text-[#ff6a00]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#ff6a00] rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#partner"
            className="text-sm font-semibold text-[#a14000] hover:text-[#ff6a00] transition-colors"
          >
            Become a Chef
          </a>
          <button
            onClick={() => handleNavClick('menu')}
            className="btn-gradient text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md"
          >
            Explore Menu
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#a14000] focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#f0eded] bg-white px-6 py-4 shadow-lg space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left py-3 text-base font-semibold border-b border-[#f0eded] last:border-0 ${
                activeTab === item.id ? 'text-[#ff6a00]' : 'text-[#1b1c1c]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <a
              href="#partner"
              className="w-full text-center py-2.5 text-sm font-semibold text-[#a14000] border border-[#ff6a00] rounded-full"
            >
              Become a Chef
            </a>
            <button
              onClick={() => handleNavClick('menu')}
              className="w-full text-center py-2.5 text-sm font-semibold btn-gradient text-white rounded-full shadow-sm"
            >
              Explore Menu
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
