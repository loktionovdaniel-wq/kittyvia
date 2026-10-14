import type { Product, ProductCategorySlug, ProductSummary } from '@/types/product';

const links = {
  dockstream:
    process.env.NEXT_PUBLIC_AFFILIATE_DOCKSTREAM_URL ??
    'https://petlibro.sjv.io/R0Xq7X',
  oneRfid:
    process.env.NEXT_PUBLIC_AFFILIATE_ONE_RFID_URL ??
    'https://petlibro.com/products/one-rfid-smart-feeder-for-pet',
  luma:
    process.env.NEXT_PUBLIC_AFFILIATE_LUMA_URL ??
    'https://petlibro.sjv.io/n4zxYV',
};

export const products: Product[] = [
  {
    slug: 'dockstream-2-smart-fountain',
    name: 'PETLIBRO Dockstream 2 Smart Fountain',
    shortName: 'Dockstream 2',
    brand: 'PETLIBRO',
    category: 'hydration',
    categoryLabel: 'Water fountain',
    badge: 'Best for hydration insights',
    tagline: 'Fresh running water with useful hydration visibility.',
    description:
      'A quiet smart fountain for cat parents who want running water, easier cleaning, and app-based hydration history in one polished setup.',
    priceLabel: '$89.99',
    priceValue: 89.99,
    affiliateUrl: links.dockstream,
    retailerUrl: 'https://petlibro.com/products/dockstream-2-smart-fountain',
    image: '/images/products/dockstream/01-white-drinking.webp',
    gallery: [
      '/images/products/dockstream/01-white-drinking.webp',
      '/images/products/dockstream/02-white-two-kittens.webp',
      '/images/products/dockstream/03-black-evening.webp',
      '/images/products/dockstream/04-black-sleepy.webp',
    ],
    accent: 'sage',
    featured: true,
    bestFor: 'Cats that prefer moving water and owners who want app-based intake history.',
    verdict:
      'The strongest all-round starting point when hydration is the problem you want to solve first.',
    features: [
      {
        title: 'Hydration history',
        detail: 'The PETLIBRO app records drinking frequency and intake history so patterns are easier to notice.',
      },
      {
        title: 'Flexible water modes',
        detail: 'Use continuous flow or sensor-led operation depending on your cat and your home.',
      },
      {
        title: 'Simpler cleaning',
        detail: 'A detachable tank and rinseable pump rotor reduce the awkward parts of regular upkeep.',
      },
      {
        title: 'Stable, quiet footprint',
        detail: 'The anti-knockover design is made for everyday placement without turning the room into a pet-tech showroom.',
      },
    ],
    whyWeLikeIt: [
      'It solves a clear routine problem without needing a complicated setup.',
      'The app data is genuinely useful for noticing changes, not just a novelty feature.',
      'White and black finishes make it easier to fit into different rooms.',
    ],
    goodToKnow: [
      'Filters are an ongoing consumable, so include replacement cost in your decision.',
      'App insights are helpful, but they do not replace veterinary advice if drinking changes suddenly.',
      'Confirm current color availability, promotions, and shipping on the retailer page.',
    ],
    specifications: [
      { label: 'Colors', value: 'White or black' },
      { label: 'Tracking', value: 'App-based intake and drinking-frequency history' },
      { label: 'Modes', value: 'Continuous and sensor modes' },
      { label: 'Brand coverage', value: '30-day money-back and 24-month warranty listed by PETLIBRO' },
    ],
    faq: [
      {
        question: 'Does it work without the app?',
        answer:
          'The fountain can still provide water, while the app is what unlocks history and monitoring features. Confirm current setup requirements on PETLIBRO before purchasing.',
      },
      {
        question: 'Is it difficult to clean?',
        answer:
          'The detachable tank and accessible pump rotor are designed to make routine cleaning more manageable. Regular cleaning and filter changes are still essential.',
      },
      {
        question: 'Which color should I choose?',
        answer:
          'White blends into lighter rooms; black feels more understated in darker or wood-toned spaces. Functionality is the same.',
      },
    ],
    comparison: {
      setup: 'Easy',
      app: 'Yes',
      upkeep: 'Clean tank + replace filters',
      idealFor: 'Running-water preference',
    },
    sourceUrl: 'https://petlibro.com/products/dockstream-2-smart-fountain',
    reviewedDate: 'October 2026',
  },
  {
    slug: 'one-rfid-smart-feeder',
    name: 'PETLIBRO One RFID Smart Feeder',
    shortName: 'One RFID Feeder',
    brand: 'PETLIBRO',
    category: 'feeding',
    categoryLabel: 'Smart feeder',
    badge: 'Best for multi-cat meal control',
    tagline: 'Personalized dry-food access for one tagged pet.',
    description:
      'A feeder built for homes where one cat needs its own portions, schedule, or protected bowl away from other pets.',
    priceLabel: '$149.99',
    priceValue: 149.99,
    affiliateUrl: links.oneRfid,
    retailerUrl: 'https://petlibro.com/products/one-rfid-smart-feeder-for-pet',
    image: '/images/products/one-rfid/01-black-feeder.webp',
    gallery: [
      '/images/products/one-rfid/01-black-feeder.webp',
      '/images/products/one-rfid/02-white-feeder.webp',
      '/images/products/one-rfid/03-two-kittens.webp',
      '/images/products/one-rfid/04-sleepy.webp',
    ],
    accent: 'peach',
    featured: true,
    bestFor: 'Multi-cat homes, protected meals, and controlled dry-food schedules.',
    verdict:
      'A targeted solution rather than a general feeder: especially useful when one cat steals another cat’s food.',
    features: [
      {
        title: 'RFID-gated access',
        detail: 'The feeder recognizes its dedicated collar tag and unlocks the bowl for the paired pet.',
      },
      {
        title: 'Up to 10 daily meals',
        detail: 'Create smaller scheduled meals or snacks instead of relying on one large serving.',
      },
      {
        title: 'Feeding logs',
        detail: 'The app records eating activity so you can see when the paired cat accessed food.',
      },
      {
        title: '3-liter dry-food hopper',
        detail: 'A practical capacity for automatic dry-food routines without a giant appliance footprint.',
      },
    ],
    whyWeLikeIt: [
      'It addresses food stealing with a dedicated access system instead of hoping cats self-regulate.',
      'Portion scheduling and logs make the routine easier to understand at a glance.',
      'The bowl area feels less enclosed than many improvised pet-gate feeding setups.',
    ],
    goodToKnow: [
      'The reader uses the included collar tag — not your cat’s implanted microchip.',
      'One feeder pairs with one dedicated tag, so multiple protected cats may require multiple units.',
      'It is designed for compatible dry kibble, not refrigerated wet food.',
    ],
    specifications: [
      { label: 'Capacity', value: '3 L (about 13 cups), per PETLIBRO' },
      { label: 'Meals', value: 'Up to 10 scheduled meals or snacks daily' },
      { label: 'Recognition', value: 'Dedicated RFID collar tag; not microchip recognition' },
      { label: 'Connectivity', value: '2.4 GHz and 5 GHz Wi-Fi listed by PETLIBRO' },
    ],
    faq: [
      {
        question: 'Can it read my cat’s microchip?',
        answer:
          'No. PETLIBRO states that it works with the dedicated included RFID collar tag, not an implanted microchip or third-party tag.',
      },
      {
        question: 'Can two cats share one feeder?',
        answer:
          'The feeder is designed around one paired collar tag. For individually protected meals for multiple cats, separate units may be needed.',
      },
      {
        question: 'Is this for wet food?',
        answer:
          'No. This model is intended for compatible dry kibble. Choose a refrigerated wet-food feeder if wet meals are the main need.',
      },
    ],
    comparison: {
      setup: 'Moderate',
      app: 'Yes',
      upkeep: 'Wash bowl + refill hopper',
      idealFor: 'Food stealing / individual portions',
    },
    sourceUrl: 'https://petlibro.com/products/one-rfid-smart-feeder-for-pet',
    reviewedDate: 'October 2026',
  },
  {
    slug: 'luma-smart-litter-box',
    name: 'PETLIBRO Luma Smart Litter Box',
    shortName: 'Luma Litter Box',
    brand: 'PETLIBRO',
    category: 'litter',
    categoryLabel: 'Automatic litter box',
    badge: 'Premium routine upgrade',
    tagline: 'Automated scooping, odor control, and multi-cat insights.',
    description:
      'A premium automatic litter box for owners who want less daily scooping and more visibility into litter-box habits.',
    priceLabel: '$599.99',
    priceValue: 599.99,
    affiliateUrl: links.luma,
    retailerUrl: 'https://petlibro.com/products/luma-smart-litter-box-with-gift',
    image: '/images/products/luma/01-hero.webp',
    gallery: [
      '/images/products/luma/01-hero.webp',
      '/images/products/luma/02-peek.webp',
      '/images/products/luma/03-play.webp',
      '/images/products/luma/04-multi-cat.webp',
    ],
    accent: 'plum',
    featured: true,
    bestFor: 'Owners prioritizing less scooping, odor control, and multi-cat usage visibility.',
    verdict:
      'The highest-investment pick here, but also the one that can remove the most repetitive work from the week.',
    features: [
      {
        title: 'Automatic cleaning',
        detail: 'The system separates waste after use, reducing the need for daily manual scooping.',
      },
      {
        title: 'Odor-focused design',
        detail: 'PETLIBRO promotes a sealed waste drawer and odor-control system for a fresher routine.',
      },
      {
        title: 'Multi-cat profiles',
        detail: 'The app is designed to distinguish usage patterns for multiple cats and surface activity trends.',
      },
      {
        title: 'Safety monitoring',
        detail: 'Weight and motion sensors are intended to pause operation when a cat is present.',
      },
    ],
    whyWeLikeIt: [
      'The open entry is less visually intimidating than some enclosed rotating designs.',
      'The value is easiest to understand in multi-cat homes where scooping adds up quickly.',
      'Usage trends can help you notice routine changes earlier, even though they are not a diagnosis.',
    ],
    goodToKnow: [
      'Measure the intended location before buying; this is a substantial appliance.',
      'Automatic boxes still need drawer emptying, surface cleaning, and periodic deep cleaning.',
      'Introduce cats gradually and follow PETLIBRO’s age, weight, litter, and acclimation guidance.',
    ],
    specifications: [
      { label: 'Colors', value: 'White or black listed by PETLIBRO' },
      { label: 'Waste capacity', value: 'Brand states up to about 7 days, depending on use' },
      { label: 'Profiles', value: 'Multi-cat activity tracking in the PETLIBRO app' },
      { label: 'Brand coverage', value: '90-day returns and 24-month warranty listed by PETLIBRO' },
    ],
    faq: [
      {
        question: 'Does automatic mean maintenance-free?',
        answer:
          'No. It reduces scooping, but the drawer, sensors, litter area, and surrounding floor still need regular care.',
      },
      {
        question: 'Will every cat use it immediately?',
        answer:
          'Not necessarily. Keep the old box available during a gradual transition and follow the manufacturer’s acclimation steps.',
      },
      {
        question: 'Are the app insights medical information?',
        answer:
          'No. They are routine indicators. Contact a veterinarian if you notice meaningful changes in frequency, straining, or avoidance.',
      },
    ],
    comparison: {
      setup: 'Most involved',
      app: 'Yes',
      upkeep: 'Empty drawer + periodic deep clean',
      idealFor: 'Reducing daily scooping',
    },
    sourceUrl: 'https://petlibro.com/products/luma-smart-litter-box-with-gift',
    reviewedDate: 'October 2026',
  },
];

export const categoryCopy: Record<
  ProductCategorySlug,
  { title: string; description: string; image: string; eyebrow: string }
> = {
  hydration: {
    title: 'Water fountains',
    eyebrow: 'Hydration',
    description: 'Running-water picks for easier drinking routines and better visibility into habits.',
    image: '/images/products/dockstream/02-white-two-kittens.webp',
  },
  feeding: {
    title: 'Smart feeders',
    eyebrow: 'Feeding',
    description: 'Tools for portions, schedules, protected meals, and less food-stealing drama.',
    image: '/images/products/one-rfid/03-two-kittens.webp',
  },
  litter: {
    title: 'Litter systems',
    eyebrow: 'Litter',
    description: 'Premium options designed to reduce repetitive scooping and make routines easier to monitor.',
    image: '/images/products/luma/04-multi-cat.webp',
  },
};

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: ProductCategorySlug): Product[] {
  return products.filter((product) => product.category === category);
}

export function getProductSummaries(): ProductSummary[] {
  return products.map(
    ({
      slug,
      name,
      shortName,
      brand,
      category,
      categoryLabel,
      badge,
      tagline,
      priceLabel,
      affiliateUrl,
      image,
      accent,
      bestFor,
    }) => ({
      slug,
      name,
      shortName,
      brand,
      category,
      categoryLabel,
      badge,
      tagline,
      priceLabel,
      affiliateUrl,
      image,
      accent,
      bestFor,
    }),
  );
}
