import Link from 'next/link';

export default function NotFound() {
  return <section className="not-found"><div><p className="eyebrow">404</p><h1>This path wandered off.</h1><p>Let’s get you back to the useful part.</p><Link href="/shop" className="button button--dark">Browse Kitty Via picks</Link></div></section>;
}
