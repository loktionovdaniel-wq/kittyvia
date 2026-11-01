import type { Metadata } from 'next';
import Link from 'next/link';
import { AffiliateButton } from '@/components/AffiliateButton';
import { categoryCopy, products } from '@/content/products';

export const metadata: Metadata = {
  title: 'Compare cat-care products',
  description: 'Compare Kitty Via cat-care picks by category, use case, setup, and upkeep.',
  alternates: { canonical: '/compare' },
};

export default function ComparePage() {
  return (
    <>
      <section className="page-hero"><div className="container"><p className="eyebrow">Side-by-side</p><h1>Different products. Different jobs.</h1><p>Start with the routine you want to change, then compare effort, app support, and ongoing upkeep.</p></div></section>
      <section className="section--tight"><div className="container">{Object.entries(categoryCopy).map(([slug, category]) => {
        const picks = products.filter((product) => product.category === slug);
        return <div className="compare-category" key={slug}><h2>{category.title}</h2><div className="compare-preview"><table aria-label={`${category.title} comparison`}><tbody>
        <tr><th>Product</th>{picks.map((p) => <td key={p.slug}><strong><Link href={`/shop/${p.slug}`}>{p.shortName}</Link></strong><br/><span className="price-note">{p.priceLabel}</span></td>)}</tr>
        <tr><th>Problem solved</th>{picks.map((p) => <td key={p.slug}>{p.bestFor}</td>)}</tr>
        <tr><th>Setup</th>{picks.map((p) => <td key={p.slug}>{p.comparison.setup}</td>)}</tr>
        <tr><th>App support</th>{picks.map((p) => <td key={p.slug}>{p.comparison.app}</td>)}</tr>
        <tr><th>Ongoing upkeep</th>{picks.map((p) => <td key={p.slug}>{p.comparison.upkeep}</td>)}</tr>
        <tr><th>Our verdict</th>{picks.map((p) => <td key={p.slug}>{p.verdict}</td>)}</tr>
        <tr><th>Retailer</th>{picks.map((p) => <td key={p.slug}><AffiliateButton href={p.affiliateUrl} product={p.slug} category={p.category} placement="comparison_table" price={p.priceValue} className="button button--small button--dark">Check price</AffiliateButton></td>)}</tr>
      </tbody></table></div></div>;
      })}<p className="disclosure-note" style={{ marginTop: 18 }}>Affiliate links may earn Kitty Via a commission at no added cost to you. Prices and availability can change. Use the retailer button for the current price and exact version.</p></div></section>
    </>
  );
}
