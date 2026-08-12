import React, { useCallback, useState } from 'react';
import { TabType } from './types';
import { MENU_ITEMS, CHEFS } from './data/mockData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MenuSection } from './components/MenuSection';
import { ChefsSection } from './components/ChefsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ReviewsSection } from './components/ReviewsSection';
import { PlansSection } from './components/PlansSection';
import { FeatureSection } from './components/FeatureSection';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { TermsGate, hasAcceptedCurrentTerms } from './components/TermsGate';
import { TermsPage } from './components/TermsPage';

export default function App() {
  const [termsAccepted, setTermsAccepted] = useState<boolean>(() => hasAcceptedCurrentTerms());
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [loading, setLoading] = useState(() => hasAcceptedCurrentTerms());

  const finishLoading = useCallback(() => setLoading(false), []);

  const handleNavigate = (tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTermsAccepted = () => {
    setTermsAccepted(true);
    setLoading(true);
    window.scrollTo({ top: 0 });
  };

  if (!termsAccepted) return <TermsGate onAccepted={handleTermsAccepted} />;
  if (loading) return <LoadingScreen onComplete={finishLoading} />;
  if (activeTab === 'terms') return <TermsPage showBackButton={true} onBack={() => handleNavigate('home')} />;

  return (
    <div className="min-h-screen bg-[#fff8f3] text-[#1b1c1c] selection:bg-[#ff6a00] selection:text-white">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main>
        {activeTab === 'home' && (
          <>
            <HeroSection onNavigate={handleNavigate} />
            <FeatureSection onNavigate={handleNavigate} />
            <MenuSection menuItems={MENU_ITEMS} />
            <ChefsSection chefs={CHEFS} />
            <HowItWorksSection onNavigate={handleNavigate} />
            <ReviewsSection />
            <PlansSection />
          </>
        )}
        {activeTab === 'menu' && <MenuSection menuItems={MENU_ITEMS} />}
        {activeTab === 'chefs' && <ChefsSection chefs={CHEFS} />}
        {activeTab === 'plans' && <PlansSection />}
        {activeTab === 'how-it-works' && <HowItWorksSection onNavigate={handleNavigate} />}
        {activeTab === 'reviews' && <ReviewsSection />}
      </main>

      <Footer onNavigate={handleNavigate} />

      <nav className="md:hidden fixed bottom-4 left-4 right-4 mobile-bottom-nav z-40">
        {([
          { id: 'home', icon: 'home', label: 'Home' },
          { id: 'menu', icon: 'explore', label: 'Explore' },
          { id: 'chefs', icon: 'groups', label: 'Chefs' },
          { id: 'reviews', icon: 'reviews', label: 'Reviews' },
        ] as { id: TabType; icon: string; label: string }[]).map((item) => (
          <button key={item.id} onClick={() => handleNavigate(item.id)} className={activeTab === item.id ? 'mobile-bottom-active' : ''}>
            <span className={`material-symbols-outlined text-xl ${activeTab === item.id ? 'filled' : ''}`}>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
