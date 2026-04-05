import type { MetadataRoute } from 'next';

import { siteConfig } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/session', '/workbook', '/temperament-check', '/profile', '/privacy'];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
