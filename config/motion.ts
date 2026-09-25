import type { CSSProperties } from 'react';
// ⚡ PEDRO — ALTERE A VELOCIDADE DAS ANIMAÇÕES AQUI (ms). Vale para o site inteiro.
export const DURATION = { fast: 450, base: 1000, slow: 1500 };
export const EASE = 'cubic-bezier(0.76, 0, 0.24, 1)'; // ⚡ curva de todas as animações
export const STAGGER = 90; // ⚡ atraso entre linhas/itens (ms)
export const LOADER_MS = 1800; // ⚡ duração da contagem 00→100
export const CURSOR_LERP = 0.16; // ⚡ 0.05 = cursor lento, 0.4 = quase colado no mouse
export const SMOOTH_SCROLL = { duration: 1.2 }; // ⚡ suavidade do scroll (Lenis)
export const HOVER_SCALE = 1.04; // ⚡ zoom da imagem no hover
// Exportado como variáveis CSS pelo layout: uma única fonte de verdade
export const motionVars = {
  '--dur-fast': `${DURATION.fast}ms`, '--dur': `${DURATION.base}ms`, '--dur-slow': `${DURATION.slow}ms`,
  '--ease': EASE, '--stagger': `${STAGGER}ms`, '--hover-scale': HOVER_SCALE,
} as CSSProperties;
