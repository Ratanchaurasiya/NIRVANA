import React, { lazy, useEffect } from 'react';
import Hero from '../components/Hero';
import RequirementFinder from '../components/RequirementFinder';
import LazySection from '../components/LazySection';
import ScrollReveal from '../components/ScrollReveal';

// Below-the-fold sections ship as separate chunks and load on approach
const AmenityMatrix = lazy(() => import('../components/AmenityMatrix'));
const ConnectivityMatrix = lazy(() => import('../components/ConnectivityMatrix'));
const ServicesSection = lazy(() => import('../components/ServicesSection'));
const AhmedabadMarket = lazy(() => import('../components/AhmedabadMarket'));
const HighlightsStats = lazy(() => import('../components/HighlightsStats'));
const WhyChooseUs = lazy(() => import('../components/WhyChooseUs'));
const HowWeWork = lazy(() => import('../components/HowWeWork'));
const PropertyDecisionTool = lazy(() => import('../components/PropertyDecisionTool'));
const FeaturedOpportunities = lazy(() => import('../components/FeaturedOpportunities'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const FaqAccordion = lazy(() => import('../components/FaqAccordion'));
const ContactSection = lazy(() => import('../components/ContactSection'));

// Warm the chunks once the browser is idle so sections appear instantly on scroll
const prefetchSections = () => {
  [
    () => import('../components/AmenityMatrix'),
    () => import('../components/ConnectivityMatrix'),
    () => import('../components/ServicesSection'),
    () => import('../components/AhmedabadMarket'),
    () => import('../components/HighlightsStats'),
    () => import('../components/WhyChooseUs'),
    () => import('../components/HowWeWork'),
    () => import('../components/PropertyDecisionTool'),
    () => import('../components/FeaturedOpportunities'),
    () => import('../components/Testimonials'),
    () => import('../components/FaqAccordion'),
    () => import('../components/ContactSection'),
  ].forEach((load, i) => setTimeout(load, i * 150));
};

export default function HomePage({ onShowToast, onNavigate }) {
  useEffect(() => {
    const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 1500));
    const id = idle(prefetchSections);
    return () => (window.cancelIdleCallback ? window.cancelIdleCallback(id) : clearTimeout(id));
  }, []);

  return (
    <div className="space-y-24 lg:space-y-32">
      {/* 1. HERO SECTION with Lighting Mode & 3D Parallax */}
      <Hero onNavigate={onNavigate} />

      {/* 2. Interactive Property Requirement Finder */}
      <LazySection minHeight="240px" placeholderText="Loading Property Finder...">
        <ScrollReveal>
          <RequirementFinder onShowToast={onShowToast} />
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
    </div>
  );
}
