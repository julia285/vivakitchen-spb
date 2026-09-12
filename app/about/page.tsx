import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { Production } from '@/components/sections/Production';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'О салоне',
  description: `${siteConfig.officialPartnerLine}. Около 25 лет работы с мебелью в Санкт-Петербурге.`,
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-10 md:pt-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="min-w-0">
            <Heading level={1} eyebrow="О салоне">
              Мебелью мы занимаемся около 25 лет
            </Heading>
            <Text tone="muted" className="mt-5">
              За это время менялись фабрики, материалы и технологии, но принцип работы остался
              прежним: сначала понять задачу клиента, затем найти решение, которое будет хорошо
              выглядеть и удобно работать в реальном пространстве.
            </Text>
            <Text tone="muted" className="mt-4">
              Сейчас мы — {siteConfig.officialPartnerLine.replace(/^./, (c) => c.toLowerCase())}.
              Салон находится в {siteConfig.mall}, {siteConfig.city}.
            </Text>
          </div>
          <PlaceholderImage label="салон / владелец" ratio="aspect-[4/3]" />
        </div>
      </Section>

      <Production />

      <Section tone="milk">
        <Heading level={2} eyebrow="Салон">
          Фото салона
        </Heading>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <PlaceholderImage label="интерьер салона" ratio="aspect-[4/3]" />
          <PlaceholderImage label="выставочные образцы" ratio="aspect-[4/3]" />
          <PlaceholderImage label="владелец салона" ratio="aspect-[4/3]" />
        </div>
      </Section>
    </>
  );
}
