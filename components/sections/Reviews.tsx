import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';

export type Review = {
  author: string;
  text: string;
  source?: string;
};

/**
 * Prepared but not populated: the brief explicitly forbids fake reviews.
 * Pass a real `reviews` array (from Яндекс Карты or client feedback)
 * to render this section; until then it stays out of the page tree
 * (see app/page.tsx) rather than showing empty or placeholder quotes.
 */
export function Reviews({ reviews }: { reviews: Review[] }) {
  if (reviews.length === 0) return null;

  return (
    <Section tone="milk">
      <Heading level={2} eyebrow="Отзывы">
        Что говорят клиенты
      </Heading>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <figure key={review.author} className="rounded border border-line bg-white p-6">
            <blockquote>
              <Text tone="muted">{review.text}</Text>
            </blockquote>
            <figcaption className="mt-4 text-sm font-medium text-graphite">
              {review.author}
              {review.source ? <span className="text-stone"> · {review.source}</span> : null}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
