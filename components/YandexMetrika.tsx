import Script from 'next/script';
import { siteConfig } from '@/config/site';

/** Renders nothing until NEXT_PUBLIC_YANDEX_METRIKA_ID is set (see .env.example). */
export function YandexMetrika() {
  const id = siteConfig.yandexMetrikaId;
  if (!id) return null;

  return (
    <Script id="yandex-metrika" strategy="afterInteractive">
      {`
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(${Number(id)}, "init", { ssr: true, webvisor: false, clickmap: true, accurateTrackBounce: true, trackLinks: true });
      `}
    </Script>
  );
}
