import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';
import { CoverImage } from '@/components/ui/CoverImage';
import { ProjectCard } from '@/components/ProjectCard';
import { CollectionCard } from '@/components/CollectionCard';
import { projects } from '@/data/projects';
import { collections, collectionStyleLabels, CollectionStyle } from '@/data/collections';

export const metadata: Metadata = {
  title: 'Кухни на заказ в Санкт-Петербурге',
  description:
    'Кухни по индивидуальному проекту от фабрики ViVaKitchen. Бесплатное проектирование и предварительный расчёт.',
  alternates: { canonical: '/kitchens' },
};

const collectionStyles: CollectionStyle[] = ['classic', 'modern'];

export default function KitchensPage() {
  const kitchenProjects = projects.filter((p) => p.category === 'Кухня');
  const furnitureProjects = projects.filter((p) => p.category === 'Мебель для интерьера');

  return (
    <>
      <Section className="pt-10 md:pt-14" tone="cream">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="min-w-0">
            <Heading level={1} eyebrow="Кухни">
              Кухни по индивидуальному проекту
            </Heading>
            <Text tone="muted" className="mt-5">
              Каждая кухня проектируется под конкретное помещение — размеры, планировку и
              пожелания по материалам. Изготовление — на фабрике ViVaKitchen, сопровождение
              проекта — в нашем салоне в Санкт-Петербурге.
            </Text>
            <Button href="/#calc" size="lg" className="mt-7">
              Рассчитать проект
            </Button>
          </div>
          <CoverImage
            src="/images/projects/proekt-artdom-kuhnya/1.webp"
            alt="Кухня ViVaKitchen"
            ratio="aspect-[4/3]"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
        </div>
      </Section>

      <Section tone="cream" id="collections">
        <Heading level={2} eyebrow="Коллекции фасадов">
          Выберите стиль кухни
        </Heading>
        <Text tone="muted" className="mt-3 max-w-2xl">
          Фабрика ViVaKitchen выпускает больше 50 коллекций кухонь. Здесь — несколько для примера.
          Расположение шкафов, полок и ящиков, фасады и цвета подбираются под ваше помещение, а
          помочь с выбором и проектом может наш салон.
        </Text>

        {collectionStyles.map((style) => (
          <div key={style} className="mt-10">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-graphite">
              {collectionStyleLabels[style]}
            </h3>
            <div className="mt-4 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {collections
                .filter((c) => c.style === style)
                .map((collection) => (
                  <CollectionCard key={collection.slug} collection={collection} />
                ))}
            </div>
          </div>
        ))}

        <p className="mt-8 text-sm text-stone">
          Изображения — визуализации фабрики, показывают стиль коллекций, а не готовые объекты.
        </p>
        <Button href="/#calc" className="mt-6">
          Подобрать кухню
        </Button>
      </Section>

      <Section tone="milk" id="furniture">
        <Heading level={2} eyebrow="Проекты">
          Кухни
        </Heading>
        <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {kitchenProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {furnitureProjects.length > 0 ? (
          <>
            <Heading level={2} eyebrow="Также делаем" className="mt-16">
              Мебель для интерьера
            </Heading>
            <Text tone="muted" className="mt-3 max-w-xl">
              Помимо кухонь, проектируем корпусную мебель для гостиной, прихожей и других
              помещений — как часть комплексной меблировки квартиры.
            </Text>
            <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {furnitureProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </>
        ) : null}
      </Section>
    </>
  );
}
