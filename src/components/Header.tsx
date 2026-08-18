import React from 'react';
import type { ViewMode } from '../types/car';
import type { Language } from '../utils/translations';
import { TRANSLATIONS } from '../utils/translations';
import { Search, Sun, Moon, Volume2, VolumeX, SlidersHorizontal, BookOpen, Clock, Grid, Globe, BarChart3, Bookmark, Compass, MessageSquare, Keyboard, Radio, Printer } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

interface HeaderProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
  onOpenSearch: () => void;
  onOpenTour?: () => void;
  onOpenGuestbook?: () => void;
  onOpenShortcuts?: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  selectedCarsCount: number;
  totalCarsCount: number;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  isAmbientActive: boolean;
  onToggleAmbient: () => void;
  onExportCatalog: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onViewChange,
  onOpenSearch,
  onOpenTour,
  onOpenGuestbook,
  onOpenShortcuts,
  darkMode,
  onToggleDarkMode,
  selectedCarsCount,
  totalCarsCount,
  language,
  onLanguageChange,
  isAmbientActive,
  onToggleAmbient,
  onExportCatalog,
}) => {
  const [audioMuted, setAudioMuted] = React.useState(audioEngine.getIsMuted());

  const handleToggleAudio = () => {
    const isMuted = audioEngine.toggleMute();
    setAudioMuted(isMuted);
  };

  const t = TRANSLATIONS[language] || TRANSLATIONS.EN;

  return (
    <header className="sticky top-0 z-40 bg-[#F6F3EC]/95 dark:bg-[#121110]/95 backdrop-blur-md border-b border-hairline transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand & Editorial Title (Left Column) */}
          <div className="flex items-center space-x-3 cursor-pointer shrink-0" onClick={() => onViewChange('grid')}>
            <div className="w-9 h-9 rounded-sm border border-[#C5A059]/40 flex items-center justify-center bg-[#1A1815] text-[#C5A059] font-archival font-bold text-base shadow-xs flex-none">
              AI
            </div>
            <div>
              <h1 className="font-archival text-base sm:text-lg font-bold tracking-widest text-[#1C1A17] dark:text-[#E8E3D8] uppercase">
                Automotive Icons
              </h1>
              <p className="text-[9px] tracking-wider uppercase font-sans-ui text-[#7A7367] dark:text-[#9E9689]">
                {selectedCarsCount} of {totalCarsCount} Exhibits
              </p>
            </div>
          </div>

          {/* Primary View Switcher Navigation (Center Column - Symmetrical) */}
          <div className="hidden lg:flex items-center justify-center">
            <nav className="flex items-center space-x-0.5 bg-[#EAE5D9]/60 dark:bg-[#1E1C1A] p-0.5 rounded-sm border border-hairline">
              <button
                onClick={() => onViewChange('grid')}
                className={`flex items-center space-x-1 px-2 py-1 rounded-xs text-[11px] font-medium tracking-wide uppercase transition-all duration-200 ${
                  currentView === 'grid'
                    ? 'bg-[#F6F3EC] dark:bg-[#2A2723] text-[#1C1A17] dark:text-[#E8E3D8] shadow-xs border border-[#C5A059]/30 font-bold'
                    : 'text-[#615B52] dark:text-[#A0988C] hover:text-[#1C1A17] dark:hover:text-[#E8E3D8]'
                }`}
              >
                <Grid className="w-3 h-3" />
                <span>{t.gallery}</span>
              </button>

              <button
                onClick={() => onViewChange('timeline')}
                className={`flex items-center space-x-1 px-2 py-1 rounded-xs text-[11px] font-medium tracking-wide uppercase transition-all duration-200 ${
                  currentView === 'timeline'
                    ? 'bg-[#F6F3EC] dark:bg-[#2A2723] text-[#1C1A17] dark:text-[#E8E3D8] shadow-xs border border-[#C5A059]/30 font-bold'
                    : 'text-[#615B52] dark:text-[#A0988C] hover:text-[#1C1A17] dark:hover:text-[#E8E3D8]'
                }`}
              >
                <Clock className="w-3 h-3" />
                <span>{t.chronology}</span>
              </button>

              <button
                onClick={() => onViewChange('map')}
                className={`flex items-center space-x-1 px-2 py-1 rounded-xs text-[11px] font-medium tracking-wide uppercase transition-all duration-200 ${
                  currentView === 'map'
                    ? 'bg-[#F6F3EC] dark:bg-[#2A2723] text-[#1C1A17] dark:text-[#E8E3D8] shadow-xs border border-[#C5A059]/30 font-bold'
                    : 'text-[#615B52] dark:text-[#A0988C] hover:text-[#1C1A17] dark:hover:text-[#E8E3D8]'
                }`}
              >
                <Globe className="w-3 h-3" />
                <span>{t.heritageMap}</span>
              </button>

              <button
                onClick={() => onViewChange('compare')}
                className={`flex items-center space-x-1 px-2 py-1 rounded-xs text-[11px] font-medium tracking-wide uppercase transition-all duration-200 ${
                  currentView === 'compare'
                    ? 'bg-[#F6F3EC] dark:bg-[#2A2723] text-[#1C1A17] dark:text-[#E8E3D8] shadow-xs border border-[#C5A059]/30 font-bold'
                    : 'text-[#615B52] dark:text-[#A0988C] hover:text-[#1C1A17] dark:hover:text-[#E8E3D8]'
                }`}
              >
                <SlidersHorizontal className="w-3 h-3" />
                <span>{t.compare}</span>
              </button>

              <button
                onClick={() => onViewChange('analytics')}
                className={`flex items-center space-x-1 px-2 py-1 rounded-xs text-[11px] font-medium tracking-wide uppercase transition-all duration-200 ${
                  currentView === 'analytics'
                    ? 'bg-[#F6F3EC] dark:bg-[#2A2723] text-[#1C1A17] dark:text-[#E8E3D8] shadow-xs border border-[#C5A059]/30 font-bold'
                    : 'text-[#615B52] dark:text-[#A0988C] hover:text-[#1C1A17] dark:hover:text-[#E8E3D8]'
                }`}
              >
                <BarChart3 className="w-3 h-3" />
                <span>{t.analytics}</span>
              </button>

              <button
                onClick={() => onViewChange('collection')}
                className={`flex items-center space-x-1 px-2 py-1 rounded-xs text-[11px] font-medium tracking-wide uppercase transition-all duration-200 ${
                  currentView === 'collection'
                    ? 'bg-[#F6F3EC] dark:bg-[#2A2723] text-[#1C1A17] dark:text-[#E8E3D8] shadow-xs border border-[#C5A059]/30 font-bold'
                    : 'text-[#615B52] dark:text-[#A0988C] hover:text-[#1C1A17] dark:hover:text-[#E8E3D8]'
                }`}
              >
                <Bookmark className="w-3 h-3" />
                <span>{t.collection}</span>
              </button>

              <button
                onClick={() => onViewChange('about')}
                className={`flex items-center space-x-1 px-2 py-1 rounded-xs text-[11px] font-medium tracking-wide uppercase transition-all duration-200 ${
                  currentView === 'about'
                    ? 'bg-[#F6F3EC] dark:bg-[#2A2723] text-[#1C1A17] dark:text-[#E8E3D8] shadow-xs border border-[#C5A059]/30 font-bold'
                    : 'text-[#615B52] dark:text-[#A0988C] hover:text-[#1C1A17] dark:hover:text-[#E8E3D8]'
                }`}
              >
                <BookOpen className="w-3 h-3" />
                <span>{t.curatorial}</span>
              </button>
            </nav>
          </div>

          {/* Auxiliary Action Controls (Right Column) */}
          <div className="flex items-center space-x-1.5 shrink-0">
            
            {/* Multi-Language Selector Dropdown */}
            <select
              value={language}
              onChange={(e) => onLanguageChange(e.target.value as Language)}
              className="bg-[#EAE5D9]/60 dark:bg-[#1E1C1A] text-[#1C1A17] dark:text-[#E8E3D8] border border-hairline px-2 py-1 text-[11px] font-mono-spec rounded-xs focus:outline-none focus:border-[#C5A059] uppercase font-bold"
              title="Select Exhibition Language"
            >
              <option value="EN">🇬🇧 EN</option>
              <option value="DE">🇩🇪 DE</option>
              <option value="IT">🇮🇹 IT</option>
              <option value="FR">🇫🇷 FR</option>
              <option value="JA">🇯🇵 JA</option>
            </select>

            {/* Ambient Soundscape Synthesizer Toggle */}
            <button
              onClick={onToggleAmbient}
              className={`p-1.5 rounded-xs border transition-colors ${
                isAmbientActive
                  ? 'bg-[#1B3B2B] text-[#C5A059] border-[#C5A059]'
                  : 'bg-[#EAE5D9]/40 dark:bg-[#1C1A17] text-[#7A7367] border-hairline hover:text-[#1C1A17] dark:hover:text-[#E8E3D8]'
              }`}
              title={isAmbientActive ? 'Ambient Museum Acoustics: Active' : 'Toggle Ambient Museum Acoustics'}
            >
              <Radio className="w-3.5 h-3.5" />
            </button>

            {/* Export Full Catalog Button */}
            <button
              onClick={onExportCatalog}
              className="hidden sm:p-1.5 p-1.5 bg-[#EAE5D9]/60 dark:bg-[#1E1C1A] text-[#615B52] dark:text-[#A0988C] hover:text-[#1C1A17] dark:hover:text-[#E8E3D8] border border-hairline rounded-xs text-xs font-mono-spec transition-colors"
              title="Print / Export Full Exhibition Catalog PDF"
            >
              <Printer className="w-3.5 h-3.5 text-[#C5A059]" />
            </button>

            {/* Quick Search */}
            <button
              onClick={onOpenSearch}
              className="flex items-center space-x-1.5 px-2.5 py-1.5 bg-[#EAE5D9]/60 dark:bg-[#1E1C1A] text-[#615B52] dark:text-[#A0988C] hover:text-[#1C1A17] dark:hover:text-[#E8E3D8] border border-hairline rounded-xs text-xs font-mono-spec transition-colors"
              title="Search Exhibition (Cmd + K)"
            >
              <Search className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="hidden sm:inline text-[11px]">{t.search}</span>
              <kbd className="hidden xl:inline-block px-1 py-0.5 text-[9px] bg-[#D8D2C4] dark:bg-[#2A2723] text-[#615B52] dark:text-[#A0988C] rounded-xs border border-hairline font-sans-ui">
                ⌘K
              </kbd>
            </button>

            {/* Guided Tour Trigger */}
            <button
              onClick={onOpenTour}
              className="hidden xl:flex items-center space-x-1 px-2.5 py-1.5 bg-[#1B3B2B] text-[#E8E3D8] hover:bg-[#254F3B] border border-[#C5A059]/40 rounded-xs text-[11px] font-mono-spec font-bold uppercase transition-colors"
              title="Curator's Guided Exhibition Tour"
            >
              <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{t.guidedTour}</span>
            </button>

            {/* Guestbook Trigger */}
            <button
              onClick={onOpenGuestbook}
              className="hidden 2xl:flex items-center space-x-1 px-2.5 py-1.5 bg-[#EAE5D9]/60 dark:bg-[#1E1C1A] text-[#1C1A17] dark:text-[#E8E3D8] border border-hairline rounded-xs text-[11px] font-mono-spec font-bold uppercase transition-colors"
              title="Sign Guestbook & Vote Car of the Century"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{t.guestbook}</span>
            </button>

            {/* Keyboard Shortcuts Trigger */}
            <button
              onClick={onOpenShortcuts}
              className="p-1.5 bg-[#EAE5D9]/60 dark:bg-[#1E1C1A] text-[#615B52] dark:text-[#A0988C] hover:text-[#1C1A17] dark:hover:text-[#E8E3D8] border border-hairline rounded-xs text-xs font-mono-spec transition-colors"
              title="Keyboard Shortcuts Cheat Sheet (?)"
            >
              <Keyboard className="w-3.5 h-3.5 text-[#C5A059]" />
            </button>

            {/* Audio Toggle */}
            <button
              onClick={handleToggleAudio}
              className={`p-1.5 rounded-xs border border-hairline transition-colors duration-200 ${
                !audioMuted 
                  ? 'bg-[#1B3B2B] text-[#C5A059] border-[#C5A059]/40' 
                  : 'bg-[#EAE5D9]/40 dark:bg-[#1C1A17] text-[#7A7367] dark:text-[#9E9689]'
              }`}
              title={audioMuted ? 'Enable Engine Sound Notes' : 'Mute Engine Sounds'}
            >
              {!audioMuted ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={onToggleDarkMode}
              className="p-1.5 text-[#615B52] dark:text-[#A0988C] bg-[#EAE5D9]/40 dark:bg-[#1C1A17] hover:bg-[#E2DCCE] dark:hover:bg-[#25221F] border border-hairline rounded-xs transition-colors duration-200"
              title={darkMode ? 'Switch to Light Exhibition Theme' : 'Switch to Dark Exhibition Theme'}
            >
              {darkMode ? <Sun className="w-3.5 h-3.5 text-[#C5A059]" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

          </div>
        </div>

        {/* Mobile View Switcher */}
        <div className="flex md:hidden items-center justify-around py-2 border-t border-hairline text-xs font-mono-spec uppercase">
          <button
            onClick={() => onViewChange('grid')}
            className={`px-2 py-1 ${currentView === 'grid' ? 'text-[#C5A059] font-bold' : 'text-[#7A7367]'}`}
          >
            {t.gallery}
          </button>
          <button
            onClick={() => onViewChange('timeline')}
            className={`px-2 py-1 ${currentView === 'timeline' ? 'text-[#C5A059] font-bold' : 'text-[#7A7367]'}`}
          >
            {t.chronology}
          </button>
          <button
            onClick={() => onViewChange('map')}
            className={`px-2 py-1 ${currentView === 'map' ? 'text-[#C5A059] font-bold' : 'text-[#7A7367]'}`}
          >
            {t.heritageMap}
          </button>
          <button
            onClick={() => onViewChange('compare')}
            className={`px-2 py-1 ${currentView === 'compare' ? 'text-[#C5A059] font-bold' : 'text-[#7A7367]'}`}
          >
            {t.compare}
          </button>
          <button
            onClick={() => onViewChange('analytics')}
            className={`px-2 py-1 ${currentView === 'analytics' ? 'text-[#C5A059] font-bold' : 'text-[#7A7367]'}`}
          >
            {t.analytics}
          </button>
        </div>

      </div>
    </header>
  );
};
