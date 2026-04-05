export const siteConfig = {
  name: 'ドーナツメソッド',
  shortName: 'Donut Method',
  description:
    '足りない探しをやめて、今ある土台から整える。比較・罪悪感・焦りで「足りない」ばかり見てしまうときに、自分の状況と大切にしたい軸を整理するための方法。',
  url: 'https://donut-method.example',
  email: 'hello@donut-method.example',
  ogTitle: 'ドーナツメソッド | 足りない探しをやめて、今ある土台から整える。',
  ogDescription:
    '比較・罪悪感・焦りで「足りない」ばかり見てしまうときに、自分の状況を整理し、今ある土台と大切にしたい軸を見直すための方法です。',
  social: {
    youtube: '#media',
    newsletter: '/workbook#guide',
    session: '/session#booking',
  },
} as const;

export const navigation = [
  { href: '/#about', label: 'ドーナツメソッドとは' },
  { href: '/#situations', label: 'こんな悩みのときに' },
  { href: '/#perspectives', label: '5つの見方' },
  { href: '/#media', label: '音声 / 動画' },
  { href: '/workbook', label: '無料ワーク' },
  { href: '/session', label: '1対1セッション' },
  { href: '/temperament-check', label: '気質タイプチェック' },
  { href: '/profile', label: 'プロフィール' },
] as const;

export const hero = {
  eyebrow: 'Donut Method',
  title: '足りない探しをやめて、今ある土台から整える。',
  description:
    'ドーナツメソッドは、比較・罪悪感・焦りで「足りない」ばかり見てしまうときに、自分の状況を整理し、今ある土台と大切にしたい軸を見直すための方法です。頑張っているのに満たされないとき、足りない側だけでなく、今ある土台も見えるようにしていきます。',
  primaryCta: { href: '/workbook', label: '無料ワークを見る' },
  secondaryCta: { href: '/#media', label: '音声と動画を見る' },
  tertiaryCta: { href: '/session', label: '1対1セッションを見る' },
};

export const aboutPoints = [
  {
    title: '意味を先に、比喩はあとから',
    body: '最初に扱うのは、あなたの現実です。何が起きていて、何に疲れていて、どこで立ち止まっているのか。ドーナツという比喩は、その整理をやさしく支えるために後から使います。',
  },
  {
    title: '「ないもの」だけでなく「あるもの」も見る',
    body: '人は何かを足して完成するというより、存在としてはすでに成り立っています。それでも比較や焦りが強いと、欠けている側だけが大きく見えることがあります。',
  },
  {
    title: '次の一歩を決めるための見取り図',
    body: 'この方法は、気分を持ち上げるための言葉だけではなく、今の状況を構造的に見直し、何を保ち、何を減らし、何から始めるかを決めるための見取り図です。',
  },
] as const;

export const situations = [
  '頑張っているのに、なぜか満たされない。',
  '比較してしまい、自分だけ遅れている気がする。',
  'やるべきことが多すぎて、優先順位が見えない。',
  '人に合わせすぎて、自分の感覚が分からなくなっている。',
  '整えたい気持ちはあるのに、どこから手をつければいいか分からない。',
  'しっくりこない毎日を言葉にしたい。',
] as const;

export const perspectives = [
  {
    key: '01',
    title: '足りないと感じること（穴）',
    body: '今いちばん気になっている欠けや不安を見ます。問題を無視せず、まずは輪郭を言葉にします。',
  },
  {
    key: '02',
    title: '今ある土台（生地）',
    body: 'すでに持っている資源、支え、経験、関係性、生活の基盤に目を向けます。',
  },
  {
    key: '03',
    title: '大切にしたい軸（味）',
    body: '自分にとって譲れない価値や、心地よさの基準を確かめます。',
  },
  {
    key: '04',
    title: '境界線（外枠）',
    body: 'どこまでを自分の責任にし、どこからは抱え込みすぎなのか。必要な線引きを見直します。',
  },
  {
    key: '05',
    title: 'よろこびと余白（彩り）',
    body: '成果や義務だけではなく、回復や遊び、よろこびを生活に戻す視点です。',
  },
] as const;

export const mediaItems = [
  {
    label: '音声',
    title: '朝に読むための短いガイド',
    body: '足りない探しに引っ張られる朝に、視点を戻すための短い音声シリーズを想定した紹介枠です。公開時は Spotify / Podcast / stand.fm のリンクに差し替えてください。',
    href: '/workbook#guide',
  },
  {
    label: '動画',
    title: '5つの見方をやさしく解説する動画',
    body: 'ドーナツメソッドの考え方を、日常の例とともに説明する動画の導線です。公開時は YouTube の再生リスト URL に差し替えてください。',
    href: '/#perspectives',
  },
  {
    label: '読む',
    title: '短い文章で整理したい人へ',
    body: '長い動画を見る余裕がない人向けに、まずは文章で流れを追えるようにしています。',
    href: '/workbook',
  },
] as const;

export const sessionHighlights = [
  '今起きていることを言葉にし、状況を整理する。',
  '足りない側だけでなく、今ある土台も見えるようにする。',
  '大切にしたい軸と、必要な境界線を確認する。',
  '次の一歩を、無理のない単位で決める。',
] as const;

export const sessionFlow = [
  {
    step: '1',
    title: '今の状況を聞く',
    body: '直近で引っかかっていること、うまく言えない違和感、疲れているポイントを整理します。',
  },
  {
    step: '2',
    title: '5つの見方で見直す',
    body: '穴・生地・味・外枠・彩りの観点から、偏って見えているところと、すでにあるものを確認します。',
  },
  {
    step: '3',
    title: '次の一歩を決める',
    body: '大きな理想ではなく、今週から試せる行動・減らすこと・保つことを一緒に決めます。',
  },
] as const;

export const workbookSections = [
  {
    title: '1. いま気になっている「穴」は何ですか？',
    prompts: [
      '最近くり返し頭に浮かぶ不足感は何ですか。',
      'それは本当に今の課題ですか。それとも比較で大きく見えているものですか。',
    ],
  },
  {
    title: '2. すでにある「土台」は何ですか？',
    prompts: [
      'いまの自分を支えている習慣・人・場所・経験を書き出してください。',
      '見落としていた助けや、もう持っている力はありますか。',
    ],
  },
  {
    title: '3. 大切にしたい「軸」は何ですか？',
    prompts: [
      'この時期に守りたい感覚や価値は何ですか。',
      '他人の正解ではなく、自分の基準に言い換えるとどうなりますか。',
    ],
  },
  {
    title: '4. 見直したい「境界線」はどこですか？',
    prompts: [
      '抱え込みすぎていることはありますか。',
      '減らしていい責任や、頼っていい相手はいますか。',
    ],
  },
  {
    title: '5. 戻したい「彩り」は何ですか？',
    prompts: [
      '成果に直結しなくても、自分が回復する時間は何ですか。',
      '今週の予定の中に、5分でも戻せる余白はありますか。',
    ],
  },
] as const;

export const faqItems = [
  {
    question: 'ドーナツメソッドとは何ですか？',
    answer:
      '比較・罪悪感・焦りによって「足りない」側だけが大きく見えるときに、今ある土台・大切にしたい軸・必要な境界線まで含めて整理し直すための考え方です。',
  },
  {
    question: '気質タイプチェックとの違いは何ですか？',
    answer:
      'ドーナツメソッドは今の状況を整理し、次の一歩を決めるための見方です。気質タイプチェックは、生まれ持った傾向や整え方の癖をやさしく知るためのライトな自己理解コンテンツです。',
  },
  {
    question: '1対1セッションでは何をしますか？',
    answer:
      '対話を通して、今起きていることを整理し、足りない側だけでなく、今ある土台も見えるようにして、次の一歩を決めます。必要に応じてドーナツメソッドの5つの見方も使います。',
  },
  {
    question: 'どんな人に向いていますか？',
    answer:
      '頑張っているのに満たされない人、自分の基準が見えにくくなっている人、頭の中を整理して次の一歩を決めたい人に向いています。',
  },
] as const;

export const profileHighlights = [
  'ことばにならない違和感を、構造と感覚の両方から整理する。',
  '抽象的な話だけで終わらせず、生活に戻せる形にする。',
  '急がせず、でも曖昧なままにもせず、次の一歩まで伴走する。',
] as const;

export const temperamentTypes = [
  {
    id: 'shittori',
    name: 'しっとり生地',
    description:
      '感情の機微や場の空気を受け取りやすく、深く考える傾向のあるタイプ。丁寧さが強みですが、抱え込みやすさもあります。',
    fit: '静かな時間を先に確保し、情報量を減らしながら整える方法が向いています。',
    caution: '人の期待を背負いすぎると、自分の感覚が後回しになりやすい点に注意。',
  },
  {
    id: 'mocchiri',
    name: 'もっちり生地',
    description:
      '粘り強く、日々を着実に支えるタイプ。安心できる流れがあると力を発揮しやすい反面、変化の多さで消耗しやすいことがあります。',
    fit: '手順を小さく区切り、生活リズムを守りながら整える方法が向いています。',
    caution: '我慢で回し続けると、限界が来るまで気づきにくいことがあります。',
  },
  {
    id: 'fuwatto',
    name: 'ふわっと生地',
    description:
      '発想がやわらかく、気分やひらめきから動けるタイプ。広がりのある見方が得意ですが、形にする前に散ってしまうこともあります。',
    fit: '選択肢を最初に広げ、その後でひとつだけ残す整え方が向いています。',
    caution: '刺激を入れすぎると、集中したい軸が見えにくくなることがあります。',
  },
  {
    id: 'sakkuri',
    name: 'さっくり生地',
    description:
      '判断が早く、切り替えも得意なタイプ。進める力がありますが、疲れや繊細さを見落とすと急に乾いてしまうことがあります。',
    fit: '決める前に一呼吸入れ、身体感覚や休息を先に確認する整え方が向いています。',
    caution: '合理性だけで進めると、あとから違和感が大きくなることがあります。',
  },
] as const;

export const temperamentQuestions = [
  {
    id: 'q1',
    prompt: '疲れているとき、いちばん起きやすいのはどれですか？',
    options: [
      { label: '人の気分まで拾ってしまう', type: 'shittori' },
      { label: 'いつもの流れが崩れると固まる', type: 'mocchiri' },
      { label: 'あれこれ手を出してまとまらない', type: 'fuwatto' },
      { label: 'まだいけると進めてしまう', type: 'sakkuri' },
    ],
  },
  {
    id: 'q2',
    prompt: '安心して力を出しやすい環境は？',
    options: [
      { label: '静かで落ち着いた空気', type: 'shittori' },
      { label: '見通しのある日課', type: 'mocchiri' },
      { label: '自由度が高く遊びがある場', type: 'fuwatto' },
      { label: '判断と行動が早い場', type: 'sakkuri' },
    ],
  },
  {
    id: 'q3',
    prompt: '整え直したいとき、自然に取りやすい行動は？',
    options: [
      { label: '気持ちを言葉にする', type: 'shittori' },
      { label: '手順を書き出す', type: 'mocchiri' },
      { label: '発想を広げてみる', type: 'fuwatto' },
      { label: '不要なものを切る', type: 'sakkuri' },
    ],
  },
  {
    id: 'q4',
    prompt: 'つい偏りやすいのは？',
    options: [
      { label: '感じすぎて抱え込む', type: 'shittori' },
      { label: '我慢して続けすぎる', type: 'mocchiri' },
      { label: '選択肢を増やしすぎる', type: 'fuwatto' },
      { label: '休まず進めすぎる', type: 'sakkuri' },
    ],
  },
  {
    id: 'q5',
    prompt: '人からよく言われる強みは？',
    options: [
      { label: '丁寧で気がつく', type: 'shittori' },
      { label: '安定していて頼れる', type: 'mocchiri' },
      { label: '柔軟で発想が豊か', type: 'fuwatto' },
      { label: '決断が早く前に進める', type: 'sakkuri' },
    ],
  },
  {
    id: 'q6',
    prompt: '休みの日に回復しやすいのは？',
    options: [
      { label: '静かな一人時間', type: 'shittori' },
      { label: '生活を整える時間', type: 'mocchiri' },
      { label: '新しい刺激や散歩', type: 'fuwatto' },
      { label: '身体を動かして切り替える', type: 'sakkuri' },
    ],
  },
  {
    id: 'q7',
    prompt: '迷ったとき、まず確かめたいのは？',
    options: [
      { label: '本当はどう感じているか', type: 'shittori' },
      { label: '現実的に回るかどうか', type: 'mocchiri' },
      { label: '他にどんな可能性があるか', type: 'fuwatto' },
      { label: '今すぐ何を決めるべきか', type: 'sakkuri' },
    ],
  },
  {
    id: 'q8',
    prompt: '今の自分に必要なのは？',
    options: [
      { label: '感じたことを整理する余白', type: 'shittori' },
      { label: '無理のないペース配分', type: 'mocchiri' },
      { label: '広げたあとに絞る視点', type: 'fuwatto' },
      { label: '休むことを予定に入れること', type: 'sakkuri' },
    ],
  },
] as const;

export type TemperamentTypeId = (typeof temperamentTypes)[number]['id'];
