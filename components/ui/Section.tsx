import { ReactNode } from 'react';
import clsx from '@/lib/clsx';
import { Container } from './Container';

export function Section({
  children,
  className,
  containerClassName,
  id,
  tone = 'cream',
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  tone?: 'cream' | 'milk' | 'graphite';
}) {
  const toneClass =
    tone === 'graphite' ? 'bg-graphite text-cream' : tone === 'milk' ? 'bg-milk' : 'bg-cream';

  return (
    <section id={id} className={clsx('py-16 md:py-24', toneClass, className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
