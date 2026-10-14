# Product content workflow

All catalog content is controlled by `products.ts`.

To add an offer:

1. Add a product object to `products`.
2. Put exact product-reference images under `public/images/products-v3/`.
3. Use only a confirmed affiliate destination for that exact product/version.
4. If colors have different affiliate destinations, add them as `variants` rather than duplicating the catalog card.
5. Keep `sourceUrl` pointed at the manufacturer page used to verify specs.
6. Prefer `priceLabel: 'See current price'` unless the site has an automated, reliable price feed.

The catalog, collection pages, comparison page, sitemap, product routes, and related-product sections are generated from this one data source.
