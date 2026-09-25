'use client';
import Link from 'next/link';
import { usePageTransition } from './PageTransition';

type Props = Omit<React.ComponentProps<typeof Link>, 'href'> & { href: string; label?: string; onNavigate?: () => void };
// Use no lugar de <Link> para que o clique passe pela transição de página.
export function TransitionLink({ href, label, onNavigate, onClick, children, ...rest }: Props) {
  const { go } = usePageTransition();
  return (
    <Link href={href} {...rest} onClick={(e) => {
      onClick?.(e);
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      e.preventDefault(); onNavigate?.(); go(href, label);
    }}>{children}</Link>
  );
}
