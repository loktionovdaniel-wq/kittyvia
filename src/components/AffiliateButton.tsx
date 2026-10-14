'use client';

import type { ReactNode } from 'react';
import { ExternalIcon } from '@/components/Icons';
import { trackAffiliateClick } from '@/lib/analytics';

export function AffiliateButton({
  href,
  product,
  category,
  placement,
  price,
  children = 'Check price',
  className = 'button button--dark',
}: {
  href: string;
  product: string;
  category: string;
  placement: string;
  price?: number;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener"
      className={className}
      onClick={() => trackAffiliateClick({ product, category, placement, price })}
    >
      <span>{children}</span>
      <ExternalIcon />
    </a>
  );
}
