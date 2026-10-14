import type { ReactNode } from 'react';
import type { Product } from '@/types/product';
import { siteConfig } from '@/content/site';

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c');
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/logo-mark.svg`,
    },
  };
}

export function productSchema(product: Product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.gallery.map((image) => `${siteConfig.url}${image}`),
    brand: { '@type': 'Brand', name: product.brand },
    category: product.categoryLabel,
    offers: {
      '@type': 'Offer',
      url: product.affiliateUrl,
      priceCurrency: 'USD',
      price: product.priceValue,
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: product.brand },
    },
  };
}

export function ItemListSchema({ children }: { children?: ReactNode }) {
  return children;
}
