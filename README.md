# Kitty Via — premium affiliate catalog

A production-oriented Next.js 16 site for `kittyvia.com`, designed for Pinterest visitors who need a fast, clear path from inspiration to a product decision.

## What is included

- Mobile-first home page, catalog, collection pages, comparison table, and detailed product guides.
- Three initial PETLIBRO offers: Dockstream 2, One RFID Smart Feeder, and Luma Smart Litter Box.
- Clear affiliate disclosures near shopping actions.
- Vercel Web Analytics and Speed Insights.
- Optional consent-gated GA4 with custom `affiliate_click` events.
- Pinterest/UTM campaign capture for the current browser session.
- Product, website, Open Graph, sitemap, robots, and manifest metadata.
- Local optimized WebP images and an organized content model.
- Accessibility-minded navigation, keyboard focus, responsive layouts, and reduced-motion support.

## Important affiliate-link note

The Dockstream and Luma defaults use the Impact links already created:

- Dockstream: `https://petlibro.sjv.io/R0Xq7X`
- Luma: `https://petlibro.sjv.io/n4zxYV`

The **One RFID Smart Feeder currently falls back to the normal PETLIBRO product page** because its Impact tracking link was not provided. Create that tracking link in Impact and add it as `NEXT_PUBLIC_AFFILIATE_ONE_RFID_URL` in Vercel before launch so purchases can be attributed.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Deploy to Vercel

1. Create a GitHub repository and upload this project.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Framework preset should detect **Next.js** automatically.
4. Add environment variables from `.env.example`.
5. Deploy.
6. In Vercel project settings, open **Domains** and add:
   - `kittyvia.com`
   - `www.kittyvia.com`
7. Vercel will show the DNS records to add in Cloudflare. Add those records in Cloudflare DNS. Use the exact values Vercel provides.
8. Choose one canonical domain in Vercel and redirect the other to it.

Do not deploy this project through Cloudflare Workers unless you intentionally migrate the hosting architecture.

## Analytics setup

### Vercel
`@vercel/analytics` and `@vercel/speed-insights` are already installed. Vercel page-view and performance data will appear after deployment.

### Google Analytics 4
Create a GA4 web data stream, then set:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

The site will show a consent choice before loading GA4. Shopping buttons fire an `affiliate_click` event with:

- `product_slug`
- `product_category`
- `link_placement`
- campaign parameters stored from the landing URL

Recommended GA4 reports:

- Landing page by `utm_source`
- Affiliate clicks by product
- Affiliate clicks by placement
- Pinterest campaign / pin identifier

## Add or replace an offer

The entire catalog lives in `src/content/products.ts`. Each product has:

- copy and category
- images
- affiliate URL
- price reference
- benefits and caveats
- specifications
- FAQs
- comparison fields
- source URL and review date

See `src/content/README.md` for the safe checklist.

## Before public launch

- Generate the One RFID Impact link and add it in Vercel.
- Create `hello@kittyvia.com` or change the contact email in `src/content/site.ts`.
- Add the actual Pinterest profile URL in `src/content/site.ts`.
- Create a GA4 property if desired.
- Connect Google Search Console and submit `/sitemap.xml`.
- Test every affiliate link on mobile and desktop.
- Confirm current prices, product details, shipping, warranty, and availability.
- Replace or add official affiliate-program product assets if the program terms require them.

## Design system

The site uses plain CSS split into:

- `src/styles/tokens.css` — colors, typography, radius, shadows
- `src/styles/base.css` — reset and global typography
- `src/styles/components.css` — reusable interface components
- `src/styles/pages.css` — page-level layouts

This keeps visual edits centralized and makes future offers easy to add without rewriting the layout.
