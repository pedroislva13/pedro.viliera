import type { Metadata } from 'next';
import { projects, pad } from '@/data/projects';
import { TextReveal } from '@/components/TextReveal';
import { TransitionLink } from '@/components/TransitionLink';

export const metadata: Metadata = { title: 'Work', description: 'Projetos selecionados de Pedro Vileira.' };

export default function Work() {
  return (
    <section className="page">
      <TextReveal as="h1" lines={['SELECTED', 'WORK']} className="t-headline" />
      <ul className="rows">
        {projects.map((p, i) => (
          <li key={p.slug}>
            <TransitionLink href={`/work/${p.slug}`} label={p.title} className="row" data-cursor="view" data-cursor-label="VIEW">
              <span className="t-micro">{pad(i + 1)}</span><span className="row__t t-headline">{p.title}</span><span className="t-micro">{p.category.split(' / ')[0]}</span><span className="t-micro">{p.year}</span>
            </TransitionLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
