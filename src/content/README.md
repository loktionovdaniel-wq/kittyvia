# Adding a new offer

1. Add optimized product images under `public/images/products/<slug>/`.
2. Copy one product object in `src/content/products.ts` and replace every field.
3. Add the affiliate URL as a Vercel environment variable, then reference it in the `links` object.
4. Keep factual claims tied to the manufacturer source and include `sourceUrl` plus `reviewedDate`.
5. Run `npm run typecheck`, `npm run lint`, and `npm run build` before deploying.

Never invent ratings, review counts, testing history, warranty terms, or medical claims.
