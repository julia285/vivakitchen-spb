'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { PhoneLink, EmailLink } from '@/components/ContactLinks';
import clsx from '@/lib/clsx';

const navLinks = [
  { href: '/projects', label: 'Проекты' },
  { href: '/kitchens', label: 'Кухни' },
  { href: '/wardrobes', label: 'Шкафы и гардеробные' },
  { href: '/designers', label: 'Дизайнерам' },
  { href: '/about', label: 'О салоне' },
  { href: '/contacts', label: 'Контакты' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* Scrolls away with the page — only the row below stays sticky. */}
      <div className="hidden border-b border-line bg-milk md:block">
        <Container className="flex h-9 items-center justify-end gap-6 text-xs text-stone">
          <span>
            {siteConfig.mall}, {siteConfig.addressLine}
          </span>
          <PhoneLink className="font-medium text-graphite hover:text-accent" />
          <EmailLink className="hover:text-accent" />
        </Container>
      </div>

      <header className="sticky top-0 z-50 border-b border-line bg-cream/95 backdrop-blur">
        <Container className="flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src={siteConfig.logo.src}
              alt={siteConfig.brandShortName}
              width={siteConfig.logo.width}
              height={siteConfig.logo.height}
              priority
              className="h-6 w-auto md:h-7"
            />
            <span className="hidden text-sm text-stone md:inline">Санкт-Петербург</span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Основная навигация">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-graphite/85 transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button href="/#calc" size="md" className="hidden md:inline-flex">
              Рассчитать проект
            </Button>
            <button
              type="button"
              aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center rounded border border-line lg:hidden"
            >
              <span className="relative block h-3.5 w-5" aria-hidden>
                <span
                  className={clsx(
                    'absolute left-0 top-0 h-[1.5px] w-full bg-graphite transition-transform duration-200',
                    open && 'translate-y-[6.5px] rotate-45',
                  )}
                />
                <span
                  className={clsx(
                    'absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-graphite transition-opacity duration-200',
                    open && 'opacity-0',
                  )}
                />
                <span
                  className={clsx(
                    'absolute bottom-0 left-0 h-[1.5px] w-full bg-graphite transition-transform duration-200',
                    open && '-translate-y-[6.5px] -rotate-45',
                  )}
                />
              </span>
            </button>
          </div>
        </Container>
      </header>

      {/*
        Rendered as a sibling of <header>, not nested inside it: header's
        backdrop-blur creates a containing block for fixed descendants,
        which would trap a fixed child inside header's own (64px-tall)
        box instead of the viewport.
      */}
      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto border-t border-line bg-cream md:top-20 lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded px-2 py-3 text-base font-medium text-graphite hover:bg-milk"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-1.5 border-t border-line pt-4 text-sm text-stone">
              <span>
                {siteConfig.mall}, {siteConfig.addressLine}
              </span>
              <PhoneLink className="font-medium text-graphite" />
              <EmailLink />
            </div>
            <Button href="/#calc" size="lg" className="mt-4 w-full">
              Рассчитать проект
            </Button>
          </Container>
        </div>
      ) : null}
    </>
  );
}
