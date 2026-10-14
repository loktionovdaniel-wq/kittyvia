# Kitty Via v4

Production-oriented Next.js affiliate catalog for **kittyvia.com**.

## What changed in v4

- Removed all photographed-monitor / browser-screenshot product images from the storefront.
- Product cards, collection tiles, and product pages now use clean **official PETLIBRO product images** from PETLIBRO's CDN.
- Catalog remains at **6 distinct product lines / 8 confirmed affiliate destinations**.
- Polar and One RFID keep color-specific affiliate destinations.
- Product media styling was rebuilt so the full product is large, centered, uncropped, and consistent across the catalog.
- Granary Camera Dual Bowl now links to the correct official Dual Bowl source page.
- Prices remain **“See current price”** to avoid showing stale promotions.
- Vercel Analytics and optional GA4 tracking remain in place.

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

Do **not** create a new GitHub repository or Vercel project.

1. Unzip this package.
2. In the existing `kittyvia` GitHub repository choose **Add file → Upload files**.
3. Upload the contents of this folder over the current project files.
4. Commit to `main`.
5. Vercel will deploy automatically.
6. Verify the `kittyvia.vercel.app` deployment before connecting `kittyvia.com`.

## Image policy

Catalog and product pages use clean manufacturer imagery only. Do not add:

- screenshots of PETLIBRO pages,
- photos of a computer or phone screen,
- Impact marketplace screenshots,
- AI-generated substitutes for the product itself.

Pinterest lifestyle creatives can still be AI-assisted, but the product shown must match the exact real SKU.

## Optional environment variables

The project already contains fallback values for the confirmed affiliate URLs. Optional overrides are listed in `.env.example`.

GA4:

```text
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Optional contact/Pinterest:

```text
NEXT_PUBLIC_CONTACT_EMAIL=hello@kittyvia.com
NEXT_PUBLIC_PINTEREST_URL=https://www.pinterest.com/yourprofile/
```

## Pinterest tracking

For first-party analytics, Pinterest can link to a Kitty Via product page, for example:

```text
https://kittyvia.com/shop/polar-smart-wet-food-feeder?utm_source=pinterest&utm_medium=organic&utm_campaign=kittyvia&utm_content=PIN_NAME
```

The Kitty Via product page then sends the visitor through the matching confirmed affiliate link.

## Product content

All product records are centralized in:

```text
src/content/products.ts
```

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
