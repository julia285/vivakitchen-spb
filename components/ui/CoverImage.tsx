import Image from 'next/image';
import clsx from '@/lib/clsx';
import { PlaceholderImage } from './PlaceholderImage';

/**
 * Renders a real photo when one is available, falling back to the
 * labeled placeholder box otherwise — so content can be added
 * incrementally (see data/projects.ts, data/categories.ts) without
 * touching the components that render it.
 *
 * Every real photo carries a "Бренд ViVaKitchen" credit: the factory's
 * content-usage rules (dealer channel, 23.09.2025) require a readable
 * reference to the manufacturer under any of its images or videos.
 */
export function CoverImage({
  src,
  alt,
  isPlaceholder,
  ratio = 'aspect-[4/3]',
  className,
  sizes = '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw',
  priority,
  credit = true,
}: {
  src: string;
  alt: string;
  isPlaceholder?: boolean;
  ratio?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Show the "Бренд ViVaKitchen" credit; off for the salon's own photos. */
  credit?: boolean;
}) {
  if (isPlaceholder || !src) {
    return <PlaceholderImage label={alt} ratio={ratio} className={className} />;
  }

  return (
    <div className={clsx(ratio, 'relative overflow-hidden rounded bg-milk', className)}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      {credit ? (
        <span className="absolute bottom-2 left-2 rounded-sm bg-graphite/70 px-2 py-0.5 text-[11px] leading-tight text-cream">
          Бренд ViVaKitchen
        </span>
      ) : null}
    </div>
  );
}
