export const siteConfig = {
  name: 'Kitty Via',
  domain: 'kittyvia.com',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kittyvia.com',
  description:
    'Thoughtful cat-care recommendations for meals, water, litter, rest, scratching, and travel — clearly compared and easy to shop.',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? '',
  pinterestUrl: process.env.NEXT_PUBLIC_PINTEREST_URL ?? '',
};

export const mainNavigation = [
  { href: '/shop', label: 'Shop picks' },
  { href: '/collections/feeding', label: 'Food & feeders' },
  { href: '/compare', label: 'Compare' },
  { href: '/how-we-choose', label: 'How we choose' },
  { href: '/about', label: 'About' },
];
