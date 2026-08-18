import type { Car } from '../types/car';
export const CARS: Car[] = [
  // ----------------------------------------------------
  // 1. DAWN OF THE AUTOMOBILE (1880s–1900s)
  // ----------------------------------------------------
  {
    id: 'benz-patent-motorwagen',
    make: 'Benz & Cie.',
    model: 'Patent-Motorwagen',
    variant: 'Nummer 1',
    years: '1886',
    startYear: 1886,
    country: 'Germany',
    era: 'dawn',
    categories: ['first', 'engineering'],
    editorialHook: 'The singular spark that birthed human personal motor mobility.',
    heroImage: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1517153295259-74eb0b416cee?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'On January 29, 1886, Carl Benz applied for a patent for his "vehicle powered by a gas engine." Patent No. 37435 is widely regarded as the birth certificate of the motorcar. Featuring a custom rear-mounted single-cylinder four-stroke engine, steel tubing chassis, and wire wheels, it operated independently of horse power.',
    whyIconic: 'Recognized globally as the first authentic internal-combustion automobile. Driven by Carl’s wife Bertha Benz on the first long-distance road trip in 1888, proving to a skeptical world that motorcars were reliable for daily transit.',
    specs: {
      engine: 'Rear single-cylinder 4-stroke gas engine',
      displacement: '954 cc',
      horsepower: '0.75 hp @ 400 RPM',
      torque: 'N/A',
      acceleration0to60: 'N/A (Max speed 10 mph)',
      topSpeed: '10 mph (16 km/h)',
      weight: '265 kg (584 lbs)',
      drivetrain: 'Rear-wheel drive via leather belts & chains',
      transmission: 'Single-speed belt drive with differential'
    },
    legacy: 'Laid the architectural baseline for every motor vehicle produced over the subsequent 140 years.',
    quotes: [
      {
        text: 'The first journey was not merely a mechanical test; it was an act of courage that changed humanity’s relationship with distance forever.',
        author: 'Bertha Benz',
        source: 'Automotive Heritage Archives',
        year: '1888'
      }
    ],
    relatedCarIds: ['ford-quadricycle', 'oldsmobile-curved-dash', 'ford-model-t'],
    productionCount: '25 units (approx.)',
    estimatedValuation: 'Priceless (Museum collection item)',
    originalPrice: '600 Imperial German Marks (~$1,000 in 1886)',
    engineSoundProfile: 'inline4',
    flagshipHero: true
  },
  {
    id: 'ford-quadricycle',
    make: 'Ford',
    model: 'Quadricycle',
    years: '1896',
    startYear: 1896,
    country: 'United States',
    era: 'dawn',
    categories: ['first'],
    editorialHook: 'Henry Ford’s inaugural creation built in a tiny shed behind his home.',
    heroImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1517153295259-74eb0b416cee?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'In June 1896, Henry Ford completed his first experimental vehicle, the Quadricycle, in his brick workshop on Bagley Avenue in Detroit. Driven by a ethanol twin-cylinder engine and bicycle tires, Ford had to knock out a brick wall of his workshop because the vehicle was wider than the door.',
    whyIconic: 'The foundational seed of Ford Motor Company and American industrial automobile production.',
    specs: {
      engine: 'Ethanol-powered twin cylinder',
      displacement: '950 cc',
      horsepower: '4 hp @ 500 RPM',
      acceleration0to60: 'N/A',
      topSpeed: '20 mph (32 km/h)',
      weight: '227 kg (500 lbs)',
      drivetrain: 'Rear-wheel drive via belt',
      transmission: '2-speed manual (no reverse)'
    },
    legacy: 'Proved to Henry Ford that personal mechanized transit could be simplified and made affordable.',
    quotes: [
      {
        text: 'I ran the Quadricycle down the alleyway at two o’clock in the morning. It was noisy, but it worked.',
        author: 'Henry Ford',
        source: 'My Life and Work',
        year: '1922'
      }
    ],
    relatedCarIds: ['benz-patent-motorwagen', 'ford-model-t'],
    productionCount: '1 prototype',
    estimatedValuation: 'Museum artifact',
    originalPrice: 'Built for ~$200 in materials',
    engineSoundProfile: 'inline4'
  },
  {
    id: 'oldsmobile-curved-dash',
    make: 'Oldsmobile',
    model: 'Curved Dash',
    variant: 'Model R',
    years: '1901–1907',
    startYear: 1901,
    endYear: 1907,
    country: 'United States',
    era: 'dawn',
    categories: ['first', 'cultural-impact'],
    editorialHook: 'The world’s first mass-produced automobile built on a stationary assembly line.',
    heroImage: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Designed by Ransom E. Olds, the Curved Dash was born out of tragedy. When the Olds Motor Works factory burned down in 1901, the blueprints for the Curved Dash were the only ones saved. Olds implemented a progressive assembly system, churning out over 19,000 units.',
    whyIconic: 'The first volume mass-produced car in history, preceding Ford Model T assembly lines by several years.',
    specs: {
      engine: 'Single-cylinder water-cooled horizontal engine',
      displacement: '1564 cc',
      horsepower: '5 hp @ 600 RPM',
      acceleration0to60: 'N/A',
      topSpeed: '20 mph (32 km/h)',
      weight: '385 kg (850 lbs)',
      drivetrain: 'Rear-wheel drive via chain',
      transmission: '2-speed planetary transmission'
    },
    legacy: 'Demonstrated that automotive manufacturing could achieve high volume through standardized parts.',
    quotes: [
      {
        text: 'In My Merry Oldsmobile became the anthem of an era when America first traded reins for steering tillers.',
        author: 'Automobile Quarterly',
        source: 'Historical Review',
        year: '1965'
      }
    ],
    relatedCarIds: ['benz-patent-motorwagen', 'ford-model-t'],
    productionCount: '19,000+ units',
    estimatedValuation: '$40,000 – $75,000',
    originalPrice: '$650 in 1901',
    engineSoundProfile: 'inline4'
  },

  // ----------------------------------------------------
  // 2. THE BRASS ERA / VINTAGE (1900s–1919)
  // ----------------------------------------------------
  {
    id: 'ford-model-t',
    make: 'Ford',
    model: 'Model T',
    variant: 'Tin Lizzie',
    years: '1908–1927',
    startYear: 1908,
    endYear: 1927,
    country: 'United States',
    era: 'brass',
    categories: ['cultural-impact', 'engineering'],
    editorialHook: 'The car that put the world on wheels through moving assembly-line innovation.',
    heroImage: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Henry Ford set out to build a "car for the great multitude." Introduced in October 1908, the Model T used vanadium steel alloy for light weight and strength. In 1913, Ford introduced the moving assembly line, reducing chassis assembly time from 12.5 hours to 93 minutes.',
    whyIconic: 'Over 15 million were sold. It revolutionized manufacturing, created the modern industrial middle class with the $5/day wage, and fundamentally altered global geography.',
    specs: {
      engine: 'Front inline 4-cylinder monobloc',
      displacement: '2.9 L (2896 cc)',
      horsepower: '20 hp @ 1600 RPM',
      torque: '83 lb-ft @ 900 RPM',
      acceleration0to60: 'N/A',
      topSpeed: '42 mph (68 km/h)',
      weight: '540 kg (1,200 lbs)',
      drivetrain: 'Rear-wheel drive',
      transmission: '2-speed planetary manual with reverse'
    },
    legacy: 'Voted Car of the Century in 1999 as the most influential vehicle in automotive history.',
    quotes: [
      {
        text: 'Any customer can have a car painted any color that he wants so long as it is black.',
        author: 'Henry Ford',
        source: 'Autobiography',
        year: '1909'
      }
    ],
    relatedCarIds: ['volkswagen-beetle', 'citroen-2cv'],
    productionCount: '15,007,033 units',
    estimatedValuation: '$20,000 – $45,000',
    originalPrice: '$850 (1908) dropped to $260 (1925)',
    engineSoundProfile: 'inline4',
    flagshipHero: true
  },
  {
    id: 'mercedes-35-hp',
    make: 'Mercedes',
    model: '35 HP',
    years: '1901',
    startYear: 1901,
    country: 'Germany',
    era: 'brass',
    categories: ['engineering', 'design'],
    editorialHook: 'The definitive bridge between high-wheeled horse carriages and modern sports racing layout.',
    heroImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Commissioned by Emil Jellinek and engineered by Wilhelm Maybach, the Mercedes 35 HP abandoned the converted carriage look. It placed a low-slung engine forward on a pressed steel frame with a wide track and honeycombed radiator.',
    whyIconic: 'Hailed by Paul Meyan, Secretary General of the Automobile Club of France, who famously proclaimed: "We have entered the Mercedes era."',
    specs: {
      engine: 'Inline 4-cylinder alloy block',
      displacement: '5.9 L (5918 cc)',
      horsepower: '35 hp @ 950 RPM',
      acceleration0to60: 'N/A',
      topSpeed: '53 mph (85 km/h)',
      weight: '1,200 kg (2,645 lbs)',
      drivetrain: 'Rear-wheel drive via chain',
      transmission: '4-speed manual with reverse'
    },
    legacy: 'Set the structural paradigm for every front-engine, low-center-of-gravity automobile.',
    quotes: [
      {
        text: 'We have entered the Mercedes era. Automobile design will never return to the high carriage.',
        author: 'Paul Meyan',
        source: 'L’Auto',
        year: '1901'
      }
    ],
    relatedCarIds: ['benz-patent-motorwagen', 'rolls-royce-silver-ghost'],
    productionCount: '36 units',
    estimatedValuation: 'Museum collection item',
    originalPrice: '15,000 Gold Marks',
    engineSoundProfile: 'inline4'
  },
  {
    id: 'rolls-royce-silver-ghost',
    make: 'Rolls-Royce',
    model: '40/50 hp Silver Ghost',
    years: '1907–1926',
    startYear: 1907,
    endYear: 1926,
    country: 'United Kingdom',
    era: 'brass',
    categories: ['engineering', 'rarity'],
    editorialHook: 'The vehicle that earned Rolls-Royce the title "The Best Car in the World."',
    heroImage: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Created by Henry Royce and Charles Rolls, chassis AX201 featured silver-painted aluminum coachwork and silver-plated fittings. In 1907 it completed an unprecedented 14,371-mile reliability trial under RAC supervision without a single unscheduled stop.',
    whyIconic: 'Engineered to run so silently that legend claims a coin stood on edge on the radiator cap would not fall while idling.',
    specs: {
      engine: 'Side-valve 6-cylinder in-line',
      displacement: '7.0 L (7036 cc, later 7.4L)',
      horsepower: '48 hp @ 1250 RPM',
      acceleration0to60: 'N/A',
      topSpeed: '63 mph (101 km/h)',
      weight: '1,680 kg (3,700 lbs)',
      drivetrain: 'Rear-wheel drive',
      transmission: '4-speed manual with overdrive'
    },
    legacy: 'Established the gold standard for luxury motorcar engineering and silent refined propulsion.',
    quotes: [
      {
        text: 'At 60 miles an hour the loudest noise in this new Rolls-Royce comes from the electric clock.',
        author: 'David Ogilvy',
        source: 'Advertising Landmark Campaign',
        year: '1958'
      }
    ],
    relatedCarIds: ['duesenberg-model-j', 'bugatti-type-41-royale'],
    productionCount: '7,874 units',
    estimatedValuation: '$750,000 – $5,000,000+',
    originalPrice: '£1,300 (chassis only in 1907)',
    engineSoundProfile: 'inline6'
  },
  {
    id: 'cadillac-model-thirty',
    make: 'Cadillac',
    model: 'Model Thirty',
    variant: 'Self-Starting Coupe',
    years: '1912',
    startYear: 1912,
    country: 'United States',
    era: 'brass',
    categories: ['engineering'],
    editorialHook: 'The car that eliminated the dangerous hand crank with Charles Kettering’s electric starter.',
    heroImage: 'https://images.unsplash.com/photo-1517153295259-74eb0b416cee?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Before 1912, starting a motorcar required turning a heavy iron hand crank, which frequently backfired causing broken arms and jaws. Cadillac founder Henry Leland partnered with Delco founder Charles Kettering to integrate an electric self-starter.',
    whyIconic: 'By rendering cranking obsolete, Cadillac made driving accessible to everyone, doubling the potential market for automobiles overnight.',
    specs: {
      engine: 'Four-cylinder L-head engine',
      displacement: '4.7 L (4687 cc)',
      horsepower: '40 hp',
      acceleration0to60: 'N/A',
      topSpeed: '55 mph (88 km/h)',
      weight: '1,150 kg (2,535 lbs)',
      drivetrain: 'Rear-wheel drive',
      transmission: '3-speed sliding gear manual'
    },
    legacy: 'Won the prestigious Dewar Trophy for technical innovation, establishing Cadillac as "Standard of the World."',
    quotes: [
      {
        text: 'The electric starter did more to liberate drivers and expand motoring than any single mechanical invention since the pneumatic tire.',
        author: 'Society of Automotive Engineers',
        source: 'Centennial Review',
        year: '2005'
      }
    ],
    relatedCarIds: ['ford-model-t', 'rolls-royce-silver-ghost'],
    productionCount: '14,000 units',
    estimatedValuation: '$50,000 – $110,000',
    originalPrice: '$1,800 in 1912',
    engineSoundProfile: 'inline4'
  },

  // ----------------------------------------------------
  // 3. THE GOLDEN AGE / PREWAR CLASSICS (1920s–1930s)
  // ----------------------------------------------------
  {
    id: 'duesenberg-model-j',
    make: 'Duesenberg',
    model: 'Model J',
    variant: 'SJ Supercharged',
    years: '1928–1937',
    startYear: 1928,
    endYear: 1937,
    country: 'United States',
    era: 'golden-prewar',
    categories: ['rarity', 'engineering', 'design'],
    editorialHook: 'Unrivaled American magnificence that gave birth to the phrase "It’s a Duesey."',
    heroImage: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1541348263662-e082662d82da?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'E.L. Cord bought Duesenberg with an explicit instruction to Fred Duesenberg: build the fastest, finest, and most luxurious car on earth. The straight-eight DOHC engine boasted four valves per cylinder and produced an astonishing 265 hp (320 hp supercharged SJ).',
    whyIconic: 'Capable of 130 mph in 1932 when ordinary family cars struggled to reach 60 mph. Custom bodies were fabricated by legendary coachbuilders Murphy, Rollston, and Figoni & Falaschi.',
    specs: {
      engine: 'Lycoming DOHC 32-valve straight-8 with centrifugal supercharger',
      displacement: '6.9 L (6882 cc)',
      horsepower: '320 hp @ 4200 RPM',
      torque: '375 lb-ft @ 2000 RPM',
      acceleration0to60: '8.0 seconds',
      topSpeed: '135 mph (217 km/h)',
      weight: '2,400 kg (5,300 lbs)',
      drivetrain: 'Rear-wheel drive',
      transmission: '3-speed unsynchronized manual'
    },
    legacy: 'The undisputed summit of American pre-war automotive luxury and power.',
    quotes: [
      {
        text: 'The only car that could pass a Duesenberg was another Duesenberg. And that was only if the driver permitted it.',
        author: 'Motor Trend Classic',
        source: 'Retrospective',
        year: '1985'
      }
    ],
    relatedCarIds: ['bugatti-type-41-royale', 'bugatti-type-57sc-atlantic', 'auburn-851-speedster'],
    productionCount: '481 units total (36 SJ supercharged)',
    estimatedValuation: '$1,500,000 – $4,500,000+',
    originalPrice: '$8,500 bare chassis ($20,000+ bodied)',
    engineSoundProfile: 'v8'
  },
  {
    id: 'bugatti-type-41-royale',
    make: 'Bugatti',
    model: 'Type 41 Royale',
    variant: 'Coupe Napoleon',
    years: '1927–1933',
    startYear: 1927,
    endYear: 1933,
    country: 'France',
    era: 'golden-prewar',
    categories: ['rarity', 'engineering'],
    editorialHook: 'Ettore Bugatti’s colossal 12.7-liter masterpiece built for royalty.',
    heroImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Ettore Bugatti took offense when an English lady claimed his cars were not in the same league as Rolls-Royce. In response, he built the Royale: a 14-foot wheelbase behemoth powered by a 12.7L aero engine. Each car stood over seven feet tall.',
    whyIconic: 'Only 6 were ever constructed. The engine was so massive that Bugatti repurposed leftover Royale engines to power high-speed French railcars.',
    specs: {
      engine: 'Massive straight-8 aircraft derivative',
      displacement: '12.7 L (12,763 cc)',
      horsepower: '300 hp @ 1800 RPM',
      torque: '580 lb-ft @ 1000 RPM',
      acceleration0to60: '12.0 seconds',
      topSpeed: '100 mph (160 km/h)',
      weight: '3,175 kg (7,000 lbs)',
      drivetrain: 'Rear-wheel drive',
      transmission: '3-speed manual'
    },
    legacy: 'Remains one of the most monumental and excessive automotive achievements in history.',
    quotes: [
      {
        text: 'Nothing is too beautiful, nothing is too expensive.',
        author: 'Ettore Bugatti',
        source: 'Molsheim Factory Motto',
        year: '1930'
      }
    ],
    relatedCarIds: ['duesenberg-model-j', 'bugatti-type-57sc-atlantic'],
    productionCount: '6 units constructed',
    estimatedValuation: '$20,000,000 – $40,000,000+',
    originalPrice: '$30,000 in 1930',
    engineSoundProfile: 'v8'
  },
  {
    id: 'bugatti-type-57sc-atlantic',
    make: 'Bugatti',
    model: 'Type 57SC Atlantic',
    years: '1936–1938',
    startYear: 1936,
    endYear: 1938,
    country: 'France',
    era: 'golden-prewar',
    categories: ['design', 'rarity', 'engineering'],
    editorialHook: 'The most sublime Art Deco automotive sculpture and valuable car in existence.',
    heroImage: 'https://images.unsplash.com/photo-1541348263662-e082662d82da?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1541348263662-e082662d82da?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1562911791-c7a97b729ec5?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Designed by Jean Bugatti (Ettore’s son), the Atlantic was based on the Aérolithe concept. Because the body was crafted from flammable Elektron (magnesium alloy), Jean could not weld the panels together and instead riveted them externally along prominent spine seams.',
    whyIconic: 'Only four Atlantics were built, with three surviving today (including Ralph Lauren’s famous black 57SC). The missing "La Voiture Noire" remains the automotive world’s ultimate lost treasure.',
    specs: {
      engine: 'DOHC supercharged straight-8',
      displacement: '3.3 L (3257 cc)',
      horsepower: '200 hp @ 5500 RPM',
      torque: '225 lb-ft',
      acceleration0to60: '9.8 seconds',
      topSpeed: '124 mph (200 km/h)',
      weight: '950 kg (2,094 lbs)',
      drivetrain: 'Rear-wheel drive',
      transmission: '4-speed manual'
    },
    legacy: 'Widely celebrated as the undisputed Holy Grail of classic automotive design.',
    quotes: [
      {
        text: 'The Atlantic is not merely a motorcar; it is Jean Bugatti’s immortal symphony in sheet metal.',
        author: 'Jay Leno',
        source: 'Garage Interview',
        year: '2014'
      }
    ],
    relatedCarIds: ['duesenberg-model-j', 'alfa-romeo-8c-2900', 'ferrari-250-gto'],
    productionCount: '4 units (3 surviving)',
    estimatedValuation: '$40,000,000 – $100,000,000+',
    originalPrice: 'FFr 125,000 in 1936',
    engineSoundProfile: 'v8',
    flagshipHero: true
  },
  {
    id: 'alfa-romeo-8c-2900',
    make: 'Alfa Romeo',
    model: '8C 2900B',
    variant: 'Lungo Spider by Touring',
    years: '1936–1939',
    startYear: 1936,
    endYear: 1939,
    country: 'Italy',
    era: 'golden-prewar',
    categories: ['motorsport', 'design', 'rarity'],
    editorialHook: 'Grand prix mechanicals cloaked in intoxicating Italian Superleggera coachwork.',
    heroImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Engineered by Vittorio Jano, the 8C 2900 was a thinly disguised Grand Prix race car adapted for wealthy sports motorists. It featured twin Roots superchargers on a straight-eight engine, transaxle weight distribution, and independent four-wheel suspension.',
    whyIconic: 'Swept 1st, 2nd, and 3rd place at the 1938 Mille Miglia and dominated European sports racing prior to WWII.',
    specs: {
      engine: 'Twin-supercharged DOHC straight-8',
      displacement: '2.9 L (2905 cc)',
      horsepower: '180 hp @ 5200 RPM',
      torque: '210 lb-ft',
      acceleration0to60: '8.5 seconds',
      topSpeed: '115 mph (185 km/h)',
      weight: '1,250 kg (2,755 lbs)',
      drivetrain: 'Rear transaxle drive',
      transmission: '4-speed manual'
    },
    legacy: 'Represented the apex of European pre-war sports car technology and coachbuilding grace.',
    quotes: [
      {
        text: 'Before the 8C 2900, cars were either fast or refined. Jano proved a sports car could be breathtakingly both.',
        author: 'Classic & Sports Car Magazine',
        source: 'Editorial',
        year: '2001'
      }
    ],
    relatedCarIds: ['bugatti-type-57sc-atlantic', 'ferrari-250-gto', 'jaguar-xk120'],
    productionCount: '32 chassis built',
    estimatedValuation: '$18,000,000 – $25,000,000',
    originalPrice: 'Bespoke price upon request',
    engineSoundProfile: 'v8'
  },
  {
    id: 'auburn-851-speedster',
    make: 'Auburn',
    model: '851 Speedster',
    variant: 'Boattail',
    years: '1935',
    startYear: 1935,
    country: 'United States',
    era: 'golden-prewar',
    categories: ['speed-records', 'design'],
    editorialHook: 'Guaranteed by Ab Jenkins to have exceeded 100 mph on test trials.',
    heroImage: 'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Styled by Gordon Buehrig, the 851 Speedster featured a sweeping boattail rear and external flexible exhaust pipes. Every single Speedster carried a dash plaque signed by land-speed driver Ab Jenkins certifying it had been road tested over 100 mph.',
    whyIconic: 'Affordable high-performance art that delivered 100+ mph performance during the depths of the Great Depression.',
    specs: {
      engine: 'Lycoming supercharged straight-8',
      displacement: '4.6 L (4585 cc)',
      horsepower: '150 hp @ 4000 RPM',
      torque: '230 lb-ft',
      acceleration0to60: '15.0 seconds',
      topSpeed: '104 mph (167 km/h)',
      weight: '1,700 kg (3,747 lbs)',
      drivetrain: 'Rear-wheel drive with Dual-Ratio axle',
      transmission: '3-speed manual with 2-speed rear axle'
    },
    legacy: 'Remains an everlasting icon of Art Deco streamline design.',
    quotes: [
      {
        text: 'This certifies that this Auburn automobile has been driven 100.1 miles per hour prior to shipment.',
        author: 'Ab Jenkins',
        source: 'Dashboard Plaque Inscription',
        year: '1935'
      }
    ],
    relatedCarIds: ['duesenberg-model-j', 'jaguar-xk120'],
    productionCount: '143 units',
    estimatedValuation: '$750,000 – $1,200,000',
    originalPrice: '$2,245 in 1935',
    engineSoundProfile: 'v8'
  },

  // ----------------------------------------------------
  // 4. POSTWAR REVIVAL (1945–1950s)
  // ----------------------------------------------------
  {
    id: 'volkswagen-beetle',
    make: 'Volkswagen',
    model: 'Beetle / Type 1',
    variant: 'Kafer',
    years: '1945–2003',
    startYear: 1945,
    endYear: 2003,
    country: 'Germany',
    era: 'postwar',
    categories: ['cultural-impact', 'pop-culture', 'first'],
    editorialHook: 'The People’s Car that achieved the longest production run in automotive history.',
    heroImage: 'https://images.unsplash.com/photo-1566476966100-35267429b950?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1566476966100-35267429b950?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Engineered by Ferdinand Porsche in the 1930s with an air-cooled rear-mounted engine and platform chassis, production was restarted in 1945 under British Army Major Ivan Hirst. The Beetle transformed West German economic recovery and spread globally.',
    whyIconic: 'Surpassed the Ford Model T record in 1972 with over 21.5 million built. Famously marketed in the US by Doyle Dane Bernbach with revolutionary anti-advertising campaigns ("Think Small").',
    specs: {
      engine: 'Rear air-cooled flat-4 (boxer)',
      displacement: '1.2 L (1192 cc)',
      horsepower: '36 hp @ 3700 RPM',
      torque: '56 lb-ft @ 2000 RPM',
      acceleration0to60: '27.5 seconds',
      topSpeed: '68 mph (110 km/h)',
      weight: '730 kg (1,609 lbs)',
      drivetrain: 'Rear-engine rear-wheel drive',
      transmission: '4-speed manual'
    },
    legacy: 'The single most produced individual vehicle platform in global automotive history.',
    quotes: [
      {
        text: 'Lemon. (DDB Advertisement headline that redefined American advertising by highlighting perfectionist quality control).',
        author: 'Doyle Dane Bernbach',
        source: 'Ad Campaign',
        year: '1960'
      }
    ],
    relatedCarIds: ['ford-model-t', 'citroen-2cv', 'porsche-356'],
    productionCount: '21,529,464 units',
    estimatedValuation: '$12,000 – $45,000',
    originalPrice: '$1,280 (1955)',
    engineSoundProfile: 'flat6'
  },
  {
    id: 'jaguar-xk120',
    make: 'Jaguar',
    model: 'XK120',
    variant: 'Roadster',
    years: '1948–1954',
    startYear: 1948,
    endYear: 1954,
    country: 'United Kingdom',
    era: 'postwar',
    categories: ['speed-records', 'design'],
    editorialHook: 'The world’s fastest production car at launch with intoxicating aluminum lines.',
    heroImage: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Conceived by Sir William Lyons as a temporary show car to feature Jaguar’s new DOHC twin-cam XK engine at the 1948 London Motor Show. The public response was so overwhelming that Jaguar quickly geared up for full production.',
    whyIconic: 'Clocked a verified 132.6 mph on the Jabbeke highway in Belgium in 1949, officially making it the fastest production car on planet earth.',
    specs: {
      engine: 'Front DOHC twin-cam inline 6-cylinder',
      displacement: '3.4 L (3442 cc)',
      horsepower: '160 hp @ 5000 RPM',
      torque: '195 lb-ft @ 2500 RPM',
      acceleration0to60: '10.0 seconds',
      topSpeed: '124.6 mph (200.5 km/h)',
      weight: '1,295 kg (2,855 lbs)',
      drivetrain: 'Rear-wheel drive',
      transmission: '4-speed manual'
    },
    legacy: 'Introduced the iconic XK engine family that powered Jaguars for nearly four decades.',
    quotes: [
      {
        text: 'The XK120 was pure motoring magic. It gave post-war drivers super-sports performance at half the price of an Italian exotics.',
        author: 'Autocar Magazine',
        source: 'Road Test',
        year: '1949'
      }
    ],
    relatedCarIds: ['mercedes-300sl-gullwing', 'jaguar-d-type', 'porsche-356'],
    productionCount: '12,055 units',
    estimatedValuation: '$90,000 – $180,000',
    originalPrice: '£1,263 in 1948',
    engineSoundProfile: 'inline6'
  },
  {
    id: 'porsche-356',
    make: 'Porsche',
    model: '356',
    variant: 'Speedster / 356A',
    years: '1948–1965',
    startYear: 1948,
    endYear: 1965,
    country: 'Germany',
    era: 'postwar',
    categories: ['engineering', 'design'],
    editorialHook: 'Ferry Porsche’s lightweight founding sports car that established the Porsche legend.',
    heroImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Ferry Porsche famously remarked: "I couldn’t find the sports car of my dreams, so I built it myself." Prototype 356/1 was hand-hammered in Gmünd, Austria. US importer Max Hoffman persuaded Porsche to create the stripped-down 356 Speedster for California racers.',
    whyIconic: 'The founding model of Porsche AG. Established rear-engine dynamics, aerodynamic purity, and unmatched power-to-weight balance.',
    specs: {
      engine: 'Rear air-cooled flat-4 (boxer)',
      displacement: '1.6 L (1582 cc)',
      horsepower: '75 hp @ 5000 RPM',
      torque: '86 lb-ft @ 3700 RPM',
      acceleration0to60: '11.5 seconds',
      topSpeed: '109 mph (175 km/h)',
      weight: '760 kg (1,675 lbs)',
      drivetrain: 'Rear-engine rear-wheel drive',
      transmission: '4-speed manual synchronized'
    },
    legacy: 'Direct mechanical and aesthetic ancestor of the immortal Porsche 911.',
    quotes: [
      {
        text: 'In the beginning I looked around and could not find quite the car I dreamed of: a small, light-weight sports car... so I decided to build it myself.',
        author: 'Ferry Porsche',
        source: 'Company Memoirs',
        year: '1950'
      }
    ],
    relatedCarIds: ['volkswagen-beetle', 'jaguar-xk120'],
    productionCount: '76,302 units total',
    estimatedValuation: '$150,000 – $450,000+',
    originalPrice: '$2,995 (Speedster in 1954)',
    engineSoundProfile: 'flat6'
  },
  {
    id: 'citroen-2cv',
    make: 'Citroën',
    model: '2CV',
    variant: 'Deux Chevaux',
    years: '1948–1990',
    startYear: 1948,
    endYear: 1990,
    country: 'France',
    era: 'postwar',
    categories: ['cultural-impact', 'engineering'],
    editorialHook: 'The "umbrella on wheels" designed to carry eggs across a plowed French field intact.',
    heroImage: 'https://images.unsplash.com/photo-1517153295259-74eb0b416cee?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1517153295259-74eb0b416cee?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1541348263662-e082662d82da?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Vice-president Pierre-Jules Boulanger briefed engineers to create a vehicle that could carry 2 French peasants, 50kg of potatoes, or a keg of wine across unpaved countryside roads while using no more than 3 liters of fuel per 100 km.',
    whyIconic: 'Features ultra-long-travel interconnected suspension, front-wheel drive, air-cooled twin-cylinder engine, and corrugated sheet steel panels.',
    specs: {
      engine: 'Front air-cooled flat-twin 2-cylinder',
      displacement: '375 cc (later 602 cc)',
      horsepower: '9 hp (later 29 hp)',
      acceleration0to60: 'N/A (0-50 mph in 42 seconds)',
      topSpeed: '40 mph (later 70 mph)',
      weight: '560 kg (1,235 lbs)',
      drivetrain: 'Front-wheel drive',
      transmission: '4-speed manual'
    },
    legacy: 'Mobilized rural France and became an enduring symbol of minimalist French industrial genius.',
    quotes: [
      {
        text: 'Design a car that can carry a basket of eggs across a freshly plowed field without breaking a single egg.',
        author: 'Pierre-Jules Boulanger',
        source: 'Citroën Engineering Specification',
        year: '1937'
      }
    ],
    relatedCarIds: ['volkswagen-beetle', 'ford-model-t'],
    productionCount: '5,114,969 units (including vans)',
    estimatedValuation: '$8,000 – $25,000',
    originalPrice: 'FFr 185,000 in 1949',
    engineSoundProfile: 'inline4'
  },
  {
    id: 'chevrolet-bel-air',
    make: 'Chevrolet',
    model: 'Bel Air',
    variant: 'Nomad / Hardtop',
    years: '1955–1957',
    startYear: 1955,
    endYear: 1957,
    country: 'United States',
    era: 'postwar',
    categories: ['design', 'pop-culture'],
    editorialHook: 'The definitive icon of 1950s American optimism, chrome, and tailfin styling.',
    heroImage: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Part of General Motors’ legendary "Tri-Five" series (1955–57), the Bel Air brought Harley Earl’s jet-inspired tailfins and chrome teeth to affordable family cars. The 1955 model debuted Ed Cole’s compact "Small-Block V8" engine.',
    whyIconic: 'The 1957 edition featured optional Ramjet mechanical fuel injection producing 283 hp from 283 cubic inches—the magic milestone of 1 horsepower per cubic inch.',
    specs: {
      engine: 'Chevrolet 283 cu in Small-Block V8 (Fuel-Injected option)',
      displacement: '4.6 L (4637 cc)',
      horsepower: '283 hp @ 6200 RPM',
      torque: '290 lb-ft @ 4400 RPM',
      acceleration0to60: '7.8 seconds',
      topSpeed: '120 mph (193 km/h)',
      weight: '1,530 kg (3,370 lbs)',
      drivetrain: 'Rear-wheel drive',
      transmission: '2-speed Powerglide automatic or 3-speed manual'
    },
    legacy: 'The Small-Block V8 became the most ubiquitous and modified V8 engine platform in American automotive history.',
    quotes: [
      {
        text: 'The 57 Chevy Bel Air is American pop culture forged in steel and painted in tropical turquoise.',
        author: 'Hot Rod Magazine',
        source: 'Retrospective',
        year: '1975'
      }
    ],
    relatedCarIds: ['ford-mustang', 'pontiac-gto'],
    productionCount: '1,500,000+ units (Tri-Five Bel Airs)',
    estimatedValuation: '$45,000 – $150,000',
    originalPrice: '$2,238 in 1957',
    engineSoundProfile: 'v8'
  },

  // ----------------------------------------------------
  // 5. GOLDEN AGE OF MOTORSPORT & SPEED RECORDS (1950s–1960s)
  // ----------------------------------------------------
  {
    id: 'mercedes-300sl-gullwing',
    make: 'Mercedes-Benz',
    model: '300SL',
    variant: 'Gullwing Coupe (W198)',
    years: '1954–1957',
    startYear: 1954,
    endYear: 1957,
    country: 'Germany',
    era: 'motorsport-gold',
    categories: ['engineering', 'design', 'speed-records'],
    editorialHook: 'The world’s first production car with direct fuel injection and famous upward-opening doors.',
    heroImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1571127236794-81772863920e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Derived from the 1952 Le Mans-winning W194 race car, US importer Max Hoffman convinced Mercedes management to build a road-going version. To maintain chassis rigidity, engineers designed a tubular space-frame that rose high along the sills, requiring roof-hinged "Gullwing" doors.',
    whyIconic: 'First production vehicle equipped with Bosch mechanical direct fuel injection. With a top speed of 161 mph, it was the fastest production road car of its decade.',
    specs: {
      engine: 'Slanted inline 6-cylinder with Bosch direct fuel injection',
      displacement: '3.0 L (2996 cc)',
      horsepower: '215 hp @ 5800 RPM',
      torque: '203 lb-ft @ 4600 RPM',
      acceleration0to60: '7.4 seconds',
      topSpeed: '161 mph (260 km/h)',
      weight: '1,295 kg (2,855 lbs)',
      drivetrain: 'Rear-wheel drive',
      transmission: '4-speed manual'
    },
    legacy: 'Pioneered direct fuel injection in production street cars and remains one of the most aesthetically recognizable designs ever created.',
    quotes: [
      {
        text: 'The 300SL is a race car for the highway. No other road car in existence offers such effortless 150 mph cruising.',
        author: 'Road & Track',
        source: 'Road Test',
        year: '1955'
      }
    ],
    relatedCarIds: ['ferrari-250-gto', 'jaguar-xk120', 'porsche-carrera-gt'],
    productionCount: '1,400 Gullwing coupes built',
    estimatedValuation: '$1,300,000 – $2,200,000+',
    originalPrice: '$6,820 (US) / DM 29,000 in 1954',
    engineSoundProfile: 'inline6',
    flagshipHero: true
  },
  {
    id: 'jaguar-d-type',
    make: 'Jaguar',
    model: 'D-Type',
    variant: 'Short Nose / Long Nose',
    years: '1954–1957',
    startYear: 1954,
    endYear: 1957,
    country: 'United Kingdom',
    era: 'motorsport-gold',
    categories: ['motorsport', 'design'],
    editorialHook: 'The triple Le Mans winner engineered with aeronautical monocoque aerodynamics.',
    heroImage: 'https://images.unsplash.com/photo-1571127236794-81772863920e?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1571127236794-81772863920e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1571127236794-81772863920e?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Designed by Malcolm Sayer (an aeronautical engineer from Bristol Aeroplane Company), the D-Type featured an aluminum tub monocoque chassis, Dunlop disc brakes on all four wheels, and a prominent vertical tail fin for aerodynamic stability down the Mulsanne Straight.',
    whyIconic: 'Won the 24 Hours of Le Mans three consecutive times in 1955, 1956, and 1957, reaching 172 mph on the straight.',
    specs: {
      engine: 'Front DOHC 6-cylinder with triple Weber carburetors',
      displacement: '3.4 L (3442 cc, later 3.8L)',
      horsepower: '250 hp @ 5750 RPM',
      torque: '242 lb-ft @ 4000 RPM',
      acceleration0to60: '4.7 seconds',
      topSpeed: '172 mph (277 km/h)',
      weight: '864 kg (1,900 lbs)',
      drivetrain: 'Rear-wheel drive',
      transmission: '4-speed manual'
    },
    legacy: 'Pioneered aluminum monocoque chassis construction in endurance motor racing.',
    quotes: [
      {
        text: 'The D-Type went down the Mulsanne Straight like an arrow shot from a bow. Nothing could catch it in a straight line.',
        author: 'Mike Hawthorn',
        source: 'Le Mans Driver Interview',
        year: '1955'
      }
    ],
    relatedCarIds: ['mercedes-300sl-gullwing', 'ferrari-250-gto', 'shelby-cobra-427'],
    productionCount: '75 total (54 factory racers + XKSS conversions)',
    estimatedValuation: '$6,000,000 – $21,000,000',
    originalPrice: '£3,878 in 1955',
    engineSoundProfile: 'inline6'
  },
  {
    id: 'ferrari-250-gto',
    make: 'Ferrari',
    model: '250 GTO',
    years: '1962–1964',
    startYear: 1962,
    endYear: 1964,
    country: 'Italy',
    era: 'motorsport-gold',
    categories: ['motorsport', 'rarity', 'design'],
    editorialHook: 'The undisputed Mona Lisa of automobiles and most valuable classic in human history.',
    heroImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1571127236794-81772863920e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Engineered by Giotto Bizzarrini and Mauro Forghieri under Enzo Ferrari, the GTO (Gran Turismo Omologata) was designed to dominate the FIA Group 3 GT Championship. Built around Gioachino Colombo’s 3.0-liter V12 fed by six dual-throat Weber carburetors.',
    whyIconic: 'Enzo Ferrari personally vetted every buyer. All 36 owners had to be approved. Holds the world record for public and private auction car sales exceeding $70 million.',
    specs: {
      engine: 'Front 60-degree Colombo V12 with 6 Weber carburetors',
      displacement: '3.0 L (2953 cc)',
      horsepower: '300 hp @ 7500 RPM',
      torque: '217 lb-ft @ 5500 RPM',
      acceleration0to60: '2.9 seconds (0-60 mph gearing dependant)',
      topSpeed: '174 mph (280 km/h)',
      weight: '880 kg (1,940 lbs)',
      drivetrain: 'Rear-wheel drive',
      transmission: '5-speed dog-leg manual'
    },
    legacy: 'Won the FIA World Sportscar Championship three years running (1962, 1963, 1964).',
    quotes: [
      {
        text: 'The 250 GTO is the purest expression of Ferrari’s racing soul: raw mechanical aggression wrapped in untouchable beauty.',
        author: 'Motor Sport Magazine',
        source: 'Cover Feature',
        year: '1998'
      }
    ],
    relatedCarIds: ['bugatti-type-57sc-atlantic', 'aston-martin-db5', 'shelby-cobra-427'],
    productionCount: '36 units built',
    estimatedValuation: '$48,000,000 – $70,000,000+',
    originalPrice: '$18,000 (US) in 1962',
    engineSoundProfile: 'v12',
    flagshipHero: true
  },
  {
    id: 'aston-martin-db5',
    make: 'Aston Martin',
    model: 'DB5',
    years: '1963–1965',
    startYear: 1963,
    endYear: 1965,
    country: 'United Kingdom',
    era: 'motorsport-gold',
    categories: ['pop-culture', 'design'],
    editorialHook: 'James Bond’s legendary gadget-laden silver birch grand tourer.',
    heroImage: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1571127236794-81772863920e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Designed by Carrozzeria Touring Superleggera in Milan, the DB5 succeeded the DB4 with an enlarged 4.0-liter all-aluminum straight-six engine and ZF 5-speed transmission. Silver Birch paintwork became synonymous with British undercover elegance.',
    whyIconic: 'Star of 1964’s *Goldfinger* starring Sean Connery as 007. Equipped by Q Branch with ejector seat, revolving license plates, rear bullet shield, and twin machine guns.',
    specs: {
      engine: 'All-aluminum DOHC inline 6-cylinder',
      displacement: '4.0 L (3995 cc)',
      horsepower: '282 hp @ 5500 RPM',
      torque: '288 lb-ft @ 3850 RPM',
      acceleration0to60: '8.0 seconds',
      topSpeed: '145 mph (233 km/h)',
      weight: '1,502 kg (3,311 lbs)',
      drivetrain: 'Rear-wheel drive',
      transmission: '5-speed ZF manual'
    },
    legacy: 'Widely proclaimed as the most famous cinema car on Earth.',
    quotes: [
      {
        text: 'Ejector seat? You’re joking! — I never joke about my work, 007.',
        author: 'Q & James Bond',
        source: 'Goldfinger Film Dialogue',
        year: '1964'
      }
    ],
    relatedCarIds: ['ferrari-250-gto', 'jaguar-xk120', 'lamborghini-miura'],
    productionCount: '1,059 units',
    estimatedValuation: '$850,000 – $2,500,000',
    originalPrice: '£4,175 in 1963',
    engineSoundProfile: 'inline6'
  },
  {
    id: 'shelby-cobra-427',
    make: 'Shelby American',
    model: 'Cobra 427',
    variant: 'S/C (Semi-Competition)',
    years: '1965–1967',
    startYear: 1965,
    endYear: 1967,
    country: 'United States',
    era: 'motorsport-gold',
    categories: ['speed-records', 'motorsport'],
    editorialHook: 'Carroll Shelby’s lightweight British roadster stuffed with a thunderous 7.0-liter Ford big-block V8.',
    heroImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1571127236794-81772863920e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Carroll Shelby dropped a massive 427 cu in (7.0L) Ford FE V8 engine into a modified AC Ace aluminum chassis featuring 4-inch coil-spring frame rails and massive flared wheel arches to handle over 480 horsepower.',
    whyIconic: 'Accelerated from 0 to 100 mph and back to 0 in under 13.8 seconds—a world record benchmark that stood for decades.',
    specs: {
      engine: 'Ford 427 cu in Side-Oiler Big-Block V8',
      displacement: '7.0 L (6997 cc)',
      horsepower: '485 hp @ 6500 RPM',
      torque: '480 lb-ft @ 3500 RPM',
      acceleration0to60: '3.4 seconds',
      topSpeed: '165 mph (265 km/h)',
      weight: '1,065 kg (2,350 lbs)',
      drivetrain: 'Rear-wheel drive',
      transmission: '4-speed Toploader manual'
    },
    legacy: 'Defined American brute-force lightweight sports car engineering.',
    quotes: [
      {
        text: 'There is no substitute for cubic inches. When you drop a 427 into a 2,000-pound car, you had better hold on with both hands.',
        author: 'Carroll Shelby',
        source: 'Autoweek Interview',
        year: '1966'
      }
    ],
    relatedCarIds: ['ferrari-250-gto', 'ford-mustang', 'chevrolet-corvette'],
    productionCount: '348 units (427 Cobra total)',
    estimatedValuation: '$1,500,000 – $5,500,000',
    originalPrice: '$7,500 in 1965',
    engineSoundProfile: 'v8'
  },

  // ----------------------------------------------------
  // 6. MUSCLE CAR & HORSEPOWER WARS (1960s–early 1970s)
  // ----------------------------------------------------
  {
    id: 'pontiac-gto',
    make: 'Pontiac',
    model: 'GTO',
    variant: 'Tri-Power Coupe',
    years: '1964–1974',
    startYear: 1964,
    endYear: 1974,
    country: 'United States',
    era: 'muscle',
    categories: ['cultural-impact'],
    editorialHook: 'The rebellious street machine credited with sparking the American Muscle Car era.',
    heroImage: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Engineered by John DeLorean, Russ Gee, and Bill Collins, Pontiac bypassed a corporate GM ban on large engines in midsize cars by offering the 389 cu in V8 as an optional $295 "GTO option package" on the Tempest.',
    whyIconic: 'Named after the Ferrari 250 GTO to provoke European traditionalists, it sold 32,405 units in its first year alone, launching the muscle car gold rush.',
    specs: {
      engine: 'Pontiac 389 cu in V8 with 3 Rochester 2-barrel carburetors',
      displacement: '6.4 L (6374 cc)',
      horsepower: '348 hp @ 4900 RPM',
      torque: '428 lb-ft @ 3600 RPM',
      acceleration0to60: '5.7 seconds',
      topSpeed: '120 mph (193 km/h)',
      weight: '1,570 kg (3,460 lbs)',
      drivetrain: 'Rear-wheel drive',
      transmission: '4-speed Hurst manual'
    },
    legacy: 'Initiated the golden decade of accessible Detroit V8 performance cars.',
    quotes: [
      {
        text: 'We took Ferrari’s initials, put a big 389 engine into a cheap midsize coupe, and watched America go wild.',
        author: 'John DeLorean',
        source: 'On a Clear Day You Can See General Motors',
        year: '1979'
      }
    ],
    relatedCarIds: ['ford-mustang', 'dodge-charger-rt', 'plymouth-hemi-cuda'],
    productionCount: '32,405 (1964 GTOs)',
    estimatedValuation: '$45,000 – $110,000',
    originalPrice: '$3,200 in 1964',
    engineSoundProfile: 'v8'
  },
  {
    id: 'ford-mustang',
    make: 'Ford',
    model: 'Mustang',
    variant: '1964½ GT Coupe / Fastback',
    years: '1964–present',
    startYear: 1964,
    country: 'United States',
    era: 'muscle',
    categories: ['cultural-impact', 'pop-culture'],
    editorialHook: 'Lee Iacocca’s cultural sensation that created the "Pony Car" market segment.',
    heroImage: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Unveiled at the New York World’s Fair on April 17, 1964, Ford expected to sell 100,000 Mustangs per year. Instead, dealers took 22,000 orders on day one and over 418,000 units were sold in the first twelve months.',
    whyIconic: 'Star of the legendary 1968 film *Bullitt* featuring Steve McQueen in the greatest car chase scene in cinematic history.',
    specs: {
      engine: 'Ford 289 cu in Windsor V8 (4-barrel Carburetor)',
      displacement: '4.7 L (4727 cc)',
      horsepower: '271 hp @ 6000 RPM',
      torque: '312 lb-ft @ 3400 RPM',
      acceleration0to60: '6.7 seconds',
      topSpeed: '122 mph (196 km/h)',
      weight: '1,270 kg (2,800 lbs)',
      drivetrain: 'Rear-wheel drive',
      transmission: '4-speed manual'
    },
    legacy: 'Over 10 million Mustangs produced across seven generations continuously since 1964.',
    quotes: [
      {
        text: 'The Mustang was a wild horse that captured the youth and freedom of 1960s America.',
        author: 'Lee Iacocca',
        source: 'Iacocca Autobiography',
        year: '1984'
      }
    ],
    relatedCarIds: ['pontiac-gto', 'chevrolet-camaro-z28', 'dodge-charger-rt'],
    productionCount: '10,000,000+ units across generations',
    estimatedValuation: '$35,000 – $150,000 (Bullitt 1968 sold for $3.7M)',
    originalPrice: '$2,368 base price in 1964',
    engineSoundProfile: 'v8'
  },
  {
    id: 'dodge-charger-rt',
    make: 'Dodge',
    model: 'Charger R/T',
    variant: '446 Magnum / 426 Hemi',
    years: '1968–1970',
    startYear: 1968,
    endYear: 1970,
    country: 'United States',
    era: 'muscle',
    categories: ['pop-culture', 'design'],
    editorialHook: 'Coke-bottle styling and hidden headlights immortalized in *Bullitt* and *The Dukes of Hazzard*.',
    heroImage: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Styled by Richard Sias and Harvey J. Winn, the 1968 Charger featured a recessed rear window, flying buttresses, and vacuum-operated hidden headlight doors. The R/T (Road/Track) package included heavy-duty suspension and a 440 Magnum V8.',
    whyIconic: 'The villainous black 1968 Charger in *Bullitt* and the orange "General Lee" 1969 Charger made it a pop culture titan.',
    specs: {
      engine: 'Mopar 440 cu in Magnum V8 (Optional 426 Hemi)',
      displacement: '7.2 L (7210 cc)',
      horsepower: '375 hp @ 4600 RPM',
      torque: '480 lb-ft @ 3200 RPM',
      acceleration0to60: '5.4 seconds',
      topSpeed: '135 mph (217 km/h)',
      weight: '1,720 kg (3,790 lbs)',
      drivetrain: 'Rear-wheel drive',
      transmission: '3-speed TorqueFlite Automatic or 4-speed manual'
    },
    legacy: 'The definitive aggressive silhouette of American Mopar muscle power.',
    quotes: [
      {
        text: 'That dark Charger chasing McQueen’s Mustang over San Francisco hills established the cinematic benchmark for bad-boy muscle cars.',
        author: 'Motor Trend',
        source: 'Film History',
        year: '2008'
      }
    ],
    relatedCarIds: ['ford-mustang', 'plymouth-hemi-cuda', 'pontiac-gto'],
    productionCount: '96,100 (1968 Chargers)',
    estimatedValuation: '$65,000 – $250,000+',
    originalPrice: '$3,480 in 1968',
    engineSoundProfile: 'v8'
  },
  {
    id: 'plymouth-hemi-cuda',
    make: 'Plymouth',
    model: 'Hemi ’Cuda',
    variant: 'Convertible / Coupe',
    years: '1970–1971',
    startYear: 1970,
    endYear: 1971,
    country: 'United States',
    era: 'muscle',
    categories: ['speed-records', 'rarity'],
    editorialHook: 'The holy grail of muscle collectors featuring the legendary 426 Elephant Motor.',
    heroImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Built on Chrysler’s new E-body platform alongside the Dodge Challenger, the ’Cuda option brought functional "Shaker" hood scoops and heavy-duty components to feed the legendary 426 Street Hemi engine.',
    whyIconic: 'Only 14 Hemi ’Cuda Convertibles were produced in 1971, making them among the most valuable American muscle cars ever sold at public auctions (fetching up to $3.5 million).',
    specs: {
      engine: '426 cu in Hemi V8 with dual 4-barrel Carter carburetors',
      displacement: '7.0 L (6981 cc)',
      horsepower: '425 hp @ 5000 RPM',
      torque: '490 lb-ft @ 4000 RPM',
      acceleration0to60: '5.1 seconds',
      topSpeed: '140 mph (225 km/h)',
      weight: '1,714 kg (3,780 lbs)',
      drivetrain: 'Rear-wheel drive',
      transmission: '4-speed A833 manual with Pistol-Grip shifter'
    },
    legacy: 'Represented the absolute climax of Detroit’s unrestricted horsepower wars.',
    quotes: [
      {
        text: 'The 426 Hemi didn’t just accelerate a car; it altered the earth’s rotation when you dropped the clutch.',
        author: 'Car and Driver',
        source: 'Archival Test',
        year: '1970'
      }
    ],
    relatedCarIds: ['dodge-charger-rt', 'pontiac-gto', 'chevrolet-camaro-z28'],
    productionCount: '652 Hemi ’Cuda coupes / 14 convertibles (1971)',
    estimatedValuation: '$400,000 – $3,500,000+',
    originalPrice: '$4,300 in 1970',
    engineSoundProfile: 'v8'
  },
  {
    id: 'chevrolet-camaro-z28',
    make: 'Chevrolet',
    model: 'Camaro',
    variant: 'Z/28 Trans-Am Homologation',
    years: '1967–1969',
    startYear: 1967,
    endYear: 1969,
    country: 'United States',
    era: 'muscle',
    categories: ['motorsport'],
    editorialHook: 'The high-revving 302 V8 homologation special created to conquer SCCA Trans-Am racing.',
    heroImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Engineered by Vince Piggins to compete in the SCCA Trans-American Sedan Championship (which capped engine size at 305 cu in), Chevrolet mated a 283 V8 crankshaft inside a 327 V8 block to create a high-revving 302 cu in V8.',
    whyIconic: 'Won back-to-back Trans-Am Championships in 1968 and 1969 driven by Mark Donohue for Roger Penske Racing.',
    specs: {
      engine: 'Chevrolet 302 cu in Small-Block V8 (Holley 4-barrel)',
      displacement: '4.9 L (4942 cc)',
      horsepower: '290 hp @ 5800 RPM (Factory under-rating; actual ~350 hp)',
      torque: '290 lb-ft @ 4200 RPM',
      acceleration0to60: '5.3 seconds',
      topSpeed: '130 mph (209 km/h)',
      weight: '1,420 kg (3,130 lbs)',
      drivetrain: 'Rear-wheel drive',
      transmission: 'Muncie 4-speed manual'
    },
    legacy: 'Transformed the Camaro from a straight-line street cruiser into a genuine road-course cornering weapon.',
    quotes: [
      {
        text: 'The 302 would spin cleanly past 7,000 RPM all day long. It was the closest thing to a European racing V8 Detroit ever built.',
        author: 'Mark Donohue',
        source: 'The Unfair Advantage',
        year: '1974'
      }
    ],
    relatedCarIds: ['ford-mustang', 'pontiac-gto', 'dodge-charger-rt'],
    productionCount: '20,302 units (1969 Z/28)',
    estimatedValuation: '$65,000 – $140,000',
    originalPrice: '$3,580 in 1969',
    engineSoundProfile: 'v8'
  },

  // ----------------------------------------------------
  // 7. THE SUPERCAR DAWN (late 1960s–1970s)
  // ----------------------------------------------------
  {
    id: 'lamborghini-miura',
    make: 'Lamborghini',
    model: 'Miura',
    variant: 'P400 / P400SV',
    years: '1966–1973',
    startYear: 1966,
    endYear: 1973,
    country: 'Italy',
    era: 'supercar-dawn',
    categories: ['design', 'engineering', 'first'],
    editorialHook: 'Widely acknowledged as the world’s first modern mid-engine supercar.',
    heroImage: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1541348263662-e082662d82da?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Engineered in secret after hours by Gian Paolo Dallara, Paolo Stanzani, and Bob Wallace, the Miura placed a 3.9-liter V12 transversely directly behind the cockpit. Marcello Gandini (working for Bertone) sculpted its iconic eyelashes and sensual curves.',
    whyIconic: 'Defined the core template for all modern supercars: low mid-engine layout, extreme speed (174 mph), and exotic styling.',
    specs: {
      engine: 'Transverse 60-degree DOHC V12 (4 Weber carburetors)',
      displacement: '3.9 L (3929 cc)',
      horsepower: '380 hp @ 7850 RPM (SV)',
      torque: '295 lb-ft @ 5750 RPM',
      acceleration0to60: '5.5 seconds',
      topSpeed: '174 mph (280 km/h)',
      weight: '1,293 kg (2,850 lbs)',
      drivetrain: 'Mid-engine rear-wheel drive',
      transmission: '5-speed manual in unit with engine'
    },
    legacy: 'Established Automobili Lamborghini as a premier exotic supercar builder.',
    quotes: [
      {
        text: 'The Miura is the car that made Ferruccio Lamborghini immortal. When you saw it at Geneva in 1966, your jaw hit the marble floor.',
        author: 'L.J.K. Setright',
        source: 'Car Magazine',
        year: '1971'
      }
    ],
    relatedCarIds: ['lamborghini-countach', 'ferrari-daytona', 'detomaso-pantera'],
    productionCount: '764 units total (150 SVs)',
    estimatedValuation: '$1,800,000 – $3,800,000',
    originalPrice: '$20,000 in 1966',
    engineSoundProfile: 'v12',
    flagshipHero: true
  },
  {
    id: 'lamborghini-countach',
    make: 'Lamborghini',
    model: 'Countach',
    variant: 'LP400 "Periscopio" / LP5000 QV',
    years: '1974–1990',
    startYear: 1974,
    endYear: 1990,
    country: 'Italy',
    era: 'supercar-dawn',
    categories: ['design', 'pop-culture'],
    editorialHook: 'Marcello Gandini’s extreme wedge design that adorned teenage bedroom walls worldwide.',
    heroImage: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Pioneered the dramatic "wedge" aesthetic and scissor doors (designed to assist parking given limited rear visibility). The engine was placed longitudinally with the gearbox positioned forward between the seats for optimal center of mass.',
    whyIconic: 'The word *Countach* is a Piedmontese exclamation of astonishment ("Holy Cow!"). It defined 1980s pop culture aesthetics.',
    specs: {
      engine: 'Longitudinal DOHC 48-valve V12',
      displacement: '5.2 L (5167 cc in QV)',
      horsepower: '449 hp @ 7000 RPM',
      torque: '369 lb-ft @ 5200 RPM',
      acceleration0to60: '4.5 seconds',
      topSpeed: '183 mph (295 km/h)',
      weight: '1,490 kg (3,285 lbs)',
      drivetrain: 'Mid-engine rear-wheel drive',
      transmission: '5-speed manual'
    },
    legacy: 'Standardized scissor doors and aggressive geometrical bodywork as Lamborghini’s permanent design DNA.',
    quotes: [
      {
        text: 'Countach! It was the only word Piedmontese dialect had to describe something so outrageous it defied traditional Italian.',
        author: 'Nuccio Bertone',
        source: 'Design Memoirs',
        year: '1974'
      }
    ],
    relatedCarIds: ['lamborghini-miura', 'ferrari-f40', 'detomaso-pantera'],
    productionCount: '1,983 units across all variants',
    estimatedValuation: '$500,000 – $1,400,000',
    originalPrice: '$52,000 (1974) to $145,000 (1989)',
    engineSoundProfile: 'v12'
  },
  {
    id: 'ferrari-daytona',
    make: 'Ferrari',
    model: '365 GTB/4 Daytona',
    variant: 'Berlinetta / Spider',
    years: '1968–1973',
    startYear: 1968,
    endYear: 1973,
    country: 'Italy',
    era: 'supercar-dawn',
    categories: ['speed-records', 'design'],
    editorialHook: 'The 174 mph front-engine V12 missile that challenged the Lamborghini Miura.',
    heroImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Designed by Leonardo Fioravanti at Pininfarina, the 365 GTB/4 featured a sharp chisel nose, plexiglas headlamp cover, and rear transaxle. Nicknamed "Daytona" by the press following Ferrari’s 1-2-3 finish at the 1967 Daytona 24 Hours.',
    whyIconic: 'In 1971, Dan Gurney and Brock Yates drove a Daytona to win the illegal Cannonball Baker Sea-to-Shining-Sea Memorial Trophy Dash in 35 hours and 54 minutes.',
    specs: {
      engine: 'Front 60-degree DOHC 4.4L V12 (6 Weber carburetors)',
      displacement: '4.4 L (4390 cc)',
      horsepower: '352 hp @ 7500 RPM',
      torque: '318 lb-ft @ 5500 RPM',
      acceleration0to60: '5.4 seconds',
      topSpeed: '174 mph (280 km/h)',
      weight: '1,600 kg (3,527 lbs)',
      drivetrain: 'Rear transaxle drive',
      transmission: '5-speed manual'
    },
    legacy: 'The grand finale of Ferrari’s traditional front-engine V12 GT supercars before the mid-engine Boxer series.',
    quotes: [
      {
        text: 'At no time did we exceed 175 miles per hour.',
        author: 'Dan Gurney',
        source: 'Cannonball Run Winning Quote',
        year: '1971'
      }
    ],
    relatedCarIds: ['lamborghini-miura', 'ferrari-250-gto', 'aston-martin-db5'],
    productionCount: '1,406 total (1,284 coupes / 122 spiders)',
    estimatedValuation: '$600,000 – $2,500,000 (Spiders)',
    originalPrice: '$19,500 in 1968',
    engineSoundProfile: 'v12'
  },
  {
    id: 'detomaso-pantera',
    make: 'De Tomaso',
    model: 'Pantera',
    variant: 'GTS / GT5',
    years: '1971–1992',
    startYear: 1971,
    endYear: 1992,
    country: 'Italy / United States',
    era: 'supercar-dawn',
    categories: ['engineering', 'pop-culture'],
    editorialHook: 'Exotic Italian steel powered by a raw Ford 351 Cleveland V8 sold through Lincoln-Mercury dealers.',
    heroImage: 'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Conceived by Alejandro de Tomaso and designed by Tom Tjaarda at Ghia, the Pantera combined an Italian monocoque mid-engine chassis with Ford’s reliable 351 Cleveland V8 and a ZF 5-speed transaxle.',
    whyIconic: 'Brought exotic Italian supercar ownership to mainstream American showrooms at half the cost of a Ferrari.',
    specs: {
      engine: 'Mid Ford 351 cu in Cleveland V8',
      displacement: '5.8 L (5763 cc)',
      horsepower: '330 hp @ 5400 RPM',
      torque: '380 lb-ft @ 3400 RPM',
      acceleration0to60: '5.5 seconds',
      topSpeed: '159 mph (256 km/h)',
      weight: '1,420 kg (3,130 lbs)',
      drivetrain: 'Mid-engine rear-wheel drive',
      transmission: '5-speed ZF transaxle manual'
    },
    legacy: 'Proved the viability of hybrid international supercars combining exotic styling with domestic muscle.',
    quotes: [
      {
        text: 'Elvis Presley famous shot his yellow Pantera with a revolver when it refused to start in his driveway.',
        author: 'Graceland Museum Archives',
        source: 'Historical Record',
        year: '1974'
      }
    ],
    relatedCarIds: ['lamborghini-miura', 'lamborghini-countach', 'shelby-cobra-427'],
    productionCount: '7,260 units',
    estimatedValuation: '$95,000 – $220,000',
    originalPrice: '$10,000 in 1971',
    engineSoundProfile: 'v8'
  },

  // ----------------------------------------------------
  // 8. TURBO & TECH ERA (1980s)
  // ----------------------------------------------------
  {
    id: 'ferrari-f40',
    make: 'Ferrari',
    model: 'F40',
    years: '1987–1992',
    startYear: 1987,
    endYear: 1992,
    country: 'Italy',
    era: 'turbo-tech',
    categories: ['speed-records', 'engineering', 'rarity'],
    editorialHook: 'Enzo Ferrari’s final personal creation and the first production road car to breach 200 mph.',
    heroImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Built to celebrate Ferrari’s 40th anniversary, the F40 was an uncompromising race car for the street. Constructed from Kevlar, carbon fiber, and Nomex panels over a space-frame chassis with sliding Lexan windows and green factory weave showing through thin red lacquer paint.',
    whyIconic: 'First street-legal production car to officially surpass 200 mph (reaching 201.4 mph). Free of driver aids: no ABS, no power steering, no traction control.',
    specs: {
      engine: 'Mid 90-degree V8 with twin IHI turbochargers & Behr intercoolers',
      displacement: '2.9 L (2936 cc)',
      horsepower: '471 hp @ 7000 RPM',
      torque: '426 lb-ft @ 4000 RPM',
      acceleration0to60: '3.8 seconds',
      topSpeed: '201.4 mph (324 km/h)',
      weight: '1,100 kg (2,425 lbs)',
      drivetrain: 'Mid-engine rear-wheel drive',
      transmission: '5-speed gated manual'
    },
    legacy: 'The definitive analog twin-turbo hypercar benchmark of all time.',
    quotes: [
      {
        text: 'I expressed a wish to the engineers: Build a car to be the best in the world. And now that car is here.',
        author: 'Enzo Ferrari',
        source: 'Press Launch at Maranello',
        year: '1987'
      }
    ],
    relatedCarIds: ['porsche-959', 'mclaren-f1', 'lamborghini-countach'],
    productionCount: '1,311 units',
    estimatedValuation: '$2,200,000 – $3,500,000',
    originalPrice: '$400,000 in 1987',
    engineSoundProfile: 'turbo',
    flagshipHero: true
  },
  {
    id: 'porsche-959',
    make: 'Porsche',
    model: '959',
    variant: 'Komfort / Sport',
    years: '1986–1993',
    startYear: 1986,
    endYear: 1993,
    country: 'Germany',
    era: 'turbo-tech',
    categories: ['engineering', 'motorsport', 'speed-records'],
    editorialHook: 'The technologically advanced technological moonshot that redefined what a supercar could achieve.',
    heroImage: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Conceived by Helmut Bott as a Group B rally computer-on-wheels. Features sequential twin turbochargers, computer-controlled PSK all-wheel drive capable of transferring torque seamlessly, automatic ride height adjustment, and Kevlar bodywork.',
    whyIconic: 'Won the brutal Paris-Dakar Rally in 1986 while holding the world top-speed record (197 mph) before the Ferrari F40.',
    specs: {
      engine: 'Rear twin-sequential turbocharged flat-6 (water-cooled heads)',
      displacement: '2.85 L (2849 cc)',
      horsepower: '444 hp @ 6500 RPM',
      torque: '369 lb-ft @ 5500 RPM',
      acceleration0to60: '3.6 seconds',
      topSpeed: '197 mph (317 km/h)',
      weight: '1,450 kg (3,197 lbs)',
      drivetrain: 'Controlled All-Wheel Drive (PSK)',
      transmission: '6-speed manual (5 speed + G "Gelände" gear)'
    },
    legacy: 'Laid the technological blueprint for all modern all-wheel-drive hypercars including the Porsche 911 Turbo.',
    quotes: [
      {
        text: 'The 959 cost Porsche over twice its retail price to build. It was a technological gift to automotive science.',
        author: 'Car Magazine',
        source: 'Tech Retrospective',
        year: '1990'
      }
    ],
    relatedCarIds: ['ferrari-f40', 'audi-quattro', 'porsche-918-spyder'],
    productionCount: '337 units',
    estimatedValuation: '$1,600,000 – $2,400,000',
    originalPrice: 'DM 420,000 in 1986',
    engineSoundProfile: 'turbo'
  },
  {
    id: 'bmw-m3-e30',
    make: 'BMW',
    model: 'M3',
    variant: 'E30 Sport Evolution',
    years: '1986–1991',
    startYear: 1986,
    endYear: 1991,
    country: 'Germany',
    era: 'turbo-tech',
    categories: ['motorsport', 'cultural-impact'],
    editorialHook: 'The Group A touring car homologation icon that established the M3 legend.',
    heroImage: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Built by BMW Motorsport GmbH to satisfy Group A touring car homologation rules requiring 5,000 road units. Only the hood and roof panel were shared with the standard E30 3-Series; every other body panel featured flared box fenders and revised C-pillars.',
    whyIconic: 'The single most successful touring race car in global motorsport history, winning DTM, World Touring Car, and European championships.',
    specs: {
      engine: 'High-revving S14 DOHC 16-valve 4-cylinder',
      displacement: '2.3 L (later 2.5L in Sport Evo)',
      horsepower: '235 hp @ 7000 RPM (Sport Evo)',
      torque: '177 lb-ft @ 4750 RPM',
      acceleration0to60: '6.1 seconds',
      topSpeed: '154 mph (248 km/h)',
      weight: '1,200 kg (2,645 lbs)',
      drivetrain: 'Rear-wheel drive',
      transmission: '5-speed Getrag dog-leg manual'
    },
    legacy: 'Created the lightweight benchmark for high-revving sports sedans and coupes.',
    quotes: [
      {
        text: 'The E30 M3 doesn’t just communicate road feel; it telepaths it directly into your fingertips.',
        author: 'Evo Magazine',
        source: 'Hall of Fame',
        year: '2004'
      }
    ],
    relatedCarIds: ['audi-quattro', 'nissan-skyline-gtr-r34', 'porsche-959'],
    productionCount: '17,970 units total',
    estimatedValuation: '$75,000 – $220,000',
    originalPrice: '$34,000 in 1988',
    engineSoundProfile: 'inline4'
  },
  {
    id: 'audi-quattro',
    make: 'Audi',
    model: 'Quattro',
    variant: 'Ur-Quattro / Sport Quattro',
    years: '1980–1991',
    startYear: 1980,
    endYear: 1991,
    country: 'Germany',
    era: 'turbo-tech',
    categories: ['engineering', 'motorsport', 'first'],
    editorialHook: 'The vehicle that brought all-wheel drive to rally motorsport and permanently transformed road cars.',
    heroImage: 'https://images.unsplash.com/photo-1541348263662-e082662d82da?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1541348263662-e082662d82da?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Engineered by Jörg Bensinger and Ferdinand Piëch after noticing the Volkswagen Iltis military jeep excelled in snow. Audi mated a permanent all-wheel drive system with a center differential to a turbocharged 5-cylinder engine.',
    whyIconic: 'Demolished the World Rally Championship, winning titles in 1982, 1983, and 1984. Rendered two-wheel-drive rally cars extinct overnight.',
    specs: {
      engine: 'Front 10-valve / 20-valve Turbocharged Inline 5-cylinder',
      displacement: '2.1 L (2144 cc)',
      horsepower: '302 hp @ 6700 RPM (Sport Quattro)',
      torque: '258 lb-ft @ 3700 RPM',
      acceleration0to60: '4.8 seconds',
      topSpeed: '155 mph (250 km/h)',
      weight: '1,298 kg (2,862 lbs)',
      drivetrain: 'Permanent Quattro All-Wheel Drive',
      transmission: '5-speed manual'
    },
    legacy: 'Made all-wheel drive the mandatory performance technology standard for high-performance cars.',
    quotes: [
      {
        text: 'Vorsprung durch Technik was no slogan when the Quattro tore up rally stages sideways through snow.',
        author: 'Michèle Mouton',
        source: 'WRC Rally Legend Interview',
        year: '1982'
      }
    ],
    relatedCarIds: ['porsche-959', 'bmw-m3-e30', 'nissan-skyline-gtr-r34'],
    productionCount: '11,452 Ur-Quattros / 214 Sport Quattros',
    estimatedValuation: '$60,000 – $550,000 (Sport Quattro)',
    originalPrice: '$35,000 in 1983',
    engineSoundProfile: 'turbo'
  },
  {
    id: 'buick-gnx',
    make: 'Buick',
    model: 'Regal GNX',
    variant: 'Grand National Experimental',
    years: '1987',
    startYear: 1987,
    country: 'United States',
    era: 'turbo-tech',
    categories: ['speed-records', 'pop-culture'],
    editorialHook: 'The sinister all-black muscle car that out-accelerated the Ferrari F40 in the quarter-mile.',
    heroImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Buick partnered with McLaren Performance Technologies to build a grand send-off for the rear-wheel-drive G-body. They added a Garrett AiResearch T-3 turbocharger with ceramic impeller, enlarged intercooler, and a unique Panhard bar suspension.',
    whyIconic: 'Famous "Darth Vader" sinister styling. Car and Driver recorded 0-60 mph in 4.7 seconds, faster than the Ferrari Testarossa and Corvette of its era.',
    specs: {
      engine: 'Buick 3.8L Turbocharged V6 with McLaren intercooler',
      displacement: '3.8 L (3800 cc)',
      horsepower: '276 hp @ 4400 RPM (Actual ~300+ hp)',
      torque: '360 lb-ft @ 3000 RPM (Actual ~420 lb-ft)',
      acceleration0to60: '4.7 seconds',
      topSpeed: '124 mph (governed)',
      weight: '1,542 kg (3,400 lbs)',
      drivetrain: 'Rear-wheel drive',
      transmission: '4-speed Turbo-Hydramatic automatic'
    },
    legacy: 'The undisputed dark prince of 1980s American turbo performance.',
    quotes: [
      {
        text: 'Lord Vader, your car is ready.',
        author: 'Car and Driver',
        source: 'Magazine Cover Headline',
        year: '1987'
      }
    ],
    relatedCarIds: ['ferrari-f40', 'dodge-charger-rt', 'toyota-supra-mk4'],
    productionCount: '547 numbered units',
    estimatedValuation: '$150,000 – $275,000',
    originalPrice: '$29,900 in 1987',
    engineSoundProfile: 'turbo'
  },
  {
    id: 'delorean-dmc12',
    make: 'DeLorean Motor Company',
    model: 'DMC-12',
    years: '1981–1983',
    startYear: 1981,
    endYear: 1983,
    country: 'United States / Northern Ireland',
    era: 'turbo-tech',
    categories: ['pop-culture', 'design'],
    editorialHook: 'The unpainted stainless-steel gullwing time machine immortalized in *Back to the Future*.',
    heroImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1541348263662-e082662d82da?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Founded by former GM executive John DeLorean, designed by Giorgetto Giugiaro, and engineered with Lotus Lotus Colin Chapman chassis assistance. Manufactured in Dunmurry, Northern Ireland, featuring brush-finished SS304 stainless steel panels.',
    whyIconic: 'Became an everlasting pop culture phenomenon when chosen by Robert Zemeckis as Doc Brown’s flux-capacitor-equipped time machine in *Back to the Future* (1985).',
    specs: {
      engine: 'Rear PRV (Peugeot-Renault-Volvo) 90-degree V6',
      displacement: '2.85 L (2849 cc)',
      horsepower: '130 hp @ 5500 RPM',
      torque: '153 lb-ft @ 2750 RPM',
      acceleration0to60: '9.5 seconds (0-88 mph in... 14.1 seconds)',
      topSpeed: '110 mph (177 km/h)',
      weight: '1,230 kg (2,712 lbs)',
      drivetrain: 'Rear-engine rear-wheel drive',
      transmission: '5-speed manual or 3-speed automatic'
    },
    legacy: 'One of the most recognizable screen icons in international cinematic history.',
    quotes: [
      {
        text: 'The way I see it, if you’re gonna build a time machine into a car, why not do it with some style?',
        author: 'Dr. Emmett Brown',
        source: 'Back to the Future Film Line',
        year: '1985'
      }
    ],
    relatedCarIds: ['lamborghini-countach', 'aston-martin-db5'],
    productionCount: '9,000 units (approx.)',
    estimatedValuation: '$55,000 – $110,000',
    originalPrice: '$25,000 in 1981',
    engineSoundProfile: 'v6'
  },

  // ----------------------------------------------------
  // 9. ANALOG PERFORMANCE PEAK (1990s)
  // ----------------------------------------------------
  {
    id: 'mclaren-f1',
    make: 'McLaren',
    model: 'F1',
    variant: 'LM / GTR / Standard Road Car',
    years: '1992–1998',
    startYear: 1992,
    endYear: 1998,
    country: 'United Kingdom',
    era: 'analog-peak',
    categories: ['speed-records', 'engineering', 'rarity'],
    editorialHook: 'The pinnacle of pure analog hypercar engineering and fastest naturally aspirated production car ever built.',
    heroImage: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Designed by Gordon Murray without compromise. Built around a carbon-fiber monocoque tub, central driving position, gold leaf engine bay heat-shielding, and a bespoke BMW M Motorsport 6.1L V12 engine.',
    whyIconic: 'Set the world production car speed record on March 31, 1998 at 240.1 mph (386.4 km/h) with rev-limiter removed. Won the 24 Hours of Le Mans overall on its debut in 1995.',
    specs: {
      engine: 'Mid BMW S70/2 60-degree DOHC 48-valve V12',
      displacement: '6.1 L (6064 cc)',
      horsepower: '627 hp @ 7400 RPM',
      torque: '479 lb-ft @ 5600 RPM',
      acceleration0to60: '3.2 seconds',
      topSpeed: '240.1 mph (386.4 km/h)',
      weight: '1,138 kg (2,509 lbs)',
      drivetrain: 'Mid-engine rear-wheel drive',
      transmission: '6-speed transverse manual with AP carbon clutch'
    },
    legacy: 'Maintains the unbeaten record as the fastest naturally aspirated production car in human history.',
    quotes: [
      {
        text: 'The McLaren F1 was designed to be the ultimate driver’s car. No power steering, no ABS, no brake booster. Just pure unadulterated feel.',
        author: 'Gordon Murray',
        source: 'Launch Presentation',
        year: '1992'
      }
    ],
    relatedCarIds: ['ferrari-f40', 'bugatti-veyron', 'porsche-carrera-gt'],
    productionCount: '106 total (64 road cars)',
    estimatedValuation: '$20,000,000 – $25,000,000+',
    originalPrice: '£540,000 in 1992',
    engineSoundProfile: 'v12',
    flagshipHero: true
  },
  {
    id: 'toyota-supra-mk4',
    make: 'Toyota',
    model: 'Supra MK4',
    variant: 'A80 Turbo / RZ',
    years: '1993–2002',
    startYear: 1993,
    endYear: 2002,
    country: 'Japan',
    era: 'analog-peak',
    categories: ['pop-culture', 'engineering'],
    editorialHook: 'The bulletproof 2JZ-GTE twin-turbo hero that became the icon of tuner subculture.',
    heroImage: 'https://images.unsplash.com/photo-1619682817481-e994b737b268?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1619682817481-e994b737b268?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Toyota engineers led by Isao Tsuzuki shed 91 kg over the previous generation using aluminum hood, suspension arms, and hollow carpet fibers. The cast-iron block 2JZ-GTE twin-turbo engine was famously over-engineered to withstand immense cylinder pressure.',
    whyIconic: 'Star car of 2001’s *The Fast and the Furious*. Tuners discovered the factory engine internals could reliably support 800–1000+ horsepower.',
    specs: {
      engine: 'Front 2JZ-GTE DOHC sequential twin-turbo inline-6',
      displacement: '3.0 L (2997 cc)',
      horsepower: '320 hp @ 5600 RPM (US Spec)',
      torque: '315 lb-ft @ 4000 RPM',
      acceleration0to60: '4.6 seconds',
      topSpeed: '155 mph (governed) / 177 mph limitless',
      weight: '1,550 kg (3,417 lbs)',
      drivetrain: 'Rear-wheel drive',
      transmission: '6-speed Getrag V160 manual'
    },
    legacy: 'The undisputed cultural representative of Japan’s 1990s golden GT era.',
    quotes: [
      {
        text: 'Pop the hood... 2JZ engine, no shit! This will decimate all after you put about fifteen grand in it.',
        author: 'Brian O’Conner',
        source: 'The Fast and the Furious',
        year: '2001'
      }
    ],
    relatedCarIds: ['nissan-skyline-gtr-r34', 'honda-nsx', 'mclaren-f1'],
    productionCount: '45,230 units (MK4 total)',
    estimatedValuation: '$80,000 – $200,000+',
    originalPrice: '$39,900 in 1993',
    engineSoundProfile: 'inline6'
  },
  {
    id: 'honda-nsx',
    make: 'Honda / Acura',
    model: 'NSX',
    variant: 'NA1 / NSX-R',
    years: '1990–2005',
    startYear: 1990,
    endYear: 2005,
    country: 'Japan',
    era: 'analog-peak',
    categories: ['engineering', 'design'],
    editorialHook: 'The world’s first all-aluminum monocoque production car tuned by Ayrton Senna.',
    heroImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Designed to challenge Ferrari 348 performance with Honda reliability. Three-time F1 World Champion Ayrton Senna tested prototypes at Suzuka, convincing Honda to stiffen the aluminum chassis by 50% for sublime handling precision.',
    whyIconic: 'Forced European exotic makers (Ferrari, Lamborghini) to dramatically raise build quality, cabin ergonomics, and daily usability.',
    specs: {
      engine: 'Mid C30A VTEC DOHC 24-valve 90-degree V6',
      displacement: '3.0 L (2977 cc, later 3.2L)',
      horsepower: '270 hp @ 7100 RPM',
      torque: '210 lb-ft @ 5300 RPM',
      acceleration0to60: '5.2 seconds',
      topSpeed: '168 mph (270 km/h)',
      weight: '1,370 kg (3,020 lbs)',
      drivetrain: 'Mid-engine rear-wheel drive',
      transmission: '5-speed manual (later 6-speed)'
    },
    legacy: 'Proved that an exotic mid-engine supercar could be everyday-usable and utterly reliable.',
    quotes: [
      {
        text: 'I’m not sure I can give you advice on chassis setup, but the car feels a little fragile in stiff cornering.',
        author: 'Ayrton Senna',
        source: 'Suzuka Test Session',
        year: '1989'
      }
    ],
    relatedCarIds: ['mclaren-f1', 'toyota-supra-mk4', 'nissan-skyline-gtr-r34'],
    productionCount: '18,685 units',
    estimatedValuation: '$70,000 – $180,000 (NSX-R > $350k)',
    originalPrice: '$62,000 in 1990',
    engineSoundProfile: 'v6'
  },
  {
    id: 'nissan-skyline-gtr-r34',
    make: 'Nissan',
    model: 'Skyline GT-R',
    variant: 'BNR34 V-Spec II Nür',
    years: '1999–2002',
    startYear: 1999,
    endYear: 2002,
    country: 'Japan',
    era: 'analog-peak',
    categories: ['motorsport', 'pop-culture', 'engineering'],
    editorialHook: 'The high-tech "Godzilla" equipped with ATTESA E-TS Pro all-wheel drive and digital telemetry.',
    heroImage: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'The ultimate evolution of the RB26DETT twin-turbo platform. Features a 5.8-inch multi-function liquid crystal display screen on the dashboard displaying live G-force, boost pressure, lap timer, and intercooler temperature.',
    whyIconic: 'Nicknamed "Godzilla" for dominating Australian touring car racing. Driven by Paul Walker in *2 Fast 2 Furious*.',
    specs: {
      engine: 'Front RB26DETT twin-turbocharged DOHC inline-6',
      displacement: '2.6 L (2568 cc)',
      horsepower: '276 hp @ 6800 RPM (Gentlemen’s agreement rating; actual 327+ hp)',
      torque: '293 lb-ft @ 4400 RPM',
      acceleration0to60: '4.6 seconds',
      topSpeed: '165 mph (266 km/h)',
      weight: '1,560 kg (3,439 lbs)',
      drivetrain: 'ATTESA E-TS Pro AWD with Active LSD',
      transmission: '6-speed Getrag manual'
    },
    legacy: 'The cultural summit of JDM tech engineering.',
    quotes: [
      {
        text: 'The R34 GT-R is computer science in service of extreme cornering grip.',
        author: 'Best Motoring Japan',
        source: 'Track Battle Review',
        year: '1999'
      }
    ],
    relatedCarIds: ['toyota-supra-mk4', 'honda-nsx', 'audi-quattro'],
    productionCount: '11,578 units total (R34 GT-R)',
    estimatedValuation: '$160,000 – $450,000+',
    originalPrice: '¥5,000,000 (~$45,000 in 1999)',
    engineSoundProfile: 'inline6'
  },
  {
    id: 'ferrari-f50',
    make: 'Ferrari',
    model: 'F50',
    years: '1995–1997',
    startYear: 1995,
    endYear: 1997,
    country: 'Italy',
    era: 'analog-peak',
    categories: ['motorsport', 'rarity'],
    editorialHook: 'An F1-derived 4.7L V12 engine bolted directly to a carbon fiber chassis as a stressed member.',
    heroImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Created to celebrate Ferrari’s 50th anniversary. Ferrari adapted the 3.5-liter V12 engine from Alain Prost’s 1990 F1 race car (Type 641), enlarging it to 4.7 liters and mounting it rigidly to the Cytec carbon fiber tub.',
    whyIconic: 'Pure Formula 1 powertrain in a road car with open-top removable targa roof, gated 6-speed manual, and 8,500 RPM redline.',
    specs: {
      engine: 'Mid Tipo F130B 60-degree DOHC 60-valve V12 (F1 derivative)',
      displacement: '4.7 L (4698 cc)',
      horsepower: '512 hp @ 8500 RPM',
      torque: '347 lb-ft @ 6500 RPM',
      acceleration0to60: '3.7 seconds',
      topSpeed: '202 mph (325 km/h)',
      weight: '1,230 kg (2,712 lbs)',
      drivetrain: 'Mid-engine rear-wheel drive',
      transmission: '6-speed manual'
    },
    legacy: 'The closest experience to driving an atmospheric 1990s Formula 1 car on public roads.',
    quotes: [
      {
        text: 'The F50 is a Formula One car dressed in street clothing. You feel every combustion stroke directly through the carbon seat structure.',
        author: 'Piero Ferrari',
        source: 'Launch Interview',
        year: '1995'
      }
    ],
    relatedCarIds: ['ferrari-f40', 'mclaren-f1', 'porsche-carrera-gt'],
    productionCount: '349 units',
    estimatedValuation: '$3,800,000 – $5,200,000',
    originalPrice: '$475,000 in 1995',
    engineSoundProfile: 'v12'
  },

  // ----------------------------------------------------
  // 10. MODERN ICONS (2000s–2010s)
  // ----------------------------------------------------
  {
    id: 'bugatti-veyron',
    make: 'Bugatti',
    model: 'Veyron 16.4',
    variant: 'Super Sport',
    years: '2005–2015',
    startYear: 2005,
    endYear: 2015,
    country: 'France / Germany',
    era: 'modern-icons',
    categories: ['speed-records', 'engineering', 'first'],
    editorialHook: 'Ferdinand Piëch’s engineering miracle that breached 1,000 horsepower and 250+ mph.',
    heroImage: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Ferdinand Piëch challenged Volkswagen engineers with a brief: build a sports car with 1,000 metric hp, top speed over 400 km/h (248.5 mph), accelerate 0-100 km/h in under 3 seconds, yet be smooth enough for your wife to take to the opera.',
    whyIconic: 'Features an 8.0-liter quad-turbocharged W16 engine, 10 radiators, special Michelin PAX run-flat tires, and a dual-clutch transmission capable of handling 922 lb-ft of torque. Reached 267.8 mph in Super Sport trim.',
    specs: {
      engine: 'Mid 8.0L Quad-Turbocharged 64-valve W16',
      displacement: '8.0 L (7993 cc)',
      horsepower: '1001 hp @ 6000 RPM (1200 hp in Super Sport)',
      torque: '922 lb-ft @ 2200–5500 RPM',
      acceleration0to60: '2.4 seconds',
      topSpeed: '253.8 mph (408.4 km/h) / 267.8 mph (Super Sport)',
      weight: '1,888 kg (4,162 lbs)',
      drivetrain: 'Permanent Haldex All-Wheel Drive',
      transmission: '7-speed Ricardo dual-clutch automatic'
    },
    legacy: 'Established the modern hypercar category and set a benchmark for high-speed mechanical engineering.',
    quotes: [
      {
        text: 'The Veyron is Concorde for the road. It makes 250 miles per hour feel as calm as cruising down a highway.',
        author: 'Jeremy Clarkson',
        source: 'Top Gear UK',
        year: '2005'
      }
    ],
    relatedCarIds: ['mclaren-f1', 'bugatti-chiron', 'rimac-nevera'],
    productionCount: '450 units total',
    estimatedValuation: '$1,500,000 – $3,200,000',
    originalPrice: '€1,100,000 in 2005',
    engineSoundProfile: 'w16',
    flagshipHero: true
  },
  {
    id: 'porsche-carrera-gt',
    make: 'Porsche',
    model: 'Carrera GT',
    years: '2004–2006',
    startYear: 2004,
    endYear: 2006,
    country: 'Germany',
    era: 'modern-icons',
    categories: ['engineering', 'design'],
    editorialHook: 'The scream of a naturally aspirated 5.7-liter V10 paired with a beechwood gearshift knob.',
    heroImage: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Originally conceived for a aborted 1999 Le Mans LMP1 race program, Porsche adapted the pure racing 5.7L V10 engine for road use. Features carbon-fiber reinforced plastic (CFP) monocoque, carbon ceramic brakes (PCCB), and a dry twin-plate ceramic clutch (PCCD).',
    whyIconic: 'Widely praised for having one of the most intoxicating engine exhaust notes ever produced. Features a balsa wood gear knob homage to the 917 Le Mans racer.',
    specs: {
      engine: 'Mid 68-degree DOHC 40-valve dry-sump V10',
      displacement: '5.7 L (5733 cc)',
      horsepower: '605 hp @ 8000 RPM',
      torque: '435 lb-ft @ 5750 RPM',
      acceleration0to60: '3.5 seconds',
      topSpeed: '205 mph (330 km/h)',
      weight: '1,380 kg (3,042 lbs)',
      drivetrain: 'Mid-engine rear-wheel drive',
      transmission: '6-speed manual with ceramic clutch'
    },
    legacy: 'Revered as the ultimate analog supercar swan song before electronic stability systems dominated.',
    quotes: [
      {
        text: 'The sound of that V10 passing 8,000 RPM is unlike anything else on Earth. It is pure mechanical opera.',
        author: 'Walter Röhrl',
        source: 'Porsche Chief Test Driver',
        year: '2004'
      }
    ],
    relatedCarIds: ['mclaren-f1', 'ferrari-enzo', 'porsche-918-spyder'],
    productionCount: '1,270 units',
    estimatedValuation: '$1,200,000 – $2,100,000',
    originalPrice: '$440,000 in 2004',
    engineSoundProfile: 'v10'
  },
  {
    id: 'ferrari-enzo',
    make: 'Ferrari',
    model: 'Enzo Ferrari',
    years: '2002–2004',
    startYear: 2002,
    endYear: 2004,
    country: 'Italy',
    era: 'modern-icons',
    categories: ['motorsport', 'rarity', 'engineering'],
    editorialHook: 'The halo hypercar carrying the founder’s name, packed with Formula 1 aerodynamics.',
    heroImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Designed by Ken Okuyama at Pininfarina, the Enzo integrated Formula 1 composite technology, active ground-effect aerodynamics, carbon-ceramic brake discs, and an electrohydraulic F1 paddle-shift transmission.',
    whyIconic: 'Named directly after Il Commendatore Enzo Ferrari. Michael Schumacher assisted with track chassis development at Fiorano.',
    specs: {
      engine: 'Mid Tipo F140B 65-degree DOHC 48-valve V12',
      displacement: '6.0 L (5998 cc)',
      horsepower: '651 hp @ 7800 RPM',
      torque: '485 lb-ft @ 5500 RPM',
      acceleration0to60: '3.14 seconds',
      topSpeed: '217 mph (350 km/h)',
      weight: '1,255 kg (2,767 lbs)',
      drivetrain: 'Mid-engine rear-wheel drive',
      transmission: '6-speed electrohydraulic automated manual'
    },
    legacy: 'Initiated the modern F1-technology era for Ferrari flagship road cars.',
    quotes: [
      {
        text: 'The Enzo is the physical embodiment of Michael Schumacher’s championship era at Maranello.',
        author: 'Luca di Montezemolo',
        source: 'Ferrari President',
        year: '2002'
      }
    ],
    relatedCarIds: ['ferrari-f50', 'porsche-carrera-gt', 'mclaren-p1'],
    productionCount: '400 units',
    estimatedValuation: '$3,200,000 – $4,500,000',
    originalPrice: '$659,330 in 2002',
    engineSoundProfile: 'v12'
  },
  {
    id: 'tesla-roadster',
    make: 'Tesla',
    model: 'Roadster',
    variant: 'Original 2.5 Sport',
    years: '2008–2012',
    startYear: 2008,
    endYear: 2012,
    country: 'United States',
    era: 'modern-icons',
    categories: ['first', 'engineering', 'cultural-impact'],
    editorialHook: 'The pioneer that proved electric vehicles could be desirable, fast sports cars.',
    heroImage: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Co-founded by Martin Eberhard and Marc Tarpenning, with early leadership from Elon Musk. Built on a modified Lotus Elise chassis, it featured a 53 kWh lithium-ion battery pack with 6,831 cells.',
    whyIconic: 'First highway-legal serial production electric car to use lithium-ion battery cells and achieve over 244 miles (393 km) per charge. One was launched into heliocentric orbit on Falcon Heavy in 2018.',
    specs: {
      engine: '3-phase 4-pole AC induction electric motor',
      displacement: 'Electric Drive',
      horsepower: '288 hp @ 5000–6000 RPM',
      torque: '295 lb-ft @ 0–5400 RPM (instantaneous)',
      acceleration0to60: '3.7 seconds',
      topSpeed: '125 mph (201 km/h)',
      weight: '1,237 kg (2,727 lbs)',
      drivetrain: 'Rear-motor rear-wheel drive',
      transmission: 'Single-speed fixed gear ratio'
    },
    legacy: 'Sparked the modern global EV revolution.',
    quotes: [
      {
        text: 'The goal of Tesla was to break the stigma that electric cars were slow, ugly golf carts.',
        author: 'Elon Musk',
        source: 'Launch Interview',
        year: '2008'
      }
    ],
    relatedCarIds: ['rimac-nevera', 'tesla-model-s-plaid', 'porsche-918-spyder'],
    productionCount: '2,450 units',
    estimatedValuation: '$120,000 – $220,000',
    originalPrice: '$109,000 in 2008',
    engineSoundProfile: 'electric'
  },

  // ----------------------------------------------------
  // 11. NEW LEGENDS / ELECTRIC & HYPERCAR ERA (2010s–present)
  // ----------------------------------------------------
  {
    id: 'bugatti-chiron',
    make: 'Bugatti',
    model: 'Chiron',
    variant: 'Super Sport 300+',
    years: '2016–2024',
    startYear: 2016,
    endYear: 2024,
    country: 'France / Germany',
    era: 'new-legends',
    categories: ['speed-records', 'engineering'],
    editorialHook: 'The 1,600 horsepower apex hypercar that broke the 300 mph speed barrier.',
    heroImage: 'https://images.unsplash.com/photo-1600712242805-5f78671b24da?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1600712242805-5f78671b24da?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Engineered under Bugatti CEO Wolfgang Dürheimer as the successor to Veyron. The quad-turbo W16 engine features 2-stage turbocharging system that engages two turbos at low RPM and all four above 3,800 RPM.',
    whyIconic: 'On August 2, 2019, test driver Andy Wallace drove a Chiron Super Sport 300+ to an officially verified 304.773 mph (490.484 km/h) at Ehra-Lessien.',
    specs: {
      engine: 'Mid 8.0L Quad-stage Turbocharged W16',
      displacement: '8.0 L (7993 cc)',
      horsepower: '1578 hp @ 7000 RPM (Super Sport 300+)',
      torque: '1180 lb-ft @ 2200–6000 RPM',
      acceleration0to60: '2.3 seconds',
      topSpeed: '304.77 mph (490.48 km/h)',
      weight: '1,977 kg (4,358 lbs)',
      drivetrain: 'Permanent All-Wheel Drive',
      transmission: '7-speed dual-clutch automatic'
    },
    legacy: 'The first production-based road car to break the 300 mph wall.',
    quotes: [
      {
        text: 'Over 300 miles per hour! It was unbelievable to witness the Chiron track completely straight like it was on rails.',
        author: 'Andy Wallace',
        source: 'Record Run Statement',
        year: '2019'
      }
    ],
    relatedCarIds: ['bugatti-veyron', 'rimac-nevera', 'mclaren-p1'],
    productionCount: '500 units built total',
    estimatedValuation: '$3,500,000 – $5,200,000',
    originalPrice: '€2,400,000 in 2016',
    engineSoundProfile: 'w16'
  },
  {
    id: 'mclaren-p1',
    make: 'McLaren',
    model: 'P1',
    variant: 'GTR / Standard Hypercar',
    years: '2013–2015',
    startYear: 2013,
    endYear: 2015,
    country: 'United Kingdom',
    era: 'new-legends',
    categories: ['engineering', 'motorsport', 'speed-records'],
    editorialHook: 'Member of the legendary hybrid "Holy Trinity" featuring instant electric torque fill.',
    heroImage: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Designed by Frank Stephenson, the P1 combined a 3.8-liter twin-turbo V8 with an electric motor (IPAS) producing 903 hp total. Features DRS (Drag Reduction System) and active rear wing that generates 600 kg of downforce.',
    whyIconic: 'Pioneered hybrid hypercar performance alongside the Porsche 918 and LaFerrari, creating the famed 2013 "Holy Trinity."',
    specs: {
      engine: 'Mid 3.8L Twin-Turbo V8 + Lightweight Electric Motor',
      displacement: '3.8 L (3799 cc)',
      horsepower: '903 hp combined (727 hp V8 + 176 hp Electric)',
      torque: '664 lb-ft combined',
      acceleration0to60: '2.7 seconds',
      topSpeed: '217 mph (350 km/h limited)',
      weight: '1,395 kg (3,075 lbs)',
      drivetrain: 'Mid-engine rear-wheel drive',
      transmission: '7-speed dual-clutch automatic'
    },
    legacy: 'Demonstrated how hybrid electrical powertrains elevate track performance.',
    quotes: [
      {
        text: 'The P1 is so fast it rewrites your brain’s processing speed for corner entries.',
        author: 'Chris Harris',
        source: 'Drive Track Test',
        year: '2014'
      }
    ],
    relatedCarIds: ['porsche-918-spyder', 'mclaren-f1', 'rimac-nevera'],
    productionCount: '375 road units',
    estimatedValuation: '$1,600,000 – $2,400,000',
    originalPrice: '£866,000 in 2013',
    engineSoundProfile: 'turbo',
    flagshipHero: true
  },
  {
    id: 'porsche-918-spyder',
    make: 'Porsche',
    model: '918 Spyder',
    variant: 'Weissach Package',
    years: '2013–2015',
    startYear: 2013,
    endYear: 2015,
    country: 'Germany',
    era: 'new-legends',
    categories: ['engineering', 'speed-records'],
    editorialHook: 'The sub-7-minute Nürburgring hybrid masterwork with top-exit exhaust pipes.',
    heroImage: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Engineered by Michael Hölscher, the 918 Spyder mated a high-revving 4.6L naturally aspirated V10/V8 descendant of the RS Spyder racer with two electric motors (one on the front axle, one on the rear) for active torque-vectoring all-wheel drive.',
    whyIconic: 'First series production road car to break the 7-minute barrier around the Nürburgring Nordschleife with a 6:57 lap time in September 2013.',
    specs: {
      engine: 'Mid 4.6L Naturally Aspirated V8 + Dual Electric Motors',
      displacement: '4.6 L (4593 cc)',
      horsepower: '887 hp combined @ 8500 RPM',
      torque: '944 lb-ft combined',
      acceleration0to60: '2.2 seconds (0-60 mph record holder)',
      topSpeed: '214 mph (345 km/h)',
      weight: '1,634 kg (3,602 lbs)',
      drivetrain: 'Hybrid Torque-Vectoring All-Wheel Drive',
      transmission: '7-speed PDK dual-clutch automatic'
    },
    legacy: 'Set the world record for street car acceleration (0-60 in 2.2 seconds).',
    quotes: [
      {
        text: '6:57 around the Ring. That number proved hybrid hypercars were not just green statement pieces—they were weapons.',
        author: 'Marc Lieb',
        source: 'Nürburgring Record Lap Driver',
        year: '2013'
      }
    ],
    relatedCarIds: ['mclaren-p1', 'porsche-carrera-gt', 'porsche-959'],
    productionCount: '918 units built',
    estimatedValuation: '$1,500,000 – $2,300,000',
    originalPrice: '$845,000 in 2013',
    engineSoundProfile: 'v8'
  },
  {
    id: 'rimac-nevera',
    make: 'Rimac Automobili',
    model: 'Nevera',
    years: '2021–present',
    startYear: 2021,
    country: 'Croatia',
    era: 'new-legends',
    categories: ['first', 'speed-records', 'engineering'],
    editorialHook: 'The 1,914 horsepower Croatian electric hypercar that crushed 23 performance world records in a single day.',
    heroImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Founded by Mate Rimac in a garage at age 21. The Nevera features four liquid-cooled permanent magnet electric motors (one per wheel) controlled by Rimac All-Wheel Torque Vectoring (R-AWTV 2) calculating torque adjustments 100 times per second.',
    whyIconic: 'Broke 23 acceleration and braking world records in a single test day in May 2023, including 0-249-0 mph (0-400-0 km/h) in 29.93 seconds and a top speed of 258 mph (412 km/h).',
    specs: {
      engine: 'Four Independent Liquid-Cooled Electric Motors',
      displacement: 'Electric (120 kWh battery pack)',
      horsepower: '1914 hp',
      torque: '1741 lb-ft (2360 Nm)',
      acceleration0to60: '1.74 seconds',
      topSpeed: '258 mph (412 km/h)',
      weight: '2,300 kg (5,070 lbs)',
      drivetrain: 'Four-wheel independent vectoring drive',
      transmission: 'Four single-speed gearboxes (1 per wheel)'
    },
    legacy: 'The undisputed benchmark of electric hypercar performance capability.',
    quotes: [
      {
        text: 'When you step on the pedal in the Nevera, it isn’t acceleration; it’s teleportation.',
        author: 'Mate Rimac',
        source: 'Record Day Announcement',
        year: '2023'
      }
    ],
    relatedCarIds: ['tesla-roadster', 'bugatti-chiron', 'tesla-model-s-plaid'],
    productionCount: '150 units planned',
    estimatedValuation: '$2,400,000 – $3,000,000',
    originalPrice: '€2,000,000 in 2021',
    engineSoundProfile: 'electric'
  },
  {
    id: 'tesla-model-s-plaid',
    make: 'Tesla',
    model: 'Model S Plaid',
    years: '2021–present',
    startYear: 2021,
    country: 'United States',
    era: 'new-legends',
    categories: ['first', 'cultural-impact', 'speed-records'],
    editorialHook: 'Tri-motor 1,020 hp carbon-sleeved electric rotor sedan that redefined production acceleration.',
    heroImage: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1600&q=80',
    engineImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80',
    interiorPOVs: {
      driverSeat: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1600&q=80',
      gaugeCluster: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
      seatsCabin: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1600&q=80',
      pedalBox: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80'
    },
    interiorImage: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Features three carbon-overwrapped rotor electric motors (one front, two rear). Carbon sleeve wrapping prevents rotors from expanding under centrifugal forces at 20,000+ RPM.',
    whyIconic: 'First four-door family sedan to cover the 1/4 mile in under 9 seconds (8.99s @ 155 mph) out of the factory for under $100,000.',
    specs: {
      engine: 'Tri-motor electric powertrain (Carbon-wrapped rotors)',
      displacement: 'Electric Drive (100 kWh battery)',
      horsepower: '1020 hp',
      torque: '1050 lb-ft',
      acceleration0to60: '1.99 seconds',
      topSpeed: '200 mph (322 km/h)',
      weight: '2,162 kg (4,766 lbs)',
      drivetrain: 'Tri-motor Torque-Vectoring All-Wheel Drive',
      transmission: 'Single-speed fixed reduction'
    },
    legacy: 'Democratized 1,000+ horsepower sub-2-second 0-60 performance in a mainstream 5-seater luxury car.',
    quotes: [
      {
        text: 'Plaid mode is faster than any production car ever made, four-door or two-door.',
        author: 'Elon Musk',
        source: 'Delivery Event',
        year: '2021'
      }
    ],
    relatedCarIds: ['tesla-roadster', 'rimac-nevera', 'bugatti-veyron'],
    productionCount: 'Mass production',
    estimatedValuation: '$85,000 – $110,000',
    originalPrice: '$129,990 at launch (2021)',
    engineSoundProfile: 'electric'
  }
];
