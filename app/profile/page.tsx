import type { Metadata } from 'next';
import Link from 'next/link';

import { CtaBanner } from '@/components/cta-banner';
import { SectionHeading } from '@/components/section-heading';
import { profileHighlights, siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'プロフィール',
  description:
    'ことばにならない違和感を、構造と感覚の両方から整理していく伴走者としてのプロフィールページ。',
};

export default function ProfilePage() {
  return (
    <>
      <section className="subpage-hero">
        <div className="container profile-hero-grid">
          <div>
            <p className="section-eyebrow">Profile</p>
            <h1>プロフィール</h1>
            <p className="hero-copy">
              ここは公開時に、実際の名前・肩書き・写真・活動歴へ差し替えるためのプロフィール枠です。
              現段階では、サイト全体のトーンに合う文章量と構成が分かるように仮のテキストを入れています。
            </p>
          </div>
          <div className="portrait-card" aria-hidden="true">
            <div className="portrait-shape" />
            <p>profile image</p>
          </div>
        </div>
      </section>

      <section className="section-block section-soft">
        <div className="container two-column-layout">
          <div>
            <SectionHeading
              eyebrow="About"
              title="こんな姿勢で伴走します"
              description="やさしさだけでも、厳しさだけでもなく、地に足のついた明晰さを保ちながら、今の状況を見える形にすることを大切にしています。"
            />
          </div>
          <div className="check-list-card">
            <ul className="check-list compact">
              {profileHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container split-callout">
          <div>
            <SectionHeading
              eyebrow="Suggested content"
              title="公開時に差し替える内容"
              description="このページは構成サンプルとして作ってあるので、以下の内容を実データに置き換えるだけでプロフィールページとして機能します。"
            />
          </div>
          <div className="mini-sheet">
            <ol className="numbered-list compact-numbered-list">
              <li>名前 / 屋号 / 肩書き</li>
              <li>活動の背景と、このテーマに関心を持った理由</li>
              <li>提供しているサポートの範囲</li>
              <li>経歴や実績の要約</li>
              <li>写真、SNS、問い合わせ先</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section-block section-soft">
        <div className="container narrow-column">
          <SectionHeading
            eyebrow="Contact"
            title="問い合わせ先"
            description="メールアドレスと各種リンクは公開前に差し替えてください。現状はテンプレート用の仮設定です。"
          />
          <div className="booking-actions left-align">
            <a className="button button-primary" href={`mailto:${siteConfig.email}?subject=プロフィールページを見て問い合わせ`}>
              メールで問い合わせる
            </a>
            <Link className="button button-secondary" href="/session">
              1対1セッションを見る
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Explore the method"
        title="まずは考え方そのものから見たい方へ。"
        description="プロフィールより先に、ドーナツメソッドの考え方や無料ワークから入りたい方はトップページをご覧ください。"
        primaryHref="/"
        primaryLabel="トップページへ戻る"
        secondaryHref="/workbook"
        secondaryLabel="無料ワークを見る"
      />
    </>
  );
}
