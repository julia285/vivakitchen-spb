import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';

const reasons = [
  {
    title: 'Более 25 лет опыта и более 2500 клиентов',
    text: 'Мы работаем с мебелью более 25 лет, многие клиенты возвращаются к нам снова, и мы знаем весь путь проекта — от первых размеров до установки. Постоянно совершенствуемся: бываем на выставках, следим за новинками и трендами, выбираем качественные материалы.',
  },
  {
    title: 'Можно прийти с готовым дизайн-проектом',
    text: 'Если проект уже разработан дизайнером, адаптируем его под возможности производства и считаем в выбранной модели.',
  },
  {
    title: 'Рассчитаем ваш проект или составим вместе',
    text: 'Есть проект дизайнера — считаем его в выбранной модели и присылаем расчёт. Проекта нет — приглашаем в салон: знакомимся, обсуждаем задачу и составляем проект вместе.',
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
