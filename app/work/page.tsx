import type { Metadata } from 'next';
import { projects } from '@/data/projects';
import { TextReveal } from '@/components/TextReveal';
import { WorkList } from '@/components/WorkList';
import { ProjectCard } from '@/components/ProjectCard';
import { ClosingCTA } from '@/components/ClosingCTA';
import { ChaosText } from '@/components/ContactHeroTitle';

export const metadata: Metadata = {
  title: 'Trabalhos',
  description: 'Projetos selecionados de Pedro Vileira.'
};

export default function Work() {
  return (
    <>
      <section className="page">
        <ChaosText
          as="h1"
          lines={['SELECIONE', 'UM PROJETO!']}
          className="t-headline"
        />
      </section>

      {/* cada projeto vem de data/projects.ts: adicionou lá, aparece aqui, no índice e na página própria */}
      <section className="grid work" aria-label="Projects">
        {projects.map((p, i) => (
          <ProjectCard
            key={p.slug}
            project={p}
            index={i}
            total={projects.length}
            detailed
          />
        ))}
      </section>

      <section className="pindex" aria-label="Índice de projetos">
        <h2 className="t-micro pindex__title">INICIO</h2>
        <WorkList projects={projects} />
      </section>

      <ClosingCTA />
    </>
  );
}
