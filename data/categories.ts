export type Category = {
  slug: string;
  title: string;
  shortDescription: string;
  cover: string; // path under /public/images, or a placeholder id
  isPlaceholder?: boolean;
  href: string;
};

export const categories: Category[] = [
  {
    slug: 'kitchens',
    title: 'Кухни',
    shortDescription: 'Индивидуальные проекты кухонь любой планировки и площади.',
    cover: '/images/categories/kitchens.jpg',
    isPlaceholder: true,
    href: '/kitchens',
  },
  {
    slug: 'wardrobes',
    title: 'Шкафы',
    shortDescription: 'Встроенные и корпусные шкафы под конкретное помещение.',
    cover: '/images/categories/wardrobes.jpg',
    isPlaceholder: true,
    href: '/wardrobes',
  },
  {
    slug: 'dressing-rooms',
    title: 'Гардеробные',
    shortDescription: 'Продуманное наполнение и эргономика для гардеробной комнаты.',
    cover: '/images/categories/dressing-rooms.jpg',
    isPlaceholder: true,
    href: '/wardrobes#dressing-rooms',
  },
  {
    slug: 'furniture',
    title: 'Мебель для интерьера',
    shortDescription: 'Корпусная мебель для гостиной, прихожей, спальни и других помещений.',
    cover: '/images/categories/furniture.jpg',
    isPlaceholder: true,
    href: '/kitchens#furniture',
  },
];
