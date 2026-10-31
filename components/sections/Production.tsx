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
            Производство ViVaKitchen
          </Heading>
          <Text tone="light" className="mt-5">
            Мебель производит фабрика ViVaKitchen. Наш салон в Санкт-Петербурге сопровождает
            проект от разработки до установки: обсуждает задачу, готовит проект и расчёт,
            передаёт заказ на фабрику и организует доставку и монтаж.
          </Text>
          {/* Facts below come from the factory's own "О компании" page. */}
          <ul className="mt-6 grid gap-2 text-sm text-cream/80 sm:grid-cols-2">
            <li>Производство в г. Жлобин, Беларусь</li>
            <li>Фабрика на рынке больше 19 лет</li>
            <li>Более 70 салонов в России и СНГ</li>
            <li>Продукция соответствует ГОСТ 16371-93</li>
          </ul>
        </div>
        <Video src="/video/production.mp4" poster="/video/production-poster.jpg" />
      </div>
    </Section>
  );
}
