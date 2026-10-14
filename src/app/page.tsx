import Image from 'next/image';
import Link from 'next/link';
import { ProductCard } from '@/components/ProductCard';
import { ArrowRightIcon, CheckIcon, ShieldIcon, SparkleIcon } from '@/components/Icons';
import { categoryCopy, getProductSummaries, products } from '@/content/products';

const homeFaq = [
  {
    question: 'Does Kitty Via sell these products directly?',
    answer: 'No. Kitty Via is an editorial recommendation site. Purchase buttons take you to the retailer or brand website.',
  },
  {
    question: 'Are your links affiliate links?',
    answer: 'Some are. If you buy through one of those links, Kitty Via may earn a commission at no additional cost to you. We label this clearly and do not change the price you pay.',
  },
  {
    question: 'How do you choose products?',
    answer: 'We compare the problem solved, published specifications, everyday upkeep, compatibility, warranty information, and the practical tradeoffs a cat owner should know before clicking through.',
  },
  {
    question: 'Are prices always current?',
    answer: 'Prices, promotions, shipping, colors, and availability can change. Always confirm the final details on the retailer page.',
  },
];

export default function HomePage() {
  const summaries = getProductSummaries();
  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Thoughtful picks for happier routines</p>
            <h1>Smarter cat care, chosen with care.</h1>
            <p className="lede">
              Shortlists that help you solve the daily stuff — water, meals, and litter — without opening thirty tabs.
            </p>
            <div className="hero__actions">
              <Link href="/shop" className="button button--dark">Shop our picks <ArrowRightIcon /></Link>
              <Link href="/compare" className="button button--ghost">Compare side by side</Link>
            </div>
            <div className="hero__micro">
              <span><CheckIcon /> Clear tradeoffs</span>
              <span><ShieldIcon /> Transparent affiliate links</span>
              <span><SparkleIcon /> Mobile-first guides</span>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__visual-main">
              <Image src="/images/brand/hero-kitten.webp" alt="Small gray kitten relaxing in a cozy bed" fill priority sizes="(max-width: 920px) 100vw, 48vw" />
            </div>
            <div className="hero__note">
              <strong>Start with the routine.</strong>
              <span>Choose hydration, feeding, or litter — then compare only the details that matter.</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container trust-row" aria-label="Kitty Via principles">
        <div className="trust-row__item"><strong>Problem-first</strong><span>Recommendations start with the routine you want to improve.</span></div>
        <div className="trust-row__item"><strong>No fake ratings</strong><span>We do not invent review counts or pretend to be the retailer.</span></div>
        <div className="trust-row__item"><strong>Clear caveats</strong><span>Upkeep, fit, and compatibility are shown before the buy button.</span></div>
        <div className="trust-row__item"><strong>Easy exit</strong><span>One clear click to verify the latest price on the brand site.</span></div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Choose your starting point</p>
            <h2>What would make the routine easier?</h2>
            <p className="lede">You do not need a giant catalog. You need the right shortlist for the problem in front of you.</p>
          </div>
          <div className="collection-grid">
            {Object.entries(categoryCopy).map(([slug, category]) => (
              <Link key={slug} href={`/collections/${slug}`} className="collection-card">
                <Image src={category.image} alt={category.title} fill sizes="(max-width:680px) 100vw, 33vw" />
                <div className="collection-card__content">
                  <p className="eyebrow">{category.eyebrow}</p>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <span className="text-link">Explore collection <ArrowRightIcon /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <div className="section-heading section-heading--center">
            <p className="eyebrow">Three strong places to start</p>
            <h2>Our launch shortlist</h2>
            <p className="lede">One focused pick for hydration, feeding, and litter — with the reasons and tradeoffs visible before you leave Kitty Via.</p>
          </div>
          <div className="product-grid">
            {summaries.map((product) => <ProductCard key={product.slug} product={product} placement="home_featured" />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container editorial-split">
          <div className="editorial-split__media">
            <Image src="/images/editorial/kittens-cuddling.webp" alt="Two kittens resting together" fill sizes="(max-width:920px) 100vw, 48vw" />
          </div>
          <div className="editorial-split__copy">
            <p className="eyebrow">Designed for real decisions</p>
            <h2>Beautiful enough to enjoy. Clear enough to trust.</h2>
            <p className="lede">A product page should not make you decode marketing. We organize every guide around three questions.</p>
            <div className="editorial-points">
              <div className="editorial-point"><span className="editorial-point__num">01</span><div><h3>Who is it actually for?</h3><p>The problem, household, and routine where the product makes sense.</p></div></div>
              <div className="editorial-point"><span className="editorial-point__num">02</span><div><h3>What work remains?</h3><p>Filters, cleaning, refills, compatibility, and other ongoing upkeep.</p></div></div>
              <div className="editorial-point"><span className="editorial-point__num">03</span><div><h3>What should I verify?</h3><p>Current price, color, shipping, warranty, and manufacturer guidance.</p></div></div>
            </div>
            <Link href="/how-we-choose" className="button button--ghost">See our full method <ArrowRightIcon /></Link>
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow" style={{ color: 'rgba(255,255,255,.62)' }}>Fast comparison</p>
            <h2>See the tradeoff in one glance.</h2>
          </div>
          <div className="compare-preview">
            <table>
              <tbody>
                <tr><th>Product</th>{products.map((product) => <td key={product.slug}><strong>{product.shortName}</strong></td>)}</tr>
                <tr><th>Best for</th>{products.map((product) => <td key={product.slug}>{product.comparison.idealFor}</td>)}</tr>
                <tr><th>Setup</th>{products.map((product) => <td key={product.slug}>{product.comparison.setup}</td>)}</tr>
                <tr><th>App</th>{products.map((product) => <td key={product.slug}>{product.comparison.app}</td>)}</tr>
                <tr><th>Upkeep</th>{products.map((product) => <td key={product.slug}>{product.comparison.upkeep}</td>)}</tr>
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: 28 }}><Link href="/compare" className="button button--light">Open full comparison <ArrowRightIcon /></Link></div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <div className="section-heading section-heading--center">
            <p className="eyebrow">Common questions</p>
            <h2>Before you click through</h2>
          </div>
          <div className="faq-list">
            {homeFaq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}
          </div>
        </div>
      </section>
    </>
  );
}
