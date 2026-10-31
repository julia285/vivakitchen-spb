import { GalleryItem } from '@/data/gallery';
import { CoverImage } from '@/components/ui/CoverImage';
import { Text } from '@/components/ui/Text';

export function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <div>
      <CoverImage
        src={item.image}
        alt={`${item.title} — визуализация фабрики ViVaKitchen`}
        ratio="aspect-[3/2]"
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      />
      <h3 className="mt-3 text-base font-semibold text-graphite">{item.title}</h3>
      {item.text ? (
        <Text tone="muted" size="sm" className="mt-1.5">
          {item.text}
        </Text>
      ) : null}
    </div>
  );
}
