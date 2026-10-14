import { AffiliateButton } from '@/components/AffiliateButton';

export function StickyProductCta({
  name,
  price,
  href,
  slug,
  category,
  priceValue,
}: {
  name: string;
  price: string;
  href: string;
  slug: string;
  category: string;
  priceValue?: number;
}) {
  return (
    <div className="sticky-product-cta">
      <div>
        <strong>{name}</strong>
        <span>{price}</span>
      </div>
      <AffiliateButton href={href} product={slug} category={category} placement="mobile_sticky" price={priceValue} className="button button--small button--dark">
        Check price
      </AffiliateButton>
    </div>
  );
}
