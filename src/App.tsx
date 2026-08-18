import { useState, useEffect, useMemo } from 'react';
import type { Car, EraId, CategoryId, ViewMode, FilterLogic, SortOption, EngineType, ValuationTier, UserCollection } from './types/car';
import { CARS } from './data/carsData';
import { Header } from './components/Header';
import { HeroCarousel } from './components/HeroCarousel';
import { EraTimelineBar } from './components/EraTimelineBar';
import { CategoryFilterBar } from './components/CategoryFilterBar';
import { AdvancedFilterBar } from './components/AdvancedFilterBar';
import { InteractiveTimelineScroller } from './components/InteractiveTimelineScroller';
import { CarCard } from './components/CarCard';
import { TimelineView } from './components/TimelineView';
import { HeritageMapView } from './components/HeritageMapView';
import { ExhibitionAnalyticsView } from './components/ExhibitionAnalyticsView';
import { CarDetailModal } from './components/CarDetailModal';
import { InspectionStudioModal } from './components/InspectionStudioModal';
import { PressArchiveModal } from './components/PressArchiveModal';
import { UserCollectionView } from './components/UserCollectionView';
import { CompareView } from './components/CompareView';
import { SearchModal } from './components/SearchModal';
import { AboutView } from './components/AboutView';
import { CollectorCardModal } from './components/CollectorCardModal';
import { ExhibitionPosterModal } from './components/ExhibitionPosterModal';
import { ExhibitionTourModal } from './components/ExhibitionTourModal';
import { GuestbookModal } from './components/GuestbookModal';
import { KeyboardShortcutsModal } from './components/KeyboardShortcutsModal';
import { ToastContainer } from './components/ToastContainer';
import type { ToastMessage } from './components/ToastContainer';
import { Footer } from './components/Footer';
import { audioEngine } from './utils/audioEngine';
import { ambientSoundscape } from './utils/ambientSoundscape';
import { triggerFullCatalogPrint } from './utils/catalogGenerator';
import type { Language } from './utils/translations';
import { BrandFilterStrip } from './components/BrandFilterStrip';
import { SlidersHorizontal, RefreshCw, ArrowUpDown } from 'lucide-react';

export function App() {
  // Navigation & View Mode
  const [currentView, setCurrentView] = useState<ViewMode>('grid');
  const [language, setLanguage] = useState<Language>('EN');
  const [isAmbientActive, setIsAmbientActive] = useState<boolean>(false);

  // Primary Filter States
  const [selectedEra, setSelectedEra] = useState<EraId | 'all'>('all');
  const [selectedCategories, setSelectedCategories] = useState<CategoryId[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string | 'all'>('all');
  const [filterLogic, setFilterLogic] = useState<FilterLogic>('OR');
  const [sortOption, setSortOption] = useState<SortOption>('year-asc');

  // Phase 2 Advanced Compound Filter States
  const [selectedCountry, setSelectedCountry] = useState<string | 'all'>('all');
  const [selectedEngineType, setSelectedEngineType] = useState<EngineType | 'all'>('all');
  const [selectedValuationTier, setSelectedValuationTier] = useState<ValuationTier | 'all'>('all');
  const [selectedDecade, setSelectedDecade] = useState<string | 'all'>('all');

  // Active Modals & Selected Cars
  const [selectedCarForPlacard, setSelectedCarForPlacard] = useState<Car | null>(null);
  const [selectedCarForCollectorCard, setSelectedCarForCollectorCard] = useState<Car | null>(null);
  const [selectedCarForInspection, setSelectedCarForInspection] = useState<Car | null>(null);
  const [selectedCarForPress, setSelectedCarForPress] = useState<Car | null>(null);
  const [selectedCarForPoster, setSelectedCarForPoster] = useState<Car | null>(null);

  // Tour, Guestbook, Search, Shortcuts Modals
  const [isTourOpen, setIsTourOpen] = useState<boolean>(false);
  const [isGuestbookOpen, setIsGuestbookOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState<boolean>(false);

  // Compare & Bookmarked Vehicles
  const [comparedCarIds, setComparedCarIds] = useState<string[]>(['mercedes-300sl-gullwing', 'ferrari-250-gto']);
  const [bookmarkedCarIds, setBookmarkedCarIds] = useState<string[]>(['ferrari-f40', 'mclaren-f1', 'bugatti-veyron']);

  // Toast Notifications
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // User Collections
  const [userCollections, setUserCollections] = useState<UserCollection[]>([
    {
      id: 'coll-1',
      name: '200+ MPH Speed Wall',
      description: 'The production hypercars that surpassed the historic 200 mph threshold.',
      carIds: ['ferrari-f40', 'mclaren-f1', 'bugatti-veyron', 'bugatti-chiron', 'rimac-nevera'],
      createdAt: '2026-08-10'
    },
    {
      id: 'coll-2',
      name: 'Homologation Racers',
      description: 'Race-bred road cars built to satisfy international championship rules.',
      carIds: ['ferrari-250-gto', 'bmw-m3-e30', 'audi-quattro', 'chevrolet-camaro-z28'],
      createdAt: '2026-08-10'
    }
  ]);

  // Dark Mode State
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Flagship Cars for Hero Carousel
  const flagshipCars = useMemo(() => {
    return CARS.filter((car) => car.flagshipHero);
  }, []);

  const addToast = (type: 'success' | 'info' | 'warning', title: string, description?: string) => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, type, title, description }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const handleDismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Bookmark Toggle
  const handleToggleBookmark = (car: Car) => {
    setBookmarkedCarIds((prev) => {
      if (prev.includes(car.id)) {
        addToast('info', 'Removed from Collection', `${car.make} ${car.model} removed.`);
        return prev.filter((id) => id !== car.id);
      } else {
        addToast('success', 'Bookmarked to Collection', `${car.make} ${car.model} added.`);
        return [...prev, car.id];
      }
    });
  };

  // Keyboard Shortcuts Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      } else if ((e.metaKey || e.ctrlKey) && e.key === 'd') {
        e.preventDefault();
        setDarkMode((prev) => !prev);
      } else if ((e.metaKey || e.ctrlKey) && e.key === 'm') {
        e.preventDefault();
        const muted = audioEngine.toggleMute();
        addToast('info', muted ? 'Audio Muted' : 'Audio Engine Active');
      } else if (e.key === '?' && !['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        setIsShortcutsOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setSelectedCarForPlacard(null);
        setSelectedCarForInspection(null);
        setSelectedCarForPress(null);
        setSelectedCarForCollectorCard(null);
        setSelectedCarForPoster(null);
        setIsSearchOpen(false);
        setIsTourOpen(false);
        setIsGuestbookOpen(false);
        setIsShortcutsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Update HTML dark class on toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Toggle Category
  const handleToggleCategory = (catId: CategoryId) => {
    setSelectedCategories((prev) =>
      prev.includes(catId) ? prev.filter((id) => id !== catId) : [...prev, catId]
    );
  };

  // Count active advanced compound filters
  const activeAdvancedCount = useMemo(() => {
    let count = 0;
    if (selectedCountry !== 'all') count++;
    if (selectedEngineType !== 'all') count++;
    if (selectedValuationTier !== 'all') count++;
    if (selectedDecade !== 'all') count++;
    return count;
  }, [selectedCountry, selectedEngineType, selectedValuationTier, selectedDecade]);

  // Clear all filters
  const handleResetFilters = () => {
    setSelectedEra('all');
    setSelectedCategories([]);
    setSelectedBrand('all');
    setSelectedCountry('all');
    setSelectedEngineType('all');
    setSelectedValuationTier('all');
    setSelectedDecade('all');
    setSortOption('year-asc');
    addToast('info', 'Filters Reset', 'All search criteria restored to baseline.');
  };

  const handleClearAllAdvanced = () => {
    setSelectedCountry('all');
    setSelectedEngineType('all');
    setSelectedValuationTier('all');
    setSelectedDecade('all');
  };

  // Toggle Compare Car
  const handleToggleCompare = (car: Car) => {
    setComparedCarIds((prev) => {
      if (prev.includes(car.id)) {
        addToast('info', 'Removed from Compare', `${car.make} ${car.model} removed.`);
        return prev.filter((id) => id !== car.id);
      } else {
        if (prev.length >= 4) {
          addToast('warning', 'Matrix Full', 'Maximum 4 vehicles allowed in compare sheet.');
          return prev;
        }
        addToast('success', 'Added to Compare Matrix', `${car.make} ${car.model} added.`);
        return [...prev, car.id];
      }
    });
  };

  const handleAddCarToCompare = (car: Car) => {
    if (comparedCarIds.length < 4 && !comparedCarIds.includes(car.id)) {
      setComparedCarIds((prev) => [...prev, car.id]);
      addToast('success', 'Added to Compare Matrix', `${car.make} ${car.model} added.`);
    }
  };

  const handleRemoveFromCompare = (carId: string) => {
    setComparedCarIds((prev) => prev.filter((id) => id !== carId));
  };

  const handleReorderCompare = (newCars: Car[]) => {
    setComparedCarIds(newCars.map((c) => c.id));
  };

  const handleToggleAmbient = () => {
    const active = ambientSoundscape.toggle();
    setIsAmbientActive(active);
    addToast('info', active ? 'Ambient Museum Soundscape Active' : 'Ambient Soundscape Muted');
  };

  const handleSelectMapHub = (country: string) => {
    setSelectedCountry(country);
    setCurrentView('grid');
    addToast('info', 'Map Pin Filter Applied', `Showing exhibits manufactured in ${country}.`);
  };

  // User Collection Actions
  const handleCreateCollection = (name: string, description: string) => {
    const newColl: UserCollection = {
      id: `coll-${Date.now()}`,
      name,
      description,
      carIds: [],
      createdAt: new Date().toISOString().split('T')[0]
    };
    setUserCollections((prev) => [...prev, newColl]);
    addToast('success', 'Collection Created', `"${name}" added to your exhibition portfolio.`);
  };

  const handleDeleteCollection = (id: string) => {
    setUserCollections((prev) => prev.filter((c) => c.id !== id));
    addToast('info', 'Collection Deleted');
  };

  const handleRemoveCarFromCollection = (collectionId: string, carId: string) => {
    setUserCollections((prev) =>
      prev.map((c) => (c.id === collectionId ? { ...c, carIds: c.carIds.filter((id) => id !== carId) } : c))
    );
    addToast('info', 'Vehicle Removed from Collection');
  };

  // Filter & Sort Logic
  const filteredCars = useMemo(() => {
    return CARS.filter((car) => {
      if (selectedEra !== 'all' && car.era !== selectedEra) return false;

      if (selectedBrand !== 'all' && !car.make.toLowerCase().includes(selectedBrand.toLowerCase())) {
        return false;
      }

      if (selectedCategories.length > 0) {
        if (filterLogic === 'AND') {
          const hasAll = selectedCategories.every((cat) => car.categories.includes(cat));
          if (!hasAll) return false;
        } else {
          const hasAny = selectedCategories.some((cat) => car.categories.includes(cat));
          if (!hasAny) return false;
        }
      }

      if (selectedCountry !== 'all' && car.country.toLowerCase() !== selectedCountry.toLowerCase()) {
        return false;
      }

      if (selectedEngineType !== 'all') {
        const engText = car.specs.engine.toLowerCase();
        if (selectedEngineType === 'v12' && !engText.includes('v12')) return false;
        if (selectedEngineType === 'v8' && !engText.includes('v8')) return false;
        if (selectedEngineType === 'flat6' && !engText.includes('flat') && !engText.includes('boxer')) return false;
        if (selectedEngineType === 'inline6' && !engText.includes('inline') && !engText.includes('6-cylinder') && !engText.includes('straight-6') && !engText.includes('straight-8')) return false;
        if (selectedEngineType === 'inline4' && !engText.includes('4-cylinder') && !engText.includes('single-cylinder')) return false;
        if (selectedEngineType === 'w16' && !engText.includes('w16')) return false;
        if (selectedEngineType === 'electric' && !engText.includes('electric') && !engText.includes('induction')) return false;
      }

      if (selectedValuationTier !== 'all') {
        const valText = (car.estimatedValuation || '').toLowerCase();
        if (selectedValuationTier === 'under-100k' && (valText.includes('m') || valText.includes('500') || valText.includes('220') || valText.includes('180') || valText.includes('150'))) return false;
        if (selectedValuationTier === '10m-plus' && !valText.includes('10,000,000') && !valText.includes('20,000,000') && !valText.includes('40,000,000') && !valText.includes('48,000,000')) return false;
      }

      if (selectedDecade !== 'all') {
        const year = car.startYear;
        if (selectedDecade === '1880s' && (year < 1880 || year > 1889)) return false;
        if (selectedDecade === '1900s' && (year < 1900 || year > 1909)) return false;
        if (selectedDecade === '1910s' && (year < 1910 || year > 1919)) return false;
        if (selectedDecade === '1920s' && (year < 1920 || year > 1929)) return false;
        if (selectedDecade === '1930s' && (year < 1930 || year > 1939)) return false;
        if (selectedDecade === '1940s' && (year < 1940 || year > 1949)) return false;
        if (selectedDecade === '1950s' && (year < 1950 || year > 1959)) return false;
        if (selectedDecade === '1960s' && (year < 1960 || year > 1969)) return false;
        if (selectedDecade === '1970s' && (year < 1970 || year > 1979)) return false;
        if (selectedDecade === '1980s' && (year < 1980 || year > 1989)) return false;
        if (selectedDecade === '1990s' && (year < 1990 || year > 1999)) return false;
        if (selectedDecade === '2000s' && (year < 2000 || year > 2009)) return false;
        if (selectedDecade === '2010s' && (year < 2010 || year > 2019)) return false;
        if (selectedDecade === '2020s' && year < 2020) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortOption === 'year-asc') return a.startYear - b.startYear;
      if (sortOption === 'year-desc') return b.startYear - a.startYear;
      if (sortOption === 'name-asc') return a.make.localeCompare(b.make);
      if (sortOption === 'name-desc') return b.make.localeCompare(a.make);
      if (sortOption === 'top-speed') {
        const speedA = parseFloat(a.specs.topSpeed) || 0;
        const speedB = parseFloat(b.specs.topSpeed) || 0;
        return speedB - speedA;
      }
      if (sortOption === 'horsepower') {
        const hpA = parseInt(a.specs.horsepower) || 0;
        const hpB = parseInt(b.specs.horsepower) || 0;
        return hpB - hpA;
      }
      return 0;
    });
  }, [selectedEra, selectedBrand, selectedCategories, filterLogic, selectedCountry, selectedEngineType, selectedValuationTier, selectedDecade, sortOption]);

  const comparedCars = useMemo(() => {
    return CARS.filter((c) => comparedCarIds.includes(c.id));
  }, [comparedCarIds]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] dark:bg-[#121110] text-[#1C1A17] dark:text-[#E8E3D8] paper-grain transition-colors duration-300">
      
      {/* Editorial Header */}
      <Header
        currentView={currentView}
        onViewChange={setCurrentView}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenTour={() => setIsTourOpen(true)}
        onOpenGuestbook={() => setIsGuestbookOpen(true)}
        onOpenShortcuts={() => setIsShortcutsOpen(true)}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        selectedCarsCount={filteredCars.length}
        totalCarsCount={CARS.length}
        language={language}
        onLanguageChange={setLanguage}
        isAmbientActive={isAmbientActive}
        onToggleAmbient={handleToggleAmbient}
        onExportCatalog={triggerFullCatalogPrint}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* VIEW 1: GALLERY GRID VIEW */}
        {currentView === 'grid' && (
          <div className="space-y-6">
            
            {/* Flagship Hero Carousel */}
            <HeroCarousel
              flagshipCars={flagshipCars}
              onSelectCar={setSelectedCarForPlacard}
            />

            {/* Manufacturer Marque Quick Filter Strip */}
            <BrandFilterStrip
              selectedBrand={selectedBrand}
              onSelectBrand={setSelectedBrand}
            />

            {/* Scrolly-telling Milestone Track */}
            <InteractiveTimelineScroller
              selectedEra={selectedEra}
              onSelectEra={setSelectedEra}
            />

            {/* Horizontal Era Timeline Selector */}
            <EraTimelineBar
              selectedEra={selectedEra}
              onSelectEra={setSelectedEra}
            />

            {/* Significance Category Tags & AND/OR Filter Logic */}
            <CategoryFilterBar
              selectedCategories={selectedCategories}
              onToggleCategory={handleToggleCategory}
              filterLogic={filterLogic}
              onToggleFilterLogic={() => setFilterLogic((prev) => (prev === 'AND' ? 'OR' : 'AND'))}
              onClearCategories={() => setSelectedCategories([])}
            />

            {/* Advanced Compound Matrix Filters (Country, Engine, Valuation, Decade) */}
            <AdvancedFilterBar
              selectedCountry={selectedCountry}
              onSelectCountry={setSelectedCountry}
              selectedEngineType={selectedEngineType}
              onSelectEngineType={setSelectedEngineType}
              selectedValuationTier={selectedValuationTier}
              onSelectValuationTier={setSelectedValuationTier}
              selectedDecade={selectedDecade}
              onSelectDecade={setSelectedDecade}
              onClearAllAdvanced={handleClearAllAdvanced}
              activeAdvancedCount={activeAdvancedCount}
            />

            {/* Sort Bar & Filter Summary */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-3 border-b border-hairline text-xs font-mono-spec">
                
                <div className="flex items-center space-x-2 text-[#7A7367] dark:text-[#9E9689]">
                  <span className="font-bold text-[#1C1A17] dark:text-[#E8E3D8]">
                    SHOWING {filteredCars.length} OF {CARS.length} EXHIBITS
                  </span>
                  {(selectedEra !== 'all' || selectedCategories.length > 0 || activeAdvancedCount > 0) && (
                    <button
                      onClick={handleResetFilters}
                      className="ml-2 text-[#C5A059] hover:underline uppercase flex items-center space-x-1 font-semibold"
                    >
                      <RefreshCw className="w-3 h-3" />
                      <span>RESET ALL FILTERS</span>
                    </button>
                  )}
                </div>

                {/* Sort Option Dropdown */}
                <div className="flex items-center space-x-2">
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span className="text-[#7A7367] uppercase">SORT BY:</span>
                  <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value as SortOption)}
                    className="bg-[#EAE5D9]/60 dark:bg-[#1E1C1A] text-[#1C1A17] dark:text-[#E8E3D8] border border-hairline px-2.5 py-1 text-xs font-mono-spec rounded-xs focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="year-asc">Chronological (Earliest First)</option>
                    <option value="year-desc">Reverse Chronological (Latest First)</option>
                    <option value="top-speed">Verified Top Speed (Highest First)</option>
                    <option value="horsepower">Horsepower Output (Highest First)</option>
                    <option value="name-asc">Manufacturer (A — Z)</option>
                    <option value="name-desc">Manufacturer (Z — A)</option>
                  </select>
                </div>

              </div>
            </div>

            {/* Gallery Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              {filteredCars.length === 0 ? (
                <div className="py-16 text-center bg-[#EAE5D9]/30 dark:bg-[#1A1815] border border-hairline rounded-xs space-y-3">
                  <p className="font-editorial-serif text-xl italic text-[#7A7367]">
                    No historical motorcars match the combined compound matrix criteria selected.
                  </p>
                  <button
                    onClick={handleResetFilters}
                    className="px-4 py-2 bg-[#C5A059] text-[#121110] font-mono-spec text-xs font-bold uppercase rounded-xs"
                  >
                    Reset Compound Matrix Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCars.map((car) => (
                    <CarCard
                      key={car.id}
                      car={car}
                      onSelectCar={setSelectedCarForPlacard}
                      onToggleCompare={handleToggleCompare}
                      isCompared={comparedCarIds.includes(car.id)}
                      onToggleBookmark={handleToggleBookmark}
                      isBookmarked={bookmarkedCarIds.includes(car.id)}
                    />
                  ))}
                </div>
              )}
            </div>

          </div>
        )}

        {/* VIEW 2: TIMELINE VIEW */}
        {currentView === 'timeline' && (
          <TimelineView
            cars={filteredCars}
            onSelectCar={setSelectedCarForPlacard}
          />
        )}

        {/* VIEW 3: HERITAGE MAP VIEW */}
        {currentView === 'map' && (
          <HeritageMapView
            cars={CARS}
            onSelectHub={handleSelectMapHub}
            onSelectCar={setSelectedCarForPlacard}
          />
        )}

        {/* VIEW 4: COMPARE VIEW */}
        {currentView === 'compare' && (
          <CompareView
            comparedCars={comparedCars}
            onRemoveFromCompare={handleRemoveFromCompare}
            onAddCarToCompare={handleAddCarToCompare}
            onSelectCar={setSelectedCarForPlacard}
            onReorderCompare={handleReorderCompare}
          />
        )}

        {/* VIEW 5: ANALYTICS VIEW */}
        {currentView === 'analytics' && (
          <ExhibitionAnalyticsView
            cars={CARS}
            onSelectCar={setSelectedCarForPlacard}
          />
        )}

        {/* VIEW 6: USER COLLECTION VIEW */}
        {currentView === 'collection' && (
          <UserCollectionView
            collections={userCollections}
            onCreateCollection={handleCreateCollection}
            onDeleteCollection={handleDeleteCollection}
            onRemoveCarFromCollection={handleRemoveCarFromCollection}
            onSelectCar={setSelectedCarForPlacard}
          />
        )}

        {/* VIEW 7: ABOUT VIEW */}
        {currentView === 'about' && (
          <AboutView onSelectCar={setSelectedCarForPlacard} />
        )}

      </main>

      {/* Floating Compare Drawer Bar */}
      {comparedCarIds.length > 0 && currentView !== 'compare' && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-[#1A1815] text-[#F6F3EC] px-4 py-3 rounded-xs border border-[#C5A059]/40 shadow-2xl flex items-center space-x-4 no-print animate-fade-in">
          <div className="flex items-center space-x-2 text-xs font-mono-spec text-[#C5A059]">
            <SlidersHorizontal className="w-4 h-4" />
            <span className="font-bold">{comparedCarIds.length} VEHICLES IN COMPARE MATRIX</span>
          </div>
          <button
            onClick={() => setCurrentView('compare')}
            className="px-3 py-1 bg-[#C5A059] text-[#121110] font-mono-spec text-xs font-bold uppercase rounded-xs hover:bg-[#D4AF66] transition-colors"
          >
            Launch Spec Compare Sheet
          </button>
        </div>
      )}

      {/* Museum Placard Detail Modal */}
      <CarDetailModal
        car={selectedCarForPlacard}
        onClose={() => setSelectedCarForPlacard(null)}
        onSelectCar={setSelectedCarForPlacard}
        onOpenCollectorCard={setSelectedCarForCollectorCard}
        onOpenInspectionStudio={setSelectedCarForInspection}
        onOpenPoster={setSelectedCarForPoster}
      />

      {/* Enterprise Inspection Studio Modal */}
      <InspectionStudioModal
        car={selectedCarForInspection}
        onClose={() => setSelectedCarForInspection(null)}
        onOpenPressArchive={setSelectedCarForPress}
      />

      {/* Press & Citations Archive Modal */}
      <PressArchiveModal
        car={selectedCarForPress}
        onClose={() => setSelectedCarForPress(null)}
      />

      {/* Printable Wall Exhibition Poster Modal */}
      <ExhibitionPosterModal
        car={selectedCarForPoster}
        onClose={() => setSelectedCarForPoster(null)}
      />

      {/* Collector Trading Card Modal */}
      <CollectorCardModal
        car={selectedCarForCollectorCard}
        onClose={() => setSelectedCarForCollectorCard(null)}
      />

      {/* Curator's Guided Exhibition Tour Modal */}
      <ExhibitionTourModal
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        onSelectCar={setSelectedCarForPlacard}
      />

      {/* Visitor Guestbook & Voting Modal */}
      <GuestbookModal
        isOpen={isGuestbookOpen}
        onClose={() => setIsGuestbookOpen(false)}
      />

      {/* Keyboard Shortcuts Cheat Sheet Modal */}
      <KeyboardShortcutsModal
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectCar={setSelectedCarForPlacard}
      />

      {/* Toast Notifications */}
      <ToastContainer toasts={toasts} onDismiss={handleDismissToast} />

      {/* Editorial Footer */}
      <Footer onViewChange={setCurrentView} />

    </div>
  );
}

export default App;
