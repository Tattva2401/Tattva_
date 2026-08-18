import React, { useState, useRef } from 'react';
import type { Car, MechanicalHotspot } from '../types/car';
import { Compass, RotateCw, ZoomIn, ZoomOut, Sun, Moon, Sparkles, User, Shield, Gauge } from 'lucide-react';
import { handleImageError } from '../utils/imageFallback';

interface Cockpit3DViewerProps {
  car: Car;
  onSelectHotspot: (hotspot: MechanicalHotspot) => void;
  activeHotspotId?: string | null;
}

export type LightingMode = 'daylight' | 'sunset' | 'night' | 'cyber';
export type POVMode = 'driver' | 'gauges' | 'seats' | 'pedals';

export const Cockpit3DViewer: React.FC<Cockpit3DViewerProps> = ({
  car,
  onSelectHotspot,
  activeHotspotId,
}) => {
  // 3D Camera Angles
  const [yaw, setYaw] = useState<number>(0); // -180 to 180 degrees
  const [pitch, setPitch] = useState<number>(0); // -40 to 40 degrees
  const [zoom, setZoom] = useState<number>(1.0); // 0.8 to 2.2
  const [lightingMode, setLightingMode] = useState<LightingMode>('daylight');
  const [activePOV, setActivePOV] = useState<POVMode>('driver');
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const startPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Interior Cockpit 3D Hotspot definitions
  const interior3DHotspots: (MechanicalHotspot & { defaultYaw: number; defaultPitch: number })[] = [
    {
      id: 'h-gauges',
      title: 'Instrument Cluster & Chronograph Dials',
      description: `Period-correct analogue gauge cluster featuring precision tachometer up to ${
        car.engineSoundProfile === 'v10' || car.engineSoundProfile === 'v12' ? '9,500 RPM' : '8,000 RPM'
      }, mechanical oil pressure, water temp, and fuel monitoring.`,
      xPercent: 50,
      yPercent: 42,
      defaultYaw: 12,
      defaultPitch: -8,
      category: 'interior'
    },
    {
      id: 'h-steering',
      title: 'Steering Wheel & Steering Column',
      description: `Sculpted steering wheel with period-authentic badge cap, engineered for immediate mechanical road feedback and precise cornering control.`,
      xPercent: 32,
      yPercent: 58,
      defaultYaw: -10,
      defaultPitch: -2,
      category: 'interior'
    },
    {
      id: 'h-shifter',
      title: 'Gated Transmission Shifter & Center Console',
      description: `Tactile ${car.specs.transmission || 'manual gearbox'} control console delivering satisfying mechanical engagement between shifts.`,
      xPercent: 62,
      yPercent: 72,
      defaultYaw: 38,
      defaultPitch: -24,
      category: 'interior'
    },
    {
      id: 'h-seat-driver',
      title: 'Driver Seat & Support Bolster',
      description: `Ergonomically contoured driver bucket seat trimmed in period-correct upholstery with high lateral support for performance driving.`,
      xPercent: 20,
      yPercent: 65,
      defaultYaw: -55,
      defaultPitch: -12,
      category: 'interior'
    },
    {
      id: 'h-seat-passenger',
      title: 'Passenger Seat & Cabin Trim',
      description: `Hand-finished passenger seating matching factory specifications, crafted with premium leather, Alcantara, or lightweight fabric.`,
      xPercent: 82,
      yPercent: 65,
      defaultYaw: 75,
      defaultPitch: -10,
      category: 'interior'
    },
    {
      id: 'h-pedals',
      title: 'Pedal Box & Footwell Assembly',
      description: `Precision pedal box setup with drilled aluminium or rubber-padded throttle, brake, and clutch pedals positioned for heel-and-toe downshifts.`,
      xPercent: 36,
      yPercent: 85,
      defaultYaw: -6,
      defaultPitch: -34,
      category: 'interior'
    }
  ];

  // Apply Camera POV Presets
  const setPOV = (mode: POVMode) => {
    setActivePOV(mode);
    if (mode === 'driver') {
      setYaw(0);
      setPitch(0);
      setZoom(1.0);
    } else if (mode === 'gauges') {
      setYaw(12);
      setPitch(-8);
      setZoom(1.65);
    } else if (mode === 'seats') {
      setYaw(65);
      setPitch(-10);
      setZoom(1.1);
    } else if (mode === 'pedals') {
      setYaw(-6);
      setPitch(-34);
      setZoom(1.55);
    }
  };

  // Drag Panning Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startPosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startPosRef.current.x;
    const deltaY = e.clientY - startPosRef.current.y;
    startPosRef.current = { x: e.clientX, y: e.clientY };

    setYaw((prev) => Math.max(-140, Math.min(140, prev + deltaX * 0.35)));
    setPitch((prev) => Math.max(-38, Math.min(38, prev - deltaY * 0.25)));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      startPosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - startPosRef.current.x;
    const deltaY = e.touches[0].clientY - startPosRef.current.y;
    startPosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };

    setYaw((prev) => Math.max(-140, Math.min(140, prev + deltaX * 0.35)));
    setPitch((prev) => Math.max(-38, Math.min(38, prev - deltaY * 0.25)));
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const resetCamera = () => {
    setPOV('driver');
  };

  const povImages: Record<POVMode, string> = {
    driver: car.interiorPOVs?.driverSeat || car.interiorImage || car.heroImage,
    gauges: car.interiorPOVs?.gaugeCluster || car.interiorImage || car.heroImage,
    seats: car.interiorPOVs?.seatsCabin || car.interiorImage || car.heroImage,
    pedals: car.interiorPOVs?.pedalBox || car.interiorImage || car.heroImage,
  };

  const imageSrc = povImages[activePOV];

  // Filter Styles per Lighting Mode
  const getLightingFilterClass = () => {
    switch (lightingMode) {
      case 'night':
        return 'brightness-65 contrast-130 saturate-120 hue-rotate-[-10deg]';
      case 'sunset':
        return 'brightness-90 contrast-110 saturate-125 sepia-25';
      case 'cyber':
        return 'brightness-75 contrast-140 saturate-150 hue-rotate-[180deg]';
      default:
        return 'brightness-95 contrast-105 saturate-100';
    }
  };

  return (
    <div className="relative w-full flex flex-col space-y-3 select-none">
      
      {/* Top 3D Control Bar */}
      <div className="flex flex-wrap items-center justify-between text-xs font-mono-spec gap-2 bg-[#1A1815] text-[#F6F3EC] p-2.5 rounded-xs border border-[#C5A059]/40">
        
        {/* POV Camera Presets */}
        <div className="flex items-center space-x-1 overflow-x-auto py-0.5">
          <span className="text-[#C5A059] font-bold uppercase text-[10px] mr-1 hidden sm:inline">POV CAMERA:</span>
          
          <button
            onClick={() => setPOV('driver')}
            className={`px-2.5 py-1 uppercase rounded-xs transition-all flex items-center space-x-1 ${
              activePOV === 'driver' ? 'bg-[#C5A059] text-[#121110] font-bold' : 'bg-[#2A2723] text-[#E8E3D8] hover:text-[#C5A059]'
            }`}
          >
            <User className="w-3 h-3" />
            <span>Driver Seat</span>
          </button>

          <button
            onClick={() => setPOV('gauges')}
            className={`px-2.5 py-1 uppercase rounded-xs transition-all flex items-center space-x-1 ${
              activePOV === 'gauges' ? 'bg-[#C5A059] text-[#121110] font-bold' : 'bg-[#2A2723] text-[#E8E3D8] hover:text-[#C5A059]'
            }`}
          >
            <Gauge className="w-3 h-3" />
            <span>Gauge Cluster</span>
          </button>

          <button
            onClick={() => setPOV('seats')}
            className={`px-2.5 py-1 uppercase rounded-xs transition-all flex items-center space-x-1 ${
              activePOV === 'seats' ? 'bg-[#C5A059] text-[#121110] font-bold' : 'bg-[#2A2723] text-[#E8E3D8] hover:text-[#C5A059]'
            }`}
          >
            <Shield className="w-3 h-3" />
            <span>Seats & Cabin</span>
          </button>

          <button
            onClick={() => setPOV('pedals')}
            className={`px-2.5 py-1 uppercase rounded-xs transition-all flex items-center space-x-1 ${
              activePOV === 'pedals' ? 'bg-[#C5A059] text-[#121110] font-bold' : 'bg-[#2A2723] text-[#E8E3D8] hover:text-[#C5A059]'
            }`}
          >
            <span>Pedal Box</span>
          </button>
        </div>

        {/* Ambient Lighting Theme Selector */}
        <div className="flex items-center space-x-1">
          <span className="text-[#9E9689] uppercase text-[10px] hidden md:inline">LIGHTING:</span>
          <button
            onClick={() => setLightingMode('daylight')}
            className={`p-1.5 rounded-xs border transition-colors ${
              lightingMode === 'daylight' ? 'bg-[#C5A059] text-[#121110] border-[#C5A059]' : 'bg-[#2A2723] text-[#9E9689] border-hairline'
            }`}
            title="Daylight Studio Lighting"
          >
            <Sun className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setLightingMode('sunset')}
            className={`p-1.5 rounded-xs border transition-colors ${
              lightingMode === 'sunset' ? 'bg-[#C5A059] text-[#121110] border-[#C5A059]' : 'bg-[#2A2723] text-[#9E9689] border-hairline'
            }`}
            title="Golden Hour Sunset Atmosphere"
          >
            <Sparkles className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setLightingMode('night')}
            className={`p-1.5 rounded-xs border transition-colors ${
              lightingMode === 'night' ? 'bg-[#C5A059] text-[#121110] border-[#C5A059]' : 'bg-[#2A2723] text-[#9E9689] border-hairline'
            }`}
            title="Night Gauge Ambient Glow"
          >
            <Moon className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* 3D Interactive Cockpit Viewport */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={`relative aspect-[16/10] w-full bg-[#121110] rounded-xs border border-[#C5A059]/40 overflow-hidden cursor-grab active:cursor-grabbing shadow-2xl transition-all duration-300`}
      >
        {/* Night / Cyber Ambient Lighting Overlay Gradients */}
        {lightingMode === 'night' && (
          <div className="absolute inset-0 bg-gradient-to-t from-[#5A1827]/50 via-[#121110]/40 to-[#121110]/80 mix-blend-color-dodge pointer-events-none z-10" />
        )}
        {lightingMode === 'cyber' && (
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 via-purple-950/30 to-black/80 mix-blend-color-dodge pointer-events-none z-10" />
        )}

        {/* 3D Transformed Cockpit Panorama Image Container */}
        <div
          className="w-full h-full transition-transform duration-100 ease-out"
          style={{
            transform: `scale(${zoom}) rotateX(${pitch}deg) rotateY(${yaw}deg)`,
            transformOrigin: 'center center',
            perspective: '1000px'
          }}
        >
          <img
            src={imageSrc}
            alt={`${car.make} ${car.model} Cockpit Interior`}
            onError={(e) => handleImageError(e)}
            className={`w-full h-full object-cover transition-all duration-500 ${getLightingFilterClass()}`}
          />
        </div>

        {/* 3D Projected Hotspots */}
        {interior3DHotspots.map((spot) => {
          // Compute 3D projected offset based on current yaw and pitch
          const offsetX = (spot.defaultYaw - yaw) * 0.4;
          const offsetY = (pitch - spot.defaultPitch) * 0.4;
          const isVisible = Math.abs(spot.defaultYaw - yaw) < 65;

          if (!isVisible) return null;

          const isSelected = activeHotspotId === spot.id;

          return (
            <button
              key={spot.id}
              onClick={(e) => {
                e.stopPropagation();
                onSelectHotspot(spot);
              }}
              style={{
                left: `calc(${spot.xPercent}% + ${offsetX}%)`,
                top: `calc(${spot.yPercent}% + ${offsetY}%)`,
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 group/pin z-20 transition-all duration-150"
              title={`Inspect ${spot.title}`}
            >
              <span className="relative flex h-6 w-6 items-center justify-center">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isSelected ? 'bg-red-500' : 'bg-[#C5A059]'} opacity-75`} />
                <span className={`relative inline-flex rounded-full h-4 w-4 border-2 border-[#121110] shadow-lg group-hover/pin:scale-125 transition-transform ${
                  isSelected ? 'bg-red-500' : 'bg-[#C5A059]'
                }`} />
              </span>
            </button>
          );
        })}

        {/* Viewport Overlay HUD Controls */}
        <div className="absolute top-3 right-3 z-20 flex items-center space-x-1.5 bg-[#121110]/85 p-1 rounded-xs border border-[#C5A059]/40 backdrop-blur-xs text-[#E8E3D8]">
          <button
            onClick={() => setZoom((prev) => Math.min(2.2, prev + 0.15))}
            className="p-1 hover:text-[#C5A059] transition-colors"
            title="Zoom In (FOV)"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setZoom((prev) => Math.max(0.8, prev - 0.15))}
            className="p-1 hover:text-[#C5A059] transition-colors"
            title="Zoom Out (FOV)"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={resetCamera}
            className="p-1 hover:text-[#C5A059] transition-colors"
            title="Reset 3D Camera"
          >
            <RotateCw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Drag Instruction Banner */}
        <div className="absolute bottom-3 left-3 z-20 bg-[#121110]/90 text-[#C5A059] px-3 py-1 font-mono-spec text-[10px] uppercase border border-[#C5A059]/40 rounded-xs backdrop-blur-xs flex items-center space-x-2">
          <Compass className="w-3 h-3 animate-spin-slow" />
          <span>DRAG MOUSE OR SWIPE TO ROTATE 360° INTERIOR CAMERA</span>
        </div>

      </div>

    </div>
  );
};
