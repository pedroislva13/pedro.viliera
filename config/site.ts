// ✏️ PEDRO — TODAS AS INFORMAÇÕES DO SITE FICAM AQUI
export const siteConfig = {
  url: 'https://pedrovileira.com', // ✏️ PEDRO: ALTERE O DOMÍNIO AQUI (usado no SEO e sitemap)
  name: 'PEDRO VILEIRA', // ✏️ PEDRO: ALTERE SEU NOME AQUI
  role: 'DESIGNER / ART DIRECTOR / VISUAL CREATOR', // ✏️ PEDRO: ALTERE SEU CARGO AQUI
  description: 'Design, direção de arte, branding, fotografia e vídeo. Portfólio de Pedro Vileira.', // ✏️ PEDRO: ALTERE A DESCRIÇÃO (SEO)
  bio: 'Desenho marcas, campanhas e sistemas visuais. Fotografo e edito o que desenho. Trabalho na distância entre a ideia e a peça final.', // ✏️ PEDRO: ALTERE SUA BIO AQUI
  location: 'SÃO PAULO, BR', // ✏️ PEDRO: ALTERE SUA LOCALIZAÇÃO AQUI
  email: 'pedrovileirx@gmail.com', // ✏️ PEDRO: ALTERE O E-MAIL AQUI
  instagram: 'https://instagram.com/pdrovileira', // ✏️ PEDRO: ALTERE O LINK DO INSTAGRAM AQUI
  whatsapp: 'https://wa.me/5512996853826', // ✏️ PEDRO: ALTERE O WHATSAPP AQUI (formato wa.me/55DDDNUMERO)
  ogImage: '/og.jpg', // 🖼️ PEDRO — SUBSTITUA POR UMA IMAGEM 1200x630 EM /public
  // ✏️ PEDRO: ALTERE AS DISCIPLINAS, FERRAMENTAS E EXPERIÊNCIA DA PÁGINA ABOUT
  disciplines: ['DESIGN', 'ART DIRECTION', 'BRANDING', 'PHOTOGRAPHY', 'VIDEO', 'DIGITAL'],
  tools: ['Photoshop', 'Illustrator', 'Canva', 'CapCut', 'Black Magic Camera', 'Figma', 'Blender', 'Lightroom'],
  experience: [
    { period: '2026 —', role: 'Art Director / Content Creator', place: 'Colinas Imóveis' },
    { period: '2024 — 2026', role: 'Freelance Designer', place: 'Clientes diversos' },
  ],
};
export const socials = [
  { label: 'INSTAGRAM', href: siteConfig.instagram },
  { label: 'LINKEDIN', href: siteConfig.linkedin },
  { label: 'BEHANCE', href: siteConfig.behance },
  { label: 'WHATSAPP', href: siteConfig.whatsapp },
];
