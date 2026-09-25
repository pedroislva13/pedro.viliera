import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { TextReveal } from '@/components/TextReveal';

export const metadata: Metadata = { title: 'About', description: siteConfig.bio };

export default function About() {
  return (
    <section className="page">
      {/* ✏️ PEDRO: ALTERE A FRASE PRINCIPAL AQUI */}
      <TextReveal as="h1" lines={['Ideias que viram realidade.']} className="t-headline" />
      <div className="grid about">
        <p className="t-subtitle c-half-l">{siteConfig.bio}</p>
        <div className="c-half-r about__cols t-caption">
          <div><h2 className="t-micro">SELECTED DISCIPLINES</h2><ul>{siteConfig.disciplines.map((d) => <li key={d}>{d}</li>)}</ul></div>
          <div><h2 className="t-micro">TOOLS</h2><ul>{siteConfig.tools.map((d) => <li key={d}>{d}</li>)}</ul></div>
          <div><h2 className="t-micro">EXPERIENCE</h2><ul>{siteConfig.experience.map((e) => <li key={e.role}>{e.period}<br />{e.role}, {e.place}</li>)}</ul></div>
        </div>
      </div>
    </section>
  );
}
