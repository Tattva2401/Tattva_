import React, { useState } from 'react';
import type { EngineType, ValuationTier } from '../types/car';
import { SlidersHorizontal, ChevronDown, ChevronUp, RefreshCw, Globe, Cpu, DollarSign, Calendar } from 'lucide-react';

interface AdvancedFilterBarProps {
  selectedCountry: string | 'all';
  onSelectCountry: (country: string | 'all') => void;
  selectedEngineType: EngineType | 'all';
  onSelectEngineType: (engineType: EngineType | 'all') => void;
  selectedValuationTier: ValuationTier | 'all';
  onSelectValuationTier: (tier: ValuationTier | 'all') => void;
  selectedDecade: string | 'all';
  onSelectDecade: (decade: string | 'all') => void;
  onClearAllAdvanced: () => void;
  activeAdvancedCount: number;
}

export const AdvancedFilterBar: React.FC<AdvancedFilterBarProps> = ({
  selectedCountry,
  onSelectCountry,
  selectedEngineType,
  onSelectEngineType,
  selectedValuationTier,
  onSelectValuationTier,
  selectedDecade,
  onSelectDecade,
  onClearAllAdvanced,
  activeAdvancedCount,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const countries = ['Germany', 'United States', 'United Kingdom', 'Italy', 'France', 'Japan', 'Croatia'];
  const engineTypes: { id: EngineType; label: string }[] = [
    { id: 'v12', label: 'V12 Powertrain' },
    { id: 'v8', label: 'V8 Muscle & GT' },
    { id: 'flat6', label: 'Flat-6 / Boxer' },
    { id: 'inline6', label: 'Inline-6 Twin-Cam' },
    { id: 'inline4', label: 'Inline-4 Vintage' },
    { id: 'w16', label: 'W16 Quad-Turbo' },
    { id: 'electric', label: 'Electric Megawatt' },
  ];

  const valuationTiers: { id: ValuationTier; label: string }[] = [
    { id: 'under-100k', label: 'Under $100,000' },
    { id: '100k-500k', label: '$100k – $500k' },
    { id: '500k-2m', label: '$500k – $2 Million' },
    { id: '2m-10m', label: '$2M – $10 Million' },
    { id: '10m-plus', label: '$10M+ Ultra Rare' },
  ];

  const decades = ['1880s', '1900s', '1910s', '1920s', '1930s', '1940s', '1950s', '1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s'];

  return (
    <div className="w-full bg-[#EAE5D9]/40 dark:bg-[#161412] border-b border-hairline py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Toggle Button Bar */}
        <div className="flex items-center justify-between">
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center space-x-2 text-xs font-mono-spec tracking-widest text-[#1C1A17] dark:text-[#E8E3D8] hover:text-[#C5A059] uppercase transition-colors"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="font-bold">COMPOUND MATRIX FILTERS (COUNTRY, ENGINE, DECADE, VALUATION)</span>
            {activeAdvancedCount > 0 && (
              <span className="px-1.5 py-0.5 text-[10px] bg-[#C5A059] text-[#121110] font-bold rounded-xs">
                {activeAdvancedCount} ACTIVE
              </span>
            )}
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {activeAdvancedCount > 0 && (
            <button
              onClick={onClearAllAdvanced}
              className="flex items-center space-x-1 text-xs font-mono-spec text-[#C5A059] hover:underline"
            >
              <RefreshCw className="w-3 h-3" />
              <span>CLEAR MATRIX FILTERS</span>
            </button>
          )}

        </div>

        {/* Expandable Filter Grid */}
        {isExpanded && (
          <div className="pt-4 pb-2 space-y-4 animate-fade-in border-t border-hairline mt-3">
            
            {/* 1. Country Filter */}
            <div className="space-y-1.5">
              <div className="flex items-center space-x-1.5 text-[11px] font-mono-spec text-[#7A7367]">
                <Globe className="w-3 h-3 text-[#C5A059]" />
                <span className="uppercase font-bold">COUNTRY OF ORIGIN:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => onSelectCountry('all')}
                  className={`px-2.5 py-1 text-xs font-mono-spec uppercase rounded-xs border ${
                    selectedCountry === 'all'
                      ? 'bg-[#1A1815] text-[#C5A059] border-[#C5A059]'
                      : 'bg-[#F6F3EC] dark:bg-[#201E1B] text-[#615B52] dark:text-[#A0988C] border-hairline'
                  }`}
                >
                  All Countries
                </button>
                {countries.map((c) => (
                  <button
                    key={c}
                    onClick={() => onSelectCountry(selectedCountry === c ? 'all' : c)}
                    className={`px-2.5 py-1 text-xs font-mono-spec uppercase rounded-xs border ${
                      selectedCountry === c
                        ? 'bg-[#1A1815] text-[#C5A059] border-[#C5A059]'
                        : 'bg-[#F6F3EC] dark:bg-[#201E1B] text-[#615B52] dark:text-[#A0988C] border-hairline hover:border-[#C5A059]/40'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Engine Type Filter */}
            <div className="space-y-1.5">
              <div className="flex items-center space-x-1.5 text-[11px] font-mono-spec text-[#7A7367]">
                <Cpu className="w-3 h-3 text-[#C5A059]" />
                <span className="uppercase font-bold">ENGINE & POWERTRAIN TYPE:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => onSelectEngineType('all')}
                  className={`px-2.5 py-1 text-xs font-mono-spec uppercase rounded-xs border ${
                    selectedEngineType === 'all'
                      ? 'bg-[#1A1815] text-[#C5A059] border-[#C5A059]'
                      : 'bg-[#F6F3EC] dark:bg-[#201E1B] text-[#615B52] dark:text-[#A0988C] border-hairline'
                  }`}
                >
                  All Powertrains
                </button>
                {engineTypes.map((eng) => (
                  <button
                    key={eng.id}
                    onClick={() => onSelectEngineType(selectedEngineType === eng.id ? 'all' : eng.id)}
                    className={`px-2.5 py-1 text-xs font-mono-spec uppercase rounded-xs border ${
                      selectedEngineType === eng.id
                        ? 'bg-[#1A1815] text-[#C5A059] border-[#C5A059]'
                        : 'bg-[#F6F3EC] dark:bg-[#201E1B] text-[#615B52] dark:text-[#A0988C] border-hairline hover:border-[#C5A059]/40'
                    }`}
                  >
                    {eng.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Valuation Tier Filter */}
            <div className="space-y-1.5">
              <div className="flex items-center space-x-1.5 text-[11px] font-mono-spec text-[#7A7367]">
                <DollarSign className="w-3 h-3 text-[#C5A059]" />
                <span className="uppercase font-bold">ESTIMATED AUCTION VALUATION TIER:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => onSelectValuationTier('all')}
                  className={`px-2.5 py-1 text-xs font-mono-spec uppercase rounded-xs border ${
                    selectedValuationTier === 'all'
                      ? 'bg-[#1A1815] text-[#C5A059] border-[#C5A059]'
                      : 'bg-[#F6F3EC] dark:bg-[#201E1B] text-[#615B52] dark:text-[#A0988C] border-hairline'
                  }`}
                >
                  All Valuations
                </button>
                {valuationTiers.map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => onSelectValuationTier(selectedValuationTier === tier.id ? 'all' : tier.id)}
                    className={`px-2.5 py-1 text-xs font-mono-spec uppercase rounded-xs border ${
                      selectedValuationTier === tier.id
                        ? 'bg-[#1A1815] text-[#C5A059] border-[#C5A059]'
                        : 'bg-[#F6F3EC] dark:bg-[#201E1B] text-[#615B52] dark:text-[#A0988C] border-hairline hover:border-[#C5A059]/40'
                    }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Decade Filter */}
            <div className="space-y-1.5">
              <div className="flex items-center space-x-1.5 text-[11px] font-mono-spec text-[#7A7367]">
                <Calendar className="w-3 h-3 text-[#C5A059]" />
                <span className="uppercase font-bold">MANUFACTURING DECADE:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => onSelectDecade('all')}
                  className={`px-2.5 py-1 text-xs font-mono-spec uppercase rounded-xs border ${
                    selectedDecade === 'all'
                      ? 'bg-[#1A1815] text-[#C5A059] border-[#C5A059]'
                      : 'bg-[#F6F3EC] dark:bg-[#201E1B] text-[#615B52] dark:text-[#A0988C] border-hairline'
                  }`}
                >
                  All Decades
                </button>
                {decades.map((d) => (
                  <button
                    key={d}
                    onClick={() => onSelectDecade(selectedDecade === d ? 'all' : d)}
                    className={`px-2.5 py-1 text-xs font-mono-spec uppercase rounded-xs border ${
                      selectedDecade === d
                        ? 'bg-[#1A1815] text-[#C5A059] border-[#C5A059]'
                        : 'bg-[#F6F3EC] dark:bg-[#201E1B] text-[#615B52] dark:text-[#A0988C] border-hairline hover:border-[#C5A059]/40'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
