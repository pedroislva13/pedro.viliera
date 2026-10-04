import { siteConfig } from '@/config/site';
import { AnimatedTitle } from '@/components/AnimatedTitle';
import { HeroStickers } from '@/components/HeroStickers';
import { ImageReveal } from '@/components/ImageReveal';
import { TransitionLink } from '@/components/TransitionLink';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__row t-micro"><span>{siteConfig.role}</span><span>{siteConfig.location}</span><span>2026</span></div>
        {/* ✏️ PEDRO: ALTERE SEU NOME AQUI (uma string por linha) */}
        <div className="hero__name">
          <AnimatedTitle lines={['PEDRO', 'VILEIRA']} wait className="t-display" />
          {/* ✏️ PEDRO: ALTERE O TEXTO EM HeroStickers.tsx; as cores ficam em globals.css (.sticker--a/b/c) */}
          <HeroStickers />
        </div>
        <div className="hero__row t-micro"><span>SCROLL TO EXPLORE ↓</span><span>DESIGNER / ART DIRECTOR</span></div>
      </section>

      {/* ===== BLOCO 1 — foto à esquerda, texto à direita ===== */}
      <section className="grid home-about">
        {/* 🖼️ PEDRO — SUBSTITUA POR UMA FOTO SUA EM /public/images/about/pedro-1.jpg */}
        <ImageReveal src="/images/about/pedro-1.jpg" alt="Pedro Vileira" ratio="4 / 5" className="c-half-l" />
        <div className="c-half-r home-about__text">
          <p className="t-micro">QUEM SOU EU</p>
          {/* ✏️ PEDRO: ALTERE ESSE TEXTO EM config/site.ts (campo bio) */}
          <p className="t-subtitle">{siteConfig.bio}</p>
        </div>
      </section>

      {/* ===== BLOCO 2 — texto à esquerda, foto à direita ===== */}
      <section className="grid home-about">
        <div className="c-half-l home-about__text">
          <p className="t-micro">COMO EU PENSO</p>
          {/* ✏️ PEDRO: ALTERE ESSE TEXTO EM config/site.ts (campo approach) */}
          <p className="t-subtitle">{siteConfig.approach}</p>
        </div>
        {/* 🖼️ PEDRO — SUBSTITUA POR UMA FOTO SUA EM /public/images/about/pedro-2.jpg */}
        <ImageReveal src="/images/about/pedro-2.jpg" alt="Pedro Vileira" ratio="4 / 5" className="c-right" />
      </section>

      {/* ===== CTA final — leva para Trabalhos, projetos não aparecem na Home ===== */}
      <section className="grid home-cta">
        <p className="t-headline full">SEE MY<br />WORK.</p>
        <div className="full work__all">
          <TransitionLink href="/work" label="WORK" className="t-headline" data-cursor="view" data-cursor-label="GO">VIEW PROJECTS →</TransitionLink>
        </div>
      </section>
    </>
  );
}
