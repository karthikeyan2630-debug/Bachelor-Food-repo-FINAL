import React, { useState, useMemo } from 'react';
import { MenuItem, VegType } from '../types';

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
                <img
                  src={item.image}
                  alt={item.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80';
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Discovery chip */}
                <div className="absolute top-3 right-3 glass-panel px-3 py-1 rounded-full text-[10px] font-bold text-[#a14000] shadow-sm border border-white/60">
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
