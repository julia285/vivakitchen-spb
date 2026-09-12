import { ReactNode } from 'react';
import clsx from '@/lib/clsx';

export function FormField({
  label,
  htmlFor,
  required,
  error,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx('flex flex-col gap-1.5', className)}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-graphite">
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p role="alert" className="text-xs text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const fieldBase =
  'h-12 w-full rounded border border-line bg-white px-3.5 text-base text-graphite placeholder:text-stone/70 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent';

export const inputClassName = fieldBase;
export const textareaClassName = clsx(fieldBase, 'h-auto min-h-[110px] py-3');
export const selectClassName = clsx(fieldBase, 'appearance-none bg-white');
