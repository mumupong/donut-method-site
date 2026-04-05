# donut-method-site

ドーナツメソッドのブランドサイト用 Next.js テンプレートです。

## セットアップ

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開いてください。

## 収録ページ
- `/` トップページ
- `/session` 1対1セッション
- `/workbook` 無料ワーク
- `/temperament-check` 気質タイプチェック
- `/profile` プロフィール
- `/privacy` プライバシーポリシー

## 主な差し替えポイント
- `data/site.ts` のサイト名、メールアドレス、URL
- `app/opengraph-image.png` / `app/twitter-image.png`
- プロフィール文、実績、写真
- 予約フォームや日程調整ツールのURL
- 音声 / 動画の実リンク

## 補足
- `package-lock.json` を同梱しています。`npm install` 後、そのまま `npm run dev` で起動できます。
- プライバシーポリシーは雛形です。実運用に合わせて必ず確認してください。

- フォントは `Noto Sans JP` / `Noto Serif JP` を優先する CSS スタックです。厳密に固定したい場合は、公開時にローカルフォント同梱または実運用の読み込み方法へ差し替えてください。
