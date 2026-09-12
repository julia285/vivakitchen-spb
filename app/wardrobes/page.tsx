import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';
import { CoverImage } from '@/components/ui/CoverImage';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Шкафы и гардеробные на заказ в Санкт-Петербурге',
  description:
    'Встроенные и корпусные шкафы, гардеробные комнаты по индивидуальному проекту. Бесплатное проектирование и расчёт.',
  alternates: { canonical: '/wardrobes' },
};

export default function WardrobesPage() {
  const wardrobeProjects = projects.filter((p) => p.category === 'Шкаф');
  const dressingRoomProjects = projects.filter((p) => p.category === 'Гардеробная');

  return (
    <>
      <Section className="pt-10 md:pt-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="min-w-0">
            <Heading level={1} eyebrow="Шкафы и гардеробные">
              Шкафы и гардеробные под ваше пространство
            </Heading>
            <Text tone="muted" className="mt-5">
              Встроенные шкафы, корпусные шкафы и гардеробные комнаты проектируются под
              конкретную нишу или помещение — с учётом реальной эргономики хранения.
            </Text>
            <Button href="/#calc" size="lg" className="mt-7">
              Рассчитать проект
            </Button>
          </div>
          <CoverImage
            src="/images/projects/proekt-artdom-shkaf/1.webp"
            alt="Шкаф ViVakitchen"
            ratio="aspect-[4/3]"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
        </div>
      </Section>

      <Section tone="milk">
        <Heading level={2} eyebrow="Проекты">
          Шкафы
        </Heading>
        <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {wardrobeProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section id="dressing-rooms">
        <Heading level={2} eyebrow="Проекты">
          Гардеробные
        </Heading>
        <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {dressingRoomProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>
    </>
  );
}
