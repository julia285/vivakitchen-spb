type ClassValue = string | number | false | null | undefined;

/** Minimal className joiner — avoids pulling in the clsx package for one function. */
export default function clsx(...values: ClassValue[]): string {
  return values.filter(Boolean).join(' ');
}
