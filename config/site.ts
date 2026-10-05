// ✏️ PEDRO — TODAS AS INFORMAÇÕES DO SITE FICAM AQUI
export const siteConfig = {
  url: 'https://pedrovileira.com', // ✏️ PEDRO: ALTERE O DOMÍNIO AQUI (usado no SEO e sitemap)
  name: 'PEDRO VILEIRA', // ✏️ PEDRO: ALTERE SEU NOME AQUI
  role: 'DESIGNER / ART DIRECTOR / VISUAL CREATOR', // ✏️ PEDRO: ALTERE SEU CARGO AQUI
  description: 'Design, direção de arte, branding, fotografia e vídeo. Portfólio de Pedro Vileira.', // ✏️ PEDRO: ALTERE A DESCRIÇÃO (SEO)
  bio: 'Desenho marcas, campanhas e sistemas visuais. Fotografo e edito o que desenho. Trabalho na distância entre a ideia e a peça final.', // ✏️ PEDRO: ALTERE SUA BIO AQUI
  approach: 'Estratégia, estética, narrativa e execução — nessa ordem, sempre. Penso o projeto inteiro antes de abrir qualquer programa.', // ✏️ PEDRO: ALTERE COMO VOCÊ DESCREVE SEU PROCESSO AQUI
  location: 'SÃO JOSÉ DOS CAMPOS, BR', // ✏️ PEDRO: ALTERE SUA LOCALIZAÇÃO AQUI
  email: 'pedrovileirax@gmail.com', // ✏️ PEDRO: ALTERE O E-MAIL AQUI
  instagram: 'https://instagram.com/pdrovileira', // ✏️ PEDRO: ALTERE O LINK DO INSTAGRAM AQUI
  linkedin: 'https://www.linkedin.com/in/pedro-vileira-0b10b9441', // ✏️ PEDRO: SEU LINKEDIN (deixe '' se ainda não tiver — some do site sozinho)
  behance: 'https://www.behance.net/pedrovileira', // ✏️ PEDRO: SEU BEHANCE (deixe '' se ainda não tiver — some do site sozinho)
  whatsapp: 'https://wa.me/5512996853826', // ✏️ PEDRO: ALTERE O WHATSAPP AQUI (formato wa.me/55DDDNUMERO)
  ogImage: '/og.jpg', // 🖼️ PEDRO — SUBSTITUA POR UMA IMAGEM 1200x630 EM /public
  web3formsKey: '3794356d-1bde-47d1-b6ee-4a2e807b54cf', // 🔌 PEDRO — pegue grátis em web3forms.com (veja instruções da resposta)

  // ✏️ PEDRO: ALTERE AS DISCIPLINAS, FERRAMENTAS E EXPERIÊNCIA DA PÁGINA ABOUT
  disciplines: ['DESIGN', 'ART DIRECTION', 'BRANDING', 'PHOTOGRAPHY', 'VIDEO', 'DIGITAL'],
  tools: ['Photoshop', 'Illustrator', 'Canva', 'CapCut', 'Affinity', 'Figma', 'Black Magic Camera', 'Lightroom'],
  experience: [
    { period: '2026 —', role: 'Art Director / Content Creator', place: 'Colinas Imóveis' },
    { period: '2024 — 2026', role: 'Freelance Designer', place: 'Clientes diversos' },
  ],
};

// ✏️ PEDRO — links vazios ('') são removidos automaticamente da lista abaixo
export const socials = [
  { label: 'INSTAGRAM', href: siteConfig.instagram },
  { label: 'LINKEDIN', href: siteConfig.linkedin },
  { label: 'BEHANCE', href: siteConfig.behance },
  { label: 'WHATSAPP', href: siteConfig.whatsapp },
].filter((s) => s.href);

// ✏️ PEDRO — BLOCOS EDITORIAIS DA HOME (foto + texto). Ordem: 1º foto à esquerda, 2º foto à direita.
// 🖼️ Coloque suas fotos em /public/images/home/ (pedro-01.jpg, pedro-02.jpg) — proporção 4:5, ex: 1600x2000px.
export const areas = [
  'Marketing digital',
  'Social media',
  'Direção de arte',
  'Design gráfico',
  'Fotografia',
  'Videomaker',
  'Criação de conteúdo',
  'Storytelling',
  'Estratégia de marca e comunicação'
];

export const homeBlocks = [
  {
    image: '/images/home/pedro-01.JPG',
    alt: 'Retrato de Pedro Vileira',
    label: 'QUEM SOU',
    title: 'Estratégia, estética, narrativa e execução.',
    text: 'Sou Pedro Vileira. Crio marcas, campanhas e conteúdo — do plano ao enquadramento, do roteiro à peça final. Cada área trabalha a favor da outra para que a ideia chegue inteira ao público.',
    list: [] as string[],
    link: null as { href: string; label: string } | null
  },
  {
    image: '/images/home/pedro-02.jpg',
    alt: 'Pedro Vileira em processo criativo',
    label: 'COMO EU TRABALHO',
    title: 'Começo pelo porquê. Termino no detalhe.',
    text: 'Entendo a marca e o público, traduzo isso em linguagem visual e narrativa e acompanho a execução até a peça final. Fotografia, vídeo e design nascem juntos, não em etapas separadas.',
    list: areas,
    link: { href: '/about', label: 'MAIS SOBRE MIM →' }
  }
];
