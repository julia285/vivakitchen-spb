import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { TrackedCta } from '@/components/TrackedCta';

export const metadata: Metadata = {
  title: 'Дизайнерам и архитекторам',
  description:
    'Работаем с готовыми дизайн-проектами: техническая адаптация, подбор материалов, производство на фабрике ViVakitchen, доставка и монтаж.',
  alternates: { canonical: '/designers' },
};

const points = [
  {
    title: 'Работа по готовому проекту',
    text: 'Присылаете проект — мы разбираем задачу и оцениваем реализуемость на производстве ViVakitchen.',
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
              возможности производства ViVakitchen.
            </Text>
            <TrackedCta href="/#calc" event="designer_cta_click" size="lg" className="mt-7">
              Обсудить проект
            </TrackedCta>
          </div>
          <PlaceholderImage label="работа с проектом дизайнера" ratio="aspect-[4/3]" />
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
    </>
  );
}
