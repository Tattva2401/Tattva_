import type { EraInfo } from '../types/car';

export const ERAS: EraInfo[] = [
  {
    id: 'dawn',
    name: 'The Dawn of the Automobile',
    timeframe: '1880s–1900s',
    startYear: 1880,
    endYear: 1900,
    description: 'First motorcars, carriage conversions, and the inception of self-propelled personal transport.',
    curatorialNote: 'An era of radical experimentation where steam, electricity, and internal combustion vied for dominance.',
    landmarkYear: 1888,
    landmarkEvent: 'Bertha Benz completes the first long-distance automotive road trip (106 km).'
  },
  {
    id: 'brass',
    name: 'The Brass Era / Vintage',
    timeframe: '1900s–1919',
    startYear: 1901,
    endYear: 1919,
    description: 'Polished brass fittings, standardized mechanical controls, and the birth of assembly-line manufacturing.',
    curatorialNote: 'Transitioning the motorcar from an expensive novelty to the foundational engine of modern industrial society.',
    landmarkYear: 1913,
    landmarkEvent: 'Henry Ford introduces the moving assembly line in Highland Park, Michigan.'
  },
  {
    id: 'golden-prewar',
    name: 'The Golden Age / Prewar Classics',
    timeframe: '1920s–1930s',
    startYear: 1920,
    endYear: 1939,
    description: 'Custom coachbuilding, opulent Art Deco design, supercharged engines, and uncompromised luxury.',
    curatorialNote: 'The zenith of bespoke craftsmanship before high-volume unified steel bodies standardized global production.',
    landmarkYear: 1936,
    landmarkEvent: 'Jean Bugatti sculpts the riveted magnesium-alloy Type 57SC Atlantic.'
  },
  {
    id: 'postwar',
    name: 'Postwar Revival',
    timeframe: '1945–1950s',
    startYear: 1945,
    endYear: 1959,
    description: 'Rebuilding global industry, ponton styling, jet-age tailfins, and accessible sports cars.',
    curatorialNote: 'A surge of optimism, aerodynamic experimentation, and democratic sports car motoring across Europe and America.',
    landmarkYear: 1948,
    landmarkEvent: 'Jaguar XK120 sets production top speed record of 132.6 mph at Jabbeke.'
  },
  {
    id: 'motorsport-gold',
    name: 'The Golden Age of Motorsport',
    timeframe: '1950s–1960s',
    startYear: 1950,
    endYear: 1969,
    description: 'Le Mans rivalry, space-frame chassis, disc brakes, fuel injection, and legendary road-going homologations.',
    curatorialNote: 'An unrepeatable era where racing technology transferred directly to limited-production GT road cars.',
    landmarkYear: 1954,
    landmarkEvent: 'Mercedes 300SL Gullwing introduces mechanical direct fuel injection.'
  },
  {
    id: 'muscle',
    name: 'Muscle Car & Horsepower Wars',
    timeframe: '1960s–early 1970s',
    startYear: 1964,
    endYear: 1973,
    description: 'Big-block V8 engines installed into midsize coupe bodies, street drag racing, and bold graphic trims.',
    curatorialNote: 'Unrestricted Detroit performance targeted directly at youth culture before emissions and safety standards shifted priorities.',
    landmarkYear: 1964,
    landmarkEvent: 'Ford Mustang debuts at NY World’s Fair, creating the pony car phenomenon.'
  },
  {
    id: 'supercar-dawn',
    name: 'The Supercar Dawn',
    timeframe: 'late 1960s–1970s',
    startYear: 1966,
    endYear: 1979,
    description: 'Mid-engine architecture, wedge-shaped bodywork by Italian design houses, and 170+ mph ambitions.',
    curatorialNote: 'Redefining extreme speed into an art form with transverse and longitudinal mid-mounted V8 and V12 supercars.',
    landmarkYear: 1966,
    landmarkEvent: 'Lamborghini Miura unveils mid-engine transverse V12 layout at Geneva.'
  },
  {
    id: 'turbo-tech',
    name: 'Turbo & Tech Era',
    timeframe: '1980s',
    startYear: 1980,
    endYear: 1989,
    description: 'Forced induction, early computerized engine management, all-wheel drive, Kevlar, and poster cars.',
    curatorialNote: 'Electronics and turbocharging transformed sports cars into high-tech performance platforms.',
    landmarkYear: 1987,
    landmarkEvent: 'Ferrari F40 becomes first production road car to surpass 200 mph (201.4 mph).'
  },
  {
    id: 'analog-peak',
    name: 'Analog Performance Peak',
    timeframe: '1990s',
    startYear: 1990,
    endYear: 1999,
    description: 'Carbon fiber tubs, manual transmissions, naturally aspirated high-revving engines, and unassisted dynamics.',
    curatorialNote: 'Widely considered the golden ratio between modern structural engineering and pure, unfiltered driver feedback.',
    landmarkYear: 1998,
    landmarkEvent: 'McLaren F1 sets unbroken naturally aspirated production record of 240.1 mph.'
  },
  {
    id: 'modern-icons',
    name: 'Modern Icons',
    timeframe: '2000s–2010s',
    startYear: 2000,
    endYear: 2012,
    description: 'Breaching 250 mph, dual-clutch transmissions, lightweight carbon composites, and early electric breakthroughs.',
    curatorialNote: 'Boutique hypercars pushed mechanical boundaries to heights once thought impossible for street-legal road cars.',
    landmarkYear: 2005,
    landmarkEvent: 'Bugatti Veyron 16.4 breaches 1,000 hp and 250 mph speed wall.'
  },
  {
    id: 'new-legends',
    name: 'New Legends / Electric & Hypercars',
    timeframe: '2010s–present',
    startYear: 2013,
    endYear: 2026,
    description: 'Hybrid hypercar Holy Trinity, instantaneous electric torque, 300+ mph runs, and active aerodynamics.',
    curatorialNote: 'A historic inflection point pairing high-revving internal combustion with electrical assistance and pure EV megawatt power.',
    landmarkYear: 2019,
    landmarkEvent: 'Bugatti Chiron Super Sport 300+ breaches 304.77 mph barrier.'
  }
];
