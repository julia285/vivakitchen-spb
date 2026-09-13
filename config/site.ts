/**
 * Central site configuration. Every editable business fact lives here —
 * nothing below should be hardcoded again inside components or pages.
 *
 * Brand name is not finalized (final naming/rights are being confirmed
 * with the factory), so it's a config value, not a hardcoded string —
 * see brandName / officialPartnerLine.
 */

export const siteConfig = {
  // --- Brand ---
  brandName: 'ViVaKitchen Санкт-Петербург',
  brandShortName: 'ViVaKitchen',
  legalName: '', // TODO: уточнить у владельца (ИП/ООО, точное юр. название)

  // Logo file dimensions are baked in so <Image> can size it without
  // layout shift — update both if the logo file changes proportions.
  logo: {
    src: '/images/brand/logo.png',
    width: 392,
    height: 64,
  },

  // Editable claim of relationship to the factory — kept as a single
  // sentence so it can be changed instantly if the factory agreement
  // changes wording (see item 50 of the brief: no trademark claims yet).
  officialPartnerLine: 'Официальный салон ViVaKitchen в Санкт-Петербурге',

  // --- Contact ---
  phone: '+7 (921) 420-66-78',
  phoneHref: 'tel:+79214206678',
  email: 'vivakitchenspb@yandex.ru',
  workingHours: 'Пн–Вс 10:00–20:00',

  // --- Address ---
  // `mall` is kept separate because several sections show it on its own
  // (as a heading/label) right next to the rest of the address — use
  // `addressWithoutMall` there to avoid repeating "МЦ «Ланской»" twice.
  // `fullAddress` is the single complete string for places that show
  // the address as one line with no separate mall label (e.g. footer).
  city: 'Санкт-Петербург',
  addressLine: 'ул. Студенческая, 10',
  mall: 'МЦ «Ланской»',
  floor: '2 этаж, секция B56',
  get addressWithoutMall() {
    return `${this.city}, ${this.addressLine}, ${this.floor}`;
  },
  get fullAddress() {
    return `${this.city}, ${this.addressLine}, ${this.mall}, ${this.floor}`;
  },

  // Coordinates of the МЦ «Ланской» building (Студенческая ул., 10) — good
  // enough for a map pin and LocalBusiness structured data. Not the exact
  // in-mall unit, which Yandex Maps/2ГИС don't resolve to separately.
  geo: {
    latitude: 59.989265 as number | null,
    longitude: 30.327618 as number | null,
  },

  yandexMapsUrl: 'https://yandex.ru/maps/?rtext=~59.989265,30.327618&rtt=auto',
  yandexMapsEmbedSrc: 'https://yandex.ru/map-widget/v1/?ll=30.327618%2C59.989265&z=17&pt=30.327618,59.989265,pm2rdm',

  // Official interactive floor plan of МЦ «Ланской» — linked rather than
  // copied onto this site, since it's the mall's own tool and stays
  // current (unit numbers can change) without us maintaining a copy.
  mallMapUrl: 'https://www.tk-lanskoy.ru/map/',

  // --- Social ---
  instagram: 'https://www.instagram.com/vivakitchenspb',
  vk: 'https://vk.ru/sputnik_st',

  // --- Analytics / integrations (read from env, exposed here for convenience) ---
  yandexMetrikaId: process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID ?? '',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vivakitchen-spb.ru',
} as const;

export type SiteConfig = typeof siteConfig;
