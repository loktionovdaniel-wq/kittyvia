import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'How we choose', description: 'The Kitty Via product-selection and review methodology.', alternates: { canonical: '/how-we-choose' } };

const steps = [
  ['01', 'Start with the routine', 'We define the problem first: drinking, meal access, portion timing, scooping, odor, or monitoring.'],
  ['02', 'Verify published details', 'We review manufacturer specifications, compatibility, setup, maintenance, warranty, and return information.'],
  ['03', 'Surface the tradeoff', 'Every recommendation includes who it suits, what work remains, and what you should verify before buying.'],
  ['04', 'Keep the shortlist small', 'We would rather explain three useful options clearly than bury visitors in a hundred near-duplicates.'],
  ['05', 'Label commercial links', 'Affiliate relationships are disclosed clearly. Commission does not change the price you pay.'],
  ['06', 'Re-check the guide', 'Products, prices, warranties, software, and availability change, so guides carry a review date and source link.'],
];

export default function MethodPage() {
  return (
    <>
      <section className="page-hero"><div className="container"><p className="eyebrow">Our method</p><h1>Useful before beautiful. Honest before clever.</h1><p>Kitty Via is designed to reduce decision fatigue, not create another wall of product cards.</p></div></section>
      <section className="section section--paper"><div className="container"><div className="method-grid">{steps.map(([num,title,copy]) => <article className="method-card" key={num}><span className="method-card__num">{num}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
      <section className="section"><div className="container editorial-split"><div><p className="eyebrow">What we do not do</p><h2>No fake testing claims. No invented ratings.</h2><p className="lede">When a guide is based on published research and comparison rather than hands-on testing, we say so. Lifestyle imagery helps show the use case; exact product details should always be confirmed on the retailer page.</p></div><div className="info-panel"><h3>Commercial transparency</h3><p>Kitty Via may earn money when a visitor buys through an affiliate link. That relationship is disclosed near shopping actions and on our dedicated disclosure page.</p><Link className="text-link" href="/affiliate-disclosure">Read the affiliate disclosure</Link></div></div></section>
    </>
  );
}
