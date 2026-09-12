import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';

const reasons = [
  {
    title: '25 лет опыта',
    text: 'Мы работаем с мебелью около 25 лет и знаем весь путь проекта — от первых размеров до установки.',
  },
  {
    title: 'Можно прийти с готовым дизайн-проектом',
    text: 'Если проект уже разработан дизайнером, адаптируем его под реальные возможности производства.',
  },
  {
    title: 'Бесплатный проект и расчёт',
    text: 'Предварительное проектирование и расчёт стоимости выполняются бесплатно.',
  },
  {
    title: 'Сопровождение до установки',
    text: 'Замер, заказ на фабрику, доставка и профессиональный монтаж.',
  },
];

export function WhySalon() {
  return (
    <Section>
      <Heading level={2} eyebrow="Почему салон">
        Индивидуальный проект и сопровождение на каждом этапе
      </Heading>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {reasons.map((reason) => (
          <div key={reason.title} className="border-t border-line pt-5">
            <h3 className="text-lg font-semibold text-graphite">{reason.title}</h3>
            <Text tone="muted" className="mt-2">
              {reason.text}
            </Text>
          </div>
        ))}
      </div>
    </Section>
  );
}
