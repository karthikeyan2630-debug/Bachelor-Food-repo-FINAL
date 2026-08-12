import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const first = window.setTimeout(() => setPhase(1), 450);
    const second = window.setTimeout(() => setPhase(2), 1050);
    const done = window.setTimeout(onComplete, 1900);
    return () => {
      window.clearTimeout(first);
      window.clearTimeout(second);
      window.clearTimeout(done);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-[#160d07] text-white overflow-hidden flex items-center justify-center">
      <div className="loader-orbit loader-orbit-one" />
      <div className="loader-orbit loader-orbit-two" />
      <div className="absolute w-[32rem] h-[32rem] rounded-full bg-[#ff6a00]/10 blur-3xl" />
      <div className="relative text-center px-6">
        <div className={`loader-mark mx-auto ${phase >= 1 ? 'loader-mark-active' : ''}`}>
          <span className="material-symbols-outlined filled text-4xl">soup_kitchen</span>
        </div>
        <div className="mt-7 overflow-hidden">
          <p className={`text-[11px] uppercase tracking-[0.32em] text-[#ff9b5b] transition-all duration-700 ${phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            Bachelor Food
          </p>
          <h1 className={`mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight transition-all duration-700 ${phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Good food feels like home.
          </h1>
          <p className={`mt-2 text-xs text-white/50 transition-all duration-700 ${phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            Discover home chefs. Discover your next favourite.
          </p>
        </div>
        <div className={`mt-7 flex items-center justify-center gap-2 transition-all duration-500 ${phase >= 2 ? 'opacity-100' : 'opacity-0'}`}>
          <span className="loader-dot" />
          <span className="loader-dot delay-1" />
          <span className="loader-dot delay-2" />
        </div>
      </div>
    </div>
  );
};
