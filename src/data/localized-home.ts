import type { ComparisonKey, Locale } from "./locales";

export interface HomeCopy {
  description: string;
  tagline: string;
  intro: string;
  overviewTitle: string;
  overviewLead: string;
  overviewDetail: string;
  workflowTitle: string;
  workflowLead: string;
  workflow: [string, string][];
  featuresTitle: string;
  featuresLead: string;
  features: [string, string][];
  testTitle: string;
  testLead: string;
  test: [string, string][];
  compareTitle: string;
  compareLead: string;
  lenses: Record<ComparisonKey, string>;
  fieldTitle: string;
  fieldLead: string;
  notes: [string, string][];
  privacyTitle: string;
  privacyBody: string;
  blogTitle: string;
  faqTitle: string;
  faq: [string, string][];
  ctaTitle: string;
  ctaBody: string;
}

// Draft copy remains unlinked until every article and alternate route passes the route gate.
export const localizedHome: Record<Locale, HomeCopy> = {
  ja: {
    description:"Yollo AI のキャラクターチャット、画像・短編動画、料金、プライバシーを比較する独立ガイド。Character.AI、Janitor AI、SpicyChat AI、CrushOn AI、Candy AI との違いを具体的に確認できます。",
    tagline:"キャラクターとの会話を、画像と短い映像まで確かめる。",
    intro:"Yollo AI はロールプレイ用キャラクターの検索・作成に加え、画像や短い動画の生成を案内しています。大切なのは機能の数ではありません。同じ架空の成人キャラクターが、会話とビジュアルで一貫しているかを見極めましょう。",
    overviewTitle:"Yollo AI で何を試せる？",
    overviewLead:"公式サイトはペルソナ、複数の会話モデル、記憶、画像生成、動画生成を紹介しています。ここでは宣伝文句を実測結果と混同せず、選ぶ前の確認方法に絞ります。",
    overviewDetail:"『無料・登録不要』という宣伝がある一方、利用規約は有料購読や利用量に応じた料金を認めています。実際のアカウントで使える機能、再生成の扱い、公開範囲、解約方法を確認してから長い物語を始めてください。",
    workflowTitle:"キャラクターから一つの場面へ",
    workflowLead:"人物の見た目だけで選ぶと、会話の前提が弱くなります。目的、舞台、最初の行動を短く定めてから進めるほうが比較しやすくなります。",
    workflow:[
      ["探す","成人であることが明確な架空の人物を選び、紹介文と導入の一言が場面を作っているか確認します。"],
      ["会話する","無害な設定を一つ伝え、話題を変えた後に思い出せるかを試します。返答があなたの行動を勝手に決めないかも見ます。"],
      ["可視化する","同じ人物と舞台で静止画・短編動画を生成し、顔、服装、小道具、時間と費用の変化を記録します。"]
    ],
    featuresTitle:"チャットと映像を別々に採点",
    featuresLead:"一つのアプリに機能が集まっていても、それぞれの品質は別問題です。対話・人物設定・ビジュアルの三点を切り分けてください。",
    features:[
      ["キャラクターチャット","口調の安定、場面を進める力、記憶の正確さ、応答の反復を確認します。『長期記憶』の表記だけで判断しません。"],
      ["作成と公開範囲","架空の人物の動機や挨拶を設定し、作ったキャラクターや画像が公開される条件、削除できる範囲を確認します。"],
      ["画像・短編動画","静止画から映像に移った時の人物・舞台の連続性、失敗した生成の課金、利用できるモデルや出力形式を調べます。"]
    ],
    testTitle:"15分で行う同条件テスト",
    testLead:"Yollo AI と比較対象に同じ架空の成人キャラクターを設定し、印象ではなく記録に基づいて選びます。これは推奨する方法であり、当サイトが実測した結果ではありません。",
    test:[
      ["無害な事実を三つ置く","架空の展覧会名、場所、持ち物を会話に入れます。実在の住所や秘密は使いません。"],
      ["話題を変えて戻る","数ターン別の話をしてから、三つの事実を問い直します。正答、部分的な記憶、矛盾を区別します。"],
      ["同じ場面を出力する","画像と動画を一回ずつ試し、人物の連続性、待ち時間、再生成回数、必要な有料操作を控えます。"]
    ],
    compareTitle:"Yollo AI と五つの選択肢",
    compareLead:"『どれが最高か』より、どの作業を続けたいかを先に決めると比較が明確になります。各記事は異なる判断軸を扱います。",
    lenses:{
      "character-ai":"Character.AI は会話と創作世界の管理、年齢別の安全設計を比べる対象です。映像機能が同じとは決めつけません。",
      "janitor-ai":"Janitor AI は参加型ストーリーと脚本・ロアブックの管理が焦点。外部 API が全利用者に必要とは言いません。",
      "spicychat-ai":"SpicyChat AI はロアブックと任意の記憶機能が、長編の会話にどう役立つかを確認します。",
      "crushon-ai":"CrushOn AI はモデル選択、グループ場面、共有世界と会話の長さが比較軸です。",
      "candy-ai":"Candy AI は一人のコンパニオンを会話・音声・画像・動画へつなぐ体験が焦点です。単なる文字チャットではありません。"
    },
    fieldTitle:"使い続ける前の確認事項",
    fieldLead:"検索結果の機能一覧だけでは、継続利用時の費用やデータの扱いは見えません。",
    notes:[
      ["『無料』の範囲を分ける","通常の会話、上位モデル、画像、短編動画、再生成をそれぞれ数えます。Yollo AI の宣伝と利用規約には無料範囲に関する温度差があるため、現在の購入画面を優先してください。"],
      ["記憶と履歴を混同しない","画面に昔の会話が残っていても、モデルが次の返答で正確に使えるとは限りません。架空の小さな事実を途中で置き、後から聞き直す方法なら秘密を渡さずに検証できます。"],
      ["公開と削除を先に調べる","作成した人物や生成物の公開設定、会話とアカウントの削除経路、外部サービスへの移動を確認します。本人以外の写真・声は許可なく使わないでください。"]
    ],
    privacyTitle:"物語は親密でも、個人情報は入れない",
    privacyBody:"架空の成人設定を使い、住所、勤務先、認証情報、実在人物の顔や声を避けてください。Yollo AI の規約は中国本土と香港に所在または居住する人の利用を禁止しています。地域制限を回避せず、利用できる場合も公開範囲と削除方法を先に確認しましょう。",
    blogTitle:"判断に役立つ五つの比較記事",
    faqTitle:"Yollo AI についてよくある質問",
    faq:[
      ["Yollo AI は何ができる？","公式サイトはキャラクター会話、人物作成、画像、短い動画を案内しています。利用可能な機能や上限はアカウント・地域・プランで確認してください。"],
      ["本当に無料で登録不要？","宣伝にはそう書かれていますが、規約は登録が必要になる場合、有料購読、利用量に応じた料金を認めています。実際の開始画面と購入画面を確認してください。"],
      ["会話の記憶をどう確かめる？","架空の無害な事実を会話に入れ、話題を変えた後に質問します。履歴表示と返答で使われる記憶を分けて見てください。"],
      ["誰でも利用できる？","いいえ。公式規約は中国本土と香港に所在または居住する人の利用を禁止しています。対象地域以外でも現在の年齢・地域条件を確認してください。"]
    ],
    ctaTitle:"公式画面で条件を確認してから始める",
    ctaBody:"同じ架空の物語で会話・画像・短編動画を試し、公開設定、地域条件、料金、解約方法まで比べてください。"
  },
  ko: {
    description:"Yollo AI 캐릭터 채팅, 이미지·짧은 영상, 요금과 개인정보를 살펴보고 Character.AI, Janitor AI, SpicyChat AI, CrushOn AI, Candy AI와 비교하는 독립 안내.",
    tagline:"캐릭터와의 대화가 이미지와 짧은 영상까지 이어지는지 확인하세요.",
    intro:"Yollo AI는 역할극 캐릭터를 찾거나 만들고, AI 이미지와 짧은 영상으로 장면을 확장하는 서비스를 소개합니다. 기능 이름보다 중요한 것은 같은 가상의 성인 캐릭터가 대화와 시각 결과에서 일관되는지입니다.",
    overviewTitle:"Yollo AI에서 실제로 확인할 것",
    overviewLead:"공식 사이트에는 페르소나, 여러 대화 모델, 장기 기억, 이미지와 영상 생성이 소개됩니다. 여기서는 광고 문구를 직접 측정한 성능처럼 다루지 않고, 이용 전 확인할 기준을 제시합니다.",
    overviewDetail:"홍보 페이지는 무료·가입 불필요라고 하지만, 약관은 유료 구독과 사용량에 따른 요금을 허용합니다. 계정별 기능, 재생성 비용, 공개 범위와 취소 방법을 확인한 뒤 장기 채팅을 시작하는 편이 안전합니다.",
    workflowTitle:"캐릭터에서 하나의 장면까지",
    workflowLead:"썸네일만 보고 고르면 이야기의 출발점이 빈약해질 수 있습니다. 캐릭터의 목표와 장소, 첫 행동을 먼저 정하면 다른 서비스와 비교하기 쉽습니다.",
    workflow:[
      ["찾기","분명히 성인인 가상 캐릭터를 고르고 소개와 첫인사가 구체적인 상황을 만드는지 봅니다."],
      ["대화하기","무해한 설정을 한 가지 알려준 뒤 화제를 바꾸고 다시 물어봅니다. AI가 내 행동까지 임의로 결정하는지도 확인합니다."],
      ["시각화하기","같은 인물과 장소로 이미지와 짧은 영상을 만들어 얼굴, 옷, 소품, 대기 시간, 실제 지출을 기록합니다."]
    ],
    featuresTitle:"채팅과 영상은 따로 평가하기",
    featuresLead:"한 화면에 여러 기능이 있어도 품질은 각각 다릅니다. 대화, 캐릭터 설정, 생성 미디어를 분리해 점검하세요.",
    features:[
      ["캐릭터 대화","말투와 동기의 일관성, 이야기 전개, 반복 표현, 무해한 사실의 회상을 봅니다. ‘장기 기억’이라는 이름만 믿지 않습니다."],
      ["만들기와 공개 설정","가상 인물의 성격과 첫 장면을 만들고, 캐릭터와 생성 결과물이 공개되는 조건 및 삭제 방법을 확인합니다."],
      ["이미지와 짧은 영상","채팅에서 정한 인물이 시각 결과에서도 유지되는지, 실패한 생성에 비용이 드는지, 출력 제약이 있는지 살펴봅니다."]
    ],
    testTitle:"15분 동일 조건 테스트",
    testLead:"Yollo AI와 비교 대상에 같은 가상의 성인 설정을 넣고 결과를 기록하세요. 아래는 검사 방법이며 이 사이트가 직접 측정한 결과는 아닙니다.",
    test:[
      ["무해한 사실 세 가지 정하기","가상의 전시 이름, 장소와 소품을 대화에 넣습니다. 실제 주소나 비밀은 사용하지 않습니다."],
      ["화제 바꿨다가 돌아오기","몇 차례 다른 이야기를 한 뒤 그 사실을 다시 묻고 정확한 기억, 부분 회상, 모순을 구분합니다."],
      ["같은 장면 생성하기","가능한 플랜에서 이미지와 짧은 영상을 만들고 인물 연속성, 재시도 횟수, 기다린 시간과 결제를 기록합니다."]
    ],
    compareTitle:"Yollo AI와 다섯 가지 대안",
    compareLead:"막연한 순위보다 앞으로 반복할 작업이 무엇인지 정한 뒤 비교하세요. 다섯 글은 서로 다른 판단 기준을 다룹니다.",
    lenses:{
      "character-ai":"Character.AI는 대화 중심의 창작 세계, 연령별 안전 체계와 크리에이터 도구를 비교하기에 적합합니다.",
      "janitor-ai":"Janitor AI는 참여형 이야기와 앱의 스크립트·로어북을 어떻게 쓰는지가 핵심입니다.",
      "spicychat-ai":"SpicyChat AI는 로어북과 선택적 기억 기능이 긴 역할극에서 얼마나 쓸모 있는지 살펴봅니다.",
      "crushon-ai":"CrushOn AI는 모델 선택, 여러 캐릭터가 나오는 장면과 공유 세계 구성이 비교점입니다.",
      "candy-ai":"Candy AI는 한 명의 동반자를 채팅·음성·이미지·영상으로 이어가는 흐름을 봅니다. 텍스트 전용 서비스는 아닙니다."
    },
    fieldTitle:"계속 쓰기 전에 따져볼 세 가지",
    fieldLead:"검색 결과의 기능 목록만으로는 실제 지출이나 데이터 처리 방식을 알기 어렵습니다.",
    notes:[
      ["‘무료’의 대상을 구별하기","기본 메시지, 상위 모델, 이미지, 짧은 영상, 재시도가 각각 무엇을 소모하는지 적어 보세요. Yollo AI의 홍보와 약관은 요금 가능성을 다르게 표현하므로 현재 결제 화면이 중요합니다."],
      ["대화 기록과 기억을 나누기","예전 메시지가 화면에 남는 것과 모델이 그 사실을 새 답변에 정확히 쓰는 것은 다릅니다. 가상의 무해한 사실을 넣고 나중에 직접 질문해 보면 개인정보 없이 확인할 수 있습니다."],
      ["공개·삭제 경로부터 찾기","캐릭터와 생성 미디어의 공개 기본값, 채팅 및 계정 삭제 방법, 제3자 서비스 연결을 확인하세요. 다른 사람의 얼굴이나 음성은 허락 없이 업로드하지 마세요."]
    ],
    privacyTitle:"이야기는 가까워도 신상은 가상으로",
    privacyBody:"분명히 성인인 가상 인물로 설정하고 실제 주소, 직장, 인증 정보와 타인의 사진·음성은 피하세요. Yollo AI 약관은 중국 본토와 홍콩에 있거나 거주하는 사람의 이용을 금지합니다. 제한을 우회하지 말고, 허용 지역에서도 공개 범위와 삭제 절차를 먼저 확인하세요.",
    blogTitle:"결정에 도움이 되는 다섯 비교 글",
    faqTitle:"Yollo AI 자주 묻는 질문",
    faq:[
      ["Yollo AI는 무엇을 제공하나요?","공식 사이트는 캐릭터 대화와 제작, AI 이미지, 짧은 영상을 소개합니다. 실제 접근 권한과 한도는 현재 계정·지역·플랜에서 확인하세요."],
      ["무료이고 가입이 필요 없나요?","홍보는 그렇게 말하지만 약관은 등록 가능성, 유료 구독과 사용량에 따른 요금을 허용합니다. 시작 화면과 결제 조건을 직접 확인하세요."],
      ["기억을 어떻게 시험하나요?","가상의 무해한 사실을 알려주고 대화 주제를 바꾼 뒤 다시 질문하세요. 화면의 기록과 실제 답변에 반영되는 기억을 구분해야 합니다."],
      ["모든 지역에서 쓸 수 있나요?","아닙니다. 공식 약관은 중국 본토와 홍콩에 있거나 거주하는 사람의 이용을 금지합니다. 다른 지역에서도 현재 연령 및 지역 조건을 확인하세요."]
    ],
    ctaTitle:"시작 전 공식 조건 확인하기",
    ctaBody:"하나의 가상 이야기를 대화·이미지·짧은 영상으로 시험하고 공개 설정, 지역 조건, 결제 및 해지 방식까지 비교하세요."
  },
  "zh-hant": {
    description:"獨立整理 Yollo AI 的角色聊天、圖片與短影片、收費、隱私和地區限制，並比較 Character.AI、Janitor AI、SpicyChat AI、CrushOn AI、Candy AI。",
    tagline:"從角色對話到圖片和短影片，檢查故事是否連貫。",
    intro:"Yollo AI 主打尋找或建立虛構角色，再把對話延伸至圖片與短影片。功能多不等於成果穩定；真正值得比較的，是同一位明確成年的虛構角色，在聊天、靜態畫面與動態片段中能否保持一致。",
    overviewTitle:"Yollo AI 值得先查什麼？",
    overviewLead:"官方介紹涵蓋角色設定、多種對話模型、記憶、圖片和影片生成。本站區分產品宣稱與可自行驗證的結果，不把廣告文字當作實測心得。",
    overviewDetail:"宣傳頁稱免費、毋須註冊，但服務條款容許收費訂閱與按使用計費。開始長期創作前，請查看當前帳戶可用功能、重試是否扣額度、作品公開設定和取消訂閱的路徑。",
    workflowTitle:"從角色設定走到同一個場景",
    workflowLead:"漂亮的封面不能替代完整的故事開頭。先寫清楚人物想做什麼、身處哪裏、眼前發生了什麼，再與其他平台做同條件比較。",
    workflow:[
      ["挑選","選擇明確成年的虛構角色，檢查介紹和開場白是否提供具體情境，而非只堆砌外表標籤。"],
      ["對話","放入一項無關隱私的小設定，轉換話題後再追問；同時留意角色會否擅自替你決定行動。"],
      ["視覺化","以同一人物與場景生成圖片及短影片，記錄臉部、服飾、道具的一致性、等待時間與花費。"]
    ],
    featuresTitle:"聊天與影像分開評分",
    featuresLead:"同一服務能做多件事，不代表每件事都做得好。把對話品質、角色控制、視覺輸出拆開看。",
    features:[
      ["角色聊天","測試語氣與動機是否穩定、會不會重複答覆、能否準確記住無害的虛構細節。不要只看「長期記憶」標籤。"],
      ["建立角色與公開權限","設定虛構人物的目標和開場情節，確認角色、聊天和生成作品何時會對其他人公開，以及如何刪除。"],
      ["圖片與短影片","觀察角色從文字轉到影像時會否變臉，失敗的生成會否收費，下載格式和再次製作有何限制。"]
    ],
    testTitle:"15 分鐘同條件測試",
    testLead:"在 Yollo AI 與對照產品使用同一位虛構成年角色，記下結果。以下是供讀者操作的方法，並非本站聲稱已完成的實測。",
    test:[
      ["設定三項無害資訊","給出虛構展覽名稱、地點與一件道具，不使用真實住址、密碼或個人秘密。"],
      ["轉題後再追問","聊幾輪其他話題，再問原本設定；分辨完全記得、部分記得、編造或互相矛盾。"],
      ["輸出同一場景","各試一次圖片和短影片，記錄角色連續性、所需重試、等待時間與實際付費步驟。"]
    ],
    compareTitle:"Yollo AI 與五個替代選擇",
    compareLead:"先確定你要長篇對話、世界設定，還是連貫的影像，再讀相應比較；五篇文章各有不同判斷重點。",
    lenses:{
      "character-ai":"Character.AI 著重角色對話、創作世界與分齡安全設計；不能假設其影像功能與 Yollo 相同。",
      "janitor-ai":"Janitor AI 的重點是互動故事，以及目前應用程式提及的腳本與設定資料庫。",
      "spicychat-ai":"SpicyChat AI 可從角色設定、Lorebook 與選用的語意記憶，評估長篇劇情控制。",
      "crushon-ai":"CrushOn AI 適合比較模型切換、多人場景、共享世界及長對話的連續性。",
      "candy-ai":"Candy AI 提供陪伴角色的建立、聊天、語音、圖片與影片；不應被簡化成純文字聊天。"
    },
    fieldTitle:"長期使用前的三個檢查",
    fieldLead:"搜尋頁面的功能表難以說明真實費用和資料處理方式，下面三點更接近使用決策。",
    notes:[
      ["先釐清「免費」包含什麼","一般訊息、進階模型、圖片、短影片、重新生成可能分別計費。Yollo AI 宣傳與條款對免費使用的描述並不完全一致；應以目前結帳畫面為準。"],
      ["分清聊天紀錄與記憶","能在畫面捲回舊訊息，不代表模型在下一次回答能正確運用全部內容。用虛構而無害的細節測試，毋須交出真實私事。"],
      ["預先了解公開與刪除","檢查角色與生成作品的預設可見度、對話和帳戶的刪除方法，以及第三方服務的角色。未經同意，不要上傳他人的照片或聲音。"]
    ],
    privacyTitle:"劇情可以親近，個資保持虛構",
    privacyBody:"只使用明確成年的虛構情節，避免真實地址、工作資料、登入憑證及未經授權的人像與聲音。Yollo AI 官方條款禁止位於或居住於中國大陸及香港的人士使用。不要繞過地區限制；在可使用地區，也應先查明公開權限及刪除方式。",
    blogTitle:"五篇依不同需求編寫的比較",
    faqTitle:"關於 Yollo AI 的常見問題",
    faq:[
      ["Yollo AI 主要做什麼？","官方介紹包括角色聊天、建立人物、AI 圖片與短影片。實際可用項目和限制請在當前帳戶、地區及方案確認。"],
      ["真的免費又不用註冊？","宣傳如此表示，但條款保留要求註冊、提供付費訂閱及按使用收費的空間。請看實際登入及結帳流程。"],
      ["怎樣測試角色記憶？","放入無害的虛構事實，轉換話題後直接追問。分清畫面上保留的紀錄與模型答覆中真正用到的資訊。"],
      ["所有地區都能用嗎？","不能。官方條款禁止位於或居住於中國大陸及香港的人士使用；其他地區亦須核對最新年齡與地區規則。"]
    ],
    ctaTitle:"到官方頁面核對現行條件",
    ctaBody:"用同一個虛構故事試對話、圖片與短影片，同時比較公開設定、地區限制、費用與取消訂閱方式。"
  },
  es: {
    description:"Análisis de Yollo AI: chat con personajes, imágenes, vídeos breves, privacidad y costes. Cinco comparativas con Character.AI, Janitor AI, SpicyChat AI, CrushOn AI y Candy AI.",
    tagline:"Comprueba si el mismo personaje funciona en el chat, la imagen y el vídeo.",
    intro:"Yollo AI presenta un catálogo de personajes para roleplay, herramientas para crear uno propio y generación de imágenes y vídeos breves. La pregunta útil no es cuántas funciones anuncia, sino si una historia con personajes adultos ficticios mantiene su identidad al pasar del diálogo a lo visual.",
    overviewTitle:"Qué conviene comprobar en Yollo AI",
    overviewLead:"Su web destaca perfiles, distintos modelos de chat, memoria e instrumentos visuales. Aquí distinguimos esas afirmaciones de los resultados que cada persona puede comprobar con una prueba repetible.",
    overviewDetail:"La promoción promete uso gratis y sin registro; las condiciones, en cambio, contemplan registro, suscripciones y cargos según el uso. Antes de dedicar horas a un personaje, consulta qué permite tu cuenta, cómo se cobran los reintentos, quién ve lo que creas y cómo se cancela un plan.",
    workflowTitle:"Del personaje a una escena coherente",
    workflowLead:"Una portada atractiva no sustituye un buen punto de partida. Define quién quiere qué, dónde ocurre la acción y cuál será la primera decisión; después podrás comparar servicios con el mismo encargo.",
    workflow:[
      ["Explora","Elige un personaje ficticio claramente adulto y lee si su presentación y saludo proponen una situación concreta, no solo rasgos de aspecto."],
      ["Conversa","Introduce un dato inocuo de la historia, cambia de tema y vuelve a él. Observa también si el bot decide tus acciones sin permiso."],
      ["Visualiza","Pide una imagen y un vídeo corto de la misma escena; anota cambios de rostro, ropa o atrezzo, espera, intentos y coste."]
    ],
    featuresTitle:"No mezcles la nota del chat con la del vídeo",
    featuresLead:"Reunir varias herramientas en una app no garantiza que todas funcionen igual de bien. Evalúa por separado diálogo, creación y salida visual.",
    features:[
      ["Chat de personajes","Valora iniciativa, tono, coherencia del personaje, repeticiones y recuerdo de un dato ficticio. «Memoria a largo plazo» es una promesa que hay que probar."],
      ["Crear y publicar","Diseña un motivo, una escena inicial y límites para un personaje inventado. Revisa cuándo se publican personajes o resultados y cómo borrarlos."],
      ["Imágenes y vídeos breves","Comprueba si el personaje conserva identidad entre formatos, si un intento fallido consume saldo y qué opciones de descarga o edición existen."]
    ],
    testTitle:"Una prueba comparable en quince minutos",
    testLead:"Usa exactamente el mismo personaje adulto ficticio en Yollo AI y en la alternativa elegida. Es un protocolo recomendado, no un resultado experimental que este sitio afirme haber obtenido.",
    test:[
      ["Siembra tres datos sin riesgo","Menciona el nombre de una exposición inventada, su ubicación ficticia y un objeto; nunca una dirección real ni una contraseña."],
      ["Desvíate y pregunta","Habla de otra cosa unos turnos y vuelve a los tres datos. Distingue recuerdo exacto, parcial, inventado y contradictorio."],
      ["Repite la escena en medios","Genera una imagen y, si tu plan lo permite, un vídeo corto. Apunta consistencia, demoras, reintentos y acciones de pago."]
    ],
    compareTitle:"Yollo AI frente a cinco alternativas",
    compareLead:"La mejor opción depende de si quieres conversación larga, control de un mundo narrativo o un resultado visual. Cada comparativa responde a una decisión diferente.",
    lenses:{
      "character-ai":"Character.AI sirve para evaluar conversación, creación de mundos y controles de seguridad por edad; no presupongas que sus herramientas visuales son idénticas.",
      "janitor-ai":"Janitor AI destaca por la ficción interactiva y por los scripts y lorebooks mencionados en su app oficial.",
      "spicychat-ai":"SpicyChat AI documenta fichas, lorebooks y memoria opcional para dar continuidad a escenas extensas.",
      "crushon-ai":"CrushOn AI permite examinar modelos, escenas con varios personajes y mundos compartidos frente al camino visual de Yollo.",
      "candy-ai":"Candy AI integra un acompañante configurable con chat, voz, imagen y vídeo; no es una simple alternativa de texto."
    },
    fieldTitle:"Tres preguntas antes de quedarte",
    fieldLead:"Las listas de funciones de un buscador apenas dicen cuánto costará una rutina ni qué pasará con tus datos.",
    notes:[
      ["¿Qué es realmente gratis?","Separa mensajes normales, modelos avanzados, imágenes, vídeos y reintentos. Como la publicidad de Yollo y sus condiciones describen posibilidades distintas de pago, toma como referencia el proceso de compra vigente."],
      ["¿Recuerda o solo conserva el historial?","Que puedas desplazarte por mensajes antiguos no significa que el modelo los use bien en su siguiente respuesta. Planta un detalle ficticio, cambia de tema y pregunta más tarde sin exponer datos personales."],
      ["¿Quién puede ver y borrar lo creado?","Busca la visibilidad inicial del personaje, los ajustes de publicación y la ruta para eliminar chats, medios y cuenta. No subas la imagen o la voz de otra persona sin autorización."]
    ],
    privacyTitle:"Historias personales, datos inventados",
    privacyBody:"Trabaja con personajes ficticios adultos. No incluyas direcciones, empleo, claves ni material de terceros sin permiso. Las condiciones de Yollo AI prohíben el uso a quienes viven o se encuentran en China continental y Hong Kong; no eludas la restricción. En regiones autorizadas, comprueba igualmente privacidad y borrado.",
    blogTitle:"Cinco comparativas para decidir con criterio",
    faqTitle:"Preguntas frecuentes sobre Yollo AI",
    faq:[
      ["¿Para qué sirve Yollo AI?","La web oficial presenta chat y creación de personajes, imágenes de IA y vídeos cortos. Comprueba funciones y límites en tu cuenta, región y plan actuales."],
      ["¿Es gratis y no pide registro?","La publicidad lo afirma, pero las condiciones prevén registro, suscripciones y cargos por uso. La pantalla de acceso y la de pago mandan."],
      ["¿Cómo se prueba la memoria?","Introduce un dato ficticio inocuo, cambia de asunto y pregúntalo después. No confundas historial visible con información que el modelo recupere correctamente."],
      ["¿Está disponible en cualquier país?","No. Las condiciones oficiales excluyen a personas residentes o presentes en China continental y Hong Kong. Revisa también los requisitos de edad y región vigentes."]
    ],
    ctaTitle:"Confirma las condiciones en el sitio oficial",
    ctaBody:"Prueba una misma historia ficticia en conversación, imagen y vídeo breve, y revisa visibilidad, disponibilidad regional, precio y cancelación."
  },
  "pt-br": {
    description:"Análise independente do Yollo AI para chat com personagens, imagens, vídeos curtos, custos e privacidade, com cinco comparações específicas entre plataformas.",
    tagline:"Veja se o mesmo personagem se mantém no chat, na imagem e no vídeo.",
    intro:"O Yollo AI reúne descoberta e criação de personagens de roleplay com geração de imagens e vídeos curtos. O que importa não é a quantidade de botões, mas se uma história com personagens fictícios adultos continua reconhecível quando sai do texto e vira cena.",
    overviewTitle:"O que verificar no Yollo AI",
    overviewLead:"O site oficial fala em personas, diferentes modelos de conversa, memória e geração visual. Este guia separa essas alegações dos resultados que você pode conferir em um teste repetível.",
    overviewDetail:"A divulgação promete acesso grátis sem cadastro, mas os termos permitem exigência de conta, assinaturas e cobrança por uso. Antes de investir tempo em uma história, veja o que seu plano libera, se tentativas frustradas custam créditos e como controlar a visibilidade ou cancelar uma assinatura.",
    workflowTitle:"Do personagem a uma cena consistente",
    workflowLead:"Uma miniatura bonita não substitui uma boa premissa. Defina o objetivo do personagem, o lugar da ação e um conflito simples para comparar serviços com o mesmo ponto de partida.",
    workflow:[
      ["Escolha","Procure um personagem fictício claramente adulto; leia a descrição e a primeira mensagem para ver se há uma situação de verdade."],
      ["Converse","Mencione um fato inventado e inofensivo, mude de assunto e volte a ele. Observe se o bot toma decisões pelo seu personagem."],
      ["Visualize","Peça uma imagem e um vídeo curto do mesmo cenário e registre rosto, roupa, objetos, tempo, novas tentativas e gastos."]
    ],
    featuresTitle:"Conversa e mídia pedem notas separadas",
    featuresLead:"Várias funções na mesma tela não garantem a mesma qualidade. Avalie diálogo, montagem do personagem e resultado visual por critérios próprios.",
    features:[
      ["Chat com personagens","Teste iniciativa, consistência de voz, continuidade, repetição e lembrança de um detalhe fictício. O nome ‘memória de longo prazo’ não prova o desempenho."],
      ["Criação e visibilidade","Monte um personagem inventado com motivação e abertura utilizável; confira quando perfis e arquivos ficam públicos e como removê-los."],
      ["Imagem e vídeo curto","Compare a identidade entre texto, quadro e movimento; verifique cobrança por falha, formatos e limites de exportação."]
    ],
    testTitle:"Um teste justo em quinze minutos",
    testLead:"Use a mesma personagem fictícia adulta no Yollo AI e no concorrente. O roteiro abaixo é um método para o leitor, não um resultado de teste que este site diz ter realizado.",
    test:[
      ["Plante três fatos simples","Cite uma exposição inventada, um local fictício e um objeto. Não use endereço real, senha ou dados íntimos."],
      ["Troque de assunto e retorne","Depois de alguns turnos, peça que o personagem recupere os fatos. Marque acerto exato, parcial, invenção e contradição."],
      ["Gere a mesma cena","Faça uma imagem e, quando disponível, um vídeo curto. Conte tempo, consistência, novas tentativas e ações cobradas."]
    ],
    compareTitle:"Yollo AI versus cinco alternativas",
    compareLead:"A escolha muda conforme a prioridade: conversa longa, controle do universo da história ou uma cena visual coerente. Cada comparação parte de uma necessidade diferente.",
    lenses:{
      "character-ai":"Character.AI é referência para chat, construção de mundos e regras de segurança por idade; não presuma equivalência das ferramentas de vídeo.",
      "janitor-ai":"Janitor AI coloca a ficção interativa no centro e cita scripts e lorebooks na atualização oficial do aplicativo.",
      "spicychat-ai":"SpicyChat AI documenta lorebooks e memória opcional para organizar roleplays mais longos.",
      "crushon-ai":"CrushOn AI permite comparar escolha de modelos, grupos de personagens e mundos compartilhados.",
      "candy-ai":"Candy AI reúne criação de acompanhante, chat, voz, imagens e vídeos; não é uma opção apenas de texto."
    },
    fieldTitle:"Antes de adotar o serviço",
    fieldLead:"Uma lista de recursos não revela o custo de uso frequente nem o destino das informações da sua história.",
    notes:[
      ["Defina o que é grátis","Separe mensagens comuns, modelos avançados, imagens, vídeos e novas tentativas. A publicidade do Yollo e seus termos não descrevem os custos da mesma forma; confira a tela de pagamento atual."],
      ["Diferencie histórico de memória","Ver mensagens antigas não garante que o modelo as use corretamente. Conte um fato fictício inocente, converse sobre outro assunto e pergunte mais tarde sem expor um segredo real."],
      ["Encontre publicação e exclusão","Verifique a visibilidade padrão do personagem e do conteúdo gerado, a remoção de chats e conta e possíveis serviços externos. Não envie foto ou voz de terceiros sem permissão."]
    ],
    privacyTitle:"Deixe a intimidade na ficção",
    privacyBody:"Use personagens fictícios claramente adultos, sem endereço, emprego, credenciais ou imagem e voz de outra pessoa sem consentimento. Os termos oficiais do Yollo AI proíbem o uso por quem está ou mora na China continental e em Hong Kong. Não contorne a restrição; onde o serviço for permitido, confira controles de publicação e exclusão.",
    blogTitle:"Cinco comparações para uma escolha informada",
    faqTitle:"Perguntas frequentes sobre Yollo AI",
    faq:[
      ["O que o Yollo AI oferece?","O site oficial apresenta chat e criação de personagens, imagens de IA e vídeos curtos. Recursos e limites reais dependem da conta, região e plano atuais."],
      ["É grátis e sem cadastro?","A propaganda diz isso, mas os termos admitem conta, assinatura e cobrança por uso. Confira o acesso e o pagamento antes de decidir."],
      ["Como testar a memória do personagem?","Insira um fato fictício inofensivo, mude de assunto e pergunte depois. Histórico visível não é igual à lembrança efetiva do modelo."],
      ["Funciona em qualquer região?","Não. Os termos excluem quem mora ou está na China continental e em Hong Kong. Em outros locais, confira os requisitos atuais de idade e disponibilidade."]
    ],
    ctaTitle:"Confira as regras atuais no site oficial",
    ctaBody:"Repita uma história fictícia no chat, na imagem e no vídeo curto e avalie privacidade, região, cobrança e cancelamento."
  },
  ru: {
    description:"Независимый разбор Yollo AI: ролевой чат, персонажи, изображения, короткие видео, стоимость и приватность. Пять сравнений с альтернативными сервисами.",
    tagline:"Проверьте, остаётся ли персонаж одним и тем же в диалоге, на кадре и в видео.",
    intro:"Yollo AI предлагает находить и создавать персонажей для ролевых историй, а затем генерировать изображения и короткие ролики. Число функций само по себе не важно: важнее, сохраняется ли образ вымышленного совершеннолетнего героя при переходе от текста к визуальной сцене.",
    overviewTitle:"Что стоит проверить в Yollo AI",
    overviewLead:"На официальном сайте описаны персоны, выбор моделей, память, генерация изображений и видео. Мы отделяем заявления сервиса от результатов, которые читатель может получить в собственном воспроизводимом тесте.",
    overviewDetail:"Реклама обещает бесплатный доступ без регистрации, однако условия допускают создание учётной записи, подписки и плату за использование. До долгой истории уточните доступность функций, стоимость повторных попыток, публичность материалов и отмену подписки.",
    workflowTitle:"От выбора героя к одной сцене",
    workflowLead:"Красивой обложки мало. Задайте персонажу цель, место действия и первое событие: одинаковый исходный сюжет позволит честно сравнить продукты.",
    workflow:[
      ["Найдите героя","Выбирайте явно совершеннолетнего вымышленного персонажа; описание и первое сообщение должны задавать ситуацию, а не только внешность."],
      ["Начните диалог","Внесите безопасный вымышленный факт, смените тему и вернитесь к нему. Следите, не решает ли бот за вашего героя."],
      ["Создайте сцену","Запросите изображение и короткое видео в том же мире; запишите изменения лица, костюма, предметов, ожидание и расходы."]
    ],
    featuresTitle:"Оценивайте беседу и медиа отдельно",
    featuresLead:"Общая оболочка не гарантирует одинакового качества всех инструментов. Разделите проверку диалога, настроек героя и визуального результата.",
    features:[
      ["Ролевой чат","Проверьте устойчивость голоса персонажа, инициативу, повторения и точность воспоминания о безобидном факте. Надпись «долговременная память» ничего не доказывает."],
      ["Создание и видимость","Задайте вымышленную мотивацию и начало сцены; узнайте, когда профиль или результат становится публичным и как его удалить."],
      ["Картинки и короткие ролики","Сравните героя в сообщениях и кадрах, стоимость неудачных генераций, возможности сохранения и повторной обработки."]
    ],
    testTitle:"Честная проверка за пятнадцать минут",
    testLead:"Используйте один сценарий с вымышленным совершеннолетним героем в Yollo AI и другом сервисе. Это методика для читателя, а не якобы проведённый нами эксперимент.",
    test:[
      ["Задайте три безопасных факта","Придумайте название выставки, место и предмет. Не используйте настоящий адрес, пароль или личную тайну."],
      ["Отвлекитесь и вернитесь","Поговорите о другом несколько реплик, затем спросите о фактах. Различайте точное, частичное, выдуманное и противоречивое воспоминание."],
      ["Повторите сюжет визуально","Сделайте изображение и, если доступно, короткий ролик. Считайте время, расхождения, повторы и платные действия."]
    ],
    compareTitle:"Yollo AI и пять альтернатив",
    compareLead:"Сначала решите, что важнее: длинный диалог, управление миром или согласованная визуальная сцена. У каждого материала свой критерий выбора.",
    lenses:{
      "character-ai":"Character.AI полезен для сравнения диалогов, построения мира и возрастных мер безопасности, но не следует предполагать идентичное видео.",
      "janitor-ai":"Janitor AI делает упор на интерактивные истории; официальный выпуск приложения упоминает скрипты и лорбуки.",
      "spicychat-ai":"SpicyChat AI документирует лорбуки и дополнительные механизмы памяти для длинных ролевых сюжетов.",
      "crushon-ai":"CrushOn AI позволяет сравнить выбор моделей, групповые сцены и общие миры персонажей.",
      "candy-ai":"Candy AI соединяет создание компаньона с чатом, голосом, изображениями и видео; это не только текст."
    },
    fieldTitle:"Три проверки перед регулярным использованием",
    fieldLead:"По перечню функций в поиске трудно понять реальные расходы и порядок обработки данных.",
    notes:[
      ["Уточните смысл слова «бесплатно»","Отдельно посчитайте обычные сообщения, премиальные модели, изображения, видео и переделки. Реклама и условия Yollo AI описывают оплату по-разному; проверяйте действующий экран покупки."],
      ["Не путайте историю с памятью","Видимость старых сообщений не означает, что модель верно использует их в новом ответе. Введите вымышленный факт, смените тему и спросите снова, не раскрывая настоящие секреты."],
      ["Найдите управление публикацией и удалением","Проверьте, кто видит героя и готовые медиа по умолчанию, как удалить беседу и аккаунт, какие внешние службы участвуют. Не загружайте чужие фото и голоса без разрешения."]
    ],
    privacyTitle:"Пусть личной будет история, а не ваши данные",
    privacyBody:"Используйте вымышленных совершеннолетних персонажей и не вводите реальные адреса, место работы, пароли, чужие изображения или голоса без согласия. Условия Yollo AI запрещают сервис людям, находящимся или проживающим в материковом Китае и Гонконге. Не обходите запрет; там, где доступ разрешён, изучите публикацию и удаление.",
    blogTitle:"Пять сравнений для осознанного выбора",
    faqTitle:"Частые вопросы о Yollo AI",
    faq:[
      ["Что умеет Yollo AI?","Официальный сайт описывает чат и создание персонажей, ИИ-изображения и короткие видео. Реальные функции и лимиты проверяйте для вашей учётной записи, региона и плана."],
      ["Доступ действительно бесплатный и без регистрации?","Так сказано в рекламе, но условия допускают регистрацию, подписки и плату за использование. Сверьтесь с действующими экранами входа и оплаты."],
      ["Как проверить память персонажа?","Сообщите безобидный вымышленный факт, смените тему и спросите позже. Доступный для просмотра журнал — не то же самое, что точный ответ модели."],
      ["Сервис доступен во всех регионах?","Нет. Условия запрещают использование людям, проживающим или находящимся в материковом Китае и Гонконге. Уточняйте и другие действующие ограничения."]
    ],
    ctaTitle:"Сначала проверьте действующие условия",
    ctaBody:"Сопоставьте один вымышленный сюжет в диалоге, на изображении и в коротком видео; затем изучите видимость, регион, расходы и отмену подписки."
  },
  de: {
    description:"Yollo AI im Überblick: Figuren-Chat, Bilder, Kurzvideos, Kosten und Datenschutz. Fünf Vergleiche mit Character.AI, Janitor AI, SpicyChat AI, CrushOn AI und Candy AI.",
    tagline:"Prüfen, ob eine Figur im Chat, auf Bildern und im Video dieselbe bleibt.",
    intro:"Yollo AI stellt Rollenspielfiguren, deren Erstellung sowie Bild- und Kurzvideogenerierung nebeneinander. Viele Funktionen allein machen noch keine gute Geschichte. Entscheidend ist, ob eine klar erwachsene, fiktive Figur zwischen Dialog und visueller Szene wiedererkennbar bleibt.",
    overviewTitle:"Worauf es bei Yollo AI ankommt",
    overviewLead:"Die offizielle Website wirbt mit Personas, mehreren Chatmodellen, Gedächtnis und Medienwerkzeugen. Wir trennen solche Anbieterangaben von Ergebnissen, die sich erst mit einem nachvollziehbaren Test beurteilen lassen.",
    overviewDetail:"Auf der Werbeseite stehen „kostenlos“ und „ohne Anmeldung“; die AGB lassen dagegen Registrierung, Abonnements und nutzungsabhängige Gebühren zu. Prüfen Sie vor einer längeren Geschichte den tatsächlichen Funktionsumfang, Kosten für Wiederholungen, Sichtbarkeit und Kündigungsweg.",
    workflowTitle:"Von der Figur zur stimmigen Szene",
    workflowLead:"Ein schönes Porträt ersetzt keine brauchbare Ausgangslage. Legen Sie Ziel, Schauplatz und erste Entscheidung fest; dann können Sie Dienste unter gleichen Bedingungen vergleichen.",
    workflow:[
      ["Entdecken","Wählen Sie eine eindeutig erwachsene, erfundene Figur und lesen Sie, ob Profil und Begrüßung mehr als äußerliche Merkmale liefern."],
      ["Sprechen","Nennen Sie eine harmlose erfundene Tatsache, wechseln Sie das Thema und fragen Sie später danach. Achten Sie auch darauf, ob der Bot Ihre Handlungen vorgibt."],
      ["Darstellen","Fordern Sie Bild und kurzes Video derselben Szene an. Notieren Sie Gesicht, Kleidung, Requisiten, Wartezeit, Fehlversuche und Kosten."]
    ],
    featuresTitle:"Gespräch und Medien getrennt bewerten",
    featuresLead:"Dass alles in einer Oberfläche steckt, sagt wenig über die Qualität der einzelnen Schritte aus. Dialog, Figurenbau und visuelle Ausgabe brauchen eigene Maßstäbe.",
    features:[
      ["Figuren-Chat","Bewerten Sie Eigeninitiative, Tonfall, Wiederholungen und die Erinnerung an eine harmlose fiktive Angabe. „Langzeitgedächtnis“ ist zunächst eine Anbieterbehauptung."],
      ["Erstellen und veröffentlichen","Geben Sie einer erfundenen Figur Motivation und Einstiegsszene. Prüfen Sie, wann Profile oder Ergebnisse öffentlich werden und wie sie zu löschen sind."],
      ["Bilder und Kurzvideos","Prüfen Sie die Identität über die Medien hinweg sowie Gebühren für fehlgeschlagene Versuche, Ausgabeformate und Exportgrenzen."]
    ],
    testTitle:"Ein fairer Test in fünfzehn Minuten",
    testLead:"Nutzen Sie dieselbe erfundene erwachsene Figur bei Yollo AI und einem Vergleichsdienst. Das Folgende ist eine Testanleitung, kein von uns behauptetes Messergebnis.",
    test:[
      ["Drei harmlose Fakten setzen","Erfinden Sie Ausstellungsname, Ort und Gegenstand. Verwenden Sie weder eine echte Anschrift noch ein Passwort."],
      ["Abschweifen und nachfragen","Wechseln Sie einige Gesprächsrunden das Thema, dann fragen Sie nach den Fakten. Unterscheiden Sie genaue, teilweise und erfundene Erinnerung."],
      ["Eine Szene in Medien übertragen","Erzeugen Sie ein Bild und, sofern verfügbar, ein Kurzvideo. Zählen Sie Abweichungen, Wartezeit, Wiederholungen und kostenpflichtige Schritte."]
    ],
    compareTitle:"Yollo AI im Vergleich zu fünf Alternativen",
    compareLead:"Ob lange Gespräche, steuerbare Welten oder visuelle Kontinuität wichtiger sind, entscheidet über die Auswahl. Jeder Vergleich betrachtet einen anderen Anwendungsfall.",
    lenses:{
      "character-ai":"Character.AI eignet sich zum Vergleich von Dialog, Weltbau und altersabhängigen Sicherheitsmaßnahmen; identische Videofunktionen sind nicht vorauszusetzen.",
      "janitor-ai":"Janitor AI konzentriert sich auf interaktive Geschichten; das offizielle App-Update nennt Skripte und Lorebooks.",
      "spicychat-ai":"SpicyChat AI dokumentiert Lorebooks und optionale Gedächtnisfunktionen für längere Rollenspielszenen.",
      "crushon-ai":"CrushOn AI setzt Modellwahl, Gruppenszenen und gemeinsame Welten gegen Yollos Weg zum visuellen Ergebnis.",
      "candy-ai":"Candy AI verbindet eine gestaltete Begleitfigur mit Chat, Stimme, Bild und Video und ist keineswegs nur Textchat."
    },
    fieldTitle:"Drei Prüfungen vor der regelmäßigen Nutzung",
    fieldLead:"Eine Suchergebnis-Liste zeigt weder die laufenden Kosten noch den Umgang mit Ihren Inhalten.",
    notes:[
      ["Was heißt hier kostenlos?","Zählen Sie normale Nachrichten, bessere Modelle, Bilder, Kurzvideos und Neugenerierungen getrennt. Da Yollos Werbung und AGB Kosten unterschiedlich darstellen, zählt der aktuelle Bezahlvorgang."],
      ["Verlauf ist nicht Gedächtnis","Alte Nachrichten im Fenster bedeuten nicht, dass das Modell sie in der nächsten Antwort richtig nutzt. Ein erfundenes Detail nach einem Themenwechsel abzufragen, schützt echte Geheimnisse."],
      ["Sichtbarkeit und Löschung klären","Prüfen Sie Standard-Einstellungen für Figuren und Medien, Wege zum Löschen von Chats und Konto sowie die Rolle externer Dienste. Fremde Bilder oder Stimmen gehören ohne Einwilligung nicht in den Upload."]
    ],
    privacyTitle:"Die Geschichte darf persönlich sein, Ihre Daten nicht",
    privacyBody:"Arbeiten Sie mit eindeutig erwachsenen erfundenen Figuren statt echten Adressen, Arbeitgebern oder Zugangsdaten. Laden Sie fremde Fotos und Stimmen nicht ohne Zustimmung hoch. Yollos AGB verbieten die Nutzung bei Aufenthalt oder Wohnsitz in Festlandchina oder Hongkong. Umgehen Sie die Sperre nicht; andernorts prüfen Sie Veröffentlichung und Löschung.",
    blogTitle:"Fünf Vergleiche für eine fundierte Wahl",
    faqTitle:"Häufige Fragen zu Yollo AI",
    faq:[
      ["Was bietet Yollo AI?","Die offizielle Website nennt Figuren-Chat und -Erstellung, KI-Bilder und Kurzvideos. Was tatsächlich zugänglich ist, hängt von Konto, Region und Tarif ab."],
      ["Ist es kostenlos und ohne Anmeldung?","So lautet die Werbung. Die AGB sehen aber Registrierung, Abos und nutzungsabhängige Gebühren vor. Prüfen Sie die aktuellen Zugangs- und Bezahlseiten."],
      ["Wie teste ich das Gedächtnis?","Fügen Sie eine harmlose erfundene Tatsache ein, wechseln Sie das Thema und fragen Sie später direkt danach. Sichtbarer Chatverlauf ist nicht gleich verlässliche Erinnerung."],
      ["Kann ich den Dienst überall nutzen?","Nein. Die AGB schließen Menschen mit Wohnsitz oder Aufenthalt in Festlandchina und Hongkong aus. Weitere aktuelle Alters- und Regionalregeln sind ebenfalls zu prüfen."]
    ],
    ctaTitle:"Aktuelle Bedingungen beim Anbieter nachlesen",
    ctaBody:"Testen Sie dieselbe erfundene Geschichte als Gespräch, Bild und Kurzvideo und vergleichen Sie Sichtbarkeit, Region, Kosten und Kündigung."
  },
  fr: {
    description:"Analyse indépendante de Yollo AI : personnages, jeu de rôle, images, courtes vidéos, tarifs et vie privée, avec cinq comparatifs fondés sur des besoins précis.",
    tagline:"Vérifiez qu'un personnage reste cohérent du dialogue à l'image puis à la vidéo.",
    intro:"Yollo AI réunit la découverte et la création de personnages de jeu de rôle avec des outils d'image et de vidéo courte. Une longue liste de fonctions ne suffit pas : le vrai test consiste à voir si un personnage fictif clairement adulte garde son identité d'un support à l'autre.",
    overviewTitle:"Ce qu'il faut vérifier sur Yollo AI",
    overviewLead:"Le site officiel parle de personas, de plusieurs modèles de conversation, de mémoire et de génération visuelle. Ce guide distingue les promesses du fournisseur des résultats que chacun peut vérifier avec un protocole identique.",
    overviewDetail:"La publicité annonce un usage gratuit sans inscription, tandis que les conditions permettent compte, abonnement et frais selon l'utilisation. Avant d'investir dans un long récit, regardez les droits du compte, le coût des relances, la visibilité des créations et la procédure de résiliation.",
    workflowTitle:"Du personnage à une scène suivie",
    workflowLead:"Un portrait séduisant ne remplace pas un véritable départ de récit. Définissez l'objectif, le lieu et un premier choix, puis comparez les services avec exactement la même situation.",
    workflow:[
      ["Découvrir","Choisissez un personnage fictif manifestement adulte et lisez sa présentation et son premier message : proposent-ils une vraie scène ?"],
      ["Dialoguer","Introduisez un détail inventé sans risque, changez de sujet puis revenez-y. Vérifiez aussi que le bot ne décide pas de vos actes à votre place."],
      ["Visualiser","Demandez une image et une courte vidéo de la scène. Notez visage, tenue, accessoires, attente, échecs et dépenses."]
    ],
    featuresTitle:"Évaluer séparément le texte et les médias",
    featuresLead:"Une interface unique peut cacher des niveaux de qualité très différents. Séparez le dialogue, la conception du personnage et le rendu visuel.",
    features:[
      ["Conversation avec un personnage","Mesurez initiative, ton, répétitions et rappel d'un détail fictif anodin. L'intitulé « mémoire à long terme » ne suffit pas."],
      ["Création et visibilité","Donnez un objectif et une entrée en scène à un personnage inventé. Cherchez quand profils et créations deviennent publics, et comment les supprimer."],
      ["Images et vidéos courtes","Comparez l'identité de la personne entre texte, image et mouvement ; vérifiez les frais d'échec, les formats et l'export."]
    ],
    testTitle:"Quinze minutes, mêmes consignes",
    testLead:"Donnez le même personnage fictif adulte à Yollo AI et au service concurrent. Ce protocole est une méthode proposée au lecteur, pas un résultat d'essai que nous prétendons avoir obtenu.",
    test:[
      ["Poser trois faits inoffensifs","Inventez le nom d'une exposition, un lieu et un objet. Ne communiquez ni vraie adresse ni secret."],
      ["Changer de sujet puis revenir","Après quelques échanges, demandez de rappeler les faits. Distinguez rappel exact, partiel, inventé ou contradictoire."],
      ["Recréer la scène en images","Générez une image puis une courte vidéo si votre formule le permet. Comptez les écarts, l'attente, les relances et les actions payantes."]
    ],
    compareTitle:"Yollo AI face à cinq autres services",
    compareLead:"La bonne réponse dépend de votre priorité : longues discussions, maîtrise d'un univers ou scène visuelle cohérente. Chaque comparatif adopte son propre angle.",
    lenses:{
      "character-ai":"Character.AI permet d'examiner dialogue, construction d'univers et protections selon l'âge ; ses outils vidéo ne doivent pas être supposés identiques.",
      "janitor-ai":"Janitor AI met en avant les récits interactifs ; son application officielle mentionne scripts et lorebooks.",
      "spicychat-ai":"SpicyChat AI documente lorebooks et mémoire facultative pour maintenir des scènes de jeu de rôle plus longues.",
      "crushon-ai":"CrushOn AI sert à comparer le choix des modèles, les groupes de personnages et les univers partagés.",
      "candy-ai":"Candy AI relie la création d'un compagnon au chat, à la voix, aux images et à la vidéo : ce n'est pas que du texte."
    },
    fieldTitle:"Trois vérifications avant de s'engager",
    fieldLead:"Une fiche de résultats de recherche ne révèle ni le budget réel ni ce qu'il advient de votre histoire.",
    notes:[
      ["Définir la gratuité","Distinguez messages ordinaires, modèles avancés, images, vidéos et nouvelles tentatives. La publicité et les conditions de Yollo divergent sur la possibilité de frais : vérifiez le paiement actuel."],
      ["Ne pas confondre historique et mémoire","Voir d'anciens messages ne garantit pas que le modèle les exploite correctement. Un petit fait fictif rappelé après une digression permet de tester sans dévoiler d'information sensible."],
      ["Trouver les réglages de publication et d'effacement","Vérifiez qui voit un personnage ou un média par défaut, comment supprimer chats et compte, et quels services tiers interviennent. N'envoyez pas l'image ou la voix d'autrui sans accord."]
    ],
    privacyTitle:"Une intrigue intime, des données fictives",
    privacyBody:"Utilisez des personnages fictifs clairement adultes ; évitez adresses réelles, employeur, identifiants et fichiers de tiers sans consentement. Les conditions de Yollo AI interdisent l'usage aux personnes qui résident ou se trouvent en Chine continentale ou à Hong Kong. Ne contournez pas l'interdiction ; ailleurs, vérifiez publication et suppression.",
    blogTitle:"Cinq comparatifs utiles pour choisir",
    faqTitle:"Questions fréquentes sur Yollo AI",
    faq:[
      ["Que permet Yollo AI ?","Le fournisseur présente conversation et création de personnages, images générées et courtes vidéos. L'accès et les limites dépendent du compte, du pays et de la formule actuelle."],
      ["Est-ce vraiment gratuit et sans inscription ?","La publicité l'affirme, mais les conditions prévoient compte, abonnements et frais d'utilisation. Contrôlez les écrans d'accès et de paiement en vigueur."],
      ["Comment vérifier la mémoire ?","Glissez un détail fictif inoffensif dans la conversation, changez de sujet puis posez une question directe. Historique visible et souvenir exact ne sont pas synonymes."],
      ["Le service fonctionne-t-il partout ?","Non. Les conditions excluent les personnes qui résident ou se trouvent en Chine continentale ou à Hong Kong. Vérifiez aussi les autres règles d'âge et de région."]
    ],
    ctaTitle:"Lire les conditions actuelles sur le site officiel",
    ctaBody:"Comparez un même récit fictif en conversation, image et courte vidéo, ainsi que visibilité, régions, coûts et résiliation."
  },
  ar: {
    description:"دليل مستقل لتقييم Yollo AI: محادثة الشخصيات والصور والفيديوهات القصيرة والتكلفة والخصوصية، مع خمس مقارنات تركّز كل واحدة على قرار مختلف.",
    tagline:"اختبر بقاء الشخصية متسقة من المحادثة إلى الصورة ثم الفيديو.",
    intro:"يعرض Yollo AI اكتشاف شخصيات لعب الأدوار أو إنشاؤها، إلى جانب توليد الصور والمقاطع القصيرة. كثرة الأدوات لا تضمن جودة القصة؛ السؤال الأهم هو ما إذا كانت شخصية خيالية بالغة بوضوح تحتفظ بهويتها عندما تنتقل من النص إلى المشهد المرئي.",
    overviewTitle:"ما الذي ينبغي التحقق منه في Yollo AI؟",
    overviewLead:"يذكر الموقع الرسمي ملفات الشخصيات ونماذج محادثة متعددة وميزة الذاكرة وتوليد الوسائط. نفصل هنا بين ادعاءات المزود والنتائج التي لا تثبت إلا باختبار قابل للتكرار.",
    overviewDetail:"تعد الصفحة التسويقية باستخدام مجاني بلا تسجيل، بينما تسمح الشروط بطلب حساب واشتراكات ورسوم بحسب الاستخدام. قبل بناء قصة طويلة، افحص ما يتاح لحسابك وتكلفة المحاولات الإضافية وظهور أعمالك للآخرين وطريقة إلغاء الاشتراك.",
    workflowTitle:"من اختيار الشخصية إلى مشهد متماسك",
    workflowLead:"الصورة الجذابة ليست بديلاً عن بداية قصصية واضحة. حدّد رغبة الشخصية ومكان الحدث وخياراً أولياً، ثم استخدم الفكرة نفسها عند مقارنة الخدمات.",
    workflow:[
      ["اختر","ابحث عن شخصية خيالية بالغة بوضوح، وتحقق من أن وصفها ورسالتها الأولى يصنعان موقفاً حقيقياً لا مجرد قائمة بالمظهر."],
      ["حاور","اذكر تفصيلاً خيالياً غير حساس، غيّر الموضوع ثم اسأل عنه مجدداً. راقب أيضاً ما إذا كان المساعد يقرر أفعال شخصيتك نيابة عنك."],
      ["حوّل المشهد إلى صورة","اطلب صورة ومقطعاً قصيراً للمكان والشخصية نفسيهما، وسجّل تغيّر الوجه والملابس والأشياء والانتظار والكلفة."]
    ],
    featuresTitle:"قيّم الحوار والوسائط كلّاً على حدة",
    featuresLead:"اجتماع الأدوات في واجهة واحدة لا يعني تساويها في الجودة. افصل بين المحادثة وبناء الشخصية والمخرجات البصرية.",
    features:[
      ["محادثة الشخصيات","اختبر ثبات الأسلوب والمبادرة والتكرار واسترجاع معلومة خيالية بسيطة. وصف «ذاكرة طويلة المدى» يحتاج إلى تحقق عملي."],
      ["الإنشاء ودرجة الظهور","ضع دافعاً ومشهداً افتتاحياً لشخصية متخيّلة، ثم تأكد من متى تصبح الشخصية أو النتيجة علنية وكيفية حذفها."],
      ["الصور والفيديو القصير","تحقق من بقاء الهوية بين النص والصورة والحركة، ومن احتساب المحاولات الفاشلة وحدود التنزيل وإعادة التوليد."]
    ],
    testTitle:"اختبار عادل في خمس عشرة دقيقة",
    testLead:"استخدم الشخصية الخيالية البالغة نفسها في Yollo AI وخدمة أخرى. هذه طريقة مقترحة للقارئ، وليست نتائج تجربة نزعم أننا أجريناها.",
    test:[
      ["ضع ثلاث حقائق آمنة","اختر اسماً لمعرض متخيّل ومكاناً خيالياً وغرضاً صغيراً. لا تستعمل عنواناً حقيقياً أو كلمة مرور."],
      ["انتقل إلى موضوع آخر ثم عُد","بعد عدة رسائل اسأل عن الحقائق من دون تكرارها. ميّز التذكر الدقيق والجزئي والمختلق والمتناقض."],
      ["أنشئ المشهد نفسه بصرياً","اطلب صورة ومقطعاً قصيراً إن أتاحتهما خطتك. احسب الاتساق ووقت الانتظار وإعادة المحاولة والخطوات المدفوعة."]
    ],
    compareTitle:"Yollo AI أمام خمسة بدائل",
    compareLead:"ابدأ بما تحتاجه: حوار طويل، ضبط عالم القصة، أم مشهد بصري متسق. لكل مقالة زاوية قرار مستقلة.",
    lenses:{
      "character-ai":"تساعد Character.AI في مقارنة الحوار وبناء العالم وضوابط السلامة بحسب العمر؛ لا نفترض تماثل أدوات الفيديو.",
      "janitor-ai":"تركز Janitor AI على القصص التفاعلية، ويذكر تحديث تطبيقها الرسمي النصوص البرمجية ودفاتر تفاصيل العالم.",
      "spicychat-ai":"توثق SpicyChat AI دفاتر العالم وميزات ذاكرة اختيارية لدعم لعب الأدوار طويل المدى.",
      "crushon-ai":"تصلح CrushOn AI لمقارنة اختيار النماذج والمشاهد الجماعية والعوالم المشتركة.",
      "candy-ai":"تربط Candy AI إنشاء الرفيق بالمحادثة والصوت والصور والفيديو، وليست خدمة نصية فقط."
    },
    fieldTitle:"ثلاثة أسئلة قبل الاستخدام المنتظم",
    fieldLead:"قائمة الميزات في نتائج البحث لا تكشف المصروف الحقيقي ولا مصير بيانات القصة.",
    notes:[
      ["ما المقصود بالمجاني؟","افصل بين الرسائل العادية والنماذج المتقدمة والصور والفيديو وإعادة المحاولة. يختلف خطاب Yollo التسويقي عن شروطه بشأن الرسوم الممكنة؛ اعتمد شاشة الدفع الحالية."],
      ["سجل المحادثة ليس الذاكرة","بقاء الرسائل القديمة ظاهرة لا يعني أن النموذج سيستخدمها بدقة. اختبر حقيقة خيالية بسيطة بعد تغيير الموضوع من دون إفشاء أسرارك الواقعية."],
      ["ابحث عن النشر والحذف","تأكد ممن يرى الشخصيات والوسائط افتراضياً، وكيف تحذف المحادثة والحساب، وما دور الخدمات الخارجية. لا ترفع صورة شخص آخر أو صوته بلا موافقة."]
    ],
    privacyTitle:"اجعل القصة شخصية والبيانات خيالية",
    privacyBody:"استعمل شخصيات خيالية بالغة بوضوح، وتجنب العنوان الحقيقي والعمل وكلمات المرور ووسائط الآخرين دون إذن. تمنع شروط Yollo AI الاستخدام لمن يوجد أو يقيم في البرّ الصيني أو هونغ كونغ. لا تلتف على الحظر؛ وفي المناطق المسموح بها افحص إعدادات الظهور والحذف.",
    blogTitle:"خمس مقارنات تساعدك في القرار",
    faqTitle:"أسئلة شائعة عن Yollo AI",
    faq:[
      ["ماذا يقدم Yollo AI؟","يعرض الموقع الرسمي محادثة الشخصيات وإنشاءها وتوليد الصور والمقاطع القصيرة. افحص ما يتاح فعلاً لحسابك ومنطقتك وخطتك."],
      ["هل هو مجاني ولا يحتاج إلى تسجيل؟","هذا ما تذكره الإعلانات، لكن الشروط تسمح بالحساب والاشتراكات والرسوم بحسب الاستخدام. تحقق من واجهتي الدخول والدفع الحاليتين."],
      ["كيف أختبر ذاكرة الشخصية؟","أدخل تفصيلاً خيالياً غير حساس، غيّر الموضوع ثم اسأل عنه. ظهور السجل لا يساوي استخدام النموذج للمعلومة بدقة."],
      ["هل يتاح في كل منطقة؟","لا. تمنع الشروط استعماله لمن يوجد أو يقيم في البرّ الصيني أو هونغ كونغ. راجع أيضاً شروط السن والمنطقة الحالية."]
    ],
    ctaTitle:"راجع الشروط الحالية لدى المزود",
    ctaBody:"اختبر القصة الخيالية نفسها في الحوار والصورة والفيديو القصير، وقارن الظهور للآخرين وتوفر الخدمة والكلفة والإلغاء."
  }
};
