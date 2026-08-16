import React from 'react';

const PLANS = [
  { name: 'Explore', price: 'Free', desc: 'Discover chefs, dishes and food stories.', features: ['Browse home chefs', 'Explore signature dishes', 'Save your favourites'], featured: false },
  { name: 'Weekly', price: 'From ₹79', desc: 'For people who want home food in their routine.', features: ['Weekly meal access', 'Flexible skips', 'Choose your chef'], featured: true },
  { name: 'Monthly', price: 'From ₹69', desc: 'Simple value for a longer home-food journey.', features: ['Monthly meal access', 'Pause when needed', 'Priority chef discovery'], featured: false },
];

export const PlansSection: React.FC = () => (
  <section className="py-20 md:py-28 bg-[#fff8f3]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto reveal-on-scroll">
        <span className="eyebrow">Simple by design</span>
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">Choose your way to home food.</h2>
        <p className="mt-4 text-sm sm:text-base text-[#6a5043] leading-relaxed">
          No complicated pricing tables. Start exploring for free, then choose a plan that fits your routine inside the app.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-5">
        {PLANS.map((plan, i) => (
          <div key={plan.name} className={`pricing-card reveal-on-scroll ${plan.featured ? 'pricing-card-featured' : ''}`} style={{ transitionDelay: `${i * 100}ms` }}>
            {plan.featured && <span className="pricing-badge">Most popular</span>}
            <div className="w-11 h-11 rounded-2xl bg-[#fff0e6] text-[#ff6a00] flex items-center justify-center">
              <span className="material-symbols-outlined">{plan.name === 'Explore' ? 'explore' : plan.name === 'Weekly' ? 'calendar_month' : 'auto_awesome'}</span>
            </div>
            <h3 className="mt-5 text-xl font-extrabold">{plan.name}</h3>
            <p className="mt-2 text-xs text-[#765d50] min-h-8">{plan.desc}</p>
            <p className="mt-6 text-2xl font-black text-[#ff6a00]">{plan.price}</p>
            <ul className="mt-5 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-xs font-medium text-[#4f3b32]">
                  <span className="material-symbols-outlined filled text-base text-[#ff6a00]">check_circle</span>{feature}
                </li>
              ))}
            </ul>
            <a href="#download" className={`mt-7 w-full text-center py-3 rounded-full text-sm font-bold inline-block ${plan.featured ? 'btn-gradient text-white' : 'border border-[#ff6a00]/30 text-[#a14000] hover:bg-[#fff0e6] transition-colors'}`}>
              {plan.name === 'Explore' ? 'Start Exploring' : 'Get the App'}
            </a>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-[11px] text-[#8e7164]">Final availability and pricing are shown in the Bachelor Food app. Terms &amp; Conditions apply.</p>
      </div>
    </div>
  </section>
);
