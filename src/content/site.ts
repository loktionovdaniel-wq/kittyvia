export const siteConfig = {
  name: 'Kitty Via',
  domain: 'kittyvia.com',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kittyvia.com',
  description:
    'Thoughtful cat-care recommendations for hydration, feeding, and litter routines — clearly compared and easy to shop.',
  email: 'hello@kittyvia.com',
  pinterestUrl: 'https://www.pinterest.com/',
};

export const mainNavigation = [
  { href: '/shop', label: 'Shop picks' },
  { href: '/compare', label: 'Compare' },
  { href: '/how-we-choose', label: 'How we choose' },
  { href: '/about', label: 'About' },
];
