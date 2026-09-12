import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { siteConfig } from '@/config/site';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-graphite">
      <Container className="grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-16">
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-greige">
            {siteConfig.officialPartnerLine}
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight text-cream md:text-5xl lg:text-[3.2rem]">
            Кухни и мебель по индивидуальным проектам
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-cream/80 md:text-lg">
            Проектируем кухни, шкафы, гардеробные и мебель для интерьера под ваше пространство —
            в Санкт-Петербурге.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/#calc" size="lg">
              Рассчитать проект
            </Button>
            <Button href="/projects" size="lg" variant="ghost">
              Посмотреть проекты
            </Button>
          </div>

          <p className="mt-6 text-sm text-cream/70">Проект и предварительный расчёт — бесплатно.</p>
        </div>

        <PlaceholderImage
          label="интерьер кухни ViVakitchen"
          ratio="aspect-[4/3] lg:aspect-[5/4]"
          className="rounded-lg"
        />
      </Container>
    </section>
  );
}
