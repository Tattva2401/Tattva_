import React, { useState } from 'react';
import type { Car } from '../types/car';
import { MANUFACTURING_HUBS } from '../data/hubs';
import type { ManufacturingHub } from '../data/hubs';
import { MapPin, Globe, ArrowRight, Compass, Volume2, ShieldCheck, Zap, Gauge, User, Award } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';
import { handleImageError } from '../utils/imageFallback';

interface HeritageMapViewProps {
  cars: Car[];
  onSelectHub: (country: string) => void;
  onSelectCar: (car: Car) => void;
}

export const HeritageMapView: React.FC<HeritageMapViewProps> = ({
  cars,
  onSelectHub,
  onSelectCar,
}) => {
  const [selectedHub, setSelectedHub] = useState<ManufacturingHub>(MANUFACTURING_HUBS[1]); // Default to Maranello Motor Valley
  const [activeTab, setActiveTab] = useState<'overview' | 'engineers' | 'telemetry' | 'exhibits'>('overview');

  const hubCars = cars.filter(
    (c) => c.country.toLowerCase() === selectedHub.country.toLowerCase() ||
           selectedHub.iconicBrands.some(b => c.make.toLowerCase().includes(b.toLowerCase()))
  );

  // Hub Telemetry Math
  const totalBhp = hubCars.reduce((acc, car) => acc + (parseInt(car.specs.horsepower) || 0), 0);
  const topSpeedNum = Math.max(...hubCars.map(c => parseFloat(c.specs.topSpeed) || 0), 0);

  // Famous Engineers per Hub Lookup
  const hubEngineers: Record<string, { name: string; role: string; contribution: string }[]> = {
    'maranello': [
      { name: 'Enzo Ferrari', role: 'Founder & Team Principal', contribution: 'Birthed Scuderia Ferrari and the iconic V12 grand tourer legacy.' },
      { name: 'Mauro Forghieri', role: 'Chief Technical Director', contribution: 'Engineered 250 GTO aerodynamics and 312T F1 championship cars.' },
      { name: 'Marcello Gandini', role: 'Bertone Master Stylist', contribution: 'Penned the Miura and Countach wedge silhouettes.' }
    ],
    'stuttgart': [
      { name: 'Ferdinand Porsche', role: 'Founder & Chief Designer', contribution: 'Designed the original VW Beetle and 356 lightweight sports cars.' },
      { name: 'Hans Mezger', role: 'Engine Guru', contribution: 'Created the air-cooled flat-6 Mezger engine and 917 Le Mans twin-turbo flat-12.' },
      { name: 'Gottlieb Daimler', role: 'Co-Inventor of Internal Combustion', contribution: 'Pioneered high-speed petrol engines at Cannstatt.' }
    ],
    'detroit': [
      { name: 'Henry Ford', role: 'Industrial Pioneer', contribution: 'Invented the moving assembly line for Model T mass motorization.' },
      { name: 'Carroll Shelby', role: 'Performance Innovator', contribution: 'Mated Ford V8 power with AC chassis to create the Cobra and GT40.' },
      { name: 'Zora Arkus-Duntov', role: 'Father of the Corvette', contribution: 'Transformed Corvette into a mid-engine capable racing benchmark.' }
    ],
    'coventry': [
      { name: 'Sir William Lyons', role: 'Jaguar Founder & Stylist', contribution: 'Penned the timeless curves of XK120, C-Type, D-Type, and E-Type.' },
      { name: 'Malcolm Sayer', role: 'Aeronautical Aerodynamicist', contribution: 'Applied aircraft wind-tunnel principles to Jaguar competition bodies.' }
    ],
    'molsheim': [
      { name: 'Ettore Bugatti', role: 'Artistic Master Mind', contribution: 'Treated engineering as pure fine art; created Type 35 & Royale.' },
      { name: 'Jean Bugatti', role: 'Styling Genius', contribution: 'Designed the iconic Type 57 SC Atlantic teardrop masterpiece.' }
    ],
    'tokyo': [
      { name: 'Ayrton Senna', role: 'Honda Test Consultant', contribution: 'Tested NSX prototypes at Suzuka to refine aluminum chassis rigidity.' },
      { name: 'Kazutoshi Mizuno', role: 'GT-R Chief Engineer', contribution: 'Created the all-conquering R34 and R35 ATTESA E-TS AWD system.' }
    ],
    'zagreb': [
      { name: 'Mate Rimac', role: 'EV Hypercar Visionary', contribution: 'Pioneered 1,914 BHP all-wheel torque vectoring EV powertrains.' }
    ],
    'silicon-valley': [
      { name: 'Elon Musk & JB Straubel', role: 'EV Architectural Pioneers', contribution: 'Proved electric powertrains could surpass gasoline supercar performance.' }
    ]
  };

  const currentEngineers = hubEngineers[selectedHub.id] || hubEngineers['maranello'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 animate-fade-in">
      
      {/* Editorial Header */}
      <div className="border-b border-hairline pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono-spec tracking-widest text-[#C5A059] uppercase font-bold">
            <Globe className="w-4 h-4" />
            <span>ONE-STOP GEOGRAPHIC HERITAGE ATLAS</span>
          </div>
          <h2 className="font-archival text-3xl sm:text-4xl font-bold text-[#1C1A17] dark:text-[#E8E3D8] tracking-wide mt-1">
            Global Centers of Automotive Engineering & Heritage
          </h2>
          <p className="font-editorial-serif text-base italic text-[#615B52] dark:text-[#A0988C] max-w-3xl mt-1">
            Explore global manufacturing hubs, historic coachbuilding ateliers, famous chief engineers, and regional telemetry metrics in one unified dashboard.
          </p>
        </div>

        <div className="flex items-center space-x-3 text-xs font-mono-spec text-[#7A7367]">
          <span className="px-3 py-1 bg-[#1A1815] text-[#C5A059] border border-[#C5A059]/40 font-bold rounded-xs">
            {MANUFACTURING_HUBS.length} GLOBAL HUBS ON RECORD
          </span>
        </div>
      </div>

      {/* Main Interactive Map & Dossier Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Visual Map Canvas & Interactive Pins (2 Columns) */}
        <div className="lg:col-span-2 relative bg-[#1A1815] text-[#F6F3EC] p-6 sm:p-8 rounded-xs border border-hairline shadow-2xl overflow-hidden min-h-[540px] flex flex-col justify-between paper-grain">
          
          {/* Subtle Geographic Grid Lines backdrop */}
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:28px_28px]" />
          
          {/* Top Atlas Label */}
          <div className="relative z-10 flex items-center justify-between font-mono-spec text-xs border-b border-[#38342F] pb-3">
            <span className="text-[#C5A059] tracking-widest uppercase font-bold flex items-center space-x-1.5">
              <Compass className="w-4 h-4" />
              <span>GEOGRAPHIC BEACON GRID — SELECT HUB PIN TO INSPECT</span>
            </span>
            <span className="text-[#9E9689] font-mono-spec text-[11px]">
              CURRENT: <span className="text-[#C5A059] font-bold uppercase">{selectedHub.name} ({selectedHub.country})</span>
            </span>
          </div>

          {/* Interactive Hub Location Beacons Grid */}
          <div className="relative z-10 my-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {MANUFACTURING_HUBS.map((hub) => {
              const isSelected = selectedHub.id === hub.id;
              const count = cars.filter(c => c.country.toLowerCase() === hub.country.toLowerCase()).length;
              return (
                <button
                  key={hub.id}
                  onClick={() => setSelectedHub(hub)}
                  className={`p-4 rounded-xs border text-left transition-all duration-300 flex flex-col justify-between space-y-3 relative overflow-hidden group ${
                    isSelected
                      ? 'bg-[#C5A059] text-[#121110] border-[#C5A059] shadow-xl scale-102 font-semibold'
                      : 'bg-[#121110]/90 text-[#E8E3D8] border-[#4A443B] hover:border-[#C5A059]/70 hover:bg-[#25221F]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1.5">
                      <MapPin className={`w-4 h-4 ${isSelected ? 'text-[#121110]' : 'text-[#C5A059]'}`} />
                      <span className={`text-[10px] font-mono-spec uppercase font-bold ${isSelected ? 'text-[#121110]' : 'text-[#C5A059]'}`}>
                        {hub.country}
                      </span>
                    </div>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#121110] animate-ping" />
                    )}
                  </div>

                  <div>
                    <h4 className="font-archival text-sm font-bold leading-tight">
                      {hub.name}
                    </h4>
                    <span className="text-[9px] font-mono-spec opacity-80 block truncate mt-0.5">
                      {hub.historicalTitle}
                    </span>
                  </div>

                  <div className={`text-[9px] font-mono-spec pt-2 border-t flex justify-between ${isSelected ? 'border-[#121110]/20' : 'border-[#2A2723]'}`}>
                    <span>EXHIBITS:</span>
                    <span className="font-bold">{count}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Hub Summary Bar */}
          <div className="relative z-10 bg-[#121110]/90 p-4 rounded-xs border border-[#38342F] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-spec">
            <div className="flex items-center space-x-3">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <div>
                <span className="text-[#C5A059] font-bold uppercase">{selectedHub.name} ({selectedHub.country})</span>
                <p className="text-[11px] text-[#9E9689] font-sans-ui italic">"{selectedHub.historicalTitle}"</p>
              </div>
            </div>

            <button
              onClick={() => onSelectHub(selectedHub.country)}
              className="px-4 py-2 bg-[#C5A059] text-[#121110] font-mono-spec text-xs font-bold uppercase rounded-xs hover:bg-[#D4AF66] transition-colors flex items-center space-x-1.5 flex-none"
            >
              <span>Filter Gallery by {selectedHub.country}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Selected Hub Dossier Panel (1 Column) */}
        <div className="bg-[#F6F3EC] dark:bg-[#181614] border border-hairline p-6 rounded-xs space-y-6 shadow-sm">
          
          {/* Dossier Header */}
          <div className="space-y-2 border-b border-hairline pb-4">
            <div className="flex items-center justify-between">
              <span className="font-mono-spec text-[10px] text-[#C5A059] uppercase font-bold tracking-widest">
                FACILITY DOSSIER ARCHIVE
              </span>
              <span className="px-2.5 py-0.5 text-[10px] font-mono-spec bg-[#1A1815] text-[#C5A059] border border-[#C5A059]/30 uppercase font-bold">
                {selectedHub.country}
              </span>
            </div>

            <h3 className="font-archival text-2xl font-bold text-[#1C1A17] dark:text-[#E8E3D8]">
              {selectedHub.name}
            </h3>
          </div>

          {/* Section Dossier Navigation Tabs */}
          <div className="flex border-b border-hairline text-xs font-mono-spec uppercase space-x-3">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-2 transition-colors ${
                activeTab === 'overview'
                  ? 'text-[#C5A059] font-bold border-b-2 border-[#C5A059]'
                  : 'text-[#7A7367] hover:text-[#1C1A17] dark:hover:text-[#E8E3D8]'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('engineers')}
              className={`pb-2 transition-colors ${
                activeTab === 'engineers'
                  ? 'text-[#C5A059] font-bold border-b-2 border-[#C5A059]'
                  : 'text-[#7A7367] hover:text-[#1C1A17] dark:hover:text-[#E8E3D8]'
              }`}
            >
              Engineers
            </button>
            <button
              onClick={() => setActiveTab('telemetry')}
              className={`pb-2 transition-colors ${
                activeTab === 'telemetry'
                  ? 'text-[#C5A059] font-bold border-b-2 border-[#C5A059]'
                  : 'text-[#7A7367] hover:text-[#1C1A17] dark:hover:text-[#E8E3D8]'
              }`}
            >
              Telemetry
            </button>
            <button
              onClick={() => setActiveTab('exhibits')}
              className={`pb-2 transition-colors ${
                activeTab === 'exhibits'
                  ? 'text-[#C5A059] font-bold border-b-2 border-[#C5A059]'
                  : 'text-[#7A7367] hover:text-[#1C1A17] dark:hover:text-[#E8E3D8]'
              }`}
            >
              Exhibits ({hubCars.length})
            </button>
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-4 animate-fade-in">
              <p className="font-sans-ui text-xs text-[#524B42] dark:text-[#A8A092] leading-relaxed font-light">
                {selectedHub.description}
              </p>

              <div className="space-y-2 pt-2 border-t border-hairline">
                <span className="font-mono-spec text-[10px] text-[#7A7367] uppercase block font-bold">
                  ICONIC MARQUES & ATELIERS
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedHub.iconicBrands.map((brand) => (
                    <span
                      key={brand}
                      className="px-2 py-1 text-xs font-mono-spec bg-[#EAE5D9]/60 dark:bg-[#25221F] text-[#1C1A17] dark:text-[#E8E3D8] border border-hairline rounded-xs"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ENGINEERS */}
          {activeTab === 'engineers' && (
            <div className="space-y-3 animate-fade-in">
              <span className="font-mono-spec text-[10px] text-[#7A7367] uppercase block font-bold">
                FAMOUS CHIEF ENGINEERS & DESIGNERS
              </span>
              {currentEngineers.map((eng) => (
                <div key={eng.name} className="p-3 bg-[#EAE5D9]/40 dark:bg-[#1E1C1A] border border-hairline rounded-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-editorial-serif text-sm font-bold text-[#1C1A17] dark:text-[#E8E3D8] flex items-center space-x-1.5">
                      <User className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{eng.name}</span>
                    </span>
                    <span className="text-[9px] font-mono-spec text-[#C5A059] uppercase">{eng.role}</span>
                  </div>
                  <p className="text-[11px] font-sans-ui text-[#615B52] dark:text-[#A0988C] italic">
                    "{eng.contribution}"
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: TELEMETRY */}
          {activeTab === 'telemetry' && (
            <div className="space-y-4 animate-fade-in">
              <span className="font-mono-spec text-[10px] text-[#7A7367] uppercase block font-bold">
                REGIONAL TELEMETRY METRICS
              </span>
              
              <div className="grid grid-cols-2 gap-3 font-mono-spec text-xs">
                <div className="p-3 bg-[#EAE5D9]/40 dark:bg-[#1E1C1A] border border-hairline rounded-xs space-y-1">
                  <span className="text-[9px] text-[#7A7367] uppercase flex items-center space-x-1">
                    <Zap className="w-3 h-3 text-[#C5A059]" />
                    <span>CUMULATIVE BHP</span>
                  </span>
                  <span className="font-bold text-base text-[#C5A059] block">{totalBhp.toLocaleString()} HP</span>
                </div>

                <div className="p-3 bg-[#EAE5D9]/40 dark:bg-[#1E1C1A] border border-hairline rounded-xs space-y-1">
                  <span className="text-[9px] text-[#7A7367] uppercase flex items-center space-x-1">
                    <Gauge className="w-3 h-3 text-[#C5A059]" />
                    <span>TOP SPEED RECORD</span>
                  </span>
                  <span className="font-bold text-base text-[#C5A059] block">{topSpeedNum > 0 ? `${topSpeedNum} MPH` : 'N/A'}</span>
                </div>
              </div>

              <div className="p-3 bg-[#1B3B2B]/20 border border-[#C5A059]/30 rounded-xs space-y-1 text-xs font-mono-spec">
                <span className="text-[#C5A059] font-bold flex items-center space-x-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>REGIONAL HERITAGE SEAL</span>
                </span>
                <p className="text-[11px] text-[#524B42] dark:text-[#A8A092] font-light">
                  {selectedHub.name} represents a foundational pillar of global motoring culture, holding multiple international speed and endurance championships.
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: EXHIBITS */}
          {activeTab === 'exhibits' && (
            <div className="space-y-2 max-h-64 overflow-y-auto pr-1 animate-fade-in">
              {hubCars.map((car, idx) => (
                <div
                  key={car.id}
                  onClick={() => onSelectCar(car)}
                  className="p-2.5 bg-[#EAE5D9]/40 dark:bg-[#1F1D1A] border border-hairline hover:border-[#C5A059] rounded-xs cursor-pointer flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={car.heroImage}
                      alt={car.model}
                      onError={(e) => handleImageError(e, idx)}
                      className="w-12 h-9 object-cover rounded-xs border border-hairline saturate-90"
                    />
                    <div>
                      <h4 className="font-editorial-serif text-sm text-[#1C1A17] dark:text-[#E8E3D8] group-hover:text-[#C5A059]">
                        {car.make} {car.model}
                      </h4>
                      <span className="font-mono-spec text-[10px] text-[#7A7367]">
                        {car.years} • {car.specs.topSpeed}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1.5">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        audioEngine.playEngineNote(car.engineSoundProfile || 'v12');
                      }}
                      className="p-1 text-[#7A7367] hover:text-[#C5A059]"
                      title="Listen to Engine Sound"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
