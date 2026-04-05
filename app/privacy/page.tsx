import type { Metadata } from 'next';

import { SectionHeading } from '@/components/section-heading';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: 'ドーナツメソッド サイト用のプライバシーポリシー雛形。',
};

export default function PrivacyPage() {
  return (
    <section className="section-block">
      <div className="container narrow-column legal-page">
        <SectionHeading
          eyebrow="Privacy Policy"
          title="プライバシーポリシー"
          description="このページは公開前に実運用に合わせて確認・調整してください。フォーム運用、解析ツール、決済導入の有無によって記載内容は変わります。"
        />

        <div className="legal-stack">
          <section>
            <h2>1. 取得する情報</h2>
            <p>
              当サイトでは、お問い合わせや予約の際に、氏名、メールアドレス、その他連絡に必要な情報を取得する場合があります。
            </p>
          </section>

          <section>
            <h2>2. 利用目的</h2>
            <p>
              取得した情報は、お問い合わせへの返信、予約対応、サービス提供、必要なお知らせのために利用します。
            </p>
          </section>

          <section>
            <h2>3. 第三者提供</h2>
            <p>
              法令に基づく場合を除き、本人の同意なく第三者に個人情報を提供しません。
            </p>
          </section>

          <section>
            <h2>4. 外部サービス</h2>
            <p>
              予約フォーム、メール配信、アクセス解析などの外部サービスを利用する場合は、各サービスのプライバシーポリシーもあわせてご確認ください。
            </p>
          </section>

          <section>
            <h2>5. お問い合わせ先</h2>
            <p>
              個人情報の取り扱いに関するお問い合わせは、
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              までご連絡ください。
            </p>
          </section>

          <section>
            <h2>6. 改定</h2>
            <p>
              本ポリシーは、必要に応じて内容を見直し、変更することがあります。
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
