export type Project = {
  id: number; slug: string; title: string; subtitle: string; category: string; year: string;
  description: string; shortDescription: string; result: string;
  coverImage: string; heroImage: string; images: string[]; videos: string[];
  services: string[]; tools: string[]; client: string; credits: string[]; color: string; featured: boolean;
};
// 🖼️ PEDRO — SUBSTITUA PELOS ARQUIVOS REAIS: /public/images/projects/<slug>/cover.jpg, hero.jpg, 01.jpg ... 05.jpg
const media = (slug: string) => ({
  coverImage: `/images/projects/${slug}/cover.jpg`,
  heroImage: `/images/projects/${slug}/hero.jpg`,
  images: [1, 2, 3, 4, 5].map((n) => `/images/projects/${slug}/0${n}.jpg`), // ✏️ PEDRO: ADICIONE NOVAS IMAGENS AQUI
  videos: [] as string[], // ✏️ PEDRO: ADICIONE VÍDEOS (.mp4) AQUI, ex: '/videos/colinas/reel.mp4'
});
const tools = ['Photoshop', 'Illustrator', 'Figma'];
// ✏️ PEDRO — PROJETOS DE EXEMPLO. Edite, apague ou duplique. A ordem aqui é a ordem no site.
export const projects: Project[] = [
  { id: 1, slug: 'colinas-imoveis', title: 'COLINAS IMÓVEIS', subtitle: 'Direção visual para o mercado imobiliário', category: 'ART DIRECTION / SOCIAL MEDIA / REAL ESTATE', year: '2026',
    description: 'Projeto de direção visual e comunicação digital para o mercado imobiliário.', shortDescription: 'Direção visual e comunicação digital para o mercado imobiliário.',
    result: 'Substitua por resultados reais: alcance, engajamento, leads.', services: ['Art Direction', 'Graphic Design', 'Social Media', 'Photography'], tools, client: 'Colinas Imóveis', credits: ['Pedro Vileira — Art Direction'], color: '#5563ff', featured: true, ...media('colinas') },
  { id: 2, slug: 'toto', title: 'TOTÓ', subtitle: 'Aplicativo para tutores de cães', category: 'BRANDING / PRODUCT DESIGN / UI', year: '2026',
    description: 'Conceito de aplicativo voltado para tutores de cães, com experiência personalizada para cada pet.', shortDescription: 'App conceito com experiência personalizada para cada pet.',
    result: 'Substitua pelo resultado do projeto.', services: ['Branding', 'Product Design', 'UI'], tools, client: 'Projeto autoral', credits: ['Pedro Vileira'], color: '#5563ff', featured: true, ...media('toto') },
  { id: 3, slug: 'eleve', title: 'ELEVE', subtitle: 'Identidade de marca', category: 'BRAND IDENTITY / ART DIRECTION', year: '2026',
    description: 'Descrição do projeto ELEVE.', shortDescription: 'Identidade de marca e direção de arte.',
    result: 'Substitua pelo resultado do projeto.', services: ['Brand Identity', 'Art Direction'], tools, client: 'Cliente', credits: ['Pedro Vileira'], color: '#5563ff', featured: true, ...media('eleve') },
  { id: 4, slug: 'raiz', title: 'RAIZ', subtitle: 'Branding e digital', category: 'BRANDING / DIGITAL', year: '2026',
    description: 'Descrição do projeto RAIZ.', shortDescription: 'Branding e presença digital.',
    result: 'Substitua pelo resultado do projeto.', services: ['Branding', 'Digital'], tools, client: 'Cliente', credits: ['Pedro Vileira'], color: '#5563ff', featured: true, ...media('raiz') },
  { id: 5, slug: 'safra', title: 'SAFRA', subtitle: 'Campanha', category: 'ART DIRECTION / CAMPAIGN', year: '2026',
    description: 'Descrição do projeto SAFRA.', shortDescription: 'Direção de arte e campanha.',
    result: 'Substitua pelo resultado do projeto.', services: ['Art Direction', 'Campaign'], tools, client: 'Cliente', credits: ['Pedro Vileira'], color: '#5563ff', featured: true, ...media('safra') },
  { id: 6, slug: 'personal-work', title: 'PERSONAL WORK', subtitle: 'Fotografia e experimentos', category: 'PHOTOGRAPHY / EXPERIMENTAL', year: '2026',
    description: 'Trabalhos autorais de fotografia e experimentação visual.', shortDescription: 'Fotografia e experimentação visual.',
    result: 'Substitua pelo texto final.', services: ['Photography', 'Experimental'], tools: ['Lightroom', 'Photoshop'], client: 'Autoral', credits: ['Pedro Vileira'], color: '#5563ff', featured: true, ...media('personal-work') },
];
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const getNext = (slug: string) => projects[(projects.findIndex((p) => p.slug === slug) + 1) % projects.length];
export const pad = (n: number) => String(n).padStart(2, '0');
