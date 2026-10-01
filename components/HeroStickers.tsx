'use client';
import { useEffect, useRef, useState } from 'react';

// ✏️ PEDRO: troque o texto de cada adesivo aqui
const STICKERS = [
  { id: 'a', label: 'PENSE', cls: 'sticker--a' },
  { id: 'b', label: 'CRIE', cls: 'sticker--b' },
  { id: 'c', label: 'FLUA', cls: 'sticker--c' },
];

const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

// Adesivos decorativos do Hero da Home. Surgem ao carregar a página, são arrastáveis e "escorregam"
// um pouquinho sozinhos ao soltar, antes de parar. A posição arrastada não é salva ao recarregar.
export function HeroStickers() {
  const [pos, setPos] = useState<Record<string, { x: number; y: number }>>({});
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [settlingId, setSettlingId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false); // dispara a animação de entrada
  const drag = useRef<{ id: string; sx: number; sy: number; ox: number; oy: number } | null>(null);
  const lastMove = useRef({ x: 0, y: 0 }); // última velocidade do ponteiro, usada no "escorregão" ao soltar

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60); // pequeno atraso garante que a transição de entrada rode
    return () => clearTimeout(t);
  }, []);

  const start = (e: React.PointerEvent<HTMLSpanElement>, id: string) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    const o = pos[id] ?? { x: 0, y: 0 };
    drag.current = { id, sx: e.clientX, sy: e.clientY, ox: o.x, oy: o.y };
    lastMove.current = { x: 0, y: 0 };
    setSettlingId(null);
    setDraggingId(id);
  };
  const move = (e: React.PointerEvent<HTMLSpanElement>) => {
    const d = drag.current;
    if (!d) return;
    lastMove.current = { x: e.movementX, y: e.movementY };
    setPos((p) => ({ ...p, [d.id]: { x: d.ox + (e.clientX - d.sx), y: d.oy + (e.clientY - d.sy) } }));
  };
  const end = () => {
    const d = drag.current;
    if (!d) return;
    const id = d.id;
    drag.current = null;
    setDraggingId(null);
    // ⚡ PEDRO: MOMENTUM — o quanto o adesivo "escorrega" sozinho ao soltar (0 desliga o efeito; SETTLE_MAX é o limite em px)
    const MOMENTUM = 3.5;
    const SETTLE_MAX = 40;
    const dx = clamp(lastMove.current.x * MOMENTUM, -SETTLE_MAX, SETTLE_MAX);
    const dy = clamp(lastMove.current.y * MOMENTUM, -SETTLE_MAX, SETTLE_MAX);
    setSettlingId(id);
    requestAnimationFrame(() => {
      setPos((p) => {
        const o = p[id] ?? { x: 0, y: 0 };
        return { ...p, [id]: { x: o.x + dx, y: o.y + dy } };
      });
    });
  };

  return (
    <>
      {STICKERS.map((s, i) => {
        const o = pos[s.id] ?? { x: 0, y: 0 };
        return (
          <span
            key={s.id}
            className={`sticker ${s.cls} ${mounted ? 'is-in' : ''} ${draggingId === s.id ? 'is-dragging' : ''} ${settlingId === s.id ? 'is-settling' : ''}`}
            style={{ translate: `${o.x}px ${o.y}px`, ['--d' as string]: `calc(var(--stagger) * ${i})` }}
            onPointerDown={(e) => start(e, s.id)}
            onPointerMove={move}
            onPointerUp={end}
            onPointerCancel={end}
            aria-hidden="true"
          >
            {s.label}
          </span>
        );
      })}
    </>
  );
}
