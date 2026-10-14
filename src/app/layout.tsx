import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import '@/app/globals.css';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { AnalyticsProviders } from '@/components/Analytics';
import { siteConfig } from '@/content/site';
import { JsonLd, websiteSchema } from '@/lib/schema';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: 'Kitty Via — Smarter cat care, chosen with care', template: '%s | Kitty Via' },
  description: siteConfig.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: siteConfig.name,
    title: 'Kitty Via — Smarter cat care, chosen with care',
    description: siteConfig.description,
    url: siteConfig.url,
    images: [{ url: '/images/brand/og-home.jpg', width: 1200, height: 630, alt: 'Kitty Via cat-care recommendations' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kitty Via — Smarter cat care, chosen with care',
    description: siteConfig.description,
    images: ['/images/brand/og-home.jpg'],
  },
  icons: { icon: '/favicon.svg' },
};

export const viewport: Viewport = { themeColor: '#f8f5ef', colorScheme: 'light' };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={websiteSchema()} />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <AnalyticsProviders />
      </body>
    </html>
  );
}
