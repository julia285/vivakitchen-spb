export type Category = {
  slug: string;
  title: string;
  shortDescription: string;
  cover: string; // path under /public/images, or a placeholder id
  isPlaceholder?: boolean;
  href: string;
};

/**
 * Cover photos are real ViVakitchen factory photography (from the
 * factory's own project catalog, viva-kitchen.com/realizovannyye-proyekty),
 * used here as category imagery — not claims that this specific salon
 * installed the pictured interiors. Swap for salon-specific photos once
 * available (see README).
 */
export const categories: Category[] = [
  {
    slug: 'kitchens',
    title: 'Кухни',
    shortDescription: 'Индивидуальные проекты кухонь любой планировки и площади.',
    cover: '/images/categories/kitchens.webp',
    href: '/kitchens',
  },
  {
    slug: 'wardrobes',
    title: 'Шкафы',
    shortDescription: 'Встроенные и корпусные шкафы под конкретное помещение.',
    cover: '/images/categories/wardrobes.webp',
    href: '/wardrobes',
  },
  {
    slug: 'dressing-rooms',
    title: 'Гардеробные',
    shortDescription: 'Продуманное наполнение и эргономика для гардеробной комнаты.',
    cover: '/images/categories/dressing-rooms.webp',
    href: '/wardrobes#dressing-rooms',
  },
  {
    slug: 'furniture',
    title: 'Мебель для интерьера',
    shortDescription: 'Корпусная мебель для гостиной, прихожей, спальни и других помещений.',
    cover: '/images/categories/furniture.webp',
    href: '/kitchens#furniture',
  },
];
