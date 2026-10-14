import type { Metadata } from 'next';
import { CatalogClient } from '@/components/CatalogClient';
import { getProductSummaries } from '@/content/products';

export const metadata: Metadata = {
  title: 'Shop cat-care picks',
  description: 'Browse Kitty Via recommendations for smart water fountains, feeders, and litter systems.',
  alternates: { canonical: '/shop' },
};

export default async function ShopPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const params = await searchParams;
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">The Kitty Via catalog</p>
          <h1>A short catalog on purpose.</h1>
          <p>Every pick has a clear job, a plain-English verdict, and the maintenance details most product pages bury.</p>
        </div>
      </section>
      <section className="section--tight">
        <div className="container"><CatalogClient products={getProductSummaries()} initialCategory={params.category} /></div>
      </section>
      <section className="section--tight">
        <div className="container disclosure-note">Affiliate disclosure: purchase buttons may earn Kitty Via a commission at no extra cost to you. Product appearance, price, and availability can change; verify final details with the retailer.</div>
      </section>
    </>
  );
}
