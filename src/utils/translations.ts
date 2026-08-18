// Multi-Language Translation Utility for Automotive Icons Exhibition

export type Language = 'EN' | 'DE' | 'IT' | 'FR' | 'JA';

export interface UIStrings {
  gallery: string;
  chronology: string;
  heritageMap: string;
  compare: string;
  analytics: string;
  collection: string;
  curatorial: string;
  search: string;
  guidedTour: string;
  guestbook: string;
  allMarques: string;
  allEras: string;
  resetFilters: string;
  exhibitionPlacard: string;
  inspectionStudio: string;
  wallPoster: string;
  collectorCard: string;
  listenEngine: string;
  topSpeed: string;
  horsepower: string;
  acceleration: string;
  weight: string;
  valuation: string;
  ambientSound: string;
  exportCatalog: string;
}

export const TRANSLATIONS: Record<Language, UIStrings> = {
  EN: {
    gallery: 'Gallery',
    chronology: 'Chronology',
    heritageMap: 'Heritage Map',
    compare: 'Compare',
    analytics: 'Analytics',
    collection: 'Collection',
    curatorial: 'Curatorial',
    search: 'SEARCH',
    guidedTour: 'Tour',
    guestbook: 'Guestbook',
    allMarques: 'All Marques',
    allEras: 'All Eras',
    resetFilters: 'RESET FILTERS',
    exhibitionPlacard: 'Exhibition Placard',
    inspectionStudio: 'INSPECTION STUDIO',
    wallPoster: 'WALL POSTER',
    collectorCard: 'COLLECTOR CARD',
    listenEngine: 'Listen to Engine Note',
    topSpeed: 'TOP SPEED',
    horsepower: 'HORSEPOWER',
    acceleration: '0–60 MPH',
    weight: 'KERB WEIGHT',
    valuation: 'AUCTION VALUATION',
    ambientSound: 'Ambient Museum Acoustics',
    exportCatalog: 'Export Full Catalog',
  },
  DE: {
    gallery: 'Galerie',
    chronology: 'Chronologie',
    heritageMap: 'Kulturerbe-Karte',
    compare: 'Vergleichen',
    analytics: 'Analytik',
    collection: 'Sammlung',
    curatorial: 'Kuratoren-Leitfaden',
    search: 'SUCHE',
    guidedTour: 'Führung',
    guestbook: 'Gästebuch',
    allMarques: 'Alle Marken',
    allEras: 'Alle Epochen',
    resetFilters: 'FILTER ZURÜCKSETZEN',
    exhibitionPlacard: 'Ausstellungs-Plakat',
    inspectionStudio: 'INSPEKTIONS-STUDIO',
    wallPoster: 'WAND-POSTER',
    collectorCard: 'SAMMLER-KARTE',
    listenEngine: 'Motor-Sound Anhören',
    topSpeed: 'HÖCHSTGESCHWINDIGKEIT',
    horsepower: 'LEISTUNG (PS)',
    acceleration: '0–100 KM/H',
    weight: 'LEERGEWICHT',
    valuation: 'AUKTIONS-SCHÄTZUNG',
    ambientSound: 'Museums-Akustik',
    exportCatalog: 'Katalog Exportieren',
  },
  IT: {
    gallery: 'Galleria',
    chronology: 'Cronologia',
    heritageMap: 'Mappa Storica',
    compare: 'Confronta',
    analytics: 'Analitica',
    collection: 'Collezione',
    curatorial: 'Curatoriale',
    search: 'CERCA',
    guidedTour: 'Tour Guidato',
    guestbook: 'Registro Visite',
    allMarques: 'Tutti i Marchi',
    allEras: 'Tutte le Epoche',
    resetFilters: 'RIPRISTINA FILTRI',
    exhibitionPlacard: 'Targa Espositiva',
    inspectionStudio: 'STUDIO DI ISPEZIONE',
    wallPoster: 'POSTER DA PARETE',
    collectorCard: 'CARTA DA COLLEZIONE',
    listenEngine: 'Ascolta il Motore',
    topSpeed: 'VELOCITÀ MASSIMA',
    horsepower: 'POTENZA (CV)',
    acceleration: '0–100 KM/H',
    weight: 'PESO A VUOTO',
    valuation: 'VALUTAZIONE D\'ASTA',
    ambientSound: 'Acustica del Museo',
    exportCatalog: 'Esporta Catalogo',
  },
  FR: {
    gallery: 'Galerie',
    chronology: 'Chronologie',
    heritageMap: 'Carte du Patrimoine',
    compare: 'Comparer',
    analytics: 'Analytique',
    collection: 'Collection',
    curatorial: 'Conservateur',
    search: 'RECHERCHE',
    guidedTour: 'Visite Guidée',
    guestbook: 'Livre d\'or',
    allMarques: 'Toutes les Marques',
    allEras: 'Toutes les Époques',
    resetFilters: 'RÉINITIALISER FILTRES',
    exhibitionPlacard: 'Cartel d\'Exposition',
    inspectionStudio: 'STUDIO D\'INSPECTION',
    wallPoster: 'POSTER MURAL',
    collectorCard: 'CARTE DE COLLECTION',
    listenEngine: 'Écouter le Moteur',
    topSpeed: 'VITESSE MAXIMALE',
    horsepower: 'PUISSANCE (CH)',
    acceleration: '0–100 KM/H',
    weight: 'POIDS À VIDE',
    valuation: 'ESTIMATION EN VENTE',
    ambientSound: 'Acoustique du Musée',
    exportCatalog: 'Exporter le Catalogue',
  },
  JA: {
    gallery: 'ギャラリー',
    chronology: '年代記',
    heritageMap: '遺産マップ',
    compare: 'スペック比較',
    analytics: '統計・分析',
    collection: 'コレクション',
    curatorial: 'キュレーター',
    search: '検索',
    guidedTour: 'ツアー',
    guestbook: '芳名帳',
    allMarques: '全ブランド',
    allEras: '全時代',
    resetFilters: '条件リセット',
    exhibitionPlacard: '展示解説プレート',
    inspectionStudio: '360°インスペクション',
    wallPoster: 'ポスター発行',
    collectorCard: 'コレクターカード',
    listenEngine: 'エンジン音を再生',
    topSpeed: '最高速度',
    horsepower: '最高出力 (PS)',
    acceleration: '0–100 KM/H 加速',
    weight: '車両重量',
    valuation: '推定オークション価格',
    ambientSound: 'アンビエント音響',
    exportCatalog: '全カタログ印刷・出力',
  },
};
