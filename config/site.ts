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
  // Operator of personal data (the business that owns the salon). Filled in
  // from the company card; while empty the privacy policy names the salon by
  // brand and address instead of leaving visible placeholders.
  // Taken from the company card the owner provided. Only what the law asks a
  // seller to publish (name, ИНН, ОГРНИП) — not the registered address (it is
  // a private flat), bank details or personal phone.
  legalName: 'ИП Погорелова Лариса Георгиевна',
  legalInn: '330301852976',
  legalOgrn: '325784700390696', // ОГРНИП
  legalAddress: '', // leave empty to use the salon address in documents

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
  // Wording follows the factory's own rule for dealer sites (dealer channel,
  // 23.09.2025): the homepage must plainly say "дилер, представитель ТМ".
  officialPartnerLine: 'Дилер, представитель ТМ ViVaKitchen в Санкт-Петербурге',

  // --- Contact ---
  // Phone is intentionally empty for now (the owner is deciding on a separate
  // business SIM). Every phone link/row disappears while this is ''; to bring
  // it back, set both values, e.g. '+7 (XXX) XXX-XX-XX' / 'tel:+7XXXXXXXXXX'.
  phone: '',
  phoneHref: '',
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

  // Seasonal promo banner on the homepage. Set `enabled: false` when the
  // promotion ends — nothing else needs to change. The creative has no
  // percentages or dates baked in, so it stays accurate until switched off.
  promo: {
    enabled: true as boolean,
    image: '/images/promo/new-year-banner.webp',
    alt: 'Новогодние скидки на кухни и шкафы ViVaKitchen. Встречайте Новый год в доме, о котором мечтали!',
    note: 'Условия акции уточняйте в салоне или оставьте заявку на сайте',
  },

  // --- Social ---
  // Instagram was removed on purpose: Meta is recognised as extremist in
  // Russia, and the salon won't advertise on or link to it.
  vk: 'https://vk.ru/sputnik_st',
  // Public Telegram account/channel of the salon, e.g. 'https://t.me/vivakitchenspb'.
  // (This is NOT the lead-notification bot — that one only sends to the owner.)
  telegram: '',
  // WhatsApp chat link, e.g. 'https://wa.me/79XXXXXXXXX' — the number is visible in
  // the link, so fill it only with the business number the owner chooses to publish.
  whatsapp: '',
  get socialLinks() {
    return [
      { label: 'VK', href: this.vk },
      { label: 'Telegram', href: this.telegram },
      { label: 'WhatsApp', href: this.whatsapp },
    ].filter((link) => link.href);
  },

  // --- Analytics / integrations (read from env, exposed here for convenience) ---
  yandexMetrikaId: process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID ?? '',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vivakitchenspb.ru',
} as const;

export type SiteConfig = typeof siteConfig;
