import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { CoverImage } from '@/components/ui/CoverImage';
import { RouteButton } from '@/components/RouteButton';
import { siteConfig } from '@/config/site';
import { salonPhotos } from '@/data/salon';

/**
 * Invitation to the salon: the point of the site is that people come, meet
 * and talk before anything is priced. Copy only states what the photos show
 * (exhibition kitchens, facade/material samples, drawers) — no invented claims.
 */
export function SalonShowroom() {
  const photos = [salonPhotos.front, salonPhotos.twoKitchens, salonPhotos.metal];

  return (
    <Section>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <Heading level={2} eyebrow={`Салон в ${siteConfig.mall}`}>
          Приезжайте познакомиться
        </Heading>
        <Link href="/about" className="text-sm font-medium text-accent hover:underline">
          О салоне →
        </Link>
      </div>

      <Text tone="muted" className="mt-4 max-w-2xl">
        В салоне можно увидеть выставочные кухни, подержать в руках образцы фасадов и материалов,
        открыть ящики и обсудить, как всё устроить под ваше пространство. Мы выслушаем ваши
        пожелания и подберём решение под ваш вкус, размер кухни и бюджет.
      </Text>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {photos.map((photo) => (
          <CoverImage
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            ratio="aspect-[4/3]"
            sizes="(min-width: 640px) 33vw, 100vw"
            credit={false}
          />
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
        <RouteButton />
        <span className="text-sm text-stone">
          {siteConfig.addressWithoutMall}
        </span>
      </div>
    </Section>
  );
}
