import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { ProjectCard } from '@/components/ProjectCard';
import { featuredProjects } from '@/data/projects';

export function FeaturedProjects() {
  return (
    <Section tone="milk">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <Heading level={2} eyebrow="Реализованные проекты">
          Кухни, шкафы и мебель, которые мы спроектировали
        </Heading>
        <Button href="/projects" variant="secondary">
          Все проекты
        </Button>
      </div>

      <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} size={i === 0 ? 'lg' : 'md'} />
        ))}
      </div>
    </Section>
  );
}
