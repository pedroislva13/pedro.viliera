'use client';
import { createContext, useCallback, useContext, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { DURATION, EASE } from '@/config/motion';
import { prefersReducedMotion } from '@/lib/hooks';

const Ctx = createContext<{ go: (href: string, label?: string) => void }>({ go: () => {} });
export const usePageTransition = () => useContext(Ctx);

// Cortina que sobe (cobre a página), a rota troca por baixo, e a cortina sai por cima.
export function PageTransition({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const el = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);
  const covering = useRef(false);
  const busy = useRef(false);

  const reveal = useCallback(() => {
    if (!covering.current || !el.current) return;
    covering.current = false;
    el.current.animate([{ clipPath: 'inset(0 0 0% 0)' }, { clipPath: 'inset(0 0 100% 0)' }], { duration: DURATION.base, easing: EASE, delay: 250, fill: 'forwards' }).onfinish = () => { busy.current = false; };
  }, []);

  const go = useCallback((href: string, text = '') => {
    if (busy.current || href === pathname) return;
    if (prefersReducedMotion() || !el.current) return router.push(href);
    busy.current = true;
    if (label.current) label.current.textContent = text;
    el.current.animate([{ clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)' }], { duration: DURATION.base, easing: EASE, fill: 'forwards' }).onfinish = () => {
      covering.current = true;
      window.scrollTo(0, 0);
      router.push(href);
      setTimeout(reveal, 3500); // segurança: se a rota não trocar, a cortina não fica presa
    };
  }, [pathname, router, reveal]);

  useEffect(reveal, [pathname, reveal]);
  return (
    <Ctx.Provider value={{ go }}>
      {children}
      <div ref={el} className="tt" aria-hidden="true"><span ref={label} className="tt__label t-headline" /></div>
    </Ctx.Provider>
  );
}
