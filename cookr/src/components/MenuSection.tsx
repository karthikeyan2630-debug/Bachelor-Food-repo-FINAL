import React, { useState, useMemo } from 'react';
import { MenuItem, VegType } from '../types';

// ── Inline Gulab Jamun illustration — no external URL needed ─────────────────
const GulabJamunSVG: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" className={className} style={{ display: 'block' }}>
    <defs>
      <radialGradient id="gjBg" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stopColor="#7C2D12"/>
        <stop offset="100%" stopColor="#431407"/>
      </radialGradient>
      <radialGradient id="gjJ1" cx="38%" cy="33%" r="55%">
        <stop offset="0%" stopColor="#C2410C"/>
        <stop offset="100%" stopColor="#7C2D12"/>
      </radialGradient>
      <radialGradient id="gjJ2" cx="38%" cy="33%" r="55%">
        <stop offset="0%" stopColor="#B45309"/>
        <stop offset="100%" stopColor="#78350F"/>
      </radialGradient>
      <filter id="gjSh">
        <feDropShadow dx="0" dy="5" stdDeviation="9" floodColor="#431407" floodOpacity="0.55"/>
      </filter>
    </defs>
    <rect width="480" height="300" fill="url(#gjBg)"/>
    {/* Decorative dots */}
    {[30,100,170,240,310,380,450].map(x => (
      <circle key={x} cx={x} cy="22" r="2.5" fill="#C2410C" opacity=".28"/>
    ))}
    {/* Plate */}
    <ellipse cx="240" cy="207" rx="172" ry="25" fill="#92400E" opacity=".32"/>
    <ellipse cx="240" cy="197" rx="166" ry="21" fill="#FEF3C7"/>
    <ellipse cx="240" cy="197" rx="150" ry="16" fill="#FFFBEB"/>
    <ellipse cx="240" cy="202" rx="108" ry="10" fill="#D97706" opacity=".42"/>
    {/* Back ball */}
    <circle cx="289" cy="174" r="39" fill="url(#gjJ2)" filter="url(#gjSh)"/>
    <circle cx="275" cy="161" r="13" fill="#C2410C" opacity=".32"/>
    <circle cx="273" cy="159" r="5" fill="#FED7AA" opacity=".2"/>
    {/* Left ball */}
    <circle cx="193" cy="171" r="41" fill="url(#gjJ1)" filter="url(#gjSh)"/>
    <circle cx="179" cy="157" r="14" fill="#EA580C" opacity=".3"/>
    <circle cx="177" cy="155" r="6" fill="#FED7AA" opacity=".25"/>
    {/* Front centre ball */}
    <circle cx="242" cy="158" r="46" fill="url(#gjJ1)" filter="url(#gjSh)"/>
    <circle cx="226" cy="141" r="16" fill="#EA580C" opacity=".36"/>
    <circle cx="224" cy="139" r="7" fill="#FED7AA" opacity=".3"/>
    {/* Syrup drizzle */}
    <path d="M242 110 Q257 125 250 146 Q264 139 275 154" stroke="#D97706" strokeWidth="3.5" fill="none" opacity=".6" strokeLinecap="round"/>
    <path d="M219 116 Q208 132 214 150" stroke="#B45309" strokeWidth="2.5" fill="none" opacity=".5" strokeLinecap="round"/>
    {/* Pistachios */}
    <ellipse cx="230" cy="110" rx="9" ry="5.5" fill="#65A30D" transform="rotate(-20 230 110)"/>
    <ellipse cx="258" cy="107" rx="8" ry="5" fill="#4D7C0F" transform="rotate(15 258 107)"/>
    <ellipse cx="272" cy="116" rx="7" ry="4.5" fill="#65A30D" transform="rotate(-10 272 116)"/>
    <ellipse cx="214" cy="113" rx="7" ry="4.5" fill="#4D7C0F" transform="rotate(25 214 113)"/>
    {/* Steam */}
    <path d="M231 90 Q225 75 232 62 Q228 50 235 40" stroke="#FEF3C7" strokeWidth="2.5" fill="none" opacity=".18" strokeLinecap="round"/>
    <path d="M253 86 Q259 71 253 58 Q258 46 252 34" stroke="#FEF3C7" strokeWidth="2" fill="none" opacity=".14" strokeLinecap="round"/>
    {/* Rose petals */}
    <ellipse cx="184" cy="187" rx="7.5" ry="4.5" fill="#FB7185" opacity=".58" transform="rotate(-30 184 187)"/>
    <ellipse cx="302" cy="184" rx="6.5" ry="4" fill="#FB7185" opacity=".48" transform="rotate(20 302 184)"/>
    <ellipse cx="242" cy="195" rx="5.5" ry="3.5" fill="#FDA4AF" opacity=".52"/>
    {/* Label ribbon */}
    <rect x="138" y="244" width="204" height="28" rx="14" fill="#7C2D12" opacity=".85"/>
    <text x="240" y="263" textAnchor="middle" fill="#FED7AA" fontSize="11.5" fontFamily="Georgia,serif" fontStyle="italic">✦ Served warm · 2 pieces ✦</text>
  </svg>
);

interface MenuSectionProps {
  menuItems: MenuItem[];
}

export const MenuSection: React.FC<MenuSectionProps> = ({ menuItems }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVegFilter, setSelectedVegFilter] = useState<'all' | VegType>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'South Indian', 'North Indian', 'Kerala Specials', 'Healthy Bowls', 'Snacks', 'Desserts'];

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        (item.chefName?.toLowerCase().includes(q) ?? false);
      const matchesVeg = selectedVegFilter === 'all' || item.vegType === selectedVegFilter;
      const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
      return matchesSearch && matchesVeg && matchesCat;
    });
  }, [menuItems, searchQuery, selectedVegFilter, selectedCategory]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedVegFilter('all');
    setSelectedCategory('All');
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-8">
      {/* Header */}
      <div className="space-y-1">
        <span className="bg-[#ffdbcc] text-[#351000] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider inline-block">
          Explore the food
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b1c1c] tracking-tight mt-2">
          Discover What Chefs Make
        </h2>
        <p className="text-base text-[#5a4136]">
          Preview signature dishes from our home chefs. Use the app to discover the chef, story and experience behind each dish.
        </p>
      </div>

      {/* Controls */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl soft-shadow border border-[#f0eded]">
          {/* Search */}
          <div className="relative w-full md:w-1/2">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#8e7164] text-xl select-none">search</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by dish, chef, or ingredient…"
              className="w-full pl-10 pr-9 py-2.5 bg-[#FFF8F3] border border-[#dcd9d9] rounded-xl focus:outline-none focus:border-[#ff6a00] focus:ring-2 focus:ring-[#ff6a00]/20 transition-all text-sm placeholder:text-[#8e7164]"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8e7164] hover:text-[#1b1c1c]">
                <span className="material-symbols-outlined text-lg">cancel</span>
              </button>
            )}
          </div>

          {/* Veg toggle */}
          <div className="flex items-center gap-1.5 bg-[#FFF8F3] p-1.5 rounded-xl border border-[#dcd9d9] w-full md:w-auto justify-center">
            {(['all', 'veg', 'non-veg'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedVegFilter(type)}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  selectedVegFilter === type
                    ? type === 'veg'
                      ? 'bg-emerald-100 text-emerald-900 border border-emerald-200 shadow-sm'
                      : type === 'non-veg'
                      ? 'bg-rose-100 text-rose-900 border border-rose-200 shadow-sm'
                      : 'bg-white text-[#1b1c1c] border border-[#ffdbcc] shadow-sm'
                    : 'text-[#5a4136] hover:text-[#1b1c1c]'
                }`}
              >
                {type !== 'all' && (
                  <span className={`w-2 h-2 rounded-full block shrink-0 ${type === 'veg' ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                )}
                {type === 'all' ? 'All' : type === 'veg' ? 'Veg' : 'Non-Veg'}
              </button>
            ))}
          </div>
        </div>

        {/* Category chips */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#ff6a00] text-white shadow-sm'
                  : 'bg-white border border-[#ffdbcc] text-[#1b1c1c] hover:bg-[#fff0e6]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      {(searchQuery || selectedVegFilter !== 'all' || selectedCategory !== 'All') && (
        <div className="flex items-center justify-between text-sm text-[#5a4136]">
          <span><strong className="text-[#1b1c1c]">{filteredItems.length}</strong> dish{filteredItems.length !== 1 ? 'es' : ''} found</span>
          <button onClick={resetFilters} className="text-[#ff6a00] font-semibold hover:underline text-xs">Clear all</button>
        </div>
      )}

      {/* Grid or empty state */}
      {filteredItems.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center soft-shadow space-y-3 border border-[#f0eded]">
          <span className="material-symbols-outlined text-5xl text-[#8e7164]">search_off</span>
          <h3 className="text-xl font-bold text-[#1b1c1c]">No dishes found</h3>
          <p className="text-sm text-[#5a4136]">Try a different search or filter.</p>
          <button onClick={resetFilters} className="btn-gradient text-white px-6 py-2 rounded-full text-xs font-semibold mt-2">
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-3xl soft-shadow overflow-hidden group flex flex-col border border-[#f0eded] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden bg-[#fff0e6]">
                {item.id === 'm9' ? (
                  <GulabJamunSVG className="w-full h-full transition-transform duration-500 group-hover:scale-105" />
                ) : (
                <img
                  src={item.image}
                  alt={item.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80';
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                )}
                {/* Discovery chip */}
                <div className="discovery-chip absolute top-3 right-3 px-3.5 py-1.5 rounded-full text-[10px] font-extrabold tracking-wide shadow-lg">
                  Explore in app
                </div>
                {/* Veg indicator */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-sm">
                  <span
                    className={`w-3 h-3 rounded-full border-2 border-white block ${item.vegType === 'veg' ? 'bg-emerald-500' : 'bg-rose-500'}`}
                    title={item.vegType === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
                  />
                </div>
                {item.isBestSeller && (
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-[#ff6a00] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">Chef favourite</span>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-1 gap-2">
                  <h3 className="text-base font-bold text-[#1b1c1c] line-clamp-1">{item.name}</h3>
                  <div className="flex items-center gap-0.5 text-amber-500 shrink-0">
                    <span className="material-symbols-outlined filled text-sm">star</span>
                    <span className="text-xs font-bold text-[#1b1c1c]">{item.rating}</span>
                    <span className="text-[10px] text-[#8e7164] ml-0.5">({item.reviewsCount})</span>
                  </div>
                </div>

                {item.chefName && (
                  <p className="text-[11px] text-[#ff6a00] font-semibold mb-1.5 flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">person</span>
                    by {item.chefName}
                  </p>
                )}

                <p className="text-xs text-[#5a4136] line-clamp-2 leading-relaxed mb-4">{item.description}</p>

                <div className="mt-auto pt-3 border-t border-[#f0eded] flex justify-between items-center">
                  <div className="flex items-center gap-1 text-[#5a4136] text-xs font-medium">
                    <span className="material-symbols-outlined text-base text-[#ff6a00]">restaurant</span>
                    Home-chef speciality
                  </div>
                  <div className="flex items-center gap-1 text-[#5a4136] text-xs font-medium">
                    <span className="material-symbols-outlined text-base text-[#ff6a00]">arrow_outward</span>
                    Discover
                  </div>
                </div>

                {item.ingredients && item.ingredients.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.ingredients.slice(0, 3).map((ing) => (
                      <span key={ing} className="text-[10px] bg-[#fff0e6] text-[#a14000] px-2 py-0.5 rounded-full font-medium">
                        {ing}
                      </span>
                    ))}
                    {item.ingredients.length > 3 && (
                      <span className="text-[10px] text-[#8e7164] font-medium px-1">+{item.ingredients.length - 3} more</span>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-[#fff0e6] to-[#ffdbcc]/50 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 border border-[#ffdbcc]">
        <div>
          <h3 className="text-lg font-bold text-[#1b1c1c]">Found something that feels like home?</h3>
          <p className="text-sm text-[#5a4136] mt-0.5">Open the Bachelor Food app to discover the chef, explore more dishes and continue your journey.</p>
        </div>
        <a href="#download" className="btn-gradient text-white px-7 py-3 rounded-full font-bold text-sm shadow-md whitespace-nowrap">
          Discover in App
        </a>
      </div>
    </section>
  );
};
