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
    result: 'O desempenho da Colinas Imóveis Prime nas redes sociais em 2026 reflete a força de um posicionamento digital voltado ao mercado imobiliário de alto padrão. Com uma estratégia focada em tours virtuais imersivos, vídeos dinâmicos dos condomínios mais exclusivos da região e uma estética sofisticada que valoriza o estilo de vida prime, a marca conseguiu estreitar o relacionamento com clientes exigentes. Mais do que apenas exibir imóveis, os conteúdos funcionam como um poderoso canal de atração de leads qualificados, consolidando a autoridade da imobiliária no ambiente digital e transformando engajamento em conexões reais.', services: ['Art Direction', 'Graphic Design', 'Social Media', 'Photography'], tools, client: 'Colinas Imóveis', credits: ['Pedro Vileira — Art Direction'], color: '#5563ff', featured: true, ...media('colinas') },
  { id: 2, slug: 'toto', title: 'TOTÓ', subtitle: 'Aplicativo para tutores de cães', category: 'BRANDING / PRODUCT DESIGN / UI', year: '2026',
    description: 'Conceito de aplicativo voltado para tutores de cães, com experiência personalizada para cada pet.', shortDescription: 'App conceito com experiência personalizada para cada pet.',
    result: 'O projeto conquistou o primeiro lugar na categoria tecnologia no EMPREENDE 25, concurso que reúne escolas da rede municipal de São José dos Campos, em parceria com a Receita Federal.', services: ['Branding', 'Product Design', 'UI'], tools, client: 'Startup Totó', credits: ['Pedro Vileira'], color: '#5563ff', featured: true, ...media('toto') },
  { id: 3, slug: 'allone-conf', title: 'ALL ONE CONF', subtitle: 'Identidade de visual', category: 'BRAND IDENTITY / ART DIRECTION', year: '2026',
    description: 'A All One Conf é a conferência cristã de jovens definitiva, reunindo uma galera de várias partes para dias intensos de adoração, mensagens transformadoras, comunhão e muita energia para viver a fé de forma autêntica e relevante na geração atual.', shortDescription: 'Identidade Visual e direção de arte.',
    result: 'Uma identidade visualinspirado no estilo gótico, incluindo um logotipo marcante, artes impactantes para o Instagram, materiais para o palco e camisas exclusivas que geram conexão imediata com os jovens e profissionalizam o evento.', services: ['Brand Identity', 'Art Direction'], tools, client: 'All One conf.', credits: ['Pedro Vileira'], color: '#5563ff', featured: true, ...media('allone') },
  { id: 4, slug: 'raiz', title: 'RAIZ', subtitle: 'Branding e digital', category: 'BRANDING / DIGITAL', year: '2026',
    description: 'A RAIZ é a escova de dentes ecológica que une alta performance e sustentabilidade. Com cabo feito de plástico à base de amido (fonte renovável) e cerdas naturais, ela limpa seus dentes com eficiência enquanto cuida do planeta, reduzindo o impacto do plástico comum.', shortDescription: 'Branding e presença digital.',
    result: 'Como designer do projeto, o resultado será um produto com excelente aceitação estética e funcional, mas cujo sucesso sustentável dependerá diretamente de como você resolveu o desafio das cerdas e orientou o usuário sobre o descarte correto.', services: ['Branding', 'Digital'], tools, client: 'RAIZ LTDA.', credits: ['Pedro Vileira'], color: '#5563ff', featured: true, ...media('raiz') },
  { id: 5, slug: 'safra', title: 'SAFRA', subtitle: 'Campanha', category: 'ART DIRECTION / CAMPAIGN', year: '2026',
    description: 'Descrição do projeto SAFRA.', shortDescription: 'Direção de arte e campanha.',
    result: 'Substitua pelo resultado do projeto.', services: ['Art Direction', 'Campaign'], tools, client: 'Cliente', credits: ['Pedro Vileira'], color: '#5563ff', featured: true, ...media('safra') },
  { id: 6, slug: 'personal-work', title: 'PERSONAL WORK', subtitle: 'Fotografia e experimentos', category: 'PHOTOGRAPHY / EXPERIMENTAL', year: '2026',
    description: 'Trabalhos autorais de fotografia e experimentação visual.', shortDescription: 'Fotografia e experimentação visual.',
    services: ['Photography', 'Experimental'], tools: ['Lightroom', 'Photoshop'], client: 'Autoral', credits: ['Pedro Vileira'], color: '#5563ff', featured: true, ...media('personal-work') },
];
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const getNext = (slug: string) => projects[(projects.findIndex((p) => p.slug === slug) + 1) % projects.length];
export const pad = (n: number) => String(n).padStart(2, '0');
