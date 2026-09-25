'use client';
import { useEffect, useRef } from 'react';
import { CURSOR_LERP } from '@/config/motion';
import { prefersReducedMotion } from '@/lib/hooks';

// Estados: default | link | view | drag. Marque elementos com data-cursor="view" data-cursor-label="VIEW".
export function Cursor() {
  const root = useRef<HTMLDivElement>(null);
  const text = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = root.current!;
    if (!matchMedia('(hover: hover) and (pointer: fine)').matches || prefersReducedMotion()) return; // mobile: cursor nativo
    document.documentElement.classList.add('has-cursor');
    let x = -100, y = -100, cx = x, cy = y, raf = 0;
    const move = (e: MouseEvent) => { x = e.clientX; y = e.clientY; };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const c = t.closest<HTMLElement>('[data-cursor]');
      el.dataset.state = c?.dataset.cursor ?? (t.closest('a,button') ? 'link' : 'default');
      if (text.current) text.current.textContent = c?.dataset.cursorLabel ?? '';
    };
    const loop = () => { cx += (x - cx) * CURSOR_LERP; cy += (y - cy) * CURSOR_LERP; el.style.transform = `translate3d(${cx}px,${cy}px,0)`; raf = requestAnimationFrame(loop); };
    addEventListener('mousemove', move); addEventListener('mouseover', over); raf = requestAnimationFrame(loop);
    return () => { removeEventListener('mousemove', move); removeEventListener('mouseover', over); cancelAnimationFrame(raf); document.documentElement.classList.remove('has-cursor'); };
  }, []);
  return <div ref={root} className="cursor" data-state="default" aria-hidden="true"><div className="cursor__dot"><span ref={text} /></div></div>;
}
