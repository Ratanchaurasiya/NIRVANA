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
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Interactive 3D Portfolio Grid</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
          Landmark <span className="text-gold-gradient">Projects Portfolio</span>
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto rounded-full" />
        <p className="text-slate-300 text-base font-light leading-relaxed">
          Hover cards for 3D tilt perspective • Click any card to launch full 3D interactive layout view (`/projects/[id]`)
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {['All', 'Residential', 'Commercial', 'Villa'].map((type) => (
          <button
            key={type}
            onClick={() => setFilterType(type)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              filterType === type
                ? 'bg-gold-gradient text-navy-950 shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105'
                : 'bg-[#0B132B] text-slate-300 hover:text-white border border-slate-800'
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
              whileHover={{ rotateX: 6, rotateY: -6, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              onClick={() => handleCardClick(project.id)}
              className={`group cursor-pointer rounded-3xl bg-[#0B132B] border border-slate-800 hover:border-amber-500/50 glass-card-hover overflow-hidden flex flex-col justify-between shadow-2xl transition-all relative ${
                isZooming ? 'scale-125 z-50 opacity-90 blur-[1px]' : ''
              }`}
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            >
              {/* Image Header with Badge */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-black/40" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-navy-950/85 backdrop-blur-md border border-amber-500/40 text-amber-300 text-[10px] font-mono uppercase tracking-wider">
                    {project.status}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider border border-amber-500/30">
                    {project.badge}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs text-amber-400 font-mono mt-0.5">{project.subtitle}</p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{project.location}</span>
                </div>

                <p className="text-xs text-slate-300 font-light leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Key Specs Bar */}
                <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-mono">Configurations</span>
                    <span className="font-bold text-white">{project.config}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-mono">Unit Size</span>
                    <span className="font-mono text-amber-300">{project.size}</span>
                  </div>
                </div>
              </div>

              {/* Card Action Link */}
              <div className="p-6 pt-0">
                <div className="w-full py-3 rounded-xl bg-[#111D3E] group-hover:bg-gold-gradient group-hover:text-navy-950 text-amber-300 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>Inspect 3D Layout & Details</span>
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
