import React, { useState } from 'react';
import type { Car } from '../types/car';
import { ERAS } from '../data/eras';
import { ArrowRight, Volume2, Clock, Calendar, Sparkles } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';
import { handleImageError } from '../utils/imageFallback';

interface TimelineViewProps {
  cars: Car[];
  onSelectCar: (car: Car) => void;
}

const HISTORICAL_WORLD_EVENTS: { year: number; title: string; subtitle: string; eraId: string }[] = [
  { year: 1886, title: 'Patent Motorwagen No. 1 Birthed', subtitle: 'Karl Benz granted German patent DRP 37435 for three-wheeled motor carriage.', eraId: 'dawn' },
  { year: 1913, title: 'Highland Park Moving Assembly Line', subtitle: 'Henry Ford reduced Model T chassis build time from 12 hours to 93 minutes.', eraId: 'brass-age' },
  { year: 1936, title: 'Auto Union Streamliner 400 km/h Break', subtitle: 'Bernd Rosemeyer broke 400 km/h on Frankfurt Autobahn in V16 Auto Union.', eraId: 'art-deco' },
  { year: 1954, title: 'Mercedes 300SL NYC Global Debut', subtitle: 'Max Hoffman convinced Mercedes to adapt W194 racer with tubular spaceframe gullwings.', eraId: 'golden-age' },
  { year: 1966, title: 'Ford GT40 1-2-3 Le Mans Sweep', subtitle: 'Ford defeated Ferrari at 24 Hours of Le Mans in historic 1-2-3 finish.', eraId: 'muscle-lemans' },
  { year: 1974, title: 'Lamborghini Countach LP400 Wedge Era', subtitle: 'Marcello Gandini’s scissor-door wedge redefined supercar styling forever.', eraId: 'wedge-era' },
  { year: 1987, title: 'Ferrari F40 Breaks 200 MPH Barrier', subtitle: 'Nicola Materazzi twin-turbo V8 supercar became first road car to hit 201.4 mph.', eraId: 'turbo-era' },
  { year: 1998, title: 'McLaren F1 Sets 240.1 MPH Record', subtitle: 'Andy Wallace drove BMW V12 carbon-monocoque F1 to 240.1 mph at Ehra-Lessien.', eraId: 'analog-peak' },
  { year: 2005, title: 'Bugatti Veyron Breaks 1,000 BHP & 250 MPH', subtitle: 'Quad-turbo W16 hypercar established modern megawatt benchmark at 253.81 mph.', eraId: 'modern-hypercar' },
  { year: 2021, title: 'Rimac Nevera EV 1.81s World Record', subtitle: 'Four independent electric motors deliver 1,914 BHP and 1.81s 0-60 mph acceleration.', eraId: 'modern-hypercar' },
];

export const TimelineView: React.FC<TimelineViewProps> = ({ cars, onSelectCar }) => {
  const [selectedEraFilter, setSelectedEraFilter] = useState<string>('all');
  const [selectedDecadeRange, setSelectedDecadeRange] = useState<string>('all');

  // Filter cars chronologically
  const filteredCars = cars.filter((car) => {
    if (selectedEraFilter !== 'all' && car.era !== selectedEraFilter) return false;
    if (selectedDecadeRange !== 'all') {
      const year = car.startYear;
      if (selectedDecadeRange === '1880-1919' && (year < 1880 || year > 1919)) return false;
      if (selectedDecadeRange === '1920-1949' && (year < 1920 || year > 1949)) return false;
      if (selectedDecadeRange === '1950-1979' && (year < 1950 || year > 1979)) return false;
      if (selectedDecadeRange === '1980-1999' && (year < 1980 || year > 1999)) return false;
      if (selectedDecadeRange === '2000-2026' && year < 2000) return false;
    }
    return true;
  }).sort((a, b) => a.startYear - b.startYear);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 animate-fade-in">
      
      {/* Intro Header */}
      <div className="border-b border-hairline pb-6 space-y-2">
        <div className="flex items-center space-x-2 text-xs font-mono-spec tracking-widest text-[#C5A059] uppercase font-bold">
          <Clock className="w-4 h-4" />
          <span>ONE-STOP CHRONOLOGICAL HERITAGE ARCHIVE</span>
        </div>
        <h2 className="font-archival text-3xl sm:text-4xl text-[#1C1A17] dark:text-[#E8E3D8] font-bold tracking-wide">
          The Timeline of Automotive Evolution (1886 — 2026)
        </h2>
        <p className="font-editorial-serif text-base italic text-[#615B52] dark:text-[#A0988C] max-w-3xl">
          Tracing human motor mobility from 1886 steam and gas high-wheelers to modern 300+ mph megawatt electric hypercars.
        </p>
      </div>

      {/* Quick Era Epoch Jump & Decade Filter Bar */}
      <div className="bg-[#EAE5D9]/40 dark:bg-[#1A1815] border border-hairline p-4 rounded-xs space-y-3">
        
        {/* Era Epoch Buttons */}
        <div className="space-y-1.5">
          <span className="text-[10px] font-mono-spec tracking-widest text-[#7A7367] dark:text-[#9E9689] uppercase font-bold block">
            JUMP TO ERA EPOCH
          </span>
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setSelectedEraFilter('all')}
              className={`px-3 py-1 text-xs font-mono-spec uppercase rounded-xs border flex-none ${
                selectedEraFilter === 'all'
                  ? 'bg-[#1A1815] text-[#C5A059] border-[#C5A059] font-bold'
                  : 'bg-[#F6F3EC] dark:bg-[#22201D] text-[#615B52] dark:text-[#A0988C] border-hairline hover:border-[#C5A059]/50'
              }`}
            >
              All Eras ({cars.length})
            </button>

            {ERAS.map((era) => {
              const count = cars.filter((c) => c.era === era.id).length;
              if (count === 0) return null;
              const isSelected = selectedEraFilter === era.id;
              return (
                <button
                  key={era.id}
                  onClick={() => setSelectedEraFilter(isSelected ? 'all' : era.id)}
                  className={`px-3 py-1 text-xs font-mono-spec uppercase rounded-xs border flex-none flex items-center space-x-1.5 ${
                    isSelected
                      ? 'bg-[#1B3B2B] text-[#C5A059] border-[#C5A059] font-bold shadow-xs'
                      : 'bg-[#F6F3EC] dark:bg-[#22201D] text-[#615B52] dark:text-[#A0988C] border-hairline hover:border-[#C5A059]/50'
                  }`}
                >
                  <span>{era.name}</span>
                  <span className="text-[9px] opacity-70">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Decade Range Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-hairline text-xs font-mono-spec">
          <div className="flex items-center space-x-2">
            <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="text-[#7A7367] uppercase font-bold">DECADE RANGE:</span>
            {['all', '1880-1919', '1920-1949', '1950-1979', '1980-1999', '2000-2026'].map((range) => (
              <button
                key={range}
                onClick={() => setSelectedDecadeRange(range)}
                className={`px-2 py-0.5 rounded-xs border uppercase text-[10px] ${
                  selectedDecadeRange === range
                    ? 'bg-[#C5A059] text-[#121110] border-[#C5A059] font-bold'
                    : 'bg-[#F6F3EC] dark:bg-[#1E1C1A] text-[#615B52] dark:text-[#A0988C] border-hairline'
                }`}
              >
                {range === 'all' ? 'All Years' : range}
              </button>
            ))}
          </div>

          <span className="text-[#7A7367] font-bold">
            SHOWING {filteredCars.length} VEHICLES CHRONOLOGICALLY
          </span>
        </div>

      </div>

      {/* Timeline Tree Structure */}
      <div className="relative border-l-2 border-[#C5A059]/40 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-16">
        
        {ERAS.map((era) => {
          const eraCars = filteredCars.filter((car) => car.era === era.id);
          const eraEvents = HISTORICAL_WORLD_EVENTS.filter((e) => e.eraId === era.id);
          if (eraCars.length === 0 && eraEvents.length === 0) return null;

          return (
            <div key={era.id} className="relative space-y-6">
              
              {/* Era Header Plaque */}
              <div className="relative flex items-center">
                <div className="absolute -left-[31px] sm:-left-[47px] w-4 h-4 rounded-full bg-[#1A1815] border-2 border-[#C5A059]" />
                
                <div className="bg-[#1A1815] text-[#F6F3EC] px-4 py-2 border border-[#C5A059]/40 shadow-md rounded-xs flex items-center justify-between w-full max-w-3xl">
                  <div className="flex items-center space-x-3">
                    <span className="font-mono-spec text-xs text-[#C5A059] font-bold">
                      {era.timeframe}
                    </span>
                    <span className="text-[#8A8275]">•</span>
                    <h3 className="font-archival text-sm sm:text-base font-bold tracking-wider uppercase">
                      {era.name}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono-spec text-[#C5A059]">
                    {eraCars.length} Exhibits
                  </span>
                </div>
              </div>

              {/* Era Description Note */}
              <p className="font-editorial-serif text-sm italic text-[#7A7367] dark:text-[#9E9689] max-w-3xl">
                {era.description} — <span className="text-[#615B52] dark:text-[#B8B0A2] font-sans-ui not-italic">{era.curatorialNote}</span>
              </p>

              {/* Historical Context World Events Banner */}
              {eraEvents.map((evt) => (
                <div key={evt.title} className="p-3 bg-[#1B3B2B]/30 border border-[#C5A059]/40 rounded-xs space-y-1 max-w-3xl">
                  <div className="flex items-center space-x-2 text-xs font-mono-spec text-[#C5A059] font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>HISTORICAL WATERSHED EVENT ({evt.year}): {evt.title}</span>
                  </div>
                  <p className="text-[11px] font-sans-ui text-[#524B42] dark:text-[#A8A092] italic">
                    "{evt.subtitle}"
                  </p>
                </div>
              ))}

              {/* Cars Plotted Chronologically under Era */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                {eraCars.map((car, idx) => (
                  <div
                    key={car.id}
                    className="group relative bg-[#F6F3EC] dark:bg-[#1C1A17] border border-hairline hover:border-[#C5A059] p-4 rounded-xs transition-all duration-300 shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      {/* Year Plaque & Country */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 text-[10px] font-mono-spec bg-[#1A1815] text-[#C5A059] font-bold border border-[#C5A059]/30">
                          {car.startYear}
                        </span>
                        <span className="text-[10px] font-mono-spec uppercase text-[#7A7367]">
                          {car.country}
                        </span>
                      </div>

                      {/* Image Preview */}
                      <div
                        onClick={() => onSelectCar(car)}
                        className="relative aspect-[16/9] w-full overflow-hidden bg-[#121110] mb-3 cursor-pointer rounded-xs"
                      >
                        <img
                          src={car.heroImage}
                          alt={car.make}
                          loading="lazy"
                          onError={(e) => handleImageError(e, idx)}
                          className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 saturate-90"
                        />
                      </div>

                      <h4
                        onClick={() => onSelectCar(car)}
                        className="font-editorial-serif text-xl font-medium text-[#1C1A17] dark:text-[#E8E3D8] group-hover:text-[#C5A059] cursor-pointer transition-colors"
                      >
                        {car.make} <span className="italic text-[#615B52] dark:text-[#A0988C]">{car.model}</span>
                      </h4>

                      <p className="text-xs font-light text-[#524B42] dark:text-[#A8A092] mt-1 line-clamp-2 leading-relaxed">
                        {car.editorialHook}
                      </p>
                    </div>

                    {/* Quick Specs & Footer Action */}
                    <div className="mt-4 pt-3 border-t border-hairline flex items-center justify-between">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          audioEngine.playEngineNote(car.engineSoundProfile || 'v12');
                        }}
                        className="flex items-center space-x-1 text-[10px] font-mono-spec text-[#7A7367] hover:text-[#C5A059]"
                        title="Play Engine Sound Note"
                      >
                        <Volume2 className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span>SOUND</span>
                      </button>

                      <button
                        onClick={() => onSelectCar(car)}
                        className="flex items-center space-x-1 text-xs font-mono-spec text-[#C5A059] group-hover:underline font-bold"
                      >
                        <span>FULL ENTRY</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
};
