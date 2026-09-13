'use client';

import { useState } from 'react';
import { trackEvent } from '@/lib/analytics';

/**
 * Lazy video block: nothing loads until the viewer presses play, so the
 * factory video never adds weight to first render (see brief: don't
 * load heavy video on initial page load).
 */
export function Video({ src, poster }: { src?: string; poster?: string }) {
  const [playing, setPlaying] = useState(false);

  if (!src) {
    return (
      <div className="flex aspect-video items-center justify-center rounded-lg bg-graphite text-cream/70">
        <p className="px-6 text-center text-sm">
          TODO: вставить ролик о производстве ViVaKitchen (файл или ссылка на хостинг видео)
        </p>
      </div>
    );
  }

  if (!playing) {
    return (
      <button
        type="button"
        onClick={() => {
          setPlaying(true);
          trackEvent('video_play');
        }}
        aria-label="Воспроизвести видео о производстве ViVaKitchen"
        className="group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg bg-graphite"
      >
        {poster ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={poster} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" />
        ) : null}
        <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-cream/90 transition-transform duration-200 group-hover:scale-105">
          <span className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-graphite" />
        </span>
      </button>
    );
  }

  return (
    <div className="aspect-video overflow-hidden rounded-lg bg-black">
      <video src={src} controls autoPlay className="h-full w-full" />
    </div>
  );
}
