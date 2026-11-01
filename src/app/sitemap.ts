import type { MetadataRoute } from 'next';
import { categoryCopy, products } from '@/content/products';
import { siteConfig } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ['', '/shop', '/compare', '/about', '/how-we-choose', '/affiliate-disclosure', '/privacy', '/terms', ...Object.keys(categoryCopy).map((slug) => `/collections/${slug}`)];
  return [
    ...staticPaths.map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: new Date(), changeFrequency: path === '' || path === '/shop' ? 'weekly' as const : 'monthly' as const, priority: path === '' ? 1 : .7 })),
    ...products.map((product) => ({ url: `${siteConfig.url}/shop/${product.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: .8 })),
  ];
}
