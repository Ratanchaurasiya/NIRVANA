import React, { useState } from 'react';
import { FileText, ArrowLeft, ShieldCheck, Mail, Phone, Scale } from 'lucide-react';
import TypewriterTitle from '../components/TypewriterTitle';

const TERMS_SECTIONS = [
  { id: 'general-use', title: '1. General Terms of Use' },
  { id: 'disclaimer', title: '2. Warranty & Accuracy Disclaimer' },
  { id: 'user-risk', title: '3. Independent Due Diligence' },
  { id: 'intellectual-property', title: '4. Copyright & Brand Assets' },
  { id: 'third-party-links', title: '5. External Links & References' },
  { id: 'jurisdiction', title: '6. Governing Law & Jurisdiction' },
  { id: 'communications-consent', title: '7. Multi-Channel Communications' }
];

export default function TermsPage({ onNavigate }) {
  const [activeSection, setActiveSection] = useState('general-use');

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
          User Agreement • Terms of Service
        </span>
      </div>

      {/* 2. Executive Page Banner */}
      <div className="bg-[#FAF9F6] border border-[#DEDAD2] p-8 sm:p-12 relative overflow-hidden">
        <div className="max-w-3xl space-y-3">
          <TypewriterTitle
            as="h1"
            className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-bold text-[#171717] tracking-tight block"
          >
            Terms & Conditions
          </TypewriterTitle>
          <p className="text-sm sm:text-base text-[#5C5852] font-light leading-relaxed">
            Please read these terms and conditions carefully before utilizing the Nirvana Builders digital platform, scheduling site walkthroughs, or downloading official architectural dossiers.
          </p>
        </div>
      </div>

      {/* 3. Two-Column Corporate Dossier Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Sticky Index Navigation & Corporate Credentials */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
          
          <div className="bg-white border border-[#DEDAD2] p-6 space-y-4 shadow-sm">
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.22em] text-[#B69B65] block border-b border-[#DEDAD2] pb-2">
              TERMS SECTIONS
            </span>
            
            <nav className="space-y-1.5">
              {TERMS_SECTIONS.map((sec) => (
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

          {/* Legal Office Contact Card */}
          <div className="bg-[#FAF9F6] border border-[#DEDAD2] p-6 space-y-3">
            <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#77736C] block">
              Corporate Legal Desk
            </span>
            <p className="text-xs text-[#5C5852] leading-relaxed">
              For legal inquiries regarding ownership agreements, RERA disclosures, or title clearances:
            </p>
            <div className="space-y-2 pt-1 text-xs">
              <a href="mailto:info@nirvanabuilders.in" className="flex items-center gap-2 text-[#171717] hover:text-[#B69B65] transition-colors truncate">
                <Mail className="w-3.5 h-3.5 text-[#B69B65]" />
                <span className="truncate">info@nirvanabuilders.in</span>
              </a>
              <a href="tel:8128266969" className="flex items-center gap-2 text-[#171717] hover:text-[#B69B65] transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#B69B65]" />
                <span>+91 81282 66969</span>
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Complete Legal Clauses */}
        <div className="lg:col-span-8 bg-white border border-[#DEDAD2] p-8 sm:p-12 shadow-sm space-y-10 text-xs sm:text-sm text-[#3D3A35] leading-relaxed font-light">
          
          <div className="p-4 bg-[#FAF9F6] border border-[#DEDAD2] text-xs text-[#5C5852] font-sans space-y-1">
            <p>
              By accessing and utilizing this digital platform, you acknowledge and agree to comply with and be bound by the following Terms & Conditions, which together with our Privacy Policy govern Nirvana Builders' relationship with you.
            </p>
            <p className="text-[#B69B65] font-semibold pt-1">
              Entity Definition: "Nirvana Builders", "us", or "we" refers to the registered corporate developer and holdings group based in Ahmedabad, Gujarat, India.
            </p>
          </div>

          {/* Clause 1 */}
          <section id="general-use" className="space-y-3 pt-2">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#171717]">
              1. General Terms of Platform Use
            </h2>
            <p>
              The content published across the pages of this website is for general orientation, portfolio review, and advisory shortlisting purposes only. Architectural elevations, renders, and project timelines are subject to statutory amendments and developer refinements in accordance with municipal sanction approvals.
            </p>
          </section>

          {/* Clause 2 */}
          <section id="disclaimer" className="space-y-3 pt-6 border-t border-[#DEDAD2]">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#171717]">
              2. Warranty & Accuracy Disclaimer
            </h2>
            <p>
              Neither Nirvana Builders nor any technical partner provides an unconditional warranty as to the exhaustive completeness or real-time inventory availability of units represented on this platform. Users are encouraged to execute physical site inspections and verify sanction files at our advisory boardroom.
            </p>
          </section>

          {/* Clause 3 */}
          <section id="user-risk" className="space-y-3 pt-6 border-t border-[#DEDAD2]">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#171717]">
              3. Independent Due Diligence & Capital Allocation
            </h2>
            <p>
              The utilization of any material or market guidance offered through this platform remains the considered decision of the client. Prospective buyers and corporate tenants retain full responsibility for verifying title deeds, municipal NOCs, and bank approval tie-ups prior to formal allotment.
            </p>
          </section>

          {/* Clause 4 */}
          <section id="intellectual-property" className="space-y-3 pt-6 border-t border-[#DEDAD2]">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#171717]">
              4. Copyright, Brand Marks & Intellectual Property
            </h2>
            <p>
              All architectural blueprints, photographs, 3D renderings, written content, logos, and UI layout frameworks presented on this platform are owned by or licensed to NIRVANA BUILDERS. Unauthorized reproduction or scraping for commercial distribution is strictly prohibited.
            </p>
          </section>

          {/* Clause 5 */}
          <section id="third-party-links" className="space-y-3 pt-6 border-t border-[#DEDAD2]">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#171717]">
              5. External References & Map Integrations
            </h2>
            <p>
              From time to time, this website integrates regional geographic maps, satellite views, or statutory regulatory references. Such integrations are provided solely for transit convenience and do not constitute external liability for third-party mapping accuracy.
            </p>
          </section>

          {/* Clause 6 */}
          <section id="jurisdiction" className="space-y-3 pt-6 border-t border-[#DEDAD2]">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#171717]">
              6. Governing Law & Competent Jurisdiction
            </h2>
            <p>
              Any disputes, claims, or contractual matters arising from the utilization of this website shall be governed by and construed in accordance with the substantive laws of the Union of India, subject to the exclusive jurisdiction of the competent courts in Ahmedabad, Gujarat.
            </p>
          </section>

          {/* Clause 7 */}
          <section id="communications-consent" className="space-y-3 pt-6 border-t border-[#DEDAD2]">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#171717]">
              7. Multi-Channel Advisory Communications
            </h2>
            <p>
              By submitting project inquiries or scheduling private site walkthroughs, you explicitly authorize our advisory concierge to connect with you via SMS, Email, WhatsApp, and voice communications to furnish certified brochures, floor plans, and inspection itineraries.
            </p>
          </section>

        </div>

      </div>

    </div>
  );
}
