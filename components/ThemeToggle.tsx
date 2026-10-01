'use client';
import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';
const KEY = 'pv-theme'; // chave do localStorage (o script no <head> do layout.tsx lê a mesma chave)

// Botão fixo (canto inferior direito) que alterna entre tema escuro (padrão) e claro.
// O tema é aplicado como data-theme="light" no <html>; as cores ficam em globals.css (seção TEMA).
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem(KEY, next); } catch { /* modo privado: o tema só vale nesta visita */ }
    setTheme(next);
  };

  const label = theme === 'light' ? 'Ativar tema escuro' : 'Ativar tema claro';
  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-label={label} title={label}>
      {/* sol (aparece no tema escuro) e lua (aparece no tema claro); a troca é feita via CSS */}
      <svg className="theme-toggle__icon theme-toggle__sun" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      <svg className="theme-toggle__icon theme-toggle__moon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
    </button>
  );
}
