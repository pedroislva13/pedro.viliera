import type { Metadata } from 'next';
import { siteConfig, socials } from '@/config/site';
import { ContactHeroTitle } from '@/components/ContactHeroTitle';

export const metadata: Metadata = { title: 'Contato', description: 'Vamos criar? Fale com o Pedro.' };

export default function Contact() {
  return (
    <section className="page">
      {/* ✏️ PEDRO: ALTERE O TÍTULO AQUI (ex: ['VAMOS', 'CRIAR.']) */}
      <ContactHeroTitle lines={["VAMOS", 'TRABALHAR', 'JUNTOS.']} className="t-display" />
      <ul className="contact t-subtitle">
        <li><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
        {socials.map((s) => <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></li>)}
        <li className="t-micro">{siteConfig.location}</li>
      </ul>
    </section>
  );
}
