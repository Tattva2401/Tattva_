import React, { useState } from 'react';
import type { Car } from '../types/car';
import { CARS } from '../data/carsData';
import { CATEGORIES } from '../data/categories';
import { ERAS } from '../data/eras';
import { X, Volume2, Printer, Sparkles, Eye } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

interface CarDetailModalProps {
  car: Car | null;
  onClose: () => void;
  onSelectCar: (car: Car) => void;
  onOpenCollectorCard: (car: Car) => void;
  onOpenInspectionStudio?: (car: Car) => void;
  onOpenPoster?: (car: Car) => void;
}

export const CarDetailModal: React.FC<CarDetailModalProps> = ({
  car,
  onClose,
  onSelectCar,
  onOpenCollectorCard,
  onOpenInspectionStudio,
  onOpenPoster,
}) => {
  const [activeTab, setActiveTab] = useState<'narrative' | 'specs' | 'gallery' | 'quotes'>('narrative');
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  if (!car) return null;

  const eraInfo = ERAS.find((e) => e.id === car.era);

  const relatedCars = CARS.filter((c) => car.relatedCarIds?.includes(c.id));

  const handlePlayEngine = () => {
    audioEngine.playEngineNote(car.engineSoundProfile || 'v12');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#121110]/80 backdrop-blur-sm flex justify-center p-2 sm:p-4 md:p-6 animate-fade-in">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-[#F6F3EC] dark:bg-[#161412] text-[#1C1A17] dark:text-[#E8E3D8] border border-hairline shadow-2xl rounded-xs overflow-hidden flex flex-col my-auto max-h-[92vh]">
        
        {/* Sticky Exhibition Top Bar */}
        <div className="sticky top-0 z-30 bg-[#F6F3EC]/95 dark:bg-[#161412]/95 backdrop-blur-md px-6 py-4 border-b border-hairline flex items-center justify-between no-print">
          <div className="flex items-center space-x-3 text-xs font-mono-spec">
            <span className="px-2 py-0.5 bg-[#1A1815] text-[#C5A059] font-bold border border-[#C5A059]/30">
              MUSEUM PLACARD • EXHIBIT #{car.id.toUpperCase()}
            </span>
            <span className="hidden sm:inline text-[#7A7367]">{eraInfo?.name}</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => onOpenPoster && onOpenPoster(car)}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-[#1A1815] text-[#C5A059] border border-[#C5A059]/40 hover:bg-[#25221F] font-mono-spec text-xs font-semibold rounded-xs transition-colors"
              title="Generate Wall Exhibition Poster"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">WALL POSTER</span>
            </button>

            <button
              onClick={() => onOpenInspectionStudio && onOpenInspectionStudio(car)}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-[#1B3B2B] text-[#E8E3D8] hover:bg-[#254F3B] border border-[#C5A059]/40 font-mono-spec text-xs font-semibold rounded-xs transition-colors"
              title="Launch 360° Inspection Studio & Rev Simulator"
            >
              <Eye className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="hidden md:inline">INSPECTION STUDIO</span>
            </button>

            <button
              onClick={() => onOpenCollectorCard(car)}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-[#C5A059] hover:bg-[#D4AF66] text-[#121110] font-mono-spec text-xs font-semibold rounded-xs transition-colors"
              title="Generate Collector Card"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">COLLECTOR CARD</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-1.5 bg-[#EAE5D9]/50 dark:bg-[#22201D] hover:bg-[#E2DCCE] text-[#615B52] dark:text-[#A0988C] rounded-xs border border-hairline transition-colors"
              title="Print Exhibition Placard"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-1.5 bg-[#EAE5D9]/50 dark:bg-[#22201D] hover:bg-[#E2DCCE] text-[#615B52] dark:text-[#A0988C] rounded-xs border border-hairline transition-colors"
              title="Close placard (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-10">
          
          {/* Header Block */}
          <div className="space-y-4">
            
            {/* Category Badges Strip */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="px-2.5 py-1 text-xs font-mono-spec tracking-widest bg-[#1A1815] text-[#C5A059] font-bold uppercase border border-[#C5A059]/40">
                {car.years}
              </span>
              <span className="px-2.5 py-1 text-xs font-mono-spec tracking-widest bg-[#EAE5D9]/60 dark:bg-[#25221F] text-[#615B52] dark:text-[#B8B0A2] uppercase border border-hairline">
                {car.country}
              </span>
              {car.categories.map((catId) => {
                const cat = CATEGORIES.find((c) => c.id === catId);
                if (!cat) return null;
                return (
                  <span
                    key={catId}
                    className="px-2.5 py-1 text-xs font-mono-spec tracking-widest bg-[#1B3B2B] text-[#E8E3D8] uppercase border border-[#C5A059]/30"
                  >
                    {cat.symbol} {cat.shortTag}
                  </span>
                );
              })}
            </div>

            {/* Title & Editorial Hook */}
            <div>
              <h1 className="font-editorial-serif text-4xl sm:text-5xl font-normal text-[#1C1A17] dark:text-[#E8E3D8] leading-tight">
                {car.make} <span className="italic font-light text-[#C5A059]">{car.model}</span>
              </h1>
              {car.variant && (
                <p className="font-mono-spec text-sm text-[#7A7367] dark:text-[#9E9689] uppercase tracking-wider mt-1">
                  {car.variant}
                </p>
              )}
            </div>

            <p className="font-editorial-serif text-xl sm:text-2xl italic text-[#4A443B] dark:text-[#C5BEB2] leading-relaxed border-l-2 border-[#C5A059] pl-4 py-1">
              "{car.editorialHook}"
            </p>
          </div>

          {/* Hero Photography Frame */}
          <div className="relative aspect-[16/9] w-full bg-[#1A1815] rounded-xs overflow-hidden border border-hairline">
            <img
              src={selectedPhoto || car.heroImage}
              alt={car.model}
              className="w-full h-full object-cover saturate-95 transition-all duration-500"
            />
            
            <div className="absolute bottom-3 right-3 flex items-center space-x-2">
              <button
                onClick={handlePlayEngine}
                className="flex items-center space-x-2 px-3 py-1.5 bg-[#121110]/90 text-[#C5A059] border border-[#C5A059]/40 hover:bg-[#1A1815] font-mono-spec text-xs tracking-wider uppercase transition-colors"
              >
                <Volume2 className="w-4 h-4" />
                <span>Listen to Engine Note</span>
              </button>
            </div>
          </div>

          {/* Section Navigation Tabs */}
          <div className="border-b border-hairline flex space-x-6 text-xs font-mono-spec uppercase tracking-wider">
            <button
              onClick={() => setActiveTab('narrative')}
              className={`pb-3 transition-colors ${
                activeTab === 'narrative'
                  ? 'text-[#C5A059] font-bold border-b-2 border-[#C5A059]'
                  : 'text-[#7A7367] hover:text-[#1C1A17] dark:hover:text-[#E8E3D8]'
              }`}
            >
              Curatorial Narrative
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-3 transition-colors ${
                activeTab === 'specs'
                  ? 'text-[#C5A059] font-bold border-b-2 border-[#C5A059]'
                  : 'text-[#7A7367] hover:text-[#1C1A17] dark:hover:text-[#E8E3D8]'
              }`}
            >
              Under the Skin (Specs)
            </button>
            <button
              onClick={() => setActiveTab('quotes')}
              className={`pb-3 transition-colors ${
                activeTab === 'quotes'
                  ? 'text-[#C5A059] font-bold border-b-2 border-[#C5A059]'
                  : 'text-[#7A7367] hover:text-[#1C1A17] dark:hover:text-[#E8E3D8]'
              }`}
            >
              In Its Own Words ({car.quotes?.length || 0})
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`pb-3 transition-colors ${
                activeTab === 'gallery'
                  ? 'text-[#C5A059] font-bold border-b-2 border-[#C5A059]'
                  : 'text-[#7A7367] hover:text-[#1C1A17] dark:hover:text-[#E8E3D8]'
              }`}
            >
              Photography Archive
            </button>
          </div>

          {/* Tab 1: Narrative */}
          {activeTab === 'narrative' && (
            <div className="space-y-8 animate-fade-in">
              
              {/* The Story */}
              <div className="space-y-2">
                <h3 className="font-archival text-sm tracking-widest text-[#C5A059] uppercase font-bold">
                  I. THE STORY & CONTEXT
                </h3>
                <p className="font-sans-ui text-base text-[#2C2925] dark:text-[#D8D2C6] leading-relaxed font-light">
                  {car.story}
                </p>
              </div>

              {/* Why It's Iconic */}
              <div className="space-y-2 bg-[#EAE5D9]/40 dark:bg-[#1E1C1A] p-6 border-l-4 border-[#C5A059] rounded-r-xs">
                <h3 className="font-archival text-sm tracking-widest text-[#C5A059] uppercase font-bold">
                  II. WHY IT'S ICONIC — THE CLAIM TO FAME
                </h3>
                <p className="font-sans-ui text-base text-[#1C1A17] dark:text-[#E8E3D8] leading-relaxed font-normal">
                  {car.whyIconic}
                </p>
              </div>

              {/* Legacy */}
              <div className="space-y-2">
                <h3 className="font-archival text-sm tracking-widest text-[#C5A059] uppercase font-bold">
                  III. LEGACY & COLLECTOR STATUS
                </h3>
                <p className="font-sans-ui text-base text-[#2C2925] dark:text-[#D8D2C6] leading-relaxed font-light">
                  {car.legacy}
                </p>
              </div>

              {/* Market Metrics Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-hairline font-mono-spec text-xs">
                {car.productionCount && (
                  <div className="p-3 bg-[#EAE5D9]/30 dark:bg-[#1F1D1A] border border-hairline">
                    <span className="text-[#7A7367] uppercase block text-[10px]">PRODUCTION VOLUME</span>
                    <span className="text-[#1C1A17] dark:text-[#E8E3D8] font-bold text-sm">{car.productionCount}</span>
                  </div>
                )}
                {car.estimatedValuation && (
                  <div className="p-3 bg-[#EAE5D9]/30 dark:bg-[#1F1D1A] border border-hairline">
                    <span className="text-[#7A7367] uppercase block text-[10px]">CURRENT AUCTION VALUATION</span>
                    <span className="text-[#C5A059] font-bold text-sm">{car.estimatedValuation}</span>
                  </div>
                )}
                {car.originalPrice && (
                  <div className="p-3 bg-[#EAE5D9]/30 dark:bg-[#1F1D1A] border border-hairline">
                    <span className="text-[#7A7367] uppercase block text-[10px]">PERIOD ORIGINAL PRICE</span>
                    <span className="text-[#1C1A17] dark:text-[#E8E3D8] font-bold text-sm">{car.originalPrice}</span>
                  </div>
                )}
              </div>

            </div>
          )}

          {/* Tab 2: Specs Matrix (Under the Skin) */}
          {activeTab === 'specs' && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="font-archival text-sm tracking-widest text-[#C5A059] uppercase font-bold">
                MECHANICAL SPECIFICATION SHEET
              </h3>

              <div className="border border-hairline overflow-hidden font-mono-spec text-xs">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    <tr className="border-b border-hairline bg-[#EAE5D9]/40 dark:bg-[#1E1C1A]">
                      <td className="p-3 font-semibold text-[#7A7367] w-1/3">ENGINE ARCHITECTURE</td>
                      <td className="p-3 font-bold text-[#1C1A17] dark:text-[#E8E3D8]">{car.specs.engine}</td>
                    </tr>
                    {car.specs.displacement && (
                      <tr className="border-b border-hairline">
                        <td className="p-3 font-semibold text-[#7A7367]">DISPLACEMENT</td>
                        <td className="p-3 text-[#1C1A17] dark:text-[#E8E3D8]">{car.specs.displacement}</td>
                      </tr>
                    )}
                    <tr className="border-b border-hairline bg-[#EAE5D9]/40 dark:bg-[#1E1C1A]">
                      <td className="p-3 font-semibold text-[#7A7367]">HORSEPOWER OUTPUT</td>
                      <td className="p-3 font-bold text-[#C5A059]">{car.specs.horsepower}</td>
                    </tr>
                    {car.specs.torque && (
                      <tr className="border-b border-hairline">
                        <td className="p-3 font-semibold text-[#7A7367]">TORQUE OUTPUT</td>
                        <td className="p-3 text-[#1C1A17] dark:text-[#E8E3D8]">{car.specs.torque}</td>
                      </tr>
                    )}
                    <tr className="border-b border-hairline bg-[#EAE5D9]/40 dark:bg-[#1E1C1A]">
                      <td className="p-3 font-semibold text-[#7A7367]">0–60 MPH ACCELERATION</td>
                      <td className="p-3 font-bold text-[#1C1A17] dark:text-[#E8E3D8]">{car.specs.acceleration0to60}</td>
                    </tr>
                    <tr className="border-b border-hairline">
                      <td className="p-3 font-semibold text-[#7A7367]">VERIFIED TOP SPEED</td>
                      <td className="p-3 font-bold text-[#C5A059]">{car.specs.topSpeed}</td>
                    </tr>
                    <tr className="border-b border-hairline bg-[#EAE5D9]/40 dark:bg-[#1E1C1A]">
                      <td className="p-3 font-semibold text-[#7A7367]">KERB WEIGHT</td>
                      <td className="p-3 text-[#1C1A17] dark:text-[#E8E3D8]">{car.specs.weight}</td>
                    </tr>
                    <tr className="border-b border-hairline">
                      <td className="p-3 font-semibold text-[#7A7367]">DRIVETRAIN LAYOUT</td>
                      <td className="p-3 text-[#1C1A17] dark:text-[#E8E3D8]">{car.specs.drivetrain}</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#7A7367]">TRANSMISSION</td>
                      <td className="p-3 text-[#1C1A17] dark:text-[#E8E3D8]">{car.specs.transmission}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab 3: Quotes */}
          {activeTab === 'quotes' && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="font-archival text-sm tracking-widest text-[#C5A059] uppercase font-bold">
                IN ITS OWN WORDS — PERIOD REVIEWS & DRIVER TESTIMONY
              </h3>

              {car.quotes && car.quotes.length > 0 ? (
                <div className="space-y-6">
                  {car.quotes.map((quote, idx) => (
                    <blockquote
                      key={idx}
                      className="p-6 bg-[#EAE5D9]/40 dark:bg-[#1E1C1A] border-l-4 border-[#C5A059] space-y-3"
                    >
                      <p className="font-editorial-serif text-xl italic text-[#1C1A17] dark:text-[#E8E3D8] leading-relaxed">
                        "{quote.text}"
                      </p>
                      <footer className="font-mono-spec text-xs text-[#7A7367] dark:text-[#9E9689] flex items-center space-x-2">
                        <span className="font-bold text-[#C5A059]">{quote.author}</span>
                        <span>•</span>
                        <span>{quote.source}</span>
                        {quote.year && (
                          <>
                            <span>•</span>
                            <span>{quote.year}</span>
                          </>
                        )}
                      </footer>
                    </blockquote>
                  ))}
                </div>
              ) : (
                <p className="font-editorial-serif italic text-sm text-[#7A7367]">
                  No archival period quotes on record for this specific placard entry.
                </p>
              )}
            </div>
          )}

          {/* Tab 4: Gallery */}
          {activeTab === 'gallery' && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="font-archival text-sm tracking-widest text-[#C5A059] uppercase font-bold">
                HIGH-RESOLUTION PHOTOGRAPHY ARCHIVE
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {car.galleryImages.map((imgUrl, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedPhoto(imgUrl)}
                    className="aspect-[4/3] bg-[#121110] border border-hairline overflow-hidden cursor-pointer hover:border-[#C5A059] group"
                  >
                    <img
                      src={imgUrl}
                      alt={`${car.model} archive photo ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 saturate-90"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related / Similar Cars Strip */}
          {relatedCars.length > 0 && (
            <div className="pt-8 border-t border-hairline space-y-4">
              <h3 className="font-archival text-xs tracking-widest text-[#7A7367] uppercase font-bold">
                RELATED EXHIBITS ("IF YOU LIKE THIS, SEE...")
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedCars.map((relCar) => (
                  <div
                    key={relCar.id}
                    onClick={() => onSelectCar(relCar)}
                    className="p-3 bg-[#EAE5D9]/40 dark:bg-[#1A1815] border border-hairline hover:border-[#C5A059] cursor-pointer rounded-xs transition-colors flex items-center space-x-3"
                  >
                    <img
                      src={relCar.heroImage}
                      alt={relCar.model}
                      className="w-16 h-12 object-cover rounded-xs border border-hairline"
                    />
                    <div>
                      <h4 className="font-editorial-serif text-sm font-medium text-[#1C1A17] dark:text-[#E8E3D8] hover:text-[#C5A059]">
                        {relCar.make} {relCar.model}
                      </h4>
                      <span className="font-mono-spec text-[10px] text-[#7A7367]">
                        {relCar.years}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
