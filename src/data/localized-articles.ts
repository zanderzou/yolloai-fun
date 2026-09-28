import type { ComparisonKey, Locale } from "./locales";

export interface YolloArticle {
  title: string;
  description: string;
  intro: string;
  dimensions: [string, string, string][];
  sections: [string, string][];
  verdict: string;
}

export const sourceLinks: Record<ComparisonKey, { name: string; url: string }[]> = {
  "character-ai": [
    { name: "Character.AI · Safety update", url: "https://blog.character.ai/continuing-to-build-upon-our-safety-priorities/" },
    { name: "Character.AI · Lorebook", url: "https://blog.character.ai/lorebook/" },
  ],
  "janitor-ai": [
    { name: "Janitor AI · Official app listing", url: "https://play.google.com/store/apps/details?id=com.janitor.ai" },
    { name: "Janitor AI · Official site", url: "https://janitorai.com/" },
  ],
  "spicychat-ai": [
    { name: "SpicyChat AI · Character chats", url: "https://docs.spicychat.ai/product-guides/character-chats" },
    { name: "SpicyChat AI · Lorebook", url: "https://docs.spicychat.ai/product-guides/lorebook" },
    { name: "SpicyChat AI · Semantic memory", url: "https://docs.spicychat.ai/product-guides/premium-features/semantic-memory-2-0" },
  ],
  "crushon-ai": [
    { name: "CrushOn AI · Product", url: "https://chat.crushon.ai/" },
    { name: "CrushOn AI · Messages, context and memory", url: "https://chat.crushon.ai/blog/ai-character-chat-unlimited-messages-limits" },
  ],
  "candy-ai": [
    { name: "Candy AI · Product", url: "https://candy.ai/" },
  ],
};

// Source-only draft. Do not create routes or advertise hreflang until all 45 articles exist.
export const comparisonArticles: Partial<Record<Locale, Record<ComparisonKey, YolloArticle>>> = {
  ja: {
    "character-ai": {
      title:"Yollo AI vs Character.AI：映像まで進めるか、会話世界を深めるか",
      description:"Yollo AI と Character.AI を、人物との会話、Lorebook、年齢別の安全設計、画像・動画、料金とプライバシーで比較します。",
      intro:"両サービスは架空人物との会話を入口にしますが、同じ成果を約束するわけではありません。Yollo AI は人物の作成と画像・短い動画への展開を紹介します。Character.AI は会話、声、創作世界を育てる方向で、2026年には Lorebook と年齢別の安全対策を案内しています。",
      dimensions:[
        ["中心の作業","会話から画像・短編動画へ","人物との会話と創作世界"],
        ["設定と記憶","ペルソナと記憶を現行アカウントで確認","定義・声・対象者向け Lorebook の利用資格を確認"],
        ["安全の確認","成人の架空人物、公開範囲、地域条件","18歳未満向けの自由会話制限と異議申立てなど"],
        ["費用の見方","生成・再試行・購読を別々に数える","Lorebook 等の有料利用条件を確認"]
      ],
      sections:[
        ["会話に何を求めるか","同じ成人の架空人物に目標と小さな葛藤を与え、十二往復ほど会話します。Character.AI は長く知られた会話中心のサービスですが、人物の数では品質を測れません。Yollo AI でもモデル切り替えや記憶の宣伝だけで判断せず、口調の維持、物語を動かす力、同じ事実の再現を見ます。"],
        ["Lorebook と記憶は別の仕組み","Character.AI の公式発表では、Lorebook はキーワードに応じて世界設定を読み込む機能で、公開当初は有料会員向けのベータでした。これは会話のすべてを永久に覚える保証ではありません。Yollo AI が案内する長期記憶についても、架空の地名を会話の途中で置き、話題を変えてから直接聞き直す検査が必要です。"],
        ["映像と安全の前提を揃える","Yollo AI では同じ人物・小道具で画像と短い動画を試し、顔や舞台のずれ、生成時間、課金を控えます。Character.AI を『文字だけ』と決めつけてはいけませんが、同等の動画生成を前提にもしません。同社の2026年安全資料は18歳未満への自由会話の終了と年齢推定・モデレーション通知を説明します。当サイトは成人の利用だけを扱います。"],
        ["地域・データ・支払い","Yollo AI の規約は中国本土または香港に所在・居住する人の利用を禁じます。宣伝は無料・登録不要を強調する一方で規約は有料購読や使用料を認めるため、実際の画面で確かめてください。双方で人物や会話の公開設定、削除方法を見つけ、私的な秘密をテストに使わないことが重要です。"]
      ],
      verdict:"会話を静止画や短い映像まで展開することが目的で、地域と費用の条件を満たすなら Yollo AI を試す理由があります。人物との対話、声、公式の Lorebook を使った世界づくりが優先なら Character.AI が比較対象です。勝者は宣伝の機能数ではなく、同じ架空の場面で得た結果で決めましょう。"
    },
    "janitor-ai": {
      title:"Yollo AI vs Janitor AI：短い映像か、参加型の物語か",
      description:"Yollo AI と Janitor AI を、人物発見、参加型ストーリー、脚本・Lorebook、画像・動画、データと費用で比べます。",
      intro:"Yollo AI はロールプレイを画像や短編動画へつなぐ製品として案内されます。一方 Janitor AI の公式 Android アプリは、物語の人物と会話し、読者が展開に関われる参加型フィクションを中心に説明しています。2026年のアプリ更新にはスクリプトと Lorebook も記載されています。",
      dimensions:[
        ["物語の入口","人物を選び、画像や映像を作る","ジャンルと人物を選び、場面を進める"],
        ["創作の操作","ペルソナと複数モデルを現行画面で調べる","アプリでスクリプトと Lorebook の利用可否を調べる"],
        ["映像","画像・短い動画を公式サイトが案内","公式アプリ説明から同等の映像機能は断定できない"],
        ["費用","無料宣伝と有料規約の差を確認","アプリ内購入の対象と制限を確認"]
      ],
      sections:[
        ["人物と物語の役割","Janitor の開発者は、恋愛小説やファンタジーのようなジャンルから人物を選び、話の行方に参加できる体験としてアプリを説明します。Yollo AI は人物を作成・検索するだけでなく、画像と短い映像を近くに置きます。まず自分が欲しいのは物語の分岐なのか、完成したワンシーンなのかを決めましょう。"],
        ["脚本・Lorebook の記載は機能保証ではない","公式アプリの更新履歴にはスクリプトと Lorebook が挙がっています。しかし全アカウントで同じ編集機能が使えるか、Web 版でも同一かは一覧だけでは分かりません。逆に、古い解説にある外部 API 設定が Janitor のすべての利用者に必須とも言えません。現在の自分の画面で確かめてください。"],
        ["同じ場面を異なる終点まで試す","成人の架空の学芸員が夜の展示を準備する設定を両方に入力し、展示名・鍵・締切を後の会話で覚えているか確認します。Janitor では利用できる世界設定と場面の進行を、Yollo AI では同じ人物が画像・動画でも保たれるかを記録します。これは読者向けの検査方法で、当サイトの実測結果ではありません。"],
        ["プライバシーと費用","Janitor の公式 Google Play 表示はアプリ内購入と個人情報・利用状況の取得可能性を示します。Yollo AI の規約は購読と利用料を認め、中国本土・香港に所在または居住する人の利用を禁止します。両方で会話や人物の公開範囲、削除経路、実際の一週間の費用を確認し、実在者の秘密を入れないでください。"]
      ],
      verdict:"人物と世界を長く進める参加型の物語が主目的なら、Janitor AI の現在の脚本・Lorebook 操作を調べる価値があります。同じ人物を会話から画像・短編動画へ運びたいなら Yollo AI の流れを試してください。古い API 説明や広告だけで優劣を決めないことが大切です。"
    },
    "spicychat-ai": {
      title:"Yollo AI vs SpicyChat AI：映像の連続性か、Lorebook の世界管理か",
      description:"Yollo AI と SpicyChat AI の違いを、会話の継続、Lorebook、任意の記憶機能、画像・動画、支払いとデータから整理します。",
      intro:"両方とも成人の架空人物と物語を進める用途があります。Yollo AI は対話から画像・短い動画への移動を案内し、SpicyChat AI の公式文書は人物チャット、キーワードで呼び出す Lorebook、任意の Semantic Memory を詳しく説明しています。『どちらも記憶がある』という一行だけでは選べません。",
      dimensions:[
        ["創作の軸","会話と画像・短編動画のつながり","人物チャットと世界設定"],
        ["設定の呼び出し","ペルソナと記憶を実際に試す","キーワードで Lorebook 項目を参照"],
        ["長い対話","広告上の長期記憶を要検証","通常の文脈と任意の Semantic Memory を区別"],
        ["料金","生成・モデル・再試行を数える","Lorebook・記憶・モデルの現行プランを確認"]
      ],
      sections:[
        ["世界設定を整理する方法","SpicyChat の公式 Lorebook は場所、登場人物、規則などを項目にし、会話内のキーワードに応じて関連内容を文脈へ渡す仕組みです。長い設定を人物紹介に詰め込まずに済む利点がありますが、トリガーが広すぎれば不要な項目が混ざります。現行プランと作成制限を公式画面で確かめてください。"],
        ["『記憶』を機能名で比べない","SpicyChat の Semantic Memory の説明は、過去のやり取りから重要事項を要約して管理する方法を示します。直前の会話文脈や Lorebook とは別です。Yollo AI のサイトも長期記憶を掲げますが、同じ技術かどうかは不明です。架空の三つの事実を途中で置き、話題を変えてから再質問すれば実用面を比べられます。"],
        ["映像が必要なら別に採点","Yollo AI の特徴は、人物との会話を静止画と短い動画へ進められると説明している点です。画像の見栄えだけでなく、二回目にも顔・衣装・小道具が維持されるか、失敗時の費用はいくらか記録します。SpicyChat を単に『テキストしかない』と断定せず、現在のメディア機能は別途確認しましょう。"],
        ["公開・地域・支出","人物が公開される初期設定と、会話・記憶・作品の削除方法を両方で探します。Yollo AI は中国本土・香港に所在または居住する人の利用を規約で禁じ、無料宣伝があっても有料利用を認めています。課金は通常のメッセージだけでなく、希望する記憶機能や動画の再試行まで数えるべきです。"]
      ],
      verdict:"一つの人物を画像・短編動画まで描き、連続性を確認したいなら Yollo AI を試します。長い物語の地名や規則を Lorebook で管理したいなら SpicyChat AI の公式に記載された操作が比較の中心です。どちらも実際の階層・費用とデータ条件で判断してください。"
    },
    "crushon-ai": {
      title:"Yollo AI vs CrushOn AI：人物を映像化するか、共有世界で話し続けるか",
      description:"Yollo AI と CrushOn AI を、モデル選択、グループ場面、World Card、画像・短編動画、記憶と実際の費用で比較。",
      intro:"Yollo AI は人物チャットと画像・短い動画をつなぐ流れを紹介します。CrushOn AI の公式サイトは長編の人物会話、モデル選択、複数人物の場面、共有世界用の World Card を強調します。公式の宣伝上の成果を私たちの実測として言い換えず、自分が必要な終点を先に決めましょう。",
      dimensions:[
        ["中心","一人の人物を会話から映像へ","人物との長い会話と共有世界"],
        ["操作","ペルソナ・画像・短編動画","モデル切り替え・グループ・World Card"],
        ["記憶","現在のモデルで再質問して確認","メッセージ数、文脈、保存記憶を別々に確認"],
        ["無料の意味","有料利用を許す規約と宣伝を照合","無料モデルと上位モデルのクレジットを分ける"]
      ],
      sections:[
        ["一枚の絵と続く世界は別の目的","Yollo AI では会話の人物と場面を画像や短い動画で再現できるかが鍵です。CrushOn AI は複数の人物を同じ世界に置き、モデルを変えながら長く対話する機能を案内します。共有設定が主目的なら、動画ボタンがあるだけで Yollo を優先する理由にはなりません。"],
        ["上限は四種類に分ける","CrushOn 公式の説明は、送れるメッセージ、利用できるモデル、次の返答が見る文脈、別に保持される記憶を区別しています。『無制限チャット』が全モデルの無制限利用や完全な記憶を意味するわけではありません。Yollo でも広告の長期記憶を鵜呑みにせず、同じ架空の事実が何往復後に残るか確かめます。"],
        ["二段階の比較試験","成人の架空の天文学者が展示を準備する話を両方で十二往復続け、展示名と壊れた望遠鏡を後から尋ねます。Yollo では画像と短い動画に同じ人物・道具を出し、CrushOn では現行プランが許せば二人目や World Card を足して設定が崩れないか見ます。この方法は提案であり、当サイトの架空の実測順位ではありません。"],
        ["料金と私的な情報","CrushOn は無料モデルの会話と上位モデル用のクレジットを分けて案内しています。Yollo も無料の宣伝だけでなく規約上の購読・利用料を確認すべきです。いずれも長編会話には個人的な内容が蓄積しがちなので、実名や秘密を避け、人物の公開範囲と削除方法を先に調べます。Yollo の地域禁止も守ってください。"]
      ],
      verdict:"架空人物を会話から静止画・短編動画へ移す結果が必要なら Yollo AI が課題に近く、長い会話、モデル選択、複数人物と共有世界を重視するなら CrushOn AI が比較の軸です。無料という言葉だけでなく、希望するモデルや再試行を含めた費用で選びましょう。"
    },
    "candy-ai": {
      title:"Yollo AI vs Candy AI：幅広い人物探しと、一人のコンパニオン制作",
      description:"Yollo AI と Candy AI を、人物発見、コンパニオン作成、会話・音声・画像・動画の一貫性、プライバシーと費用で比較。",
      intro:"両サービスは会話だけでなく視覚的な生成も紹介しています。Yollo AI は多数の架空人物から選ぶこと、ペルソナや画像・短い動画を試すことが入口です。Candy AI は一人のコンパニオンを組み立て、チャット・声・画像・動画でやり取りを続ける流れを示します。",
      dimensions:[
        ["始め方","既存の人物を探すか新しく作る","案内に沿って一人のコンパニオンを作る"],
        ["メディア","会話の人物を画像・短い動画にする","会話・声・画像・動画を同じ人物につなぐ"],
        ["一貫性","場面と見た目を複数回で試す","声・性格・見た目が媒体をまたいで保たれるか"],
        ["費用","無料宣伝と規約上の有料利用を照合","購読とトークン追加購入を確認"]
      ],
      sections:[
        ["探す楽しさと作る手順","Yollo AI の公式案内は人物の検索・作成、ペルソナ、複数モデルを前面に出します。先に幅広い設定を試し、合う人物を探したい人には便利かもしれません。Candy AI は理想とするコンパニオンの設定を段階的に選ぶ流れを示します。手順が明確でも、完成した人物の会話が自然とは限りません。"],
        ["Candy AI を文字専用と扱わない","Candy AI の公式ページは音声会話、個別の画像、動画を明示します。したがって『Yollo だけが映像を作れる』という比較は誤りです。同じ成人の架空人物で会話し、画像と短い映像を作り、Candy では声も試します。顔、口調、持ち物が媒体をまたいで揃うかが重要です。"],
        ["一週間の費用を計算する","Yollo AI の宣伝は無料・登録不要ですが、規約は購読と利用料を認めます。Candy AI は購読とトークン追加購入を案内しています。定価だけでなく、いつもの会話回数、音声、画像、動画、失敗した再生成まで数えて、どちらの流れが自分の予算に収まるか見ましょう。料金は現行の購入画面が基準です。"],
        ["公開・削除・地域","Yollo AI の規約には作品を公開する選択と、ユーザー制作物の利用許諾に関する記述があります。人物や画像を共有する前に設定を確認してください。Candy AI も独自のプライバシー、削除、支払条件を別途確認します。実在人物の顔や声を無断使用せず、Yollo が禁じる中国本土・香港での利用を回避しないでください。"]
      ],
      verdict:"多様な人物を探し、会話から画像・短編動画へ進む流れが実際に役立つなら Yollo AI が候補です。一人のコンパニオンを段階的に設計し、チャット・声・画像・動画で使い続けたいなら Candy AI を比較します。両者ともメディアの連続性と有料の再試行まで確かめてから決めてください。"
    }
  },
  ko: {
    "character-ai": {
      title:"Yollo AI vs Character.AI: 장면을 영상으로 만들까, 대화 속 세계를 키울까",
      description:"Yollo AI와 Character.AI를 캐릭터 대화, 세계관 설정, 연령별 안전 장치, 이미지·영상, 실제 지출을 기준으로 비교합니다.",
      intro:"두 서비스 모두 가상의 인물과 대화할 수 있지만 지향점은 다릅니다. Yollo AI는 캐릭터를 찾거나 만든 뒤 이미지와 짧은 영상으로 장면을 이어 가는 흐름을 내세웁니다. Character.AI는 대화와 목소리, 창작 세계에 초점을 맞추며 공식적으로 Lorebook과 청소년 이용 정책을 설명합니다.",
      dimensions:[
        ["주요 결과물","대화에서 이미지·짧은 영상으로 확장","캐릭터와의 대화 및 세계관"],
        ["설정 유지","페르소나와 기억을 실제 계정에서 시험","정의·음성·Lorebook 이용 자격 확인"],
        ["안전","성인 가상 인물, 공개 범위와 지역 제한","미성년자 대상 자유 대화 제한과 이의 제기 절차"],
        ["비용","생성, 재시도, 구독료를 따로 기록","Lorebook 등 유료 기능의 현재 조건 확인"]
      ],
      sections:[
        ["대화의 목표부터 맞추기","같은 성인 가상 인물에게 목표 하나와 작은 갈등을 주고 열두 차례쯤 대화해 보세요. Character.AI의 캐릭터 수나 Yollo AI의 모델 수만으로 응답 품질을 알 수는 없습니다. 말투가 유지되는지, 이야기를 스스로 전개하는지, 앞서 정한 사실을 다시 떠올리는지 기록하는 편이 유용합니다."],
        ["Lorebook은 무제한 기억과 다릅니다","Character.AI의 공식 설명에 따르면 Lorebook은 특정 단어에 맞춰 세계관 정보를 불러오는 기능이며 출시 당시 유료 회원 대상 베타였습니다. 모든 대화를 영구 저장한다는 뜻은 아닙니다. Yollo AI가 소개하는 장기 기억도 가상의 장소 이름을 대화 중간에 넣고 화제를 바꾼 다음 다시 물어 실제로 확인해야 합니다."],
        ["영상과 연령 정책을 따로 평가","Yollo AI에서는 같은 인물과 소품을 이미지와 짧은 영상으로 만들어 얼굴, 배경, 생성 시간과 재시도 비용을 살펴보세요. Character.AI를 단순한 텍스트 서비스로 묘사할 수 없지만 두 제품의 영상 기능이 같다고 가정해서도 안 됩니다. Character.AI의 2026년 공식 안전 공지는 18세 미만 이용자의 자유 대화 종료와 연령 확인·신고 절차를 안내합니다."],
        ["지역과 개인정보 조건","Yollo AI 약관은 중국 본토 또는 홍콩에 있거나 거주하는 사람의 이용을 금지합니다. 홍보 문구는 무료·가입 불필요를 강조하지만 약관에는 가입, 구독과 사용료 조항도 있습니다. 결제 직전 화면과 데이터 삭제 경로를 확인하고, 시험 대화에는 실명이나 민감한 비밀을 넣지 마세요."]
      ],
      verdict:"대화를 이미지와 짧은 영상까지 연결하는 것이 목적이고 지역·비용 조건을 충족한다면 Yollo AI를 시험해 볼 만합니다. 캐릭터 대화와 음성, Lorebook을 활용한 세계관이 더 중요하다면 Character.AI가 비교 기준입니다. 기능 개수가 아닌 같은 가상 장면의 결과로 결정하세요."
    },
    "janitor-ai": {
      title:"Yollo AI vs Janitor AI: 영상 장면과 참여형 이야기는 어떻게 다른가",
      description:"Yollo AI와 Janitor AI의 캐릭터 탐색, 참여형 이야기, 스크립트·Lorebook, 영상, 개인정보와 비용 차이를 살펴봅니다.",
      intro:"Yollo AI는 역할극에서 이미지와 짧은 영상으로 이어지는 제작 흐름을 소개합니다. Janitor AI의 공식 안드로이드 앱은 인물과 대화하며 전개에 참여하는 이야기를 중심으로 설명하고, 2026년 업데이트에 스크립트와 Lorebook도 언급합니다. 앱 설명만으로 웹과 앱의 모든 기능이 같다고 판단하지는 마세요.",
      dimensions:[
        ["시작점","인물을 고르고 장면을 시각화","장르와 캐릭터를 골라 이야기에 참여"],
        ["창작 도구","페르소나와 모델 선택을 현재 화면에서 확인","스크립트·Lorebook 제공 범위를 확인"],
        ["미디어","공식 사이트가 이미지·짧은 영상을 소개","공식 앱 설명만으로 동일 영상 기능은 확인 불가"],
        ["결제","무료 홍보와 유료 약관을 함께 검토","앱 내 구매 대상과 제한을 확인"]
      ],
      sections:[
        ["완성 장면이 필요한가, 이어지는 이야기인가","Janitor AI 개발자의 앱 소개는 로맨스와 판타지 등 장르에서 인물을 골라 줄거리에 참여하는 경험을 강조합니다. Yollo AI에서는 캐릭터를 찾거나 만든 다음 이미지·영상을 생성할 수 있다고 안내합니다. 한 장면을 남기려는 목적이라면 매체 간 일관성을, 분기하는 서사를 원한다면 캐릭터 반응과 선택의 여지를 보세요."],
        ["스크립트와 Lorebook의 실제 범위","공식 앱 업데이트에는 스크립트와 Lorebook이 등장합니다. 그러나 무료 계정이나 웹 버전에서 동일한 편집 기능을 쓸 수 있는지까지 그 목록이 보증하지는 않습니다. 과거 리뷰에 나오는 외부 API 설정이 모든 Janitor 이용자에게 필수라고 말하는 것도 부정확합니다. 현재 본인 계정의 메뉴와 요금제를 확인하세요."],
        ["같은 가상 장면으로 다른 끝점을 시험","성인인 가상 큐레이터가 야간 전시를 준비한다는 설정을 두 서비스에 넣어 보세요. 전시 이름, 열쇠, 마감 시각을 나중에 정확히 기억하는지 확인합니다. Janitor에서는 세계관 도구와 이야기 진행을, Yollo AI에서는 해당 인물이 이미지·영상에서도 알아볼 수 있게 유지되는지를 기록하세요. 이는 시험 방법이지 저희의 실측 결과는 아닙니다."],
        ["데이터와 지출","Janitor AI의 공식 Google Play 표시는 앱 내 구매와 특정 개인정보·사용 데이터 수집 가능성을 안내합니다. Yollo AI 약관은 구독·사용료를 인정하고 중국 본토·홍콩에 있거나 거주하는 이용자를 제외합니다. 두 곳 모두 캐릭터 공개 설정, 대화 삭제, 평소 이용량에 따른 일주일 비용을 확인한 뒤 선택하세요."]
      ],
      verdict:"긴 이야기와 캐릭터 사이의 상호작용이 우선이라면 현재 Janitor AI의 스크립트·Lorebook을 직접 확인해 보세요. 한 캐릭터를 대화에서 이미지·짧은 영상으로 옮기는 작업이 필요하다면 Yollo AI의 흐름이 더 맞을 수 있습니다. 오래된 API 설명이나 무료라는 광고 한 줄로 결정하지 마세요."
    },
    "spicychat-ai": {
      title:"Yollo AI vs SpicyChat AI: 영상의 연결성과 Lorebook 관리",
      description:"Yollo AI와 SpicyChat AI를 Lorebook, 선택형 기억, 긴 대화, 이미지·영상, 공개 설정과 실제 비용으로 비교합니다.",
      intro:"두 서비스 모두 성인 가상 인물과 이야기를 이어 갈 때 고려할 수 있습니다. Yollo AI는 대화에서 이미지·짧은 영상으로 넘어가는 흐름을 내세웁니다. SpicyChat AI의 공식 문서는 캐릭터 대화와 키워드 기반 Lorebook, 별도의 Semantic Memory를 설명합니다. 두 곳 모두 ‘기억 기능’이 있다는 말만으로는 충분한 비교가 되지 않습니다.",
      dimensions:[
        ["중심 작업","대화와 이미지·영상의 연결","캐릭터 대화와 세계관 설정"],
        ["설정 호출","페르소나·기억을 실제로 재질문해 검증","키워드로 Lorebook 항목 불러오기"],
        ["긴 대화","홍보된 장기 기억을 직접 시험","문맥, Lorebook, 선택형 Semantic Memory 구분"],
        ["요금","생성·재시도·모델별 지출 기록","기억 기능과 모델의 현재 요금제 확인"]
      ],
      sections:[
        ["세계관 정보를 어디에 둘까","SpicyChat의 공식 Lorebook 설명은 장소, 인물, 규칙 등을 별도 항목으로 정리하고 대화 속 키워드에 맞는 내용을 문맥에 불러옵니다. 긴 설정을 캐릭터 인사말에 모두 넣지 않아도 되지만, 키워드가 너무 넓으면 관계없는 항목이 호출될 수 있습니다. 현행 계정에서 작성 한도와 사용 조건을 확인하세요."],
        ["세 종류의 기억을 혼동하지 않기","SpicyChat의 Semantic Memory 자료는 과거 대화의 중요한 내용을 요약해 관리하는 방식을 설명합니다. 이는 눈앞의 문맥 창이나 Lorebook과 같은 기능이 아닙니다. Yollo AI도 장기 기억을 광고하지만 내부 방식이 같다고 단정할 수 없습니다. 가상의 세 사실을 심은 뒤 화제를 바꿔 다시 질문하면 실제 효용을 비교할 수 있습니다."],
        ["영상은 별도 기준으로 채점","Yollo AI가 소개하는 차별점은 캐릭터 대화를 이미지와 짧은 영상으로 잇는 것입니다. 첫 이미지의 화려함만 보지 말고 두 번째 생성에서도 얼굴·복장·소품이 이어지는지, 실패한 결과에도 요금이 드는지 확인하세요. SpicyChat의 현행 미디어 기능을 확인하지 않은 채 ‘텍스트 전용’이라고 단정하지는 않습니다."],
        ["공개 범위와 이용 가능 지역","양쪽에서 캐릭터의 기본 공개 상태와 대화·기억·작품 삭제 방법을 찾아보세요. Yollo AI 약관은 중국 본토와 홍콩에 있거나 거주하는 사람의 이용을 금지하고, 무료 홍보와 별개로 유료 사용을 허용합니다. 매일 쓰는 메시지뿐 아니라 원하는 기억 기능과 영상 재시도까지 비용에 포함해야 합니다."]
      ],
      verdict:"같은 캐릭터를 이미지와 짧은 영상까지 이어 붙여 보고 싶다면 Yollo AI가 관련성이 높습니다. 긴 이야기의 장소와 규칙을 Lorebook으로 관리하려면 SpicyChat AI의 공식 도구가 비교의 핵심입니다. 최종 선택은 현재 제공 범위, 공개 설정과 실제 지출에 달려 있습니다."
    },
    "crushon-ai": {
      title:"Yollo AI vs CrushOn AI: 영상 제작과 여러 인물의 긴 대화",
      description:"Yollo AI와 CrushOn AI를 모델 선택, 그룹 장면, World Card, 기억과 문맥, 무료 이용, 이미지·영상 비용으로 비교합니다.",
      intro:"Yollo AI는 캐릭터와 나눈 이야기를 이미지·짧은 영상으로 발전시키는 방식을 소개합니다. CrushOn AI 공식 사이트는 긴 캐릭터 대화, 모델 선택, 여러 인물이 등장하는 장면과 World Card를 강조합니다. 두 서비스의 홍보 내용을 실제 시험 결과로 바꾸어 말하지 않고, 필요한 최종 결과가 무엇인지부터 정해 보겠습니다.",
      dimensions:[
        ["목적","한 인물을 대화에서 영상으로 옮기기","긴 대화와 여러 인물의 공동 세계"],
        ["조작","페르소나·이미지·짧은 영상","모델 변경·그룹 대화·World Card"],
        ["기억","뒤늦게 같은 사실을 묻는 방식으로 점검","메시지 수·문맥·저장된 기억을 구분"],
        ["무료 범위","무료 광고와 약관의 유료 조항 대조","무료 모델과 상위 모델의 크레딧 구분"]
      ],
      sections:[
        ["완성한 장면과 지속되는 세계","Yollo AI에서는 대화 속 인물과 배경이 이미지·영상에 얼마나 일관되게 나타나는지가 중요합니다. CrushOn AI는 여러 캐릭터를 같은 세계에 넣고 모델을 바꾸며 이야기하는 기능을 안내합니다. 공유 세계가 목표라면 영상 생성 버튼이 있다는 이유만으로 Yollo AI를 우선할 필요는 없습니다."],
        ["‘무제한’이라는 단어를 나눠 읽기","CrushOn의 공식 설명은 전송 가능한 메시지 수, 이용 모델, 다음 답변에 전달되는 문맥, 따로 유지되는 기억을 분리합니다. 무제한 대화가 모든 상위 모델의 무제한 사용이나 완전한 기억을 뜻하지는 않습니다. Yollo AI의 장기 기억도 광고대로 작동한다고 가정하지 말고, 가상의 사실을 몇 차례 대화 뒤에 물어보세요."],
        ["두 단계의 공정한 비교","성인 가상 천문학자가 전시를 준비하는 장면으로 두 곳에서 열두 차례 대화합니다. 전시 이름과 고장 난 망원경을 나중에 질문하세요. Yollo에서는 같은 사람과 도구가 이미지·영상에도 나오는지, CrushOn에서는 현재 요금제가 허용하면 두 번째 인물과 World Card를 넣어 설정이 유지되는지 살펴봅니다. 이는 권장 시험법이며 측정된 순위는 아닙니다."],
        ["모델과 재생성 비용","CrushOn은 무료 모델과 유료 크레딧을 사용하는 상위 모델을 구분해 설명합니다. Yollo도 무료라는 홍보 외에 약관상 구독·사용료를 확인해야 합니다. 긴 대화에는 민감한 내용이 쌓이기 쉬우므로 실명과 개인 비밀을 피하고, 공개 범위·삭제 경로를 먼저 확인하세요. Yollo의 지역 제한도 지켜야 합니다."]
      ],
      verdict:"가상 인물을 대화에서 이미지·짧은 영상으로 옮겨야 한다면 Yollo AI의 결과를 시험하세요. 긴 대화, 모델 선택, 다인물 장면과 공유 세계가 우선이라면 CrushOn AI가 더 직접적인 비교 대상입니다. 무료라는 이름보다 원하는 모델과 재시도까지 포함한 비용이 중요합니다."
    },
    "candy-ai": {
      title:"Yollo AI vs Candy AI: 다양한 캐릭터 탐색과 한 명의 동반자 만들기",
      description:"Yollo AI와 Candy AI를 캐릭터 탐색·제작, 대화·음성·이미지·영상의 일관성, 개인정보와 실제 비용으로 비교합니다.",
      intro:"두 서비스 모두 대화 외에 시각적 결과물을 안내합니다. Yollo AI는 여러 가상 인물을 탐색하고 페르소나, 이미지와 짧은 영상을 시험하는 출발점이 있습니다. Candy AI는 한 명의 동반자를 설정해 채팅·음성·이미지·영상으로 관계를 이어 가는 흐름을 보여 줍니다.",
      dimensions:[
        ["시작 방법","기존 캐릭터를 찾거나 새로 제작","단계에 따라 동반자 한 명을 구성"],
        ["매체","대화 속 인물을 이미지·짧은 영상으로","채팅·음성·이미지·영상 연결"],
        ["일관성","여러 장면에서 외형과 설정 비교","목소리·성격·외형이 매체 사이에 유지되는지 확인"],
        ["지출","무료 홍보와 약관의 유료 조항 대조","구독과 추가 토큰 구매 확인"]
      ],
      sections:[
        ["찾는 경험과 만드는 절차","Yollo AI 공식 소개는 캐릭터 검색·제작, 페르소나와 모델 선택을 강조합니다. 먼저 다양한 설정을 둘러보며 마음에 드는 인물을 찾는 사람에게 맞을 수 있습니다. Candy AI는 원하는 동반자를 단계적으로 설정하는 방식입니다. 단계가 간결해도 실제 대화의 자연스러움까지 보장하지는 않습니다."],
        ["Candy AI도 음성과 영상을 제공합니다","Candy AI 공식 사이트는 음성 대화, 개인화 이미지와 영상을 명시합니다. 따라서 ‘Yollo에만 영상이 있다’는 비교는 잘못입니다. 같은 성인 가상 인물로 대화한 뒤 이미지와 짧은 영상을 만들고, Candy에서는 목소리도 시험하세요. 얼굴·말투·소품이 매체를 넘어 이어지는지가 핵심입니다."],
        ["정가보다 한 주의 사용량","Yollo AI 홍보는 무료·가입 불필요를 말하지만 약관은 구독과 사용료를 허용합니다. Candy AI는 구독 외에 토큰 추가 구매를 안내합니다. 평소 메시지 수, 음성, 이미지, 영상과 실패한 재생성까지 계산하면 자신에게 맞는 비용 구조가 보입니다. 최종 가격은 현재 결제 화면에서 확인하세요."],
        ["공개, 삭제와 지역","Yollo AI 약관에는 작품 공개 선택과 이용자 생성물의 사용 허락에 관한 내용이 있습니다. 캐릭터나 이미지를 공유하기 전 설정을 살피세요. Candy AI의 개인정보·삭제·결제 정책도 별도로 확인해야 합니다. 실존 인물의 얼굴이나 목소리를 허락 없이 쓰지 말고, Yollo의 중국 본토·홍콩 이용 금지 조건을 우회하지 마세요."]
      ],
      verdict:"여러 캐릭터를 탐색하고 대화에서 이미지·짧은 영상으로 옮기는 흐름이 필요하다면 Yollo AI를 시험하세요. 동반자 한 명을 설계해 채팅·음성·이미지·영상에서 계속 사용하려면 Candy AI가 유력한 비교 대상입니다. 두 곳 모두 매체 간 일관성과 유료 재시도를 확인한 뒤 결정하는 것이 좋습니다."
    }
  },
  "zh-Hant": {
    "character-ai": {
      title:"Yollo AI vs Character.AI：把角色做成影片，還是把對話世界寫深",
      description:"比較 Yollo AI 與 Character.AI 的角色對話、Lorebook、未成年保護、圖片與影片，以及實際花費。",
      intro:"兩者都能從虛構角色的對話開始，適合的創作終點卻不同。Yollo AI 介紹從角色設定延伸至圖片與短影片的流程；Character.AI 的重心是對話、語音與世界觀，官方亦說明 Lorebook 及依年齡區分的安全措施。以下把產品說明與值得親自測試的項目分開。",
      dimensions:[
        ["主要成果","角色對話連到圖片、短影片","角色互動與故事世界"],
        ["設定維持","實測人物設定與記憶","確認角色定義、語音及 Lorebook 使用資格"],
        ["安全與地區","成人虛構角色、公開設定及服務地區","未滿十八歲的開放式聊天限制與申訴流程"],
        ["費用","分開記錄生成、重試和訂閱","查核 Lorebook 等功能的現行方案"]
      ],
      sections:[
        ["先決定要完成哪一種作品","替同一位成年虛構人物設定目標與一個小衝突，在兩處各聊十多輪。不要只比角色或模型數量；記下角色是否維持語氣、能否主動推進情節，以及稍後能否答出先前提過的細節。若目的是完成一段影片，還須額外檢驗媒體結果，而不能用聊天表現代替。"],
        ["Lorebook 不是永不遺忘","Character.AI 官方說明中的 Lorebook 是按關鍵詞帶入世界設定的工具，推出時先開放給付費會員測試。這不等於無限保存每一句對話。Yollo AI 宣傳的長期記憶也應用相同方法檢驗：中途設定一個虛構地點，轉換話題後再問回來，看它能否正確使用，而不是只重複名稱。"],
        ["影像與安全規則各自核對","在 Yollo AI 用同一人物與道具產生圖片、短影片，比較臉部、背景、生成時間與重試費用。Character.AI 不能被簡化成『只有文字』，但也不應假定它提供同等的影片製作流程。該公司 2026 年的官方安全公告說明，未成年用戶不再使用開放式角色聊天，並介紹年齡判定及內容處理機制。"],
        ["地區、資料與付款","Yollo AI 條款禁止位於或居住於中國大陸、香港的人使用；宣傳雖強調免費及免註冊，條款仍容許註冊、訂閱和使用費。付款前應看實際頁面。兩邊也要查清角色公開範圍、聊天刪除方式，不要拿真實姓名或私密資料當測試內容。"]
      ],
      verdict:"若想把角色對話延伸為圖片和短影片，且符合地區及費用條件，Yollo AI 值得實測。若更重視對話、語音與 Lorebook 世界觀，Character.AI 是較貼切的比較對象。結論應來自同一虛構場景的結果，而非宣傳上的功能數量。"
    },
    "janitor-ai": {
      title:"Yollo AI vs Janitor AI：一段可看的影像，還是一個能參與的故事",
      description:"從角色探索、互動故事、腳本和 Lorebook 到圖片、影片、資料與付款，比較 Yollo AI 和 Janitor AI。",
      intro:"Yollo AI 把角色扮演連到圖片與短影片；Janitor AI 的官方 Android 應用介紹則以和故事人物互動、參與情節為主，2026 年更新記錄亦提到腳本與 Lorebook。這些官方描述指出不同重點，卻不能證明每個帳號、網頁版和手機版都有完全相同的功能。",
      dimensions:[
        ["開始方式","找角色或建立角色，再製作場景","按題材挑選人物，參與情節發展"],
        ["創作控制","於目前帳號檢查人物設定和模型","核對腳本、Lorebook 的實際開放範圍"],
        ["影像","官方網站介紹圖片與短影片","官方應用說明不足以證實有同等影片功能"],
        ["支出","比對免費宣傳與收費條款","查清應用內購買項目與限制"]
      ],
      sections:[
        ["選擇故事的終點","Janitor AI 開發者在應用商店以戀愛、奇幻等題材，介紹和人物一起推動情節的體驗。Yollo AI 則把角色尋找、建立與媒體生成放在同一條路徑。想要故事分支，重點是人物回應和可供選擇的行動；想留下視覺場景，重點則是人物在多次生成後是否依然一致。"],
        ["別把更新記錄當功能保證","官方應用更新記錄列出腳本與 Lorebook，沒有保證免費帳號或網頁版都有同樣的編輯權限。相反地，過往教學談到的外部 API 設定，也不能據此宣稱所有 Janitor AI 用戶都必須自行配置。請以目前使用平台、帳號與方案顯示的選項為準。"],
        ["用相同人物試不同成果","設定一位成年虛構策展人準備夜間展覽，讓兩個服務各自記住展名、鑰匙和截止時間，數輪後再問。在 Janitor AI 看故事如何進展，以及能否使用世界設定工具；在 Yollo AI 看該人物與道具能否延續到圖片、短影片。這是提供讀者的測試方法，不是本站聲稱已完成的實測評比。"],
        ["個資和一週成本","Janitor AI 的官方 Google Play 頁面顯示應用內購買，並揭露可能收集部分個人與使用資料。Yollo AI 條款容許訂閱、使用費，且禁止位於或居住於中國大陸、香港的人使用。兩邊都應檢查角色公開設定、聊天刪除路徑，以及按真實使用量計算的一週費用。"]
      ],
      verdict:"若主要想和人物一起推進長篇互動故事，應先試 Janitor AI 目前可用的腳本與 Lorebook。若要把同一人物從對話轉為圖片或短影片，Yollo AI 更接近任務。勿依賴過時的 API 教學或『免費』兩字作決定。"
    },
    "spicychat-ai": {
      title:"Yollo AI vs SpicyChat AI：影像連續性與 Lorebook 世界設定",
      description:"整理 Yollo AI 和 SpicyChat AI 在 Lorebook、語意記憶、長對話、圖片影片、公開設定與費用上的差別。",
      intro:"兩者都可用來發展成年虛構角色的故事。Yollo AI 強調聊天後製作圖片和短影片；SpicyChat AI 官方文件詳細介紹角色聊天、按關鍵詞呼叫的 Lorebook，以及另行提供的 Semantic Memory。只說『都有記憶』，無法協助判斷真正的創作流程。",
      dimensions:[
        ["工作重點","對話與圖片、短影片互相連接","角色聊天與世界觀維護"],
        ["設定提取","實測人物設定和記憶","用關鍵詞呼叫 Lorebook 條目"],
        ["長篇對話","核對宣傳的長期記憶","區分眼前脈絡、Lorebook 和選用記憶"],
        ["花費","計入生成、模型及失敗重試","確認現行記憶功能和模型方案"]
      ],
      sections:[
        ["世界設定放在哪裡","SpicyChat 官方 Lorebook 文件說明，可把地點、人物及規則寫成條目，由聊天中的關鍵詞帶入相關內容。這比把所有資料塞進角色開場白更易管理，但觸發詞若太廣，也可能帶入不相干條目。要檢查目前方案是否開放建立，以及條目和使用上限。"],
        ["記憶不是單一功能","SpicyChat 的 Semantic Memory 文件描述整理過往重要訊息的方式，與當前聊天脈絡及 Lorebook 並不相同。Yollo AI 也宣傳長期記憶，但公開資料不足以斷言其內部機制相同。可在對話中放入三個虛構事實，換話題後逐一再問，以可用性而非功能名稱比較。"],
        ["影像須獨立評分","Yollo AI 介紹從角色對話進到圖片和短影片。不要只看第一張漂亮畫面；再生成一次，核對人物臉部、服裝與道具是否延續，失敗的嘗試會不會收費。也不要在未核查當前版本前，武斷稱 SpicyChat 是純文字服務。"],
        ["公開範圍與所在地","兩邊都要找出角色是否預設公開，如何刪除對話、記憶與作品。Yollo AI 禁止位於或居住於中國大陸及香港的人使用，其條款亦容許收費，不能只根據免費宣傳作預算。長期使用時應把期望的記憶功能與影片重試一併算入。"]
      ],
      verdict:"想看角色在圖片與短影片之間能否保持一致，可試 Yollo AI。若要以 Lorebook 維護長篇故事的地點和規則，SpicyChat AI 的官方工具更值得細看。最後仍須依當前功能權限、資料設定與實際支出決定。"
    },
    "crushon-ai": {
      title:"Yollo AI vs CrushOn AI：讓角色成為影片，還是讓多人世界持續對話",
      description:"以模型選擇、多人情境、World Card、脈絡與記憶、圖片影片及費用，比較 Yollo AI 和 CrushOn AI。",
      intro:"Yollo AI 介紹把角色聊天延伸成圖片與短影片。CrushOn AI 官方網站則主打長篇角色對話、模型選擇、多人情境和 World Card。官方宣傳是產品主張，不是本站親測所得；比較前先決定，自己需要的是可看的場景，還是會持續發展的多人故事。",
      dimensions:[
        ["主要目標","將一位角色從對話帶到影像","長篇聊天與多人共享世界"],
        ["可調整工具","人物設定、圖片與短影片","模型切換、多人聊天、World Card"],
        ["記憶判斷","以延遲提問測試先前事實","分清訊息數、脈絡與保存記憶"],
        ["免費範圍","核對宣傳與收費條款","區分免費模型與高階模型點數"]
      ],
      sections:[
        ["單一影像不等於共同世界","在 Yollo AI，要看聊天中的人、場景能否可靠地重現在圖片與短影片。CrushOn AI 介紹讓多個角色進入同一世界、切換模型並持續對話的做法。若多人互動是首要需求，不能因為另一服務有影片按鈕，就推定它更合適。"],
        ["四種上限不要混用","CrushOn 官方文章把可送出的訊息、可選模型、下一次回覆能讀到的脈絡，以及另外保存的記憶分開說明。『無限聊天』不代表高階模型無限使用，更不代表每句話都會被記住。Yollo AI 宣傳的長期記憶也要用相同的虛構事實，隔多輪再問來驗證。"],
        ["兩階段的對照測試","讓一位成年虛構天文學家準備展覽，兩邊各聊十二輪，再問展名與壞掉的望遠鏡。Yollo AI 另生成圖片和短影片，檢查人物及道具；CrushOn AI 若目前方案允許，加入第二位人物和 World Card，看設定是否延續。這是測試建議，本站並未宣稱做出實測排名。"],
        ["模型、點數與隱私","CrushOn 把免費模型和使用點數的高階模型分開介紹。Yollo AI 雖強調免費，條款也有訂閱及使用費。把想用的模型、影像失敗後重試與每週對話量一起估算；長篇聊天容易累積個人訊息，應避免真實秘密，先查公開與刪除設定，也必須遵守 Yollo 的地區限制。"]
      ],
      verdict:"需要讓虛構人物從聊天變成圖片、短影片，Yollo AI 較切題；若重視長對話、模型選擇、多人角色與共享設定，應仔細試 CrushOn AI。請以自己要用的模型和重試成本，而不是抽象的『免費』口號選擇。"
    },
    "candy-ai": {
      title:"Yollo AI vs Candy AI：探索許多角色，或打造一位專屬夥伴",
      description:"比較 Yollo AI 和 Candy AI 的角色探索、夥伴建立、聊天語音圖片影片的一致性、個資及完整費用。",
      intro:"兩者都不只提供文字對話。Yollo AI 的入口是探索或建立多種虛構角色，進而測試設定、圖片與短影片。Candy AI 展示的是逐步建立一位夥伴，再以聊天、語音、圖片和影片持續互動。比較應聚焦於這兩種使用流程，而非錯稱其中一方沒有視覺功能。",
      dimensions:[
        ["開始方式","探索現有角色或自行建立","按步驟塑造一位夥伴"],
        ["媒體","把聊天角色帶入圖片、短影片","聊天、語音、圖片、影片相連"],
        ["一致性","多個場景中比較外貌與設定","檢查聲音、個性和外觀跨媒體延續"],
        ["費用","比對免費宣傳與條款收費","確認訂閱及額外代幣購買"]
      ],
      sections:[
        ["探索型與設計型入口","Yollo AI 官方介紹強調角色搜尋及建立、人物設定和模型選擇，適合先看不同故事前提的人。Candy AI 則讓使用者逐步設定一位理想夥伴。步驟清楚不保證角色在長篇對話中自然，因此都需要實際以同一個成年虛構設定試用。"],
        ["Candy AI 不是純文字產品","Candy AI 官方頁面明確列出語音聊天、個人化圖片和影片。因此『只有 Yollo 能生成影片』是不正確的。兩邊都可用同一成年虛構人物聊天，製作圖片與短片；在 Candy AI 再測語音。記下臉部、語氣、隨身物品在不同媒體是否一致。"],
        ["算一週成本而非只看月費","Yollo AI 的免費、免註冊宣傳與條款所容許的訂閱、使用費要一起看。Candy AI 介紹訂閱與額外代幣。按平日聊天量、語音、圖片、影片、失敗後再生成的次數估算，才知道哪種流程符合預算。確切價格須以當下結帳頁為準。"],
        ["作品公開與刪除","Yollo AI 條款包含使用者選擇公開作品，以及對使用者生成內容授權的條文。分享角色或影像前要讀清設定；Candy AI 的私隱、刪除和付款政策亦應另行查核。請勿未經同意使用真實人物的臉或聲音，也不要迴避 Yollo 對中國大陸及香港的使用限制。"]
      ],
      verdict:"想先探索多位角色，再把喜歡的人物從聊天帶到圖片與短影片，可試 Yollo AI；想逐步建立一位夥伴，並持續使用聊天、聲音和影像，可比較 Candy AI。兩者都應檢查跨媒體一致性與付費重試後再決定。"
    }
  },
  es: {
    "character-ai": {
      title:"Yollo AI vs Character.AI: crear escenas visuales o desarrollar un mundo conversacional",
      description:"Compara Yollo AI y Character.AI por diálogo, Lorebook, protección de menores, imágenes, vídeo, privacidad y coste real.",
      intro:"Ambos permiten conversar con personajes ficticios, pero no persiguen exactamente el mismo resultado. Yollo AI presenta un recorrido desde el personaje hasta imágenes y vídeos breves. Character.AI pone el foco en la conversación, las voces y los mundos narrativos; además, explica oficialmente su Lorebook y medidas de seguridad diferenciadas por edad.",
      dimensions:[
        ["Resultado central","Conversación que puede convertirse en imagen y vídeo corto","Conversación con personajes y construcción de mundos"],
        ["Continuidad","Comprobar persona y memoria en la cuenta actual","Verificar definiciones, voces y acceso a Lorebook"],
        ["Seguridad","Personajes ficticios adultos, visibilidad y regiones","Restricciones del chat abierto para menores y apelaciones"],
        ["Presupuesto","Contar generaciones, intentos fallidos y suscripción","Revisar las condiciones actuales de Lorebook y funciones de pago"]
      ],
      sections:[
        ["Comparar la misma situación, no el número de personajes","Da a un personaje ficticio adulto un objetivo y un pequeño conflicto. Conversa unas doce veces en cada servicio y anota si conserva su manera de hablar, impulsa la historia y recuerda un detalle anterior. Ni la cantidad de personajes de Character.AI ni el número de modelos anunciado por Yollo AI sustituyen esa prueba. Si buscas una escena audiovisual, evalúa también el resultado final."],
        ["Lorebook no equivale a memoria perfecta","Según Character.AI, Lorebook aporta información de un mundo cuando aparecen determinadas palabras clave; empezó como beta para miembros de pago. No promete recordar para siempre cada mensaje. La memoria a largo plazo que anuncia Yollo AI también requiere una prueba: introduce un lugar inventado, cambia de tema y vuelve a preguntar por él sin dar pistas."],
        ["Medios y reglas de edad por separado","En Yollo AI, genera una imagen y un vídeo corto del mismo personaje y objeto. Mide coherencia de rostro y escenario, tiempo y coste de repetir un intento. No describas Character.AI como una plataforma exclusivamente de texto, pero tampoco supongas que ofrece el mismo flujo de vídeo. Su comunicación oficial de 2026 detalla el fin del chat abierto para menores de 18 años y mecanismos de edad y moderación."],
        ["Región, datos y pago","Los términos de Yollo AI prohíben su uso a quienes estén o residan en China continental u Hong Kong. Aunque la publicidad destaque acceso gratis y sin registro, los términos contemplan registro, suscripciones y cargos por uso. Comprueba el precio antes de pagar. En ambos servicios revisa quién puede ver un personaje y cómo eliminar conversaciones; no uses secretos reales para probarlos."]
      ],
      verdict:"Si necesitas llevar un personaje del diálogo a imágenes y vídeos cortos, y cumples las condiciones regionales y de pago, merece la pena probar Yollo AI. Si priman las voces, la conversación y un mundo construido con Lorebook, Character.AI es la referencia adecuada. Decide con la misma escena ficticia, no con una lista de funciones."
    },
    "janitor-ai": {
      title:"Yollo AI vs Janitor AI: una escena visual o una historia en la que participar",
      description:"Diferencias entre Yollo AI y Janitor AI en personajes, narrativa interactiva, guiones, Lorebook, imágenes, privacidad y pagos.",
      intro:"Yollo AI plantea continuar el roleplay en imágenes y vídeos breves. La ficha oficial de la aplicación Android de Janitor AI describe historias en las que conversas con personajes e influyes en el desarrollo; su historial de 2026 menciona guiones y Lorebook. La ficha no demuestra que esas funciones estén disponibles por igual para cada cuenta y en la versión web.",
      dimensions:[
        ["Punto de partida","Elegir o crear un personaje y visualizar una escena","Elegir género y personaje para participar en la historia"],
        ["Herramientas","Comprobar persona y modelos en la cuenta actual","Comprobar acceso real a guiones y Lorebook"],
        ["Medios","El sitio oficial anuncia imágenes y vídeo breve","La ficha no confirma un sistema audiovisual equivalente"],
        ["Coste","Contrastar promesa de gratuidad con términos de pago","Consultar compras integradas y límites"]
      ],
      sections:[
        ["Participar en la trama no es lo mismo que exportar una escena","El desarrollador de Janitor AI presenta géneros como romance y fantasía y una experiencia en la que el lector ayuda a llevar la historia. Yollo AI reúne descubrimiento o creación de personajes con generación visual. Para una narración ramificada, observa iniciativa y opciones; para una escena terminada, valora si personaje y escenario permanecen reconocibles tras varias generaciones."],
        ["Qué prueban los registros oficiales","La actualización de la aplicación menciona guiones y Lorebook, pero no garantiza el mismo editor en planes gratuitos ni en la web. Del mismo modo, una guía antigua sobre configurar una API externa no demuestra que todos los usuarios actuales de Janitor AI deban hacerlo. Abre la interfaz y el plan que realmente usarías antes de convertir una función anunciada en criterio de compra."],
        ["Una prueba con dos destinos distintos","Imagina a una conservadora adulta y ficticia preparando una exposición nocturna. Da a ambos servicios el nombre de la muestra, una llave y un plazo; pregunta por ellos varios turnos después. En Janitor, prueba el avance narrativo y los controles de mundo disponibles. En Yollo, comprueba si personaje y objetos se reconocen en imagen y vídeo. Es un método propuesto, no un resultado medido por este sitio."],
        ["Datos y gasto semanal","La ficha oficial de Janitor AI en Google Play indica compras integradas y posibles categorías de datos personales o de uso recogidos. Los términos de Yollo AI contemplan suscripciones y cargos por uso, y excluyen a quienes estén o residan en China continental u Hong Kong. Revisa visibilidad, borrado y coste de una semana de uso real en ambos."]
      ],
      verdict:"Si quieres avanzar una historia interactiva durante mucho tiempo, examina los guiones y Lorebook que Janitor AI permita usar hoy. Si el objetivo es llevar a un mismo personaje del diálogo a imagen y vídeo breve, prueba el flujo de Yollo AI. No tomes una explicación antigua de API ni la palabra «gratis» como veredicto."
    },
    "spicychat-ai": {
      title:"Yollo AI vs SpicyChat AI: continuidad visual frente a control del mundo con Lorebook",
      description:"Compara Lorebook, memoria semántica, conversaciones largas, imágenes, vídeo, privacidad y coste de Yollo AI y SpicyChat AI.",
      intro:"Los dos pueden servir para contar historias con personajes ficticios adultos. Yollo AI destaca el paso de la conversación a imágenes y vídeos breves. La documentación oficial de SpicyChat AI explica chats de personajes, un Lorebook activado por palabras clave y la función separada Semantic Memory. Decir simplemente que «ambos tienen memoria» oculta las diferencias que importan.",
      dimensions:[
        ["Trabajo principal","Vincular diálogo con imagen y vídeo corto","Conversar y administrar reglas del mundo"],
        ["Información recuperada","Probar persona y memoria con preguntas posteriores","Activar entradas del Lorebook por palabras clave"],
        ["Historia larga","Verificar en uso la memoria anunciada","Distinguir contexto, Lorebook y Semantic Memory opcional"],
        ["Precio","Incluir modelo, generación y reintentos","Comprobar el plan actual de memoria y modelos"]
      ],
      sections:[
        ["Dónde guardar las reglas de una historia","El Lorebook de SpicyChat permite separar lugares, personas y reglas en entradas que se incorporan al contexto cuando aparecen sus palabras clave. Evita comprimir todo en el saludo del personaje, aunque una clave demasiado general puede introducir datos irrelevantes. Confirma los límites y permisos del plan que usarías, no solo la descripción del manual."],
        ["Tres maneras distintas de recordar","La documentación de Semantic Memory explica una forma de gestionar datos importantes de conversaciones anteriores. No es lo mismo que la ventana de contexto actual ni que el Lorebook. Yollo AI también anuncia memoria duradera, pero no hay base para atribuirle el mismo mecanismo. Introduce tres hechos ficticios, cambia de asunto y pregúntalos más tarde para comparar utilidad."],
        ["Evaluar el vídeo por separado","Yollo AI presenta imágenes y vídeos breves vinculados al personaje. No te quedes con la primera imagen llamativa: repite la generación y comprueba cara, ropa, accesorios, duración y coste de un fallo. Tampoco afirmes que SpicyChat solo admite texto sin revisar sus funciones actuales; aquí la distinción es el flujo de trabajo documentado, no una exclusividad no demostrada."],
        ["Visibilidad, región y gasto","Busca en ambos servicios si los personajes son públicos por defecto y cómo borrar chats, recuerdos y obras. Yollo AI excluye por contrato a usuarios situados o residentes en China continental y Hong Kong, y sus condiciones permiten pagos pese a la promoción gratuita. Cuenta también el coste de la memoria que deseas y los reintentos de vídeo."]
      ],
      verdict:"Para continuar un personaje en imágenes y vídeos breves, pon a prueba Yollo AI. Si necesitas mantener lugares y reglas de una narración larga mediante Lorebook, las herramientas documentadas de SpicyChat AI son más pertinentes. La elección final depende del acceso actual, la privacidad y el gasto real."
    },
    "crushon-ai": {
      title:"Yollo AI vs CrushOn AI: convertir un personaje en vídeo o sostener un mundo compartido",
      description:"Diferencias entre Yollo AI y CrushOn AI en modelos, chats de grupo, World Card, memoria, gratuidad y creación visual.",
      intro:"Yollo AI presenta un recorrido desde el chat de personajes hasta imágenes y vídeos cortos. CrushOn AI describe oficialmente conversaciones largas, selección de modelos, escenas con varios personajes y World Card. Estas son afirmaciones de producto, no resultados de pruebas realizadas por nosotros: la comparación empieza por decidir si buscas una escena visual o una historia compartida.",
      dimensions:[
        ["Meta","Trasladar un personaje del chat a imagen y vídeo","Conversación larga en un mundo con varios personajes"],
        ["Controles","Persona, imágenes y vídeos cortos","Modelos, grupo y World Card"],
        ["Memoria","Preguntar más tarde por los mismos hechos","Separar mensajes, contexto y memoria persistente"],
        ["Gratis","Contrastar promoción con cláusulas de pago","Separar modelos gratis y créditos para otros modelos"]
      ],
      sections:[
        ["Una escena terminada y un mundo persistente","En Yollo AI importa si la persona, el vestuario y el lugar del diálogo reaparecen con coherencia en imágenes y vídeos. CrushOn AI anuncia interacción de varios personajes, cambio de modelo y configuración de un mundo común. Si tu prioridad es esa dinámica colectiva, la mera existencia de un botón de vídeo no inclina automáticamente la balanza."],
        ["«Mensajes ilimitados» tiene matices","La explicación oficial de CrushOn distingue cuántos mensajes puedes enviar, qué modelos puedes usar, cuánto contexto recibe la siguiente respuesta y qué datos se guardan aparte como memoria. Una etiqueta de chat ilimitado no garantiza modelos premium sin límite ni recuerdo completo. Aplica a Yollo AI la misma prueba: introduce un hecho ficticio y pregunta por él tras varios turnos."],
        ["Prueba comparable en dos fases","Un astrónomo adulto y ficticio prepara una exposición. Conversa doce turnos en ambas plataformas y pregunta después por el nombre de la muestra y un telescopio averiado. En Yollo, crea imagen y vídeo con el mismo personaje y objeto. En CrushOn, si tu plan lo permite, añade otro personaje y una World Card. Es un protocolo sugerido, no una clasificación basada en mediciones nuestras."],
        ["Créditos y conversaciones privadas","CrushOn diferencia conversaciones con modelos gratuitos de créditos para modelos superiores. En Yollo AI hay que leer sus posibles suscripciones y cargos por uso, no solo el lema gratuito. Evita datos íntimos de personas reales, revisa visibilidad y borrado, y suma modelo, mensajes y reintentos audiovisuales al presupuesto. Respeta asimismo la restricción regional de Yollo."]
      ],
      verdict:"Si el resultado deseado es una imagen o un vídeo breve de un personaje del chat, Yollo AI responde mejor a esa tarea. Si prefieres modelos alternativos, conversaciones largas, varios personajes y mundo compartido, compara CrushOn AI. El precio relevante es el de la configuración que vas a utilizar, no una promesa genérica de gratuidad."
    },
    "candy-ai": {
      title:"Yollo AI vs Candy AI: explorar personajes o crear una compañera a medida",
      description:"Compara Yollo AI y Candy AI por descubrimiento de personajes, chat, voz, imágenes, vídeo, continuidad, datos y coste.",
      intro:"Ambos servicios anuncian más que mensajes de texto. Yollo AI permite partir de diversos personajes ficticios o crearlos, y continuar la experiencia con imágenes y vídeos breves. Candy AI propone configurar a una compañera y mantener la interacción mediante chat, voz, imágenes y vídeo. La diferencia útil está en la forma de empezar y sostener el personaje.",
      dimensions:[
        ["Inicio","Explorar personajes existentes o crear uno","Configurar una compañera paso a paso"],
        ["Medios","Llevar el personaje del chat a imagen y vídeo corto","Relacionar chat, voz, imagen y vídeo"],
        ["Coherencia","Comparar apariencia y escena en varios intentos","Comprobar voz, carácter y aspecto entre medios"],
        ["Gasto","Contrastar publicidad gratis con términos de pago","Revisar suscripción y compra adicional de tokens"]
      ],
      sections:[
        ["Explorar frente a diseñar","Yollo AI destaca la búsqueda y creación de personajes, las personas ficticias y los modelos. Puede resultar atractivo si primero quieres probar premisas distintas. Candy AI organiza la elección de rasgos de una compañera en una secuencia más guiada. Una configuración sencilla no demuestra por sí sola que la conversación posterior sea natural; usa la misma persona ficticia adulta en ambas."],
        ["Candy AI también ofrece vídeo y voz","La página oficial de Candy AI menciona explícitamente llamadas o interacción por voz, imágenes personalizadas y vídeo. Sería incorrecto decir que Yollo es el único que crea medios visuales. Chatea, crea imagen y vídeo con el mismo personaje en ambos; en Candy, prueba también la voz. Anota si rostro, forma de hablar y objetos permanecen coherentes entre formatos."],
        ["Calcular una semana de uso","La promoción de Yollo AI habla de acceso gratuito y sin registro, mientras sus términos permiten suscripción y cargos por uso. Candy AI informa sobre suscripciones y tokens adicionales. Suma tus conversaciones habituales, voz, imágenes, vídeos y generaciones fallidas antes de comparar precios. La pantalla de pago actual prevalece sobre cualquier cifra antigua."],
        ["Obras compartidas y eliminación","Los términos de Yollo AI describen decisiones de publicación de obras y licencias sobre contenido generado por usuarios; revisa los controles antes de compartir un personaje o imagen. Consulta por separado las políticas de privacidad, eliminación y pago de Candy AI. No copies la cara o la voz de personas reales sin permiso ni eludas la prohibición regional de Yollo."]
      ],
      verdict:"Si disfrutas descubriendo diversos personajes y quieres llevar una conversación a imágenes y vídeos breves, prueba Yollo AI. Si prefieres crear una compañera y mantenerla en chat, voz e imagen, Candy AI merece una comparación directa. Comprueba continuidad y coste de los reintentos en ambos antes de suscribirte."
    }
  },
  "pt-BR": {
    "character-ai": {
      title:"Yollo AI vs Character.AI: levar personagens ao vídeo ou aprofundar o universo da conversa",
      description:"Compare Yollo AI e Character.AI por conversa, Lorebook, segurança para menores, imagens, vídeos, privacidade e custo.",
      intro:"Os dois permitem conversar com personagens fictícios, mas servem a objetivos diferentes. O Yollo AI apresenta um caminho da criação de personagens até imagens e vídeos curtos. O Character.AI concentra-se em conversas, vozes e mundos narrativos; seus comunicados oficiais explicam o Lorebook e medidas de segurança por faixa etária.",
      dimensions:[
        ["Resultado principal","Conversa que avança para imagens e vídeos curtos","Interação com personagens e construção de universos"],
        ["Continuidade","Testar personalidade e memória na conta atual","Conferir definições, vozes e acesso ao Lorebook"],
        ["Segurança","Personagens adultos fictícios, visibilidade e região","Restrições ao chat aberto de menores e recurso de moderação"],
        ["Custo","Somar gerações, novas tentativas e assinatura","Conferir as regras atuais do Lorebook e do plano pago"]
      ],
      sections:[
        ["Compare a mesma cena, não o catálogo","Dê a um personagem adulto fictício um objetivo e um pequeno conflito. Converse cerca de doze turnos em cada serviço e anote se o jeito de falar permanece, se a história anda e se um detalhe anterior volta corretamente. A quantidade de personagens do Character.AI ou de modelos anunciados pelo Yollo AI não substitui essa experiência. Quem busca vídeo ainda precisa avaliar o resultado visual."],
        ["Lorebook não é memória infinita","Segundo o Character.AI, o Lorebook insere informações de um universo quando certas palavras-chave surgem; foi lançado inicialmente em beta para assinantes. Isso não significa guardar toda fala para sempre. A memória de longo prazo divulgada pelo Yollo AI também precisa de teste: invente um local, mude de assunto e pergunte sobre ele depois, sem repetir a resposta."],
        ["Separe mídia de regras para menores","No Yollo AI, gere uma imagem e um vídeo curto com o mesmo personagem e objeto. Observe rosto, cenário, espera e custo de refazer um resultado ruim. Não reduza o Character.AI a texto puro, mas tampouco pressuponha um fluxo equivalente de vídeo. Em 2026, a empresa informou o fim do chat aberto para menores de 18 anos e detalhou verificação etária e processos de moderação."],
        ["Região, dados e pagamento","Os termos do Yollo AI proíbem o uso por quem está ou mora na China continental ou em Hong Kong. A publicidade fala em acesso grátis e sem cadastro, mas os termos admitem cadastro, assinaturas e cobrança por uso. Veja a tela atual antes de pagar. Nos dois serviços, confira se personagens são públicos e como apagar conversas; não use segredos reais nos testes."]
      ],
      verdict:"Se você precisa transformar o diálogo em imagens e vídeos curtos e atende às regras regionais e financeiras, vale experimentar o Yollo AI. Se vozes, conversa e universo apoiado pelo Lorebook importam mais, o Character.AI é o parâmetro adequado. Decida com a mesma cena fictícia, não com a contagem de recursos."
    },
    "janitor-ai": {
      title:"Yollo AI vs Janitor AI: uma cena visual ou uma história para participar",
      description:"Entenda as diferenças entre Yollo AI e Janitor AI em personagens, narrativa interativa, scripts, Lorebook, mídia, dados e gastos.",
      intro:"O Yollo AI propõe sair do roleplay para imagens e vídeos curtos. A página oficial do aplicativo Android do Janitor AI descreve histórias em que você conversa com personagens e interfere no enredo; a atualização de 2026 cita scripts e Lorebook. Essa página não comprova que todos os planos ou a versão web tragam exatamente as mesmas ferramentas.",
      dimensions:[
        ["Ponto de partida","Escolher ou criar alguém e visualizar uma cena","Escolher gênero e personagem para participar do enredo"],
        ["Ferramentas","Conferir persona e modelos na conta atual","Verificar disponibilidade de scripts e Lorebook"],
        ["Mídia","Site oficial apresenta imagens e vídeos curtos","Descrição do app não comprova vídeo equivalente"],
        ["Pagamento","Comparar promoção gratuita com termos pagos","Consultar compras no aplicativo e limites"]
      ],
      sections:[
        ["Participar da trama ou guardar uma cena","O desenvolvedor do Janitor AI apresenta gêneros como romance e fantasia e uma experiência em que o leitor ajuda a conduzir os acontecimentos. O Yollo AI aproxima busca e criação de personagens da produção de imagens e vídeos. Para uma história ramificada, observe iniciativa e opções. Para uma cena pronta, compare se pessoa e ambiente continuam reconhecíveis em gerações sucessivas."],
        ["O que a atualização oficial realmente indica","A ficha do aplicativo menciona scripts e Lorebook, sem garantir o mesmo editor para contas gratuitas ou na web. Da mesma forma, tutoriais antigos sobre configurar uma API externa não provam que todo usuário atual do Janitor AI precise desse passo. Abra o produto e o plano que você realmente usaria antes de comprar por uma função anunciada."],
        ["Um teste comum, dois resultados distintos","Imagine uma curadora fictícia adulta preparando uma exposição noturna. Informe o nome da mostra, uma chave e o prazo a ambos; pergunte pelos detalhes vários turnos depois. No Janitor, avalie o avanço da história e as ferramentas de mundo disponíveis. No Yollo AI, veja se personagem e objetos continuam identificáveis em imagem e vídeo. Este é um método sugerido, não uma medição feita pelo site."],
        ["Privacidade e custo semanal","A ficha oficial do Janitor AI no Google Play aponta compras no aplicativo e possíveis categorias de dados pessoais e de uso coletados. Os termos do Yollo AI permitem assinatura e cobrança por uso, além de restringir usuários que estejam ou morem na China continental ou em Hong Kong. Verifique visibilidade, exclusão e uma semana de gasto real em ambos."]
      ],
      verdict:"Para participar de um enredo longo, examine os scripts e o Lorebook disponíveis hoje no Janitor AI. Para levar o mesmo personagem da conversa a imagem e vídeo curto, teste o fluxo do Yollo AI. Nem tutoriais antigos de API nem a palavra «grátis» resolvem a escolha."
    },
    "spicychat-ai": {
      title:"Yollo AI vs SpicyChat AI: continuidade visual ou organização do universo no Lorebook",
      description:"Compare Lorebook, memória semântica, conversas longas, imagens, vídeos, privacidade e custos do Yollo AI e SpicyChat AI.",
      intro:"Ambos podem servir a narrativas com personagens fictícios adultos. O Yollo AI divulga a passagem do chat para imagens e vídeos curtos. A documentação do SpicyChat AI detalha conversas com personagens, Lorebook acionado por palavras-chave e um recurso separado chamado Semantic Memory. Dizer apenas que os dois têm memória esconde diferenças decisivas.",
      dimensions:[
        ["Foco","Ligar conversa, imagem e vídeo curto","Conversar e organizar regras do mundo"],
        ["Recuperação de dados","Testar persona e lembranças com perguntas posteriores","Acionar entradas do Lorebook por palavras-chave"],
        ["Narrativa longa","Verificar na prática a memória anunciada","Separar contexto, Lorebook e memória semântica opcional"],
        ["Preço","Incluir modelo, geração e tentativas refeitas","Checar plano atual de memória e modelos"]
      ],
      sections:[
        ["Onde ficam as regras da história","O Lorebook descrito pelo SpicyChat separa lugares, pessoas e regras em entradas chamadas quando termos específicos aparecem na conversa. Isso evita encher a saudação do personagem com todo o universo, embora uma palavra-chave ampla demais possa trazer informações fora de hora. Confira os limites e as permissões do seu plano atual."],
        ["Três mecanismos que não são sinônimos","A documentação de Semantic Memory fala em administrar resumos de informações importantes de interações anteriores. Não é a mesma coisa que o contexto visível da conversa nem o Lorebook. O Yollo AI também anuncia memória duradoura, mas não há base para afirmar que use o mesmo mecanismo. Insira três fatos fictícios, mude de assunto e pergunte por eles depois."],
        ["Avalie imagem e vídeo separadamente","O Yollo AI apresenta imagens e vídeos curtos ligados ao personagem. Não pare na primeira imagem bonita: faça outra geração, compare rosto, roupa e objetos e verifique se uma tentativa ruim custa algo. Também não trate o SpicyChat como exclusivamente textual sem consultar seus recursos atuais; a comparação aqui diz respeito aos fluxos documentados, não a uma exclusividade não comprovada."],
        ["Visibilidade, região e orçamento","Nos dois serviços, descubra se personagens são públicos por padrão e como remover conversas, lembranças e obras. O Yollo AI impede contratualmente o uso por pessoas na China continental ou em Hong Kong e admite cobrança apesar da promoção grátis. Some ao orçamento o recurso de memória desejado e novas tentativas de vídeo."]
      ],
      verdict:"Para levar a identidade de um personagem a imagens e vídeos curtos, experimente o Yollo AI. Para administrar locais e regras de uma história longa por Lorebook, as ferramentas documentadas do SpicyChat AI são centrais. A escolha depende do acesso atual, das opções de privacidade e do gasto efetivo."
    },
    "crushon-ai": {
      title:"Yollo AI vs CrushOn AI: transformar um personagem em vídeo ou manter um mundo compartilhado",
      description:"Compare Yollo AI e CrushOn AI por modelos, chats em grupo, World Card, contexto, memória, acesso grátis e criação visual.",
      intro:"O Yollo AI apresenta um caminho do chat de personagens até imagens e vídeos curtos. O CrushOn AI destaca oficialmente conversas longas, escolha de modelos, cenas com vários personagens e World Card. São alegações dos fornecedores, não resultados medidos por nós. Primeiro decida se o produto final desejado é uma cena visual ou uma história coletiva em andamento.",
      dimensions:[
        ["Objetivo","Levar uma pessoa fictícia do chat para imagem e vídeo","Conversar por mais tempo em um mundo com vários personagens"],
        ["Controles","Persona, imagem e vídeos breves","Alternar modelos, grupo e World Card"],
        ["Memória","Perguntar depois pelos mesmos fatos fictícios","Separar mensagens, contexto e lembranças guardadas"],
        ["Gratuidade","Confrontar anúncio e cláusulas de pagamento","Distinguir modelos gratuitos e créditos para os demais"]
      ],
      sections:[
        ["Uma imagem pronta e um mundo persistente","No Yollo AI importa se pessoa, roupa e cenário do diálogo continuam coerentes nas imagens e nos vídeos. O CrushOn AI descreve uma experiência com vários personagens, troca de modelos e mundo compartilhado. Se a interação coletiva é a prioridade, um botão de vídeo em outro serviço não basta para torná-lo superior."],
        ["«Ilimitado» pode se referir a coisas diferentes","A explicação oficial do CrushOn distingue quantidade de mensagens, modelos acessíveis, contexto enviado à resposta seguinte e memória mantida à parte. Chat ilimitado não garante modelos premium sem limites nem lembrança perfeita. Teste o anúncio de memória do Yollo AI da mesma maneira: apresente um fato inventado e pergunte por ele muitos turnos depois."],
        ["Dois momentos de um teste justo","Um astrônomo fictício adulto prepara uma exposição. Converse doze turnos em cada serviço e pergunte depois o nome da mostra e qual telescópio quebrou. No Yollo, crie uma imagem e um vídeo com a mesma pessoa e o mesmo objeto. No CrushOn, se o plano permitir, acrescente outra pessoa e um World Card. Trata-se de um protocolo sugerido, não de um ranking medido por nós."],
        ["Créditos e conversas pessoais","O CrushOn separa modelos gratuitos e créditos para opções superiores. No Yollo AI é necessário ler as possíveis assinaturas e cobranças por uso, não só o anúncio grátis. Evite dados íntimos de pessoas reais, revise visibilidade e exclusão, e inclua modelo, mensagens e repetição de mídia no orçamento. Respeite também a restrição regional do Yollo."]
      ],
      verdict:"Se o resultado deve ser uma imagem ou um vídeo curto do personagem do chat, avalie o Yollo AI. Se você quer modelos alternativos, conversas longas, vários personagens e cenário compartilhado, examine o CrushOn AI. O preço que importa é o da configuração que usará, não a promessa geral de acesso grátis."
    },
    "candy-ai": {
      title:"Yollo AI vs Candy AI: descobrir vários personagens ou criar uma companhia personalizada",
      description:"Compare Yollo AI e Candy AI em descoberta de personagens, chat, voz, imagem, vídeo, consistência, privacidade e custo.",
      intro:"Nenhum dos dois é apenas uma caixa de texto. O Yollo AI permite explorar ou criar diferentes personagens fictícios e continuar a experiência com imagens e vídeos curtos. O Candy AI propõe configurar uma companhia e interagir por chat, voz, imagens e vídeo. A decisão envolve tanto a maneira de começar quanto a consistência da pessoa criada ao longo do tempo.",
      dimensions:[
        ["Começo","Explorar personagens ou criar um novo","Configurar uma companhia passo a passo"],
        ["Mídia","Levar o personagem do chat a imagem e vídeo curto","Conectar chat, voz, imagem e vídeo"],
        ["Consistência","Comparar aparência em cenas repetidas","Verificar voz, personalidade e rosto entre formatos"],
        ["Gasto","Confrontar propaganda grátis e termos pagos","Conferir assinatura e compra extra de tokens"]
      ],
      sections:[
        ["Explorar primeiro ou projetar uma pessoa","O Yollo AI destaca busca e criação de personagens, personas e escolha de modelos. Pode atrair quem prefere experimentar diferentes premissas antes de decidir. O Candy AI guia a configuração de uma companhia específica. Um processo simples não garante conversas naturais; use a mesma personagem fictícia adulta ao testar os dois."],
        ["Candy AI também tem voz e vídeo","A página oficial do Candy AI menciona conversa por voz, imagens personalizadas e vídeo. Portanto, seria incorreto afirmar que somente o Yollo cria mídia visual. Converse e produza imagem e vídeo com a mesma pessoa nos dois; no Candy, teste a voz também. Anote se rosto, jeito de falar e objetos permanecem reconhecíveis entre formatos."],
        ["Faça a conta de uma semana","O Yollo AI se promove como grátis e sem cadastro, mas seus termos permitem assinaturas e cobranças por uso. O Candy AI divulga assinatura e compra adicional de tokens. Some suas mensagens usuais, voz, imagens, vídeos e gerações que precisam ser refeitas. A tela atual de pagamento, não um preço antigo citado em resenha, deve orientar a escolha."],
        ["Compartilhar e apagar conteúdo","Os termos do Yollo AI tratam da escolha de publicar obras e de licenças sobre conteúdo gerado pelo usuário. Antes de compartilhar um personagem ou imagem, confira os controles. Consulte separadamente as políticas de privacidade, exclusão e pagamento do Candy AI. Não use rosto ou voz de pessoas reais sem autorização nem contorne as regras regionais do Yollo."]
      ],
      verdict:"Se você gosta de explorar diferentes personagens e transformá-los de conversa em imagem e vídeo curto, teste o Yollo AI. Se prefere criar uma companhia e mantê-la em chat, voz e imagem, compare o Candy AI diretamente. Nos dois casos, confirme consistência entre formatos e custo das novas tentativas antes de assinar."
    }
  }
};
