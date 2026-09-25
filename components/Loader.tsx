'use client';
import { useEffect, useState } from 'react';
import { DURATION, LOADER_MS } from '@/config/motion';
import { prefersReducedMotion } from '@/lib/hooks';
import { siteConfig } from '@/config/site';

const ready = () => { document.documentElement.dataset.ready = '1'; window.dispatchEvent(new Event('pv:ready')); };
// Contagem 00→100 (1x por sessão). Sem JS ou com reduced motion, não aparece.
export function Loader() {
  const [n, setN] = useState(0);
  const [phase, setPhase] = useState<'idle' | 'run' | 'out' | 'done'>('idle');
  useEffect(() => {
    if (sessionStorage.getItem('pv-loaded') || prefersReducedMotion()) { setPhase('done'); ready(); return; }
    setPhase('run');
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - t0) / LOADER_MS, 1);
      setN(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) return void (raf = requestAnimationFrame(tick));
      setPhase('out'); ready(); sessionStorage.setItem('pv-loaded', '1');
      setTimeout(() => setPhase('done'), DURATION.base);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  if (phase === 'idle' || phase === 'done') return null;
  return (
    <div className={`loader ${phase === 'out' ? 'is-out' : ''}`} role="status" aria-label="Loading">
      <span className="t-micro">{siteConfig.name}</span>
      <span className="loader__n t-display" aria-hidden="true">{String(n).padStart(2, '0')}</span>
    </div>
  );
}
