/**
 * Project content model. Add a new project by appending an object here —
 * no component changes needed.
 *
 * Photo source note: the projects below use real ViVaKitchen factory
 * photography, pulled from the factory's own project catalog
 * (viva-kitchen.com/realizovannyye-proyekty). These are genuine
 * ViVaKitchen-made interiors — but they were not necessarily installed
 * by this specific Saint Petersburg salon, so descriptions stay factory-
 * level ("проект фабрики ViVaKitchen") rather than claiming this salon
 * personally delivered them. Replace with the salon's own completed
 * projects as they accumulate — see README "Где добавить новый проект".
 * `isPlaceholder: true` marks the few entries still using a generic
 * placeholder box instead of a real photo.
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
    slug: 'proekt-10275',
    title: 'Кухня со светлыми фасадами и латунным орнаментом',
    category: 'Кухня',
    cover: '/images/projects/proekt-10275/1.webp',
    images: [
      '/images/projects/proekt-10275/1.webp',
      '/images/projects/proekt-10275/2.webp',
      '/images/projects/proekt-10275/3.webp',
    ],
    description:
      'Проект фабрики ViVaKitchen: современная эстетика в сочетании с классической архитектурой помещения. Светлые гладкие фасады сочетаются с каменной поверхностью с выразительным природным рисунком, системы хранения интегрированы в архитектуру помещения.',
    materials: ['Фасады с латунным декором', 'Натуральный камень'],
    featured: true,
  },
  {
    slug: 'proekt-9002',
    title: 'Кухня в едином стиле с гостиной и спальней',
    category: 'Кухня',
    cover: '/images/projects/proekt-9002/1.webp',
    images: [
      '/images/projects/proekt-9002/1.webp',
      '/images/projects/proekt-9002/2.webp',
      '/images/projects/proekt-9002/3.webp',
    ],
    description:
      'Проект фабрики ViVaKitchen: комплексное интерьерное решение, где кухонная зона выполнена в сочетании матовых фасадов и натурального шпона с каменными поверхностями. Встроенные системы хранения и открытые ниши с подсветкой создают баланс функциональности и декоративности.',
    materials: ['Матовые фасады', 'Натуральный шпон', 'Камень'],
  },
  {
    slug: 'proekt-artdom-kuhnya',
    title: 'Кухня, представленная на выставке ARTDOM',
    category: 'Кухня',
    cover: '/images/projects/proekt-artdom-kuhnya/1.webp',
    images: [
      '/images/projects/proekt-artdom-kuhnya/1.webp',
      '/images/projects/proekt-artdom-kuhnya/2.webp',
      '/images/projects/proekt-artdom-kuhnya/3.webp',
    ],
    description:
      'Авторский выставочный проект фабрики ViVaKitchen. Фасады выполнены в благородном шпоне с глубокой натуральной текстурой, вертикальная фрезеровка острова добавляет ритм композиции. Центральный акцент — стеновая композиция из натурального камня с подсветкой.',
    materials: ['Шпон', 'Натуральный камень', 'Подсветка'],
    featured: true,
  },
  {
    slug: 'proekt-9997-kuhnya',
    title: 'Кухня в комплексном проекте квартиры',
    category: 'Кухня',
    cover: '/images/projects/proekt-9997-kuhnya/1.webp',
    images: [
      '/images/projects/proekt-9997-kuhnya/1.webp',
      '/images/projects/proekt-9997-kuhnya/2.webp',
      '/images/projects/proekt-9997-kuhnya/3.webp',
    ],
    description:
      'Проект фабрики ViVaKitchen: светлая природная палитра и лаконичная геометрия фасадов формируют современное пространство. Использованы экологичные материалы премиального класса — натуральный шпон, декоративные панели, элементы с отделкой под кожу.',
    materials: ['Натуральный шпон', 'Декоративные панели', 'Отделка под кожу'],
  },
  {
    slug: 'proekt-artdom-shkaf',
    title: 'Дизайнерский шкаф, представленный на выставке ARTDOM',
    category: 'Шкаф',
    cover: '/images/projects/proekt-artdom-shkaf/1.webp',
    images: [
      '/images/projects/proekt-artdom-shkaf/1.webp',
      '/images/projects/proekt-artdom-shkaf/2.webp',
      '/images/projects/proekt-artdom-shkaf/3.webp',
    ],
    description:
      'Дизайнерский шкаф фабрики ViVaKitchen, разработанный для международной выставки ARTDOM. Композиция построена на сочетании натурального шпона и горизонтальных вставок из кожи. Внутреннее пространство организовано функционально: секции для одежды, выдвижные ящики, витринные зоны с подсветкой.',
    materials: ['Шпон', 'Вставки из кожи', 'Подсветка'],
    featured: true,
  },
  {
    slug: 'proekt-9997-shkaf',
    title: 'Встроенный шкаф в детской комнате',
    category: 'Шкаф',
    cover: '/images/projects/proekt-9997-shkaf/1.webp',
    images: [
      '/images/projects/proekt-9997-shkaf/1.webp',
      '/images/projects/proekt-9997-shkaf/2.webp',
    ],
    description:
      'Фрагмент комплексного проекта фабрики ViVaKitchen: встроенный шкаф с арочным фасадом в детской комнате, выполненный в едином стиле с остальными помещениями квартиры.',
  },
  {
    slug: 'proekt-9997-garderobnaya',
    title: 'Гардеробная зона с туалетным столиком',
    category: 'Гардеробная',
    cover: '/images/projects/proekt-9997-garderobnaya/1.webp',
    images: ['/images/projects/proekt-9997-garderobnaya/1.webp'],
    description:
      'Фрагмент комплексного проекта фабрики ViVaKitchen: гардеробная зона спальни с туалетным столиком и подсветкой, встроенная в общую архитектуру помещения.',
  },
  {
    slug: 'proekt-9284',
    title: 'Гостиная с витринами и декоративной подсветкой',
    category: 'Мебель для интерьера',
    cover: '/images/projects/proekt-9284/1.webp',
    images: [
      '/images/projects/proekt-9284/1.webp',
      '/images/projects/proekt-9284/2.webp',
      '/images/projects/proekt-9284/3.webp',
    ],
    description:
      'Проект фабрики ViVaKitchen: комплексное решение для гостиной, где витрины с тонированным стеклом и LED-подсветкой превращают хранение коллекций и посуды в интерьерную композицию. В отделке — материалы с выразительной древесной текстурой, стекло и металл.',
    materials: ['Тонированное стекло', 'LED-подсветка', 'Металл'],
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
