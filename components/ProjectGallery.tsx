import { ImageReveal } from './ImageReveal';
import { Media } from './Media';

// Padrão repete: largo, meio-esquerda, meio-direita, pequeno, largo... (assimetria sem carnaval de efeitos)
const pattern = [
  { cls: 'full', ratio: '16 / 9' }, { cls: 'c-half-l', ratio: '4 / 5' }, { cls: 'c-half-r', ratio: '4 / 5' }, { cls: 'c-small', ratio: '1 / 1' }, { cls: 'c-wide', ratio: '3 / 2' },
];
export function ProjectGallery({ title, images, videos }: { title: string; images: string[]; videos: string[] }) {
  return (
    <section className="grid gallery" aria-label="Galeria">
      {images.map((src, i) => { const s = pattern[i % pattern.length]; return <div key={src} className={s.cls}><ImageReveal src={src} alt={`${title} — imagem ${i + 1}`} ratio={s.ratio} /></div>; })}
      {videos.map((src, i) => <div key={src} className="full" style={{ aspectRatio: '16 / 9', position: 'relative' }}><Media src={src} alt={`${title} — vídeo ${i + 1}`} /></div>)}
    </section>
  );
}
