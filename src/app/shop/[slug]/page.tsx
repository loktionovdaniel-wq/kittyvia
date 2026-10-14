import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AffiliateButton } from '@/components/AffiliateButton';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CheckIcon } from '@/components/Icons';
import { ProductCard } from '@/components/ProductCard';
import { ProductGallery } from '@/components/ProductGallery';
import { StickyProductCta } from '@/components/StickyProductCta';
import { getProduct, getProductSummaries, products } from '@/content/products';
import { JsonLd, productSchema } from '@/lib/schema';

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.shortName} review and buying guide`,
    description: product.description,
    alternates: { canonical: `/shop/${product.slug}` },
    openGraph: {
      title: `${product.shortName} | Kitty Via`,
      description: product.description,
      images: [{ url: product.image, alt: product.name }],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const related = getProductSummaries().filter((item) => item.slug !== product.slug).slice(0, 2);

  return (
    <>
      <JsonLd data={productSchema(product)} />
      <article className="product-page">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: product.shortName }]} />
          <div className="product-layout">
            <ProductGallery images={product.gallery} name={product.name} />
            <aside className="product-summary">
              <p className="eyebrow">{product.brand} · {product.categoryLabel}</p>
              <span className="filter-chip is-active" style={{ width: 'fit-content' }}>{product.badge}</span>
              <h1>{product.shortName}</h1>
              <p className="product-summary__tagline">{product.tagline}</p>
              <p>{product.description}</p>
              <div className="product-summary__verdict"><strong>Kitty Via verdict:</strong> {product.verdict}</div>
              <div className="product-summary__price"><span className="price">{product.priceLabel}</span><span className="price-note">at time of review</span></div>
              <div className="product-summary__buttons">
                <AffiliateButton href={product.affiliateUrl} product={product.slug} category={product.category} placement="product_hero" price={product.priceValue}>Check current price</AffiliateButton>
                <Link href="/compare" className="button button--ghost">Compare</Link>
              </div>
              <p className="disclosure-note">Sponsored/affiliate link. We may earn a commission, with no added cost to you. Confirm current price, shipping, color, and availability at PETLIBRO.</p>
              <div className="feature-list">
                {product.features.map((feature) => (
                  <div className="feature-list__item" key={feature.title}>
                    <span className="feature-list__icon"><CheckIcon /></span>
                    <div><h3>{feature.title}</h3><p>{feature.detail}</p></div>
                  </div>
                ))}
              </div>
            </aside>
          </div>

          <section className="product-section product-section__grid">
            <div><p className="eyebrow">Fit check</p><h2>Who this makes sense for</h2><p className="lede">{product.bestFor}</p></div>
            <div className="pros-cons">
              <div className="info-panel"><h3>Why it earns a spot</h3><ul>{product.whyWeLikeIt.map((item) => <li key={item}>{item}</li>)}</ul></div>
              <div className="info-panel"><h3>Good to know first</h3><ul>{product.goodToKnow.map((item) => <li key={item}>{item}</li>)}</ul></div>
            </div>
          </section>

          <section className="product-section product-section__grid">
            <div><p className="eyebrow">Specifications</p><h2>The details that affect daily life</h2><p>These are condensed from published brand information. Verify the latest model details on the retailer page.</p></div>
            <dl className="spec-grid">{product.specifications.map((spec) => <div className="spec-grid__item" key={spec.label}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>)}</dl>
          </section>

          <section className="product-section product-section__grid">
            <div><p className="eyebrow">Questions</p><h2>Before you buy</h2><p>Reviewed {product.reviewedDate}. Manufacturer source: <a className="text-link" href={product.sourceUrl} target="_blank" rel="noopener noreferrer">PETLIBRO product page</a>.</p></div>
            <div className="faq-list">{product.faq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div>
          </section>

          <section className="product-section">
            <div className="section-heading"><p className="eyebrow">Keep comparing</p><h2>Other routines to improve</h2></div>
            <div className="product-grid">{related.map((item) => <ProductCard key={item.slug} product={item} placement="related_product" />)}</div>
          </section>
        </div>
      </article>
      <StickyProductCta name={product.shortName} price={product.priceLabel} href={product.affiliateUrl} slug={product.slug} category={product.category} priceValue={product.priceValue} />
    </>
  );
}
