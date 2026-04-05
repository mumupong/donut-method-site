import type { Metadata } from 'next';
import Link from 'next/link';

import { CtaBanner } from '@/components/cta-banner';
import { SectionHeading } from '@/components/section-heading';
import { TemperamentQuiz } from '@/components/temperament-quiz';
import { temperamentTypes } from '@/data/site';

export const metadata: Metadata = {
  title: '気質タイプチェック',
  description:
    '4つの仮タイプから、自分の傾向や整え方の癖をやさしく知るためのライトな自己理解コンテンツ。',
};

export default function TemperamentCheckPage() {
  return (
    <>
      <section className="subpage-hero">
        <div className="container narrow-column">
          <p className="section-eyebrow">Temperament Check</p>
          <h1>気質タイプチェック</h1>
          <p className="hero-copy">
            ドーナツメソッド本体とは別に、自分の傾向や整え方の癖をやさしく知るためのライトな自己理解コンテンツです。
            これは医療的な診断ではなく、今の自分に合う整え方を考えるための入口として設計しています。
          </p>
        </div>
      </section>

      <section className="section-block section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Four types"
            title="4つの仮タイプ"
            description="結果は固定的なラベルではなく、今の傾向を見やすくするための仮の名前です。"
          />
          <div className="card-grid cols-4">
            {temperamentTypes.map((item) => (
              <article key={item.id} className="info-card">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <dl className="type-card-details">
                  <div>
                    <dt>向いている整え方</dt>
                    <dd>{item.fit}</dd>
                  </div>
                  <div>
                    <dt>注意点</dt>
                    <dd>{item.caution}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionHeading
            eyebrow="Check"
            title="チェックしてみる"
            description="直感で近いものを選んでください。正確さより、今の自分に近い感覚を優先して大丈夫です。"
          />
          <TemperamentQuiz />
        </div>
      </section>

      <section className="section-block section-soft">
        <div className="container split-callout">
          <div>
            <SectionHeading
              eyebrow="Difference"
              title="ドーナツメソッドとの違い"
              description="気質タイプチェックは、自分の傾向を知るための入口です。ドーナツメソッドは、今起きていることを整理し、次の一歩を決めるための見方です。"
            />
            <Link href="/" className="text-link">
              トップページで全体を見る
            </Link>
          </div>
          <div className="mini-sheet">
            <h3>使い分けの目安</h3>
            <ul className="check-list compact">
              <li>自分の傾向を軽く知りたい → 気質タイプチェック</li>
              <li>今の問題を整理して次の一歩を決めたい → ドーナツメソッド</li>
              <li>ひとりでは整理しきれない → 1対1セッション</li>
            </ul>
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Next step"
        title="結果を見て終わりではなく、生活に戻す。"
        description="傾向が見えたら、無料ワークか1対1セッションで、今の状況に合わせた整え方へつなげられます。"
        primaryHref="/workbook"
        primaryLabel="無料ワークを見る"
        secondaryHref="/session"
        secondaryLabel="1対1セッションを見る"
      />
    </>
  );
}
