'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { navigation } from '@/data/site';

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="container header-shell">
        <Link className="brand" href="/" aria-label="ドーナツメソッド ホーム">
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-ring" />
          </span>
          <span className="brand-text-wrap">
            <span className="brand-text">ドーナツメソッド</span>
            <span className="brand-sub">足りない探しをやめて、今ある土台から整える</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="主要ナビゲーション">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          <span className="sr-only">メニューを開く</span>
          <span className="menu-line" />
          <span className="menu-line" />
          <span className="menu-line" />
        </button>
      </div>

      {open ? (
        <div className="mobile-nav-panel" id="mobile-navigation">
          <nav className="container mobile-nav" aria-label="モバイルナビゲーション">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="mobile-nav-link">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
