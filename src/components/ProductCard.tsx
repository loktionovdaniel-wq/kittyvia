'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { ProductSummary } from '@/types/product';
import { AffiliateButton } from '@/components/AffiliateButton';
import { ArrowRightIcon } from '@/components/Icons';

export function ProductCard({ product, placement = 'product_card' }: { product: ProductSummary; placement?: string }) {
  const variantsLabel = product.variants && product.variants.length > 1 ? `${product.variants.length} confirmed versions` : null;
  return (
    <article className={`product-card product-card--${product.accent}`}>
      <Link href={`/shop/${product.slug}`} className="product-card__media product-card__media--official" aria-label={`Read about ${product.name}`}>
        <Image src={product.image} alt={`${product.name} official PETLIBRO product photo`} fill sizes="(max-width: 760px) 100vw, 33vw" quality={92} />
        <span className="product-card__badge">{product.badge}</span>
      </Link>
      <div className="product-card__content">
        <p className="eyebrow">{product.brand} · {product.categoryLabel}</p>
        <h3><Link href={`/shop/${product.slug}`}>{product.shortName}</Link></h3>
        <p>{product.tagline}</p>
        <p className="product-card__best"><strong>Best for:</strong> {product.bestFor}</p>
        <div className="product-card__meta">
          <span className="price">{product.priceLabel}</span>
          {variantsLabel ? <span className="price-note">{variantsLabel}</span> : <span className="price-note">on PETLIBRO</span>}
        </div>
        <div className="product-card__actions">
          <Link href={`/shop/${product.slug}`} className="text-link">
            See details <ArrowRightIcon />
          </Link>
          <AffiliateButton
            href={product.affiliateUrl}
            product={product.slug}
            category={product.category}
            placement={placement}
            className="button button--small button--dark"
          >
            Check price
          </AffiliateButton>
        </div>
      </div>
    </article>
  );
}
