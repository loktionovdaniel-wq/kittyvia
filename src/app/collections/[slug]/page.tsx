import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ProductCard } from '@/components/ProductCard';
import { categoryCopy, getProductSummaries } from '@/content/products';
import type { ProductCategorySlug } from '@/types/product';

export function generateStaticParams() {
  return Object.keys(categoryCopy).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = categoryCopy[slug as ProductCategorySlug];
  if (!category) return {};
  return { title: category.title, description: category.description, alternates: { canonical: `/collections/${slug}` } };
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categoryCopy[slug as ProductCategorySlug];
  if (!category) notFound();
  const products = getProductSummaries().filter((product) => product.category === slug);
  return (
    <>
      <section className="page-hero">
        <div className="container about-grid">
          <div><p className="eyebrow">{category.eyebrow}</p><h1>{category.title}</h1><p>{category.description}</p></div>
          <div className="about-image"><Image src={category.image} alt={category.title} fill priority sizes="(max-width:920px) 100vw, 48vw" /></div>
        </div>
      </section>
      <section className="section section--paper"><div className="container"><div className="product-grid">{products.map((product) => <ProductCard key={product.slug} product={product} placement={`collection_${slug}`} />)}</div></div></section>
    </>
  );
}
