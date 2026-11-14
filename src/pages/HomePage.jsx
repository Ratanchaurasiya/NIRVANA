import React, { useState } from 'react';
import Hero from '../components/Hero';
import RequirementFinder from '../components/RequirementFinder';
import TopProjectsShowcase from '../components/TopProjectsShowcase';
import AmenityMatrix from '../components/AmenityMatrix';
import ConnectivityMatrix from '../components/ConnectivityMatrix';
import ServicesSection from '../components/ServicesSection';
import AhmedabadMarket from '../components/AhmedabadMarket';
import HighlightsStats from '../components/HighlightsStats';
import WhyChooseUs from '../components/WhyChooseUs';
import HowWeWork from '../components/HowWeWork';
import PropertyDecisionTool from '../components/PropertyDecisionTool';
import FeaturedOpportunities from '../components/FeaturedOpportunities';
import Testimonials from '../components/Testimonials';
import FaqAccordion from '../components/FaqAccordion';
import ContactSection from '../components/ContactSection';
import ConfidentialDossierModal from '../components/ConfidentialDossierModal';

export default function HomePage({ onShowToast, onNavigate }) {
  const [isDossierOpen, setIsDossierOpen] = useState(false);

  return (
    <div className="space-y-24">
      {/* 1. HERO SECTION with Lighting Mode & 3D Parallax */}
      <Hero onNavigate={onNavigate} onOpenDossier={() => setIsDossierOpen(true)} />

      {/* 2. Interactive Property Requirement Finder */}
      <RequirementFinder onShowToast={onShowToast} />

      {/* 3. Landmark Projects Showcase (6 Verified Developments) */}
      <TopProjectsShowcase onShowToast={onShowToast} />

      {/* 4. Architectural Amenity Matrix (Floor-by-Floor Blueprint) */}
      <AmenityMatrix />

      {/* 5. Strategic Proximity & Travel Time Connectivity Matrix */}
      <ConnectivityMatrix />

      {/* 6. Core Services & Advisory */}
      <ServicesSection onShowToast={onShowToast} />

      {/* 7. Ahmedabad Growth Corridors */}
      <AhmedabadMarket />

      {/* 8. Statistics & Engineering Benchmarks */}
      <HighlightsStats />

      {/* 9. Value Proposition & Standards */}
      <WhyChooseUs />

      {/* 10. Process & How We Work */}
      <HowWeWork />

      {/* 11. Property Decision Wizard */}
      <PropertyDecisionTool onShowToast={onShowToast} />

      {/* 12. Featured Opportunities */}
      <FeaturedOpportunities onShowToast={onShowToast} />

      {/* 13. Client Testimonials */}
      <Testimonials />

      {/* 14. FAQs */}
      <FaqAccordion />

      {/* 15. Contact Section & Private Headquarters */}
      <ContactSection onShowToast={onShowToast} />

      {/* Confidential Project Dossier Modal */}
      <ConfidentialDossierModal
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
        onShowToast={onShowToast}
      />
    </div>
  );
}
