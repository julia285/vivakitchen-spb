'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';
import { FormField, inputClassName, selectClassName, textareaClassName } from '@/components/ui/FormField';
import { submitLead, LeadCategory } from '@/services/crm';
import { getStoredUtm } from '@/lib/utm';
import { trackEvent } from '@/lib/analytics';

const categoryOptions: { value: LeadCategory; label: string }[] = [
  { value: 'kitchen', label: 'Кухня' },
  { value: 'wardrobe', label: 'Шкаф' },
  { value: 'dressing-room', label: 'Гардеробная' },
  { value: 'multi-room', label: 'Мебель для нескольких помещений' },
  { value: 'other', label: 'Другое' },
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function LeadForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<{ name?: string; phone?: string; consent?: string }>({});
  const [errorMessage, setErrorMessage] = useState('');
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
      comment: String(data.get('comment') || '') || undefined,
      fileUrl,
      pageUrl: window.location.href,
      utm: getStoredUtm(),
    });

    if (result.ok) {
      setStatus('success');
      trackEvent('lead_form_submit');
      form.reset();
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
            Мы получили информацию о вашем проекте и свяжемся с вами, чтобы уточнить детали.
          </Text>
        </div>
      </Section>
    );
  }

  return (
    <Section id="calc">
      <div className="mx-auto max-w-2xl">
        <Heading level={2} eyebrow="Расчёт" className="text-center">
          Получить предварительный расчёт
        </Heading>
        <Text tone="muted" className="mx-auto mt-4 max-w-lg text-center">
          Если у вас уже есть размеры, план помещения или дизайн-проект — прикрепите его. Это
          поможет быстрее разобраться в задаче.
        </Text>

        <form onSubmit={handleSubmit} noValidate className="mt-8 flex flex-col gap-5 rounded border border-line bg-white p-6 md:p-8">
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

          <FormField label="Комментарий" htmlFor="comment">
            <textarea id="comment" name="comment" className={textareaClassName} />
          </FormField>

          <FormField label="Файл — размеры, план или проект (PDF, JPG, PNG)" htmlFor="file">
            <input
              id="file"
              name="file"
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              className="text-sm text-graphite file:mr-3 file:rounded file:border-0 file:bg-milk file:px-3.5 file:py-2 file:text-sm file:font-medium file:text-graphite hover:file:bg-line"
            />
          </FormField>

          <label className="flex items-start gap-2.5 text-sm text-stone">
            <input
              type="checkbox"
              name="consent"
              className="mt-0.5 h-4 w-4 rounded border-line text-accent focus:ring-accent"
            />
            Согласен(на) на обработку персональных данных в соответствии с{' '}
            <a href="/privacy" className="underline hover:text-accent">
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
            {status === 'submitting' ? 'Отправляем…' : 'Отправить на расчёт'}
          </Button>
        </form>
      </div>
    </Section>
  );
}
