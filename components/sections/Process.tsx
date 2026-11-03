import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';

const steps = [
  { n: '01', title: 'Знакомство', text: 'Вы присылаете готовый проект дизайнера или приезжаете в салон: знакомимся и обсуждаем задачу.' },
  { n: '02', title: 'Обсуждение', text: 'Уточняем задачу, материалы и пожелания.' },
  { n: '03', title: 'Проект', text: 'Составляем проект вместе с вами в салоне или адаптируем готовый проект дизайнера.' },
  { n: '04', title: 'Расчёт', text: 'Считаем стоимость в выбранной модели.' },
  { n: '05', title: 'Замер', text: 'После согласования проекта проводится профессиональный замер.' },
  { n: '06', title: 'Договор', text: 'Финализируем проект и заключаем договор.' },
  { n: '07', title: 'Производство', text: 'Передаём заказ фабрике ViVaKitchen.' },
  { n: '08', title: 'Доставка и монтаж', text: 'Организуем доставку и профессиональную сборку.' },
];

export function Process() {
  return (
    <Section tone="milk">
      <Heading level={2} eyebrow="Как проходит заказ">
        От размеров до установки
      </Heading>

      <ol className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <li key={step.n} className="border-t border-line pt-5">
            <span className="text-sm font-medium text-accent">{step.n}</span>
            <h3 className="mt-1 text-base font-semibold text-graphite">{step.title}</h3>
            <Text tone="muted" size="sm" className="mt-1.5">
              {step.text}
            </Text>
          </li>
        ))}
      </ol>
    </Section>
  );
}
