import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects, getProject, getNext, pad } from '@/data/projects';
import { TextReveal } from '@/components/TextReveal';
import { ImageReveal } from '@/components/ImageReveal';
import { ProjectGallery } from '@/components/ProjectGallery';
import { TransitionLink } from '@/components/TransitionLink';

type Props = { params: Promise<{ slug: string }> };
export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }));
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProject((await params).slug);
  return p ? { title: p.title, description: p.shortDescription, openGraph: { images: [p.heroImage] } } : {};
}

export default async function ProjectPage({ params }: Props) {
  const p = getProject((await params).slug);
  if (!p) notFound();
  const next = getNext(p.slug);
  const idx = projects.findIndex((x) => x.slug === p.slug);
  return (
    <article>
      <header className="page phead">
        <span className="t-micro">{pad(idx + 1)} / {pad(projects.length)} — {p.category} — {p.year}</span>
        <TextReveal as="h1" lines={p.title.split(' ')} wait className="t-display" />
      </header>
      <div className="grid"><div className="full"><ImageReveal src={p.heroImage} alt={`${p.title} — imagem principal`} ratio="16 / 9" priority /></div></div>
      <section className="grid pmeta">
        <div className="c-half-l"><h2 className="t-micro">OVERVIEW</h2><p className="t-subtitle">{p.description}</p></div>
        <dl className="c-half-r t-caption">
          <dt className="t-micro">ROLE</dt><dd>{p.services.join(', ')}</dd>
          <dt className="t-micro">TOOLS</dt><dd>{p.tools.join(', ')}</dd>
          <dt className="t-micro">CLIENT</dt><dd>{p.client}</dd>
          <dt className="t-micro">CREDITS</dt><dd>{p.credits.join(', ')}</dd>
        </dl>
      </section>
      <ProjectGallery title={p.title} images={p.images.slice(0, -1)} videos={p.videos} />
      <div className="grid"><div className="full"><ImageReveal src={p.images[p.images.length - 1]} alt={`${p.title} — tela cheia`} ratio="21 / 9" /></div></div>
      <section className="grid pmeta"><div className="c-half-l"><h2 className="t-micro">RESULT</h2><p className="t-subtitle">{p.result}</p></div></section>
      <TransitionLink href={`/work/${next.slug}`} label={next.title} className="next page" data-cursor="view" data-cursor-label="NEXT">
        <span className="t-micro">NEXT PROJECT</span><span className="t-display">{next.title}</span>
      </TransitionLink>
    </article>
  );
}
