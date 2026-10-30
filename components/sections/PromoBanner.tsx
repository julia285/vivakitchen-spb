import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { PhoneLink } from '@/components/ContactLinks';

export function PromoBanner() {
  const { promo } = siteConfig;
  if (!promo.enabled) return null;

  return (
    <section aria-label="Акция" className="bg-cream py-6 md:py-8">
      <Container>
        {/* Text is baked into the creative, so on phones crop to its left
            (text) side instead of shrinking the whole 3:1 image to illegibility. */}
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg sm:aspect-[2/1] md:aspect-[3/1]">
          <Image
            src={promo.image}
            alt={promo.alt}
            fill
            sizes="(min-width: 1320px) 1256px, 100vw"
            className="object-cover object-left"
          />
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
          <p className="text-sm text-stone">
            {promo.note} <PhoneLink className="font-medium text-graphite hover:text-accent" />
          </p>
          <Button href="/#calc" variant="secondary">
            Узнать условия
          </Button>
        </div>
      </Container>
    </section>
  );
}
