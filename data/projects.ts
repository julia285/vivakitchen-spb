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
  /** Where the work comes from; defaults to DEFAULT_ORIGIN. Shown next to the project so
   *  factory/exhibition pieces are never presented as this salon's own installations. */
  origin?: string;
  featured?: boolean;
  isPlaceholder?: boolean;
};

export const DEFAULT_ORIGIN = 'Проект фабрики ViVaKitchen';

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
    origin: 'Выставочная экспозиция ARTDOM',
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
    origin: 'Выставочная экспозиция ARTDOM',
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
  // Entries below come from the factory's dealer channel (photos of finished
  // interiors, some shown in other dealers' salons) — hence "проект фабрики",
  // never "наш проект". Descriptions only restate what the factory's own
  // captions say or what is visible in the photos.
  {
    slug: 'kuhnya-gola-minimalizm',
    title: 'Минималистичная кухня без ручек',
    category: 'Кухня',
    cover: '/images/projects/kuhnya-gola-minimalizm/1.webp',
    images: [
      '/images/projects/kuhnya-gola-minimalizm/1.webp',
      '/images/projects/kuhnya-gola-minimalizm/2.webp',
      '/images/projects/kuhnya-gola-minimalizm/3.webp',
    ],
    description:
      'Проект фабрики ViVaKitchen: строгая геометрия светлых фасадов. Профиль GOLA заменяет ручки, поэтому линии получаются чистыми, а кухня органично продолжает гостиную.',
    materials: ['Профиль GOLA', 'Светлые фасады'],
  },
  {
    slug: 'kuhnya-shpon-ostrov',
    title: 'Кухня с островом и панелями «ёлочкой»',
    category: 'Кухня',
    cover: '/images/projects/kuhnya-shpon-ostrov/1.webp',
    images: [
      '/images/projects/kuhnya-shpon-ostrov/1.webp',
      '/images/projects/kuhnya-shpon-ostrov/2.webp',
      '/images/projects/kuhnya-shpon-ostrov/3.webp',
    ],
    description:
      'Проект фабрики ViVaKitchen из комплексного интерьера квартиры: просторная кухня-гостиная с островом и барными стульями. Тёплый шпон высоких шкафов сочетается со светлыми панелями с рисунком «ёлочкой» и латунными акцентами.',
    materials: ['Шпон', 'Светлые панели', 'Латунные акценты'],
  },
  {
    slug: 'kuhnya-dub-keramika',
    title: 'Кухня: тонированный дуб и керамика',
    category: 'Кухня',
    cover: '/images/projects/kuhnya-dub-keramika/1.webp',
    images: [
      '/images/projects/kuhnya-dub-keramika/1.webp',
      '/images/projects/kuhnya-dub-keramika/2.webp',
      '/images/projects/kuhnya-dub-keramika/3.webp',
    ],
    description:
      'Проект фабрики ViVaKitchen: тёплая природная фактура тонированного шпона дуба соединена с керамическими фасадами. Витрины с тонированным стеклом и встроенная техника сохраняют линии кухни спокойными.',
    materials: ['Тонированный шпон дуба', 'Керамические фасады', 'Тонированное стекло'],
  },
  {
    slug: 'garderobnaya-ostrov',
    title: 'Гардеробная с островом',
    category: 'Гардеробная',
    cover: '/images/projects/garderobnaya-ostrov/1.webp',
    images: [
      '/images/projects/garderobnaya-ostrov/1.webp',
      '/images/projects/garderobnaya-ostrov/2.webp',
    ],
    description:
      'Фрагмент комплексного проекта фабрики ViVaKitchen: просторная гардеробная с островом с ящиками, открытыми секциями для одежды и закрытыми фасадами со встроенными нишами.',
  },
  {
    slug: 'garderobnaya-vitrinnye-dveri',
    title: 'Гардеробная с витринными дверями',
    category: 'Гардеробная',
    cover: '/images/projects/garderobnaya-vitrinnye-dveri/1.webp',
    images: [
      '/images/projects/garderobnaya-vitrinnye-dveri/1.webp',
      '/images/projects/garderobnaya-vitrinnye-dveri/2.webp',
      '/images/projects/garderobnaya-vitrinnye-dveri/3.webp',
    ],
    description:
      'Проект фабрики ViVaKitchen: угловая гардеробная, где фасады из эмали и ткани дополнены металлическими решётками и латунной инкрустацией. Подсветка внутри секций подчёркивает фактуры и помогает быстро найти нужную вещь.',
    materials: ['Эмаль', 'Ткань', 'Латунь', 'Металлические решётки'],
  },
  {
    slug: 'shkaf-marketri-latun',
    title: 'Шкаф с маркетри из шпона и латунью',
    category: 'Шкаф',
    cover: '/images/projects/shkaf-marketri-latun/1.webp',
    images: [
      '/images/projects/shkaf-marketri-latun/1.webp',
      '/images/projects/shkaf-marketri-latun/2.webp',
      '/images/projects/shkaf-marketri-latun/3.webp',
    ],
    description:
      'Проект фабрики ViVaKitchen: распашные двери с маркетри из шпона чередуются с глянцевыми фасадами, инкрустированными натуральной латунью. Работа со шпоном делает шкаф самостоятельным элементом интерьера.',
    materials: ['Шпон (маркетри)', 'Глянцевые фасады', 'Латунь'],
  },
  {
    slug: 'prihozhaya-shpon-latun',
    title: 'Прихожая: шпоновые панели и шкаф в эмали',
    category: 'Мебель для интерьера',
    cover: '/images/projects/prihozhaya-shpon-latun/1.webp',
    images: [
      '/images/projects/prihozhaya-shpon-latun/1.webp',
      '/images/projects/prihozhaya-shpon-latun/2.webp',
      '/images/projects/prihozhaya-shpon-latun/3.webp',
    ],
    description:
      'Проект фабрики ViVaKitchen: стеновые панели из шпона с подсветкой и латунным декором рядом со шкафом в супер матовой эмали. Подсветка и латунь добавляют композиции характер.',
    materials: ['Шпон', 'Супер матовая эмаль', 'Латунь', 'Подсветка'],
  },
];

export function projectOrigin(project: Project): string {
  return project.origin ?? DEFAULT_ORIGIN;
}

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
