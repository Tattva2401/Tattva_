import React from 'react';
import type { Car } from '../types/car';
import { X, Printer, Shield, Sparkles } from 'lucide-react';
import { handleImageError } from '../utils/imageFallback';

interface ExhibitionPosterModalProps {
  car: Car | null;
  onClose: () => void;
}

export const ExhibitionPosterModal: React.FC<ExhibitionPosterModalProps> = ({ car, onClose }) => {
  if (!car) return null;

  const engineLabel = (car.engineSoundProfile || 'v12').toUpperCase();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#121110]/95 backdrop-blur-md flex justify-center p-2 sm:p-4 md:p-6 animate-fade-in">
      
      <div className="relative w-full max-w-4xl bg-[#F6F3EC] text-[#1C1A17] border border-hairline shadow-2xl rounded-xs overflow-hidden flex flex-col my-auto max-h-[96vh]">
        
        {/* Sticky Action Bar */}
        <div className="sticky top-0 z-30 bg-[#1A1815] text-[#F6F3EC] px-6 py-4 border-b border-[#C5A059]/40 flex items-center justify-between no-print">
          <div className="flex items-center space-x-2 text-xs font-mono-spec">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span className="text-[#C5A059] font-bold uppercase">
              MUSEUM EXHIBITION PRINT POSTER GENERATOR
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 bg-[#C5A059] text-[#121110] font-mono-spec text-xs font-bold uppercase rounded-xs hover:bg-[#D4AF66] transition-colors flex items-center space-x-1.5"
            >
              <Printer className="w-4 h-4" />
              <span>PRINT EXHIBITION POSTER</span>
            </button>

            <button onClick={onClose} className="p-1.5 text-[#9E9689] hover:text-[#FAF8F5]">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Poster Container */}
        <div className="overflow-y-auto p-8 sm:p-12 space-y-8 bg-[#F6F3EC] text-[#1C1A17] paper-grain">
          
          {/* Poster Header Frame */}
          <div className="border-b-2 border-[#1C1A17] pb-6 flex justify-between items-end">
            <div>
              <span className="font-mono-spec text-xs text-[#C5A059] font-bold tracking-widest uppercase block">
                AUTOMOTIVE ICONS • OFFICIAL EXHIBITION ARCHIVE POSTER
              </span>
              <h1 className="font-editorial-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#1C1A17] mt-1">
                {car.make} {car.model}
              </h1>
              {car.variant && (
                <p className="font-editorial-serif text-lg italic text-[#615B52] mt-0.5">
                  {car.variant} ({car.years})
                </p>
              )}
            </div>

            <div className="text-right font-mono-spec text-xs space-y-1">
              <div className="flex items-center space-x-1 justify-end">
                <span className="px-2 py-0.5 bg-[#1C1A17] text-[#C5A059] font-bold uppercase inline-block rounded-xs">
                  ACCESSION ID: #{car.id.toUpperCase()}
                </span>
                <span className="px-2 py-0.5 bg-[#C5A059] text-[#1C1A17] font-bold uppercase inline-block rounded-xs">
                  {engineLabel}
                </span>
              </div>
              <p className="text-[#7A7367]">ORIGIN: {car.country.toUpperCase()}</p>
            </div>
          </div>

          {/* Large High-Res Hero Image & Multi-Angle Collage Frame */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="md:col-span-2 relative aspect-[16/10] w-full bg-[#121110] border border-[#1C1A17] overflow-hidden rounded-xs">
              <img
                src={car.heroImage}
                alt={car.model}
                onError={(e) => handleImageError(e)}
                className="w-full h-full object-cover saturate-95"
              />
              <div className="absolute bottom-3 left-3 bg-[#1C1A17]/90 text-[#C5A059] px-3 py-1 font-mono-spec text-[10px] uppercase border border-[#C5A059]/40">
                PRIMARY EXHIBITION PHOTOGRAPHY • FIG. 1
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <div className="relative aspect-[16/10] w-full bg-[#121110] border border-[#1C1A17] overflow-hidden rounded-xs">
                <img
                  src={car.galleryImages[0] || car.heroImage}
                  alt={`${car.model} detail 1`}
                  onError={(e) => handleImageError(e)}
                  className="w-full h-full object-cover saturate-90"
                />
                <div className="absolute bottom-2 left-2 bg-[#1C1A17]/85 text-[#E8E3D8] px-2 py-0.5 font-mono-spec text-[9px] uppercase">
                  DETAIL A
                </div>
              </div>
              <div className="relative aspect-[16/10] w-full bg-[#121110] border border-[#1C1A17] overflow-hidden rounded-xs">
                <img
                  src={car.galleryImages[1] || car.heroImage}
                  alt={`${car.model} detail 2`}
                  onError={(e) => handleImageError(e)}
                  className="w-full h-full object-cover saturate-90"
                />
                <div className="absolute bottom-2 left-2 bg-[#1C1A17]/85 text-[#E8E3D8] px-2 py-0.5 font-mono-spec text-[9px] uppercase">
                  DETAIL B
                </div>
              </div>
            </div>
          </div>

          {/* Curatorial Narrative & Spec Sheet Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            
            {/* Curatorial Text Column */}
            <div className="md:col-span-2 space-y-4">
              <h3 className="font-editorial-serif text-xl font-bold text-[#1C1A17] border-b border-hairline pb-2">
                CURATORIAL ESSAY & HISTORICAL SIGNIFICANCE
              </h3>
              <p className="font-editorial-serif text-base text-[#2C2825] leading-relaxed italic">
                "{car.editorialHook}"
              </p>
              <p className="font-sans-ui text-sm text-[#423C36] leading-relaxed font-light">
                {car.whyIconic}
              </p>
            </div>

            {/* Spec Matrix Column */}
            <div className="bg-[#EAE5D9]/60 p-6 border border-[#1C1A17] rounded-xs space-y-3 font-mono-spec text-xs">
              <div className="flex items-center space-x-2 text-[#C5A059] font-bold border-b border-[#1C1A17] pb-2">
                <Shield className="w-4 h-4" />
                <span>OFFICIAL SPEC SHEET</span>
              </div>

              <div className="space-y-2 text-[#1C1A17]">
                <div className="flex justify-between border-b border-hairline py-1">
                  <span className="text-[#7A7367]">POWERTRAIN:</span>
                  <span className="font-bold text-right">{car.specs.engine}</span>
                </div>
                <div className="flex justify-between border-b border-hairline py-1">
                  <span className="text-[#7A7367]">HORSEPOWER:</span>
                  <span className="font-bold">{car.specs.horsepower}</span>
                </div>
                <div className="flex justify-between border-b border-hairline py-1">
                  <span className="text-[#7A7367]">ACCELERATION:</span>
                  <span className="font-bold">{car.specs.acceleration0to60}</span>
                </div>
                <div className="flex justify-between border-b border-hairline py-1">
                  <span className="text-[#7A7367]">VERIFIED TOP SPEED:</span>
                  <span className="font-bold">{car.specs.topSpeed}</span>
                </div>
                <div className="flex justify-between border-b border-hairline py-1">
                  <span className="text-[#7A7367]">DRIVETRAIN:</span>
                  <span className="font-bold">{car.specs.drivetrain}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#7A7367]">ESTIMATED VALUE:</span>
                  <span className="font-bold text-[#C5A059]">{car.estimatedValuation || 'P.O.A.'}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Museum Catalog Seal Footer */}
          <div className="border-t-2 border-[#1C1A17] pt-6 flex justify-between items-center text-xs font-mono-spec text-[#7A7367]">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-[#C5A059] rounded-full inline-block" />
              <span>AUTOMOTIVE ICONS ARCHIVE • VERIFIED CURATORIAL PRINT</span>
            </div>
            <span>PRINTED FOR PRIVATE ARCHIVE COLLECTION</span>
          </div>

        </div>

      </div>
    </div>
  );
};
