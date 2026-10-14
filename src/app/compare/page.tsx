import type { Metadata } from 'next';
import Link from 'next/link';
import { AffiliateButton } from '@/components/AffiliateButton';
import { products } from '@/content/products';

export const metadata: Metadata = {
  title: 'Compare cat-care products',
  description: 'Compare Kitty Via hydration, feeding, and litter picks by use case, setup, app support, and upkeep.',
  alternates: { canonical: '/compare' },
};

export default function ComparePage() {
  return (
    <>
      <section className="page-hero"><div className="container"><p className="eyebrow">Side-by-side</p><h1>Different products. Different jobs.</h1><p>Start with the routine you want to change, then compare effort, app support, and ongoing upkeep.</p></div></section>
      <section className="section--tight"><div className="container"><div className="compare-preview"><table><tbody>
        <tr><th>Product</th>{products.map((p) => <td key={p.slug}><strong><Link href={`/shop/${p.slug}`}>{p.shortName}</Link></strong><br/><span className="price-note">{p.priceLabel}</span></td>)}</tr>
        <tr><th>Problem solved</th>{products.map((p) => <td key={p.slug}>{p.bestFor}</td>)}</tr>
        <tr><th>Setup</th>{products.map((p) => <td key={p.slug}>{p.comparison.setup}</td>)}</tr>
        <tr><th>App support</th>{products.map((p) => <td key={p.slug}>{p.comparison.app}</td>)}</tr>
        <tr><th>Ongoing upkeep</th>{products.map((p) => <td key={p.slug}>{p.comparison.upkeep}</td>)}</tr>
        <tr><th>Our verdict</th>{products.map((p) => <td key={p.slug}>{p.verdict}</td>)}</tr>
        <tr><th>Retailer</th>{products.map((p) => <td key={p.slug}><AffiliateButton href={p.affiliateUrl} product={p.slug} category={p.category} placement="comparison_table" price={p.priceValue} className="button button--small button--dark">Check price</AffiliateButton></td>)}</tr>
      </tbody></table></div><p className="disclosure-note" style={{ marginTop: 18 }}>Affiliate links may earn Kitty Via a commission at no added cost to you. Prices shown are reference prices from the review date and can change.</p></div></section>
    </>
  );
}
