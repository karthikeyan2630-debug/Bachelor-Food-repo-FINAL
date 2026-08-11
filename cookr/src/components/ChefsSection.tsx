import React, { useState } from 'react';
import { Chef } from '../types';

interface ChefsSectionProps {
  chefs: Chef[];
}

interface ChefFormData {
  fullName: string;
  phone: string;
  email: string;
  address: string;
}

interface ChefFormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  address?: string;
}

export const ChefsSection: React.FC<ChefsSectionProps> = ({ chefs }) => {
  const [selectedChef, setSelectedChef] = useState<Chef | null>(null);
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<ChefFormData>({ fullName: '', phone: '', email: '', address: '' });
  const [errors, setErrors] = useState<ChefFormErrors>({});

  const validate = (): boolean => {
    const newErrors: ChefFormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^[+]?[\d\s\-()]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Enter a valid phone number.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address.';
    }
    if (!formData.address.trim()) newErrors.address = 'Address is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    setShowApplyForm(false);
    setSubmitted(false);
    setFormData({ fullName: '', phone: '', email: '', address: '' });
    setErrors({});
  };

  const handleChange = (field: keyof ChefFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="bg-[#ffdbcc] text-[#351000] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider inline-block">
          The People Behind the Food
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1b1c1c] tracking-tight mt-2">
          Meet Our Home Chefs
        </h2>
        <p className="text-base sm:text-lg text-[#5a4136]">
          Every chef on Bachelor Food is kitchen-audited, food-safety certified, and rated by real customers.
          These are the best home cooks in your city — not restaurant line cooks.
        </p>
      </div>

      {/* Chef cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {chefs.map((chef) => (
          <button
            key={chef.id}
            onClick={() => setSelectedChef(chef)}
            className="bg-white/70 backdrop-blur-xl rounded-3xl soft-shadow border border-white overflow-hidden group text-left transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#ff6a00]/40"
          >
            {/* No photo — gradient header with initial */}
            <div className="relative h-36 bg-gradient-to-br from-[#ff6a00]/95 to-[#ff8c33] flex items-center justify-center overflow-hidden">
              <img src={chef.coverImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="relative w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white/40">
                <span className="text-2xl font-extrabold text-white">
                  {chef.name.charAt(0)}
                </span>
              </div>
              <div className="absolute bottom-3 left-3 bg-black/30 backdrop-blur-md border border-white/15 text-[10px] font-bold text-white px-2.5 py-1 rounded-full flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">location_on</span>
                {chef.city}
              </div>
            </div>

            <div className="px-5 pt-4 pb-5 bg-white/35 backdrop-blur-md">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1 bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full text-[11px] font-bold border border-amber-100">
                  <span className="material-symbols-outlined filled text-sm">star</span>
                  {chef.rating}
                </div>
              </div>

              <h3 className="text-base font-bold text-[#1b1c1c]">{chef.name}</h3>
              <p className="text-xs text-[#ff6a00] font-semibold mt-0.5">{chef.speciality}</p>
              <p className="text-[11px] text-[#8e7164] mt-1 font-medium">
                {chef.ordersCompleted.toLocaleString()} orders · since {chef.since}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {chef.dishes.slice(0, 2).map((dish) => (
                  <span key={dish} className="text-[10px] bg-[#fff0e6] text-[#a14000] px-2 py-0.5 rounded-full font-medium">
                    {dish}
                  </span>
                ))}
              </div>

              <p className="text-xs text-[#ff6a00] font-semibold mt-3 flex items-center gap-1">
                View profile
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Become a chef CTA */}
      <div id="partner" className="bg-[#1b1c1c] text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-2xl">
        <div className="space-y-2 z-10 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff8c33]">For Home Cooks</span>
          <h3 className="text-2xl sm:text-3xl font-extrabold">Cook from home. Earn every morning.</h3>
          <p className="text-sm text-[#c6c6c7] max-w-sm">
            Turn your kitchen into income. Join 200+ Bachelor Food chefs earning ₹15,000–₹40,000 a month.
          </p>
        </div>
        <button
          onClick={() => setShowApplyForm(true)}
          className="btn-gradient text-white px-8 py-3.5 rounded-full font-bold text-sm z-10 hover:scale-105 transition-transform whitespace-nowrap"
        >
          Apply as a Chef
        </button>
        <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-[#ff6a00]/20 blur-3xl pointer-events-none" />
        <div className="absolute -left-10 -top-10 w-48 h-48 rounded-full bg-[#ff6a00]/10 blur-3xl pointer-events-none" />
      </div>

      {/* ── Apply as Chef modal ── */}
      {showApplyForm && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#ff6a00] to-[#ff8c33] px-6 py-5 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-extrabold text-white">Apply as a Chef</h2>
                <p className="text-xs text-white/80 mt-0.5">Join 200+ home chefs earning with Bachelor Food</p>
              </div>
              <button
                onClick={handleClose}
                className="w-8 h-8 bg-white/20 hover:bg-white/40 transition-colors rounded-full flex items-center justify-center text-white"
                aria-label="Close"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            <div className="p-6">
              {submitted ? (
                /* Success state */
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="material-symbols-outlined filled text-emerald-600 text-3xl">check_circle</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1b1c1c]">Application Received!</h3>
                  <p className="text-sm text-[#5a4136] leading-relaxed max-w-xs mx-auto">
                    Thank you for applying! Your chef application has been received. Our team will reach out to you within 2–3 business days.
                  </p>
                  <button
                    onClick={handleClose}
                    className="btn-gradient text-white px-8 py-3 rounded-full font-bold text-sm mt-2"
                  >
                    Close
                  </button>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#1b1c1c] mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange('fullName')}
                      placeholder="e.g. Meenakshi Ammal"
                      className={`w-full px-4 py-3 bg-[#FFF8F3] border rounded-xl text-sm focus:outline-none focus:ring-2 transition-all placeholder:text-[#8e7164] ${
                        errors.fullName ? 'border-rose-400 focus:ring-rose-200' : 'border-[#dcd9d9] focus:border-[#ff6a00] focus:ring-[#ff6a00]/20'
                      }`}
                    />
                    {errors.fullName && <p className="text-xs text-rose-500 mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-sm">error</span>{errors.fullName}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-[#1b1c1c] mb-1.5">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange('phone')}
                      placeholder="e.g. +91 98765 43210"
                      className={`w-full px-4 py-3 bg-[#FFF8F3] border rounded-xl text-sm focus:outline-none focus:ring-2 transition-all placeholder:text-[#8e7164] ${
                        errors.phone ? 'border-rose-400 focus:ring-rose-200' : 'border-[#dcd9d9] focus:border-[#ff6a00] focus:ring-[#ff6a00]/20'
                      }`}
                    />
                    {errors.phone && <p className="text-xs text-rose-500 mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-sm">error</span>{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-[#1b1c1c] mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={handleChange('email')}
                      placeholder="e.g. meenakshi@gmail.com"
                      className={`w-full px-4 py-3 bg-[#FFF8F3] border rounded-xl text-sm focus:outline-none focus:ring-2 transition-all placeholder:text-[#8e7164] ${
                        errors.email ? 'border-rose-400 focus:ring-rose-200' : 'border-[#dcd9d9] focus:border-[#ff6a00] focus:ring-[#ff6a00]/20'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-rose-500 mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-sm">error</span>{errors.email}</p>}
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-xs font-bold text-[#1b1c1c] mb-1.5">
                      Address <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      value={formData.address}
                      onChange={handleChange('address')}
                      placeholder="Your full kitchen address, city, and pincode"
                      rows={3}
                      className={`w-full px-4 py-3 bg-[#FFF8F3] border rounded-xl text-sm focus:outline-none focus:ring-2 transition-all placeholder:text-[#8e7164] resize-none ${
                        errors.address ? 'border-rose-400 focus:ring-rose-200' : 'border-[#dcd9d9] focus:border-[#ff6a00] focus:ring-[#ff6a00]/20'
                      }`}
                    />
                    {errors.address && <p className="text-xs text-rose-500 mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-sm">error</span>{errors.address}</p>}
                  </div>

                  {/* Submit */}
                  <div className="pt-2 flex gap-3">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="flex-1 py-3 rounded-full border-2 border-[#f0eded] text-sm font-semibold text-[#5a4136] hover:bg-[#f0eded] transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 rounded-full btn-gradient text-white text-sm font-bold shadow-md flex items-center justify-center gap-2"
                    >
                      <span className="material-symbols-outlined text-base">send</span>
                      Submit Application
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Chef detail modal */}
      {selectedChef && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedChef(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header — no photo, gradient with initial */}
            <div className="relative h-32 bg-gradient-to-br from-[#ff6a00] to-[#ff8c33] flex items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center">
                <span className="text-3xl font-extrabold text-white">{selectedChef.name.charAt(0)}</span>
              </div>
              <button
                onClick={() => setSelectedChef(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                aria-label="Close"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <div className="text-center">
                <h3 className="text-lg font-bold text-[#1b1c1c]">{selectedChef.name}</h3>
                <p className="text-xs text-[#ff6a00] font-semibold mt-0.5">{selectedChef.speciality}</p>
                <p className="text-[11px] text-[#8e7164] mt-0.5">{selectedChef.city} · on Bachelor Food since {selectedChef.since}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 bg-amber-50 rounded-xl p-3 text-center border border-amber-100">
                  <p className="text-base font-extrabold text-[#1b1c1c]">{selectedChef.rating}★</p>
                  <p className="text-[10px] text-[#8e7164] font-medium">Avg Rating</p>
                </div>
                <div className="flex-1 bg-[#fff0e6] rounded-xl p-3 text-center border border-[#ffdbcc]">
                  <p className="text-base font-extrabold text-[#1b1c1c]">{selectedChef.ordersCompleted.toLocaleString()}</p>
                  <p className="text-[10px] text-[#8e7164] font-medium">Orders Delivered</p>
                </div>
              </div>

              <p className="text-sm text-[#5a4136] leading-relaxed">{selectedChef.bio}</p>

              <div>
                <p className="text-xs font-bold text-[#1b1c1c] mb-2">Signature Dishes</p>
                <div className="flex flex-wrap gap-2">
                  {selectedChef.dishes.map((dish) => (
                    <span key={dish} className="text-xs bg-[#fff0e6] text-[#a14000] px-3 py-1 rounded-full font-medium border border-[#ffdbcc]">
                      {dish}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="#download"
                onClick={() => setSelectedChef(null)}
                className="block w-full text-center btn-gradient text-white py-3 rounded-full font-bold text-sm shadow-md"
              >
                Subscribe to {selectedChef.name.split(' ')[0]}'s Meals
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
