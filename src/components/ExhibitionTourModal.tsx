import React, { useState, useEffect } from 'react';
import type { Car } from '../types/car';
import { CARS } from '../data/carsData';
import { advancedAudioEngine } from '../utils/advancedAudioEngine';
import { X, Play, Pause, ChevronLeft, ChevronRight, Volume2, Sparkles } from 'lucide-react';

interface ExhibitionTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCar: (car: Car) => void;
}

export const ExhibitionTourModal: React.FC<ExhibitionTourModalProps> = ({
  isOpen,
  onClose,
  onSelectCar,
}) => {
  // Select 10 flagship landmark cars across eras for the tour
  const tourCars = CARS.filter((car) => car.flagshipHero || car.categories.includes('first')).slice(0, 10);
  
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const activeCar = tourCars[currentIndex] || tourCars[0];

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isPlaying && isOpen) {
      timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % tourCars.length);
      }, 6000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, isOpen, tourCars.length]);

  if (!isOpen || !activeCar) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % tourCars.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + tourCars.length) % tourCars.length);
  };

  const handleSoundRev = () => {
    advancedAudioEngine.startEngine(activeCar.engineSoundProfile || 'v12', 3500);
    setTimeout(() => {
      advancedAudioEngine.stop();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#121110]/95 backdrop-blur-md flex justify-center p-3 sm:p-6 animate-fade-in">
      
      <div className="relative w-full max-w-5xl bg-[#F6F3EC] dark:bg-[#161412] text-[#1C1A17] dark:text-[#E8E3D8] border border-[#C5A059]/40 shadow-2xl rounded-xs overflow-hidden flex flex-col my-auto max-h-[94vh]">
        
        {/* Sticky Top Bar */}
        <div className="sticky top-0 z-30 bg-[#1A1815] text-[#F6F3EC] px-6 py-4 border-b border-[#C5A059]/40 flex items-center justify-between no-print">
          <div className="flex items-center space-x-3 text-xs font-mono-spec">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span className="text-[#C5A059] font-bold uppercase">
              CURATOR’S GUIDED AUDIO-VISUAL EXHIBITION TOUR
            </span>
            <span className="text-[#9E9689]">
              • EXHIBIT {currentIndex + 1} OF {tourCars.length}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-3 py-1.5 bg-[#2A2723] hover:bg-[#38342F] text-[#E2DCCE] font-mono-spec text-xs border border-hairline rounded-xs flex items-center space-x-1.5"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-[#C5A059]" /> : <Play className="w-3.5 h-3.5 text-[#C5A059]" />}
              <span>{isPlaying ? 'Pause Autoplay' : 'Play Autoplay'}</span>
            </button>

            <button onClick={onClose} className="p-1.5 text-[#9E9689] hover:text-[#FAF8F5]">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#1A1815] h-1.5 overflow-hidden">
          <div
            className="bg-[#C5A059] h-full transition-all duration-500"
            style={{ width: `${((currentIndex + 1) / tourCars.length) * 100}%` }}
          />
        </div>

        {/* Tour Spotlight Viewport */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* High-Res Hero Photo */}
            <div className="relative aspect-[16/10] w-full bg-[#121110] rounded-xs border border-hairline overflow-hidden shadow-lg group">
              <img
                src={activeCar.heroImage}
                alt={activeCar.model}
                className="w-full h-full object-cover saturate-95 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-3 left-3 bg-[#1A1815]/90 text-[#C5A059] px-3 py-1 font-mono-spec text-xs font-bold uppercase border border-[#C5A059]/40">
                {activeCar.years} • {activeCar.country}
              </div>
            </div>

            {/* Curatorial Commentary Box */}
            <div className="space-y-4 font-sans-ui">
              <div>
                <span className="font-mono-spec text-xs text-[#C5A059] font-bold uppercase tracking-widest block">
                  WATERSHED EXHIBIT #{currentIndex + 1}
                </span>
                <h2 className="font-archival text-3xl sm:text-4xl text-[#1C1A17] dark:text-[#E8E3D8] font-bold">
                  {activeCar.make} {activeCar.model}
                </h2>
              </div>

              <p className="font-editorial-serif text-lg italic text-[#615B52] dark:text-[#A0988C] border-l-2 border-[#C5A059] pl-3 py-1">
                "{activeCar.editorialHook}"
              </p>

              <p className="text-xs sm:text-sm text-[#423C36] dark:text-[#B8B0A2] leading-relaxed font-light">
                {activeCar.whyIconic}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2 font-mono-spec text-xs">
                <button
                  onClick={handleSoundRev}
                  className="px-3.5 py-2 bg-[#1B3B2B] text-[#E8E3D8] border border-[#C5A059]/40 hover:bg-[#254F3B] rounded-xs flex items-center space-x-1.5 font-bold uppercase"
                >
                  <Volume2 className="w-4 h-4 text-[#C5A059]" />
                  <span>Listen to Engine Sound</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onSelectCar(activeCar);
                  }}
                  className="px-3.5 py-2 bg-[#C5A059] text-[#121110] hover:bg-[#D4AF66] rounded-xs font-bold uppercase"
                >
                  Inspect Full Placard
                </button>
              </div>
            </div>

          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center border-t border-hairline pt-4 font-mono-spec text-xs">
            <button
              onClick={handlePrev}
              className="px-3 py-1.5 bg-[#EAE5D9]/60 dark:bg-[#1E1C1A] text-[#1C1A17] dark:text-[#E8E3D8] border border-hairline rounded-xs flex items-center space-x-1 hover:border-[#C5A059]"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>PREVIOUS EXHIBIT</span>
            </button>

            <span className="text-[#7A7367]">USE ARROW KEYS OR BUTTONS TO NAVIGATE TOUR</span>

            <button
              onClick={handleNext}
              className="px-3 py-1.5 bg-[#EAE5D9]/60 dark:bg-[#1E1C1A] text-[#1C1A17] dark:text-[#E8E3D8] border border-hairline rounded-xs flex items-center space-x-1 hover:border-[#C5A059]"
            >
              <span>NEXT EXHIBIT</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
