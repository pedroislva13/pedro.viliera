'use client';
import Image from 'next/image';
import { useState } from 'react';

// Imagem (next/image) ou vídeo (.mp4/.webm). Se o arquivo não existir, mostra um fallback elegante.
export function Media({ src, alt, priority = false, sizes = '100vw' }: { src: string; alt: string; priority?: boolean; sizes?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div className="fallback t-micro" role="img" aria-label={alt}>{alt}<br />{src}</div>;
  if (/\.(mp4|webm)$/i.test(src)) return <video className="media" src={src} autoPlay muted loop playsInline preload="metadata" aria-label={alt} onError={() => setFailed(true)} />;
  return <Image className="media" src={src} alt={alt} fill sizes={sizes} priority={priority} onError={() => setFailed(true)} />;
}
