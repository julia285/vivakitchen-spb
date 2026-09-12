import Link from 'next/link';
import { Category } from '@/data/categories';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={category.href}
      className="group block overflow-hidden rounded border border-line bg-white transition-shadow duration-200 hover:shadow-lg"
    >
      <PlaceholderImage
        label={category.title}
        ratio="aspect-[5/4]"
        className="rounded-none transition-transform duration-200 group-hover:scale-[1.02]"
      />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-graphite">{category.title}</h3>
        <p className="mt-1.5 text-sm text-stone">{category.shortDescription}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent">
          Смотреть
          <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
