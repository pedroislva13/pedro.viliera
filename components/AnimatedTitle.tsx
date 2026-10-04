'use client';
import { useEffect, useState } from 'react';
import { Permanent_Marker, Bebas_Neue, Caveat, Press_Start_2P, Playfair_Display, Rubik_Mono_One } from 'next/font/google';
import { useInView } from '@/lib/hooks';

// Fontes do efeito de "caos tipográfico" — reutilizadas em todo título que usa este componente.
const f1 = Permanent_Marker({ subsets: ['latin'], weight: '400', variable: '--font-c1' });
const f2 = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--font-c2' });
const f3 = Caveat({ subsets: ['latin'], weight: '700', variable: '--font-c3' });
const f4 = Press_Start_2P({ subsets: ['latin'], weight: '400', variable: '--font-c4' });
const f5 = Playfair_Display({ subsets: ['latin'], weight: '700', style: 'italic', variable: '--font-c5' });
const f6 = Rubik_Mono_One({ subsets: ['latin'], weight: '400', variable: '--font-c6' });
const FONT_VARS = ['--font-c1', '--font-c2', '--font-c3', '--font-c4', '--font-c5', '--font-c6'];
// 🎨 PEDRO — cores do caos tipográfico (uma por letra, em sequência)
const COLORS = ['#ff4d6d', '#4dd0ff', '#ffce45', '#8b5cf6', '#2dd4bf', '#f97316'];
// ✏️ PEDRO — símbolos decorativos que substituem algumas letras durante o efeito (puramente visual)
const GLYPHS = ['Ж', 'ロ', '貝', 'ش', 'Ɵ', '大'];

// Título com animação de entrada por linha (igual ao TextReveal) + "caos tipográfico" por letra:
// no desktop, hover em uma letra muda só aquela letra (CSS puro); no celular, uma prévia automática
// roda uma vez ao carregar. Esta é a MESMA lógica criada originalmente para o Contact — reutilizada
// aqui para que Home, About e Contact nunca tenham três implementações diferentes da mesma animação.
// `wait`: espera o Loader terminar antes de revelar (usado no Hero da Home, igual ao TextReveal).
export function AnimatedTitle({ lines, className = '', wait = false }: { lines: string[]; className?: string; wait?: boolean }) {
  const { ref, on } = useInView<HTMLHeadingElement>(wait);
  const [preview, setPreview] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const touch = !matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!touch || done) return;
    // ⚡ PEDRO — tempo de espera e duração do easter egg no celular (ms)
    const t1 = setTimeout(() => setPreview(true), 700);
    const t2 = setTimeout(() => { setPreview(false); setDone(true); }, 1500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [done]);

  let gi = -1;
  return (
    <h1
      ref={ref}
      className={`tr ${on ? 'is-in' : ''} ${f1.variable} ${f2.variable} ${f3.variable} ${f4.variable} ${f5.variable} ${f6.variable} ${preview ? 'is-chaos-preview' : ''} ${className}`}
      aria-label={lines.join(' ')}
    >
      {lines.map((line, li) => (
        <span className="tr__line" key={li} aria-hidden="true">
          <span className="tr__in" style={{ transitionDelay: `calc(var(--stagger) * ${li})` }}>
            {line.split('').map((ch) => {
              gi += 1;
              const i = gi;
              const glyph = i % 5 === 3 ? GLYPHS[i % GLYPHS.length] : undefined;
              const style = {
                ['--cf' as string]: `var(${FONT_VARS[i % FONT_VARS.length]})`,
                ['--cc' as string]: COLORS[i % COLORS.length],
                ['--r' as string]: `${((i * 37) % 24) - 12}deg`,
                ['--s' as string]: `${0.85 + ((i * 53) % 30) / 100}`,
                ['--d' as string]: `calc(var(--stagger) * ${i} / 3)`,
              };
              return (
                <span key={i} className="chaos__ch" style={style} data-glyph={glyph}>
                  {ch}
                </span>
              );
            })}
          </span>
        </span>
      ))}
    </h1>
  );
}
