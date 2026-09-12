import { ReactNode } from 'react';
import clsx from '@/lib/clsx';

export function Text({
  children,
  className,
  tone = 'dark',
  size = 'base',
}: {
  children: ReactNode;
  className?: string;
  tone?: 'dark' | 'light' | 'muted';
  size?: 'sm' | 'base' | 'lg';
}) {
  const color = tone === 'light' ? 'text-cream/85' : tone === 'muted' ? 'text-stone' : 'text-graphite/80';
  const sizeClass = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-base';

  return <p className={clsx(sizeClass, 'leading-relaxed', color, className)}>{children}</p>;
}
