import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности',
  robots: { index: false, follow: true },
  alternates: { canonical: '/privacy' },
};

/**
 * Draft policy covering what the site actually collects (lead form,
 * UTM, analytics). Российские юридические требования к персональным
 * данным должны быть проверены юристом перед запуском — см. README.
 */
export default function PrivacyPage() {
  return (
    <Section className="pt-10 md:pt-14">
      <Heading level={1}>Политика конфиденциальности</Heading>
      <Text tone="muted" className="mt-3">
        TODO: документ является черновиком и должен быть проверен юристом перед запуском сайта
        в production.
      </Text>

      <div className="mt-8 flex max-w-2xl flex-col gap-6">
        <div>
          <h2 className="text-lg font-semibold text-graphite">1. Какие данные собираются</h2>
          <Text tone="muted" className="mt-2">
            При заполнении формы на сайте {siteConfig.brandShortName} мы получаем имя, телефон и,
            если указано, email, комментарий и прикреплённый файл (план помещения, размеры или
            дизайн-проект).
          </Text>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-graphite">2. Цель обработки</h2>
          <Text tone="muted" className="mt-2">
            Данные используются для подготовки предварительного расчёта, связи с вами и
            обсуждения проекта. Мы не передаём данные третьим лицам, кроме случаев, необходимых
            для выполнения заказа (например, при согласовании с фабрикой-производителем).
          </Text>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-graphite">3. Файлы cookie и аналитика</h2>
          <Text tone="muted" className="mt-2">
            Сайт использует Яндекс Метрику для анализа посещаемости и localStorage для
            запоминания рекламного источника (UTM-метки), чтобы понимать, какой канал привёл
            заявку.
          </Text>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-graphite">4. Хранение и удаление данных</h2>
          <Text tone="muted" className="mt-2">
            TODO: уточнить срок хранения данных и порядок их удаления по запросу пользователя.
          </Text>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-graphite">5. Контакты</h2>
          <Text tone="muted" className="mt-2">
            По вопросам обработки персональных данных: {siteConfig.email || 'TODO: уточнить email'}.
          </Text>
        </div>
      </div>
    </Section>
  );
}
