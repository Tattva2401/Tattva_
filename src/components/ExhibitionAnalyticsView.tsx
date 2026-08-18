import React from 'react';
import type { Car } from '../types/car';
import { BarChart3, Zap, Trophy, DollarSign, Volume2 } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';
import { handleImageError } from '../utils/imageFallback';

interface ExhibitionAnalyticsViewProps {
  cars: Car[];
  onSelectCar: (car: Car) => void;
}

export const ExhibitionAnalyticsView: React.FC<ExhibitionAnalyticsViewProps> = ({
  cars,
  onSelectCar,
}) => {

  // Calculate analytics metrics
  const totalHp = cars.reduce((acc, c) => {
    const hpNum = parseInt(c.specs.horsepower) || 0;
    return acc + hpNum;
  }, 0);

  const countriesCount: Record<string, number> = {};
  cars.forEach((c) => {
    countriesCount[c.country] = (countriesCount[c.country] || 0) + 1;
  });

  // Powertrain Distribution Math
  const engineDistribution: Record<string, number> = {
    'V12 Architecture': 0,
    'V8 Muscle / Twin-Turbo': 0,
    'Flat-6 Air/Water Cooled': 0,
    'Inline-6 Twin-Turbo': 0,
    'W16 Quad-Turbo Megawatt': 0,
    'Electric Motor Vectoring': 0,
    'Inline-4 Vintage': 0,
  };

  cars.forEach((c) => {
    const eng = c.specs.engine.toLowerCase();
    if (eng.includes('v12')) engineDistribution['V12 Architecture']++;
    else if (eng.includes('v8')) engineDistribution['V8 Muscle / Twin-Turbo']++;
    else if (eng.includes('flat') || eng.includes('boxer')) engineDistribution['Flat-6 Air/Water Cooled']++;
    else if (eng.includes('inline-6') || eng.includes('straight-6') || eng.includes('2jz') || eng.includes('rb26')) engineDistribution['Inline-6 Twin-Turbo']++;
    else if (eng.includes('w16')) engineDistribution['W16 Quad-Turbo Megawatt']++;
    else if (eng.includes('electric') || eng.includes('induction')) engineDistribution['Electric Motor Vectoring']++;
    else engineDistribution['Inline-4 Vintage']++;
  });

  const sortedBySpeed = [...cars].sort((a, b) => {
    const speedA = parseFloat(a.specs.topSpeed) || 0;
    const speedB = parseFloat(b.specs.topSpeed) || 0;
    return speedB - speedA;
  });

  const sortedByAcceleration = [...cars].sort((a, b) => {
    const accA = parseFloat(a.specs.acceleration0to60) || 99;
    const accB = parseFloat(b.specs.acceleration0to60) || 99;
    return accA - accB;
  });

  // Power to weight ratio calculation (BHP / Ton)
  const sortedByPowerToWeight = [...cars].map((car) => {
    const hp = parseInt(car.specs.horsepower) || 100;
    const weightLbs = parseInt((car.specs.weight || '').replace(/,/g, '')) || 3000;
    const weightTons = weightLbs / 2204.62;
    const bhpPerTon = Math.round(hp / weightTons);
    return { car, bhpPerTon };
  }).sort((a, b) => b.bhpPerTon - a.bhpPerTon);

  const topFastestCars = sortedBySpeed.slice(0, 5);
  const topQuickestCars = sortedByAcceleration.slice(0, 5);
  const topPowerToWeightCars = sortedByPowerToWeight.slice(0, 5);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 animate-fade-in">
      
      {/* Header */}
      <div className="border-b border-hairline pb-6 space-y-2">
        <div className="flex items-center space-x-2 text-xs font-mono-spec tracking-widest text-[#C5A059] uppercase font-bold">
          <BarChart3 className="w-4 h-4" />
          <span>ENTERPRISE EXHIBITION ANALYTICS & INSIGHTS</span>
        </div>
        <h2 className="font-archival text-3xl sm:text-4xl font-bold text-[#1C1A17] dark:text-[#E8E3D8] tracking-wide">
          Museum Archive Quantitative Intelligence Dashboard
        </h2>
        <p className="font-editorial-serif text-base italic text-[#615B52] dark:text-[#A0988C] max-w-3xl">
          Aggregated quantitative metrics across horsepower output, verified top speeds, power-to-weight ratios, powertrain distribution, and valuation benchmarks.
        </p>
      </div>

      {/* Top Key Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="p-5 bg-[#1A1815] text-[#F6F3EC] border border-[#C5A059]/40 rounded-xs space-y-2 shadow-sm">
          <span className="font-mono-spec text-[10px] text-[#C5A059] uppercase tracking-wider block font-bold">
            CUMULATIVE HORSEPOWER
          </span>
          <div className="flex items-baseline space-x-2">
            <span className="font-archival text-3xl font-bold text-[#FAF8F5]">
              {totalHp.toLocaleString()}
            </span>
            <span className="font-mono-spec text-xs text-[#C5A059]">BHP</span>
          </div>
          <p className="text-[11px] text-[#9E9689] font-light">
            Combined mechanical power output across all {cars.length} archived icons.
          </p>
        </div>

        <div className="p-5 bg-[#F6F3EC] dark:bg-[#181614] border border-hairline rounded-xs space-y-2 shadow-sm">
          <span className="font-mono-spec text-[10px] text-[#7A7367] uppercase tracking-wider block font-bold">
            ESTIMATED ARCHIVE VALUATION
          </span>
          <div className="flex items-baseline space-x-2">
            <span className="font-archival text-3xl font-bold text-[#C5A059]">
              $245M+
            </span>
            <span className="font-mono-spec text-xs text-[#7A7367]">USD</span>
          </div>
          <p className="text-[11px] text-[#7A7367] font-light">
            Calculated auction market value of featured exhibits.
          </p>
        </div>

        <div className="p-5 bg-[#F6F3EC] dark:bg-[#181614] border border-hairline rounded-xs space-y-2 shadow-sm">
          <span className="font-mono-spec text-[10px] text-[#7A7367] uppercase tracking-wider block font-bold">
            FASTEST ACCELERATION
          </span>
          <div className="flex items-baseline space-x-2">
            <span className="font-archival text-3xl font-bold text-[#1C1A17] dark:text-[#E8E3D8]">
              1.74
            </span>
            <span className="font-mono-spec text-xs text-[#C5A059]">SEC (0-60)</span>
          </div>
          <p className="text-[11px] text-[#7A7367] font-light">
            Held by the 2021 Rimac Nevera quad-motor hypercar.
          </p>
        </div>

        <div className="p-5 bg-[#F6F3EC] dark:bg-[#181614] border border-hairline rounded-xs space-y-2 shadow-sm">
          <span className="font-mono-spec text-[10px] text-[#7A7367] uppercase tracking-wider block font-bold">
            MANUFACTURING NATIONS
          </span>
          <div className="flex items-baseline space-x-2">
            <span className="font-archival text-3xl font-bold text-[#1C1A17] dark:text-[#E8E3D8]">
              {Object.keys(countriesCount).length}
            </span>
            <span className="font-mono-spec text-xs text-[#7A7367]">GLOBAL HUBS</span>
          </div>
          <p className="text-[11px] text-[#7A7367] font-light">
            Germany, US, UK, Italy, France, Japan, Croatia.
          </p>
        </div>

      </div>

      {/* Rankings Tables: Top Speed & Acceleration & Power-to-Weight */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Top 5 Speed Records */}
        <div className="bg-[#F6F3EC] dark:bg-[#181614] border border-hairline p-6 rounded-xs space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-hairline pb-3">
            <div className="flex items-center space-x-2 text-xs font-mono-spec text-[#C5A059] uppercase font-bold">
              <Trophy className="w-4 h-4 text-[#C5A059]" />
              <span>TOP SPEED HALL OF FAME</span>
            </div>
            <span className="text-[10px] font-mono-spec text-[#7A7367]">MPH</span>
          </div>

          <div className="space-y-3">
            {topFastestCars.map((car, idx) => (
              <div
                key={car.id}
                onClick={() => onSelectCar(car)}
                className="p-3 bg-[#EAE5D9]/40 dark:bg-[#1F1D1A] border border-hairline hover:border-[#C5A059] cursor-pointer rounded-xs flex items-center justify-between group transition-colors font-mono-spec text-xs"
              >
                <div className="flex items-center space-x-2.5">
                  <span className="font-bold text-[#C5A059] text-xs w-4">#{idx + 1}</span>
                  <img src={car.heroImage} alt={car.model} onError={(e) => handleImageError(e, idx)} className="w-10 h-7 object-cover rounded-xs border border-hairline saturate-90" />
                  <div>
                    <h4 className="font-editorial-serif text-sm font-bold text-[#1C1A17] dark:text-[#E8E3D8] group-hover:text-[#C5A059]">
                      {car.make} {car.model}
                    </h4>
                    <span className="text-[9px] text-[#7A7367]">{car.years}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="font-bold text-[#C5A059] text-xs">{car.specs.topSpeed}</span>
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
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top 5 Quickest Acceleration */}
        <div className="bg-[#F6F3EC] dark:bg-[#181614] border border-hairline p-6 rounded-xs space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-hairline pb-3">
            <div className="flex items-center space-x-2 text-xs font-mono-spec text-[#C5A059] uppercase font-bold">
              <Zap className="w-4 h-4 text-[#C5A059]" />
              <span>0–60 MPH LEADERBOARD</span>
            </div>
            <span className="text-[10px] font-mono-spec text-[#7A7367]">SEC</span>
          </div>

          <div className="space-y-3">
            {topQuickestCars.map((car, idx) => (
              <div
                key={car.id}
                onClick={() => onSelectCar(car)}
                className="p-3 bg-[#EAE5D9]/40 dark:bg-[#1F1D1A] border border-hairline hover:border-[#C5A059] cursor-pointer rounded-xs flex items-center justify-between group transition-colors font-mono-spec text-xs"
              >
                <div className="flex items-center space-x-2.5">
                  <span className="font-bold text-[#C5A059] text-xs w-4">#{idx + 1}</span>
                  <img src={car.heroImage} alt={car.model} onError={(e) => handleImageError(e, idx)} className="w-10 h-7 object-cover rounded-xs border border-hairline saturate-90" />
                  <div>
                    <h4 className="font-editorial-serif text-sm font-bold text-[#1C1A17] dark:text-[#E8E3D8] group-hover:text-[#C5A059]">
                      {car.make} {car.model}
                    </h4>
                    <span className="text-[9px] text-[#7A7367]">{car.years}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="font-bold text-[#1C1A17] dark:text-[#E8E3D8] text-xs">{car.specs.acceleration0to60}</span>
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
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Power-to-Weight Ratio Ranking */}
        <div className="bg-[#F6F3EC] dark:bg-[#181614] border border-hairline p-6 rounded-xs space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-hairline pb-3">
            <div className="flex items-center space-x-2 text-xs font-mono-spec text-[#C5A059] uppercase font-bold">
              <DollarSign className="w-4 h-4 text-[#C5A059]" />
              <span>POWER-TO-WEIGHT RATIO</span>
            </div>
            <span className="text-[10px] font-mono-spec text-[#7A7367]">BHP/TON</span>
          </div>

          <div className="space-y-3">
            {topPowerToWeightCars.map(({ car, bhpPerTon }, idx) => (
              <div
                key={car.id}
                onClick={() => onSelectCar(car)}
                className="p-3 bg-[#EAE5D9]/40 dark:bg-[#1F1D1A] border border-hairline hover:border-[#C5A059] cursor-pointer rounded-xs flex items-center justify-between group transition-colors font-mono-spec text-xs"
              >
                <div className="flex items-center space-x-2.5">
                  <span className="font-bold text-[#C5A059] text-xs w-4">#{idx + 1}</span>
                  <img src={car.heroImage} alt={car.model} onError={(e) => handleImageError(e, idx)} className="w-10 h-7 object-cover rounded-xs border border-hairline saturate-90" />
                  <div>
                    <h4 className="font-editorial-serif text-sm font-bold text-[#1C1A17] dark:text-[#E8E3D8] group-hover:text-[#C5A059]">
                      {car.make} {car.model}
                    </h4>
                    <span className="text-[9px] text-[#7A7367]">{car.years}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="font-bold text-[#C5A059] text-xs block">{bhpPerTon} BHP/TON</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Engine Architecture Powertrain Distribution */}
      <div className="bg-[#F6F3EC] dark:bg-[#181614] border border-hairline p-6 rounded-xs space-y-4 shadow-sm font-mono-spec text-xs">
        <span className="text-[#C5A059] uppercase font-bold tracking-wider block">
          ENGINE ARCHITECTURE POWERTRAIN DISTRIBUTION
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(engineDistribution).map(([label, count]) => {
            const pct = Math.round((count / cars.length) * 100);
            return (
              <div key={label} className="space-y-1 p-2.5 bg-[#EAE5D9]/40 dark:bg-[#1A1815] border border-hairline rounded-xs">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-[#1C1A17] dark:text-[#E8E3D8]">{label}</span>
                  <span className="text-[#C5A059]">{count} Exhibits ({pct}%)</span>
                </div>
                <div className="w-full h-2 bg-[#EAE5D9] dark:bg-[#25221F] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#1B3B2B] to-[#C5A059] transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
