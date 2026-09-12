import { siteConfig } from '@/config/site';

export function YandexMap({ className }: { className?: string }) {
  if (!siteConfig.yandexMapsEmbedSrc) {
    return (
      <div className={`flex aspect-[4/3] items-center justify-center rounded border border-line bg-milk p-6 text-center ${className ?? ''}`}>
        <p className="text-sm text-stone">
          TODO: подключить embed-ссылку Яндекс Карт для {siteConfig.fullAddress}
        </p>
      </div>
    );
  }

  return (
    <iframe
      src={siteConfig.yandexMapsEmbedSrc}
      className={`aspect-[4/3] w-full rounded border border-line ${className ?? ''}`}
      loading="lazy"
      title={`Карта: ${siteConfig.fullAddress}`}
    />
  );
}
