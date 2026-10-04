import type { Metadata } from 'next';
import { TextReveal } from '@/components/TextReveal';
import { QuoteForm } from '@/components/QuoteForm';

export const metadata: Metadata = { title: 'Orçamento', description: 'Solicite um orçamento com Pedro Vileira.' };

export default function Orcamento() {
  return (
    <section className="page">
      {/* ✏️ PEDRO: ALTERE O TÍTULO AQUI */}
      <TextReveal as="h1" lines={['GET A', 'QUOTE']} className="t-display" />
      <div className="qform-wrap">
        <QuoteForm />
      </div>
    </section>
  );
}
