import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { CoverImage } from '@/components/ui/CoverImage';
import { TrackedCta } from '@/components/TrackedCta';
import { GalleryCard } from '@/components/GalleryCard';
import { materialsGallery } from '@/data/gallery';

export const metadata: Metadata = {
  title: 'Дизайнерам и архитекторам',
  description:
    'Работаем с готовыми дизайн-проектами: техническая адаптация, подбор материалов, производство на фабрике ViVaKitchen, доставка и монтаж.',
  alternates: { canonical: '/designers' },
};

const points = [
  {
    title: 'Работа по готовому проекту',
    text: 'Присылаете проект — мы разбираем задачу и оцениваем реализуемость на производстве ViVaKitchen.',
  },
  {
    title: 'Техническая адаптация',
    text: 'Адаптируем решения дизайнера под реальные технологические возможности фабрики.',
  },
  {
    title: 'Подбор материалов',
    text: 'Помогаем подобрать фасады, фурнитуру и материалы в рамках задуманной концепции.',
  },
  {
    title: 'Нестандартные решения',
    text: 'Обсуждаем нетиповые размеры и конфигурации — исходя из возможностей производства.',
  },
  {
    title: 'Сопровождение производства',
    text: 'Ведём проект от согласования до отгрузки с фабрики.',
  },
  {
    title: 'Доставка и монтаж',
    text: 'Организуем доставку и профессиональную сборку на объекте.',
  },
];

export default function DesignersPage() {
  return (
    <>
      <Section className="pt-10 md:pt-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="min-w-0">
            <Heading level={1} eyebrow="Дизайнерам и архитекторам">
              Реализуем проекты, разработанные вами
            </Heading>
            <Text tone="muted" className="mt-5">
              Работаем с готовыми дизайн-проектами и помогаем адаптировать идеи под реальные
              возможности производства ViVaKitchen.
            </Text>
            <TrackedCta href="/#calc" event="designer_cta_click" size="lg" className="mt-7">
              Обсудить проект
            </TrackedCta>
          </div>
          <CoverImage
            src="/images/projects/proekt-9997-kuhnya/2.webp"
            alt="Реализованный проект ViVaKitchen"
            ratio="aspect-[4/3]"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
        </div>
      </Section>

      <Section tone="milk">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point) => (
            <div key={point.title} className="border-t border-line pt-5">
              <h3 className="text-base font-semibold text-graphite">{point.title}</h3>
              <Text tone="muted" size="sm" className="mt-2">
                {point.text}
              </Text>
            </div>
          ))}
        </div>
      </Section>

      <Section id="materials">
        <Heading level={2} eyebrow="Материалы и возможности">
          С чем работает фабрика
        </Heading>
        <Text tone="muted" className="mt-3 max-w-2xl">
          Эмаль, натуральный шпон и шпон Fine-Line, фрезеровка, латунные вставки, зеркала,
          натуральная кожа. Что из этого реализуемо в вашем проекте, подскажем при оценке.
        </Text>
        <div className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {materialsGallery.map((item) => (
            <GalleryCard key={item.slug} item={item} />
          ))}
        </div>
        <p className="mt-8 text-sm text-stone">
          Изображения — визуализации фабрики, показывают материалы и стиль, а не готовые объекты.
        </p>
      </Section>
    </>
  );
}
