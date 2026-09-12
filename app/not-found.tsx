import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <Section className="py-24 text-center">
      <Heading level={1}>Страница не найдена</Heading>
      <Text tone="muted" className="mx-auto mt-4 max-w-md">
        Такой страницы не существует. Возможно, она была перемещена.
      </Text>
      <Button href="/" size="lg" className="mt-8">
        На главную
      </Button>
    </Section>
  );
}
