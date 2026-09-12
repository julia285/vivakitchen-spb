import { ReactNode, createElement } from 'react';
import clsx from '@/lib/clsx';

type Level = 1 | 2 | 3 | 4;

const sizes: Record<Level, string> = {
  1: 'text-4xl md:text-6xl leading-[1.05] tracking-tight',
  2: 'text-3xl md:text-4xl leading-tight tracking-tight',
  3: 'text-xl md:text-2xl leading-snug',
  4: 'text-lg leading-snug',
};

export function Heading({
  level = 2,
  children,
  className,
  eyebrow,
  tone = 'dark',
}: {
  level?: Level;
  children: ReactNode;
  className?: string;
  eyebrow?: string;
  tone?: 'dark' | 'light';
}) {
  const tag = `h${level}`;
  const color = tone === 'light' ? 'text-cream' : 'text-graphite';

  return (
    <div>
      {eyebrow ? (
        <p
          className={clsx(
            'mb-3 text-xs font-medium uppercase tracking-[0.14em]',
            tone === 'light' ? 'text-greige' : 'text-stone',
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      {createElement(tag, { className: clsx('font-semibold', color, sizes[level], className) }, children)}
    </div>
  );
}
