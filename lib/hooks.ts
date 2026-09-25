'use client';
import { useEffect, useRef, useState } from 'react';
export const prefersReducedMotion = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// Dispara uma vez quando o elemento entra na viewport. `wait` espera o Loader terminar (usado no Hero).
export function useInView<T extends HTMLElement>(wait = false) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  const [ready, setReady] = useState(!wait);
  useEffect(() => {
    if (!wait) return;
    const ok = () => setReady(true);
    if (document.documentElement.dataset.ready === '1') ok();
    window.addEventListener('pv:ready', ok);
    return () => window.removeEventListener('pv:ready', ok);
  }, [wait]);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setSeen(true), io.disconnect()), { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, on: seen && ready };
}
