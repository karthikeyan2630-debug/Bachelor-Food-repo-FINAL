import React, { useState } from 'react';
import { REVIEWS, FAQS } from '../data/mockData';

export const ReviewsSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-16">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#f0eded] pb-8">
        <div className="space-y-2">
          <span className="bg-[#ffdbcc] text-[#351000] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider inline-block">
            Real People, Real Meals
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1b1c1c] tracking-tight mt-2">
            Loved by 12,000+ Customers
          </h2>
          <p className="text-base text-[#5a4136]">
            Working professionals who swapped takeout for Bachelor Food home-cooked meals — and never looked back.
          </p>
        </div>

        <div className="flex items-center gap-4 bg-white p-4 rounded-2xl soft-shadow border border-[#f0eded] shrink-0">
          <div className="text-center">
            <span className="text-3xl font-extrabold text-[#1b1c1c]">4.9</span>
            <span className="text-xs text-[#5a4136] block">out of 5</span>
          </div>
          <div className="space-y-1">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined filled text-xl">star</span>
              ))}
            </div>
            <p className="text-xs font-semibold text-[#5a4136]">Based on 8,400+ verified orders</p>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-3xl bg-[#fff0e6] border border-[#ffdbcc] p-5 md:p-7">
        <div className="absolute inset-x-0 top-1/2 border-t-2 border-dashed border-[#ff6a00]/30" />
        <div className="relative grid grid-cols-3 gap-3 text-center">
          {[['06:15', 'Chef starts fresh'], ['07:40', 'Packed with care'], ['08:10', 'Morning made easier']].map(([time, label], index) => <div key={time} className="space-y-2"><div className="w-9 h-9 mx-auto rounded-full bg-[#ff6a00] text-white grid place-items-center font-extrabold text-xs ring-4 ring-[#fff0e6]">{index + 1}</div><p className="text-xs font-extrabold text-[#a14000]">{time}</p><p className="text-[10px] text-[#5a4136]">{label}</p></div>)}
        </div>
      </div>

      {/* Review cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {REVIEWS.map((rev) => (
          <article
            key={rev.id}
            className="bg-white rounded-3xl p-6 soft-shadow border border-[#f0eded] flex flex-col justify-between space-y-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex text-amber-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined filled text-lg">star</span>
                  ))}
                </div>
                <span className="text-xs text-[#8e7164]">{rev.date}</span>
              </div>
              <p className="text-sm text-[#1b1c1c] leading-relaxed italic">"{rev.comment}"</p>
            </div>

            <div className="pt-4 border-t border-[#f0eded] space-y-2">
              <div className="flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  className="w-10 h-10 rounded-full object-cover border border-[#ffdbcc]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-xs font-bold text-[#1b1c1c] flex items-center gap-1">
                    {rev.author}
                    {rev.verified && (
                      <span className="material-symbols-outlined text-emerald-600 text-sm" title="Verified Customer">verified</span>
                    )}
                  </h4>
                  <p className="text-[11px] text-[#5a4136]">{rev.role}</p>
                </div>
              </div>
              <div className="bg-[#fff0e6] px-3 py-1 rounded-lg text-[11px] text-[#a14000] font-semibold flex items-center gap-1 w-max">
                <span className="material-symbols-outlined text-xs">favorite</span>
                Favorite: {rev.favoriteDish}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Trust metrics */}
      <div className="bg-white rounded-3xl p-8 soft-shadow border border-[#f0eded] text-center space-y-4">
        <p className="text-xs font-bold uppercase tracking-widest text-[#a14000]">Why Bachelor Food Stands Out</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
          {[
            { stat: '< 15 min', label: 'Avg delivery window' },
            { stat: '0%', label: 'Artificial preservatives' },
            { stat: '98.2%', label: 'On-time delivery rate' },
            { stat: '₹89', label: 'Avg meal price' },
          ].map((item) => (
            <div key={item.label} className="space-y-1">
              <p className="text-2xl font-extrabold text-[#ff6a00]">{item.stat}</p>
              <p className="text-xs font-semibold text-[#5a4136]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#1b1c1c]">Frequently Asked Questions</h3>
          <p className="text-sm text-[#5a4136]">Everything you need to know before your first Bachelor Food meal.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div key={idx} className="bg-white rounded-2xl border border-[#f0eded] soft-shadow overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center gap-4 font-bold text-sm sm:text-base text-[#1b1c1c] focus:outline-none hover:text-[#ff6a00] transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className="material-symbols-outlined text-[#ff6a00] shrink-0">
                    {isOpen ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-3 text-xs sm:text-sm text-[#5a4136] leading-relaxed border-t border-[#f0eded]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
