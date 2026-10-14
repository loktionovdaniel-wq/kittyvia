import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@/components/Icons';

export const metadata: Metadata = { title: 'About', description: 'About Kitty Via and its clear, cozy approach to cat-care recommendations.', alternates: { canonical: '/about' } };

export default function AboutPage() {
  return (
    <>
      <section className="page-hero"><div className="container about-grid"><div><p className="eyebrow">About Kitty Via</p><h1>Cozy on the surface. Serious underneath.</h1><p className="lede">Kitty Via helps cat owners move from inspiration to a confident product decision without losing an evening to research.</p><p>We organize cat-care technology around real routines, explain the parts that matter, and make the next click obvious.</p><Link href="/shop" className="button button--dark">Explore the catalog <ArrowRightIcon /></Link></div><div className="about-image"><Image src="/images/editorial/rainy-window.webp" alt="Gray kitten watching rain at the window" fill priority sizes="(max-width:920px) 100vw, 48vw" /></div></div></section>
      <section className="section section--paper"><div className="container editorial-split"><div className="editorial-split__media"><Image src="/images/editorial/sleepy-teddy.webp" alt="Kitten sleeping with a soft toy" fill sizes="(max-width:920px) 100vw, 48vw" /></div><div className="editorial-split__copy"><p className="eyebrow">The promise</p><h2>Fewer tabs. Fewer vague claims. Better fit.</h2><p>Kitty Via is not a retailer and does not process your order. We create editorial guides, then send you to the brand or retailer to verify the current offer and complete the purchase.</p><p>Some of those outbound links are affiliate links. That may support the site, but it does not increase your price.</p><Link className="text-link" href="/how-we-choose">See how recommendations are built <ArrowRightIcon /></Link></div></div></section>
    </>
  );
}
