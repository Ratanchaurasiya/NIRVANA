import React, { useState } from 'react';
import { 
  Home, Building2, MapPin, ListFilter, TrendingUp, Calendar, Scale, 
  ArrowRight, X, Phone, MessageSquare, ChevronDown, ChevronUp, FileText, Globe
} from 'lucide-react';

const SERVICES_LIST = [
  {
    num: "01",
    icon: Home,
    title: "Residential Consulting",
    shortDesc: "Guidance for apartments, villas, and plotted developments.",
    fullDesc: "Our residential consulting service provides personalized assistance for buyers looking for modern 2, 3, 4 & 5 BHK apartments, sky villas, standalone bungalows, or residential plots across Sola, Science City, Thaltej, and SG Highway. We evaluate floor planning, builder credibility, natural ventilation, and Vastu orientation.",
    features: ["BHK & Floorplan Shortlisting", "Builder Credibility Check", "Price & Area Valuation", "Neighborhood Infrastructure Review"]
  },
  {
    num: "02",
    icon: Building2,
    title: "Commercial Property Support",
    shortDesc: "Assistance for offices and investment-focused commercial spaces.",
    fullDesc: "We assist corporate firms, retail businesses, and private investors in identifying high-demand commercial office spaces, retail showrooms, and pre-leased assets in iconic corporate hubs like The Capital, Sola, and Science City Road.",
    features: ["Corporate Office Shortlisting", "Main-Road Retail Showrooms", "Pre-Leased Commercial Units", "Parking & Elevator Assessment"]
  },
  {
    num: "03",
    icon: MapPin,
    title: "Site & Area Evaluation",
    shortDesc: "Location review with focus on growth corridors in Ahmedabad.",
    fullDesc: "Detailed neighborhood analysis highlighting current connectivity, upcoming flyovers, metro access, civic amenities, school proximity, and surrounding commercial density across key growth belts.",
    features: ["Micro-Market Growth Trends", "Connectivity & Metro Access", "Civic Infrastructure Review", "Future Development Outlook"]
  },
  {
    num: "04",
    icon: ListFilter,
    title: "Property Shortlisting",
    shortDesc: "Helping clients narrow down suitable property options.",
    fullDesc: "Instead of wasting time looking at hundreds of random options, we filter and curate only those properties that match your specific budget range, timeline, and spatial preferences.",
    features: ["Tailored Options Curation", "Budget & Timeline Alignment", "Floorplate & Orientation Filter", "Verified Property Details"]
  },
  {
    num: "05",
    icon: TrendingUp,
    title: "Investment Guidance",
    shortDesc: "Practical evaluation of property potential and location.",
    fullDesc: "Practical investment perspective focusing on rental demand, micro-market liquidity, capital growth potential, and exit flexibility without unrealistic or inflated projections.",
    features: ["Practical Capital Growth Outlook", "Rental Demand Assessment", "Micro-Market Liquidity Analysis", "Risk-Mitigated Evaluation"]
  },
  {
    num: "06",
    icon: Calendar,
    title: "Site Visit Coordination",
    shortDesc: "Support for planning and coordinating property visits.",
    fullDesc: "We organize seamless on-site property walkthroughs around your schedule, ensuring you have dedicated support on-site to inspect construction quality and neighborhood environment.",
    features: ["Flexible Appointment Booking", "Guided Site Walkthroughs", "Construction Progress Inspection", "Direct Local Representation"]
  },
  {
    num: "07",
    icon: Scale,
    title: "Final Decision Support",
    shortDesc: "Clear comparison and coordination before the final decision.",
    fullDesc: "Objective side-by-side matrix comparing shortlisted options across location advantage, price per square foot, maintenance terms, and documentation clarity to give you 100% decision confidence.",
    features: ["Side-by-Side Comparison Matrix", "Total Cost Breakdown Review", "Documentation Alignment Support", "Unbiased Final Perspective"]
  },
  {
    num: "08",
    icon: Globe,
    title: "NRI Real Estate Advisory",
    shortDesc: "Dedicated guidance for Non-Resident Indians investing in Ahmedabad.",
    fullDesc: "Tailored assistance for NRIs seeking high-growth residential & commercial property assets in Ahmedabad with complete virtual walkthroughs and trusted local coordination.",
    features: ["Virtual Site Walkthroughs", "Remote Property Selection", "Clear Title Guidance", "Portfolio Management Support"]
  },
  {
    num: "09",
    icon: FileText,
    title: "Legal & RERA Alignment Support",
    shortDesc: "Checking project approvals, title clarity, and builder track record.",
    fullDesc: "Assistance in verifying project RERA registration status, land title clarity, sanction plans, and standard sale agreement terms before booking.",
    features: ["RERA Registration Check", "Sanction Plan Verification", "Title Clarity Assessment", "Document Transparency Review"]
  }
];

const INITIAL_VISIBLE_COUNT = 3;

const ServicesSection = ({ onShowToast }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

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
    <section id="services" className="py-24 relative bg-[#070D1E] overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest">
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Our <span className="text-gold-gradient">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto rounded-full" />
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            End-to-end professional real estate support customized for residential buyers, corporate occupiers, and long-term property investors in Ahmedabad.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.num}
                className="group relative rounded-3xl bg-[#0B132B]/90 border border-slate-800 p-8 hover:border-amber-500/40 glass-card-hover flex flex-col justify-between overflow-hidden shadow-xl animate-fadeIn"
              >
                {/* Subtle top glow accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  {/* Top Bar: Icon + Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#111D3E] border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-gold-gradient group-hover:text-navy-950 transition-all duration-500 shadow-md">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <span className="text-3xl font-serif font-extrabold text-slate-700 group-hover:text-amber-400/80 transition-colors">
                      {service.num}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold font-serif text-white group-hover:text-amber-300 transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                    "{service.shortDesc}"
                  </p>
                </div>

                {/* Learn More Action Button */}
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-200 transition-colors pt-4 border-t border-slate-800/80 group-hover:border-amber-500/30"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Interactive Load More Button Container */}
        <div className="mt-14 text-center space-y-3">
          <button
            onClick={handleToggleLoadMore}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-navy-950 bg-gold-gradient shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:shadow-[0_0_35px_rgba(212,175,55,0.65)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            <span>{isAllShown ? 'Show Less Services' : 'Load More Services'}</span>
            {isAllShown ? (
              <ChevronUp className="w-4 h-4 text-navy-950 group-hover:-translate-y-0.5 transition-transform" />
            ) : (
              <ChevronDown className="w-4 h-4 text-navy-950 group-hover:translate-y-0.5 transition-transform" />
            )}
          </button>

          <p className="text-xs font-mono text-amber-400/80">
            Showing {displayedServices.length} of {SERVICES_LIST.length} Capabilities
          </p>
        </div>

      </div>

      {/* Learn More Interactive Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-fadeIn">
          <div className="glass-panel rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-amber-500/40 shadow-2xl relative space-y-6">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 border-b border-slate-800 pb-5">
              <div className="w-12 h-12 rounded-2xl bg-gold-gradient text-navy-950 flex items-center justify-center font-bold text-xl shrink-0">
                {selectedService.num}
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400">SERVICE DETAILS</span>
                <h3 className="text-2xl font-serif font-bold text-white">{selectedService.title}</h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="space-y-4">
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {selectedService.fullDesc}
              </p>

              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">Key Deliverables:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-[#070D1E] border border-slate-800 text-xs text-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer CTAs */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gold-gradient text-navy-950 font-bold text-xs uppercase tracking-wider shadow-lg"
              >
                <span>Enquire For This Service</span>
              </a>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default ServicesSection;
