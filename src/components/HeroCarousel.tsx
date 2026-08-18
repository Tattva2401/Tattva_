import React, { useState, useEffect, useRef } from 'react';
import type { Car } from '../types/car';
import { ChevronLeft, ChevronRight, Pause, Play, ArrowRight, Volume2, Sparkles } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

interface HeroCarouselProps {
  flagshipCars: Car[];
  onSelectCar: (car: Car) => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ flagshipCars, onSelectCar }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<number | null>(null);

  const currentCar = flagshipCars[currentIndex] || flagshipCars[0];

  useEffect(() => {
    if (isPlaying && flagshipCars.length > 0) {
      timerRef.current = window.setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % flagshipCars.length);
      }, 7000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, flagshipCars.length]);

  if (!currentCar) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % flagshipCars.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + flagshipCars.length) % flagshipCars.length);
  };

  const handlePlaySound = (e: React.MouseEvent) => {
    e.stopPropagation();
    audioEngine.playEngineNote(currentCar.engineSoundProfile || 'v12');
  };

  const engineLabel = (currentCar.engineSoundProfile || 'v12').toUpperCase();

  return (
    <section className="relative w-full overflow-hidden bg-[#1A1815] text-[#F6F3EC] border-b border-hairline group">
      
      {/* Full-Bleed Photography background with smooth cross-dissolve */}
      <div className="relative h-[68vh] min-h-[500px] max-h-[750px] w-full">
        {flagshipCars.map((car, idx) => (
          <div
            key={car.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentIndex ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image with subtle warm desaturated treatment & scale animation */}
            <div 
              className="absolute inset-0 bg-cover bg-center filter saturate-90 brightness-75 transition-transform duration-10000 ease-out scale-103 group-hover:scale-105"
              style={{ backgroundImage: `url(${car.heroImage})` }}
            />

            {/* Dark Editorial Vignette Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-[#121110]/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#121110]/95 via-[#121110]/50 to-transparent" />

            {/* Content Overlay */}
            <div className="relative z-20 max-w-7xl mx-auto h-full px-6 sm:px-10 lg:px-12 flex flex-col justify-between py-12">
              
              {/* Mission Statement Header */}
              <div className="max-w-2xl pt-4">
                <span className="inline-flex items-center space-x-2 font-mono-spec text-[10px] tracking-[0.25em] text-[#C5A059] uppercase mb-2 border-b border-[#C5A059]/40 pb-1">
                  <Sparkles className="w-3 h-3 text-[#C5A059]" />
                  <span>ARCHIVAL EXHIBITION • CURATED EDITION</span>
                </span>
                <p className="font-editorial-serif text-sm sm:text-base italic text-[#E2DCCE]/90 leading-relaxed max-w-xl hidden sm:block">
                  "Every automobile in this archive earned its place through a clear, stated claim to iconic status — where mechanical innovation, aesthetic purity, and cultural legacy converge."
                </p>
              </div>

              {/* Car Flagship Identity Plaque */}
              <div className="max-w-3xl space-y-3">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono-spec tracking-widest text-[#C5A059]">
                  <span className="px-2 py-0.5 border border-[#C5A059]/40 bg-[#121110]/80 rounded-xs">
                    {car.years}
                  </span>
                  <span className="px-2 py-0.5 border border-white/20 bg-[#121110]/70 text-[#E8E3D8] rounded-xs uppercase">
                    {engineLabel}
                  </span>
                  <span className="text-[#E2DCCE]/60">•</span>
                  <span className="uppercase text-[#E8E3D8]">{car.country}</span>
                  <span className="text-[#E2DCCE]/60">•</span>
                  <button 
                    onClick={handlePlaySound}
                    className="inline-flex items-center space-x-1.5 px-2 py-0.5 bg-[#C5A059]/20 hover:bg-[#C5A059]/30 text-[#C5A059] border border-[#C5A059]/40 rounded-xs transition-colors"
                    title="Play Engine Sound Synthesizer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-bold uppercase">Listen Sound</span>
                  </button>
                </div>

                <h2 className="font-editorial-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#FAF8F5] leading-none">
                  {car.make} <span className="italic font-light text-[#E2DCCE]/90">{car.model}</span>
                </h2>

                <p className="font-sans-ui text-sm sm:text-base text-[#D4CDC0] font-light max-w-2xl line-clamp-2">
                  {car.editorialHook}
                </p>

                <div className="pt-2 flex items-center space-x-4">
                  <button
                    onClick={() => onSelectCar(car)}
                    className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#C5A059] hover:bg-[#D4AF66] text-[#121110] font-mono-spec text-xs tracking-wider uppercase font-semibold transition-colors duration-200 shadow-sm rounded-xs"
                  >
                    <span>Exhibition Placard</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls & Gallery Thumbnails Strip */}
      <div className="relative z-30 bg-[#121110] border-t border-hairline py-3 px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Slide Counter & Indicators */}
        <div className="flex items-center space-x-4">
          <span className="font-mono-spec text-xs text-[#C5A059] font-bold">
            {String(currentIndex + 1).padStart(2, '0')} / {String(flagshipCars.length).padStart(2, '0')}
          </span>
          <div className="hidden sm:flex space-x-1.5">
            {flagshipCars.map((car, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 transition-all duration-300 rounded-xs ${
                  i === currentIndex ? 'w-8 bg-[#C5A059]' : 'w-3 bg-[#4A443B] hover:bg-[#7A7367]'
                }`}
                title={`Go to ${car.make} ${car.model}`}
              />
            ))}
          </div>
        </div>

        {/* Play/Pause & Arrow Navigation */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 text-[#9E9689] hover:text-[#FAF8F5] transition-colors"
            title={isPlaying ? 'Pause auto-slide' : 'Play auto-slide'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <div className="h-4 w-px bg-hairline" />
          <button
            onClick={handlePrev}
            className="p-1.5 text-[#9E9689] hover:text-[#FAF8F5] transition-colors"
            title="Previous car"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-1.5 text-[#9E9689] hover:text-[#FAF8F5] transition-colors"
            title="Next car"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
