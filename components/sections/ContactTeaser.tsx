import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { PhoneLink, EmailLink } from '@/components/ContactLinks';
import { RouteButton } from '@/components/RouteButton';
import { YandexMap } from '@/components/YandexMap';
import { siteConfig } from '@/config/site';

export function ContactTeaser() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="min-w-0">
          <Heading level={2} eyebrow="Салон в Санкт-Петербурге">
            {siteConfig.mall}
          </Heading>
          <Text tone="muted" className="mt-4">
            {siteConfig.addressWithoutMall}
          </Text>
          {siteConfig.workingHours ? (
            <Text tone="muted" className="mt-1">
              {siteConfig.workingHours}
            </Text>
          ) : null}

          <div className="mt-6 flex flex-col gap-2 text-base">
            <PhoneLink className="font-medium text-graphite hover:text-accent" />
            <EmailLink className="text-graphite/85 hover:text-accent" />
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <RouteButton />
            {siteConfig.mallMapUrl ? (
              <a
                href={siteConfig.mallMapUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-graphite/85 underline hover:text-accent"
              >
                Схема ТЦ «Ланской» →
              </a>
            ) : null}
          </div>
        </div>

        <YandexMap />
      </div>
    </Section>
  );
}
