import React from 'react';

export interface BrandInfo {
  name: string;
  country: string;
  tagline: string;
}

const FAMOUS_BRANDS: BrandInfo[] = [
  { name: 'Ferrari', country: 'Italy', tagline: 'Scuderia Maranello' },
  { name: 'Porsche', country: 'Germany', tagline: 'Stuttgart Engineering' },
  { name: 'Mercedes-Benz', country: 'Germany', tagline: 'Das Beste oder nichts' },
  { name: 'Lamborghini', country: 'Italy', tagline: 'Sant\'Agata Raging Bull' },
  { name: 'Bugatti', country: 'France', tagline: 'Pur Sang Molsheim' },
  { name: 'McLaren', country: 'United Kingdom', tagline: 'Woking Innovation' },
  { name: 'Aston Martin', country: 'United Kingdom', tagline: 'Gaydon Grand Touring' },
  { name: 'Jaguar', country: 'United Kingdom', tagline: 'Coventry Grace & Pace' },
  { name: 'Ford', country: 'United States', tagline: 'Dearborn Total Performance' },
  { name: 'Chevrolet', country: 'United States', tagline: 'America\'s Sports Car' },
  { name: 'BMW', country: 'Germany', tagline: 'Ultimate Driving Machine' },
  { name: 'Nissan', country: 'Japan', tagline: 'Takumi Godzilla Heritage' },
  { name: 'Toyota', country: 'Japan', tagline: 'Aichi Engineering' },
  { name: 'Rimac', country: 'Croatia', tagline: 'Electric Hypercar Era' },
];

interface BrandFilterStripProps {
  selectedBrand: string | 'all';
  onSelectBrand: (brand: string | 'all') => void;
}

export const BrandFilterStrip: React.FC<BrandFilterStripProps> = ({
  selectedBrand,
  onSelectBrand,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
      <div className="bg-[#EAE5D9]/40 dark:bg-[#1A1815] border border-hairline p-3 rounded-xs space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono-spec tracking-widest text-[#7A7367] dark:text-[#9E9689] uppercase">
            ICONIC MARQUE FILTER • SELECT MANUFACTURER
          </span>
          {selectedBrand !== 'all' && (
            <button
              onClick={() => onSelectBrand('all')}
              className="text-[10px] font-mono-spec text-[#C5A059] hover:underline uppercase font-bold"
            >
              CLEAR MARQUE FILTER ({selectedBrand.toUpperCase()})
            </button>
          )}
        </div>

        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => onSelectBrand('all')}
            className={`px-3 py-1 text-xs font-mono-spec tracking-wider uppercase rounded-xs border transition-all flex-none ${
              selectedBrand === 'all'
                ? 'bg-[#1A1815] text-[#C5A059] border-[#C5A059]'
                : 'bg-[#F6F3EC] dark:bg-[#22201D] text-[#615B52] dark:text-[#A0988C] border-hairline hover:border-[#C5A059]/50'
            }`}
          >
            All Marques
          </button>

          {FAMOUS_BRANDS.map((b) => {
            const isSelected = selectedBrand.toLowerCase() === b.name.toLowerCase();
            return (
              <button
                key={b.name}
                onClick={() => onSelectBrand(isSelected ? 'all' : b.name)}
                className={`px-3 py-1 text-xs font-mono-spec tracking-wider uppercase rounded-xs border transition-all flex-none flex items-center space-x-1.5 ${
                  isSelected
                    ? 'bg-[#1B3B2B] text-[#C5A059] border-[#C5A059] font-bold shadow-xs'
                    : 'bg-[#F6F3EC] dark:bg-[#22201D] text-[#615B52] dark:text-[#A0988C] border-hairline hover:border-[#C5A059]/50'
                }`}
                title={`${b.name} — ${b.tagline}`}
              >
                <span>{b.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
