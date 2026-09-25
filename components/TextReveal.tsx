'use client';
import { useInView } from '@/lib/hooks';

// Revela por linha (máscara + translate). Para títulos grandes. `wait` = espera o Loader (Hero).
export function TextReveal({ lines, as = 'div', className = '', wait = false }: { lines: string[]; as?: React.ElementType; className?: string; wait?: boolean }) {
  const { ref, on } = useInView<HTMLElement>(wait);
  const Tag = as;
  return (
    <Tag ref={ref} className={`tr ${on ? 'is-in' : ''} ${className}`} aria-label={lines.join(' ')}>
      {lines.map((l, i) => (
        <span className="tr__line" key={i} aria-hidden="true"><span className="tr__in" style={{ transitionDelay: `calc(var(--stagger) * ${i})` }}>{l}</span></span>
      ))}
    </Tag>
  );
}
