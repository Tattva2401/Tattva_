import React from 'react';
import type { Car } from '../types/car';
import { CARS } from '../data/carsData';
import { SlidersHorizontal, X, ArrowUpRight, Gauge, Zap, Volume2, Trophy, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';
import { handleImageError } from '../utils/imageFallback';

interface CompareViewProps {
  comparedCars: Car[];
  onRemoveFromCompare: (carId: string) => void;
  onAddCarToCompare: (car: Car) => void;
  onSelectCar: (car: Car) => void;
  onReorderCompare?: (newCars: Car[]) => void;
}

export const CompareView: React.FC<CompareViewProps> = ({
  comparedCars,
  onRemoveFromCompare,
  onAddCarToCompare,
  onSelectCar,
  onReorderCompare,
}) => {
  const [selectedDropdownCarId, setSelectedDropdownCarId] = React.useState<string>('');

  const handleAddDropdown = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    if (!id) return;
    const targetCar = CARS.find((c) => c.id === id);
    if (targetCar && !comparedCars.some((c) => c.id === id)) {
      onAddCarToCompare(targetCar);
    }
    setSelectedDropdownCarId('');
  };

  const handleMoveColumn = (index: number, direction: 'left' | 'right') => {
    const newIndex = direction === 'left' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= comparedCars.length) return;
    const updated = [...comparedCars];
    const [moved] = updated.splice(index, 1);
    updated.splice(newIndex, 0, moved);
    if (onReorderCompare) {
      onReorderCompare(updated);
    }
  };

  const availableCars = CARS.filter((c) => !comparedCars.some((comp) => comp.id === c.id));

  // Max values for telemetry bars
  const maxTopSpeed = Math.max(...comparedCars.map((c) => parseFloat(c.specs.topSpeed) || 200), 250);
  const maxHorsepower = Math.max(...comparedCars.map((c) => parseInt(c.specs.horsepower) || 500), 1000);

  // Winner calculations
  const topSpeedWinner = [...comparedCars].sort((a, b) => (parseFloat(b.specs.topSpeed) || 0) - (parseFloat(a.specs.topSpeed) || 0))[0];
  const hpWinner = [...comparedCars].sort((a, b) => (parseInt(b.specs.horsepower) || 0) - (parseInt(a.specs.horsepower) || 0))[0];

  const handleExportCSV = () => {
    if (comparedCars.length === 0) return;
    const headers = ['Make', 'Model', 'Years', 'Country', 'Engine', 'Displacement', 'Horsepower', 'Top Speed', '0-60 MPH', 'Weight', 'Valuation'];
    const rows = comparedCars.map(c => [
      `"${c.make}"`,
      `"${c.model}"`,
      `"${c.years}"`,
      `"${c.country}"`,
      `"${c.specs.engine}"`,
      `"${c.specs.displacement}"`,
      `"${c.specs.horsepower}"`,
      `"${c.specs.topSpeed}"`,
      `"${c.specs.acceleration0to60}"`,
      `"${c.specs.weight}"`,
      `"${c.estimatedValuation || 'N/A'}"`
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `automotive_icons_comparison_${Date.now()}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      
      {/* Header */}
      <div className="border-b border-hairline pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-mono-spec text-xs text-[#C5A059] tracking-widest uppercase font-bold">
            PERIOD BROCHURE SPEC COMPARISON MATRIX
          </span>
          <h2 className="font-archival text-3xl sm:text-4xl text-[#1C1A17] dark:text-[#E8E3D8] font-bold tracking-wide mt-1">
            Side-by-Side Mechanical Spec Sheet & Telemetry
          </h2>
          <p className="font-editorial-serif text-base italic text-[#615B52] dark:text-[#A0988C] mt-1">
            Compare performance benchmarks, engineering layouts, weight ratios, and historical claims side-by-side. Re-order columns with the left/right controls.
          </p>
        </div>

        {/* Export & Add Controls */}
        <div className="flex flex-wrap items-center gap-3">
          {comparedCars.length > 0 && (
            <button
              onClick={handleExportCSV}
              className="flex items-center space-x-1.5 px-3 py-2 bg-[#1A1815] text-[#C5A059] border border-[#C5A059]/40 hover:bg-[#25221F] font-mono-spec text-xs font-bold uppercase rounded-xs transition-colors"
              title="Export Spec Comparison Matrix to CSV"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
          )}

          {comparedCars.length < 4 && (
            <select
              value={selectedDropdownCarId}
              onChange={handleAddDropdown}
              className="bg-[#EAE5D9]/60 dark:bg-[#1E1C1A] text-[#1C1A17] dark:text-[#E8E3D8] border border-hairline px-3 py-2 text-xs font-mono-spec rounded-xs focus:outline-none focus:border-[#C5A059]"
            >
              <option value="">+ Add Car to Compare ({4 - comparedCars.length} remaining)...</option>
              {availableCars.map((car) => (
                <option key={car.id} value={car.id}>
                  {car.make} {car.model} ({car.startYear})
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      {comparedCars.length === 0 ? (
        <div className="p-12 text-center bg-[#EAE5D9]/30 dark:bg-[#1A1815] border border-hairline rounded-xs space-y-4">
          <SlidersHorizontal className="w-8 h-8 text-[#C5A059] mx-auto" />
          <h3 className="font-archival text-xl text-[#1C1A17] dark:text-[#E8E3D8]">
            No Automobiles Selected for Comparison
          </h3>
          <p className="font-editorial-serif text-sm text-[#7A7367] max-w-md mx-auto italic">
            Select 2 to 4 cars from the gallery grid or use the dropdown above to load a period brochure spec comparison.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          
          {/* Head-to-Head Champions Highlight Banner */}
          {comparedCars.length >= 2 && (
            <div className="p-4 bg-[#1B3B2B]/20 border border-[#C5A059]/40 rounded-xs grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono-spec text-xs">
              {topSpeedWinner && (
                <div className="flex items-center space-x-3 p-3 bg-[#121110]/90 text-[#E8E3D8] rounded-xs border border-hairline">
                  <Trophy className="w-5 h-5 text-[#C5A059] flex-none" />
                  <div>
                    <span className="text-[10px] text-[#C5A059] uppercase font-bold block">TOP SPEED CHAMPION</span>
                    <span className="font-bold text-sm">{topSpeedWinner.make} {topSpeedWinner.model}</span>
                    <span className="text-[#9E9689] block text-[11px]">{topSpeedWinner.specs.topSpeed} Record</span>
                  </div>
                </div>
              )}

              {hpWinner && (
                <div className="flex items-center space-x-3 p-3 bg-[#121110]/90 text-[#E8E3D8] rounded-xs border border-hairline">
                  <Zap className="w-5 h-5 text-[#C5A059] flex-none" />
                  <div>
                    <span className="text-[10px] text-[#C5A059] uppercase font-bold block">HORSEPOWER OUTPUT CHAMPION</span>
                    <span className="font-bold text-sm">{hpWinner.make} {hpWinner.model}</span>
                    <span className="text-[#9E9689] block text-[11px]">{hpWinner.specs.horsepower} BHP</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Visual Telemetry Bars Comparison Section */}
          <div className="p-6 bg-[#EAE5D9]/40 dark:bg-[#181614] border border-hairline rounded-xs space-y-6">
            <div className="flex items-center justify-between border-b border-hairline pb-3">
              <span className="font-mono-spec text-xs text-[#C5A059] font-bold tracking-widest uppercase flex items-center space-x-2">
                <Gauge className="w-4 h-4" />
                <span>VISUAL PERFORMANCE TELEMETRY BENCHMARKS</span>
              </span>
              <span className="text-[10px] font-mono-spec text-[#7A7367] uppercase">
                COMPARATIVE PERFORMANCE BARS
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Top Speed Bar Chart */}
              <div className="space-y-3 bg-[#F6F3EC] dark:bg-[#121110] p-4 rounded-xs border border-hairline">
                <div className="flex items-center space-x-2 text-xs font-mono-spec font-bold text-[#1C1A17] dark:text-[#E8E3D8] uppercase">
                  <Gauge className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Verified Top Speed (MPH)</span>
                </div>
                <div className="space-y-2">
                  {comparedCars.map((car) => {
                    const speed = parseFloat(car.specs.topSpeed) || 100;
                    const pct = Math.min(100, Math.round((speed / maxTopSpeed) * 100));
                    return (
                      <div key={car.id} className="space-y-1">
                        <div className="flex justify-between text-[11px] font-mono-spec">
                          <span className="truncate font-medium">{car.make} {car.model}</span>
                          <span className="text-[#C5A059] font-bold">{car.specs.topSpeed}</span>
                        </div>
                        <div className="w-full h-2 bg-[#EAE5D9] dark:bg-[#22201D] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#1B3B2B] to-[#C5A059] transition-all duration-700"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Horsepower Bar Chart */}
              <div className="space-y-3 bg-[#F6F3EC] dark:bg-[#121110] p-4 rounded-xs border border-hairline">
                <div className="flex items-center space-x-2 text-xs font-mono-spec font-bold text-[#1C1A17] dark:text-[#E8E3D8] uppercase">
                  <Zap className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Horsepower Output (BHP)</span>
                </div>
                <div className="space-y-2">
                  {comparedCars.map((car) => {
                    const hp = parseInt(car.specs.horsepower) || 100;
                    const pct = Math.min(100, Math.round((hp / maxHorsepower) * 100));
                    return (
                      <div key={car.id} className="space-y-1">
                        <div className="flex justify-between text-[11px] font-mono-spec">
                          <span className="truncate font-medium">{car.make} {car.model}</span>
                          <span className="text-[#C5A059] font-bold">{car.specs.horsepower}</span>
                        </div>
                        <div className="w-full h-2 bg-[#EAE5D9] dark:bg-[#22201D] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#8B0000] to-[#C5A059] transition-all duration-700"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

          {/* Full Side-by-Side Spec Table */}
          <div className="overflow-x-auto border border-hairline rounded-xs shadow-xs bg-[#F6F3EC] dark:bg-[#161412]">
            <table className="w-full text-left border-collapse font-mono-spec text-xs">
              
              {/* Table Header: Car Hero Plaque */}
              <thead>
                <tr className="border-b border-hairline bg-[#EAE5D9]/60 dark:bg-[#1C1A17]">
                  <th className="p-4 w-48 font-bold text-[#7A7367] uppercase border-r border-hairline">
                    METRIC / FEATURE
                  </th>
                  {comparedCars.map((car, idx) => (
                    <th key={car.id} className="p-4 min-w-[240px] border-r border-hairline relative">
                      
                      {/* Column Controls: Re-order Left / Right & Close */}
                      <div className="absolute top-2 left-2 right-2 flex items-center justify-between z-10">
                        <div className="flex items-center space-x-1">
                          <button
                            disabled={idx === 0}
                            onClick={() => handleMoveColumn(idx, 'left')}
                            className="p-1 bg-[#121110]/80 text-[#E8E3D8] hover:text-[#C5A059] disabled:opacity-30 rounded-xs border border-hairline"
                            title="Move column left"
                          >
                            <ChevronLeft className="w-3 h-3" />
                          </button>
                          <button
                            disabled={idx === comparedCars.length - 1}
                            onClick={() => handleMoveColumn(idx, 'right')}
                            className="p-1 bg-[#121110]/80 text-[#E8E3D8] hover:text-[#C5A059] disabled:opacity-30 rounded-xs border border-hairline"
                            title="Move column right"
                          >
                            <ChevronRight className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveFromCompare(car.id)}
                          className="p-1 bg-[#121110]/80 text-[#7A7367] hover:text-[#C5A059] rounded-xs border border-hairline"
                          title="Remove from comparison"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="space-y-2 pt-6">
                        <div className="aspect-[16/9] w-full overflow-hidden bg-[#121110] rounded-xs border border-hairline">
                          <img
                            src={car.heroImage}
                            alt={car.model}
                            onError={(e) => handleImageError(e, idx)}
                            className="w-full h-full object-cover saturate-90"
                          />
                        </div>
                        <div>
                          <span className="text-[10px] text-[#C5A059] font-bold block">{car.years} • {car.country}</span>
                          <h4 className="font-editorial-serif text-lg font-bold text-[#1C1A17] dark:text-[#E8E3D8]">
                            {car.make} {car.model}
                          </h4>
                        </div>
                        
                        <div className="flex items-center justify-between pt-1">
                          <button
                            onClick={() => onSelectCar(car)}
                            className="text-[10px] text-[#C5A059] hover:underline flex items-center space-x-1 font-bold"
                          >
                            <span>VIEW PLACARD</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </button>

                          <button
                            onClick={() => audioEngine.playEngineNote(car.engineSoundProfile || 'v12')}
                            className="p-1 text-[#7A7367] hover:text-[#C5A059] border border-hairline rounded-xs"
                            title="Listen to Engine Note"
                          >
                            <Volume2 className="w-3.5 h-3.5 text-[#C5A059]" />
                          </button>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Table Body Spec Metrics */}
              <tbody className="divide-y divide-hairline">
                <tr className="bg-[#EAE5D9]/30 dark:bg-[#1A1815]">
                  <td className="p-3 font-semibold text-[#7A7367] border-r border-hairline">ERA CLASSIFICATION</td>
                  {comparedCars.map((car) => (
                    <td key={car.id} className="p-3 text-[#1C1A17] dark:text-[#E8E3D8] border-r border-hairline uppercase">
                      {car.era}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-3 font-semibold text-[#7A7367] border-r border-hairline">ENGINE ARCHITECTURE</td>
                  {comparedCars.map((car) => (
                    <td key={car.id} className="p-3 font-bold text-[#1C1A17] dark:text-[#E8E3D8] border-r border-hairline">
                      {car.specs.engine}
                    </td>
                  ))}
                </tr>

                <tr className="bg-[#EAE5D9]/30 dark:bg-[#1A1815]">
                  <td className="p-3 font-semibold text-[#7A7367] border-r border-hairline">HORSEPOWER OUTPUT</td>
                  {comparedCars.map((car) => (
                    <td key={car.id} className="p-3 font-bold text-[#C5A059] text-sm border-r border-hairline">
                      {car.specs.horsepower}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-3 font-semibold text-[#7A7367] border-r border-hairline">TOP SPEED RECORD</td>
                  {comparedCars.map((car) => (
                    <td key={car.id} className="p-3 font-bold text-[#C5A059] text-sm border-r border-hairline">
                      {car.specs.topSpeed}
                    </td>
                  ))}
                </tr>

                <tr className="bg-[#EAE5D9]/30 dark:bg-[#1A1815]">
                  <td className="p-3 font-semibold text-[#7A7367] border-r border-hairline">0–60 MPH ACCELERATION</td>
                  {comparedCars.map((car) => (
                    <td key={car.id} className="p-3 text-[#1C1A17] dark:text-[#E8E3D8] border-r border-hairline">
                      {car.specs.acceleration0to60}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-3 font-semibold text-[#7A7367] border-r border-hairline">KERB WEIGHT</td>
                  {comparedCars.map((car) => (
                    <td key={car.id} className="p-3 text-[#1C1A17] dark:text-[#E8E3D8] border-r border-hairline">
                      {car.specs.weight}
                    </td>
                  ))}
                </tr>

                <tr className="bg-[#EAE5D9]/30 dark:bg-[#1A1815]">
                  <td className="p-3 font-semibold text-[#7A7367] border-r border-hairline">DRIVETRAIN</td>
                  {comparedCars.map((car) => (
                    <td key={car.id} className="p-3 text-[#1C1A17] dark:text-[#E8E3D8] border-r border-hairline">
                      {car.specs.drivetrain}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-3 font-semibold text-[#7A7367] border-r border-hairline">TRANSMISSION</td>
                  {comparedCars.map((car) => (
                    <td key={car.id} className="p-3 text-[#1C1A17] dark:text-[#E8E3D8] border-r border-hairline">
                      {car.specs.transmission}
                    </td>
                  ))}
                </tr>

                <tr className="bg-[#EAE5D9]/30 dark:bg-[#1A1815]">
                  <td className="p-3 font-semibold text-[#7A7367] border-r border-hairline">PRODUCTION VOLUME</td>
                  {comparedCars.map((car) => (
                    <td key={car.id} className="p-3 text-[#1C1A17] dark:text-[#E8E3D8] border-r border-hairline">
                      {car.productionCount || 'N/A'}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-3 font-semibold text-[#7A7367] border-r border-hairline">AUCTION VALUATION</td>
                  {comparedCars.map((car) => (
                    <td key={car.id} className="p-3 font-bold text-[#C5A059] border-r border-hairline">
                      {car.estimatedValuation || 'N/A'}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
};
