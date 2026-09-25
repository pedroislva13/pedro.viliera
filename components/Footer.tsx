import { siteConfig, socials } from '@/config/site';

export function Footer() {
  return (
    <footer className="footer grid">
      <p className="t-subtitle c-wide">{siteConfig.name}<br /><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
      <ul className="footer__social c-right t-micro">{socials.map((s) => <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></li>)}</ul>
      <p className="t-micro full footer__base"><span>© 2026 {siteConfig.name}</span><span>BUILT WITH INTENTION.</span></p>
    </footer>
  );
}
