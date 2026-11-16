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
import LazySection from '../components/LazySection';
import ScrollReveal from '../components/ScrollReveal';

export default function HomePage({ onShowToast, onNavigate }) {
  const [isDossierOpen, setIsDossierOpen] = useState(false);

  return (
    <div className="space-y-24">
      {/* 1. HERO SECTION with Lighting Mode & 3D Parallax */}
      <Hero onNavigate={onNavigate} onOpenDossier={() => setIsDossierOpen(true)} />

      {/* 2. Interactive Property Requirement Finder */}
      <LazySection minHeight="240px" placeholderText="Loading Property Finder...">
        <ScrollReveal>
          <RequirementFinder onShowToast={onShowToast} />
        </ScrollReveal>
      </LazySection>

      {/* 3. Landmark Projects Showcase (6 Verified Developments) */}
      <LazySection minHeight="600px" placeholderText="Loading Landmark Projects...">
        <ScrollReveal>
          <TopProjectsShowcase onShowToast={onShowToast} />
        </ScrollReveal>
      </LazySection>

      {/* 4. Architectural Amenity Matrix (Floor-by-Floor Blueprint) */}
      <LazySection minHeight="500px" placeholderText="Loading Amenity Blueprints...">
        <ScrollReveal>
          <AmenityMatrix />
        </ScrollReveal>
      </LazySection>

      {/* 5. Strategic Proximity & Travel Time Connectivity Matrix */}
      <LazySection minHeight="450px" placeholderText="Loading Transit Index...">
        <ScrollReveal>
          <ConnectivityMatrix />
        </ScrollReveal>
      </LazySection>

      {/* 6. Core Services & Advisory */}
      <LazySection minHeight="450px" placeholderText="Loading Advisory Services...">
        <ScrollReveal>
          <ServicesSection onShowToast={onShowToast} />
        </ScrollReveal>
      </LazySection>

      {/* 7. Ahmedabad Growth Corridors */}
      <LazySection minHeight="450px" placeholderText="Loading Corridor Matrix...">
        <ScrollReveal>
          <AhmedabadMarket />
        </ScrollReveal>
      </LazySection>

      {/* 8. Statistics & Engineering Benchmarks */}
      <LazySection minHeight="240px" placeholderText="Loading Benchmarks...">
        <ScrollReveal>
          <HighlightsStats />
        </ScrollReveal>
      </LazySection>

      {/* 9. Value Proposition & Standards */}
      <LazySection minHeight="450px" placeholderText="Loading Principles...">
        <ScrollReveal>
          <WhyChooseUs />
        </ScrollReveal>
      </LazySection>

      {/* 10. Process & How We Work */}
      <LazySection minHeight="400px" placeholderText="Loading Process...">
        <ScrollReveal>
          <HowWeWork />
        </ScrollReveal>
      </LazySection>

      {/* 11. Property Decision Wizard */}
      <LazySection minHeight="420px" placeholderText="Loading Decision Tool...">
        <ScrollReveal>
          <PropertyDecisionTool onShowToast={onShowToast} />
        </ScrollReveal>
      </LazySection>

      {/* 12. Featured Opportunities */}
      <LazySection minHeight="500px" placeholderText="Loading Opportunities...">
        <ScrollReveal>
          <FeaturedOpportunities onShowToast={onShowToast} />
        </ScrollReveal>
      </LazySection>

      {/* 13. Client Testimonials */}
      <LazySection minHeight="380px" placeholderText="Loading Testimonials...">
        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>
      </LazySection>

      {/* 14. FAQs */}
      <LazySection minHeight="350px" placeholderText="Loading Advisory Inquiries...">
        <ScrollReveal>
          <FaqAccordion />
        </ScrollReveal>
      </LazySection>

      {/* 15. Contact Section & Private Headquarters */}
      <LazySection minHeight="550px" placeholderText="Loading Headquarters Desk...">
        <ScrollReveal>
          <ContactSection onShowToast={onShowToast} />
        </ScrollReveal>
      </LazySection>

      {/* Confidential Project Dossier Modal */}
      <ConfidentialDossierModal
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
        onShowToast={onShowToast}
      />
    </div>
  );
}
