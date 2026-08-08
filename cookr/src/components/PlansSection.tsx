import React, { useState } from 'react';

const PLANS = [
  {
    id: 'daily',
    name: 'Daily Plan',
    tagline: 'Try before you commit',
    price: '₹89',
    unit: 'per meal',
    color: 'border-[#ffdbcc] bg-[#fff8f3]',
    badge: null,
    features: [
      'Order meal by meal, any day',
      'Full refund if cancelled 4+ hours before delivery',
      '80% refund if cancelled within 4 hours',
      'No commitment required',
      'Delivery by 8:30 AM',
      'Switch chefs anytime',
    ],
    refundNote: 'Full refund up to 4 hrs before delivery. 80% after that.',
  },
  {
    id: 'weekly',
    name: 'Weekly Plan',
    tagline: '6 deliveries a week',
    price: '₹79',
    unit: 'per meal',
    color: 'border-[#ff6a00] bg-white',
    badge: 'Popular',
    features: [
      '6 meals per week (Sunday excluded)',
      'Full refund if cancelled 4+ hours before first delivery',
      '80% refund if cancelled after that',
      'Skip any day with 12 hrs notice',
      'Credits roll over — never expire',
      'Delivery by 8:30 AM daily',
    ],
    refundNote: '80% of remaining meals credited on mid-week cancellation.',
  },
  {
    id: 'monthly',
    name: 'Monthly Plan',
    tagline: '24 deliveries a month',
    price: '₹69',
    unit: 'per meal',
    color: 'border-[#f0eded] bg-white',
    badge: 'Best Value',
    features: [
      '24 meals per month (6/week, Sundays off)',
      'Full refund if cancelled 4+ hours before first delivery',
      '80% refund if cancelled after first delivery',
      'Pause or skip anytime',
      'Priority chef assignment',
      'Delivery by 8:30 AM daily',
    ],
    refundNote: '80% of remaining meal value credited on cancellation.',
  },
];

const DELIVERY_SCHEDULE = [
  { day: 'Mon', delivers: true },
  { day: 'Tue', delivers: true },
  { day: 'Wed', delivers: true },
  { day: 'Thu', delivers: true },
  { day: 'Fri', delivers: true },
  { day: 'Sat', delivers: true },
  { day: 'Sun', delivers: false },
];

export const PlansSection: React.FC = () => {
  const [activeRefund, setActiveRefund] = useState<string | null>(null);

  return (
    <section className="bg-[#f6f3f2] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

        {/* ── Subscription Plans ── */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="bg-[#ffdbcc] text-[#351000] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider inline-block">
              Subscription Plans
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b1c1c] tracking-tight mt-2">
              Choose Your Meal Plan
            </h2>
            <p className="text-sm text-[#5a4136]">
              All plans are subscription-based. Cancel, pause, or skip anytime via phone or the Bachelor Food app.
              No lock-in. Refund terms apply as per our Terms &amp; Conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-3xl border-2 p-6 soft-shadow flex flex-col gap-4 relative ${plan.color} ${plan.badge === 'Popular' ? 'ring-2 ring-[#ff6a00]/30' : ''}`}
              >
                {plan.badge && (
                  <span className={`absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-extrabold px-3 py-1 rounded-full whitespace-nowrap ${plan.badge === 'Popular' ? 'bg-[#ff6a00] text-white' : 'bg-[#1b1c1c] text-white'}`}>
                    {plan.badge}
                  </span>
                )}

                <div>
                  <h3 className="text-lg font-extrabold text-[#1b1c1c]">{plan.name}</h3>
                  <p className="text-xs text-[#8e7164] font-medium mt-0.5">{plan.tagline}</p>
                </div>

                <div className="flex items-end gap-1">
                  <span className="text-3xl font-extrabold text-[#ff6a00]">{plan.price}</span>
                  <span className="text-xs text-[#8e7164] mb-1">{plan.unit}</span>
                </div>

                <ul className="space-y-2 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-[#5a4136]">
                      <span className="material-symbols-outlined filled text-[#ff6a00] text-base shrink-0 mt-0.5">check_circle</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Refund toggle */}
                <button
                  onClick={() => setActiveRefund(activeRefund === plan.id ? null : plan.id)}
                  className="flex items-center gap-1.5 text-[10px] font-semibold text-[#a14000] hover:text-[#ff6a00] transition-colors mt-1"
                >
                  <span className="material-symbols-outlined text-sm">info</span>
                  Refund &amp; cancellation policy
                  <span className="material-symbols-outlined text-sm">{activeRefund === plan.id ? 'expand_less' : 'expand_more'}</span>
                </button>
                {activeRefund === plan.id && (
                  <div className="bg-[#fff0e6] border border-[#ffdbcc] rounded-xl px-3 py-2 text-[11px] text-[#5a4136] leading-relaxed">
                    {plan.refundNote} Refunds processed within 14 days. As per Bachelor Food Terms &amp; Conditions (Section 6).
                  </div>
                )}

                <a
                  href="#download"
                  className={`block w-full text-center py-3 rounded-full font-bold text-sm transition-all ${plan.badge === 'Popular' ? 'btn-gradient text-white shadow-md' : 'border-2 border-[#ff6a00] text-[#ff6a00] hover:bg-[#fff0e6]'}`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>

          {/* Disclaimer per T&C */}
          <p className="text-center text-xs text-[#8e7164] max-w-2xl mx-auto">
            * Prices shown are indicative. Final pricing is displayed at checkout inclusive of all applicable taxes (INR). Bachelor Food reserves the right to update pricing at any point. By subscribing, you agree to our{' '}
            <button className="text-[#ff6a00] underline font-semibold">Terms &amp; Conditions</button>.
          </p>
        </div>

        {/* ── Delivery Schedule per T&C Section 10 ── */}
        <div className="bg-white rounded-3xl p-6 md:p-8 soft-shadow border border-[#f0eded] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="bg-[#ffdbcc] text-[#351000] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-2">
                Delivery Schedule
              </span>
              <h3 className="text-xl font-extrabold text-[#1b1c1c]">When We Deliver</h3>
              <p className="text-sm text-[#5a4136] mt-1">
                All subscription plans treat Sunday as a non-delivery day. No compensation, refund, or carry-forward for Sundays or announced non-delivery dates.
              </p>
            </div>
            <div className="bg-[#fff0e6] rounded-2xl px-4 py-3 border border-[#ffdbcc] shrink-0 text-center">
              <p className="text-2xl font-extrabold text-[#ff6a00]">By 8:30 AM</p>
              <p className="text-xs text-[#a14000] font-semibold">Every delivery day</p>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {DELIVERY_SCHEDULE.map((d) => (
              <div
                key={d.day}
                className={`rounded-2xl py-4 flex flex-col items-center gap-2 border-2 ${d.delivers ? 'bg-[#fff0e6] border-[#ffdbcc]' : 'bg-[#f6f3f2] border-[#e8e5e5]'}`}
              >
                <span className={`text-xs font-extrabold ${d.delivers ? 'text-[#ff6a00]' : 'text-[#8e7164]'}`}>{d.day}</span>
                <span className={`material-symbols-outlined text-lg ${d.delivers ? 'filled text-[#ff6a00]' : 'text-[#c0bbb9]'}`}>
                  {d.delivers ? 'local_shipping' : 'do_not_disturb_on'}
                </span>
                <span className={`text-[9px] font-bold uppercase tracking-wide ${d.delivers ? 'text-[#a14000]' : 'text-[#8e7164]'}`}>
                  {d.delivers ? 'Active' : 'No Delivery'}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-[#f0eded]">
            {[
              { plan: 'Daily', detail: 'Order any delivery day' },
              { plan: 'Weekly', detail: '6 meals/week · 4 weeks' },
              { plan: 'Monthly', detail: '24 meals · Sundays off' },
            ].map((r) => (
              <div key={r.plan} className="flex items-center gap-3 bg-[#fff8f3] rounded-xl px-4 py-3 border border-[#f0eded]">
                <span className="material-symbols-outlined text-[#ff6a00] text-xl">calendar_month</span>
                <div>
                  <p className="text-xs font-bold text-[#1b1c1c]">{r.plan} Plan</p>
                  <p className="text-[11px] text-[#5a4136]">{r.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Refund Policy per T&C Section 6 ── */}
        <div className="bg-white rounded-3xl p-6 md:p-8 soft-shadow border border-[#f0eded] space-y-5">
          <div>
            <span className="bg-[#ffdbcc] text-[#351000] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-2">
              Refund &amp; Cancellation
            </span>
            <h3 className="text-xl font-extrabold text-[#1b1c1c]">Our Refund Policy</h3>
            <p className="text-xs text-[#5a4136] mt-1">
              As per Section 6 of our Terms &amp; Conditions. Cancel via phone or the Bachelor Food app.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                plan: 'Daily Plan',
                icon: 'today',
                rules: [
                  'Cancel 4+ hrs before delivery → Full refund',
                  'Cancel within 4 hrs → 80% refund to original payment method',
                ],
              },
              {
                plan: 'Weekly Plan',
                icon: 'date_range',
                rules: [
                  'Cancel 4+ hrs before first delivery → Full refund',
                  'Cancel after that → 80% of subscription fee',
                  'Mid-week cancel (4+ hrs notice) → 80% of remaining meals credited',
                ],
              },
              {
                plan: 'Monthly Plan',
                icon: 'calendar_month',
                rules: [
                  'Cancel 4+ hrs before first delivery → Full refund',
                  'Cancel after that → 80% of subscription fee',
                  'Mid-month cancel (4+ hrs notice) → 80% of remaining meals credited',
                ],
              },
            ].map((item) => (
              <div key={item.plan} className="bg-[#fff8f3] rounded-2xl p-4 border border-[#ffdbcc] space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#fff0e6] rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#ff6a00] text-lg">{item.icon}</span>
                  </div>
                  <h4 className="text-sm font-bold text-[#1b1c1c]">{item.plan}</h4>
                </div>
                <ul className="space-y-1.5">
                  {item.rules.map((r) => (
                    <li key={r} className="flex gap-2 items-start text-[11px] text-[#5a4136] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00] shrink-0 mt-1.5" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-2 border-t border-[#f0eded]">
            <div className="flex items-center gap-2 text-xs text-[#5a4136]">
              <span className="material-symbols-outlined text-[#ff6a00] text-base">schedule</span>
              Refunds processed within <strong className="text-[#1b1c1c] ml-1">14 days</strong>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#5a4136]">
              <span className="material-symbols-outlined text-[#ff6a00] text-base">credit_card</span>
              Credited to <strong className="text-[#1b1c1c] ml-1">original payment method</strong>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#5a4136]">
              <span className="material-symbols-outlined text-[#ff6a00] text-base">cancel</span>
              Bachelor Food may cancel due to <strong className="text-[#1b1c1c] ml-1">unavailability</strong> — full refund issued
            </div>
          </div>
        </div>

        {/* ── Allergen & Health Disclaimer per T&C Section 8 ── */}
        <div className="bg-[#1b1c1c] text-white rounded-3xl p-6 md:p-8 space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-amber-400 text-xl">warning</span>
            </div>
            <div>
              <h3 className="text-base font-extrabold text-white">Health &amp; Allergen Disclaimer</h3>
              <p className="text-xs text-white/60 mt-0.5">Section 8 of our Terms &amp; Conditions</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: 'diversity_3',
                title: 'Intermediary Platform',
                desc: 'Bachelor Food serves only as an intermediary linking users to independent food providers. We are not responsible for allergic responses, sensitivities, or health issues from consuming meals.',
              },
              {
                icon: 'no_food',
                title: 'Allergen Advice',
                desc: 'Meals may include nuts, dairy, gluten, eggs, soy, or similar components. We are unable to assure that any meal is entirely free from allergens. Exercise appropriate caution.',
              },
              {
                icon: 'medical_services',
                title: 'Medical Consultation',
                desc: 'Meal plans are not meant for diagnosing or treating health conditions. Persons with medical conditions should consult a qualified dietitian before subscribing. Eating meals is at your own risk.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 rounded-2xl p-4 border border-white/10 space-y-2">
                <span className="material-symbols-outlined text-amber-400 text-xl">{item.icon}</span>
                <h4 className="text-xs font-bold text-white">{item.title}</h4>
                <p className="text-[11px] text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Contact / Complaints per T&C Section 9 ── */}
        <div className="bg-white rounded-3xl p-6 md:p-8 soft-shadow border border-[#f0eded]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              <span className="bg-[#ffdbcc] text-[#351000] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                Complaints &amp; Support
              </span>
              <h3 className="text-xl font-extrabold text-[#1b1c1c]">We Resolve in 5 Business Days</h3>
              <p className="text-sm text-[#5a4136] leading-relaxed">
                Bachelor Food treats all complaints with importance and strives to resolve customer issues within five business days. As per Section 9 of our Terms &amp; Conditions.
              </p>
            </div>
            <div className="space-y-3">
              <a
                href="mailto:info.bachelorfood@gmail.com"
                className="flex items-center gap-4 bg-[#fff8f3] hover:bg-[#fff0e6] transition-colors border border-[#ffdbcc] rounded-2xl px-5 py-4 group"
              >
                <div className="w-10 h-10 bg-[#fff0e6] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#ffdbcc] transition-colors">
                  <span className="material-symbols-outlined text-[#ff6a00] text-xl">mail</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#a14000] uppercase tracking-wider">Email</p>
                  <p className="text-sm font-bold text-[#1b1c1c]">info.bachelorfood@gmail.com</p>
                </div>
                <span className="material-symbols-outlined text-[#ff6a00] text-lg ml-auto">arrow_forward</span>
              </a>
              <a
                href="tel:8000007100"
                className="flex items-center gap-4 bg-[#fff8f3] hover:bg-[#fff0e6] transition-colors border border-[#ffdbcc] rounded-2xl px-5 py-4 group"
              >
                <div className="w-10 h-10 bg-[#fff0e6] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#ffdbcc] transition-colors">
                  <span className="material-symbols-outlined text-[#ff6a00] text-xl">call</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#a14000] uppercase tracking-wider">Customer Support</p>
                  <p className="text-sm font-bold text-[#1b1c1c]">8000007100</p>
                </div>
                <span className="material-symbols-outlined text-[#ff6a00] text-lg ml-auto">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
