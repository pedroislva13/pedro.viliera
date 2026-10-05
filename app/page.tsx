import { siteConfig, homeBlocks } from '@/config/site';
import { projects } from '@/data/projects';
import { ContactHeroTitle, ChaosText } from '@/components/ContactHeroTitle';
import { ImageReveal } from '@/components/ImageReveal';
import { TransitionLink } from '@/components/TransitionLink';
import { HeroStickers } from '@/components/HeroStickers';

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  return (
    <>
      <section className="hero">
        <div className="hero__row t-micro"><span>{siteConfig.role}</span><span>{siteConfig.location}</span><span>2026</span></div>
                {/* ✏️ PEDRO: ALTERE SEU NOME AQUI (uma string por linha) */}
        <div className="hero__name">
          <ContactHeroTitle lines={['PEDRO', 'VILEIRA']} wait className="t-display" />
        {/* ✏️ PEDRO: ALTERE O TEXTO EM HeroStickers.tsx; as cores ficam em globals.css (.sticker--a/b/c) */}
          <HeroStickers />
        </div>
        <div className="hero__row t-micro"><span>ROLE PARA EXPLORAR ↓</span><span>SELECIONE UM PROJETO (01–{String(featured.length).padStart(2, '0')})</span></div>
      </section>
      {/* ✏️ PEDRO: textos e fotos dos blocos ficam em config/site.ts (homeBlocks). Bloco 1: foto à esquerda; bloco 2: foto à direita */}
      {homeBlocks.map((b, i) => (
        <section key={b.label} className={`grid hblock ${i % 2 ? 'hblock--flip' : ''}`} aria-label={b.label}>
          <div className="c-half-l hblock__img"><ImageReveal src={b.image} alt={b.alt} ratio="4 / 5" sizes="(min-width:1024px) 50vw, 100vw" /></div>
          <div className="c-half-r hblock__text">
            <span className="t-micro hblock__label">( {b.label} )</span>
            <ChaosText as="h2" lines={[b.title]} inView className="t-headline hblock__title" />
            <p className="t-subtitle">{b.text}</p>
            {b.list.length > 0 && <ul className="hblock__list t-micro">{b.list.map((a) => <li key={a}>{a}</li>)}</ul>}
            {b.link && <TransitionLink href={b.link.href} label="ABOUT" className="t-micro hblock__more" data-cursor="view" data-cursor-label="ABOUT">{b.link.label}</TransitionLink>}
          </div>
        </section>
      ))}
      <section className="hcta" aria-label="Trabalhos">
        <ChaosText as="h2" lines={['VEJA OS MEUS TRABALHOS!']} inView className="t-headline" />
        <TransitionLink href="/work" label="TRABALHOS" className="qform__submit" data-cursor="view" data-cursor-label="GO">TRABALHOS →</TransitionLink>
      </section>
    </>
  );
}
