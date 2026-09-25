# PEDRO VILEIRA — Portfólio

Next.js 15 + TypeScript. Dependências: `next`, `react`, `lenis` (smooth scroll). Animações são CSS + Web Animations API (sem GSAP/Framer, de propósito).

## 1–2. Instalar e rodar
```bash
npm install
npm run dev      # http://localhost:3000
```
## 3–4. Nome e bio
`config/site.ts` (`name`, `bio`, `role`). O nome grande da Home está em `app/page.tsx` (`lines={['PEDRO','VILEIRA']}`).
## 5. Trocar imagens
Coloque os arquivos em `public/images/projects/<slug>/` com os nomes `cover.jpg`, `hero.jpg`, `01.jpg`…`05.jpg` (ou mude os caminhos em `data/projects.ts`). Sem arquivo, o site mostra um fallback.
## 6–7. Adicionar / remover projeto
`data/projects.ts`: duplique um objeto e mude `slug`, `title`, etc. (a página `/work/<slug>` nasce sozinha). Para remover, apague o objeto. `featured: false` esconde da Home. Vídeos: `videos: ['/videos/x.mp4']` (coloque em `public/videos/`).
## 8–9. Links e e-mail
`config/site.ts` (`instagram`, `linkedin`, `behance`, `whatsapp`, `email`). Também troque `url` (domínio) e `ogImage`.
## 10. Cores
`styles/globals.css`, bloco `:root` (`--color-accent` é a cor de destaque).
## 11. Fonte
`app/layout.tsx` (import do `next/font/google`) e `--font-sans` em `globals.css`.
## 12–13. Animações e velocidade
`config/motion.ts` (duração, easing, stagger, loader, scroll, zoom do hover). Efeitos de entrada: `TextReveal.tsx` e `ImageReveal.tsx` + regras `.tr`/`.ir` no CSS.
## 14. Cursor
`components/Cursor.tsx` (lógica) e `.cursor` no CSS (tamanhos). Use `data-cursor="view" data-cursor-label="VIEW"` em qualquer elemento.
## 15. Menu
`components/Navigation.tsx` (`links`) e `.nav`/`.menu` no CSS.
## 16. Publicar (Vercel)
Suba o projeto no GitHub → vercel.com → New Project → importe o repositório → Deploy. Depois conecte seu domínio e atualize `url` em `config/site.ts`.

Procure por `✏️ PEDRO`, `🖼️ PEDRO`, `🎨 PEDRO` e `⚡ PEDRO` no código para achar tudo que é editável.
