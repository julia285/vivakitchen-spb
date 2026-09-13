'use client';

import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';
import { CoverImage } from '@/components/ui/CoverImage';
import { trackEvent } from '@/lib/analytics';

const points = [
  'Работа по готовому проекту',
  'Техническая адаптация под возможности производства',
  'Подбор материалов и нестандартные решения',
  'Расчёт, производство, доставка и монтаж',
];

export function Designers() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="min-w-0">
          <Heading level={2} eyebrow="Дизайнерам и архитекторам">
            Реализуем проекты, разработанные вами
          </Heading>
          <Text tone="muted" className="mt-5">
            Работаем с готовыми дизайн-проектами и помогаем адаптировать идеи под реальные
            возможности производства.
          </Text>

          <ul className="mt-6 flex flex-col gap-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-graphite/85">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                {point}
              </li>
            ))}
          </ul>

          <Button
            href="/designers"
            size="lg"
            variant="secondary"
            className="mt-8"
            onClick={() => trackEvent('designer_cta_click')}
          >
            Обсудить проект
          </Button>
        </div>

        <CoverImage
          src="/images/projects/proekt-9284/1.webp"
          alt="Реализованный проект ViVaKitchen"
          ratio="aspect-[4/3]"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
    </Section>
  );
}
