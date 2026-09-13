import clsx from '@/lib/clsx';

/**
 * Explicit stand-in for a real photo. Renders a soft gradient block with
 * a visible label instead of a stock photo, per the brief: no random
 * stock imagery, and every placeholder must be obviously temporary.
 * Swap for a real <Image> once ViVaKitchen photos are in /public/images.
 */
export function PlaceholderImage({
  label,
  className,
  ratio = 'aspect-[4/3]',
}: {
  label: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      className={clsx(
        ratio,
        'relative flex items-end overflow-hidden rounded bg-gradient-to-br from-milk via-greige/40 to-stone/30',
        className,
      )}
    >
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #2B2A28 0, #2B2A28 1px, transparent 1px, transparent 14px)',
        }}
        aria-hidden
      />
      <span className="relative m-3 inline-flex items-center gap-1.5 rounded-sm bg-graphite/85 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-cream">
        Фото: {label}
      </span>
    </div>
  );
}
