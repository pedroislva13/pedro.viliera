'use client';
import { useEffect, useRef, useState } from 'react';
import { pad, type Project } from '@/data/projects';
import { CURSOR_LERP } from '@/config/motion';
import { prefersReducedMotion } from '@/lib/hooks';
import { TransitionLink } from './TransitionLink';

// Lista da página /work. No desktop, a capa do projeto aparece no lugar do mouse ao passar sobre o nome.
export function WorkList({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<number | null>(null); // qual linha está com o mouse em cima
  const [last, setLast] = useState(0); // última capa mostrada (evita piscar ao sair)
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = box.current;
    if (!el || !matchMedia('(hover: hover) and (pointer: fine)').matches) return; // mobile: sem preview
    const lerp = prefersReducedMotion() ? 1 : CURSOR_LERP; // ⚡ PEDRO: velocidade de seguir o mouse (vem de config/motion.ts)
    let tx = 0, ty = 0, x = 0, y = 0, first = true, raf = 0;
    const move = (e: MouseEvent) => {
      tx = e.clientX; ty = e.clientY;
      if (first) { x = tx; y = ty; first = false; }
    };
    const loop = () => {
      x += (tx - x) * lerp; y += (ty - y) * lerp;
      el.style.transform = `translate3d(${x}px,${y}px,0)`;
      raf = requestAnimationFrame(loop);
    };
    addEventListener('mousemove', move);
    raf = requestAnimationFrame(loop);
    return () => { removeEventListener('mousemove', move); cancelAnimationFrame(raf); };
  }, []);

  const show = (i: number) => { setActive(i); setLast(i); };
  const hide = () => setActive(null);

  return (
    <>
      <ul className="rows">
        {projects.map((p, i) => (
          <li key={p.slug}>
            <TransitionLink
              href={`/work/${p.slug}`}
              label={p.title}
              className="row"
              data-cursor="image"
              onMouseEnter={() => show(i)}
              onMouseLeave={hide}
              onFocus={() => show(i)}
              onBlur={hide}
              onNavigate={hide}
            >
              <span className="t-micro">{pad(i + 1)}</span>
              <span className="row__t t-headline">{p.title}</span>
              <span className="t-micro">{p.category.split(' / ')[0]}</span>
              <span className="t-micro">{p.year}</span>
            </TransitionLink>
          </li>
        ))}
      </ul>
      <div ref={box} className={`wl-preview ${active !== null ? 'is-on' : ''}`} aria-hidden="true">
        <div className="wl-preview__in">
          {/* 🖼️ PEDRO — a capa vem de coverImage em data/projects.ts */}
          {projects.map((p, i) => (
           // eslint-disable-next-line @next/next/no-img-element
          <img key={p.slug} src={p.hoverImage} alt="" className={i === last ? 'is-active' : ''} onError={(e) => { const t = e.currentTarget; if (t.dataset.fb) { t.style.visibility = 'hidden'; } else { t.dataset.fb = '1'; t.src = p.coverImage; } }} />
        </div>
      </div>
    </>
  );
}
