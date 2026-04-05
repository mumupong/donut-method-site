import type { Metadata } from 'next';
import Link from 'next/link';

import { CtaBanner } from '@/components/cta-banner';
import { FaqList } from '@/components/faq-list';
import { SectionHeading } from '@/components/section-heading';
import { faqItems, sessionFlow, sessionHighlights, siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: '1対1セッション',
  description:
    '対話を通して、今起きていることを整理し、足りない側だけでなく、今ある土台も見えるようにして、次の一歩を決めるための1対1セッション。',
};

export default function SessionPage() {
  return (
    <>
      <section className="subpage-hero">
        <div className="container narrow-column">
          <p className="section-eyebrow">Session</p>
          <h1>1対1セッション</h1>
          <p className="hero-copy">
            対話を通して、今起きていることを整理し、足りない側だけでなく、今ある土台も見えるようにして、次の一歩を決める時間です。
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={`mailto:${siteConfig.email}?subject=1対1セッションについて`}>
              メールで問い合わせる
            </a>
            <Link className="button button-secondary" href="/workbook">
              先に無料ワークを見る
            </Link>
          </div>
        </div>
      </section>

      <section className="section-block section-soft">
        <div className="container split-callout">
          <div>
            <SectionHeading
              eyebrow="What we do"
              title="セッションで扱うこと"
              description="問題をひとつの感情だけで片づけず、状況・価値観・境界線・行動までまとめて見直します。"
            />
          </div>
          <div className="mini-sheet accent-sheet">
            <ul className="check-list compact">
              {sessionHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionHeading
            eyebrow="Flow"
            title="面談の流れ"
            description="一度で結論を急がず、今の状況を見える形にしてから次へ進みます。"
          />
          <div className="card-grid cols-3">
            {sessionFlow.map((item) => (
              <article key={item.step} className="info-card flow-card">
                <p className="perspective-key">Step {item.step}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-soft">
        <div className="container two-column-layout">
          <div>
            <SectionHeading
              eyebrow="Good to know"
              title="こんな方に向いています"
              description="ひとりで考えていると視点が同じ場所を回ってしまうときに、とくに向いています。"
            />
          </div>
          <div className="check-list-card">
            <ul className="check-list compact">
              <li>頭の中では考えているのに、うまく言葉にならない。</li>
              <li>自分を責めすぎて、本当に必要なことが見えにくい。</li>
              <li>何を増やすかより、何を保ち、何を減らすかを決めたい。</li>
              <li>誰かに整えてもらうのではなく、一緒に整理したい。</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="booking" className="section-block">
        <div className="container booking-card">
          <SectionHeading
            eyebrow="Booking"
            title="予約と問い合わせ"
            description="このテンプレートではメール問い合わせを仮の導線にしています。公開時は予約フォームや日程調整ツールのURLへ差し替えてください。"
          />
          <div className="booking-actions">
            <a className="button button-primary" href={`mailto:${siteConfig.email}?subject=1対1セッションの予約希望`}>
              予約についてメールする
            </a>
            <a className="button button-secondary" href={`mailto:${siteConfig.email}?subject=1対1セッションの質問`}>
              事前に質問する
            </a>
          </div>
          <p className="booking-note">
            返信の目安、価格、実施形式（オンライン / 対面）、キャンセルポリシーは公開時に追記してください。
          </p>
        </div>
      </section>

      <section className="section-block section-soft">
        <div className="container">
          <SectionHeading eyebrow="FAQ" title="よくある質問" align="center" />
          <FaqList items={faqItems.slice(1)} />
        </div>
      </section>

      <CtaBanner
        eyebrow="Need a quieter start?"
        title="まだ申し込む前に、自分で整理したい方へ。"
        description="無料ワークでは、今の状況をひとりで静かに整理できる問いをまとめています。"
        primaryHref="/workbook"
        primaryLabel="無料ワークを見る"
        secondaryHref="/temperament-check"
        secondaryLabel="気質タイプチェックを見る"
      />
    </>
  );
}
