import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Container } from '@/components/ui/Container';
import { PhoneLink, EmailLink } from '@/components/ContactLinks';

export function Footer() {
  return (
    <footer className="border-t border-line bg-milk">
      <Container className="grid gap-10 py-14 md:grid-cols-4">
        <div>
          <p className="text-base font-semibold text-graphite">{siteConfig.brandShortName}</p>
          <p className="mt-2 text-sm text-stone">{siteConfig.officialPartnerLine}</p>
        </div>

        <nav aria-label="Разделы" className="flex flex-col gap-2 text-sm">
          <Link href="/projects" className="text-graphite/85 hover:text-accent">
            Проекты
          </Link>
          <Link href="/kitchens" className="text-graphite/85 hover:text-accent">
            Кухни
          </Link>
          <Link href="/wardrobes" className="text-graphite/85 hover:text-accent">
            Шкафы и гардеробные
          </Link>
          <Link href="/designers" className="text-graphite/85 hover:text-accent">
            Дизайнерам
          </Link>
          <Link href="/about" className="text-graphite/85 hover:text-accent">
            О салоне
          </Link>
        </nav>

        <div className="flex flex-col gap-2 text-sm">
          <PhoneLink className="text-graphite/85 hover:text-accent" />
          <EmailLink className="text-graphite/85 hover:text-accent" />
          <p className="mt-1 text-stone">{siteConfig.fullAddress}</p>
          {siteConfig.workingHours ? <p className="text-stone">{siteConfig.workingHours}</p> : null}
        </div>

        <div className="flex flex-col gap-2 text-sm">
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
          <Link href="/privacy" className="text-graphite/85 hover:text-accent">
            Политика конфиденциальности
          </Link>
        </div>
      </Container>

      <Container className="border-t border-line py-5">
        <p className="text-xs text-stone">
          © {new Date().getFullYear()} {siteConfig.brandShortName}. {siteConfig.officialPartnerLine}.
        </p>
      </Container>
    </footer>
  );
}
