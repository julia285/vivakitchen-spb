import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/config/site';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { StickyMobileCta } from '@/components/StickyMobileCta';
import { UtmCapture } from '@/components/UtmCapture';
import { YandexMetrika } from '@/components/YandexMetrika';

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.brandName} — кухни и мебель на заказ в Санкт-Петербурге`,
    template: `%s — ${siteConfig.brandShortName}`,
  },
  description:
    'Кухни, шкафы, гардеробные и мебель по индивидуальным проектам. Официальный салон ViVaKitchen в Санкт-Петербурге. Проектирование и предварительный расчёт бесплатно.',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: siteConfig.brandName,
    title: `${siteConfig.brandName} — кухни и мебель на заказ`,
    description: 'Кухни, шкафы, гардеробные и мебель по индивидуальным проектам в Санкт-Петербурге.',
    url: siteConfig.siteUrl,
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.brandName,
    image: undefined,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.addressLine,
      addressLocality: siteConfig.city,
      addressCountry: 'RU',
    },
    telephone: siteConfig.phone || undefined,
    email: siteConfig.email || undefined,
    url: siteConfig.siteUrl,
    // Mirrors siteConfig.workingHours ("Пн–Вс 10:00–20:00") — update both
    // together if hours change.
    ...(siteConfig.workingHours
      ? {
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ],
            opens: '10:00',
            closes: '20:00',
          },
        }
      : {}),
    ...(siteConfig.geo.latitude && siteConfig.geo.longitude
      ? {
          geo: {
            '@type': 'GeoCoordinates',
            latitude: siteConfig.geo.latitude,
            longitude: siteConfig.geo.longitude,
          },
        }
      : {}),
  };

  return (
    <html lang="ru" className={manrope.variable}>
      <body className="min-h-screen bg-cream font-sans text-graphite antialiased pb-16 lg:pb-0">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <UtmCapture />
        <YandexMetrika />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyMobileCta />
      </body>
    </html>
  );
}
