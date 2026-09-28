// Locale routing is activated only after every alternate route exists and passes QA.
export const locales = [
  { slug: "ja", lang: "ja", label: "日本語" },
  { slug: "ko", lang: "ko", label: "한국어" },
  { slug: "zh-hant", lang: "zh-Hant", label: "繁體中文" },
  { slug: "es", lang: "es", label: "Español" },
  { slug: "pt-br", lang: "pt-BR", label: "Português (Brasil)" },
  { slug: "ru", lang: "ru", label: "Русский" },
  { slug: "de", lang: "de", label: "Deutsch" },
  { slug: "fr", lang: "fr", label: "Français" },
  { slug: "ar", lang: "ar", label: "العربية" },
] as const;

export type Locale = typeof locales[number]["slug"];
export const comparisons = [
  { key: "character-ai", name: "Character.AI", slug: "yolloai-vs-character-ai" },
  { key: "janitor-ai", name: "Janitor AI", slug: "yolloai-vs-janitor-ai" },
  { key: "spicychat-ai", name: "SpicyChat AI", slug: "yolloai-vs-spicychat-ai" },
  { key: "crushon-ai", name: "CrushOn AI", slug: "yolloai-vs-crushon-ai" },
  { key: "candy-ai", name: "Candy AI", slug: "yolloai-vs-candy-ai" },
] as const;
export type ComparisonKey = typeof comparisons[number]["key"];
export type InfoPageKey = "about" | "contact" | "editorial-policy" | "privacy" | "terms";
export const infoPageKeys: InfoPageKey[] = ["about", "contact", "editorial-policy", "privacy", "terms"];
export const routeFor = (locale: Locale | "", page = "") =>
  `${locale ? `/${locale}` : ""}/${page ? `${page.replace(/^\/+|\/+$/g, "")}/` : ""}`;
export const languageAlternates = (pathname: string) => {
  const englishPath = pathname.replace(/^\/(?:ja|ko|zh-hant|es|pt-br|ru|de|fr|ar)(?=\/)/, "") || "/";
  return [{ lang: "en", href: englishPath }, ...locales.map((entry) => ({ lang: entry.lang, href: `/${entry.slug}${englishPath}` }))];
};

export interface UiText {
  language: string; home: string; workflow: string; features: string; compare: string; blog: string;
  about: string; contact: string; editorial: string; privacy: string; terms: string;
  official: string; read: string; sources: string; questions: string; allArticles: string;
  independent: string; priceNote: string; regionNote: string;
  analyticsSettings: string; analyticsTitle: string; analyticsBody: string;
  analyticsDecline: string; analyticsAccept: string; analyticsPrivacy: string;
}

export const ui: Record<Locale, UiText> = {
  ja: {
    language:"言語", home:"ホーム", workflow:"使い方", features:"機能", compare:"比較", blog:"比較記事",
    about:"サイトについて", contact:"連絡先", editorial:"編集方針", privacy:"プライバシー", terms:"利用条件",
    official:"Yollo AI 公式サイト", read:"比較を読む", sources:"公式資料", questions:"よくある質問", allArticles:"五つの比較記事",
    independent:"当サイトは独立した編集サイトで、Yollo AI の運営元ではありません。",
    priceNote:"無料・登録不要という宣伝と有料プランを認める規約は分けて読み、現行の購入画面で条件を確認してください。",
    regionNote:"公式規約は中国本土と香港の居住者・滞在者による利用を禁止しています。",
    analyticsSettings:"アクセス解析の設定", analyticsTitle:"任意のアクセス解析", analyticsBody:"記事改善のため Google Analytics を使用してもよいですか。広告追跡はしません。",
    analyticsDecline:"許可しない", analyticsAccept:"解析を許可", analyticsPrivacy:"プライバシーの詳細"
  },
  ko: {
    language:"언어", home:"홈", workflow:"이용 흐름", features:"기능", compare:"비교", blog:"비교 글",
    about:"사이트 소개", contact:"연락처", editorial:"편집 원칙", privacy:"개인정보", terms:"이용 조건",
    official:"Yollo AI 공식 사이트", read:"비교 읽기", sources:"공식 자료", questions:"자주 묻는 질문", allArticles:"다섯 가지 비교 글",
    independent:"이곳은 독립 편집 사이트이며 Yollo AI 운영사가 아닙니다.",
    priceNote:"무료·가입 불필요라는 홍보 문구와 유료 구독을 허용하는 약관을 구분하고 현재 결제 화면을 확인하세요.",
    regionNote:"공식 약관은 중국 본토 및 홍콩 거주자나 체류자의 이용을 금지합니다.",
    analyticsSettings:"방문 분석 설정", analyticsTitle:"선택적 방문 분석", analyticsBody:"글을 개선하기 위해 Google Analytics를 사용해도 될까요? 광고 추적은 하지 않습니다.",
    analyticsDecline:"동의하지 않음", analyticsAccept:"분석 허용", analyticsPrivacy:"개인정보 안내"
  },
  "zh-hant": {
    language:"語言", home:"首頁", workflow:"使用流程", features:"功能", compare:"比較", blog:"比較文章",
    about:"關於本站", contact:"聯絡方式", editorial:"編輯政策", privacy:"隱私", terms:"使用條款",
    official:"Yollo AI 官方網站", read:"閱讀比較", sources:"官方資料", questions:"常見問題", allArticles:"五篇比較文章",
    independent:"本站為獨立編輯網站，並非 Yollo AI 營運方。",
    priceNote:"宣傳頁稱免費、免註冊，但條款允許付費訂閱及按使用收費；請以當前結帳畫面為準。",
    regionNote:"官方條款禁止位於或居住於中國大陸及香港的人士使用；請勿繞過限制。",
    analyticsSettings:"流量分析設定", analyticsTitle:"選擇性流量分析", analyticsBody:"是否允許 Google Analytics 協助改善本站文章？本站不做廣告追蹤。",
    analyticsDecline:"不同意", analyticsAccept:"允許分析", analyticsPrivacy:"隱私詳情"
  },
  es: {
    language:"Idioma", home:"Inicio", workflow:"Cómo funciona", features:"Funciones", compare:"Comparar", blog:"Comparativas",
    about:"Acerca de", contact:"Contacto", editorial:"Política editorial", privacy:"Privacidad", terms:"Condiciones",
    official:"Sitio oficial de Yollo AI", read:"Leer comparativa", sources:"Fuentes oficiales", questions:"Preguntas frecuentes", allArticles:"Cinco comparativas",
    independent:"Somos una publicación independiente; no operamos Yollo AI.",
    priceNote:"La publicidad habla de acceso gratis y sin registro, pero las condiciones contemplan suscripciones y cargos por uso. Comprueba el precio al pagar.",
    regionNote:"Las condiciones oficiales excluyen a quienes viven o se encuentran en China continental y Hong Kong.",
    analyticsSettings:"Preferencias de analítica", analyticsTitle:"Analítica opcional", analyticsBody:"¿Nos permites usar Google Analytics para mejorar los artículos? Sin seguimiento publicitario.",
    analyticsDecline:"No, gracias", analyticsAccept:"Permitir analítica", analyticsPrivacy:"Detalles de privacidad"
  },
  "pt-br": {
    language:"Idioma", home:"Início", workflow:"Como funciona", features:"Recursos", compare:"Comparar", blog:"Comparações",
    about:"Sobre", contact:"Contato", editorial:"Política editorial", privacy:"Privacidade", terms:"Termos",
    official:"Site oficial do Yollo AI", read:"Ler comparação", sources:"Fontes oficiais", questions:"Perguntas frequentes", allArticles:"Cinco comparações",
    independent:"Publicação independente; não operamos o Yollo AI.",
    priceNote:"A divulgação promete acesso grátis e sem cadastro, mas os termos preveem assinaturas e cobranças por uso. Confira o valor no pagamento.",
    regionNote:"Os termos oficiais proíbem o uso por quem mora ou está na China continental ou em Hong Kong.",
    analyticsSettings:"Preferências de análise", analyticsTitle:"Análise opcional", analyticsBody:"Podemos usar o Google Analytics para melhorar os artigos? Sem rastreamento publicitário.",
    analyticsDecline:"Não, obrigado", analyticsAccept:"Permitir análise", analyticsPrivacy:"Detalhes de privacidade"
  },
  ru: {
    language:"Язык", home:"Главная", workflow:"Как работает", features:"Возможности", compare:"Сравнение", blog:"Статьи",
    about:"О проекте", contact:"Контакты", editorial:"Редакционная политика", privacy:"Конфиденциальность", terms:"Условия",
    official:"Официальный сайт Yollo AI", read:"Читать сравнение", sources:"Первоисточники", questions:"Частые вопросы", allArticles:"Пять сравнений",
    independent:"Мы — независимая редакция и не управляем Yollo AI.",
    priceNote:"Реклама обещает бесплатный доступ без регистрации, но условия допускают подписки и плату за использование. Сверяйте цену при оплате.",
    regionNote:"Официальные условия запрещают пользоваться сервисом проживающим или находящимся в материковом Китае и Гонконге.",
    analyticsSettings:"Настройки аналитики", analyticsTitle:"Необязательная аналитика", analyticsBody:"Разрешите Google Analytics для улучшения статей? Без рекламного отслеживания.",
    analyticsDecline:"Нет, спасибо", analyticsAccept:"Разрешить аналитику", analyticsPrivacy:"О конфиденциальности"
  },
  de: {
    language:"Sprache", home:"Startseite", workflow:"Ablauf", features:"Funktionen", compare:"Vergleich", blog:"Vergleiche",
    about:"Über uns", contact:"Kontakt", editorial:"Redaktionsgrundsätze", privacy:"Datenschutz", terms:"Nutzungsbedingungen",
    official:"Offizielle Yollo-AI-Website", read:"Vergleich lesen", sources:"Primärquellen", questions:"Häufige Fragen", allArticles:"Fünf Vergleiche",
    independent:"Unabhängige Redaktion; wir betreiben Yollo AI nicht.",
    priceNote:"Die Werbung verspricht kostenlose Nutzung ohne Anmeldung, die AGB erlauben Abos und nutzungsabhängige Gebühren. Prüfen Sie den aktuellen Bezahlvorgang.",
    regionNote:"Laut offiziellen AGB ist die Nutzung für Personen mit Aufenthalt oder Wohnsitz in Festlandchina oder Hongkong untersagt.",
    analyticsSettings:"Analyse-Einstellungen", analyticsTitle:"Optionale Analyse", analyticsBody:"Dürfen wir Google Analytics zur Verbesserung der Artikel nutzen? Keine Werbeverfolgung.",
    analyticsDecline:"Nein, danke", analyticsAccept:"Analyse erlauben", analyticsPrivacy:"Datenschutzdetails"
  },
  fr: {
    language:"Langue", home:"Accueil", workflow:"Parcours", features:"Fonctions", compare:"Comparer", blog:"Comparatifs",
    about:"À propos", contact:"Contact", editorial:"Politique éditoriale", privacy:"Confidentialité", terms:"Conditions",
    official:"Site officiel de Yollo AI", read:"Lire le comparatif", sources:"Sources officielles", questions:"Questions fréquentes", allArticles:"Cinq comparatifs",
    independent:"Publication indépendante ; nous n'exploitons pas Yollo AI.",
    priceNote:"La publicité promet un accès gratuit sans inscription, mais les conditions prévoient abonnements et frais d'utilisation. Vérifiez le paiement actuel.",
    regionNote:"Les conditions officielles excluent les personnes qui résident ou se trouvent en Chine continentale ou à Hong Kong.",
    analyticsSettings:"Préférences d'analyse", analyticsTitle:"Mesure d'audience facultative", analyticsBody:"Autorisez-vous Google Analytics pour améliorer les articles ? Aucun suivi publicitaire.",
    analyticsDecline:"Non merci", analyticsAccept:"Autoriser l'analyse", analyticsPrivacy:"Détails de confidentialité"
  },
  ar: {
    language:"اللغة", home:"الرئيسية", workflow:"طريقة الاستخدام", features:"الميزات", compare:"المقارنة", blog:"مقالات المقارنة",
    about:"حول الموقع", contact:"التواصل", editorial:"السياسة التحريرية", privacy:"الخصوصية", terms:"شروط الاستخدام",
    official:"موقع Yollo AI الرسمي", read:"اقرأ المقارنة", sources:"المصادر الأصلية", questions:"أسئلة شائعة", allArticles:"المقارنات الخمس",
    independent:"موقع تحريري مستقل؛ لسنا مشغّلي Yollo AI.",
    priceNote:"تروّج الصفحة لخدمة مجانية بلا تسجيل، لكن الشروط تسمح بالاشتراكات والرسوم بحسب الاستخدام. تحقق من شاشة الدفع الحالية.",
    regionNote:"تمنع الشروط الرسمية استخدام الخدمة لمن يقيم في البرّ الصيني أو هونغ كونغ أو يوجد فيهما.",
    analyticsSettings:"إعدادات التحليلات", analyticsTitle:"تحليلات اختيارية", analyticsBody:"هل تسمح باستخدام Google Analytics لتحسين المقالات؟ لا نستخدم تتبعاً إعلانياً.",
    analyticsDecline:"لا، شكراً", analyticsAccept:"السماح بالتحليلات", analyticsPrivacy:"تفاصيل الخصوصية"
  },
};
