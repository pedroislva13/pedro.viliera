import { siteConfig } from '@/config/site';
import { projects } from '@/data/projects';
import { TextReveal } from '@/components/TextReveal';
import { ProjectCard } from '@/components/ProjectCard';
import { TransitionLink } from '@/components/TransitionLink';
import { HeroStickers } from '@/components/HeroStickers';
import { ContactHeroTitle } from '@/components/ContactHeroTitle';

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
        <div className="hero__row t-micro"><span>SCROLL TO EXPLORE ↓</span><span>SELECTED WORK (01–{String(featured.length).padStart(2, '0')})</span></div>
      </section>
      <section className="grid work" aria-label="Selected work">
        {featured.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} total={featured.length} />)}
        <div className="full work__all"><TransitionLink href="/work" label="WORK" className="t-headline" data-cursor="view" data-cursor-label="ALL">ALL WORK →</TransitionLink></div>
      </section>
    </>
  );
}
