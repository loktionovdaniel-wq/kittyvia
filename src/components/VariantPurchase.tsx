'use client';

import type { ProductVariant } from '@/types/product';
import { AffiliateButton } from '@/components/AffiliateButton';

export function VariantPurchase({
  variants,
  product,
  category,
  placement,
}: {
  variants: ProductVariant[];
  product: string;
  category: string;
  placement: string;
}) {
  return (
    <div className="variant-panel" aria-label="Available versions">
      <p className="variant-panel__label">Choose the version you want</p>
      <div className="variant-panel__grid">
        {variants.map((variant) => (
          <AffiliateButton
            key={variant.name}
            href={variant.affiliateUrl}
            product={`${product}:${variant.name.toLowerCase().replace(/\s+/g, '-')}`}
            category={category}
            placement={`${placement}_${variant.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="variant-link"
          >
            {variant.name}
          </AffiliateButton>
        ))}
      </div>
      <p className="variant-panel__hint">Each button uses the confirmed affiliate link for that exact version.</p>
    </div>
  );
}
