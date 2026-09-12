import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';
import { CoverImage } from '@/components/ui/CoverImage';
import { getProjectBySlug, projects } from '@/data/projects';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description ?? `${project.category}: ${project.title}`,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <Section className="pt-10 md:pt-14">
      <p className="text-xs font-medium uppercase tracking-wide text-stone">{project.category}</p>
      <Heading level={1} className="mt-2">
        {project.title}
      </Heading>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <CoverImage
          src={project.images[0]}
          alt={`${project.title} — фото 1`}
          isPlaceholder={project.isPlaceholder}
          ratio="aspect-[4/3]"
          className="md:col-span-2"
          sizes="100vw"
          priority
        />
        {project.images.slice(1).map((img, i) => (
          <CoverImage
            key={img}
            src={img}
            alt={`${project.title} — фото ${i + 2}`}
            isPlaceholder={project.isPlaceholder}
            ratio="aspect-[4/3]"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        ))}
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-3">
        <div className="md:col-span-2">
          {project.description ? <Text tone="muted">{project.description}</Text> : null}
        </div>

        {project.materials && project.materials.length > 0 ? (
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-graphite">Материалы</h2>
            <ul className="mt-3 flex flex-col gap-1.5 text-sm text-stone">
              {project.materials.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      <Button href="/#calc" size="lg" className="mt-10">
        Рассчитать похожий проект
      </Button>
    </Section>
  );
}
