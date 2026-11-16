import React, { useState } from 'react';
import { PROJECTS_LIST } from '../data/projectsData';
import { motion } from 'framer-motion';
import { Building2, MapPin, ArrowRight, Sparkles, Eye, ShieldCheck } from 'lucide-react';

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
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-none bg-[#1F1F1F] border border-[#2E2E2E] text-[#B69B65] text-xs font-mono uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-[#B69B65]" />
          <span>Interactive 3D Portfolio Grid</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F5F1E8] tracking-tight">
          Landmark <span className="text-[#B69B65]">Projects Portfolio</span>
        </h1>
        <div className="w-12 h-px bg-[#B69B65]/40 mx-auto" />
        <p className="text-[#A39F97] text-base font-light leading-relaxed">
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
                ? 'bg-[#B69B65] text-[#171717] border border-[#B69B65]'
                : 'bg-[#1F1F1F] text-[#A39F97] hover:text-[#F5F1E8] border border-[#2E2E2E] hover:border-[#B69B65]/40'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* ---------------- 3D MASONRY GRID OF PROJECT CARDS WITH 3D TILT ---------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => {
          const isZooming = zoomingId === project.id;
          return (
            <motion.div
              key={project.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleCardClick(project.id)}
              className={`group cursor-pointer rounded-none bg-[#1F1F1F] border border-[#2E2E2E] hover:border-[#B69B65]/50 overflow-hidden flex flex-col justify-between shadow-xl transition-all relative ${
                isZooming ? 'scale-105 z-50 opacity-90' : ''
              }`}
            >
              {/* Image Header with Badge */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F] via-transparent to-black/60" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-none bg-[#171717]/90 backdrop-blur-md border border-[#2E2E2E] text-[#F5F1E8] text-[10px] font-mono uppercase tracking-wider">
                    {project.status}
                  </span>
                  <span className="px-3 py-1 rounded-none bg-[#B69B65] text-[#171717] text-[10px] font-mono font-bold uppercase tracking-wider">
                    {project.badge}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#F5F1E8] group-hover:text-[#B69B65] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs text-[#B69B65] font-mono mt-0.5">{project.subtitle}</p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-1.5 text-xs text-[#A39F97] font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#B69B65]" />
                  <span>{project.location}</span>
                </div>

                <p className="text-xs text-[#A39F97] font-light leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Key Specs Bar */}
                <div className="pt-3 border-t border-[#2E2E2E] grid grid-cols-2 gap-2 text-[11px] text-[#A39F97]">
                  <div>
                    <span className="text-[#77736C] block text-[10px] uppercase font-mono">Configurations</span>
                    <span className="font-bold text-[#F5F1E8]">{project.config}</span>
                  </div>
                  <div>
                    <span className="text-[#77736C] block text-[10px] uppercase font-mono">Unit Size</span>
                    <span className="font-mono text-[#B69B65]">{project.size}</span>
                  </div>
                </div>
              </div>

              {/* Card Action Link */}
              <div className="p-6 pt-0">
                <div className="w-full py-3 rounded-none bg-[#171717] group-hover:bg-[#B69B65] group-hover:text-[#171717] text-[#B69B65] border border-[#2E2E2E] group-hover:border-[#B69B65] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2">
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
