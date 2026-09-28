import type { InfoPageKey, Locale } from "./locales";

export interface InfoCopy {
  title: string;
  description: string;
  lead: string;
  blocks: [string, string][];
}

// These policies describe yolloai.fun, not the separate product at yollo.ai.
// Keep this unpublished until all locale articles and disclosures are complete.
export const information: Record<Locale, Record<InfoPageKey, InfoCopy>> = {
  ja: {
    about: {
      title:"このサイトについて", description:"Yollo AI を検討するための独立した出版物の目的、公式サービスとの違い、五つの比較方法。",
      lead:"会話・画像・短編動画を一緒に評価するとき、機能表よりも同条件のテストを重視します。",
      blocks:[
        ["当サイトの立場","当サイトは Yollo AI の運営元ではなく、チャット、人物作成、画像や動画の生成、会員登録、決済を提供しません。公式リンクから移動した先には別の規約が適用されます。"],
        ["五つの比較の違い","Character.AI は会話と創作世界、Janitor AI は参加型ストーリー、SpicyChat AI はロアブックと記憶、CrushOn AI はモデルと共有世界、Candy AI は一人のコンパニオンと複数メディアを中心に検討します。"],
        ["根拠と限界","公式の製品ページ・規約・プライバシー文書を優先し、広告上の主張を独立した測定値とは呼びません。私たちが実施していない生成結果や記憶テストを体験談として書きません。料金は現行の購入画面で確認してください。"]
      ]
    },
    contact: {
      title:"連絡先", description:"Yollo AI に関する当サイトの記事の誤り、一次資料の変更、権利やプライバシーの問題を知らせる方法。",
      lead:"訂正依頼には対象 URL、問題の文、確認できる一次資料を記してください。",
      blocks:[
        ["予定しているメール","support@yolloai.fun は予定アドレスですが、現在は受信設定が確認されていません。有効な窓口として扱わず、急ぎの用件や機密資料を送らないでください。"],
        ["製品のサポート","Yollo AI のアカウント、チャット、生成物、料金や削除は公式サービスのサポートへ。当サイトは製品の利用記録を確認・変更できません。"],
        ["安全な連絡","本人確認書類、パスワード、私的な会話、他人の画像や声は必要ありません。公開可能な範囲で該当ページと根拠を示してください。"]
      ]
    },
    "editorial-policy": {
      title:"編集方針", description:"Yollo AI の比較記事に使う一次資料、五つの独立した評価軸、訂正・更新、成人向け内容の境界。",
      lead:"検索語を増やすためではなく、読者が費用とデータを伴う選択をできるように書きます。",
      blocks:[
        ["一つの記事に一つの問い","Character.AI とは会話と世界の管理、Janitor AI とは参加型物語、SpicyChat AI とはロアブック、CrushOn AI とは長編対話、Candy AI とは音声を含む一人のコンパニオン体験を比べます。名前だけ入れ替えません。"],
        ["確認できる根拠","機能や料金は変わります。公式資料を示し、Yollo AI の『無料・登録不要』という宣伝と有料利用を許す規約の差も隠しません。実測していない性能は推奨テストと区別します。"],
        ["安全と訂正","扱う人物は明確に成人の架空人物に限ります。本人の許可なく実在人物の顔や声を使わず、地域制限の回避も勧めません。訂正にはページと一次資料を示し、重要な変更に日付を付けます。"]
      ]
    },
    privacy: {
      title:"プライバシー", description:"静的な yolloai.fun のアクセス情報、任意の Google Analytics、外部リンクと製品サイトとの区別。",
      lead:"当サイトにはチャット、画像アップロード、動画生成、会員登録、決済の機能がありません。",
      blocks:[
        ["ページ配信","ホスティングと保護事業者は、ページ配信と安全確保のため IP アドレス、要求 URL、時刻、ブラウザー情報などを処理する場合があります。当サイトは Yollo AI の会話や生成した画像を受け取りません。"],
        ["許可後のアクセス解析","Google Analytics 4 は同意後にだけ読み込みます。選択はブラウザーに最長180日保存され、各ページ下部の設定から撤回できます。広告パーソナライズと Google シグナルは使わず、Global Privacy Control と Do Not Track を尊重します。"],
        ["Cookie と外部サイト","撤回すると当ドメインから削除可能な解析 Cookie を消しますが、Google が過去に処理したデータまで消すものではありません。国外での処理もあり得ます。yollo.ai に移動した後は同社独自のプライバシー文書を確認してください。"]
      ]
    },
    terms: {
      title:"利用条件", description:"独立した Yollo AI 編集サイトの情報の範囲、成人向け閲覧、著作物および外部リンクに関する条件。",
      lead:"当サイトの記事は比較のための情報で、Yollo AI の公式利用規約ではありません。",
      blocks:[
        ["情報の限界","内容は法律、医療、財務、治療や人間関係の個別助言ではありません。機能、料金、地域、ルールは変わるため、決定前に提供元の現行規約と購入画面を確認してください。"],
        ["責任ある閲覧","成人向けの架空の同意ある場面だけを扱い、嫌がらせ、なりすまし、他人の肖像や声の無断利用、違法な性的表現に当サイトの情報を使わないでください。地域制限を回避しないでください。"],
        ["独自コンテンツとリンク","独自の文章、比較表、構成や画像を無断で大量に再配布しないでください。リンク先のアカウント、生成、支払いや削除には各運営者の条件が適用されます。"]
      ]
    }
  },
  ko: {
    about: {
      title:"사이트 소개", description:"Yollo AI를 살펴보는 독립 출판물의 목적, 공식 제품과의 차이, 다섯 비교 글의 기준입니다.",
      lead:"대화와 이미지·짧은 영상을 함께 살펴볼 때 기능표보다 동일 조건의 실험이 도움이 됩니다.",
      blocks:[
        ["독립 편집 사이트","이 사이트는 Yollo AI 운영사가 아닙니다. 캐릭터 채팅, 이미지·영상 생성, 계정이나 결제를 제공하지 않으며 공식 링크로 이동하면 다른 운영자의 약관이 적용됩니다."],
        ["서로 다른 다섯 비교","Character.AI는 대화와 세계 설정, Janitor AI는 참여형 이야기, SpicyChat AI는 로어북과 기억, CrushOn AI는 모델·공유 세계, Candy AI는 한 명의 동반자와 여러 매체의 연결을 중심으로 봅니다."],
        ["근거와 한계","제품 페이지와 약관, 개인정보 자료를 우선 확인합니다. 광고를 독립 측정치로 표현하지 않으며 우리가 하지 않은 생성·기억 테스트를 체험담으로 꾸미지 않습니다. 가격은 현재 결제 화면에서 확인해야 합니다."]
      ]
    },
    contact: {
      title:"연락처", description:"Yollo AI 관련 글에서 사실 오류, 공식 자료 변경, 권리 또는 개인정보 문제를 알리는 방법입니다.",
      lead:"정정 요청에는 해당 주소와 문제 된 문장, 확인 가능한 일차 자료를 적어 주세요.",
      blocks:[
        ["예정된 메일 주소","support@yolloai.fun은 예정된 주소지만 수신 설정이 아직 확인되지 않았습니다. 정상적인 문의 창구로 간주하지 말고 급한 내용이나 민감한 자료를 보내지 마세요."],
        ["제품 문제는 공식 지원팀으로","Yollo AI 계정, 대화, 생성 결과, 결제 및 삭제는 제공사의 공식 지원팀에 문의해야 합니다. 이 사이트는 제품 내 기록을 보거나 변경할 수 없습니다."],
        ["안전하게 제보하기","신분증, 비밀번호, 사적인 채팅 내용, 다른 사람의 사진이나 음성은 보내지 않아도 됩니다. 공개 가능한 범위에서 페이지와 근거만 알려 주세요."]
      ]
    },
    "editorial-policy": {
      title:"편집 원칙", description:"Yollo AI 비교 글의 공식 출처, 서로 다른 다섯 판단 기준, 정정 및 성인 콘텐츠의 경계입니다.",
      lead:"검색어를 반복하는 것보다 시간·비용·데이터가 걸린 선택을 돕는 데 집중합니다.",
      blocks:[
        ["글마다 다른 질문","Character.AI는 대화와 세계 설계, Janitor AI는 인터랙티브 스토리, SpicyChat AI는 로어북, CrushOn AI는 긴 대화, Candy AI는 음성을 포함한 동반자 경험을 비교합니다. 이름만 바꾼 같은 글을 만들지 않습니다."],
        ["출처와 불확실성","변하는 기능은 최신 공식 자료에 연결합니다. Yollo AI 홍보의 ‘무료·가입 불필요’와 유료 사용을 허용하는 약관의 차이를 숨기지 않으며, 직접 측정하지 않은 품질은 독자가 해볼 방법과 구분합니다."],
        ["안전과 수정","분명히 성인인 가상 인물만 다룹니다. 허락 없는 실제 인물의 얼굴·음성 사용이나 지역 제한 우회를 권하지 않습니다. 중요한 수정을 할 때는 페이지와 출처를 명시하고 날짜를 남깁니다."]
      ]
    },
    privacy: {
      title:"개인정보", description:"정적 사이트 yolloai.fun의 기술적 접속 정보, 선택적 Google Analytics와 외부 제품 링크 안내입니다.",
      lead:"이 사이트에는 채팅, 이미지 업로드, 영상 생성, 회원 계정 또는 결제 기능이 없습니다.",
      blocks:[
        ["페이지 제공에 필요한 정보","호스팅 및 보안 업체가 사이트 제공과 보호를 위해 IP 주소, 요청 URL, 접속 시각, 브라우저 정보를 처리할 수 있습니다. 이 사이트는 Yollo AI에서 나눈 채팅이나 만든 이미지를 받지 않습니다."],
        ["동의한 뒤에만 분석","Google Analytics 4는 동의 후에만 로드합니다. 선택은 브라우저에 최대 180일 보관되고 각 페이지 아래 설정에서 철회할 수 있습니다. 광고 개인화 및 Google 신호는 쓰지 않으며 Global Privacy Control과 Do Not Track을 존중합니다."],
        ["쿠키와 다른 운영자","철회 시 이 도메인에서 지울 수 있는 분석 쿠키를 제거하지만 Google이 이미 처리한 자료까지 삭제하지는 못합니다. 국외 처리 가능성도 있습니다. yollo.ai로 이동한 뒤에는 해당 업체의 별도 개인정보 정책을 살펴보세요."]
      ]
    },
    terms: {
      title:"이용 조건", description:"독립 Yollo AI 편집 사이트의 정보 범위, 책임 있는 성인 이용, 원본 콘텐츠와 외부 링크에 관한 조건입니다.",
      lead:"여기 실린 글은 비교 자료이지 Yollo AI의 공식 이용 약관이 아닙니다.",
      blocks:[
        ["정보의 범위","내용은 개인별 법률·의료·재무·심리 치료 또는 관계 상담이 아닙니다. 기능, 가격, 지역, 규칙은 달라질 수 있으므로 중요한 결정 전에 제공사의 최신 약관과 결제 화면을 확인하세요."],
        ["책임 있는 이용","성인 가상의 동의된 상황만 다루며 괴롭힘, 사칭, 타인의 얼굴·음성 무단 사용 또는 불법적인 성적 콘텐츠에 정보를 이용하지 마세요. 지역 제한을 우회해서도 안 됩니다."],
        ["자료와 연결된 사이트","고유한 글, 비교 표, 디자인과 이미지를 허락 없이 대량 재배포하지 마세요. 연결된 서비스의 계정, 생성, 결제와 삭제는 각 운영사의 규칙을 따릅니다."]
      ]
    }
  },
  "zh-hant": {
    about: {
      title:"關於本站", description:"本站介紹 Yollo AI 的目的、與官方產品的區別，以及五篇比較各自採用的評估問題。",
      lead:"把對話、圖片和短影片放在同一張清單前，先想好可重複的測試方法。",
      blocks:[
        ["獨立出版","本站不是 Yollo AI 營運方，不提供角色聊天、圖片或影片生成、帳戶及付款。點選官方連結會進入另一個營運者的平台，其條款另行適用。"],
        ["五篇文章各有重點","Character.AI 看對話和世界設定，Janitor AI 看互動故事，SpicyChat AI 看 Lorebook 與記憶，CrushOn AI 看模型及共享世界，Candy AI 看單一陪伴角色如何跨越多種媒體。"],
        ["資料與限制","優先查核官方產品頁、條款和隱私資料。不把廣告當成本站實測，也不把未進行的生成或記憶測試寫成體驗。收費須在目前結帳畫面確認。"]
      ]
    },
    contact: {
      title:"聯絡方式", description:"指出本站 Yollo AI 文章的錯誤、官方資料變更、著作權或隱私問題的方法。",
      lead:"提出更正時，請附頁面網址、具體語句及可核對的第一手來源。",
      blocks:[
        ["預定使用的信箱","support@yolloai.fun 是預定地址，但目前尚未確認能收信。請勿視為已運作的聯絡管道，也不要寄送緊急或敏感資料。"],
        ["產品客服不在本站","Yollo AI 的帳號、聊天、作品、付款和刪除應聯絡官方客服；本站無法查看或修改該平台的使用紀錄。"],
        ["安全通報","無須提供身分證件、密碼、私人對話或他人的照片與聲音。只提供足以查核文章、且可以公開的資料。"]
      ]
    },
    "editorial-policy": {
      title:"編輯政策", description:"Yollo AI 比較文章採用的第一手來源、五種不同決策角度、修正方式與成人內容界線。",
      lead:"文章應協助讀者做出涉及時間、金錢與資料的決定，不靠重複關鍵字充數。",
      blocks:[
        ["比較問題不重複","Character.AI 比對對話及世界設定，Janitor AI 比對互動敘事，SpicyChat AI 比對 Lorebook，CrushOn AI 比對長篇對話，Candy AI 比對含語音的陪伴角色體驗；不是換個產品名稱重用一篇文章。"],
        ["來源與不確定性","對會變動的功能，以現行官方資料為先。清楚呈現 Yollo AI 宣傳「免費、免註冊」與允許收費之條款間的差別；未實測的性能只提出檢驗方法，不給假分數。"],
        ["安全與更正","只討論明確成年的虛構人物，不鼓勵未經授權使用真實人物的臉或聲音，也不教人繞過地區限制。重大修訂會附日期及可核對的來源。"]
      ]
    },
    privacy: {
      title:"隱私", description:"靜態網站 yolloai.fun 的技術存取資訊、選擇性 Google Analytics 和外部產品連結說明。",
      lead:"本站沒有聊天、圖片上傳、影片生成、會員帳號或付款。",
      blocks:[
        ["提供頁面所需資料","託管與安全服務可能為傳送及保護頁面處理 IP 位址、請求網址、時間與瀏覽器資訊。本站不接收你在 Yollo AI 輸入的對話或生成作品。"],
        ["同意後才載入分析","Google Analytics 4 只在你同意後啟用。選擇最多保存在瀏覽器 180 天，可從每頁頁尾撤回。本站不用廣告個人化或 Google 信號，並尊重 Global Privacy Control 與 Do Not Track。"],
        ["Cookie 與外部網站","撤回後會清除本網域可控制的分析 Cookie，但無法抹除 Google 先前已處理的資料；亦可能跨境處理。前往 yollo.ai 後，應閱讀對方獨立的隱私文件。"]
      ]
    },
    terms: {
      title:"使用條款", description:"獨立 Yollo AI 編輯網站的資訊用途、負責任的成人閱覽、原創內容與外部連結條件。",
      lead:"本站的比較資訊不能代替 Yollo AI 官方使用條款。",
      blocks:[
        ["內容的界線","文章不是個別法律、醫療、財務、心理治療或人際關係建議。功能、價格、地區及規則會改變；重要決定前請查官方現行條款及結帳頁。"],
        ["負責任使用","只採用明確成年、虛構且尊重同意的情境。不得用本站資訊騷擾、冒充他人、未經許可使用別人的肖像或聲音，或製作違法的性內容；亦勿繞過地區限制。"],
        ["原創內容與第三方","未經許可，請勿大量轉載本站的文章、比較框架、版面及圖片。外部服務的帳號、生成、付款和刪除以各營運者的條款為準。"]
      ]
    }
  },
  es: {
    about: {
      title:"Acerca de esta publicación", description:"Por qué existe esta publicación independiente sobre Yollo AI, cómo se diferencia del producto y qué preguntas guían los cinco comparativos.",
      lead:"Una función anunciada no es lo mismo que un resultado comprobado: proponemos pruebas concretas para conversar, crear imágenes y valorar costes.",
      blocks:[
        ["Independencia","No operamos Yollo AI ni ofrecemos chat, creación de personajes, imágenes, vídeos, cuentas o pagos. Los enlaces oficiales llevan a un proveedor distinto, con sus propias condiciones."],
        ["Cinco decisiones distintas","Character.AI se compara por diálogo y mundos; Janitor AI por ficción interactiva; SpicyChat AI por lorebooks y memoria; CrushOn AI por modelos y universos compartidos; Candy AI por la continuidad de un acompañante entre voz, imagen y vídeo."],
        ["Qué podemos afirmar","Consultamos páginas, condiciones y políticas oficiales. No confundimos publicidad con pruebas independientes ni presentamos una prueba recomendada como si hubiéramos medido sus resultados. El precio real se confirma en el pago vigente."]
      ]
    },
    contact: {
      title:"Contacto", description:"Cómo avisar de errores, fuentes oficiales nuevas o cuestiones de derechos y privacidad en nuestros textos sobre Yollo AI.",
      lead:"Para pedir una corrección, indica la URL, la frase concreta y una fuente primaria que permita verificarla.",
      blocks:[
        ["Dirección prevista","support@yolloai.fun es la dirección prevista, pero todavía no se ha confirmado que reciba mensajes. No la trates como un canal operativo ni envíes asuntos urgentes o información sensible."],
        ["Soporte del producto","Para cuentas, conversaciones, resultados, cobros y borrado de Yollo AI, acude al soporte del proveedor. No podemos consultar ni cambiar datos en un servicio ajeno."],
        ["Comunicación segura","No necesitamos documentos, contraseñas, chats privados ni imágenes o voces de terceros. Basta con información publicable que identifique el artículo y el motivo."]
      ]
    },
    "editorial-policy": {
      title:"Política editorial", description:"Fuentes oficiales, criterios diferenciados, correcciones y límites para contenido adulto en nuestras comparativas sobre Yollo AI.",
      lead:"Escribimos para ayudar a decidir dónde invertir tiempo, datos y dinero, no para repetir un término de búsqueda.",
      blocks:[
        ["Una pregunta por comparativa","Character.AI se examina por conversación y mundos, Janitor AI por narración interactiva, SpicyChat AI por lorebooks, CrushOn AI por historias largas y Candy AI por el acompañante que combina voz y medios. No sustituimos nombres en un mismo texto."],
        ["Pruebas y dudas","Enlazamos fuentes primarias para funciones cambiantes. Señalamos que el marketing de Yollo habla de gratis y sin registro, mientras sus condiciones permiten cobrar. Una prueba que no hemos realizado aparece como método sugerido, nunca como puntuación propia."],
        ["Seguridad y correcciones","Solo tratamos personajes ficticios claramente adultos. No promovemos uso de rostros o voces reales sin permiso ni evasión de restricciones regionales. Las rectificaciones importantes identifican página, fuente y fecha."]
      ]
    },
    privacy: {
      title:"Privacidad", description:"Qué datos técnicos puede tratar este sitio estático, cuándo se activa Google Analytics y qué ocurre al seguir un enlace externo.",
      lead:"Aquí no hay chat, carga de imágenes, generador, cuenta de usuario ni pago.",
      blocks:[
        ["Entrega y protección","El alojamiento y la seguridad pueden procesar IP, URL solicitada, hora y navegador para servir y proteger la web. No recibimos conversaciones ni creaciones hechas dentro de Yollo AI."],
        ["Analítica solo con permiso","Google Analytics 4 se carga tras tu consentimiento. Guardamos la elección en el navegador hasta 180 días y puedes retirarla desde el pie de cualquier página. No activamos personalización publicitaria ni Google signals y respetamos Global Privacy Control y Do Not Track."],
        ["Cookies y otros operadores","Al retirar el permiso borramos las cookies analíticas accesibles a este dominio, pero no datos ya tratados por Google; también puede haber tratamiento internacional. En yollo.ai rige la política del proveedor, no la nuestra."]
      ]
    },
    terms: {
      title:"Condiciones de uso", description:"Alcance de esta publicación independiente, uso responsable por adultos, contenido original y sitios enlazados.",
      lead:"Nuestras comparativas no reemplazan las condiciones oficiales de Yollo AI.",
      blocks:[
        ["Información general","El contenido no es consejo jurídico, médico, financiero, terapéutico ni sobre relaciones personales. Funciones, precios, regiones y políticas pueden cambiar: comprueba los términos y el pago actuales antes de decidir."],
        ["Uso responsable","Usa solo situaciones ficticias con personas claramente adultas y consentimiento. No emplees este material para acosar, suplantar, usar imágenes o voces ajenas sin permiso, crear contenido sexual ilícito ni eludir restricciones regionales."],
        ["Derechos y enlaces","No reproduzcas masivamente nuestra redacción, tablas, diseño o imágenes originales sin autorización. Las cuentas, creaciones, compras y eliminaciones en webs externas siguen las reglas de cada operador."]
      ]
    }
  },
  "pt-br": {
    about: {
      title:"Sobre esta publicação", description:"Objetivo da publicação independente sobre Yollo AI, diferença em relação ao produto e critérios das cinco comparações.",
      lead:"Uma função anunciada não equivale a um resultado comprovado; oferecemos testes para conversa, mídia e custo.",
      blocks:[
        ["Independência","Não operamos o Yollo AI e não oferecemos chat, criação de personagens, imagens, vídeos, conta ou pagamento. Links oficiais levam a outro responsável e a regras próprias."],
        ["Cinco escolhas diferentes","Character.AI entra pela conversa e construção de mundos; Janitor AI, pela ficção interativa; SpicyChat AI, por lorebooks e memória; CrushOn AI, por modelos e universos compartilhados; Candy AI, pela continuidade de um acompanhante entre voz e mídia."],
        ["O que podemos afirmar","Consultamos páginas, termos e políticas oficiais. Não tratamos propaganda como medição independente nem vendemos um teste sugerido como resultado nosso. Preço efetivo se confirma no checkout atual."]
      ]
    },
    contact: {
      title:"Contato", description:"Como apontar erros, documentos oficiais novos ou problemas de direitos e privacidade nos textos sobre Yollo AI.",
      lead:"Para uma correção, informe o endereço da página, a frase e uma fonte primária verificável.",
      blocks:[
        ["Endereço planejado","support@yolloai.fun é o e-mail pretendido, mas ainda não há confirmação de recebimento. Não o considere um canal funcionando nem envie urgências ou material sensível."],
        ["Suporte do serviço","Questões de conta, conversas, resultados, cobrança e exclusão no Yollo AI cabem ao suporte oficial. Não temos acesso aos dados de outro produto."],
        ["Aviso seguro","Não precisamos de documento, senha, chat privado nem foto ou voz de terceiros. Descreva o problema só com informação publicável e o link afetado."]
      ]
    },
    "editorial-policy": {
      title:"Política editorial", description:"Fontes primárias, enfoques distintos, correções e limites de conteúdo adulto nas comparações sobre Yollo AI.",
      lead:"O objetivo é ajudar numa escolha que envolve tempo, dados e dinheiro, não repetir palavras-chave.",
      blocks:[
        ["Uma pergunta por artigo","Character.AI é visto pelo diálogo e mundos; Janitor AI, por narrativa interativa; SpicyChat AI, por lorebooks; CrushOn AI, por histórias longas; Candy AI, pelo acompanhante que atravessa voz e mídia. Não trocamos nomes em um texto padrão."],
        ["Evidência e incerteza","Ligamos recursos mutáveis a fontes oficiais. Expomos a diferença entre a propaganda de uso grátis e sem cadastro e os termos do Yollo que admitem cobranças. Testes não realizados são métodos sugeridos, não notas inventadas."],
        ["Segurança e revisão","Só tratamos personagens fictícios claramente adultos. Não incentivamos uso de rosto ou voz real sem permissão nem contorno de limites regionais. Correções relevantes indicam página, fonte e data."]
      ]
    },
    privacy: {
      title:"Privacidade", description:"Dados técnicos deste site estático, Google Analytics opcional e diferença entre nossa política e a do produto externo.",
      lead:"Aqui não há chat, upload, geração, conta de usuário nem pagamento.",
      blocks:[
        ["Entrega e proteção","Hospedagem e segurança podem processar IP, URL, horário e navegador para entregar e proteger páginas. Não recebemos conversas ou criações feitas no Yollo AI."],
        ["Análise com consentimento","O Google Analytics 4 carrega só depois de sua permissão. A escolha fica no navegador por até 180 dias e pode ser revogada no rodapé de qualquer página. Não ativamos personalização de anúncios nem Google signals; respeitamos Global Privacy Control e Do Not Track."],
        ["Cookies e terceiros","Ao revogar, apagamos cookies analíticos acessíveis a este domínio, não informações já processadas pelo Google. O tratamento pode ocorrer fora do seu país. Ao visitar yollo.ai, leia a política própria do fornecedor."]
      ]
    },
    terms: {
      title:"Termos de uso", description:"Alcance da publicação independente, uso responsável por adultos, conteúdo original e links externos.",
      lead:"Nossas comparações não substituem as condições oficiais do Yollo AI.",
      blocks:[
        ["Informação geral","Os textos não são aconselhamento jurídico, médico, financeiro, terapêutico ou de relacionamento individual. Recursos, preços, regiões e regras podem mudar; confira os termos e o checkout atuais antes de decidir."],
        ["Uso responsável","Use apenas situações fictícias com pessoas claramente adultas e respeito ao consentimento. Não aproveite o material para assédio, falsidade de identidade, uso não autorizado de rosto ou voz, conteúdo sexual ilegal ou desrespeito a bloqueios regionais."],
        ["Direitos e sites ligados","Não reproduza em massa textos, quadros comparativos, design ou imagens originais sem autorização. Contas, criações, compras e exclusões em sites externos seguem seus operadores."]
      ]
    }
  },
  ru: {
    about: {
      title:"О проекте", description:"Задачи независимого издания о Yollo AI, отличие от продукта и вопросы, на которых строятся пять сравнений.",
      lead:"Перечень функций не доказывает качество: важен воспроизводимый тест диалога, изображения и стоимости.",
      blocks:[
        ["Независимость","Мы не управляем Yollo AI и не предоставляем чат, создание персонажей, изображений, видео, аккаунты или платежи. Официальные ссылки ведут к другому оператору с отдельными правилами."],
        ["Пять разных решений","Character.AI сравниваем по общению и мирам, Janitor AI — по интерактивным историям, SpicyChat AI — по лорбукам и памяти, CrushOn AI — по моделям и общим мирам, Candy AI — по преемственности одного компаньона между голосом и медиа."],
        ["Подтверждения и пределы","Используем официальные страницы, условия и политику данных. Рекламу не выдаём за независимое измерение, а предложенный читателю тест — за проведённое нами исследование. Актуальную цену следует смотреть при оплате."]
      ]
    },
    contact: {
      title:"Контакты", description:"Как сообщить об ошибке, изменении первоисточника или споре о правах и данных в статьях о Yollo AI.",
      lead:"Для исправления укажите адрес страницы, точную фразу и проверяемый первичный источник.",
      blocks:[
        ["Планируемая почта","Адрес support@yolloai.fun запланирован, но приём писем пока не подтверждён. Не считайте его действующим каналом и не посылайте срочные или конфиденциальные сведения."],
        ["Поддержка продукта","С аккаунтом, беседами, результатами, счетами и удалением в Yollo AI обращайтесь к оператору сервиса. Мы не можем просматривать или менять данные стороннего продукта."],
        ["Безопасное обращение","Не нужны документы, пароли, личные переписки, фото или голоса других людей. Опишите проблему общедоступными сведениями и ссылкой на материал."]
      ]
    },
    "editorial-policy": {
      title:"Редакционная политика", description:"Первоисточники, самостоятельные углы пяти сравнений, исправления и границы взрослой тематики.",
      lead:"Пишем для решений, связанных со временем, данными и расходами, а не ради повторения ключевого запроса.",
      blocks:[
        ["Разные вопросы","Character.AI рассматриваем через диалог и устройство мира, Janitor AI — через интерактивный сюжет, SpicyChat AI — через лорбуки, CrushOn AI — через длинные разговоры, Candy AI — через компаньона с голосом и медиа. Названия в шаблоне не меняем местами."],
        ["Основания и неопределённость","Ссылаемся на официальные материалы для меняющихся функций. Показываем разницу между рекламой Yollo о бесплатном доступе без аккаунта и условиями, допускающими оплату. Неизмеренную производительность не превращаем в рейтинг."],
        ["Безопасность и исправления","Говорим только о явно совершеннолетних вымышленных персонажах. Не поощряем чужие изображения или голос без разрешения и обход географических запретов. Важные поправки снабжаем датой и источником."]
      ]
    },
    privacy: {
      title:"Конфиденциальность", description:"Технические данные статического сайта yolloai.fun, необязательная Google Analytics и переходы к внешнему продукту.",
      lead:"У нас нет чата, загрузки изображений, генератора, личного кабинета или платежей.",
      blocks:[
        ["Доставка страниц","Хостинг и защита могут обрабатывать IP-адрес, URL запроса, время и браузер для работы сайта и безопасности. Мы не получаем беседы или работы, созданные в Yollo AI."],
        ["Аналитика только с разрешения","Google Analytics 4 загружается после согласия. Выбор хранится в браузере до 180 дней и отзывается через настройки внизу любой страницы. Рекламная персонализация и Google signals выключены; Global Privacy Control и Do Not Track учитываются."],
        ["Cookie и другие операторы","При отзыве удаляются аналитические cookie, доступные нашему домену, но не уже обработанные Google сведения. Возможна передача за границу. После перехода на yollo.ai действует собственная политика провайдера."]
      ]
    },
    terms: {
      title:"Условия использования", description:"Пределы независимой публикации, ответственное пользование взрослыми, оригинальные материалы и внешние ссылки.",
      lead:"Наши статьи не заменяют официальные условия Yollo AI.",
      blocks:[
        ["Общая информация","Материалы не являются индивидуальной юридической, медицинской, финансовой, психотерапевтической консультацией или советом по отношениям. Функции, цены, регионы и правила меняются; проверяйте действующие условия и оплату."],
        ["Ответственное использование","Ограничивайтесь вымышленными явно совершеннолетними персонажами и уважайте согласие. Не применяйте материалы для травли, подмены личности, чужих фото или голосов без разрешения, незаконного сексуального содержания и обхода региональных ограничений."],
        ["Права и ссылки","Не копируйте массово оригинальные тексты, таблицы, оформление и изображения без разрешения. Аккаунты, творчество, покупки и удаление на внешних сайтах регулируются их операторами."]
      ]
    }
  },
  de: {
    about: {
      title:"Über diese Website", description:"Zweck der unabhängigen Veröffentlichung zu Yollo AI, Abstand zum Produkt und Kriterien unserer fünf Vergleiche.",
      lead:"Eine beworbene Funktion ist noch kein verlässliches Ergebnis. Wir zeigen nachvollziehbare Prüfungen für Gespräch, Bild und Kosten.",
      blocks:[
        ["Unabhängigkeit","Wir betreiben Yollo AI nicht und bieten weder Chat noch Figuren-, Bild- oder Videogenerierung, Konto oder Bezahlung an. Offizielle Links führen zu einem anderen Anbieter mit eigenen Bedingungen."],
        ["Fünf unterschiedliche Entscheidungen","Character.AI vergleichen wir bei Dialog und Welten, Janitor AI bei interaktiven Geschichten, SpicyChat AI bei Lorebooks und Gedächtnis, CrushOn AI bei Modellen und geteilten Welten, Candy AI bei der medienübergreifenden Begleitfigur."],
        ["Belege und Grenzen","Wir ziehen offizielle Produktseiten, AGB und Datenschutzhinweise heran. Werbung geben wir nicht als unabhängige Messung aus; einen empfohlenen Test behaupten wir nicht selbst durchgeführt zu haben. Preise zählen im aktuellen Bezahlvorgang."]
      ]
    },
    contact: {
      title:"Kontakt", description:"So melden Sie Fehler, geänderte Primärquellen sowie Rechte- oder Datenschutzfragen in unseren Yollo-AI-Artikeln.",
      lead:"Nennen Sie für eine Berichtigung Seiten-URL, genaue Aussage und überprüfbare Primärquelle.",
      blocks:[
        ["Geplante Adresse","support@yolloai.fun ist vorgesehen, aber der Empfang wurde noch nicht bestätigt. Betrachten Sie die Adresse nicht als funktionierenden Kontaktweg und senden Sie keine dringlichen oder vertraulichen Angaben."],
        ["Produktsupport","Für Yollo-AI-Konto, Gespräche, Ergebnisse, Abrechnung oder Löschung ist der offizielle Anbieter zuständig. Wir können Daten des fremden Dienstes weder einsehen noch ändern."],
        ["Sichere Nachricht","Ausweise, Passwörter, private Chats und Bilder oder Stimmen Dritter sind nicht nötig. Beschreiben Sie das Problem mit veröffentlichbaren Angaben und dem betroffenen Link."]
      ]
    },
    "editorial-policy": {
      title:"Redaktionsgrundsätze", description:"Primärquellen, getrennte Vergleichsfragen, Korrekturen und Grenzen erwachsener Inhalte bei Yollo AI.",
      lead:"Unsere Texte sollen Entscheidungen über Zeit, Daten und Geld erleichtern, statt Suchbegriffe zu wiederholen.",
      blocks:[
        ["Ein eigenes Thema je Vergleich","Character.AI betrachten wir bei Dialog und Weltbau, Janitor AI bei interaktiver Handlung, SpicyChat AI bei Lorebooks, CrushOn AI bei langen Gesprächen und Candy AI bei Begleitfiguren mit Stimme und Medien. Wir tauschen nicht nur Produktnamen aus."],
        ["Nachweise und Unsicherheit","Veränderliche Funktionen belegen wir mit aktuellen offiziellen Quellen. Wir nennen den Widerspruch zwischen Yollos Werbung für kostenlose Nutzung ohne Anmeldung und seinen AGB mit möglicher Bezahlung. Nicht durchgeführte Tests werden nicht als Wertung ausgegeben."],
        ["Sicherheit und Korrekturen","Wir behandeln nur fiktive eindeutig erwachsene Figuren. Bilder oder Stimmen realer Personen ohne Erlaubnis und das Umgehen regionaler Sperren fördern wir nicht. Wichtige Korrekturen erhalten Quelle und Datum."]
      ]
    },
    privacy: {
      title:"Datenschutz", description:"Technische Daten auf der statischen Website yolloai.fun, optionale Google Analytics und Abgrenzung zum externen Produkt.",
      lead:"Hier gibt es weder Chat noch Bilder-Upload, Generator, Nutzerkonto oder Bezahlung.",
      blocks:[
        ["Bereitstellung und Schutz","Hosting und Sicherheitsanbieter können IP-Adresse, angeforderte URL, Zeit und Browserdaten verarbeiten, um Seiten auszuliefern und zu schützen. Wir erhalten keine Yollo-AI-Gespräche oder dort erstellten Medien."],
        ["Analyse nur nach Einwilligung","Google Analytics 4 wird erst nach Zustimmung geladen. Die Wahl bleibt bis zu 180 Tage im Browser und lässt sich unten auf jeder Seite widerrufen. Werbepersonalisierung und Google signals sind aus; Global Privacy Control und Do Not Track werden berücksichtigt."],
        ["Cookies und andere Anbieter","Nach Widerruf entfernen wir Analytics-Cookies, auf die diese Domain zugreifen kann, nicht jedoch bereits von Google verarbeitete Daten. Verarbeitung im Ausland ist möglich. Auf yollo.ai gilt die eigene Datenschutzerklärung des Anbieters."]
      ]
    },
    terms: {
      title:"Nutzungsbedingungen", description:"Grenzen der unabhängigen Veröffentlichung, verantwortungsvolle Nutzung durch Erwachsene, eigene Inhalte und externe Links.",
      lead:"Unsere Vergleiche ersetzen nicht die offiziellen Bedingungen von Yollo AI.",
      blocks:[
        ["Allgemeine Information","Die Inhalte sind keine individuelle Rechts-, Medizin-, Finanz-, Therapie- oder Beziehungsberatung. Funktionen, Preise, Regionen und Regeln ändern sich; maßgebliche Punkte sind in aktuellen Anbieterbedingungen und beim Bezahlen zu prüfen."],
        ["Verantwortliche Nutzung","Nutzen Sie nur fiktive eindeutig erwachsene, einvernehmliche Situationen. Diese Informationen dürfen nicht für Belästigung, Identitätstäuschung, unerlaubte Bilder oder Stimmen Dritter, rechtswidrige sexuelle Inhalte oder das Umgehen regionaler Grenzen verwendet werden."],
        ["Urheberrecht und Links","Originaltexte, Tabellen, Gestaltung und Bilder dürfen nicht ohne Erlaubnis massenhaft übernommen werden. Für Konten, Erstellung, Käufe und Löschung auf verlinkten Websites gelten deren Betreiberregeln."]
      ]
    }
  },
  fr: {
    about: {
      title:"À propos de cette publication", description:"Pourquoi ce site indépendant parle de Yollo AI, en quoi il diffère du produit et comment ses cinq comparatifs sont construits.",
      lead:"Une fonction annoncée n'est pas un résultat vérifié ; nous proposons des contrôles concrets pour le dialogue, les médias et les coûts.",
      blocks:[
        ["Indépendance","Nous n'exploitons pas Yollo AI et ne proposons ni chat, ni création de personnages, d'images ou de vidéos, ni compte ou paiement. Les liens officiels mènent à un autre opérateur et à ses propres conditions."],
        ["Cinq choix distincts","Character.AI est étudié pour les dialogues et les univers, Janitor AI pour la fiction interactive, SpicyChat AI pour les lorebooks et la mémoire, CrushOn AI pour les modèles et mondes partagés, Candy AI pour la continuité d'un compagnon à travers voix et médias."],
        ["Ce que nous savons","Nous nous appuyons sur les pages, conditions et règles de confidentialité officielles. Nous ne transformons pas la publicité en mesure indépendante ni une méthode conseillée en expérience prétendument réalisée. Le prix se vérifie au paiement."]
      ]
    },
    contact: {
      title:"Contact", description:"Comment signaler une erreur, une nouvelle source officielle ou un problème de droits ou de données dans nos articles sur Yollo AI.",
      lead:"Pour une correction, précisez l'URL, la phrase en cause et une source primaire vérifiable.",
      blocks:[
        ["Adresse envisagée","support@yolloai.fun est prévue, mais la réception des messages n'a pas encore été confirmée. Ne la considérez pas comme un canal actif et n'envoyez rien d'urgent ou de sensible."],
        ["Assistance du produit","Pour le compte Yollo AI, les échanges, résultats, paiements et suppressions, adressez-vous au fournisseur officiel. Nous ne pouvons ni consulter ni modifier les données de son service."],
        ["Signalement sans risque","Nous n'avons besoin ni d'identité, ni de mot de passe, de chat privé ou de fichiers représentant autrui. Fournissez seulement des éléments publiables et le lien concerné."]
      ]
    },
    "editorial-policy": {
      title:"Politique éditoriale", description:"Sources primaires, angles de comparaison distincts, corrections et limites des contenus pour adultes concernant Yollo AI.",
      lead:"Nous cherchons à éclairer un choix engageant du temps, des données et de l'argent, pas à répéter une requête.",
      blocks:[
        ["Un sujet par article","Character.AI est comparé sur le dialogue et l'univers, Janitor AI sur le récit interactif, SpicyChat AI sur les lorebooks, CrushOn AI sur les longues conversations, Candy AI sur un compagnon mêlant voix et médias. Aucun nom n'est seulement remplacé dans un modèle."],
        ["Preuves et incertitude","Les fonctions changeantes renvoient aux sources officielles en vigueur. Nous exposons l'écart entre la promotion Yollo « gratuit et sans inscription » et ses conditions permettant une facturation. Une performance non testée n'obtient pas de note imaginaire."],
        ["Sécurité et rectifications","Nous parlons uniquement de personnages fictifs clairement adultes. Nous ne conseillons ni l'usage de visage ou voix d'autrui sans accord ni le contournement de restrictions géographiques. Une correction importante comporte source et date."]
      ]
    },
    privacy: {
      title:"Confidentialité", description:"Données techniques sur le site statique yolloai.fun, Google Analytics facultatif et distinction avec le produit externe.",
      lead:"Ce site n'a ni chat, ni téléchargement d'images, ni générateur, compte ou paiement.",
      blocks:[
        ["Mise à disposition","Hébergement et protection peuvent traiter adresse IP, URL demandée, heure et navigateur pour livrer et sécuriser les pages. Nous ne recevons pas les conversations ou créations faites sur Yollo AI."],
        ["Mesure d'audience avec accord","Google Analytics 4 n'est chargé qu'après votre consentement. Le choix reste dans le navigateur jusqu'à 180 jours et se retire en bas de chaque page. Ni personnalisation publicitaire ni Google signals ; Global Privacy Control et Do Not Track sont respectés."],
        ["Cookies et sites tiers","Après retrait, nous supprimons les cookies de mesure accessibles à ce domaine, mais pas les données déjà traitées par Google. Un traitement à l'étranger reste possible. Sur yollo.ai, lisez la politique propre au fournisseur."]
      ]
    },
    terms: {
      title:"Conditions d'utilisation", description:"Portée de la publication indépendante, usage responsable par des adultes, créations originales et liens externes.",
      lead:"Nos comparatifs ne remplacent pas les conditions officielles de Yollo AI.",
      blocks:[
        ["Information générale","Les textes ne sont pas des conseils individuels juridiques, médicaux, financiers, thérapeutiques ou relationnels. Fonctions, prix, régions et règles évoluent ; vérifiez les conditions et le paiement actuels du fournisseur."],
        ["Usage responsable","Limitez-vous à des scénarios fictifs entre adultes clairement identifiés et respectant le consentement. N'utilisez pas ces informations pour harceler, usurper une identité, exploiter l'image ou la voix d'autrui sans permission, créer du contenu sexuel illégal ou contourner une restriction régionale."],
        ["Droits et autres sites","Textes, tableaux, mise en page et images originaux ne doivent pas être repris massivement sans accord. Comptes, créations, achats et suppressions sur les sites liés relèvent de leurs opérateurs."]
      ]
    }
  },
  ar: {
    about: {
      title:"حول هذا الموقع", description:"هدف النشر المستقل عن Yollo AI، والفرق بين الموقع والخدمة، وكيفية بناء المقارنات الخمس.",
      lead:"الإعلان عن ميزة لا يثبت جودتها؛ نقدّم طريقة واضحة لتقييم الحوار والوسائط والكلفة.",
      blocks:[
        ["استقلالنا","لا نشغّل Yollo AI ولا نقدم المحادثة أو إنشاء الشخصيات أو الصور أو الفيديو أو الحسابات أو الدفع. الروابط الرسمية تنقلك إلى مزود آخر وشروطه المستقلة."],
        ["خمسة قرارات مختلفة","نقارن Character.AI في الحوار وبناء العوالم، وJanitor AI في القصص التفاعلية، وSpicyChat AI في دفاتر التفاصيل والذاكرة، وCrushOn AI في النماذج والعوالم المشتركة، وCandy AI في استمرار شخصية مرافق واحد بين الصوت والوسائط."],
        ["حدود ما نعرفه","نعتمد صفحات المنتج والشروط والخصوصية الرسمية. لا نسمّي الإعلانات قياسات مستقلة ولا نزعم أننا أجرينا اختباراً مقترحاً للقراء. تحقق من الثمن الفعلي في شاشة الدفع الحالية."]
      ]
    },
    contact: {
      title:"التواصل", description:"كيفية الإبلاغ عن خطأ أو مصدر رسمي مستجد أو مشكلة حقوق وخصوصية في مقالات Yollo AI.",
      lead:"اذكر رابط الصفحة والعبارة المعنية ومصدراً أصلياً يمكن التحقق منه عند طلب التصحيح.",
      blocks:[
        ["عنوان مخطط له","العنوان support@yolloai.fun مخطط له، لكن استقبال الرسائل لم يُؤكَّد بعد. لا تعتبره قناة فعّالة ولا ترسل إليه أمراً عاجلاً أو مادة حساسة."],
        ["دعم المنتج","مشكلات حساب Yollo AI والمحادثات والنتائج والفواتير والحذف تخص دعم المزود الرسمي. لا نستطيع الاطلاع على بيانات خدمة أخرى أو تغييرها."],
        ["بلاغ آمن","لا نحتاج وثائق هوية أو كلمات مرور أو محادثات خاصة أو صور الآخرين وأصواتهم. تكفي معلومات قابلة للنشر تحدد المقال والمشكلة."]
      ]
    },
    "editorial-policy": {
      title:"السياسة التحريرية", description:"المصادر الأصلية وزوايا المقارنة المختلفة والتصحيحات وحدود موضوعات البالغين في محتوى Yollo AI.",
      lead:"نكتب لمساعدة القارئ في قرار يشمل وقته وبياناته وماله، لا لتكرار عبارة بحث.",
      blocks:[
        ["سؤال خاص بكل مقارنة","نقيّم Character.AI في الحوار والعالم، وJanitor AI في السرد التفاعلي، وSpicyChat AI في دفاتر التفاصيل، وCrushOn AI في الحوار الطويل، وCandy AI في مرافق يجمع الصوت والوسائط. لا نستبدل الأسماء في نص واحد."],
        ["الأدلة وحدودها","نربط الميزات المتغيرة بمصادرها الرسمية الحالية. نوضح الفرق بين إعلان Yollo عن المجانية بلا تسجيل وشروطه التي تسمح بالرسوم. الاختبار غير المنفذ يُعرض كطريقة للقارئ، لا كنتيجة نزعمها."],
        ["السلامة والتصحيح","نقتصر على شخصيات خيالية بالغة بوضوح. لا نشجع استعمال وجه أو صوت شخص حقيقي دون إذن أو تجاوز القيود الجغرافية. نؤرخ التصحيحات المهمة ونذكر مصدرها."]
      ]
    },
    privacy: {
      title:"الخصوصية", description:"البيانات التقنية في yolloai.fun الثابت، وتحليلات Google الاختيارية، والفرق عن سياسة المنتج الخارجي.",
      lead:"لا توجد هنا محادثة أو رفع صور أو مولد أو حساب مستخدم أو دفع.",
      blocks:[
        ["تقديم الصفحات وحمايتها","قد تعالج خدمات الاستضافة والأمن عنوان IP والرابط المطلوب والوقت وبيانات المتصفح لتقديم الصفحات وحمايتها. لا نتلقى محادثات Yollo AI أو الأعمال المنشأة فيه."],
        ["التحليلات بعد الموافقة فقط","لا يُحمّل Google Analytics 4 إلا بعد موافقتك. يبقى الخيار في المتصفح حتى 180 يوماً ويمكن سحبه من أسفل كل صفحة. لا نفعّل تخصيص الإعلانات أو Google signals ونحترم Global Privacy Control وDo Not Track."],
        ["ملفات الارتباط والمواقع الأخرى","عند سحب الموافقة نحذف ملفات التحليل التي يمكن لهذا النطاق التحكم بها، لا البيانات التي سبق أن عالجتها Google. قد تتم المعالجة خارج بلدك. بعد الانتقال إلى yollo.ai اقرأ سياسة المزود الخاصة."]
      ]
    },
    terms: {
      title:"شروط الاستخدام", description:"حدود هذا النشر المستقل، والاستخدام المسؤول للبالغين، والمحتوى الأصلي والروابط الخارجية.",
      lead:"مقالات المقارنة هنا لا تحل محل شروط Yollo AI الرسمية.",
      blocks:[
        ["معلومات عامة","النصوص ليست استشارة قانونية أو طبية أو مالية أو علاجية أو نصيحة شخصية بشأن العلاقات. قد تتغير الميزات والأسعار والمناطق والقواعد؛ راجع الشروط وشاشة الدفع الحاليتين لدى المزود."],
        ["استخدام مسؤول","اقتصر على مواقف خيالية لشخصيات بالغة بوضوح وتحترم الموافقة. لا تستخدم المعلومات للتحرش أو انتحال الهوية أو استعمال صورة الغير أو صوته دون إذن أو إنتاج محتوى جنسي مخالف للقانون أو تجاوز حظر جغرافي."],
        ["الحقوق والمواقع المرتبطة","لا تعِد نشر النصوص والجداول والتصميم والصور الأصلية على نطاق واسع دون إذن. الحسابات والإنتاج والمشتريات والحذف في المواقع الخارجية تخضع لشروط مشغّليها."]
      ]
    }
  }
};
