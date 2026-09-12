import { ReactNode } from 'react';
import clsx from '@/lib/clsx';

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={clsx('mx-auto w-full max-w-content px-5 md:px-8', className)}>{children}</div>;
}
