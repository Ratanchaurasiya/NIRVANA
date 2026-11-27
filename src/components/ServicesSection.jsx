import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  Home, Building2, MapPin, ListFilter, TrendingUp, Calendar, Scale, 
  ArrowRight, X, ChevronDown, ChevronUp, FileText, Globe
} from 'lucide-react';
import TypewriterTitle from './TypewriterTitle';

const SERVICES_LIST = [
  {
    num: "01",
    icon: Home,
    title: "Residential Development & Consulting",
    shortDesc: "Bespoke guidance for luxury residences, sky villas, and plotted developments.",
    fullDesc: "Our residential consulting service provides personalized assistance for buyers evaluating modern apartments, sky villas, standalone bungalows, or residential plots across Sola, Science City, Thaltej, and SG Highway. We evaluate floor planning, structural integrity, natural ventilation, and orientation.",
    features: ["BHK & Floorplan Review", "Developer Track Record Check", "Asset Valuation Analysis", "Neighborhood Infrastructure Study"]
  },
  {
    num: "02",
    icon: Building2,
    title: "Commercial Property Strategy",
    shortDesc: "Turnkey support for corporate offices and investment-grade commercial suites.",
    fullDesc: "We assist corporate firms, retail enterprises, and private investors in identifying high-demand commercial office suites, flagship retail spaces, and pre-leased assets across key corporate hubs.",
    features: ["Grade-A Office Shortlisting", "Main-Road Retail Showrooms", "Pre-Leased Commercial Units", "Parking & Logistics Assessment"]
  },
  {
    num: "03",
    icon: MapPin,
    title: "Corridor & Site Viability Evaluation",
    shortDesc: "In-depth location assessment focusing on high-growth infrastructure corridors.",
    fullDesc: "Detailed neighborhood analysis highlighting current connectivity, arterial roads, metro access, civic infrastructure, educational proximity, and commercial density across Gujarat's growth belts.",
    features: ["Micro-Market Growth Trends", "Connectivity & Arterial Roads", "Civic Infrastructure Review", "Future Urban Masterplan"]
  },
  {
    num: "04",
    icon: ListFilter,
    title: "Curated Asset Shortlisting",
    shortDesc: "Precision shortlisting aligned with capital and spatial preferences.",
    fullDesc: "We curate only those premier properties that match your specific capital allocation, spatial parameters, and operational horizon, filtering out non-conforming inventory.",
    features: ["Tailored Options Portfolio", "Budget & Timeline Alignment", "Floorplate & Efficiency Analysis", "Direct Verified Specifications"]
  },
  {
    num: "05",
    icon: TrendingUp,
    title: "Capital Appreciation Advisory",
    shortDesc: "Prudent evaluation of asset yields, rental demand, and liquidity.",
    fullDesc: "Objective investment perspective focusing on rental yields, micro-market liquidity, capital appreciation potential, and exit flexibility without speculative projections.",
    features: ["Prudent Yield Projections", "Tenant Demand Modeling", "Secondary Market Liquidity", "Risk-Mitigated Due Diligence"]
  },
  {
    num: "06",
    icon: Calendar,
    title: "Private Site Walkthroughs",
    shortDesc: "Coordination of dedicated on-site visits and structural reviews.",
    fullDesc: "We organize seamless on-site property walkthroughs structured around your itinerary, providing technical representation to inspect construction progress and surrounding context.",
    features: ["Executive Scheduling", "Guided Site Walkthroughs", "Construction Benchmark Review", "Independent Local Representation"]
  },
  {
    num: "07",
    icon: Scale,
    title: "Final Decision Matrix Support",
    shortDesc: "Comparative evaluation framework before contract finalization.",
    fullDesc: "Objective side-by-side matrix comparing shortlisted assets across location primacy, per-sq-ft value, maintenance frameworks, and title clarity to deliver absolute decision confidence.",
    features: ["Comparative Matrix Review", "Total Cost & Outlay Clarity", "Contract Alignment Support", "Unbiased Technical Perspective"]
  },
  {
    num: "08",
    icon: Globe,
    title: "NRI & Global Investor Advisory",
    shortDesc: "Tailored portfolio guidance for international investors acquiring assets in Gujarat.",
    fullDesc: "Bespoke representation for Non-Resident Indians and global investors seeking premier residential & commercial assets in Ahmedabad with high-resolution walkthroughs and local coordination.",
    features: ["Virtual Site Walkthroughs", "Remote Asset Selection", "Clear Title Due Diligence", "Long-term Asset Oversight"]
  },
  {
    num: "09",
    icon: FileText,
    title: "Regulatory & RERA Alignment",
    shortDesc: "Verification of project approvals, title clarity, and statutory compliance.",
    fullDesc: "Assistance in verifying project RERA registration status, clear land title documents, municipal sanction plans, and standard sale agreement terms prior to acquisition.",
    features: ["RERA Gujarat Verification", "Municipal Sanction Review", "Title Documentation Clarity", "Statutory Transparency Check"]
  }
];

const INITIAL_VISIBLE_COUNT = 3;

const ServicesSection = ({ onShowToast }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  useEffect(() => {
    if (!selectedService) return;
    const orig = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') setSelectedService(null); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = orig;
      window.removeEventListener('keydown', onKey);
    };
  }, [selectedService]);

  const isAllShown = visibleCount >= SERVICES_LIST.length;

  const handleToggleLoadMore = () => {
    if (isAllShown) {
      setVisibleCount(INITIAL_VISIBLE_COUNT);
    } else {
      setVisibleCount((prev) => Math.min(prev + 3, SERVICES_LIST.length));
    }
  };

  const displayedServices = SERVICES_LIST.slice(0, visibleCount);

  return (
    <section id="services" className="py-24 relative bg-[#F5F1E8] border-t border-[#DEDAD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <TypewriterTitle
            as="h2"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#171717] tracking-tight block"
          >
            Our <span className="text-[#B69B65]">Services</span>
          </TypewriterTitle>
          <div className="w-12 h-px bg-[#B69B65] mx-auto" />
          <p className="text-[#5C5852] text-sm sm:text-base font-light leading-relaxed">
            Professional real estate support customized for residential buyers, corporate occupiers, and long-term property investors in Gujarat.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedServices.map((service) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.num}
                className="group relative bg-white border border-[#E6E2D8] p-8 hover:border-[#B69B65]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon + Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-[#FAF9F6] border border-[#E6E2D8] flex items-center justify-center text-[#B69B65] transition-colors group-hover:border-[#B69B65]/40">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-serif font-bold text-[#77736C] group-hover:text-[#B69B65] transition-colors">
                      {service.num}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-lg font-bold font-serif text-[#171717] mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C5852] font-light leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Learn More Action Button */}
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#B69B65] hover:text-[#171717] transition-colors pt-4 border-t border-[#E6E2D8] cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Load More Button Container */}
        <div className="text-center space-y-3 pt-4">
          <button
            onClick={handleToggleLoadMore}
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#B69B65] text-white font-semibold text-xs uppercase tracking-[0.18em] hover:bg-[#A38854] transition-colors cursor-pointer"
          >
            <span>{isAllShown ? 'Show Less Services' : 'Load More Services'}</span>
            {isAllShown ? (
              <ChevronUp className="w-4 h-4 stroke-[2]" />
            ) : (
              <ChevronDown className="w-4 h-4 stroke-[2]" />
            )}
          </button>

          <p className="text-xs font-mono text-[#77736C]">
            Showing {displayedServices.length} of {SERVICES_LIST.length} Capabilities
          </p>
        </div>

      </div>

      {/* Learn More Modal */}
      {selectedService && typeof document !== 'undefined' && createPortal(
        <div
          className="modal-backdrop-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedService(null);
          }}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modal-dialog-container max-w-xl bg-white p-6 sm:p-8 border border-[#E6E2D8] shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 bg-[#FAF9F6] border border-[#E6E2D8] text-[#5C5852] hover:text-[#171717] hover:border-[#B69B65] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 border-b border-[#E6E2D8] pb-5 pr-10">
              <div className="w-12 h-12 bg-[#FAF9F6] border border-[#B69B65]/40 text-[#B69B65] flex items-center justify-center font-bold text-lg shrink-0">
                {selectedService.num}
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.22em] text-[#B69B65]">SERVICE BRIEF</span>
                <h3 className="text-xl font-serif font-bold text-[#171717] mt-0.5">{selectedService.title}</h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-[#4B4842] leading-relaxed font-light">
                {selectedService.fullDesc}
              </p>

              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B69B65]">Key Deliverables:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 bg-[#FAF9F6] border border-[#E6E2D8] text-xs text-[#5C5852]">
                      <span className="w-1.5 h-1.5 bg-[#B69B65]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="pt-4 border-t border-[#E6E2D8]">
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#B69B65] text-white font-semibold text-xs uppercase tracking-[0.18em] hover:bg-[#A38854] transition-colors"
              >
                <span>Enquire For This Capability</span>
              </a>
            </div>

          </div>
        </div>,
        document.getElementById('modal-root') || document.body
      )}

    </section>
  );
};

export default ServicesSection;
