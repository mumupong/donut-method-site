import Link from 'next/link';

import { navigation, siteConfig } from '@/data/site';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand-block">
          <p className="footer-eyebrow">Donut Method</p>
          <h2 className="footer-title">今ある土台に戻るための、静かな見取り図。</h2>
          <p className="footer-copy">
            公開時はメールアドレス、ドメイン、各種リンクを差し替えてご利用ください。
          </p>
        </div>

        <div>
          <h3 className="footer-heading">ページ</h3>
          <ul className="footer-list">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/privacy">プライバシーポリシー</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="footer-heading">お問い合わせ</h3>
          <ul className="footer-list">
            <li>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li>
              <Link href="/session#booking">1対1セッションについて</Link>
            </li>
            <li>
              <Link href="/workbook#guide">無料ワークについて</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 {siteConfig.name}. All rights reserved.</p>
        <p>Base URL: {siteConfig.url}</p>
      </div>
    </footer>
  );
}
