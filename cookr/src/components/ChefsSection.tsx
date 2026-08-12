import React, { useState } from 'react';
import { Chef } from '../types';

interface ChefsSectionProps { chefs: Chef[]; }

export const ChefsSection: React.FC<ChefsSectionProps> = ({ chefs }) => {
  const [selectedChef, setSelectedChef] = useState<Chef | null>(null);

  return (
    <section className="py-20 md:py-28 bg-[#f4eee9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl reveal-on-scroll">
          <span className="eyebrow">People behind the plate</span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">Meet the home chefs.</h2>
          <p className="mt-4 text-sm sm:text-base text-[#6a5043] leading-relaxed">
            Every profile is a little window into a real kitchen. Explore their speciality, story and the food they love making.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {chefs.map((chef, index) => (
            <button
              key={chef.id}
              onClick={() => setSelectedChef(chef)}
              className="chef-card reveal-on-scroll text-left"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="relative h-72 overflow-hidden">
                <img src={chef.avatar} alt={chef.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#160d07] via-[#160d07]/10 to-transparent" />
                <div className="absolute top-4 left-4 glass-dark px-3 py-1.5 rounded-full text-[10px] text-white font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined filled text-sm text-[#ffb47f]">verified</span> Verified chef
                </div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-extrabold">{chef.name}</h3>
                    <span className="text-xs font-bold bg-white/15 backdrop-blur-md px-2 py-1 rounded-lg">★ {chef.rating}</span>
                  </div>
                  <p className="text-[11px] text-white/70 mt-1">{chef.speciality}</p>
                  <p className="text-[10px] text-[#ffb47f] mt-2 flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">location_on</span>{chef.city}
                  </p>
                </div>
              </div>
              <div className="p-5 bg-white/60 backdrop-blur-xl border-t border-white/60">
                <div className="flex flex-wrap gap-1.5">
                  {chef.dishes.slice(0, 2).map((dish) => <span key={dish} className="text-[10px] px-2 py-1 rounded-full bg-white text-[#805b48] border border-[#eadfd7]">{dish}</span>)}
                </div>
                <span className="mt-4 text-xs font-bold text-[#ff6a00] inline-flex items-center gap-1">
                  View chef story <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] bg-[#1b1008] text-white p-8 md:p-10 relative overflow-hidden reveal-on-scroll">
          <div className="absolute -right-20 -bottom-32 w-80 h-80 bg-[#ff6a00]/20 blur-3xl rounded-full" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-7">
            <div>
              <span className="eyebrow-dark">Have a signature recipe?</span>
              <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold">Turn your kitchen into a story.</h3>
              <p className="mt-2 text-sm text-white/55 max-w-xl">Join the Bachelor Food chef community and let people discover what makes your cooking special.</p>
            </div>
            <a href="#download" className="btn-gradient btn-glow shrink-0 px-6 py-3 rounded-full text-sm font-bold">Join as a Chef</a>
          </div>
        </div>
      </div>

      {selectedChef && (
        <div className="fixed inset-0 z-[80] bg-[#120a06]/70 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setSelectedChef(null)}>
          <div className="chef-modal" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-52 overflow-hidden">
              <img src={selectedChef.coverImage || selectedChef.avatar} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#160d07] to-transparent" />
              <button onClick={() => setSelectedChef(null)} className="absolute top-4 right-4 w-9 h-9 rounded-full glass-dark text-white flex items-center justify-center">
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
              <div className="absolute bottom-4 left-5 text-white">
                <p className="text-[10px] uppercase tracking-widest text-[#ffb47f] font-bold">Home chef</p>
                <h3 className="text-2xl font-extrabold">{selectedChef.name}</h3>
              </div>
            </div>
            <div className="p-6 bg-white/90 backdrop-blur-xl">
              <div className="flex flex-wrap gap-2">
                <span className="glass-chip">★ {selectedChef.rating} rating</span>
                <span className="glass-chip"><span className="material-symbols-outlined text-sm">location_on</span>{selectedChef.city}</span>
                <span className="glass-chip">Since {selectedChef.since}</span>
              </div>
              <p className="mt-5 text-sm text-[#5f483d] leading-relaxed">{selectedChef.bio}</p>
              <p className="mt-5 text-xs font-extrabold uppercase tracking-widest text-[#a14000]">Signature dishes</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {selectedChef.dishes.map((dish) => <span key={dish} className="px-3 py-1.5 rounded-full bg-[#fff0e6] text-[#9d430f] text-xs font-semibold">{dish}</span>)}
              </div>
              <a href="#download" onClick={() => setSelectedChef(null)} className="mt-6 w-full btn-gradient text-white py-3.5 rounded-full text-sm font-bold inline-flex justify-center items-center gap-2">
                Discover more in the app <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
