import React, { useState, useEffect } from 'react';
import type { Car, MechanicalHotspot } from '../types/car';
import { advancedAudioEngine } from '../utils/advancedAudioEngine';
import { X, Play, Square, Eye, Layers, Sparkles, Gauge, Compass } from 'lucide-react';
import { handleImageError } from '../utils/imageFallback';
import { Cockpit3DViewer } from './Cockpit3DViewer';

interface InspectionStudioModalProps {
  car: Car | null;
  onClose: () => void;
  onOpenPressArchive?: (car: Car) => void;
}

export const InspectionStudioModal: React.FC<InspectionStudioModalProps> = ({
  car,
  onClose,
  onOpenPressArchive,
}) => {
  const [selectedAngle, setSelectedAngle] = useState<'hero' | 'engine' | 'cockpit' | 'detail'>('hero');
  const [activeHotspot, setActiveHotspot] = useState<MechanicalHotspot | null>(null);
  
  // RPM Simulator state
  const [rpm, setRpm] = useState<number>(1000);
  const [isRevving, setIsRevving] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      advancedAudioEngine.stop();
    };
  }, []);

  if (!car) return null;

  // Exterior Hotspots
  const exteriorHotspots: MechanicalHotspot[] = car.hotspots || [
    {
      id: 'h1',
      title: 'Powertrain & Intake System',
      description: `Engineered with ${car.specs.engine}. Outputting a verified ${car.specs.horsepower} to the drive wheels.`,
      xPercent: 35,
      yPercent: 55,
      category: 'engine'
    },
    {
      id: 'h2',
      title: 'Aerodynamic Profile & Bodywork',
      description: `Crafted for high-speed stability and minimal drag. Top speed verified at ${car.specs.topSpeed}.`,
      xPercent: 65,
      yPercent: 45,
      category: 'aerodynamics'
    },
    {
      id: 'h3',
      title: 'Chassis & Suspension Geometry',
      description: `Constructed around a ${car.specs.chassisType || 'lightweight space-frame monocoque'} weighing ${car.specs.weight}.`,
      xPercent: 50,
      yPercent: 70,
      category: 'chassis'
    }
  ];

  // Interior Cockpit Hotspots
  const interiorHotspots: MechanicalHotspot[] = [
    {
      id: 'int-1',
      title: 'Instrument Cluster & Chronograph Dials',
      description: `Period-correct analogue gauge cluster displaying tachometer up to ${car.engineSoundProfile === 'v10' || car.engineSoundProfile === 'v12' ? '9,500 RPM' : '8,000 RPM'}, mechanical oil temperature, and fuel pressure monitoring.`,
      xPercent: 42,
      yPercent: 40,
      category: 'interior'
    },
    {
      id: 'int-2',
      title: 'Steering Wheel & Steering Column',
      description: `Ergonomically sculpted steering apparatus designed for immediate mechanical road feedback and precise cornering control.`,
      xPercent: 28,
      yPercent: 58,
      category: 'interior'
    },
    {
      id: 'int-3',
      title: 'Gated Transmission Shifter & Center Console',
      description: `Authentic ${car.specs.transmission || 'manual gearbox'} control console delivering satisfying tactile engagement between shifts.`,
      xPercent: 58,
      yPercent: 70,
      category: 'interior'
    },
    {
      id: 'int-4',
      title: 'Pedal Box & Heel-and-Toe Footwell',
      description: `Precision pedal geometry positioned for seamless heel-and-toe downshifts and progressive brake pedal modulation.`,
      xPercent: 32,
      yPercent: 82,
      category: 'interior'
    },
    {
      id: 'int-5',
      title: 'Cockpit Upholstery & Craftsmanship',
      description: `Hand-finished cabin trim integrating period-authentic leather, aluminium accents, or lightweight exposed carbon fiber weaves.`,
      xPercent: 72,
      yPercent: 48,
      category: 'interior'
    }
  ];

  const currentHotspots = selectedAngle === 'cockpit' ? interiorHotspots : exteriorHotspots;

  const handleStartRevStudio = () => {
    if (isRevving) {
      advancedAudioEngine.stop();
      setIsRevving(false);
    } else {
      advancedAudioEngine.startEngine(car.engineSoundProfile || 'v12', rpm);
      setIsRevving(true);
    }
  };

  const handleRpmChange = (newRpm: number) => {
    setRpm(newRpm);
    if (isRevving) {
      advancedAudioEngine.setRPM(newRpm);
    }
  };

  const handleBlowoff = () => {
    advancedAudioEngine.triggerBlowOffValve();
  };

  const angleImages = {
    hero: car.heroImage,
    engine: car.engineImage || car.galleryImages[0] || car.heroImage,
    cockpit: car.interiorImage || car.galleryImages[1] || car.heroImage,
    detail: car.galleryImages[2] || car.heroImage,
  };

  const engineBadge = (car.engineSoundProfile || 'v12').toUpperCase();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#121110]/95 backdrop-blur-md flex justify-center p-2 sm:p-4 md:p-6 animate-fade-in">
      
      <div className="relative w-full max-w-6xl bg-[#F6F3EC] dark:bg-[#161412] text-[#1C1A17] dark:text-[#E8E3D8] border border-hairline shadow-2xl rounded-xs overflow-hidden flex flex-col my-auto max-h-[94vh]">
        
        {/* Sticky Inspection Top Bar */}
        <div className="sticky top-0 z-30 bg-[#1A1815] text-[#F6F3EC] px-6 py-4 border-b border-[#C5A059]/40 flex items-center justify-between no-print">
          <div className="flex items-center space-x-3 text-xs font-mono-spec">
            <span className="px-2 py-0.5 bg-[#C5A059] text-[#121110] font-bold uppercase rounded-xs">
              ENTERPRISE INSPECTION STUDIO
            </span>
            <span className="text-[#C5A059] font-bold truncate max-w-[200px] sm:max-w-none">
              {car.make} {car.model} ({car.years})
            </span>
          </div>

          <div className="flex items-center space-x-3">
            {onOpenPressArchive && (
              <button
                onClick={() => onOpenPressArchive(car)}
                className="px-3 py-1.5 bg-[#2A2723] hover:bg-[#38342F] text-[#E2DCCE] font-mono-spec text-xs border border-hairline rounded-xs transition-colors flex items-center space-x-1.5"
              >
                <Layers className="w-3.5 h-3.5 text-[#C5A059]" />
                <span className="hidden sm:inline">Press & Citations Archive</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-1.5 text-[#9E9689] hover:text-[#FAF8F5]"
              title="Close Inspection Studio (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Studio Content Grid */}
        <div className="overflow-y-auto p-6 space-y-8">
          
          {/* Main Visual Angle Viewport with Hotspots */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            
            <div className="lg:col-span-2 space-y-4">
              
              {/* Camera Angle & Interior Mode Switcher Controls */}
              <div className="flex flex-wrap items-center justify-between text-xs font-mono-spec gap-2">
                <div className="flex items-center space-x-1.5 text-[#7A7367] uppercase font-bold">
                  <Compass className="w-4 h-4 text-[#C5A059]" />
                  <span>SELECT VIEWPORT ANGLE:</span>
                </div>

                <div className="flex flex-wrap space-x-1 bg-[#EAE5D9]/60 dark:bg-[#1E1C1A] p-1 rounded-xs border border-hairline">
                  <button
                    onClick={() => {
                      setSelectedAngle('hero');
                      setActiveHotspot(null);
                    }}
                    className={`px-3 py-1 uppercase rounded-xs transition-all ${
                      selectedAngle === 'hero' ? 'bg-[#1A1815] text-[#C5A059] font-bold shadow-sm' : 'text-[#7A7367] hover:text-[#E8E3D8]'
                    }`}
                  >
                    Exterior Studio
                  </button>

                  <button
                    onClick={() => {
                      setSelectedAngle('engine');
                      setActiveHotspot(null);
                    }}
                    className={`px-3 py-1 uppercase rounded-xs transition-all ${
                      selectedAngle === 'engine' ? 'bg-[#1A1815] text-[#C5A059] font-bold shadow-sm' : 'text-[#7A7367] hover:text-[#E8E3D8]'
                    }`}
                  >
                    Engine / Bay
                  </button>

                  {/* STEP INSIDE COCKPIT BUTTON */}
                  <button
                    onClick={() => {
                      setSelectedAngle('cockpit');
                      setActiveHotspot(null);
                    }}
                    className={`px-3 py-1 uppercase rounded-xs transition-all flex items-center space-x-1 ${
                      selectedAngle === 'cockpit' 
                        ? 'bg-[#C5A059] text-[#121110] font-bold shadow-md' 
                        : 'bg-[#C5A059]/15 text-[#C5A059] hover:bg-[#C5A059]/25 font-semibold'
                    }`}
                  >
                    <span>🚗 Step Inside Cockpit</span>
                  </button>
                </div>
              </div>

              {/* High-Res Interactive Studio Viewport */}
              {selectedAngle === 'cockpit' ? (
                <Cockpit3DViewer
                  car={car}
                  onSelectHotspot={setActiveHotspot}
                  activeHotspotId={activeHotspot?.id}
                />
              ) : (
                <div className="relative aspect-[16/10] w-full bg-[#121110] rounded-xs border border-[#C5A059]/30 overflow-hidden group shadow-2xl transition-all duration-500">
                  {/* Overhead Studio Light Ray Vignette Overlay */}
                  <div className="absolute inset-0 bg-radial from-white/10 via-transparent to-[#121110]/90 pointer-events-none z-10" />

                  <img
                    src={angleImages[selectedAngle]}
                    alt={`${car.model} ${selectedAngle}`}
                    onError={(e) => handleImageError(e)}
                    className="w-full h-full object-cover saturate-95 group-hover:scale-102 transition-all duration-700"
                  />

                  {/* Hotspot Pins */}
                  {currentHotspots.map((spot) => (
                    <button
                      key={spot.id}
                      onClick={() => setActiveHotspot(spot)}
                      style={{ left: `${spot.xPercent}%`, top: `${spot.yPercent}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 group/pin z-20"
                      title={`Inspect ${spot.title}`}
                    >
                      <span className="relative flex h-6 w-6 items-center justify-center">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A059] opacity-75" />
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-[#C5A059] border-2 border-[#121110] shadow-md group-hover/pin:scale-125 transition-transform" />
                      </span>
                    </button>
                  ))}

                  {/* Bottom Viewport HUD Controls */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-auto">
                    <div className="bg-[#121110]/90 text-[#C5A059] px-3 py-1 font-mono-spec text-[10px] uppercase border border-[#C5A059]/40 rounded-xs backdrop-blur-xs flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
                      <span>
                        {selectedAngle === 'engine'
                          ? 'POWERTRAIN & ENGINE BAY ACTIVE'
                          : 'EXTERIOR 360° STUDIO ACTIVE'}
                      </span>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Hotspot Details Sidebar */}
            <div className="bg-[#F6F3EC] dark:bg-[#181614] border border-hairline p-5 rounded-xs space-y-4 shadow-sm min-h-[320px]">
              <div className="flex items-center space-x-2 text-xs font-mono-spec text-[#C5A059] font-bold uppercase border-b border-hairline pb-2">
                <Eye className="w-4 h-4" />
                <span>
                  {selectedAngle === 'cockpit' ? 'COCKPIT INTERIOR INSPECTOR' : 'MECHANICAL HOTSPOT INSPECTOR'}
                </span>
              </div>

              {activeHotspot ? (
                <div className="space-y-3 animate-fade-in">
                  <span className="px-2 py-0.5 text-[9px] font-mono-spec bg-[#1A1815] text-[#C5A059] font-bold uppercase rounded-xs">
                    CATEGORY: {activeHotspot.category}
                  </span>
                  <h4 className="font-editorial-serif text-lg font-bold text-[#1C1A17] dark:text-[#E8E3D8]">
                    {activeHotspot.title}
                  </h4>
                  <p className="font-sans-ui text-xs text-[#524B42] dark:text-[#A8A092] leading-relaxed font-light">
                    {activeHotspot.description}
                  </p>
                </div>
              ) : (
                <div className="py-8 text-center space-y-2 text-xs font-mono-spec text-[#7A7367]">
                  <Sparkles className="w-6 h-6 text-[#C5A059] mx-auto" />
                  <p>
                    {selectedAngle === 'cockpit'
                      ? 'Click any gold hotspot pin inside the cockpit to inspect gauges, steering wheel, shifter, and footwell pedals.'
                      : 'Click any pulsing gold hotspot pin on the vehicle viewport to inspect mechanical details.'}
                  </p>
                </div>
              )}
            </div>

          </div>

          {/* Real-Time RPM Engine Simulator & Rev Controller */}
          <div className="bg-[#1A1815] text-[#F6F3EC] p-6 rounded-xs border border-[#C5A059]/40 space-y-5 shadow-lg paper-grain">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#38342F] pb-4">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-mono-spec text-xs text-[#C5A059] font-bold tracking-widest uppercase">
                    REAL-TIME MECHANICAL RPM SIMULATOR
                  </span>
                  <span className="px-2 py-0.5 text-[9px] font-mono-spec bg-[#C5A059]/20 text-[#C5A059] border border-[#C5A059]/40 rounded-xs uppercase">
                    {engineBadge} ACOUSTICS
                  </span>
                </div>
                <h3 className="font-editorial-serif text-xl font-bold text-[#FAF8F5] mt-1">
                  {car.make} {car.model} Engine Sound Laboratory
                </h3>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={handleStartRevStudio}
                  className={`px-4 py-2 text-xs font-mono-spec uppercase font-bold tracking-wider rounded-xs transition-colors flex items-center space-x-2 ${
                    isRevving
                      ? 'bg-[#5A1827] text-[#FAF8F5] border border-red-500'
                      : 'bg-[#C5A059] text-[#121110] hover:bg-[#D4AF66]'
                  }`}
                >
                  {isRevving ? <Square className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isRevving ? 'Stop Rev Engine' : 'Ignite Engine Sound'}</span>
                </button>

                {(car.engineSoundProfile === 'turbo' || car.engineSoundProfile === 'w16') && isRevving && (
                  <button
                    onClick={handleBlowoff}
                    className="px-3 py-2 bg-[#2A2723] hover:bg-[#38342F] text-[#C5A059] border border-hairline text-xs font-mono-spec uppercase font-bold rounded-xs"
                    title="Simulate Turbo Blow-Off Valve Pop"
                  >
                    Blow-Off Pop 💥
                  </button>
                )}
              </div>
            </div>

            {/* RPM Slider Control */}
            <div className="space-y-2">
              <div className="flex justify-between font-mono-spec text-xs">
                <span className="text-[#9E9689]">IDLE (1,000 RPM)</span>
                <span className="text-[#C5A059] font-bold text-base flex items-center space-x-1">
                  <Gauge className="w-4 h-4 inline" />
                  <span>{rpm.toLocaleString()} RPM</span>
                </span>
                <span className="text-[#5A1827] font-bold">REDLINE (9,000 RPM)</span>
              </div>

              <input
                type="range"
                min="1000"
                max="9000"
                step="50"
                value={rpm}
                onChange={(e) => handleRpmChange(Number(e.target.value))}
                className="w-full accent-[#C5A059] cursor-pointer h-2 bg-[#2A2723] rounded-xs"
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
