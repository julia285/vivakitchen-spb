import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Container } from '@/components/ui/Container';
import { PhoneLink, EmailLink } from '@/components/ContactLinks';

export function Footer() {
  return (
    <footer className="border-t border-line bg-milk">
      <Container className="grid gap-10 py-14 md:grid-cols-4">
        <div>
          <Image
            src={siteConfig.logo.src}
            alt={siteConfig.brandShortName}
            width={siteConfig.logo.width}
            height={siteConfig.logo.height}
            className="h-6 w-auto"
          />
          <p className="mt-3 text-sm text-stone">{siteConfig.officialPartnerLine}</p>
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
          {siteConfig.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-graphite/85 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <Link href="/privacy-policy" className="text-graphite/85 hover:text-accent">
            Политика конфиденциальности
          </Link>
        </div>
      </Container>

      <Container className="border-t border-line py-5">
        <p className="text-xs text-stone">
          © {new Date().getFullYear()} {siteConfig.brandShortName}. {siteConfig.officialPartnerLine}.
        </p>
        {siteConfig.legalName ? (
          // Seller details every Russian shop site is expected to show.
          <p className="mt-1 text-xs text-stone">
            {siteConfig.legalName}
            {siteConfig.legalInn ? `, ИНН ${siteConfig.legalInn}` : ''}
            {siteConfig.legalOgrn
              ? `, ${siteConfig.legalName.startsWith('ИП') ? 'ОГРНИП' : 'ОГРН'} ${siteConfig.legalOgrn}`
              : ''}
          </p>
        ) : null}
      </Container>
    </footer>
  );
}
