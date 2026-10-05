import type { Metadata } from 'next';
import { TextReveal } from '@/components/TextReveal';
import { QuoteForm } from '@/components/QuoteForm';
import { ChaosText } from '@/components/ContactHeroTitle';

export const metadata: Metadata = { title: 'Orçamento', description: 'Peça um orçamento para o seu projeto.' };

export default function Quote() {
  return (
    <section className="page">
      <TextReveal as="h1" lines={['VAMOS PARA', 'O ORÇAMENTO.']} className="t-display" />
      <div className="qform-wrap">
        <h2 className="t-micro qform-wrap__title">SOLICITAR ORÇAMENTO</h2>
        <QuoteForm />
      </div>
    </section>
  );
}
