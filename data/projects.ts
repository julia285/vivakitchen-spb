/**
 * Project content model. Add a new project by appending an object here —
 * no component changes needed. `isPlaceholder: true` marks entries whose
 * images are temporary and must be swapped for real ViVakitchen photos
 * before launch (see README "Где добавить новый проект").
 */

export type Project = {
  slug: string;
  title: string;
  category: 'Кухня' | 'Шкаф' | 'Гардеробная' | 'Мебель для интерьера';
  cover: string;
  images: string[];
  description?: string;
  materials?: string[];
  featured?: boolean;
  isPlaceholder?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'kuhnya-s-ostrovom-shpon',
    title: 'Кухня с островом и шпонированными фасадами',
    category: 'Кухня',
    cover: '/images/projects/kuhnya-s-ostrovom-shpon/cover.jpg',
    images: [
      '/images/projects/kuhnya-s-ostrovom-shpon/1.jpg',
      '/images/projects/kuhnya-s-ostrovom-shpon/2.jpg',
      '/images/projects/kuhnya-s-ostrovom-shpon/3.jpg',
    ],
    description:
      'Проект для кухни-гостиной с рабочим островом и зоной для завтраков. Фасады — шпон натурального дерева, столешница — TODO: уточнить материал.',
    materials: ['Шпон', 'TODO: уточнить фурнитуру'],
    featured: true,
    isPlaceholder: true,
  },
  {
    slug: 'ugloavaya-kuhnya-matovyy-grafit',
    title: 'Угловая кухня в матовом графитовом цвете',
    category: 'Кухня',
    cover: '/images/projects/ugloavaya-kuhnya-matovyy-grafit/cover.jpg',
    images: [
      '/images/projects/ugloavaya-kuhnya-matovyy-grafit/1.jpg',
      '/images/projects/ugloavaya-kuhnya-matovyy-grafit/2.jpg',
    ],
    description: 'Компактная угловая кухня с системой хранения до потолка.',
    materials: ['TODO: уточнить материал фасада'],
    featured: true,
    isPlaceholder: true,
  },
  {
    slug: 'kuhnya-nisha-derevo',
    title: 'Кухня в нише с деревянными фасадами',
    category: 'Кухня',
    cover: '/images/projects/kuhnya-nisha-derevo/cover.jpg',
    images: ['/images/projects/kuhnya-nisha-derevo/1.jpg', '/images/projects/kuhnya-nisha-derevo/2.jpg'],
    description: 'Кухня, встроенная в нишу студии, с акцентом на естественные текстуры.',
    isPlaceholder: true,
  },
  {
    slug: 'garderobnaya-p-obraznaya',
    title: 'П-образная гардеробная с открытыми и закрытыми модулями',
    category: 'Гардеробная',
    cover: '/images/projects/garderobnaya-p-obraznaya/cover.jpg',
    images: ['/images/projects/garderobnaya-p-obraznaya/1.jpg', '/images/projects/garderobnaya-p-obraznaya/2.jpg'],
    description: 'Гардеробная комната с индивидуальным наполнением под конкретный гардероб.',
    featured: true,
    isPlaceholder: true,
  },
  {
    slug: 'garderobnaya-v-spalne',
    title: 'Гардеробная зона в спальне',
    category: 'Гардеробная',
    cover: '/images/projects/garderobnaya-v-spalne/cover.jpg',
    images: ['/images/projects/garderobnaya-v-spalne/1.jpg'],
    description: 'Выделенная зона хранения в спальне за раздвижными дверями.',
    isPlaceholder: true,
  },
  {
    slug: 'shkaf-kupe-prihozhaya',
    title: 'Встроенный шкаф-купе в прихожую',
    category: 'Шкаф',
    cover: '/images/projects/shkaf-kupe-prihozhaya/cover.jpg',
    images: ['/images/projects/shkaf-kupe-prihozhaya/1.jpg', '/images/projects/shkaf-kupe-prihozhaya/2.jpg'],
    description: 'Шкаф под нестандартную нишу прихожей с зеркальными дверями.',
    featured: true,
    isPlaceholder: true,
  },
  {
    slug: 'shkaf-detskaya',
    title: 'Корпусный шкаф в детскую комнату',
    category: 'Шкаф',
    cover: '/images/projects/shkaf-detskaya/cover.jpg',
    images: ['/images/projects/shkaf-detskaya/1.jpg'],
    description: 'Система хранения для детской с учётом роста ребёнка.',
    isPlaceholder: true,
  },
  {
    slug: 'mebel-gostinaya-tv-zona',
    title: 'ТВ-зона и системы хранения для гостиной',
    category: 'Мебель для интерьера',
    cover: '/images/projects/mebel-gostinaya-tv-zona/cover.jpg',
    images: ['/images/projects/mebel-gostinaya-tv-zona/1.jpg', '/images/projects/mebel-gostinaya-tv-zona/2.jpg'],
    description: 'Мебельная стенка с ТВ-зоной, разработанная под размеры конкретной гостиной.',
    featured: true,
    isPlaceholder: true,
  },
  {
    slug: 'kompleksnaya-meblirovka-kvartiry',
    title: 'Комплексная меблировка квартиры',
    category: 'Мебель для интерьера',
    cover: '/images/projects/kompleksnaya-meblirovka-kvartiry/cover.jpg',
    images: [
      '/images/projects/kompleksnaya-meblirovka-kvartiry/1.jpg',
      '/images/projects/kompleksnaya-meblirovka-kvartiry/2.jpg',
      '/images/projects/kompleksnaya-meblirovka-kvartiry/3.jpg',
    ],
    description: 'Кухня, гардеробная и мебель для гостиной в рамках одного проекта.',
    isPlaceholder: true,
  },
  {
    slug: 'kuhnya-po-proektu-dizaynera',
    title: 'Кухня, реализованная по проекту дизайнера интерьера',
    category: 'Кухня',
    cover: '/images/projects/kuhnya-po-proektu-dizaynera/cover.jpg',
    images: ['/images/projects/kuhnya-po-proektu-dizaynera/1.jpg', '/images/projects/kuhnya-po-proektu-dizaynera/2.jpg'],
    description: 'Проект дизайнера адаптирован под технические возможности фабрики ViVakitchen.',
    isPlaceholder: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
