import type { Metadata } from 'next';
import { projects } from '@/data/projects';
import { TextReveal } from '@/components/TextReveal';
import { WorkList } from '@/components/WorkList';

export const metadata: Metadata = { title: 'Work', description: 'Projetos selecionados de Pedro Vileira.' };

export default function Work() {
  return (
    <section className="page">
      <TextReveal as="h1" lines={['SELECTED', 'WORK']} className="t-headline" />
      <WorkList projects={projects} />
    </section>
  );
}
