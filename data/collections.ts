/**
 * Kitchen facade collections of the ViVaKitchen factory — a hand-picked
 * subset of the factory's own catalog (viva-kitchen.com/kupit-kuxnyu), which
 * has 50+ collections. Names are the factory's; the style grouping is just
 * what's visible on the picture (framed/panelled fronts vs. flat fronts),
 * no material claims. Images are the factory's 3D renders with their
 * watermark left intact (factory content rules) — they show a style, they
 * are not installed projects.
 */

export type CollectionStyle = 'classic' | 'modern';

export type Collection = {
  slug: string;
  name: string;
  style: CollectionStyle;
  image: string;
};

export const collectionStyleLabels: Record<CollectionStyle, string> = {
  classic: 'Классика и неоклассика',
  modern: 'Современные',
};

export const collections: Collection[] = [
  { slug: 'giovanni-rossi', name: 'Giovanni Rossi', style: 'classic', image: '/images/collections/giovanni-rossi.webp' },
  { slug: 'benita', name: 'Benita', style: 'classic', image: '/images/collections/benita.webp' },
  { slug: 'villa-maria', name: 'Villa Maria', style: 'classic', image: '/images/collections/villa-maria.webp' },
  { slug: 'piano-allegra', name: 'Piano Allegra', style: 'classic', image: '/images/collections/piano-allegra.webp' },
  { slug: 'primavera-italy', name: 'Primavera Italy', style: 'classic', image: '/images/collections/primavera-italy.webp' },
  { slug: 'gold-line', name: 'Gold Line', style: 'classic', image: '/images/collections/gold-line.webp' },
  { slug: 'norma-lux', name: 'Norma Lux', style: 'modern', image: '/images/collections/norma-lux.webp' },
  { slug: 'lorenzo', name: 'Lorenzo', style: 'modern', image: '/images/collections/lorenzo.webp' },
  { slug: 'grande-gold', name: 'Grande Gold', style: 'modern', image: '/images/collections/grande-gold.webp' },
  { slug: 'linea-di-marca', name: 'Linea di Marca', style: 'modern', image: '/images/collections/linea-di-marca.webp' },
  { slug: 'urbano', name: 'Urbano', style: 'modern', image: '/images/collections/urbano.webp' },
  { slug: 'brennero', name: 'Brennero', style: 'modern', image: '/images/collections/brennero.webp' },
];
