import type { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://legrouprealty.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/services', '/listings', '/contact', '/privacy'];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '/listings' ? 'daily' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
