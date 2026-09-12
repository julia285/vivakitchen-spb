import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { CategoryCard } from '@/components/CategoryCard';
import { categories } from '@/data/categories';

export function Categories() {
  return (
    <Section>
      <Heading level={2} eyebrow="Что мы делаем">
        Кухни, шкафы, гардеробные и мебель для интерьера
      </Heading>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </Section>
  );
}
