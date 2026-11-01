import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности',
  description: `Как сайт ${siteConfig.brandName} обрабатывает персональные данные, которые вы оставляете в форме заявки.`,
  alternates: { canonical: '/privacy-policy' },
};

const EDITION_DATE = '1 ноября 2026 г.';

/**
 * Policy written around what the site really does (lead form, UTM tags,
 * analytics, delivery to email/Telegram/CRM). It is NOT legal advice: the
 * text and the operator's details must be reviewed by a lawyer before ads
 * go live (152-ФЗ, incl. whether sending notifications through Telegram
 * counts as a cross-border transfer for this operator).
 */
export default function PrivacyPolicyPage() {
  const operatorName = siteConfig.legalName || siteConfig.brandName;
  const details = [
    siteConfig.legalInn ? `ИНН ${siteConfig.legalInn}` : null,
    siteConfig.legalOgrn ? `${siteConfig.legalName.startsWith('ИП') ? 'ОГРНИП' : 'ОГРН'} ${siteConfig.legalOgrn}` : null,
  ].filter(Boolean);

  const sections: { title: string; body: string[] }[] = [
    {
      title: '1. Кто обрабатывает данные',
      body: [
        `Оператор персональных данных — ${operatorName}${details.length ? ` (${details.join(', ')})` : ''}, ${siteConfig.legalAddress || siteConfig.fullAddress}. Эл. почта для обращений: ${siteConfig.email}.`,
        `Салон является дилером и представителем торговой марки ViVaKitchen в Санкт-Петербурге.`,
      ],
    },
    {
      title: '2. Какие данные мы получаем',
      body: [
        'Через форму на сайте: имя, телефон и, если вы укажете, адрес электронной почты, комментарий и прикреплённый файл (например, план помещения, размеры или дизайн-проект).',
        'Автоматически: адрес страницы, с которой отправлена заявка, рекламные метки (UTM) источника перехода, технические данные браузера и файлы cookie, которые использует сервис веб-аналитики.',
      ],
    },
    {
      title: '3. Для чего мы их используем',
      body: [
        'Чтобы связаться с вами, подготовить предварительный расчёт и обсудить проект кухни, шкафа, гардеробной или другой мебели; при заключении договора — для его исполнения.',
        'Чтобы понимать, какие каналы приводят обращения, и улучшать сайт (обезличенная аналитика).',
      ],
    },
    {
      title: '4. Основание обработки',
      body: [
        'Обработка выполняется с вашего согласия, которое вы даёте, отметив соответствующий флажок перед отправкой формы. Вы можете отозвать согласие в любой момент (см. раздел 7).',
      ],
    },
    {
      title: '5. Кому могут передаваться данные',
      body: [
        'Заявка поступает сотрудникам салона. Для её доставки и обработки используются сервисы: хостинг сайта в России, электронная почта Яндекса, система учёта заявок и мессенджер Telegram (уведомление о новой заявке).',
        'Для выполнения заказа данные могут передаваться фабрике-производителю ViVaKitchen в объёме, необходимом для изготовления и доставки. Мы не продаём и не передаём данные для рекламных рассылок третьих лиц.',
      ],
    },
    {
      title: '6. Файлы cookie и аналитика',
      body: [
        'Сайт использует сервис веб-аналитики «Яндекс Метрика», а также localStorage вашего браузера, чтобы запомнить рекламную метку источника перехода. Вы можете отключить cookie в настройках браузера; сайт при этом продолжит работать.',
      ],
    },
    {
      title: '7. Сроки хранения и ваши права',
      body: [
        'Данные хранятся до достижения целей обработки или до отзыва вами согласия, если иное не требуется законом.',
        `Вы можете запросить информацию о своих данных, их уточнение, блокирование или удаление, а также отозвать согласие, написав на ${siteConfig.email}. Мы ответим в сроки, установленные законодательством.`,
      ],
    },
    {
      title: '8. Изменения политики',
      body: [
        'Актуальная версия всегда размещена на этой странице. При существенных изменениях мы обновим дату редакции.',
      ],
    },
  ];

  return (
    <Section className="pt-10 md:pt-14">
      <Heading level={1}>Политика конфиденциальности</Heading>
      <Text tone="muted" className="mt-3">
        Редакция от {EDITION_DATE}
      </Text>

      <div className="mt-8 flex max-w-2xl flex-col gap-6">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-lg font-semibold text-graphite">{section.title}</h2>
            {section.body.map((paragraph) => (
              <Text key={paragraph} tone="muted" className="mt-2">
                {paragraph}
              </Text>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
}
