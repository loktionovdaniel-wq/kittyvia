# Kitty Via v3

Production-oriented Next.js affiliate catalog for **kittyvia.com**.

## What changed in v3

- Catalog expanded to **6 distinct product lines / 8 confirmed affiliate destinations**.
- Product imagery replaced with references captured from the exact PETLIBRO offers/product pages supplied during setup.
- Polar and One RFID pages now expose the confirmed color-specific affiliate links.
- Granary Camera offer is labeled **Dual Bowl Black** to match the confirmed Impact product image/link.
- Prices are intentionally shown as **“See current price”** so stale promotions are not presented as current.
- Outbound clicks are tracked with Vercel Analytics and, optionally, GA4.
- Pinterest attribution (`utm_*` and `pin_id`) is captured in-session and attached to GA4 affiliate-click events.
- Catalog remains content-driven: add or update products in `src/content/products.ts`.

## Confirmed affiliate destinations

| Product / version | Link |
| --- | --- |
| Dockstream 2 Smart Cordless Fountain | https://petlibro.sjv.io/E0j33Q |
| Luma Smart Litter Box | https://petlibro.sjv.io/3k3Gnk |
| Granary Smart Feeder 5L | https://petlibro.sjv.io/1G3m0x |
| Granary Smart Camera Feeder Dual Bowl — Black | https://petlibro.sjv.io/R0XkvR |
| Polar Smart Wet Food Feeder — Black | https://petlibro.sjv.io/oNW71E |
| Polar Smart Wet Food Feeder — White | https://petlibro.sjv.io/6kKJrb |
| One RFID Smart Feeder — Charcoal | https://petlibro.sjv.io/zzk7EW |
| One RFID Smart Feeder — Mist | https://petlibro.sjv.io/n4z7G9 |

## Deploy over the existing Vercel project

Your GitHub repository and Vercel project already exist. Do **not** create another project.

1. Unzip this package.
2. In the existing `kittyvia` GitHub repository, replace the project files with the contents of this folder.
3. Commit the changes to `main`.
4. Vercel will detect the commit and deploy automatically.
5. Open the generated `*.vercel.app` deployment and verify all six product pages before connecting `kittyvia.com`.

## Optional Vercel environment variables

The project has safe fallback values for every confirmed affiliate link, so it works immediately after upload. You can later override any URL in **Vercel → Project → Settings → Environment Variables** using the names in `.env.example`.

For GA4, add:

```text
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Optional contact/Pinterest values:

```text
NEXT_PUBLIC_CONTACT_EMAIL=hello@kittyvia.com
NEXT_PUBLIC_PINTEREST_URL=https://www.pinterest.com/yourprofile/
```

## Pinterest links

For product pins, link to the matching Kitty Via product page rather than directly to PETLIBRO when you want first-party analytics. Example:

```text
https://kittyvia.com/shop/polar-smart-wet-food-feeder?utm_source=pinterest&utm_medium=organic&utm_campaign=kittyvia&utm_content=PIN_NAME
```

The product page then sends the visitor through the confirmed affiliate link.

## Product content

All product records live in:

```text
src/content/products.ts
```

Each record controls the card, product page, compare table, category page, SEO data, product source, and outbound link.

## Images

Product reference assets live in:

```text
public/images/products-v3/
```

They were created from exact PETLIBRO product/offer references supplied during setup, not from the earlier incorrect AI product renders.

## Local development

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run typecheck
npm run lint
npm run build
```
