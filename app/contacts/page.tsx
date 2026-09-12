import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { PhoneLink, EmailLink } from '@/components/ContactLinks';
import { RouteButton } from '@/components/RouteButton';
import { YandexMap } from '@/components/YandexMap';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Контакты',
  description: `${siteConfig.mall}, ${siteConfig.fullAddress}. Телефон, email и режим работы салона ${siteConfig.brandShortName}.`,
  alternates: { canonical: '/contacts' },
};

export default function ContactsPage() {
  return (
    <Section className="pt-10 md:pt-14">
      <Heading level={1} eyebrow="Контакты">
        {siteConfig.brandShortName}
      </Heading>

      <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-stone">Адрес</h2>
            <Text className="mt-2">{siteConfig.mall}</Text>
            <Text tone="muted">{siteConfig.addressWithoutMall}</Text>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-stone">Контакты</h2>
            <div className="mt-2 flex flex-col gap-1.5 text-base">
              <PhoneLink className="font-medium text-graphite hover:text-accent" />
              <EmailLink className="text-graphite/85 hover:text-accent" />
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-stone">Режим работы</h2>
            <Text tone="muted" className="mt-2">
              {siteConfig.workingHours || 'TODO: уточнить режим работы'}
            </Text>
          </div>

          {(siteConfig.instagram || siteConfig.vk) && (
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-stone">Соцсети</h2>
              <div className="mt-2 flex flex-col gap-1.5 text-base">
                {siteConfig.instagram ? (
                  <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="text-graphite/85 hover:text-accent">
                    Instagram
                  </a>
                ) : null}
                {siteConfig.vk ? (
                  <a href={siteConfig.vk} target="_blank" rel="noreferrer" className="text-graphite/85 hover:text-accent">
                    VK
                  </a>
                ) : null}
              </div>
            </div>
          )}

          <RouteButton />
        </div>

        <YandexMap />
      </div>
    </Section>
  );
}
