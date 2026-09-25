import { TransitionLink } from '@/components/TransitionLink';
export default function NotFound() {
  return (
    <section className="page">
      <p className="t-display">404</p>
      <p className="t-subtitle">THIS PAGE DOESN&apos;T EXIST.</p>
      <TransitionLink href="/" label="HOME" className="t-headline">BACK TO HOME →</TransitionLink>
    </section>
  );
}
