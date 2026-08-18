export interface ManufacturingHub {
  id: string;
  name: string;
  region: string;
  country: string;
  lat: number;
  lng: number;
  description: string;
  historicalTitle: string;
  iconicBrands: string[];
}

export const MANUFACTURING_HUBS: ManufacturingHub[] = [
  {
    id: 'stuttgart',
    name: 'Stuttgart & Bad Cannstatt',
    region: 'Baden-Württemberg',
    country: 'Germany',
    lat: 48.7758,
    lng: 9.1829,
    historicalTitle: 'The Swabian Engineering Cradle',
    description: 'Home to Gottlieb Daimler, Wilhelm Maybach, and Ferdinand Porsche. The birthplace of high-speed petrol engine development and precision sports engineering.',
    iconicBrands: ['Mercedes-Benz', 'Porsche']
  },
  {
    id: 'maranello',
    name: 'Maranello & Sant’Agata Bolognese',
    region: 'Emilia-Romagna',
    country: 'Italy',
    lat: 44.5323,
    lng: 10.8642,
    historicalTitle: 'Motor Valley — The Land of Exotic Supercars',
    description: 'The world’s highest density of exotic supercar manufacturers, coachbuilders, and Grand Prix engine artisans.',
    iconicBrands: ['Ferrari', 'Lamborghini', 'Alfa Romeo', 'De Tomaso']
  },
  {
    id: 'detroit',
    name: 'Detroit & Highland Park',
    region: 'Michigan',
    country: 'United States',
    lat: 42.3314,
    lng: -83.0458,
    historicalTitle: 'Motor City — Mass Production & Muscle Power',
    description: 'The industrial epicenter that democratized personal mobility through assembly lines and unleashed the 1960s V8 muscle car wars.',
    iconicBrands: ['Ford', 'Chevrolet', 'Pontiac', 'Dodge', 'Plymouth', 'Buick', 'Cadillac', 'Oldsmobile', 'Duesenberg', 'Shelby']
  },
  {
    id: 'coventry',
    name: 'Coventry & Woking',
    region: 'West Midlands / Surrey',
    country: 'United Kingdom',
    lat: 52.4068,
    lng: -1.5197,
    historicalTitle: 'British Fine Craftsmanship & Aero Motorsport',
    description: 'Home to hand-hammered aluminum coachwork, Le Mans victories, James Bond grand tourers, and F1 composite engineering.',
    iconicBrands: ['Jaguar', 'Aston Martin', 'McLaren', 'Rolls-Royce']
  },
  {
    id: 'molsheim',
    name: 'Molsheim',
    region: 'Alsace',
    country: 'France',
    lat: 48.5414,
    lng: 7.4925,
    historicalTitle: 'Château St. Jean — Art Deco Ultra-Luxury',
    description: 'Ettore and Jean Bugatti’s sanctuary where engineering artistry, 12.7L aero engines, and 300+ mph hypercars are handcrafted.',
    iconicBrands: ['Bugatti', 'Citroën']
  },
  {
    id: 'tokyo',
    name: 'Greater Tokyo & Toyota City',
    region: 'Kantō / Chūbu',
    country: 'Japan',
    lat: 35.6762,
    lng: 139.6503,
    historicalTitle: 'Precision Engineering & JDM Legends',
    description: 'Pioneered aluminum monocoques, twin-turbo bulletproof powertrains, active all-wheel drive, and daily usable supercars.',
    iconicBrands: ['Toyota', 'Nissan', 'Honda']
  },
  {
    id: 'zagreb',
    name: 'Sveta Nedelja',
    region: 'Zagreb County',
    country: 'Croatia',
    lat: 45.7958,
    lng: 15.7767,
    historicalTitle: 'The Electric Megawatt Hypercar Frontier',
    description: 'Mate Rimac’s high-tech facility pioneering quad-motor vectoring torque and sub-2-second electric hypercar acceleration.',
    iconicBrands: ['Rimac Automobili']
  },
  {
    id: 'silicon-valley',
    name: 'Fremont & Silicon Valley',
    region: 'California',
    country: 'United States',
    lat: 37.5483,
    lng: -121.9886,
    historicalTitle: 'The EV Revolution Center',
    description: 'The intersection of software, lithium-ion battery technology, and electric motor acceleration.',
    iconicBrands: ['Tesla', 'DeLorean']
  }
];
