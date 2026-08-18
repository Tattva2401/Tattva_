import React, { useState, useEffect, useRef } from 'react';
import type { Car } from '../types/car';
import { CARS } from '../data/carsData';
import { Search, X, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCar: (car: Car) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectCar }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (((e.metaKey || e.ctrlKey) && e.key === 'k') || e.key === 'Escape') {
        if (isOpen) {
          e.preventDefault();
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = query.trim() === '' ? [] : CARS.filter((car) => {
    const q = query.toLowerCase();
    return (
      car.make.toLowerCase().includes(q) ||
      car.model.toLowerCase().includes(q) ||
      car.years.toLowerCase().includes(q) ||
      car.country.toLowerCase().includes(q) ||
      car.editorialHook.toLowerCase().includes(q) ||
      car.specs.engine.toLowerCase().includes(q) ||
      car.categories.some((c) => c.toLowerCase().includes(q))
    );
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#121110]/80 backdrop-blur-sm flex justify-center pt-16 sm:pt-24 p-4 animate-fade-in">
      
      <div className="relative w-full max-w-2xl bg-[#F6F3EC] dark:bg-[#1A1815] text-[#1C1A17] dark:text-[#E8E3D8] border border-hairline shadow-2xl rounded-xs overflow-hidden h-fit">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-hairline flex items-center space-x-3 bg-[#EAE5D9]/40 dark:bg-[#161412]">
          <Search className="w-5 h-5 text-[#C5A059]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by Make, Model, Year, Engine, Country, or Tag..."
            className="w-full bg-transparent text-base font-sans-ui focus:outline-none placeholder-[#8A8275]"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-[#7A7367] hover:text-[#C5A059]">
              <X className="w-4 h-4" />
            </button>
          )}
          <button onClick={onClose} className="p-1 text-[#7A7367] hover:text-[#C5A059]" title="Close search">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 divide-y divide-hairline">
          {query.trim() === '' ? (
            <div className="py-8 text-center font-mono-spec text-xs text-[#7A7367]">
              Type a keyword (e.g. "V12", "Le Mans", "Supercar", "1964", "Ferrari", "Porsche") to query the archival catalog.
            </div>
          ) : results.length === 0 ? (
            <div className="py-8 text-center font-editorial-serif text-base italic text-[#7A7367]">
              No automotive icons matched your search query "{query}".
            </div>
          ) : (
            results.map((car) => (
              <div
                key={car.id}
                onClick={() => {
                  onSelectCar(car);
                  onClose();
                }}
                className="py-3 group flex items-center justify-between cursor-pointer hover:bg-[#EAE5D9]/50 dark:hover:bg-[#22201D] px-3 rounded-xs transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={car.heroImage}
                    alt={car.model}
                    className="w-14 h-10 object-cover rounded-xs border border-hairline saturate-90"
                  />
                  <div>
                    <div className="flex items-center space-x-2 font-mono-spec text-[10px] text-[#C5A059]">
                      <span>{car.years}</span>
                      <span>•</span>
                      <span className="uppercase">{car.country}</span>
                    </div>
                    <h4 className="font-editorial-serif text-lg font-medium text-[#1C1A17] dark:text-[#E8E3D8] group-hover:text-[#C5A059]">
                      {car.make} {car.model}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center space-x-1 text-xs font-mono-spec text-[#C5A059] group-hover:translate-x-1 transition-transform">
                  <span>OPEN PLACARD</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Search Footer */}
        <div className="p-3 bg-[#EAE5D9]/60 dark:bg-[#141210] border-t border-hairline flex items-center justify-between font-mono-spec text-[10px] text-[#7A7367]">
          <span>Found {results.length} matching exhibits</span>
          <span>Press ESC to exit</span>
        </div>

      </div>
    </div>
  );
};
