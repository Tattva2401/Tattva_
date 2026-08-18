import React from 'react';
import type { Car } from '../types/car';
import { CARS } from '../data/carsData';
import { Calendar, ShieldCheck, Award } from 'lucide-react';

interface AboutViewProps {
  onSelectCar: (car: Car) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onSelectCar }) => {
  // "On this day" historical feature selector
  const todayIndex = new Date().getDate() % CARS.length;
  const featuredTodayCar = CARS[todayIndex] || CARS[0];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 animate-fade-in">
      
      {/* Editorial Header */}
      <div className="border-b border-hairline pb-8 space-y-3 text-center sm:text-left">
        <span className="font-mono-spec text-xs text-[#C5A059] tracking-widest uppercase">
          CURATORIAL PHILOSOPHY & MASTHEAD
        </span>
        <h2 className="font-archival text-3xl sm:text-4xl text-[#1C1A17] dark:text-[#E8E3D8] font-bold tracking-wide">
          The Criteria of Iconic Status
        </h2>
        <p className="font-editorial-serif text-lg italic text-[#615B52] dark:text-[#A0988C] max-w-3xl">
          "Every car featured in this gallery earned its place through a clear, stated reason for iconic status — not just popularity, market valuation, or fleeting trend."
        </p>
      </div>

      {/* "On This Day" Historical Feature Box */}
      <div className="bg-[#1A1815] text-[#F6F3EC] p-6 sm:p-8 rounded-xs border border-[#C5A059]/40 shadow-md space-y-4">
        <div className="flex items-center space-x-2 text-xs font-mono-spec tracking-widest text-[#C5A059] uppercase">
          <Calendar className="w-4 h-4 text-[#C5A059]" />
          <span>ON THIS DAY IN AUTOMOTIVE HISTORY</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono-spec text-[#C5A059] uppercase">
              FEATURED EXHIBIT • {featuredTodayCar.years}
            </span>
            <h3 className="font-editorial-serif text-2xl sm:text-3xl font-medium text-[#FAF8F5]">
              {featuredTodayCar.make} <span className="italic font-light text-[#E2DCCE]">{featuredTodayCar.model}</span>
            </h3>
            <p className="font-sans-ui text-sm text-[#D4CDC0] font-light">
              {featuredTodayCar.editorialHook}
            </p>
          </div>

          <button
            onClick={() => onSelectCar(featuredTodayCar)}
            className="flex-none px-4 py-2.5 bg-[#C5A059] hover:bg-[#D4AF66] text-[#121110] font-mono-spec text-xs font-semibold tracking-wider uppercase transition-colors"
          >
            Examine Milestone Placard
          </button>
        </div>
      </div>

      {/* Core Principles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="space-y-3 bg-[#EAE5D9]/40 dark:bg-[#1C1A17] p-6 border border-hairline rounded-xs">
          <div className="flex items-center space-x-2 text-sm font-archival font-bold text-[#C5A059]">
            <ShieldCheck className="w-4 h-4" />
            <span>1. RESTRAINT & OBJECTIVITY</span>
          </div>
          <p className="font-sans-ui text-sm text-[#524B42] dark:text-[#A8A092] leading-relaxed font-light">
            The design never competes with the cars. Photography and typography carry the experience; UI chrome almost disappears. Superlatives like "legendary" are earned strictly through documented evidence.
          </p>
        </div>

        <div className="space-y-3 bg-[#EAE5D9]/40 dark:bg-[#1C1A17] p-6 border border-hairline rounded-xs">
          <div className="flex items-center space-x-2 text-sm font-archival font-bold text-[#C5A059]">
            <Award className="w-4 h-4" />
            <span>2. CROSS-CUTTING SIGNIFICANCE</span>
          </div>
          <p className="font-sans-ui text-sm text-[#524B42] dark:text-[#A8A092] leading-relaxed font-light">
            Cars are organized chronologically across 11 Eras and tagged across 8 Significance Categories (Engineering Milestones, Motorsport Heritage, Speed Records, Design Landmarks, Cultural Impact, Rarity).
          </p>
        </div>

      </div>

      {/* Masthead Credits */}
      <div className="pt-8 border-t border-hairline space-y-4">
        <h3 className="font-archival text-xs tracking-widest text-[#7A7367] uppercase font-bold">
          ARCHIVAL MASTHEAD & CURATORIAL CREDITS
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono-spec text-xs">
          <div className="p-4 bg-[#F6F3EC] dark:bg-[#181614] border border-hairline">
            <span className="text-[#7A7367] block text-[10px]">CURATORIAL DIRECTION</span>
            <span className="font-bold text-[#1C1A17] dark:text-[#E8E3D8]">Automotive Heritage Trust</span>
          </div>

          <div className="p-4 bg-[#F6F3EC] dark:bg-[#181614] border border-hairline">
            <span className="text-[#7A7367] block text-[10px]">TYPOGRAPHY & DESIGN</span>
            <span className="font-bold text-[#1C1A17] dark:text-[#E8E3D8]">Vintage Print Archive</span>
          </div>

          <div className="p-4 bg-[#F6F3EC] dark:bg-[#181614] border border-hairline">
            <span className="text-[#7A7367] block text-[10px]">DATA SCHEMA VERSION</span>
            <span className="font-bold text-[#C5A059]">v1.4 (Phase 1 Deep Curation)</span>
          </div>
        </div>
      </div>

    </div>
  );
};
