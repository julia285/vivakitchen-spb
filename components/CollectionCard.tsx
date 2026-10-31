import { Collection } from '@/data/collections';
import { CoverImage } from '@/components/ui/CoverImage';

export function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <div>
      <CoverImage
        src={collection.image}
        alt={`Коллекция ${collection.name} — визуализация фабрики ViVaKitchen`}
        ratio="aspect-[3/2]"
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
      />
      <h3 className="mt-3 text-base font-semibold text-graphite">{collection.name}</h3>
    </div>
  );
}
