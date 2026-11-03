'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';
import { FormField, inputClassName, selectClassName, textareaClassName } from '@/components/ui/FormField';
import { submitLead, LeadCategory, LeadScenario } from '@/services/crm';
import { getStoredUtm } from '@/lib/utm';
import { trackEvent } from '@/lib/analytics';
import { MessengerLinks } from '@/components/MessengerLinks';

const categoryOptions: { value: LeadCategory; label: string }[] = [
  { value: 'kitchen', label: 'Кухня' },
  { value: 'wardrobe', label: 'Шкаф' },
  { value: 'dressing-room', label: 'Гардеробная' },
  { value: 'multi-room', label: 'Мебель для нескольких помещений' },
  { value: 'other', label: 'Другое' },
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

// The two ways in. The salon prices a ready design project remotely, but a
// project from scratch starts with a visit — so the form asks first.
const scenarioOptions: { value: LeadScenario; title: string; text: string }[] = [
  {
    value: 'has-project',
    title: 'У меня есть дизайн-проект',
    text: 'Рассчитаем стоимость в выбранной вами модели и пришлём расчёт.',
  },
  {
    value: 'need-project',
    title: 'Проекта пока нет',
    text: 'Приезжайте в салон: познакомимся, обсудим задачу и составим проект вместе.',
  },
];

const successText: Record<LeadScenario, string> = {
  'has-project': 'Мы получили ваш проект. Посмотрим его и свяжемся, чтобы уточнить модель и прислать расчёт.',
  'need-project': 'Свяжемся с вами, чтобы договориться о встрече в салоне. Будем рады познакомиться.',
};

export function LeadForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [scenario, setScenario] = useState<LeadScenario | ''>('');
  const [sentScenario, setSentScenario] = useState<LeadScenario | null>(null);
  const [errors, setErrors] = useState<{ name?: string; phone?: string; scenario?: string; consent?: string }>({});
  const [errorMessage, setErrorMessage] = useState('');
  const [fileName, setFileName] = useState('');
  const hasTrackedOpen = useRef(false);

  useEffect(() => {
    if (hasTrackedOpen.current) return;
    hasTrackedOpen.current = true;
    trackEvent('lead_form_open');
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get('name') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const consent = data.get('consent') === 'on';

    const nextErrors: typeof errors = {};
    if (!name) nextErrors.name = 'Укажите имя';
    if (!phone) nextErrors.phone = 'Укажите телефон';
    if (!scenario) nextErrors.scenario = 'Выберите, что у вас есть';
    if (!consent) nextErrors.consent = 'Нужно согласие на обработку персональных данных';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('submitting');
    setErrorMessage('');

    let fileUrl: string | undefined;
    const file = data.get('file');
    if (file instanceof File && file.size > 0) {
      try {
        const uploadForm = new FormData();
        uploadForm.append('file', file);
        const res = await fetch('/api/upload', { method: 'POST', body: uploadForm });
        if (res.ok) {
          const json = await res.json();
          fileUrl = json.url;
        }
      } catch {
        // Non-blocking: lead still gets submitted without the attachment.
      }
    }

    const result = await submitLead({
      name,
      phone,
      email: String(data.get('email') || '') || undefined,
      category: (data.get('category') as LeadCategory) || undefined,
      scenario: scenario || undefined,
      model: String(data.get('model') || '') || undefined,
      visitTime: String(data.get('visitTime') || '') || undefined,
      comment: String(data.get('comment') || '') || undefined,
      fileUrl,
      pageUrl: window.location.href,
      utm: getStoredUtm(),
    });

    if (result.ok) {
      setSentScenario(scenario || null);
      setStatus('success');
      trackEvent('lead_form_submit', { scenario: scenario || 'unknown' });
      form.reset();
      setScenario('');
      setFileName('');
    } else {
      setStatus('error');
      setErrorMessage(result.error);
    }
  }

  if (status === 'success') {
    return (
      <Section id="calc">
        <div className="mx-auto max-w-xl rounded border border-line bg-white p-8 text-center">
          <Heading level={3}>Спасибо</Heading>
          <Text tone="muted" className="mt-3">
            {sentScenario
              ? successText[sentScenario]
              : 'Мы получили информацию о вашем проекте и свяжемся с вами, чтобы уточнить детали.'}
          </Text>
        </div>
      </Section>
    );
  }

  return (
    <Section id="calc">
      <div className="mx-auto max-w-2xl">
        <Heading level={2} eyebrow="Обсудить проект" className="text-center">
          Расскажите о вашем проекте
        </Heading>
        <Text tone="muted" className="mx-auto mt-4 max-w-lg text-center">
          Есть готовый дизайн-проект — рассчитаем его в выбранной модели. Проекта нет — приглашаем
          в салон: вместе составим проект и назовём стоимость.
        </Text>
        <MessengerLinks className="mt-5" />

        <form onSubmit={handleSubmit} noValidate className="mt-8 flex flex-col gap-5 rounded border border-line bg-white p-6 md:p-8">
          <fieldset>
            <legend className="mb-2 text-sm font-medium text-graphite">
              Что у вас есть? <span className="text-red-700">*</span>
            </legend>
            <div className="grid gap-3 sm:grid-cols-2">
              {scenarioOptions.map((opt) => (
                <label
                  key={opt.value}
                  className={`flex cursor-pointer flex-col gap-1 rounded border p-4 transition-colors focus-within:ring-2 focus-within:ring-accent ${
                    scenario === opt.value ? 'border-accent bg-milk' : 'border-line hover:border-graphite/40'
                  }`}
                >
                  <span className="flex items-center gap-2 text-sm font-semibold text-graphite">
                    <input
                      type="radio"
                      name="scenario"
                      value={opt.value}
                      checked={scenario === opt.value}
                      onChange={() => setScenario(opt.value)}
                      className="h-4 w-4 text-accent focus:ring-accent"
                    />
                    {opt.title}
                  </span>
                  <span className="pl-6 text-xs text-stone">{opt.text}</span>
                </label>
              ))}
            </div>
            {errors.scenario ? (
              <p role="alert" className="mt-2 text-xs text-red-700">
                {errors.scenario}
              </p>
            ) : null}
          </fieldset>

          <div className="grid gap-5 sm:grid-cols-2">
            <FormField label="Имя" htmlFor="name" required error={errors.name}>
              <input id="name" name="name" type="text" autoComplete="name" className={inputClassName} />
            </FormField>
            <FormField label="Телефон" htmlFor="phone" required error={errors.phone}>
              <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClassName} />
            </FormField>
          </div>

          <FormField label="Email" htmlFor="email">
            <input id="email" name="email" type="email" autoComplete="email" className={inputClassName} />
          </FormField>

          <FormField label="Что планируете заказать?" htmlFor="category">
            <select id="category" name="category" defaultValue="" className={selectClassName}>
              <option value="" disabled>
                Выберите категорию
              </option>
              {categoryOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </FormField>

          {scenario === 'has-project' ? (
            <FormField label="Модель или коллекция фасадов, если уже выбрали" htmlFor="model">
              <input id="model" name="model" type="text" placeholder="Например, Egna" className={inputClassName} />
            </FormField>
          ) : null}

          {scenario === 'need-project' ? (
            <FormField label="Когда удобно приехать в салон" htmlFor="visitTime">
              <input
                id="visitTime"
                name="visitTime"
                type="text"
                placeholder="Например, будни после 15:00 или суббота"
                className={inputClassName}
              />
            </FormField>
          ) : null}

          <FormField label="Комментарий" htmlFor="comment">
            <textarea id="comment" name="comment" className={textareaClassName} />
          </FormField>

          <FormField
            label={
              scenario === 'need-project'
                ? 'Размеры или план помещения, если есть (PDF, JPG, PNG) — посмотрим вместе на встрече'
                : 'Файл проекта (PDF, JPG, PNG)'
            }
            htmlFor="file"
          >
            <div className="flex flex-wrap items-center gap-3">
              <label
                htmlFor="file"
                className="inline-flex cursor-pointer items-center rounded bg-milk px-3.5 py-2 text-sm font-medium text-graphite hover:bg-line focus-within:ring-2 focus-within:ring-accent"
              >
                Прикрепить файл
                <input
                  id="file"
                  name="file"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="sr-only"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name ?? '')}
                />
              </label>
              <span className="min-w-0 truncate text-sm text-stone">{fileName || 'Файл не выбран'}</span>
            </div>
          </FormField>

          <label className="flex items-start gap-2.5 text-sm text-stone">
            <input
              type="checkbox"
              name="consent"
              className="mt-0.5 h-4 w-4 rounded border-line text-accent focus:ring-accent"
            />
            Согласен(на) на обработку персональных данных в соответствии с{' '}
            <a href="/privacy-policy" className="underline hover:text-accent">
              политикой конфиденциальности
            </a>
            .
          </label>
          {errors.consent ? (
            <p role="alert" className="-mt-3 text-xs text-red-700">
              {errors.consent}
            </p>
          ) : null}

          {status === 'error' ? (
            <p role="alert" className="text-sm text-red-700">
              {errorMessage}
            </p>
          ) : null}

          <Button type="submit" size="lg" disabled={status === 'submitting'} className="mt-1">
            {status === 'submitting' ? 'Отправляем…' : 'Отправить заявку'}
          </Button>
        </form>
      </div>
    </Section>
  );
}
