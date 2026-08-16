import React from 'react';
import { BachelorFoodLogo } from './Logo';

interface TermsPageProps {
  onBack?: () => void;
  showBackButton?: boolean;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onBack, showBackButton = false }) => {
  return (
    <div className="min-h-screen bg-[#FFF8F3]">
      {/* Sticky header */}
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-md border-b border-[#f0eded] shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-3">
          {showBackButton && onBack && (
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 text-sm font-semibold text-[#ff6a00] hover:text-[#a14000] transition-colors mr-2"
            >
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Back
            </button>
          )}
          <BachelorFoodLogo compact />
          <span className="text-[#8e7164] text-sm ml-1">— Terms &amp; Conditions</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1b1c1c] tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm text-[#5a4136]">
            This document constitutes an electronic record pursuant to the Information Technology Act, 2000 and its
            applicable rules. Published in compliance with Rule 3(1) of the Information Technology (Intermediary
            Guidelines and Digital Media Ethics Code) Rules, 2021.
          </p>
        </div>

        <Section title="Terms of Use">
          <p>
            The following Terms of Use ("Terms") set forth the conditions governing your access and utilization of the
            Bachelor Food website (the "Website") and the Bachelor Food mobile application (the "App"). Collectively,
            these services are referred to as the "Platform."
          </p>
          <p>
            We urge you to review these Terms thoroughly prior to engaging with any services on the Platform. Should
            you disagree with any portion of these Terms, you are expressly advised to refrain from accessing or using
            the Platform, and to uninstall the App from your device.
          </p>
          <p>
            Your act of accessing, installing, downloading, registering for, or otherwise utilizing the Platform
            signifies your understanding and acceptance of these Terms, as well as all associated policies published
            on the Platform—including, but not limited to, the Privacy Policy, Cancellation &amp; Refund Policy, and
            any additional policies as amended periodically. Continued use of the Platform establishes a binding
            legal agreement between you and Bachelor Food.
          </p>
          <p>
            The Platform is owned and managed by <strong>Infixhi Tech Innovations Private Limited</strong>, a private
            limited company duly incorporated under the Companies Act, 2013.
          </p>
          <p>
            Bachelor Food operates a technology-enabled platform that facilitates subscription-based meal delivery
            services by connecting customers with participating food vendors, restaurants, kitchens, mess providers,
            home chefs, and other food service providers ("Vendors").
          </p>
        </Section>

        <Section title="Section 1: Definitions">
          <BulletList items={[
            "'Agreement' includes these terms, our privacy policy, any order documents, and payment guidelines provided to you.",
            "'Privacy policy' means the documentation found on our platform that details the collection and storage of your personal information.",
            "'You,' 'Your,' and 'Yours' identify the person using our site or app and placing orders through any Bachelor Food channel.",
            "'We', 'Us', 'Our' and 'Bachelor Food' signify the company entity.",
            "'Goods' means all products listed for sale on our website or mobile app.",
            "'Service' or 'Services' relates to any offering we provide that you request from Bachelor Food.",
            "'Food delivery' covers perishable items and all forms of delivery services.",
            "'Website' and 'App' point to our online site or mobile application where goods and services can be accessed.",
            "'Month' is defined as a 30-day interval, independent of the calendar month's length.",
          ]} />
        </Section>

        <Section title="Section 2: Privacy Policy">
          <BulletList items={[
            "By using our platform, we might gather information like your IP address, contact info, email, preferences, interests, and online activity data.",
            "We collect your information to better grasp your requirements, improve offerings, send you promotions, perform market research, and tailor your experience on our platform.",
            "We commit to securing your data and preventing unauthorized access or leaks by employing advanced technology and security measures.",
            "Through our Cookie Policy, we analyse site traffic and adjust the platform to your browsing habits. Cookies are strictly used to improve your experience.",
          ]} />
        </Section>

        <Section title="Section 3: Ordering">
          <BulletList items={[
            "All arrangements for goods and services via this site or app are between you and Bachelor Food. You are required to give full and correct details when placing orders.",
            "You assert the payment instrument belongs to you, and enough balance is available to complete your order.",
            "Items and services bought from our website or app are meant solely for your individual use and not for resale purposes.",
            "You might be asked to supply an email and password during ordering. Safeguarding your account credentials is your responsibility.",
            "We implement reasonable security precautions for your order and payment data, but we cannot be held responsible for unauthorized third-party access beyond our control.",
            "Every order depends on product availability, delivery capabilities, and Bachelor Food's approval.",
            "Should a product be out of stock or delivery not possible to your address, we might reach out via phone, text, or email.",
          ]} />
        </Section>

        <Section title="Section 4: Pricing & Payment">
          <BulletList items={[
            "The prices shown on our site or app are correct when published. We reserve the option to update menus, pricing, or delivery fees at any point.",
            "At checkout, you will see the full price, inclusive of any taxes due.",
            "You must pay in full for your online order by using approved payment options like debit/credit cards, bank transfer, or other supported channels.",
            "When opting for online payment, you must complete the transaction before we deliver your order.",
          ]} />
        </Section>

        <Section title="Section 5: Delivery">
          <BulletList items={[
            "Delivery times are given as estimates and may shift due to factors like traffic, weather, or other conditions beyond our control.",
            "Orders will be delivered to the address you provide at checkout, either by our team or by external delivery partners.",
            "If delivery is refused or you are unable to pickup at your end, the responsibility and risk for the order transfer to you.",
            "It's your duty to ensure proper access and arrangements are in place so delivery can proceed smoothly.",
            "While we strive for punctual delivery, we are not liable for any expenses or losses that result from late deliveries.",
            "If your address is not serviceable, we may cancel your order or suggest an alternative delivery point.",
          ]} />
        </Section>

        <Section title="Section 6: Cancellation & Refund Policy">
          <p>Weekly and monthly subscribers can cancel their order at any time and are encouraged to do so via phone or the Bachelor Food mobile app.</p>

          <SubSection title="1. For Daily Plans">
            <BulletList items={[
              "A full refund will be issued for cancellations made at least four hours prior to the first meal delivery.",
              "If the cancellation is done after this period, 80% of the subscription fee will be credited to the subscriber's bank account or credited to the original payment method.",
            ]} />
          </SubSection>

          <SubSection title="2. For Weekly Schedules">
            <BulletList items={[
              "If you cancel at least four hours before the first meal delivery, you'll receive a full refund.",
              "If the cancellation is made after this period, 80% refund of the subscription fee will be given.",
              "For weekly plans, cancellations after some meals have been delivered but at least 4 hours before the next scheduled meal will result in 80% of the value of remaining meals being credited.",
            ]} />
          </SubSection>

          <SubSection title="3. For Monthly Subscriptions">
            <BulletList items={[
              "If you cancel at least four hours before the first meal delivery, you will receive a full refund.",
              "If the cancellation is made after this period, 80% refund of the subscription fee will be given.",
              "For monthly plans, cancellation after some meals have been delivered but at least four hours before the next scheduled meal will result in 80% of the value of remaining meals being credited.",
            ]} />
          </SubSection>

          <SubSection title="4. Order Cancellation by Bachelor Food">
            <BulletList items={[
              "Bachelor Food reserves the right to cancel the order in the event of unavailability of product due to reasons beyond the control of the company.",
              "Subscribers will be informed and any payments made will be refunded.",
            ]} />
          </SubSection>

          <SubSection title="5. Refund Processing">
            <BulletList items={[
              "If the above cancellation requirements are met, the refund or re-credit will be processed to the debit or credit card within 14 days.",
            ]} />
          </SubSection>
        </Section>

        <Section title="Section 7: Information">
          <BulletList items={[
            "You must supply correct and complete details whenever information is requested for delivery.",
            "You permit Bachelor Food to collect, store, and use your personal data for delivery, marketing, customer service, and these details are saved and verified while making credit or payment with the order.",
            "Your personal data may be disclosed to third parties as required by law or to facilitate delivery services.",
          ]} />
        </Section>

        <Section title="Section 8: Health & Allergy Disclaimer">
          <SubSection title="Health & Dietary">
            <BulletList items={[
              "Bachelor Food serves only as an intermediary, linking users to independent food providers.",
              "Bachelor Food is not responsible for any allergic responses, sensitivities, or health issues that may result from consuming the meals.",
            ]} />
          </SubSection>
          <SubSection title="Allergen Advice">
            <BulletList items={[
              "Meals may include typical allergens like nuts, dairy, gluten, eggs, soy, or similar components.",
              "We are unable to assure that any meal is entirely free from allergens.",
              "Individuals with allergies or intolerances should exercise appropriate caution and responsibility when eating these meals.",
            ]} />
          </SubSection>
          <SubSection title="Medical Consultation">
            <BulletList items={[
              "Meal plans are created for standard dietary needs and are not meant for diagnosing, treating, or curing health conditions.",
              "Anyone with medical conditions or special dietary restrictions should seek advice from a qualified dietitian or healthcare provider before subscribing.",
              "Eating the meals is solely at your own risk.",
            ]} />
          </SubSection>
        </Section>

        <Section title="Section 9: Complaints">
          <BulletList items={[
            "Bachelor Food treats all complaints with importance and strives to resolve customer issues within five business days.",
          ]} />
          <div className="mt-3 bg-[#fff0e6] rounded-2xl p-4 border border-[#ffdbcc] space-y-2">
            <p className="text-sm font-semibold text-[#1b1c1c]">Contact us:</p>
            <div className="flex items-center gap-2 text-sm text-[#5a4136]">
              <span className="material-symbols-outlined text-[#ff6a00] text-base">mail</span>
              <a href="mailto:info.bachelorfood@gmail.com" className="hover:text-[#ff6a00] transition-colors font-medium">
                info.bachelorfood@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#5a4136]">
              <span className="material-symbols-outlined text-[#ff6a00] text-base">call</span>
              <a href="tel:8000007100" className="hover:text-[#ff6a00] transition-colors font-medium">
                8000007100
              </a>
            </div>
          </div>
        </Section>

        <Section title="Section 10: Subscription Delivery Schedule">
          <BulletList items={[
            "All subscription plans at Bachelor Food treat Sunday as a standard day with no deliveries.",
            "Weekly subscriptions provide deliveries six days each week, with Sundays excluded.",
            "Monthly plans consist of 24 delivery days, arranged as six deliveries per week over four weeks, not counting Sundays.",
            "There is no delivery, compensation, refund, extension, replacement, or carry forward for Sundays or any other announced non-delivery dates.",
          ]} />
        </Section>

        <Section title="Section 11: Limitation of Liability">
          <BulletList items={[
            "Bachelor Food tries hard to provide information on its website and app that is both correct and free of mistakes.",
            "We cannot promise that the platform will always function seamlessly or be free from interruptions, errors, viruses, or malfunctions.",
            "By using our service, you accept that Bachelor Food bears no responsibility for content from third parties, external sites or apps, or for any food or drinks purchased via our platform.",
            "Our responsibility is capped at the amount you paid for the specific order or service in question.",
            "Bachelor Food will not be held liable for indirect losses, consequential damages, lost income or profits, data loss, or any property damage resulting from use of the platform or its services.",
            "This restriction does not extend to cases of personal injury or death that are a direct result of our established negligence.",
            "Bachelor Food cannot be held accountable for any delays or failures due to circumstances outside our reasonable control, such as natural disasters, warfare, riots, government orders, or third-party actions.",
            "We may deny service, suspend user accounts, or block access if there is evidence of fraud, voucher misuse, abuse of discount codes, or other suspicious conduct.",
            "Should widespread concerns about food quality arise, Bachelor Food will examine user feedback and implement corrective measures as needed.",
          ]} />
        </Section>

        <Section title="Section 12: General">
          <BulletList items={[
            "Prices are listed in INR and include all relevant taxes unless specified otherwise.",
            "Bachelor Food can delegate or assign portions of its services without giving advance notice.",
            "We may modify or revise these Terms and Conditions at any time without prior warning.",
            "Payment is required via authorized payment options when you place your order.",
            "Orders may be cancelled if payment is not finalized.",
            "Platform misuse by users is strictly prohibited, including operating automated tools or bots, harvesting personal data, engaging in scraping or hacking, and abusing vouchers, promotional offers, or discount codes.",
            "Registered users may get promotional messages, emails, notifications, and updates about offers and services from Bachelor Food.",
            "The Terms and Conditions, along with the Privacy Policy, form the entire agreement between Bachelor Food and the user.",
            "If any section of these Terms and Conditions is deemed unenforceable or invalid, the rest will remain in effect.",
            "These Terms and Conditions are governed by and interpreted under the laws of India. Both parties agree to the jurisdiction of Indian courts.",
            "All communications, correspondence, and transactions will be carried out in English and also other languages if added on the page.",
          ]} />
        </Section>

        {/* Contact footer */}
        <div className="bg-[#1b1c1c] text-white rounded-3xl p-6 md:p-8 space-y-3">
          <h3 className="text-base font-bold">Contact Bachelor Food</h3>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="mailto:info.bachelorfood@gmail.com" className="flex items-center gap-2 text-white/70 hover:text-[#ff8c33] transition-colors">
              <span className="material-symbols-outlined text-base">mail</span>
              info.bachelorfood@gmail.com
            </a>
            <a href="tel:8000007100" className="flex items-center gap-2 text-white/70 hover:text-[#ff8c33] transition-colors">
              <span className="material-symbols-outlined text-base">call</span>
              8000007100
            </a>
          </div>
          <p className="text-xs text-white/30 pt-2 border-t border-white/10">
            © 2025 Bachelor Food — Infixhi Tech Innovations Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

/* ── Helper sub-components ── */

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white rounded-3xl p-6 md:p-8 soft-shadow border border-[#f0eded] space-y-4">
    <h2 className="text-lg font-extrabold text-[#1b1c1c] border-b border-[#f0eded] pb-3">{title}</h2>
    <div className="space-y-3 text-sm text-[#5a4136] leading-relaxed">{children}</div>
  </div>
);

const SubSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="space-y-2 mt-3">
    <h3 className="text-sm font-bold text-[#1b1c1c]">{title}</h3>
    {children}
  </div>
);

const BulletList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-2">
    {items.map((item, i) => (
      <li key={i} className="flex gap-2.5 items-start">
        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ff6a00] shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);
