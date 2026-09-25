'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';
import { SMOOTH_SCROLL } from '@/config/motion';
import { prefersReducedMotion } from '@/lib/hooks';

export function SmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return; // reduced motion: scroll nativo
    const lenis = new Lenis(SMOOTH_SCROLL);
    let raf = requestAnimationFrame(function tick(t) { lenis.raf(t); raf = requestAnimationFrame(tick); });
    return () => { cancelAnimationFrame(raf); lenis.destroy(); };
  }, []);
  return null;
}
