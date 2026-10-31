import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { PhoneLink } from '@/components/ContactLinks';

export function PromoBanner() {
  const { promo } = siteConfig;
  if (!promo.enabled) return null;

  return (
    <section aria-label="Акция" className="bg-cream py-5 md:py-6">
      <Container>
        {/* Compact on desktop: banner and note sit side by side so the promo
            doesn't outweigh the hero. Text is baked into the creative, so on
            phones crop to its left (text) side instead of shrinking the whole
            3:1 image to illegibility. */}
        <div className="grid items-center gap-4 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg sm:aspect-[2/1] md:aspect-[3/1]">
            <Image
              src={promo.image}
              alt={promo.alt}
              fill
              sizes="(min-width: 1320px) 750px, (min-width: 1024px) 60vw, 100vw"
              className="object-cover object-left"
            />
          </div>

          <div className="flex flex-col items-start gap-3">
            <p className="text-sm text-stone">
              {promo.note} <PhoneLink className="font-medium text-graphite hover:text-accent" />
            </p>
            <Button href="/#calc" variant="secondary">
              Узнать условия
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
