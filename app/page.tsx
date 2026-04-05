import Link from 'next/link';
import type { Metadata } from 'next';

import { CtaBanner } from '@/components/cta-banner';
import { FaqList } from '@/components/faq-list';
import { SectionHeading } from '@/components/section-heading';
import {
  aboutPoints,
  faqItems,
  hero,
  mediaItems,
  perspectives,
  profileHighlights,
  sessionHighlights,
  siteConfig,
  situations,
  temperamentTypes,
} from '@/data/site';

export const metadata: Metadata = {
  title: 'ホーム',
};

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <p className="section-eyebrow">{hero.eyebrow}</p>
            <h1>{hero.title}</h1>
            <p className="hero-copy">{hero.description}</p>
            <div className="hero-actions">
              <Link href={hero.primaryCta.href} className="button button-primary">
                {hero.primaryCta.label}
              </Link>
              <Link href={hero.secondaryCta.href} className="button button-secondary">
                {hero.secondaryCta.label}
              </Link>
              <Link href={hero.tertiaryCta.href} className="button button-ghost">
                {hero.tertiaryCta.label}
              </Link>
            </div>
            <ul className="hero-stats" aria-label="サイトの内容">
              <li>
                <strong>5つの見方</strong>
                <span>穴 / 生地 / 味 / 外枠 / 彩り</span>
              </li>
              <li>
                <strong>無料ワーク</strong>
                <span>ひとりで整理したい人向け</span>
              </li>
              <li>
                <strong>1対1セッション</strong>
                <span>対話で次の一歩を決める</span>
              </li>
            </ul>
          </div>

          <div className="hero-panel" aria-hidden="true">
            <div className="donut-visual">
              <div className="donut-center">
                <span>足りない</span>
                <span>だけを見ない</span>
              </div>
            </div>
            <div className="hero-panel-note">
              <p>ドーナツメソッドの見取り図</p>
              <ul>
                <li>穴: いま気になっている不足感</li>
                <li>生地: すでにある土台</li>
                <li>味: 大切にしたい軸</li>
                <li>外枠: 必要な境界線</li>
                <li>彩り: よろこびと余白</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-block section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Method"
            title="ドーナツメソッドとは"
            description="ないものだけに視線が集まっているとき、今ここにある土台も見えるようにして、次の一歩を決めるための考え方です。"
          />
          <div className="card-grid cols-3">
            {aboutPoints.map((item) => (
              <article key={item.title} className="info-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="situations" className="section-block">
        <div className="container two-column-layout">
          <div>
            <SectionHeading
              eyebrow="When it helps"
              title="こんな悩みのときに"
              description="明確な問題がなくても、なんとなくしっくりこない感じは、整え直すサインかもしれません。"
            />
          </div>
          <div className="check-list-card">
            <ul className="check-list">
              {situations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="perspectives" className="section-block section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Five Perspectives"
            title="5つの見方"
            description="問題をひとつの尺度だけで見ず、少し引いて全体を見直すための5つの視点です。"
          />
          <div className="card-grid cols-5">
            {perspectives.map((item) => (
              <article key={item.title} className="perspective-card">
                <p className="perspective-key">{item.key}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="media" className="section-block">
        <div className="container">
          <SectionHeading
            eyebrow="Audio / Video"
            title="音声 / 動画"
            description="すぐに1対1で話す前に、まずは短い音声や文章で雰囲気を確かめたい人のための入口です。"
          />
          <div className="card-grid cols-3">
            {mediaItems.map((item) => (
              <article key={item.title} className="info-card media-card">
                <p className="chip">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <Link href={item.href} className="text-link">
                  詳しく見る
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-soft">
        <div className="container split-callout">
          <div>
            <SectionHeading
              eyebrow="Workbook"
              title="無料ワーク"
              description="ひとりで静かに整理したいときのために、5つの見方に沿った問いをまとめたワークページを用意しています。"
            />
            <Link href="/workbook" className="button button-primary">
              無料ワークを見る
            </Link>
          </div>
          <div className="mini-sheet">
            <h3>ワークの内容</h3>
            <ol>
              <li>今気になっている不足感を言葉にする</li>
              <li>すでにある土台を書き出す</li>
              <li>大切にしたい軸を確かめる</li>
              <li>見直したい境界線を探す</li>
              <li>今週の余白をひとつ戻す</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container split-callout reverse">
          <div className="mini-sheet accent-sheet">
            <h3>1対1セッションで扱うこと</h3>
            <ul className="check-list compact">
              {sessionHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              eyebrow="Session"
              title="1対1セッション"
              description="対話を通して、今起きていることを整理し、足りない側だけでなく、今ある土台も見えるようにして、次の一歩を決める時間です。"
            />
            <Link href="/session" className="button button-primary">
              1対1セッションを見る
            </Link>
          </div>
        </div>
      </section>

      <section className="section-block section-soft">
        <div className="container split-callout">
          <div>
            <SectionHeading
              eyebrow="Temperament Check"
              title="気質タイプチェック"
              description="ドーナツメソッド本体とは別に、自分の傾向をやさしく知るためのライトな自己理解コンテンツも用意しています。"
            />
            <p className="section-description spaced-top">
              これは医療的な診断ではなく、生まれ持った傾向や整え方の癖を知るためのチェックです。
            </p>
            <Link href="/temperament-check" className="button button-primary">
              気質タイプチェックを見る
            </Link>
          </div>
          <div className="card-grid cols-2 compact-grid">
            {temperamentTypes.map((item) => (
              <article key={item.id} className="info-card">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container two-column-layout">
          <div>
            <SectionHeading
              eyebrow="Profile"
              title="プロフィール"
              description="ことばにならない違和感を、感覚と構造の両方から整理していく伴走者として活動している想定のプロフィール枠です。公開時は実際の経歴・肩書き・写真に差し替えてください。"
            />
            <Link href="/profile" className="text-link">
              プロフィールを見る
            </Link>
          </div>
          <div className="profile-note">
            <ul className="check-list compact">
              {profileHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-block section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="FAQ"
            title="よくある質問"
            description="最初に迷いやすい点を先にまとめました。"
            align="center"
          />
          <FaqList items={faqItems} />
        </div>
      </section>

      <CtaBanner
        eyebrow="Start here"
        title="まずは、静かに整理するところから。"
        description={`${siteConfig.name} をはじめて知った方には、無料ワークか、1対1セッションの案内ページから入るのがおすすめです。`}
        primaryHref="/workbook"
        primaryLabel="無料ワークを見る"
        secondaryHref="/session"
        secondaryLabel="1対1セッションを見る"
      />
    </>
  );
}
