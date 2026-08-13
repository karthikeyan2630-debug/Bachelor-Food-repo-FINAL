import React, { useEffect, useState } from 'react';
import { REVIEWS, FAQS } from '../data/mockData';

export const ReviewsSection: React.FC = () => {
  const [active, setActive] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setActive((p) => (p + 1) % REVIEWS.length), 4500);
    return () => window.clearInterval(id);
  }, [paused]);

  const move = (direction: 1 | -1) => setActive((p) => (p + direction + REVIEWS.length) % REVIEWS.length);
  const review = REVIEWS[active];

  return (
    <section className="py-20 md:py-28 bg-[#fff8f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[.75fr_1.25fr] gap-12 items-center">
          <div className="reveal-on-scroll">
            <span className="eyebrow">Real people. Real stories.</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">The feeling of home travels with the food.</h2>
            <p className="mt-5 text-sm leading-relaxed text-[#6a5043]">What people remember isn't just the dish. It's the comfort, the chef behind it and the little story that makes it special.</p>
            <div className="mt-7 flex items-center gap-3">
              <div className="text-3xl font-black text-[#ff6a00]">4.9</div>
              <div>
                <div className="flex text-amber-500">{[1,2,3,4,5].map((i) => <span key={i} className="material-symbols-outlined filled text-lg">star</span>)}</div>
                <p className="text-[10px] text-[#765d50] mt-0.5">Community rating</p>
              </div>
            </div>
            <div className="mt-7 inline-flex items-center gap-2 text-[10px] font-bold text-[#765d50] bg-white border border-[#eadfd7] px-3 py-2 rounded-full">
              <span className="material-symbols-outlined text-sm text-[#ff6a00]">touch_app</span>
              Hover the review to pause
            </div>
          </div>

          <div className="relative min-h-[390px] reveal-on-scroll review-carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            <div className="absolute inset-8 rounded-[2rem] bg-[#ff6a00]/10 blur-2xl" />
            <button aria-label="Previous review" onClick={() => move(-1)} className="review-nav-btn review-nav-left">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button aria-label="Next review" onClick={() => move(1)} className="review-nav-btn review-nav-right">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>

            <article key={review.id} className="relative review-feature-card">
              <div className="flex justify-between items-center">
                <div className="flex text-amber-500">{[1,2,3,4,5].map((i) => <span key={i} className="material-symbols-outlined filled text-lg">star</span>)}</div>
                <span className="text-[10px] text-[#8e7164]">{review.date}</span>
              </div>
              <p className="mt-7 text-xl sm:text-2xl font-semibold leading-relaxed text-[#2b211c]">“{review.comment}”</p>
              <div className="mt-8 pt-5 border-t border-[#eadfd7] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img src={review.avatar} alt={review.author} className="w-11 h-11 rounded-full object-cover" referrerPolicy="no-referrer" />
                  <div><p className="text-sm font-extrabold">{review.author}</p><p className="text-[10px] text-[#765d50]">{review.role}</p></div>
                </div>
                <span className="hidden sm:inline-flex text-[10px] font-bold text-[#a14000] bg-[#fff0e6] border border-[#ffdbcc] px-3 py-1.5 rounded-full">{review.favoriteDish}</span>
              </div>
            </article>

            <div className="review-progress"><span style={{ width: `${((active + 1) / REVIEWS.length) * 100}%` }} /></div>
            <div className="flex justify-center gap-2 mt-5">
              {REVIEWS.map((item, index) => <button key={item.id} aria-label={`Review ${index + 1}`} onClick={() => setActive(index)} className={`h-1.5 rounded-full transition-all ${index === active ? 'w-8 bg-[#ff6a00]' : 'w-1.5 bg-[#d6c7be]'}`} />)}
            </div>
          </div>
        </div>

        <div className="mt-20 max-w-3xl mx-auto">
          <div className="text-center reveal-on-scroll"><span className="eyebrow">Questions, answered</span><h3 className="mt-4 text-2xl sm:text-3xl font-extrabold">Before you download</h3></div>
          <div className="mt-8 space-y-3">
            {FAQS.map((faq, index) => {
              const open = openFaqIndex === index;
              return <div key={faq.question} className="faq-card">
                <button onClick={() => setOpenFaqIndex(open ? null : index)} className="w-full flex items-center justify-between gap-5 text-left p-5"><span className="text-sm font-bold">{faq.question}</span><span className="material-symbols-outlined text-[#ff6a00]">{open ? 'remove' : 'add'}</span></button>
                <div className={`grid transition-[grid-template-rows] duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}><div className="overflow-hidden"><p className="px-5 pb-5 text-xs text-[#6a5043] leading-relaxed">{faq.answer}</p></div></div>
              </div>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
