import React, { useEffect, useState } from 'react';
import { TabType } from './types';
import { MENU_ITEMS, CHEFS } from './data/mockData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MenuSection } from './components/MenuSection';
import { ChefsSection } from './components/ChefsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ReviewsSection } from './components/ReviewsSection';
import { PlansSection } from './components/PlansSection';
import { Footer } from './components/Footer';
import { TermsGate, hasAcceptedCurrentTerms } from './components/TermsGate';
import { TermsPage } from './components/TermsPage';

export default function App() {
  const [termsAccepted, setTermsAccepted] = useState<boolean>(() => hasAcceptedCurrentTerms());
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1650);
    return () => window.clearTimeout(timer);
  }, []);

  const handleNavigate = (tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTermsAccepted = () => {
    setTermsAccepted(true);
    window.scrollTo({ top: 0 });
  };

  if (isLoading) {
    return <div className="min-h-screen bg-[#1b1c1c] text-white grid place-items-center overflow-hidden relative"><div className="absolute w-[32rem] h-[32rem] rounded-full bg-[#ff6a00]/20 blur-[120px]" /><div className="relative text-center space-y-6"><div className="relative mx-auto w-24 h-24 grid place-items-center"><div className="loader-ring absolute inset-0 rounded-full border-2 border-white/15 border-t-[#ff6a00]" /><div className="w-15 h-15 rounded-2xl bg-[#ff6a00] grid place-items-center shadow-[0_0_35px_rgba(255,106,0,.55)]"><span className="material-symbols-outlined filled text-3xl">soup_kitchen</span></div></div><div><p className="text-xl font-extrabold tracking-tight">Bachelor Food</p><p className="text-sm text-white/55 mt-1">A better morning is on the table.</p></div><div className="w-44 h-1 rounded-full bg-white/10 overflow-hidden mx-auto"><div className="loader-progress h-full w-full bg-[#ff6a00] rounded-full" /></div></div></div>;
  }

  if (!termsAccepted) {
    return <TermsGate onAccepted={handleTermsAccepted} />;
  }

  if (activeTab === 'terms') {
    return (
      <TermsPage
        showBackButton={true}
        onBack={() => handleNavigate('home')}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8F3] text-[#1b1c1c] selection:bg-[#ff6a00] selection:text-white pb-20 md:pb-0">

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <HeroSection onNavigate={handleNavigate} />
            <MenuSection menuItems={MENU_ITEMS} />
            <PlansSection />
            <ChefsSection chefs={CHEFS} />
            <HowItWorksSection onNavigate={handleNavigate} />
            <ReviewsSection />
          </>
        )}
        {activeTab === 'menu'        && <MenuSection menuItems={MENU_ITEMS} />}
        {activeTab === 'chefs'       && <ChefsSection chefs={CHEFS} />}
        {activeTab === 'plans'       && <PlansSection />}
        {activeTab === 'how-it-works'&& <HowItWorksSection onNavigate={handleNavigate} />}
        {activeTab === 'reviews'     && <ReviewsSection />}
      </main>

      <Footer onNavigate={handleNavigate} />

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-4 left-4 right-4 glass-nav rounded-3xl soft-shadow z-40 border border-white/60">
        <div className="flex justify-around items-center h-16 px-2">
          {([
            { id: 'home',    icon: 'home',           label: 'Home'  },
            { id: 'menu',    icon: 'restaurant_menu', label: 'Menu'  },
            { id: 'plans',   icon: 'card_membership', label: 'Plans' },
            { id: 'reviews', icon: 'reviews',         label: 'Reviews'},
          ] as { id: TabType; icon: string; label: string }[]).map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`flex flex-col items-center justify-center w-full h-full text-xs font-semibold transition-colors ${
                activeTab === item.id ? 'text-[#ff6a00]' : 'text-[#5d5f5f]'
              }`}
            >
              <span className={`material-symbols-outlined text-xl mb-0.5 ${activeTab === item.id ? 'filled' : ''}`}>
                {item.icon}
              </span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
