import type { Metadata } from 'next';
import Link from 'next/link';

import { CtaBanner } from '@/components/cta-banner';
import { PrintPageButton } from '@/components/print-page-button';
import { SectionHeading } from '@/components/section-heading';
import { workbookSections } from '@/data/site';

export const metadata: Metadata = {
  title: '無料ワーク',
  description:
    'ドーナツメソッドの5つの見方に沿って、今の状況をひとりで整理するための無料ワーク。',
};

export default function WorkbookPage() {
  return (
    <>
      <section className="subpage-hero">
        <div className="container narrow-column">
          <p className="section-eyebrow">Workbook</p>
          <h1>無料ワーク</h1>
          <p className="hero-copy">
            まずはひとりで静かに整理したい方のために、ドーナツメソッドの5つの見方に沿った問いをまとめました。
            ノートに書き出しても、そのまま印刷しても使えます。
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#guide">
              ワークを読む
            </a>
            <PrintPageButton />
          </div>
        </div>
      </section>

      <section id="guide" className="section-block section-soft">
        <div className="container narrow-column">
          <SectionHeading
            eyebrow="How to use"
            title="使い方"
            description="答えを急がず、いまの自分に近い言葉で書くことを優先してください。全部埋めなくても大丈夫です。"
          />
          <ol className="numbered-list">
            <li>静かに座れる場所を確保する</li>
            <li>気になる問いから先に書いてよい</li>
            <li>正解を出すより、今の状態を言葉にする</li>
            <li>書き終えたら、最後に「今週の一歩」をひとつだけ決める</li>
          </ol>
        </div>
      </section>

      <section className="section-block">
        <div className="container narrow-column workbook-stack">
          {workbookSections.map((section) => (
            <article key={section.title} className="workbook-card">
              <h2>{section.title}</h2>
              <ul>
                {section.prompts.map((prompt) => (
                  <li key={prompt}>{prompt}</li>
                ))}
              </ul>
              <div className="writing-space" aria-hidden="true" />
              <div className="writing-space" aria-hidden="true" />
            </article>
          ))}

          <article className="workbook-card emphasis-card">
            <h2>最後に: 今週の一歩</h2>
            <ul>
              <li>減らすことをひとつ</li>
              <li>保つことをひとつ</li>
              <li>戻したい余白をひとつ</li>
            </ul>
            <div className="writing-space" aria-hidden="true" />
          </article>
        </div>
      </section>

      <section className="section-block section-soft">
        <div className="container split-callout">
          <div>
            <SectionHeading
              eyebrow="After the workbook"
              title="書いてみて、ひとりでは整理しきれなかったら"
              description="ワークで見えてきたことを、1対1セッションで一緒にほどいていく使い方もできます。"
            />
            <Link className="button button-primary" href="/session">
              1対1セッションを見る
            </Link>
          </div>
          <div className="mini-sheet">
            <h3>こんなときに次へ進む目安</h3>
            <ul className="check-list compact">
              <li>書き出したのに、優先順位が決められない</li>
              <li>土台はあるはずなのに、感覚として戻ってこない</li>
              <li>境界線の引き方を、対話の中で確かめたい</li>
            </ul>
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Light self-understanding"
        title="気質タイプから自分の整え方を知りたい方へ。"
        description="ワークとは別に、整え方の癖を知るための気質タイプチェックも用意しています。"
        primaryHref="/temperament-check"
        primaryLabel="気質タイプチェックを見る"
        secondaryHref="/"
        secondaryLabel="トップへ戻る"
      />
    </>
  );
}
