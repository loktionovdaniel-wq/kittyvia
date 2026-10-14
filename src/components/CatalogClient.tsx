'use client';

import { useMemo, useState } from 'react';
import type { ProductCategorySlug, ProductSummary } from '@/types/product';
import { ProductCard } from '@/components/ProductCard';
import { SearchIcon } from '@/components/Icons';

const filters: Array<{ value: 'all' | ProductCategorySlug; label: string }> = [
  { value: 'all', label: 'All picks' },
  { value: 'hydration', label: 'Hydration' },
  { value: 'feeding', label: 'Feeding' },
  { value: 'litter', label: 'Litter' },
];

export function CatalogClient({
  products,
  initialCategory = 'all',
}: {
  products: ProductSummary[];
  initialCategory?: string;
}) {
  const safeInitial = filters.some((filter) => filter.value === initialCategory)
    ? (initialCategory as 'all' | ProductCategorySlug)
    : 'all';
  const [category, setCategory] = useState<'all' | ProductCategorySlug>(safeInitial);
  const [query, setQuery] = useState('');

  const visible = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return products.filter((product) => {
      const categoryMatch = category === 'all' || product.category === category;
      const textMatch =
        !normalized ||
        [product.name, product.brand, product.tagline, product.bestFor, product.categoryLabel]
          .join(' ')
          .toLowerCase()
          .includes(normalized);
      return categoryMatch && textMatch;
    });
  }, [category, products, query]);

  return (
    <>
      <div className="catalog-toolbar">
        <div className="filter-row" aria-label="Filter products">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              className={filter.value === category ? 'filter-chip is-active' : 'filter-chip'}
              onClick={() => setCategory(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <label className="search-field">
          <SearchIcon />
          <span className="sr-only">Search products</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by need or product" />
        </label>
      </div>
      <p className="catalog-count">{visible.length} thoughtfully selected {visible.length === 1 ? 'pick' : 'picks'}</p>
      {visible.length ? (
        <div className="product-grid">
          {visible.map((product) => <ProductCard key={product.slug} product={product} placement="catalog_card" />)}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No exact match yet.</h2>
          <p>Try a broader term or view all picks.</p>
          <button type="button" className="button button--ghost" onClick={() => { setQuery(''); setCategory('all'); }}>
            Reset filters
          </button>
        </div>
      )}
    </>
  );
}
