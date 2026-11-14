import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Home, Building2, PhoneCall } from 'lucide-react';

const STATS_DATA = [
  {
    id: 1,
    icon: MapPin,
    title: "Ahmedabad Focus",
    subtitle: "Primary Market Specialization",
    countText: "100%",
    desc: "Dedicated exclusively to Ahmedabad's top prime growth corridors."
  },
  {
    id: 2,
    icon: Home,
    title: "Residential Range",
    subtitle: "Apartments, Villas & Plots",
    countText: "3 & 4 BHK",
    desc: "Sky residences, independent plots, and luxury housing schemes."
  },
  {
    id: 3,
    icon: Building2,
    title: "Commercial Hubs",
    subtitle: "Offices & Retail Units",
    countText: "Grade-A",
    desc: "Premium commercial space support and pre-leased assets."
  },
  {
    id: 4,
    icon: PhoneCall,
    title: "Direct Advisory",
    subtitle: "Phone & Email Support",
    countText: "6 Days/Wk",
    desc: "Monday to Saturday 10:00 AM – 7:00 PM direct access."
  }
];

const HighlightsStats = () => {
  return (
    <section className="py-20 relative bg-[#070D1E] border-y border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat) => {
            const IconComp = stat.icon;
            return (
              <div
                key={stat.id}
                className="glass-panel-gold rounded-3xl p-6 text-center hover:-translate-y-1 transition-all duration-300 border border-amber-500/30 flex flex-col justify-between"
              >
                <div className="w-12 h-12 rounded-2xl bg-gold-gradient text-navy-950 flex items-center justify-center mx-auto mb-4 font-bold shadow-lg">
                  <IconComp className="w-6 h-6 text-navy-950" />
                </div>
                <div className="space-y-1">
                  <span className="text-2xl sm:text-3xl font-serif font-extrabold text-gold-gradient block">
                    {stat.countText}
                  </span>
                  <h3 className="text-base font-bold text-white font-serif">{stat.title}</h3>
                  <p className="text-xs text-amber-300 font-mono tracking-wider">{stat.subtitle}</p>
                </div>
                <p className="text-xs text-slate-300 mt-4 pt-3 border-t border-slate-800 font-light">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HighlightsStats;
