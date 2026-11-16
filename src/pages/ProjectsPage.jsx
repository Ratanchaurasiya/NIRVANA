import React, { useState } from 'react';
import { PROJECTS_LIST } from '../data/projectsData';
import { motion } from 'framer-motion';
import { Building2, MapPin, ArrowRight, Sparkles, Eye, ShieldCheck } from 'lucide-react';
import TypewriterTitle from '../components/TypewriterTitle';

export default function ProjectsPage({ onNavigate }) {
  const [zoomingId, setZoomingId] = useState(null);
  const [filterType, setFilterType] = useState('All');

  const handleCardClick = (id) => {
    setZoomingId(id);
    // Trigger seamless 3D camera zoom effect before routing to /projects/[id]
    setTimeout(() => {
      onNavigate(`/projects/${id}`);
    }, 400);
  };

  const filteredProjects = filterType === 'All'
    ? PROJECTS_LIST
    : PROJECTS_LIST.filter(p => p.type.toLowerCase().includes(filterType.toLowerCase()));

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <TypewriterTitle
          as="h1"
          className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#171717] tracking-tight block"
        >
          Landmark <span className="text-[#B69B65]">Projects Portfolio</span>
        </TypewriterTitle>
        <div className="w-12 h-px bg-[#B69B65]/40 mx-auto" />
        <p className="text-[#5C5852] text-base font-light leading-relaxed">
          Hover cards for architectural perspective • Click any card to launch full layout view
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {['All', 'Residential', 'Commercial', 'Villa'].map((type) => (
          <button
            key={type}
            onClick={() => setFilterType(type)}
            className={`px-5 py-2.5 rounded-none text-xs font-mono uppercase tracking-wider transition-all ${
              filterType === type
                ? 'bg-[#B69B65] text-white border border-[#B69B65]'
                : 'bg-white text-[#5C5852] hover:text-[#171717] border border-[#E6E2D8] hover:border-[#B69B65]/40'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* ---------------- 3D MASONRY GRID OF PROJECT CARDS WITH 3D TILT ---------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => {
          const isZooming = zoomingId === project.id;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
              whileHover={{ y: -6 }}
              onClick={() => handleCardClick(project.id)}
              className={`group cursor-pointer rounded-none bg-white border border-[#E6E2D8] hover:border-[#B69B65] overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all relative ${
                isZooming ? 'scale-105 z-50 opacity-90' : ''
              }`}
            >
              {/* Image Header with Badge */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/95 via-[#171717]/30 to-black/40" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur-md border border-[#E6E2D8] text-[#171717] text-[10px] font-sans font-semibold uppercase tracking-wider shadow-sm">
                    {project.status}
                  </span>
                  <span className="px-3 py-1 bg-[#B69B65] text-white text-[10px] font-sans font-bold uppercase tracking-wider shadow-sm">
                    {project.badge}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white drop-shadow-sm group-hover:text-[#B69B65] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs text-[#E6D5B8] font-sans tracking-wide mt-0.5">{project.subtitle}</p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-1.5 text-xs text-[#5C5852] font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#B69B65]" />
                  <span>{project.location}</span>
                </div>

                <p className="text-xs text-[#5C5852] font-light leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Key Specs Bar */}
                <div className="pt-3 border-t border-[#E6E2D8] grid grid-cols-2 gap-2 text-[11px] text-[#5C5852]">
                  <div>
                    <span className="text-[#77736C] block text-[10px] uppercase font-mono">Configurations</span>
                    <span className="font-bold text-[#171717]">{project.config}</span>
                  </div>
                  <div>
                    <span className="text-[#77736C] block text-[10px] uppercase font-mono">Unit Size</span>
                    <span className="font-mono text-[#B69B65]">{project.size}</span>
                  </div>
                </div>
              </div>

              {/* Card Action Link */}
              <div className="p-6 pt-0">
                <div className="w-full py-3 rounded-none bg-[#FAF9F6] group-hover:bg-[#B69B65] group-hover:text-[#171717] text-[#B69B65] border border-[#E6E2D8] group-hover:border-[#B69B65] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>Inspect Layout & Details</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>

    </div>
  );
}
