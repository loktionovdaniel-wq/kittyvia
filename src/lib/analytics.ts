import { track } from '@vercel/analytics';

export type CampaignContext = Partial<
  Record<'utm_source' | 'utm_medium' | 'utm_campaign' | 'utm_content' | 'utm_term' | 'pin_id', string>
>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const CAMPAIGN_STORAGE_KEY = 'kittyvia_campaign_context';

export function readCampaignContext(): CampaignContext {
  if (typeof window === 'undefined') return {};
  try {
    return JSON.parse(sessionStorage.getItem(CAMPAIGN_STORAGE_KEY) ?? '{}') as CampaignContext;
  } catch {
    return {};
  }
}

export function trackAffiliateClick(input: {
  product: string;
  category: string;
  placement: string;
  price?: number;
}) {
  if (typeof window === 'undefined') return;
  const campaign = readCampaignContext();

  try {
    track('affiliate_click', {
      product: input.product.slice(0, 80),
      placement: input.placement.slice(0, 80),
    });
  } catch {
    // Vercel custom events may be unavailable on some plans; GA4 still receives the event.
  }

  window.gtag?.('event', 'affiliate_click', {
    product_slug: input.product,
    product_category: input.category,
    link_placement: input.placement,
    value: input.price,
    currency: 'USD',
    ...campaign,
  });
}
