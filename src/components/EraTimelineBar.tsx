import React from 'react';
import type { EraId } from '../types/car';
import { ERAS } from '../data/eras';
import { Calendar } from 'lucide-react';

interface EraTimelineBarProps {
  selectedEra: EraId | 'all';
  onSelectEra: (era: EraId | 'all') => void;
}

export const EraTimelineBar: React.FC<EraTimelineBarProps> = ({ selectedEra, onSelectEra }) => {
  return (
    <div className="w-full bg-[#EAE5D9]/40 dark:bg-[#161412] border-b border-hairline py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Label */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2 text-xs font-mono-spec tracking-widest text-[#7A7367] dark:text-[#9E9689] uppercase">
            <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>EXPLORE BY ERA (1886 — PRESENT)</span>
          </div>
          {selectedEra !== 'all' && (
            <button
              onClick={() => onSelectEra('all')}
              className="text-[11px] font-mono-spec text-[#C5A059] hover:underline uppercase"
            >
              Reset Timeline
            </button>
          )}
        </div>

        {/* Scrollable Horizontal Plaque Strip */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => onSelectEra('all')}
            className={`flex-none px-3.5 py-1.5 rounded-xs text-xs font-mono-spec uppercase tracking-wider transition-all duration-200 border ${
              selectedEra === 'all'
                ? 'bg-[#1A1815] text-[#C5A059] border-[#C5A059] shadow-xs'
                : 'bg-[#F6F3EC] dark:bg-[#201E1B] text-[#615B52] dark:text-[#A0988C] border-hairline hover:border-[#C5A059]/50'
            }`}
          >
            All Eras (1886–2026)
          </button>

          {ERAS.map((era) => {
            const isSelected = selectedEra === era.id;
            return (
              <button
                key={era.id}
                onClick={() => onSelectEra(era.id)}
                className={`flex-none flex items-center space-x-2 px-3.5 py-1.5 rounded-xs text-xs font-sans-ui transition-all duration-200 border ${
                  isSelected
                    ? 'bg-[#1A1815] text-[#F6F3EC] border-[#C5A059] shadow-xs'
                    : 'bg-[#F6F3EC] dark:bg-[#201E1B] text-[#4A443B] dark:text-[#B8B0A2] border-hairline hover:border-[#C5A059]/40'
                }`}
              >
                <span className={`font-mono-spec text-[10px] ${isSelected ? 'text-[#C5A059]' : 'text-[#8A8275]'}`}>
                  {era.timeframe}
                </span>
                <span className="font-medium">{era.name}</span>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};
