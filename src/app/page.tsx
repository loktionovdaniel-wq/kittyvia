import Link from 'next/link';
import { ProductCard } from '@/components/ProductCard';
import { ArrowRightIcon } from '@/components/Icons';
import { getProductSummaries } from '@/content/products';

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
  const products = getProductSummaries();
  return (
    <>
      <section className="home-catalog" aria-labelledby="home-catalog-title">
        <div className="container">
          <header className="home-catalog__intro">
            <p className="eyebrow">The complete Kitty Via collection · {products.length} picks</p>
            <h1 id="home-catalog-title">All our picks. All in one place.</h1>
            <p>Thoughtful essentials for your cat — explore the full collection below.</p>
            <div className="home-catalog__links">
              <Link href="/shop" className="text-link">Filter &amp; search <ArrowRightIcon /></Link>
              <Link href="/compare" className="text-link">Compare products <ArrowRightIcon /></Link>
            </div>
          </header>
          <div className="product-grid" id="all-products">
            {products.map((product) => <ProductCard key={product.slug} product={product} placement="home_catalog" />)}
          </div>
          <p className="disclosure-note home-catalog__disclosure">Affiliate links may earn Kitty Via a commission at no extra cost to you. Confirm current prices and availability with the retailer.</p>
        </div>
      </section>
      <section className="section section--paper">
        <div className="container">
          <div className="section-heading"><p className="eyebrow">Common questions</p><h2>Before you click through</h2></div>
          <div className="faq-list">
            {homeFaq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}
          </div>
        </div>
      </section>
    </>
  );
}
