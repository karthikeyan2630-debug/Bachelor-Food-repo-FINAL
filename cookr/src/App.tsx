import React, { useCallback, useEffect, useState } from 'react';
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

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal-on-scroll'));
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Keep observing instead of unobserving so the animation can replay
        // every time the element leaves and re-enters the viewport.
        entry.target.classList.toggle('is-visible', entry.isIntersecting);
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -10% 0px' });

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeTab, loading, termsAccepted]);

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

      <main key={activeTab} className="page-transition">
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

    </div>
  );
}
