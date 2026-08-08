import React, { useState, useRef, useEffect } from 'react';

export const TERMS_VERSION = '1.0';
const STORAGE_KEY = 'bf_terms_accepted_version';

export function hasAcceptedCurrentTerms(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === TERMS_VERSION;
  } catch {
    return false;
  }
}

export function acceptTerms(): void {
  try {
    localStorage.setItem(STORAGE_KEY, TERMS_VERSION);
  } catch {}
}

interface TermsGateProps {
  onAccepted: () => void;
}

export const TermsGate: React.FC<TermsGateProps> = ({ onAccepted }) => {
  const [scrolledToBottom, setScrolledToBottom] = useState(false);
  const [checked, setChecked] = useState(false);
  const [declined, setDeclined] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 48) {
      setScrolledToBottom(true);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    if (el.scrollHeight <= el.clientHeight + 48) {
      setScrolledToBottom(true);
    }
  }, []);

  const canAccept = scrolledToBottom && checked;

  const handleAccept = () => {
    if (!canAccept) return;
    acceptTerms();
    onAccepted();
  };

  return (
    <div className="min-h-screen bg-[#FFF8F3] flex flex-col">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#ff6a00]/5 blur-[100px] rounded-full pointer-events-none z-0" />

      <div className="flex-1 flex flex-col items-center justify-start py-8 px-4 relative z-10">
        <div className="w-full max-w-2xl space-y-5">

          {/* Logo */}
          <div className="flex items-center justify-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#FF6A00] to-[#FF8C33] flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined filled text-white text-xl">soup_kitchen</span>
            </div>
            <div className="leading-none">
              <span className="text-xl font-extrabold tracking-tight text-[#1b1c1c] block">Bachelor Food</span>
              <span className="text-[10px] font-semibold text-[#a14000] tracking-widest uppercase">Home Cooked · Delivered</span>
            </div>
          </div>

          {/* Card */}
          <div className="bg-white rounded-3xl border border-[#f0eded] soft-shadow overflow-hidden">

            {/* Orange header */}
            <div className="bg-gradient-to-r from-[#ff6a00] to-[#ff8c33] px-6 py-4 text-center">
              <h1 className="text-lg font-extrabold text-white flex items-center justify-center gap-2">
                <span className="material-symbols-outlined filled text-white text-xl">gavel</span>
                Terms &amp; Conditions
              </h1>
              <p className="text-xs text-white/80 mt-0.5">
                v{TERMS_VERSION} — Scroll through and read all terms before continuing
              </p>
            </div>

            {/* ── Scrollable T&C body — fixed height so overflow always works ── */}
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="overflow-y-auto px-6 py-5"
              style={{ height: '380px' }}
            >
              {/* ── VERBATIM CONTENT FROM DOCUMENT ── */}

              <h2 className="text-base font-extrabold text-[#1b1c1c] mb-3">Our Terms and Conditions</h2>

              <p className="text-xs text-[#5a4136] leading-relaxed mb-4">
                This document constitutes an electronic record pursuant to the Information Technology Act, 2000 and its applicable rules, including all amendments concerning electronic records incorporated in relevant statutes. It is published in compliance with Rule 3(1) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, which mandate the publication of rules, regulations, privacy policy, and Terms of Use for users accessing or utilizing the Bachelor Food website and mobile application.
              </p>

              <SectionHeading>Terms of Use</SectionHeading>
              <p className="text-xs text-[#5a4136] leading-relaxed mb-2">
                The following Terms of Use ("Terms") set forth the conditions governing your access and utilization of the Bachelor Food website (the "Website") and the Bachelor Food mobile application (the "App"). Collectively, these services are referred to as the "Platform."
              </p>
              <p className="text-xs text-[#5a4136] leading-relaxed mb-2">
                We urge you to review these Terms thoroughly prior to engaging with any services on the Platform. Should you disagree with any portion of these Terms, you are expressly advised to refrain from accessing or using the Platform, and to uninstall the App from your device.
              </p>
              <p className="text-xs text-[#5a4136] leading-relaxed mb-2">
                Your act of accessing, installing, downloading, registering for, or otherwise utilizing the Platform signifies your understanding and acceptance of these Terms, as well as all associated policies published on the Platform—including, but not limited to, the Privacy Policy, Cancellation &amp; Refund Policy, and any additional policies as amended periodically. Continued use of the Platform establishes a binding legal agreement between you and Bachelor Food.
              </p>
              <p className="text-xs text-[#5a4136] leading-relaxed mb-2">
                The Platform is owned and managed by <strong>Infixhi Tech Innovations Private Limited</strong>, a private limited company duly incorporated under the Companies Act, 2013, with its registered office located at (insert the required address).
              </p>
              <p className="text-xs text-[#5a4136] leading-relaxed mb-1">For the purpose of these Terms, wherever the context so requires:</p>
              <ul className="mb-2 space-y-1">
                <Li>"You", "User", or "Customer" shall mean any natural or legal person who accesses, registers, subscribes to, purchases from, or otherwise uses the Platform.</Li>
                <Li>"Bachelor Food", "We", "Us", or "Our" shall mean <strong>Infixhi Tech Innovations Private Limited</strong> and its Platform.</Li>
              </ul>
              <p className="text-xs text-[#5a4136] leading-relaxed mb-2">
                Bachelor Food operates a technology-enabled platform that facilitates subscription-based meal delivery services by connecting customers with participating food vendors, restaurants, kitchens, mess providers, home chefs, and other food service providers ("Vendors").
              </p>
              <p className="text-xs text-[#5a4136] leading-relaxed mb-2">
                Through the Platform, customers may browse available meal plans, subscribe to daily, weekly, or monthly food packages, place orders, make payments, and receive food delivery services from participating Vendors.
              </p>
              <p className="text-xs text-[#5a4136] leading-relaxed mb-4">
                Bachelor Food acts as an intermediary platform facilitating transactions and service fulfillment between Vendors and customers. The Platform may offer prepared meals, beverages, meal subscriptions, and related food services made available by participating Vendors.
              </p>

              <SectionHeading>Terms and Conditions</SectionHeading>
              <p className="text-xs text-[#5a4136] leading-relaxed mb-1">We ask that you thoroughly read these terms before making any purchases via our website or app.</p>
              <p className="text-xs text-[#5a4136] leading-relaxed mb-1">When you order products or services from Bachelor Food using our site or app, you are agreeing to abide by these terms and conditions.</p>
              <p className="text-xs text-[#5a4136] leading-relaxed mb-4">The service provider in this context is Bachelor Food.</p>

              <SectionHeading>Section 1 : Definitions</SectionHeading>
              <ul className="mb-4 space-y-1">
                <Li>'Agreement' includes these terms, our privacy policy, any order documents, and payment guidelines provided to you;</Li>
                <Li>'Privacy policy' means the documentation found on our platform that details the collection and storage of your personal information;</Li>
                <Li>'You,' 'Your,' and 'Yours' identify the person using our site or app and placing orders through any Bachelor Food channel;</Li>
                <Li>'We', 'Us', 'Our' and 'Bachelor Food' signify the company entity;</Li>
                <Li>'Goods' means all products listed for sale on our website or mobile app;</Li>
                <Li>'Service' or 'Services' relates to any offering we provide that you request from Bachelor Food;</Li>
                <Li>'Food delivery' covers perishable items and all forms of delivery services;</Li>
                <Li>'Website' and 'App' point to our online site or mobile application where goods and services can be accessed;</Li>
                <Li>'Month' is defined as a 30-day interval, independent of the calendar month's length;</Li>
              </ul>

              <SectionHeading>Section 2 : Privacy Policy</SectionHeading>
              <ul className="mb-4 space-y-1">
                <Li>By using our platform, we might gather information like your IP address, contact info, email, preferences, interests, and online activity data.</Li>
                <Li>We collect your information to better grasp your requirements, improve offerings, send you promotions, perform market research, and tailor your experience on our platform.</Li>
                <Li>We commit to securing your data and preventing unauthorized access or leaks by employing advanced technology and security measures.</Li>
                <Li>Through our Cookie Policy, we analyse site traffic and adjust the platform to your browsing habits. Cookies are strictly used to improve your experience.</Li>
              </ul>

              <SectionHeading>Section 3 : Ordering</SectionHeading>
              <ul className="mb-4 space-y-1">
                <Li>All arrangements for goods and services via this site or app are between you and Bachelor Food. You are required to give full and correct details when placing orders.</Li>
                <Li>You assert the payment instrument belongs to you, and enough balance is available to complete your order.</Li>
                <Li>Items and services bought from our website or app are meant solely for your individual use and not for resale purposes.</Li>
                <Li>You might be asked to supply an email and password during ordering. Safeguarding your account credentials is your responsibility.</Li>
                <Li>We implement reasonable security precautions for your order and payment data, but we cannot be held responsible for unauthorized third-party access beyond our control.</Li>
                <Li>Every order depends on product availability, delivery capabilities, and Bachelor Food's approval.</Li>
                <Li>Should a product be out of stock or delivery not possible to your address, we might reach out via phone, text, or email.</Li>
              </ul>

              <SectionHeading>Section 4 : Pricing &amp; Payment</SectionHeading>
              <ul className="mb-4 space-y-1">
                <Li>The prices shown on our site or app are correct when published. We reserve the option to update menus, pricing, or delivery fees at any point.</Li>
                <Li>At checkout, you will see the full price, inclusive of any taxes due.</Li>
                <Li>You must pay in full for your online order by using approved payment options like debit/credit cards, bank transfer, or other supported channels.</Li>
                <Li>When opting for online payment, you must complete the transaction before we deliver your order.</Li>
              </ul>

              <SectionHeading>Section 5 : Delivery</SectionHeading>
              <ul className="mb-4 space-y-1">
                <Li>Delivery times are given as estimates and may shift due to factors like traffic, weather, or other conditions beyond our control.</Li>
                <Li>Orders will be delivered to the address you provide at checkout, either by our team or by external delivery partners.</Li>
                <Li>If delivery is refused or you are unable to pickup at your end, the responsibility and risk for the order transfer to you.</Li>
                <Li>It's your duty to ensure proper access and arrangements are in place so delivery can proceed smoothly.</Li>
                <Li>While we strive for punctual delivery, we are not liable for any expenses or losses that result from late deliveries.</Li>
                <Li>If your address is not serviceable, we may cancel your order or suggest an alternative delivery point.</Li>
              </ul>

              <SectionHeading>Section 6 : Cancellation and Refund Policy</SectionHeading>
              <p className="text-xs text-[#5a4136] leading-relaxed mb-3">
                Weekly and monthly subscribers can cancel their order at any time and are encouraged to do so via phone or the Bachelor Food mobile app.
              </p>
              <p className="text-xs font-bold text-[#1b1c1c] mb-2">Refunds Terms and Conditions</p>

              <p className="text-xs font-semibold text-[#1b1c1c] mb-1">1. For daily plans</p>
              <ul className="mb-3 space-y-1">
                <Li>A full refund will be issued for cancellations made at least four hours prior to the first meal delivery.</Li>
                <Li>If the cancellation is done after this period, 80% of the subscription fee will be credited to the subscriber's bank account or credited to the original payment method used by the subscriber.</Li>
              </ul>

              <p className="text-xs font-semibold text-[#1b1c1c] mb-1">2. For weekly schedules</p>
              <ul className="mb-3 space-y-1">
                <Li>If you cancel at least four hours before the first meal delivery, you'll receive a full refund.</Li>
                <Li>If the cancellation is made after this period, 80% refund of the subscription fee will be given.</Li>
                <Li>For weekly plans, cancellations after some meals have been delivered but at least 4 hours before the next scheduled meal will result in 80% of the value of remaining meals being credited to the bank account or credited to the original payment method used by the subscriber.</Li>
              </ul>

              <p className="text-xs font-semibold text-[#1b1c1c] mb-1">3. For monthly subscriptions</p>
              <ul className="mb-3 space-y-1">
                <Li>If you cancel at least four hours before the first meal delivery, you will receive a full refund.</Li>
                <Li>If the cancellation is made after this period, 80% refund of the subscription fee will be given.</Li>
                <Li>For monthly plans, cancellation after some meals have been delivered but at least four hours before the next scheduled meal will result in 80% of the value of remaining meals being credited to the bank account or credited to the original payment method used by the subscriber.</Li>
              </ul>

              <p className="text-xs font-semibold text-[#1b1c1c] mb-1">4. Order cancellation by Bachelor Food</p>
              <ul className="mb-3 space-y-1">
                <Li>Bachelor Food reserves the right to cancel the order in the event of unavailability of product due to reasons beyond the control of the company.</Li>
                <Li>Subscribers will be informed and any payments made will be refunded.</Li>
              </ul>

              <p className="text-xs font-semibold text-[#1b1c1c] mb-1">5. Refund Processing</p>
              <ul className="mb-4 space-y-1">
                <Li>If the above cancellation requirements are met, the refund or re-credit will be processed to the debit or credit card within 14 days.</Li>
              </ul>

              <SectionHeading>Section 7 : Information</SectionHeading>
              <ul className="mb-4 space-y-1">
                <Li>You must supply correct and complete details whenever information is requested for delivery.</Li>
                <Li>You permit Bachelor Food to collect, store, and use your personal data for delivery, marketing, customer service, and these details are saved and verified while making credit or payment with the order.</Li>
                <Li>Your personal data may be disclosed to third parties as required by law or to facilitate delivery services.</Li>
              </ul>

              <SectionHeading>Section 8 : Health And Allergy Disclaimer</SectionHeading>
              <p className="text-xs font-semibold text-[#1b1c1c] mb-1">Health &amp; Dietary</p>
              <ul className="mb-2 space-y-1">
                <Li>Bachelor Food serves only as an intermediary, linking users to independent food providers.</Li>
                <Li>Bachelor Food is not responsible for any allergic responses, sensitivities, or health issues that may result from consuming the meals.</Li>
              </ul>
              <p className="text-xs font-semibold text-[#1b1c1c] mb-1">Allergen Advice</p>
              <ul className="mb-2 space-y-1">
                <Li>Meals may include typical allergens like nuts, dairy, gluten, eggs, soy, or similar components.</Li>
                <Li>We are unable to assure that any meal is entirely free from allergens.</Li>
                <Li>Individuals with allergies or intolerances should exercise appropriate caution and responsibility when eating these meals.</Li>
              </ul>
              <p className="text-xs font-semibold text-[#1b1c1c] mb-1">Medical Consultation</p>
              <ul className="mb-4 space-y-1">
                <Li>Meal plans are created for standard dietary needs and are not meant for diagnosing, treating, or curing health conditions.</Li>
                <Li>Anyone with medical conditions or special dietary restrictions should seek advice from a qualified dietitian or healthcare provider before subscribing.</Li>
                <Li>Eating the meals is solely at your own risk.</Li>
              </ul>

              <SectionHeading>Section 9 : Complaints</SectionHeading>
              <ul className="mb-2 space-y-1">
                <Li>Bachelor Food treats all complaints with importance and strives to resolve customer issues within five business days.</Li>
                <Li>You can submit complaints to: <a href="mailto:info.bachelorfood@gmail.com" className="text-[#ff6a00] font-semibold underline">info.bachelorfood@gmail.com</a></Li>
                <Li>Alternatively, you may reach Customer Support at: <a href="tel:8000007100" className="text-[#ff6a00] font-semibold underline">8000007100</a></Li>
              </ul>
              <div className="mb-4" />

              <SectionHeading>Section 10 : Subscription Delivery Schedule</SectionHeading>
              <ul className="mb-4 space-y-1">
                <Li>All subscription plans at Bachelor Food treat Sunday as a standard day with no deliveries.</Li>
                <Li>Weekly subscriptions provide deliveries six days each week, with Sundays excluded.</Li>
                <Li>Monthly plans consist of 24 delivery days, arranged as six deliveries per week over four weeks, not counting Sundays.</Li>
                <Li>There is no delivery, compensation, refund, extension, replacement, or carry forward for Sundays or any other announced non-delivery dates.</Li>
              </ul>

              <SectionHeading>Section 11 : Limitation of Liability</SectionHeading>
              <ul className="mb-4 space-y-1">
                <Li>Bachelor Food try hard to provide information on its website and app that is both correct and free of mistakes.</Li>
                <Li>We cannot promise that the platform will always function seamlessly or be free from interruptions, errors, viruses, or malfunctions.</Li>
                <Li>By using our service, you accept that Bachelor Food bears no responsibility for content from third parties, external sites or apps, or for any food or drinks purchased via our platform.</Li>
                <Li>Our responsibility is capped at the amount you paid for the specific order or service in question.</Li>
                <Li>Bachelor Food will not be held liable for indirect losses, consequential damages, lost income or profits, data loss, or any property damage resulting from use of the platform or its services.</Li>
                <Li>This restriction does not extend to cases of personal injury or death that are a direct result of our established negligence.</Li>
                <Li>Bachelor Food cannot be held accountable for any delays or failures due to circumstances outside our reasonable control, such as natural disasters, warfare, riots, government orders, or third-party actions.</Li>
                <Li>We may deny service, suspend user accounts, or block access if there is evidence of fraud, voucher misuse, abuse of discount codes, or other suspicious conduct.</Li>
                <Li>Should widespread concerns about food quality arise, Bachelor Food will examine user feedback and implement corrective measures as needed.</Li>
              </ul>

              <SectionHeading>Section 12 : General</SectionHeading>
              <ul className="mb-4 space-y-1">
                <Li>Prices are listed in INR and include all relevant taxes unless specified otherwise.</Li>
                <Li>Bachelor Food can delegate or assign portions of its services without giving advance notice.</Li>
                <Li>We may modify or revise these Terms and Conditions at any time without prior warning.</Li>
                <Li>Payment is required via authorized payment options when you place your order.</Li>
                <Li>Orders may be cancelled if payment is not finalized.</Li>
                <Li>Platform misuse by users is strictly prohibited, including:
                  <ul className="mt-1 ml-4 space-y-1">
                    <Li>Operating automated tools or bots to order or use our website or application are not allowed.</Li>
                    <Li>Harvesting personal data or any third person's data from the platform are strictly prohibited.</Li>
                    <Li>Engaging in scraping or hacking of the website or app are not allowed.</Li>
                    <Li>Abusing vouchers, promotional offers, or discount codes.</Li>
                  </ul>
                </Li>
                <Li>Registered users may get promotional messages, emails, notifications, and updates about offers and services from Bachelor Food.</Li>
                <Li>The Terms and Conditions, along with the Privacy Policy, form the entire agreement between Bachelor Food and the user.</Li>
                <Li>If any section of these Terms and Conditions is deemed unenforceable or invalid, the rest will remain in effect.</Li>
                <Li>These Terms and Conditions are governed by and interpreted under the laws of India.</Li>
                <Li>Both parties agree to the jurisdiction of Indian courts.</Li>
                <Li>All communications, correspondence, and transactions will be carried out in English and also other languages if we added on the page.</Li>
              </ul>

              {/* End sentinel */}
              <div className="text-center py-2">
                <span className="text-[10px] text-[#8e7164]">— End of Terms &amp; Conditions —</span>
              </div>
            </div>

            {/* Scroll status banner */}
            {!scrolledToBottom ? (
              <div className="flex items-center gap-2 px-6 py-2.5 bg-[#fff0e6] border-t border-[#ffdbcc]">
                <span className="material-symbols-outlined text-[#ff6a00] text-lg animate-bounce">keyboard_arrow_down</span>
                <span className="text-xs font-semibold text-[#a14000]">
                  Scroll down to read all terms — the checkbox unlocks at the end
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-2 px-6 py-2.5 bg-emerald-50 border-t border-emerald-200">
                <span className="material-symbols-outlined filled text-emerald-600 text-lg">check_circle</span>
                <span className="text-xs font-semibold text-emerald-700">
                  You've read all the Terms &amp; Conditions — please confirm below to continue
                </span>
              </div>
            )}

            {/* Checkbox + buttons */}
            <div className="px-6 py-5 space-y-4 border-t border-[#f0eded]">
              <label className={`flex items-start gap-3 ${scrolledToBottom ? 'cursor-pointer' : 'cursor-not-allowed'} group`}>
                <div className="relative mt-0.5 shrink-0">
                  <input
                    type="checkbox"
                    checked={checked}
                    disabled={!scrolledToBottom}
                    onChange={(e) => { setChecked(e.target.checked); setDeclined(false); }}
                    className="sr-only"
                  />
                  <div
                    onClick={() => { if (!scrolledToBottom) return; setChecked(p => !p); setDeclined(false); }}
                    role="checkbox"
                    aria-checked={checked}
                    tabIndex={scrolledToBottom ? 0 : -1}
                    onKeyDown={(e) => { if ((e.key === ' ' || e.key === 'Enter') && scrolledToBottom) { setChecked(p => !p); setDeclined(false); } }}
                    className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
                      !scrolledToBottom
                        ? 'bg-[#f0eded] border-[#dcd9d9]'
                        : checked
                        ? 'bg-[#ff6a00] border-[#ff6a00]'
                        : 'bg-white border-[#dcd9d9] group-hover:border-[#ff6a00]'
                    }`}
                  >
                    {checked && <span className="material-symbols-outlined filled text-white text-sm">check</span>}
                  </div>
                </div>
                <span className={`text-sm leading-snug select-none ${!scrolledToBottom ? 'text-[#8e7164]' : 'text-[#1b1c1c]'}`}>
                  I have read and agree to the Terms &amp; Conditions of Bachelor Food.
                  {!scrolledToBottom && (
                    <span className="block text-xs text-[#a14000] mt-0.5">Finish reading the terms above first</span>
                  )}
                </span>
              </label>

              {declined && (
                <div className="flex items-start gap-2 bg-rose-50 border border-rose-200 rounded-xl px-4 py-3 text-xs text-rose-700 font-medium">
                  <span className="material-symbols-outlined text-rose-500 text-base shrink-0 mt-0.5">info</span>
                  <span>You must accept the Terms &amp; Conditions to access Bachelor Food. You cannot use the platform without agreeing to these terms.</span>
                </div>
              )}

              <div className="flex gap-3">
                <button
                  onClick={() => setDeclined(true)}
                  className="flex-1 py-3 rounded-full text-sm font-semibold text-[#8e7164] border border-[#dcd9d9] hover:bg-[#f0eded] transition-colors"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  disabled={!canAccept}
                  aria-disabled={!canAccept}
                  className={`flex-grow-[2] py-3 rounded-full font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                    canAccept
                      ? 'btn-gradient text-white shadow-md hover:scale-[1.02]'
                      : 'bg-[#f0eded] text-[#8e7164] cursor-not-allowed'
                  }`}
                >
                  <span className="material-symbols-outlined text-base">check_circle</span>
                  Accept &amp; Continue
                </button>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-[#8e7164] pb-4">
            © 2025 Bachelor Food — Infixhi Tech Innovations Private Limited
          </p>
        </div>
      </div>
    </div>
  );
};

/* ── Shared helpers ── */
const SectionHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-xs font-extrabold text-[#1b1c1c] uppercase tracking-wider border-l-2 border-[#ff6a00] pl-2 mb-2 mt-1">
    {children}
  </h3>
);

const Li: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex gap-2 items-start text-xs text-[#5a4136] leading-relaxed">
    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ff6a00] shrink-0" />
    <span>{children}</span>
  </li>
);
