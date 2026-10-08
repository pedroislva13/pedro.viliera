'use client';
import { useRef } from 'react';
import { TransitionLink } from '@/components/TransitionLink';
import { AnimatedTitle } from '@/components/AnimatedTitle';
import { HeroStickers, type StickerDef } from '@/components/HeroStickers';

// ✏️ PEDRO: troque o texto dos adesivos da 404 aqui (reaproveita o mesmo componente da Home)
const NF_STICKERS: StickerDef[] = [
  { id: 'a', label: 'OPS', cls: 'sticker--a' },
  { id: 'b', label: 'PERDIDO?', cls: 'sticker--b' },
  { id: 'c', label: 'VOLTA?', cls: 'sticker--c' },
];

export default function NotFound() {
  const ref = useRef<HTMLDivElement>(null);

  // Clique/toque: separa os caracteres do 404 e volta sozinho, com um leve elástico (CSS cuida da animação).
  const split = () => {
    const el = ref.current;
    if (!el) return;
    el.classList.add('is-split');
    window.setTimeout(() => el.classList.remove('is-split'), 550); // ⚡ PEDRO: duração do efeito de separar/voltar
  };

  return (
    <section className="page nf-stage">
      <HeroStickers stickers={NF_STICKERS} />
      <div
        ref={ref}
        className="nf-code"
        onClick={split}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); split(); } }}
      >
        {/* Mesmo sistema de caos tipográfico do Contact/Home/About: hover muda cada número individualmente */}
        <AnimatedTitle lines={['404']} className="t-display" />
      </div>
      <p className="t-subtitle">THIS PAGE DOESN&apos;T EXIST.</p>
      <TransitionLink href="/" label="HOME" className="t-headline">BACK TO HOME →</TransitionLink>
    </section>
  );
}
