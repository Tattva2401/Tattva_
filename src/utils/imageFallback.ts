// Reliable Image Fallback Utility for Automotive Icons Exhibition

export const FALLBACK_CAR_IMAGES = [
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80', // Porsche
  'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1600&q=80', // Ferrari
  'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1600&q=80', // Classic
  'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80', // Corvette
  'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=80', // NSX
];

export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackIndex: number = 0) => {
  const target = e.currentTarget;
  const fallbackUrl = FALLBACK_CAR_IMAGES[fallbackIndex % FALLBACK_CAR_IMAGES.length];
  if (target.src !== fallbackUrl) {
    target.src = fallbackUrl;
  }
};
