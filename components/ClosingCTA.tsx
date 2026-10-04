import { ChaosText } from './ContactHeroTitle';
import { TransitionLink } from './TransitionLink';

// Chamada para orçamento: usada no final de /work e dentro de cada projeto. O título usa o mesmo sistema do Contact.
export function ClosingCTA({ eyebrow }: { eyebrow?: string }) {
  return (
    <section className="closing" aria-label="Orçamento">
      {eyebrow && <span className="t-micro closing__eyebrow">{eyebrow}</span>}
      <ChaosText as="h2" lines={["LET'S", 'WORK', 'TOGETHER.']} inView className="t-display" />
      <TransitionLink href="/quote" label="ORÇAMENTO" className="qform__submit" data-cursor="view" data-cursor-label="GO">GET A QUOTE →</TransitionLink>
    </section>
  );
}
