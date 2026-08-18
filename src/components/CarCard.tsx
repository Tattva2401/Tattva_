import React, { useState } from 'react';
import type { Car } from '../types/car';
import { CATEGORIES } from '../data/categories';
import { Volume2, SlidersHorizontal, ArrowUpRight, Bookmark, Gauge } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';
import { handleImageError } from '../utils/imageFallback';

interface CarCardProps {
  car: Car;
  onSelectCar: (car: Car) => void;
  onToggleCompare?: (car: Car) => void;
  isCompared?: boolean;
  onToggleBookmark?: (car: Car) => void;
  isBookmarked?: boolean;
}

export const CarCard: React.FC<CarCardProps> = ({
  car,
  onSelectCar,
  onToggleCompare,
  isCompared,
  onToggleBookmark,
  isBookmarked,
}) => {
  const [showRevBar, setShowRevBar] = useState<boolean>(false);
  const [rpmValue, setRpmValue] = useState<number>(3500);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const handlePlaySound = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowRevBar((prev) => !prev);
    audioEngine.playEngineNote(car.engineSoundProfile || 'v12');
  };

  const handleRpmSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const val = parseInt(e.target.value);
    setRpmValue(val);
    audioEngine.playEngineNote(car.engineSoundProfile || 'v12');
  };

  const handleCompareClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onToggleCompare) {
      onToggleCompare(car);
    }
  };

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onToggleBookmark) {
      onToggleBookmark(car);
    }
  };

  const engineLabel = (car.engineSoundProfile || 'v12').toUpperCase();

  return (
    <article
      onClick={() => onSelectCar(car)}
      className="group relative bg-[#F6F3EC] dark:bg-[#181614] border border-hairline rounded-xs overflow-hidden transition-all duration-300 hover:border-[#C5A059]/60 hover:shadow-xl hover:shadow-[#C5A059]/5 cursor-pointer flex flex-col justify-between"
    >
      <div>
        {/* Aspect Ratio 3:2 Photo Container with Skeleton & Zoom */}
        <div className="relative aspect-[3/2] w-full overflow-hidden bg-[#1A1815]">
          {/* Skeleton Shimmer while loading */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1815] via-[#2D2A26] to-[#1A1815] animate-pulse" />
          )}

          <img
            src={car.heroImage}
            alt={`${car.make} ${car.model} (${car.years})`}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            onError={(e) => {
              setIsLoaded(true);
              handleImageError(e);
            }}
            className={`h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-105 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Understated Top Badge Bar */}
          <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
            <div className="flex items-center space-x-1.5">
              <span className="px-2 py-0.5 text-[10px] font-mono-spec tracking-widest bg-[#121110]/85 text-[#C5A059] border border-[#C5A059]/30 uppercase rounded-xs backdrop-blur-xs">
                {car.years}
              </span>
              <span className="px-1.5 py-0.5 text-[9px] font-mono-spec tracking-wider bg-[#121110]/75 text-[#E8E3D8] border border-white/10 uppercase rounded-xs backdrop-blur-xs">
                {engineLabel}
              </span>
            </div>

            <div className="flex items-center space-x-1.5">
              {/* Sound Note Trigger Toggle */}
              <button
                onClick={handlePlaySound}
                className={`p-1.5 rounded-xs border transition-colors ${
                  showRevBar
                    ? 'bg-[#C5A059] text-[#121110] border-[#C5A059]'
                    : 'bg-[#121110]/85 text-[#E8E3D8] hover:text-[#C5A059] border-hairline'
                }`}
                title="Toggle Inline Rev Sound Synthesizer"
              >
                <Volume2 className="w-3.5 h-3.5" />
              </button>

              {/* Bookmark to Collection Trigger */}
              {onToggleBookmark && (
                <button
                  onClick={handleBookmarkClick}
                  className={`p-1.5 rounded-xs border transition-colors ${
                    isBookmarked
                      ? 'bg-[#1B3B2B] text-[#C5A059] border-[#C5A059]'
                      : 'bg-[#121110]/85 text-[#E8E3D8] hover:text-[#C5A059] border-hairline'
                  }`}
                  title={isBookmarked ? 'In My Collection' : 'Bookmark to My Collection'}
                >
                  <Bookmark className="w-3.5 h-3.5" />
                </button>
              )}

              {/* Compare Checkbox Button */}
              {onToggleCompare && (
                <button
                  onClick={handleCompareClick}
                  className={`p-1.5 rounded-xs border transition-colors ${
                    isCompared
                      ? 'bg-[#C5A059] text-[#121110] border-[#C5A059]'
                      : 'bg-[#121110]/85 text-[#E8E3D8] hover:text-[#C5A059] border-hairline'
                  }`}
                  title={isCompared ? 'Remove from comparison' : 'Add to side-by-side comparison'}
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Inline Quick-Rev Audio Bar Drawer Overlay */}
          {showRevBar && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute bottom-2 left-2 right-2 z-20 p-2 bg-[#121110]/95 text-[#F6F3EC] border border-[#C5A059]/40 rounded-xs space-y-1 backdrop-blur-md animate-fade-in font-mono-spec text-[10px]"
            >
              <div className="flex items-center justify-between text-[#C5A059]">
                <span className="font-bold flex items-center space-x-1 uppercase">
                  <Gauge className="w-3 h-3 text-[#C5A059]" />
                  <span>INLINE ENGINE REV SYNTHESIZER</span>
                </span>
                <span>{rpmValue} RPM</span>
              </div>
              <input
                type="range"
                min={1000}
                max={9000}
                step={250}
                value={rpmValue}
                onChange={handleRpmSlider}
                className="w-full accent-[#C5A059] cursor-pointer h-1.5 bg-[#25221F] rounded-lg"
              />
            </div>
          )}

          {/* Bottom subtle dark gradient vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#121110]/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity pointer-events-none" />
        </div>

        {/* Content Body */}
        <div className="p-4 space-y-2.5">
          {/* Typographic Category Badges */}
          <div className="flex flex-wrap gap-1">
            {car.categories.slice(0, 3).map((catId) => {
              const category = CATEGORIES.find((c) => c.id === catId);
              if (!category) return null;
              return (
                <span
                  key={catId}
                  className="text-[9px] font-mono-spec tracking-wider uppercase text-[#7A7367] dark:text-[#9E9689] bg-[#EAE5D9]/50 dark:bg-[#22201D] px-1.5 py-0.5 rounded-xs border border-hairline"
                >
                  {category.shortTag}
                </span>
              );
            })}
            {car.categories.length > 3 && (
              <span className="text-[9px] font-mono-spec text-[#7A7367] dark:text-[#9E9689] px-1">
                +{car.categories.length - 3}
              </span>
            )}
          </div>

          {/* Make and Model */}
          <div>
            <h3 className="font-editorial-serif text-xl text-[#1C1A17] dark:text-[#E8E3D8] group-hover:text-[#C5A059] transition-colors leading-tight font-medium">
              {car.make} <span className="font-normal italic text-[#615B52] dark:text-[#B8B0A2]">{car.model}</span>
            </h3>
            {car.variant && (
              <p className="text-[11px] font-mono-spec text-[#7A7367] dark:text-[#8E8679] truncate">
                {car.variant}
              </p>
            )}
          </div>

          {/* Editorial Hook */}
          <p className="text-xs text-[#524B42] dark:text-[#A8A092] font-light line-clamp-2 leading-relaxed">
            {car.editorialHook}
          </p>
        </div>
      </div>

      {/* Footer Specs Quick Strip */}
      <div className="px-4 py-2.5 bg-[#EAE5D9]/30 dark:bg-[#141210] border-t border-hairline flex items-center justify-between text-[11px] font-mono-spec text-[#615B52] dark:text-[#9E9689]">
        <div className="flex items-center space-x-3">
          <div>
            <span className="text-[9px] text-[#8E8679] block">TOP SPEED</span>
            <span className="text-[#1C1A17] dark:text-[#E8E3D8] font-bold">{car.specs.topSpeed}</span>
          </div>
          <div className="border-l border-hairline pl-3">
            <span className="text-[9px] text-[#8E8679] block">POWER</span>
            <span className="text-[#1C1A17] dark:text-[#E8E3D8] font-bold">{car.specs.horsepower}</span>
          </div>
        </div>
        <div className="flex items-center space-x-1 text-[#C5A059] group-hover:translate-x-0.5 transition-transform">
          <span>PLACARD</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </article>
  );
};
