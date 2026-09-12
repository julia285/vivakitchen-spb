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
  brandName: 'ViVakitchen Санкт-Петербург',
  brandShortName: 'ViVakitchen',
  legalName: '', // TODO: уточнить у владельца (ИП/ООО, точное юр. название)

  // Editable claim of relationship to the factory — kept as a single
  // sentence so it can be changed instantly if the factory agreement
  // changes wording (see item 50 of the brief: no trademark claims yet).
  officialPartnerLine: 'Официальный салон ViVakitchen в Санкт-Петербурге',

  // --- Contact ---
  phone: '', // TODO: уточнить у владельца
  phoneHref: '', // TODO: tel: link, e.g. tel:+78121234567
  email: '', // TODO: уточнить у владельца (действующая почта салона)
  workingHours: '', // TODO: уточнить у владельца (напр. "Пн–Вс 10:00–20:00")

  // --- Address ---
  // `mall` is kept separate because several sections show it on its own
  // (as a heading/label) right next to the rest of the address — use
  // `addressWithoutMall` there to avoid repeating "МЦ «Ланской»" twice.
  // `fullAddress` is the single complete string for places that show
  // the address as one line with no separate mall label (e.g. footer).
  city: 'Санкт-Петербург',
  addressLine: 'ул. Студенческая, 10',
  mall: 'МЦ «Ланской»',
  floor: '2 этаж',
  get addressWithoutMall() {
    return `${this.city}, ${this.addressLine}, ${this.floor}`;
  },
  get fullAddress() {
    return `${this.city}, ${this.addressLine}, ${this.mall}, ${this.floor}`;
  },

  // TODO: подтвердить точные координаты для карты и structured data.
  geo: {
    latitude: null as number | null,
    longitude: null as number | null,
  },

  // Yandex Maps embed / route builder — org id TODO once the showroom
  // is confirmed on Yandex Maps (or a manual pin URL is created).
  yandexMapsUrl: '', // TODO: уточнить — ссылка на организацию/точку на Яндекс Картах
  yandexMapsEmbedSrc: '', // TODO: вставить embed-ссылку виджета карты

  // --- Social ---
  instagram: '', // TODO: уточнить у владельца
  vk: '', // TODO: уточнить у владельца

  // --- Analytics / integrations (read from env, exposed here for convenience) ---
  yandexMetrikaId: process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID ?? '',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vivakitchen-spb.ru',
} as const;

export type SiteConfig = typeof siteConfig;
