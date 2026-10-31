'use client';

import { ReactNode, useRef } from 'react';

/**
 * Horizontal scroll-snap row with arrow buttons. Swiping works natively on
 * touch devices; the buttons cover mouse users.
 */
export function ScrollRow({ children, label }: { children: ReactNode; label: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
  };

  const buttonClass =
    'flex h-10 w-10 items-center justify-center rounded-full border border-line bg-cream text-graphite transition-colors hover:border-graphite focus:outline-none focus-visible:ring-2 focus-visible:ring-accent';

  return (
    <div>
      <div
        ref={ref}
        role="region"
        aria-label={label}
        tabIndex={0}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
      <div className="mt-4 flex gap-2">
        <button type="button" onClick={() => scrollBy(-1)} aria-label="Назад" className={buttonClass}>
          <span aria-hidden>←</span>
        </button>
        <button type="button" onClick={() => scrollBy(1)} aria-label="Вперёд" className={buttonClass}>
          <span aria-hidden>→</span>
        </button>
      </div>
    </div>
  );
}
