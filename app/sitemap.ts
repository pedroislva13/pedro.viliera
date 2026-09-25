import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { projects } from '@/data/projects';
export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/work', '/about', '/contact', ...projects.map((p) => `/work/${p.slug}`)].map((r) => ({ url: `${siteConfig.url}${r}`, lastModified: new Date() }));
}
