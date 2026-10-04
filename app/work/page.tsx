import type { Metadata } from 'next';
import { projects } from '@/data/projects';
import { TextReveal } from '@/components/TextReveal';
import { WorkList } from '@/components/WorkList';
import { ProjectCard } from '@/components/ProjectCard';
import { ClosingCTA } from '@/components/ClosingCTA';

export const metadata: Metadata = { title: 'Work', description: 'Projetos selecionados de Pedro Vileira.' };

export default function Work() {
  return (
    <>
      <section className="page">
        <TextReveal as="h1" lines={['SELECTED', 'WORK']} className="t-headline" />
      </section>
      {/* cada projeto vem de data/projects.ts: adicionou lá, aparece aqui, no índice e na página própria */}
      <section className="grid work" aria-label="Projects">
        {projects.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} total={projects.length} detailed />)}
      </section>
      <section className="pindex" aria-label="Project index">
        <h2 className="t-micro pindex__title">INDEX</h2>
        <WorkList projects={projects} />
      </section>
      <ClosingCTA />
    </>
  );
}
