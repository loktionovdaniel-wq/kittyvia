export const siteConfig = {
  name: 'Kitty Via',
  domain: 'kittyvia.com',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kittyvia.com',
  description:
    'Thoughtful cat-care recommendations for hydration, feeding, and litter routines — clearly compared and easy to shop.',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? '',
  pinterestUrl: process.env.NEXT_PUBLIC_PINTEREST_URL ?? '',
};

export const mainNavigation = [
  { href: '/shop', label: 'Shop picks' },
  { href: '/collections/feeding', label: 'Feeders' },
  { href: '/compare', label: 'Compare' },
  { href: '/how-we-choose', label: 'How we choose' },
  { href: '/about', label: 'About' },
];
