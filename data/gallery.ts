/**
 * Inspiration galleries from the factory's own site (viva-kitchen.com,
 * sections «Шкафы/Гардеробные», «Стеновые панели», «Комоды»). The images
 * are the factory's 3D visualisations with their watermark left intact
 * (factory content rules) — they show styles and materials, not objects
 * installed by this salon. Captions restate what the factory's pages say
 * or what is visible; they make no claims beyond that.
 */

export type GalleryItem = {
  slug: string;
  title: string;
  text?: string;
  image: string;
};

export const wardrobeGallery: GalleryItem[] = [
  { slug: 'dressing-veneer-glass', title: 'Гардеробная: шпон и стеклянные двери', image: '/images/gallery/dressing-veneer-glass.webp' },
  { slug: 'dressing-island', title: 'Гардеробная с островом', image: '/images/gallery/dressing-island.webp' },
  { slug: 'dressing-olive', title: 'Гардеробная в оливковой гамме', image: '/images/gallery/dressing-olive.webp' },
  { slug: 'hall-veneer-brass', title: 'Шкафы в прихожей: шпон «ёлочкой» и латунь', image: '/images/gallery/hall-veneer-brass.webp' },
  { slug: 'hall-mirror', title: 'Шкафы с зеркальными вставками', image: '/images/gallery/hall-mirror.webp' },
  { slug: 'tall-brass', title: 'Шкаф с рифлёными фасадами и латунными ручками', image: '/images/gallery/tall-brass.webp' },
];

export const materialsGallery: GalleryItem[] = [
  {
    slug: 'wall-panels',
    title: 'Стеновые панели',
    text: 'Эмаль, натуральный шпон или шпон Fine-Line, матовые или глянцевые, с фрезеровкой. Можно добавить латунные полосы и зеркальные вставки. Для дома и офиса, под ваши размеры.',
    image: '/images/gallery/wall-panels.webp',
  },
  {
    slug: 'nightstand-leather',
    title: 'Прикроватные тумбы',
    text: 'Тёмный шпон с горизонтальной текстурой, верх из натуральной кожи с фирменным паттерном и тонкое латунное основание.',
    image: '/images/gallery/nightstand-leather.webp',
  },
  {
    slug: 'chest-metallic',
    title: 'Комоды в металлизированном оттенке',
    text: 'Лаконичный силуэт и вертикальная акцентная ручка; подходит и строгим, и современным интерьерам.',
    image: '/images/gallery/chest-metallic.webp',
  },
  {
    slug: 'chest-orange',
    title: 'Дизайнерские комоды',
    text: 'Яркий цвет и радиусные формы: акцент для минималистичного или эклектичного интерьера.',
    image: '/images/gallery/chest-orange.webp',
  },
];
