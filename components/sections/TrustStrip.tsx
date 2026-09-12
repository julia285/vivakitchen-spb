import { Container } from '@/components/ui/Container';

const items = [
  '25 лет опыта',
  'Официальный салон ViVakitchen',
  'Проектирование бесплатно',
  'Доставка и монтаж',
];

export function TrustStrip() {
  return (
    <div className="border-b border-line bg-cream">
      <Container>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-4 py-6 text-sm font-medium text-graphite md:grid-cols-4 md:gap-4 md:py-7">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
