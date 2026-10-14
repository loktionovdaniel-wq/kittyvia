import type { MetadataRoute } from 'next';
import { products } from '@/content/products';
import { siteConfig } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ['', '/shop', '/compare', '/about', '/how-we-choose', '/affiliate-disclosure', '/privacy', '/terms', '/collections/hydration', '/collections/feeding', '/collections/litter'];
  return [
    ...staticPaths.map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: new Date(), changeFrequency: path === '' || path === '/shop' ? 'weekly' as const : 'monthly' as const, priority: path === '' ? 1 : .7 })),
    ...products.map((product) => ({ url: `${siteConfig.url}/shop/${product.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: .8 })),
  ];
}
