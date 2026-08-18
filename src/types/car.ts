export type EraId =
  | 'dawn'
  | 'brass'
  | 'golden-prewar'
  | 'postwar'
  | 'motorsport-gold'
  | 'muscle'
  | 'supercar-dawn'
  | 'turbo-tech'
  | 'analog-peak'
  | 'modern-icons'
  | 'new-legends';

export type CategoryId =
  | 'engineering'
  | 'motorsport'
  | 'speed-records'
  | 'pop-culture'
  | 'design'
  | 'cultural-impact'
  | 'rarity'
  | 'first';

export type EngineType = 'v12' | 'v8' | 'flat6' | 'inline6' | 'inline4' | 'w16' | 'v6' | 'electric';
export type Aspiration = 'naturally-aspirated' | 'turbocharged' | 'supercharged' | 'electric';
export type ValuationTier = 'under-100k' | '100k-500k' | '500k-2m' | '2m-10m' | '10m-plus';

export interface HubLocation {
  hubName: string;
  region: string;
  lat: number;
  lng: number;
}

export interface MechanicalHotspot {
  id: string;
  title: string;
  description: string;
  xPercent: number; // Position on hero image (0-100%)
  yPercent: number;
  category: 'engine' | 'chassis' | 'aerodynamics' | 'interior';
}

export interface PressAd {
  title: string;
  year: string;
  image: string;
  summary: string;
  source: string;
}

export interface Citation {
  claim: string;
  verifyingBody: string;
  year: string;
  notes?: string;
}

export interface Specs {
  engine: string;
  displacement?: string;
  horsepower: string;
  horsepowerHp?: number;
  torque?: string;
  acceleration0to60: string;
  acceleration0to60Sec?: number;
  topSpeed: string;
  topSpeedMph?: number;
  weight: string;
  weightKg?: number;
  drivetrain: string;
  transmission: string;
  chassisType?: string;
  engineType?: EngineType;
  aspiration?: Aspiration;
}

export interface Quote {
  text: string;
  author: string;
  source: string;
  year?: string;
}

export interface InteriorPOVImages {
  driverSeat?: string;
  gaugeCluster?: string;
  seatsCabin?: string;
  pedalBox?: string;
}

export interface Car {
  id: string;
  make: string;
  model: string;
  variant?: string;
  years: string;
  startYear: number;
  endYear?: number;
  decade?: string;
  country: string;
  hubLocation?: HubLocation;
  era: EraId;
  categories: CategoryId[];
  editorialHook: string;
  heroImage: string;
  engineImage?: string;
  interiorImage?: string;
  interiorPOVs?: InteriorPOVImages;
  galleryImages: string[];
  story: string;
  whyIconic: string;
  specs: Specs;
  legacy: string;
  quotes: Quote[];
  relatedCarIds: string[];
  productionCount?: string;
  estimatedValuation?: string;
  valuationTier?: ValuationTier;
  originalPrice?: string;
  engineSoundProfile?: 'v12' | 'v10' | 'v8' | 'flat6' | 'inline6' | 'inline4' | 'v6' | 'w16' | 'turbo' | 'electric' | 'rotary';
  flagshipHero?: boolean;
  hotspots?: MechanicalHotspot[];
  pressAds?: PressAd[];
  citations?: Citation[];
}

export interface EraInfo {
  id: EraId;
  name: string;
  timeframe: string;
  startYear: number;
  endYear: number;
  description: string;
  curatorialNote: string;
  landmarkYear?: number;
  landmarkEvent?: string;
}

export interface CategoryInfo {
  id: CategoryId;
  name: string;
  shortTag: string;
  description: string;
  symbol: string;
}

export type ViewMode = 'grid' | 'timeline' | 'map' | 'compare' | 'about' | 'analytics' | 'collection';
export type FilterLogic = 'AND' | 'OR';
export type SortOption = 'year-asc' | 'year-desc' | 'name-asc' | 'name-desc' | 'top-speed' | 'horsepower' | 'valuation';

export interface UserCollection {
  id: string;
  name: string;
  description: string;
  carIds: string[];
  createdAt: string;
}
