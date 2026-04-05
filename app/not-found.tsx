import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section-block">
      <div className="container narrow-column not-found-card">
        <p className="section-eyebrow">404</p>
        <h1>ページが見つかりませんでした</h1>
        <p className="hero-copy">
          URLが変わったか、ページが移動した可能性があります。トップページから必要な情報を探してください。
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/">
            トップへ戻る
          </Link>
          <Link className="button button-secondary" href="/workbook">
            無料ワークを見る
          </Link>
        </div>
      </div>
    </section>
  );
}
