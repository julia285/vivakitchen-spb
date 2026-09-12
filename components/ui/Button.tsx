import { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';
import clsx from '@/lib/clsx';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-60 disabled:pointer-events-none';

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-cream hover:bg-accent-dark',
  secondary: 'bg-transparent text-graphite border border-graphite/30 hover:border-graphite',
  ghost: 'bg-transparent text-cream border border-cream/40 hover:border-cream',
};

const sizes: Record<Size, string> = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-14 px-7 text-base',
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { children, variant = 'primary', size = 'md', className } = props;
  const classes = clsx(base, variants[variant], sizes[size], className);

  if ('href' in props && props.href) {
    const { href, target, rel, onClick } = props;
    return (
      <Link href={href} target={target} rel={rel} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  }

  const { type = 'button', ...domProps } = props as ButtonAsButton;
  const { variant: _variant, size: _size, className: _className, children: _children, ...rest } = domProps;
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
