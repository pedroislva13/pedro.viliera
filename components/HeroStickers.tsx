'use client';
import { useRef, useState } from 'react';

// ✏️ PEDRO: troque o texto de cada adesivo aqui
const STICKERS = [
  { id: 'a', label: 'PENSE', cls: 'sticker--a' },
  { id: 'b', label: 'CRIE', cls: 'sticker--b' },
  { id: 'c', label: 'FLUA', cls: 'sticker--c' },
];

// Adesivos decorativos do Hero da Home. Arrastáveis com mouse ou toque; a posição não é salva ao recarregar.
export function HeroStickers() {
  const [pos, setPos] = useState<Record<string, { x: number; y: number }>>({});
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const drag = useRef<{ id: string; sx: number; sy: number; ox: number; oy: number } | null>(null);

  const start = (e: React.PointerEvent<HTMLSpanElement>, id: string) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    const o = pos[id] ?? { x: 0, y: 0 };
    drag.current = { id, sx: e.clientX, sy: e.clientY, ox: o.x, oy: o.y };
    setDraggingId(id);
  };
  const move = (e: React.PointerEvent<HTMLSpanElement>) => {
    const d = drag.current;
    if (!d) return;
    setPos((p) => ({ ...p, [d.id]: { x: d.ox + (e.clientX - d.sx), y: d.oy + (e.clientY - d.sy) } }));
  };
  const end = () => { drag.current = null; setDraggingId(null); };

  return (
    <>
      {STICKERS.map((s) => {
        const o = pos[s.id] ?? { x: 0, y: 0 };
        return (
          <span
            key={s.id}
            className={`sticker ${s.cls} ${draggingId === s.id ? 'is-dragging' : ''}`}
            style={{ translate: `${o.x}px ${o.y}px` }}
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
