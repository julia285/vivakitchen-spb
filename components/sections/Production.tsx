import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { Video } from '@/components/ui/Video';

export function Production() {
  return (
    <Section tone="graphite">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="min-w-0">
          <Heading level={2} eyebrow="Производство" tone="light">
            Производство ViVakitchen
          </Heading>
          <Text tone="light" className="mt-5">
            Мебель производит фабрика ViVakitchen. Наш салон в Санкт-Петербурге сопровождает
            проект от разработки до установки: обсуждает задачу, готовит проект и расчёт,
            передаёт заказ на фабрику и организует доставку и монтаж.
          </Text>
        </div>
        <Video src="/video/production.mp4" poster="/video/production-poster.jpg" />
      </div>
    </Section>
  );
}
