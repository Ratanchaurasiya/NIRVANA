import React, { useState } from 'react';
import { ShieldCheck, Lock, ArrowLeft, FileText, CheckCircle2, Mail, Phone } from 'lucide-react';
import TypewriterTitle from '../components/TypewriterTitle';

const SECTIONS = [
  { id: 'non-disclosure', title: '1. Third Party Non-Disclosure' },
  { id: 'data-protection', title: '2. Data Protection & Consent' },
  { id: 'credentials', title: '3. User Credentials & Responsibilities' },
  { id: 'optional-info', title: '4. Optional Information Choice' },
  { id: 'communication', title: '5. User Communication & Cookies' },
  { id: 'compliance', title: '6. Law Enforcement Compliance' },
  { id: 'remarketing', title: '7. Authenticity & Display Remarketing' }
];

export default function PrivacyPolicyPage({ onNavigate }) {
  const [activeSection, setActiveSection] = useState('non-disclosure');

  return (
    <div className="pt-28 sm:pt-36 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* 1. Top Breadcrumb Navigation */}
      <div className="flex items-center justify-between border-b border-[#DEDAD2] pb-4">
        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-[0.18em] text-[#B69B65] hover:text-[#171717] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Home</span>
        </button>

        <span className="text-[11px] font-sans text-[#77736C] uppercase tracking-wider hidden sm:inline">
          Legal Framework • Version 2.4
        </span>
      </div>

      {/* 2. Executive Page Banner */}
      <div className="bg-[#FAF9F6] border border-[#DEDAD2] p-8 sm:p-12 relative overflow-hidden">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#DEDAD2] text-[#B69B65] text-[10px] font-sans font-bold uppercase tracking-[0.25em]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Corporate Governance</span>
          </div>
          <TypewriterTitle
            as="h1"
            className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-bold text-[#171717] tracking-tight"
          >
            Privacy Policy
          </TypewriterTitle>
          <p className="text-sm sm:text-base text-[#5C5852] font-light leading-relaxed">
            Nirvana Group is committed to upholding strict confidentiality, digital data protection, and transparent advisory standards across all investor and client communications.
          </p>
        </div>
      </div>

      {/* 3. Two-Column Corporate Dossier Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Sticky Index Navigation & Corporate Credentials */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
          
          <div className="bg-white border border-[#DEDAD2] p-6 space-y-4 shadow-sm">
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.22em] text-[#B69B65] block border-b border-[#DEDAD2] pb-2">
              DOCUMENT SECTIONS
            </span>
            
            <nav className="space-y-1.5">
              {SECTIONS.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={() => setActiveSection(sec.id)}
                  className={`block px-3 py-2 text-xs font-sans transition-colors cursor-pointer ${
                    activeSection === sec.id
                      ? 'bg-[#FAF9F6] border-l-2 border-[#B69B65] text-[#171717] font-semibold'
                      : 'text-[#5C5852] hover:text-[#171717] hover:bg-[#FAF9F6]'
                  }`}
                >
                  {sec.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Privacy Office Contact Card */}
          <div className="bg-[#FAF9F6] border border-[#DEDAD2] p-6 space-y-3">
            <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#77736C] block">
              Grievance & Privacy Desk
            </span>
            <p className="text-xs text-[#5C5852] leading-relaxed">
              For inquiries regarding personal data processing or to opt out of communications, contact our legal desk:
            </p>
            <div className="space-y-2 pt-1 text-xs">
              <a href="mailto:contact@nirvana.group" className="flex items-center gap-2 text-[#171717] hover:text-[#B69B65] transition-colors truncate">
                <Mail className="w-3.5 h-3.5 text-[#B69B65] shrink-0" />
                <span className="truncate">contact@nirvana.group</span>
              </a>
              <a href="tel:+917940007890" className="flex items-center gap-2 text-[#171717] hover:text-[#B69B65] transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#B69B65] shrink-0" />
                <span>+91 79 4000 7890</span>
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Complete Legal Clauses */}
        <div className="lg:col-span-8 bg-white border border-[#DEDAD2] p-8 sm:p-12 shadow-sm space-y-10 text-xs sm:text-sm text-[#3D3A35] leading-relaxed font-light">
          
          <div className="p-4 bg-[#FAF9F6] border border-[#DEDAD2] text-xs text-[#5C5852] font-sans">
            <strong className="text-[#171717] font-semibold">Statutory Preamble:</strong> This Privacy Policy is subject to the terms of the Master Site Policy (User Agreement) of the NIRVANA GROUP digital platform.
          </div>

          {/* Clause 1 */}
          <section id="non-disclosure" className="space-y-3 pt-2">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#171717]">
              1. Third Party Non-Disclosure Framework
            </h2>
            <p>
              The personal information provided by clients and investors to NIRVANA GROUP will not be shared, rented, or distributed to non-affiliated third parties without the prior explicit consent of the concerned user. Non-personally identifiable statistical summaries of a general demographic nature may be utilized internally for architectural portfolio planning.
            </p>
          </section>

          {/* Clause 2 */}
          <section id="data-protection" className="space-y-3 pt-6 border-t border-[#DEDAD2]">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#171717]">
              2. Data Protection, Storage & Consent
            </h2>
            <p>
              Rigorous administrative and digital safeguards are maintained to keep all client information safe and restricted. Any display or attribution of testimonials or client feedback on our platforms is performed strictly following written authorization.
            </p>
          </section>

          {/* Clause 3 */}
          <section id="credentials" className="space-y-3 pt-6 border-t border-[#DEDAD2]">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#171717]">
              3. User Credentials & Financial Transaction Disclaimer
            </h2>
            <p>
              Clients are solely responsible for maintaining the confidentiality of any access credentials, consultation portals, and personal transmission IDs. NIRVANA GROUP explicitly does not solicit banking passwords or debit/credit card CVV credentials over telephone or unencrypted channels.
            </p>
          </section>

          {/* Clause 4 */}
          <section id="optional-info" className="space-y-3 pt-6 border-t border-[#DEDAD2]">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#171717]">
              4. Optional Information Choice
            </h2>
            <p>
              Visitors retain complete autonomy to decline furnishing non-mandatory profile fields during portfolio brochure requests and site visit reservations.
            </p>
          </section>

          {/* Clause 5 */}
          <section id="communication" className="space-y-3 pt-6 border-t border-[#DEDAD2]">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#171717]">
              5. Communications & Cookie Preferences
            </h2>
            <p>
              We utilize client contact coordinates to respond to asset inquiries, share certified RERA documentation, coordinate scheduled site inspections, and deliver relevant architectural updates via SMS, Email, WhatsApp, and voice consultations.
            </p>
            <p className="mt-2">
              To enhance navigational speed, our web platform utilizes lightweight session cookies. Visitors may adjust individual browser settings to decline cookie storage without inhibiting core property viewing capabilities.
            </p>
          </section>

          {/* Clause 6 */}
          <section id="compliance" className="space-y-3 pt-6 border-t border-[#DEDAD2]">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#171717]">
              6. Regulatory & Law Enforcement Cooperation
            </h2>
            <p>
              All NIRVANA GROUP web properties operate in strict conformity with applicable Indian regulatory frameworks, including the Real Estate (Regulation and Development) Act (RERA) and the Information Technology Act. We cooperate fully with verified statutory authorities under lawful directives.
            </p>
          </section>

          {/* Clause 7 */}
          <section id="remarketing" className="space-y-3 pt-6 border-t border-[#DEDAD2]">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#171717]">
              7. Authenticity & Display Remarketing
            </h2>
            <p>
              NIRVANA GROUP undertakes exhaustive verification of all architectural benchmarks, unit sizes, and corridor specifications published on this platform. Users may opt out of third-party analytics remarketing through Google Ads Preferences at any time.
            </p>
          </section>

        </div>

      </div>

    </div>
  );
}
