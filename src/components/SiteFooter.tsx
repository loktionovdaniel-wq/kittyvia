import Link from 'next/link';
import { Brand } from '@/components/Brand';
import { siteConfig } from '@/content/site';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__intro">
          <Brand />
          <p>Clearer cat-care decisions, thoughtfully compared and easy to shop.</p>
          <p className="site-footer__small">Kitty Via is an editorial recommendation site, not a retailer.</p>
        </div>
        <div>
          <h2>Explore</h2>
          <Link href="/shop">Shop picks</Link>
          <Link href="/compare">Compare products</Link>
          <Link href="/how-we-choose">How we choose</Link>
          <Link href="/about">About Kitty Via</Link>
        </div>
        <div>
          <h2>Collections</h2>
          <Link href="/collections/hydration">Water fountains</Link>
          <Link href="/collections/feeding">Smart feeders</Link>
          <Link href="/collections/litter">Litter systems</Link>
        </div>
        <div>
          <h2>Legal</h2>
          <Link href="/affiliate-disclosure">Affiliate disclosure</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          {siteConfig.email ? <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> : null}
        </div>
      </div>
      <div className="container site-footer__bottom">
        <span>© {new Date().getFullYear()} Kitty Via.</span>
        <span>Prices and availability can change. Confirm details with the retailer.</span>
      </div>
    </footer>
  );
}
