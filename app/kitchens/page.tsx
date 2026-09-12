import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Кухни на заказ в Санкт-Петербурге',
  description:
    'Кухни по индивидуальному проекту от фабрики ViVakitchen. Бесплатное проектирование и предварительный расчёт.',
  alternates: { canonical: '/kitchens' },
};

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
              пожелания по материалам. Изготовление — на фабрике ViVakitchen, сопровождение
              проекта — в нашем салоне в Санкт-Петербурге.
            </Text>
            <Button href="/#calc" size="lg" className="mt-7">
              Рассчитать проект
            </Button>
          </div>
          <PlaceholderImage label="кухня ViVakitchen" ratio="aspect-[4/3]" />
        </div>
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
