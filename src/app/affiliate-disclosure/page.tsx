import type { Metadata } from 'next';
import { siteConfig } from '@/content/site';

export const metadata: Metadata = { title: 'Affiliate disclosure', description: 'Kitty Via affiliate and commercial relationship disclosure.', alternates: { canonical: '/affiliate-disclosure' } };

export default function AffiliateDisclosurePage() {
  return <article className="legal-page"><p className="eyebrow">Commercial transparency</p><h1>Affiliate disclosure</h1><p><strong>Some links on Kitty Via are affiliate links.</strong> If you click one of those links and make a purchase, Kitty Via may receive a commission from the retailer or brand. This does not add a fee to your order or increase the price you pay.</p><h2>How this appears on the site</h2><p>Shopping buttons use language such as “Check price” and open the retailer’s website. We also place disclosures near product catalogs, comparison tools, and product-page calls to action.</p><h2>Editorial independence</h2><p>Commercial relationships can influence which programs are available to us, but they do not justify invented ratings, fake testing claims, or hiding material drawbacks. Our goal is to explain fit, tradeoffs, and maintenance clearly.</p><h2>Retailer responsibility</h2><p>Kitty Via does not sell, ship, warranty, or process returns for the products shown. The retailer’s terms, prices, inventory, warranty, and policies apply to your purchase.</p><h2>Questions</h2><p>Contact <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p></article>;
}
