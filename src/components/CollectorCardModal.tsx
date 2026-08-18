import React, { useRef } from 'react';
import type { Car } from '../types/car';
import { X, Printer, Sparkles } from 'lucide-react';

interface CollectorCardModalProps {
  car: Car | null;
  onClose: () => void;
}

export const CollectorCardModal: React.FC<CollectorCardModalProps> = ({ car, onClose }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  if (!car) return null;

  const handlePrintCard = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#121110]/85 backdrop-blur-md flex justify-center items-center p-4 animate-fade-in">
      
      <div className="relative flex flex-col items-center space-y-4 max-w-lg w-full">
        
        {/* Top Control Bar */}
        <div className="w-full flex items-center justify-between text-xs font-mono-spec text-[#E8E3D8] no-print">
          <span className="flex items-center space-x-1.5 text-[#C5A059] font-bold">
            <Sparkles className="w-4 h-4" />
            <span>VINTAGE COLLECTOR'S TRADING CARD</span>
          </span>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrintCard}
              className="flex items-center space-x-1 px-3 py-1.5 bg-[#C5A059] text-[#121110] font-semibold rounded-xs hover:bg-[#D4AF66] transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT CARD</span>
            </button>
            <button onClick={onClose} className="p-1 text-[#9E9689] hover:text-[#FAF8F5]">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Vintage Trading Card Container */}
        <div
          ref={cardRef}
          className="w-full max-w-sm bg-[#FAF7F0] text-[#1A1815] p-5 rounded-md border-4 border-[#C5A059] shadow-2xl space-y-4 font-sans-ui paper-grain"
        >
          
          {/* Card Top Title Plaque */}
          <div className="flex items-center justify-between border-b-2 border-[#1A1815] pb-2">
            <div>
              <span className="font-mono-spec text-[9px] text-[#8A6D3B] tracking-widest block uppercase font-bold">
                HISTORIC AUTOMOBILE SERIES • CARD #{car.startYear}
              </span>
              <h3 className="font-archival text-xl font-bold text-[#1A1815]">
                {car.make} <span className="italic font-normal">{car.model}</span>
              </h3>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#1A1815] text-[#C5A059] flex items-center justify-center font-archival font-bold text-xs border border-[#C5A059]">
              AI
            </div>
          </div>

          {/* Photo Frame with Vintage Border */}
          <div className="relative aspect-[4/3] w-full bg-[#1A1815] border-2 border-[#1A1815] overflow-hidden rounded-xs">
            <img
              src={car.heroImage}
              alt={car.model}
              className="w-full h-full object-cover saturate-90"
            />
            <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-[#1A1815]/90 text-[#C5A059] font-mono-spec text-[10px] font-bold uppercase border border-[#C5A059]/40">
              {car.years} • {car.country}
            </div>
          </div>

          {/* Key Spec Badges */}
          <div className="grid grid-cols-2 gap-2 text-[10px] font-mono-spec">
            <div className="p-2 bg-[#EAE5D9] border border-[#1A1815]/20">
              <span className="text-[#615B52] block">ENGINE:</span>
              <span className="font-bold text-[#1A1815] truncate block">{car.specs.engine}</span>
            </div>
            <div className="p-2 bg-[#EAE5D9] border border-[#1A1815]/20">
              <span className="text-[#615B52] block">POWER:</span>
              <span className="font-bold text-[#8A6D3B] block">{car.specs.horsepower}</span>
            </div>
            <div className="p-2 bg-[#EAE5D9] border border-[#1A1815]/20">
              <span className="text-[#615B52] block">TOP SPEED:</span>
              <span className="font-bold text-[#8A6D3B] block">{car.specs.topSpeed}</span>
            </div>
            <div className="p-2 bg-[#EAE5D9] border border-[#1A1815]/20">
              <span className="text-[#615B52] block">0–60 MPH:</span>
              <span className="font-bold text-[#1A1815] block">{car.specs.acceleration0to60}</span>
            </div>
          </div>

          {/* Short Editorial Citation */}
          <p className="font-editorial-serif text-xs italic text-[#4A443B] leading-snug border-t border-[#1A1815]/20 pt-2">
            "{car.editorialHook}"
          </p>

          {/* Footer Serial */}
          <div className="border-t-2 border-[#1A1815] pt-2 flex items-center justify-between text-[9px] font-mono-spec text-[#8A6D3B]">
            <span>AUTOMOTIVE ICONS EXHIBITION</span>
            <span>LIMITED TRADING CARD</span>
          </div>

        </div>

      </div>
    </div>
  );
};
