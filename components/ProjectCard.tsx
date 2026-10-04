import type { Project } from '@/data/projects';
import { pad } from '@/data/projects';
import { TransitionLink } from './TransitionLink';
import { ImageReveal } from './ImageReveal';

// Layout editorial: cards pares à esquerda, ímpares à direita (assimetria).
export function ProjectCard({ project: p, index, total, detailed = false }: { project: Project; index: number; total: number; detailed?: boolean }) {
  return (
    <TransitionLink href={`/work/${p.slug}`} label={p.title} className={`card ${index % 2 ? 'c-right' : 'c-wide'}`} data-cursor="view" data-cursor-label="VIEW">
      <div className="card__meta t-micro"><span>{detailed ? 'PROJECT ' : ''}{pad(index + 1)} / {pad(total)}</span><span>{p.category.split(' / ')[0]}</span><span>{p.year}</span></div>
      <ImageReveal src={p.coverImage} alt={`${p.title} — capa do projeto`} ratio={index % 2 ? '4 / 5' : '16 / 10'} sizes="(min-width:1024px) 60vw, 100vw" />
      <h3 className="card__title t-headline">{p.title}</h3>
      {detailed && <p className="card__desc t-caption">{p.shortDescription}</p>}
      <span className="card__view t-micro">VIEW PROJECT →</span>
    </TransitionLink>
  );
}
