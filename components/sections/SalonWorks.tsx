import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { CoverImage } from '@/components/ui/CoverImage';
import { ScrollRow } from '@/components/ui/ScrollRow';
import { salonProjects } from '@/data/projects';

/**
 * The salon's own finished work. Photos come from the clients (phone
 * shots), so they're shown small in a carousel rather than as big cards —
 * and the caption says where they come from instead of hiding it.
 */
export function SalonWorks() {
  // One frame per project: several shots of the same kitchen from one angle
  // look like repeats in a carousel; the rest are on the project page.
  if (salonProjects.length === 0) return null;

  return (
    <Section tone="cream">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <Heading level={2} eyebrow="Работы нашего салона">
          Наши проекты
        </Heading>
        <Button href="/projects" variant="secondary">
          Все проекты
        </Button>
      </div>

      <div className="mt-8">
        <ScrollRow label="Работы нашего салона">
          {salonProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="block w-[220px] shrink-0 snap-start sm:w-[260px]"
              aria-label={project.title}
            >
              <CoverImage
                src={project.cover}
                alt={project.title}
                ratio="aspect-[4/3]"
                sizes="260px"
                credit={project.credit !== false}
              />
            </Link>
          ))}
        </ScrollRow>
      </div>

      <p className="mt-4 text-sm text-stone">Фотографии работ присланы заказчиками; образцы сняты в нашем салоне.</p>
    </Section>
  );
}
