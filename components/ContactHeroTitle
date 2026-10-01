'use client';
import { useEffect, useRef, useState } from 'react';
import { Permanent_Marker, Bebas_Neue, Caveat, Press_Start_2P, Playfair_Display, Rubik_Mono_One } from 'next/font/google';
import { useInView } from '@/lib/hooks';

// Fontes só para o efeito de "caos tipográfico" no título do Contact — não afetam o resto do site.
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
const glyphFor = (i: number) => (i % 5 === 3 ? GLYPHS[i % GLYPHS.length] : null);

// Título do Contact: mantém a mesma animação de entrada por linha do resto do site (classes .tr/.tr__line/.tr__in),
// e adiciona o efeito de "caos tipográfico" por letra ao passar o mouse (desktop) ou uma vez ao carregar (mobile).
export function ContactHeroTitle({ lines, className = '' }: { lines: string[]; className?: string }) {
  const { ref, on } = useInView<HTMLHeadingElement>();
  const [chaos, setChaos] = useState(false);
  const [mobileDone, setMobileDone] = useState(false);
  const touch = useRef(false);

  useEffect(() => {
    touch.current = !matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!touch.current || mobileDone) return;
    // ⚡ PEDRO — tempo de espera e duração do easter egg no celular (ms)
    const t1 = setTimeout(() => setChaos(true), 700);
    const t2 = setTimeout(() => { setChaos(false); setMobileDone(true); }, 1500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [mobileDone]);

  let gi = -1;
  return (
    <h1
      ref={ref}
      className={`tr ${on ? 'is-in' : ''} ${f1.variable} ${f2.variable} ${f3.variable} ${f4.variable} ${f5.variable} ${f6.variable} ${className}`}
      aria-label={lines.join(' ')}
      onMouseEnter={() => { if (!touch.current) setChaos(true); }}
      onMouseLeave={() => { if (!touch.current) setChaos(false); }}
    >
      {lines.map((line, li) => (
        <span className="tr__line" key={li} aria-hidden="true">
          <span className="tr__in" style={{ transitionDelay: `calc(var(--stagger) * ${li})` }}>
            {line.split('').map((ch) => {
              gi += 1;
              const i = gi;
              const glyph = chaos ? glyphFor(i) : null;
              return (
                <span
                  key={i}
                  className={`chaos__ch ${chaos ? 'is-chaos' : ''}`}
                  style={chaos ? { fontFamily: `var(${FONT_VARS[i % FONT_VARS.length]})`, color: COLORS[i % COLORS.length], ['--r' as string]: `${((i * 37) % 24) - 12}deg`, ['--s' as string]: `${0.85 + ((i * 53) % 30) / 100}` } : undefined}
                >
                  {glyph ?? ch}
                </span>
              );
            })}
          </span>
        </span>
      ))}
    </h1>
  );
}
