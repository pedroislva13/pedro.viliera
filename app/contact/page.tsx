import type { Metadata } from 'next';
import { siteConfig, socials } from '@/config/site';
import { ContactHeroTitle } from '@/components/ContactHeroTitle';
import { QuoteForm } from '@/components/QuoteForm';

export const metadata: Metadata = { title: 'Contact', description: 'Vamos criar? Fale com o Pedro.' };

export default function Contact() {
  return (
    <section className="page">
      {/* ✏️ PEDRO: ALTERE O TÍTULO AQUI (ex: ['VAMOS', 'CRIAR.']) */}
      <ContactHeroTitle lines={["VAMOS", 'CRIAR', 'JUNTOS.']} className="t-display" />
      <ul className="contact t-subtitle">
        <li><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
        {socials.map((s) => <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></li>)}
        <li className="t-micro">{siteConfig.location}</li>
      </ul>
      <div className="qform-wrap">
        <h2 className="t-micro qform-wrap__title">SOLICITAR ORÇAMENTO</h2>
        <QuoteForm />
      </div>
    </section>
  );
}
