export type ProductCategorySlug = 'hydration' | 'feeding' | 'litter';

export type ProductFeature = {
  title: string;
  detail: string;
};

export type ProductFaq = {
  question: string;
  answer: string;
};

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  brand: string;
  category: ProductCategorySlug;
  categoryLabel: string;
  badge: string;
  tagline: string;
  description: string;
  priceLabel: string;
  priceValue: number;
  affiliateUrl: string;
  retailerUrl: string;
  image: string;
  gallery: string[];
  accent: 'sage' | 'peach' | 'plum';
  featured: boolean;
  bestFor: string;
  verdict: string;
  features: ProductFeature[];
  whyWeLikeIt: string[];
  goodToKnow: string[];
  specifications: Array<{ label: string; value: string }>;
  faq: ProductFaq[];
  comparison: {
    setup: string;
    app: string;
    upkeep: string;
    idealFor: string;
  };
  sourceUrl: string;
  reviewedDate: string;
};

export type ProductSummary = Pick<
  Product,
  | 'slug'
  | 'name'
  | 'shortName'
  | 'brand'
  | 'category'
  | 'categoryLabel'
  | 'badge'
  | 'tagline'
  | 'priceLabel'
  | 'affiliateUrl'
  | 'image'
  | 'accent'
  | 'bestFor'
>;
