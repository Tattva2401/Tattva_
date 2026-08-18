import React from 'react';
import { ERAS } from '../data/eras';
import type { EraId } from '../types/car';
import { Sparkles, Flag } from 'lucide-react';

interface InteractiveTimelineScrollerProps {
  selectedEra: EraId | 'all';
  onSelectEra: (era: EraId | 'all') => void;
}

export const InteractiveTimelineScroller: React.FC<InteractiveTimelineScrollerProps> = ({
  selectedEra,
  onSelectEra,
}) => {
  return (
    <div className="w-full bg-[#1A1815] text-[#F6F3EC] py-6 border-b border-hairline paper-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        
        {/* Header */}
        <div className="flex items-center justify-between font-mono-spec text-xs">
          <div className="flex items-center space-x-2 text-[#C5A059] uppercase tracking-widest font-bold">
            <Sparkles className="w-4 h-4" />
            <span>HISTORICAL MILESTONE SCROLLETTING & CHRONOLOGY TRACK (1886 — 2026)</span>
          </div>
          <span className="text-[#9E9689] hidden sm:inline">Click any milestone event pin to jump to era</span>
        </div>

        {/* Milestone Horizontal Track */}
        <div className="relative overflow-x-auto pb-4 pt-2 scrollbar-none">
          <div className="flex items-center space-x-6 min-w-[1100px]">
            
            {/* Start Pin */}
            <div className="flex-none flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-[#C5A059] mb-2" />
              <span className="font-mono-spec text-[10px] text-[#C5A059] font-bold">1886</span>
              <span className="font-archival text-xs text-[#E2DCCE]">Birth of Car</span>
            </div>

            {ERAS.map((era) => {
              const isSelected = selectedEra === era.id;
              return (
                <div
                  key={era.id}
                  onClick={() => onSelectEra(isSelected ? 'all' : era.id)}
                  className={`flex-none group cursor-pointer p-3 rounded-xs border transition-all duration-300 max-w-[200px] ${
                    isSelected
                      ? 'bg-[#C5A059] text-[#121110] border-[#C5A059] shadow-lg scale-102 font-semibold'
                      : 'bg-[#121110]/80 text-[#E8E3D8] border-[#38342F] hover:border-[#C5A059]/70 hover:bg-[#25221F]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`font-mono-spec text-[10px] font-bold ${isSelected ? 'text-[#121110]' : 'text-[#C5A059]'}`}>
                      {era.landmarkYear || era.startYear}
                    </span>
                    <Flag className={`w-3 h-3 ${isSelected ? 'text-[#121110]' : 'text-[#9E9689]'}`} />
                  </div>

                  <h4 className="font-archival text-xs font-bold leading-snug line-clamp-1">
                    {era.name}
                  </h4>

                  {era.landmarkEvent && (
                    <p className={`text-[10px] font-sans-ui mt-1 line-clamp-2 italic ${isSelected ? 'text-[#121110]/90' : 'text-[#A0988C]'}`}>
                      "{era.landmarkEvent}"
                    </p>
                  )}
                </div>
              );
            })}

          </div>
        </div>

      </div>
    </div>
  );
};
