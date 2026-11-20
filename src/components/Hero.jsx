import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ShieldCheck, Award, Building2, CheckCircle2 } from 'lucide-react';
import Hero3DBuilding from './3d/Hero3DBuilding';
import TypewriterTitle from './TypewriterTitle';
import ScrollReveal from './ScrollReveal';
import AnimatedCounter from './AnimatedCounter';

const EASE = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const Hero = ({ onNavigate }) => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <div ref={heroRef} className="w-full bg-[#FAF9F6] overflow-hidden pt-28 sm:pt-36 pb-16 relative">
      {/* Ambient champagne glows */}
      <div className="ambient-glow w-[520px] h-[520px] -top-24 -right-32" />
      <div className="ambient-glow w-[380px] h-[380px] top-[55%] -left-40" style={{ animationDelay: '-6s' }} />
      <section className="relative w-full flex flex-col justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 space-y-12">
        
        {/* 1. Subtle Architectural Monogram Header */}
        <div className="relative flex items-center justify-between gap-4 w-full pb-3.5 text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-[#77736C]">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 bg-[#B69B65]" />
            <span className="text-[#171717]">Architectural Engineering & Property Holdings</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[#77736C]">
            <span>Ahmedabad</span>
            <span className="text-[#DEDAD2]">•</span>
            <span>Gujarat</span>
            <span className="text-[#DEDAD2]">•</span>
            <span>India</span>
          </div>
          <span className="line-draw absolute left-0 right-0 bottom-0 h-px bg-[#DEDAD2]" />
        </div>

        {/* 2. Main Hero Editorial Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
          
          {/* Left Column: Brand Typography, Tagline, Editorial Description, CTAs & Metrics */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            style={{ y: textY }}
            className="lg:col-span-6 xl:col-span-7 flex flex-col items-start space-y-6 text-left"
          >
            
            <motion.div variants={item} className="space-y-3">
              <TypewriterTitle
                as="h1"
                className="text-4xl sm:text-5xl lg:text-6xl font-cinzel font-semibold text-[#171717] tracking-[0.12em] uppercase leading-[1.08] block"
                delay={180}
              >
                NIRVANA GROUP
              </TypewriterTitle>
              <p className="text-xl sm:text-2xl font-editorial italic text-[#B69B65] tracking-wide pt-0.5">
                "Building Dreams. Creating Landmarks."
              </p>
            </motion.div>

            {/* Architectural Sub-Manifesto */}
            <motion.p variants={item} className="text-sm sm:text-base text-[#3D3A35] font-light leading-relaxed max-w-xl">
              Delivering state-of-the-art corporate offices, prime commercial retail suites, and curated luxury residential estates across Science City, Sola, and SG Highway growth corridors in Gujarat.
            </motion.p>

            {/* Action Buttons: Clean Architectural Geometry with Luxury Hover */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-4 pt-1 w-full sm:w-auto">
              <button
                onClick={() => onNavigate && onNavigate('/projects')}
                className="group relative overflow-hidden w-full sm:w-auto px-8 py-3.5 bg-[#B69B65] text-white text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#A38854] transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-sm hover:shadow-md hover:translate-y-[-1px]"
              >
                <span>Explore Developments</span>
                <ArrowRight className="w-4 h-4 stroke-[2] group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Architectural Credibility Matrix Strip with Animated Numbers */}
            <motion.div variants={item} className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-[#DEDAD2]">
              <div className="p-3 bg-white border border-[#DEDAD2] space-y-0.5 hover:border-[#B69B65] transition-colors">
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#B69B65] block">Portfolio</span>
                <span className="text-base font-serif font-bold text-[#171717] block">
                  <AnimatedCounter value="6 Projects" />
                </span>
                <span className="text-[10px] text-[#77736C] block">Ahmedabad</span>
              </div>

              <div className="p-3 bg-white border border-[#DEDAD2] space-y-0.5 hover:border-[#B69B65] transition-colors">
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#B69B65] block">Statutory</span>
                <span className="text-base font-serif font-bold text-[#171717] block">
                  <AnimatedCounter value="100%" /> RERA
                </span>
                <span className="text-[10px] text-[#77736C] block">Clear Titles</span>
              </div>

              <div className="p-3 bg-white border border-[#DEDAD2] space-y-0.5 hover:border-[#B69B65] transition-colors">
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#B69B65] block">Engineering</span>
                <span className="text-base font-serif font-bold text-[#171717] block">BIS Zone 5</span>
                <span className="text-[10px] text-[#77736C] block">Seismic Core</span>
              </div>

              <div className="p-3 bg-white border border-[#DEDAD2] space-y-0.5 hover:border-[#B69B65] transition-colors">
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#B69B65] block">Standards</span>
                <span className="text-base font-serif font-bold text-[#171717] block">Grade-A</span>
                <span className="text-[10px] text-[#77736C] block">Commercial</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Architectural Exhibition Landmark Frame */}
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)', scale: 1.04 }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)', scale: 1 }}
            transition={{ duration: 1.4, ease: EASE, delay: 0.35 }}
            style={{ y: imageY }}
            className="lg:col-span-6 xl:col-span-5 w-full"
          >
            <Hero3DBuilding />
          </motion.div>

        </div>

        {/* 3. Bottom Architectural Benchmarks Bar */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-8 border-t border-[#DEDAD2] w-full"
        >
          <motion.div variants={item} whileHover={{ y: -4 }} className="p-6 bg-white border border-[#DEDAD2] shadow-sm space-y-2 hover:border-[#B69B65] hover:shadow-lg transition-[border-color,box-shadow] duration-500">
            <span className="text-[10px] font-sans font-bold text-[#B69B65] uppercase tracking-[0.22em] block">Pillar I • Sustainability</span>
            <p className="text-base text-[#171717] font-serif font-bold tracking-tight">Zero Carbon & Solar Micro-Grids</p>
            <p className="text-xs text-[#5C5852] font-light leading-relaxed">Integrated rainwater harvesting and IGBC gold-standard environmental envelopes.</p>
          </motion.div>

          <motion.div variants={item} whileHover={{ y: -4 }} className="p-6 bg-white border border-[#DEDAD2] shadow-sm space-y-2 hover:border-[#B69B65] hover:shadow-lg transition-[border-color,box-shadow] duration-500">
            <span className="text-[10px] font-sans font-bold text-[#B69B65] uppercase tracking-[0.22em] block">Pillar II • Structural Core</span>
            <p className="text-base text-[#171717] font-serif font-bold tracking-tight">BIS Zone 5 Seismic Exoskeleton</p>
            <p className="text-xs text-[#5C5852] font-light leading-relaxed">Monolithic high-tensile steel rebar foundation engineered for multi-generational longevity.</p>
          </motion.div>

          <motion.div variants={item} whileHover={{ y: -4 }} className="p-6 bg-white border border-[#DEDAD2] shadow-sm space-y-2 hover:border-[#B69B65] hover:shadow-lg transition-[border-color,box-shadow] duration-500">
            <span className="text-[10px] font-sans font-bold text-[#B69B65] uppercase tracking-[0.22em] block">Pillar III • Strategic Belts</span>
            <p className="text-base text-[#171717] font-serif font-bold tracking-tight">Gujarat Arterial Corridors</p>
            <p className="text-xs text-[#5C5852] font-light leading-relaxed">Prime positions spanning Science City Road, Sola, and SG Highway arterial expressways.</p>
          </motion.div>
        </motion.div>

      </section>
    </div>
  );
};

export default Hero;
