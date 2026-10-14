import type { Metadata } from 'next';
import { siteConfig } from '@/content/site';

export const metadata: Metadata = { title: 'Terms of use', description: 'Terms for using Kitty Via editorial content and affiliate links.', alternates: { canonical: '/terms' } };

export default function TermsPage() {
  return <article className="legal-page"><p className="eyebrow">Last updated October 2026</p><h1>Terms of use</h1><p>Kitty Via provides editorial product information for general educational purposes. It is not veterinary, medical, legal, or financial advice.</p><h2>Product information</h2><p>We work to present product information clearly, but prices, specifications, software features, promotions, colors, availability, warranties, and retailer policies can change. Verify final details on the retailer’s website before purchasing.</p><h2>Cat safety and health</h2><p>Follow manufacturer setup, cleaning, age, weight, compatibility, and acclimation guidance. Contact a veterinarian about health concerns or meaningful changes in drinking, eating, litter-box use, behavior, or weight.</p><h2>External websites</h2><p>Kitty Via is not responsible for transactions, fulfillment, warranties, returns, privacy practices, or content on third-party sites.</p><h2>Intellectual property</h2><p>Kitty Via branding, original copy, layouts, and site code are protected by applicable law. Product names and trademarks belong to their respective owners.</p><h2>Contact</h2><p>Questions can be sent to <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p></article>;
}
