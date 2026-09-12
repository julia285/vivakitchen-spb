import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Проекты',
  description:
    'Реализованные проекты кухонь, шкафов, гардеробных и мебели по индивидуальным заказам в Санкт-Петербурге.',
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  return (
    <Section className="pt-10 md:pt-14">
      <Heading level={1} eyebrow="Проекты">
        Реализованные проекты
      </Heading>
      <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
