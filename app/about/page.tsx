import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { CoverImage } from '@/components/ui/CoverImage';
import { Production } from '@/components/sections/Production';
import { siteConfig } from '@/config/site';
import { salonPhotos } from '@/data/salon';

export const metadata: Metadata = {
  title: 'О салоне',
  description: `${siteConfig.officialPartnerLine}. Более 25 лет работы с мебелью в Санкт-Петербурге.`,
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-10 md:pt-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="min-w-0">
            <Heading level={1} eyebrow="О салоне">
              Мебелью мы занимаемся более 25 лет
            </Heading>
            <Text tone="muted" className="mt-5">
              За это время менялись материалы и технологии, но принцип работы остался прежним:
              сначала услышать ваши пожелания, затем подобрать кухню под ваш вкус, размер
              помещения и бюджет — так, чтобы она хорошо выглядела и была удобна в реальной жизни.
            </Text>
            <Text tone="muted" className="mt-4">
              Мы сопровождаем проект от первого разговора до установки и остаёмся на связи после.
              Многие клиенты возвращаются к нам за новыми проектами.
            </Text>
            <Text tone="muted" className="mt-4">
              Мы постоянно совершенствуемся: бываем на отраслевых выставках, следим за новинками
              и трендами, улучшаем свою работу и выбираем качественные материалы и комплектующие.
            </Text>
            {/* TODO: когда владелица пришлёт цифры — добавить «N обслуженных клиентов» и
                процент вернувшихся; без цифр общих утверждений о «высокой лояльности» не пишем. */}
            <Text tone="muted" className="mt-4">
              Сейчас мы — {siteConfig.officialPartnerLine.replace(/^./, (c) => c.toLowerCase())}.
              Салон находится в {siteConfig.mall}, {siteConfig.city}.
            </Text>
          </div>
          <CoverImage
            src={salonPhotos.front.src}
            alt={salonPhotos.front.alt}
            ratio="aspect-[4/3]"
            sizes="(min-width: 1024px) 50vw, 100vw"
            credit={false}
            priority
          />
        </div>
      </Section>

      <Production />

      <Section tone="milk">
        <Heading level={2} eyebrow="Салон">
          Фото салона
        </Heading>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[salonPhotos.samples, salonPhotos.twoKitchens, salonPhotos.darkWood, salonPhotos.metal].map((photo) => (
            <CoverImage
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              ratio="aspect-[4/3]"
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              credit={false}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
