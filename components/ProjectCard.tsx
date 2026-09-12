'use client';

import Link from 'next/link';
import { Project } from '@/data/projects';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { trackEvent } from '@/lib/analytics';
import clsx from '@/lib/clsx';

export function ProjectCard({ project, size = 'md' }: { project: Project; size?: 'md' | 'lg' }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block"
      onClick={() => trackEvent('project_open', { slug: project.slug })}
    >
      <PlaceholderImage
        label={project.title}
        ratio={size === 'lg' ? 'aspect-[4/3]' : 'aspect-[5/4]'}
        className="transition-transform duration-200 group-hover:scale-[1.01]"
      />
      <div className="mt-3">
        <p className="text-xs font-medium uppercase tracking-wide text-stone">{project.category}</p>
        <h3 className={clsx('mt-1 font-semibold text-graphite', size === 'lg' ? 'text-xl' : 'text-base')}>
          {project.title}
        </h3>
        <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-accent">
          Смотреть проект
          <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
