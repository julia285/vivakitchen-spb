import Image from 'next/image';
import clsx from '@/lib/clsx';
import { PlaceholderImage } from './PlaceholderImage';

/**
 * Renders a real photo when one is available, falling back to the
 * labeled placeholder box otherwise — so content can be added
 * incrementally (see data/projects.ts, data/categories.ts) without
 * touching the components that render it.
 */
export function CoverImage({
  src,
  alt,
  isPlaceholder,
  ratio = 'aspect-[4/3]',
  className,
  sizes = '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw',
  priority,
}: {
  src: string;
  alt: string;
  isPlaceholder?: boolean;
  ratio?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (isPlaceholder || !src) {
    return <PlaceholderImage label={alt} ratio={ratio} className={className} />;
  }

  return (
    <div className={clsx(ratio, 'relative overflow-hidden rounded bg-milk', className)}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </div>
  );
}
