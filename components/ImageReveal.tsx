'use client';

import { useInView } from '@/lib/hooks';
import { Media } from './Media';

export function ImageReveal({
  src,
  alt,
  ratio = '4 / 5',
  priority,
  sizes,
  className = '',
}: {
  src: string;
  alt: string;
  ratio?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  const { ref, on } = useInView();

  return (
    <div
      ref={ref}
      className={`ir ${on ? 'is-in' : ''} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <div className="ir__in">
        <Media
          src={src}
          alt={alt}
          priority={priority}
          sizes={sizes}
        />
      </div>
    </div>
  );
}
