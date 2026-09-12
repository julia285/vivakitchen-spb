import { Button } from '@/components/ui/Button';

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-cream/95 p-3 backdrop-blur lg:hidden">
      <Button href="/#calc" size="lg" className="w-full">
        Рассчитать проект
      </Button>
    </div>
  );
}
