'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { mainNavigation } from '@/content/site';
import { Brand } from '@/components/Brand';
import { CloseIcon, MenuIcon } from '@/components/Icons';

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <div className="disclosure-strip">
        Independent recommendations. Some links are affiliate links, which may earn us a commission at no extra cost to you.
      </div>
      <header className="site-header">
        <div className="container site-header__inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {mainNavigation.map((item) => (
              <Link key={item.href} href={item.href} className={pathname === item.href ? 'is-active' : ''}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="site-header__actions">
            <Link href="/shop" className="button button--small button--dark desktop-only">
              Find your pick
            </Link>
            <button
              className="icon-button mobile-menu-button"
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>
      <div className={`mobile-drawer ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <nav className="mobile-drawer__nav" aria-label="Mobile navigation">
          {mainNavigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/shop" className="button button--dark">
            Shop our picks
          </Link>
        </nav>
      </div>
    </>
  );
}
