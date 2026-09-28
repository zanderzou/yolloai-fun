import type { Locale } from "./locales";

export interface BlogCopy {
  title: string;
  description: string;
  lead: string;
  methodTitle: string;
  method: string;
  scoreTitle: string;
  score: string;
}

export const localizedBlog: Record<Locale, BlogCopy> = {
  ja: {
    title:"Yollo AI 比較記事", description:"Yollo AI と五つの代替サービスを、対話の継続性、人物作成、画像・短編動画、プライバシー、実際の費用で比較します。",
    lead:"五つの記事は同じ製品名を入れ替えたものではありません。会話と世界づくり、参加型物語、ロアブック、共有世界、音声を伴うコンパニオンという別々の選択を扱います。",
    methodTitle:"比較の読み方", method:"まず自分が続けたい作業を一つ決め、同じ架空の成人設定を各サービスで試してください。公開されている機能や料金は変更され得るため、記事にある一次資料と現在の公式画面を必ず見比べます。",
    scoreTitle:"『勝者』より役立つ記録", score:"会話の記憶、人物の一貫性、画像と動画の再現性、再試行の回数、公開範囲、実際の支出を別々に控えると、自分に合うサービスが見えてきます。未実施のテストを当サイトの実測として扱いません。"
  },
  ko: {
    title:"Yollo AI 비교 글", description:"Yollo AI를 다섯 서비스와 비교하며 대화 연속성, 캐릭터 제작, 이미지·짧은 영상, 개인정보와 실제 비용을 따집니다.",
    lead:"다섯 글은 제품명만 바꾼 복사본이 아닙니다. 세계 설정, 참여형 이야기, 로어북, 공유 세계, 음성을 포함한 동반자 경험이라는 서로 다른 선택을 다룹니다.",
    methodTitle:"비교 글을 읽는 순서", method:"먼저 반복해서 할 작업 하나를 정하고 동일한 가상의 성인 설정을 각 서비스에 넣어 보세요. 기능과 가격은 바뀔 수 있으니 글에 연결된 공식 자료와 현재 화면을 함께 확인해야 합니다.",
    scoreTitle:"단일 우승자보다 중요한 기록", score:"대화의 기억, 인물 일관성, 이미지·영상 재현, 재시도 횟수, 공개 범위와 실제 지출을 따로 적으세요. 이 사이트는 직접 하지 않은 테스트를 측정 결과처럼 꾸미지 않습니다."
  },
  "zh-hant": {
    title:"Yollo AI 比較文章", description:"以對話延續、角色建立、圖片與短影片、隱私和實際花費，比較 Yollo AI 與五個替代產品。",
    lead:"五篇文章不是替換產品名稱的範本：對話與世界觀、互動故事、Lorebook、共享世界，以及結合語音的陪伴角色，各自需要不同評估方式。",
    methodTitle:"如何使用比較文章", method:"先確定自己會反覆進行的工作，再以同一位虛構成年角色測試不同服務。功能與收費會變動，文章的一手來源和目前官方畫面都要核對。",
    scoreTitle:"比單一冠軍更有用的紀錄", score:"分別記下記憶、角色連貫度、圖片與影片的再現、重試、公開權限及實際支出。本站不會把未實際執行的測試寫成實測結論。"
  },
  es: {
    title:"Comparativas de Yollo AI", description:"Cinco comparativas de Yollo AI sobre continuidad del chat, creación de personajes, imágenes, vídeos breves, privacidad y coste real.",
    lead:"No son cinco copias con otro nombre: mundos de conversación, ficción interactiva, lorebooks, universos compartidos y un acompañante con voz plantean decisiones distintas.",
    methodTitle:"Cómo usar estas comparativas", method:"Elige primero la tarea que repetirías de verdad. Prueba con el mismo personaje ficticio adulto y contrasta las fuentes primarias del artículo con la pantalla oficial vigente: funciones y tarifas cambian.",
    scoreTitle:"Una ficha útil en lugar de un ganador universal", score:"Anota por separado recuerdo de datos, coherencia del personaje, imágenes y vídeo aprovechables, intentos, visibilidad y gasto. No presentamos un protocolo sugerido como si fueran resultados medidos por nosotros."
  },
  "pt-br": {
    title:"Comparações do Yollo AI", description:"Cinco comparações do Yollo AI sobre continuidade da conversa, criação de personagens, imagens, vídeos curtos, privacidade e custo real.",
    lead:"Os textos não trocam apenas nomes: mundos conversacionais, ficção interativa, lorebooks, universos compartilhados e um acompanhante com voz são decisões diferentes.",
    methodTitle:"Como aproveitar as comparações", method:"Defina primeiro a tarefa que você faria toda semana. Use o mesmo personagem fictício adulto e confira as fontes primárias junto com a tela oficial de hoje: recursos e preços mudam.",
    scoreTitle:"Um registro vale mais que um vencedor geral", score:"Anote memória, coerência do personagem, imagem e vídeo utilizáveis, tentativas, visibilidade e gastos separadamente. Não apresentamos um método recomendado como se fosse um resultado medido por nós."
  },
  ru: {
    title:"Сравнения Yollo AI", description:"Пять сравнений Yollo AI по памяти разговора, созданию персонажей, изображениям, коротким видео, приватности и реальным расходам.",
    lead:"Это не пять копий с разными названиями: миры для диалога, интерактивные истории, лорбуки, общие вселенные и компаньон с голосом требуют отдельных критериев.",
    methodTitle:"Как читать сравнения", method:"Сначала определите задачу, которую будете выполнять регулярно. Используйте одного вымышленного совершеннолетнего героя и сверяйте первоисточники статьи с действующим экраном продукта: возможности и цены меняются.",
    scoreTitle:"Записи полезнее универсального победителя", score:"Отдельно оцените воспоминание деталей, стабильность героя, пригодность кадров и видео, повторы, публичность и итоговые траты. Мы не выдаём предложенную методику за собственный эксперимент."
  },
  de: {
    title:"Yollo AI im Vergleich", description:"Fünf Yollo-AI-Vergleiche zu Gesprächskontinuität, Figurenbau, Bildern, Kurzvideos, Datenschutz und tatsächlichen Kosten.",
    lead:"Die Artikel tauschen nicht bloß Produktnamen aus: Dialogwelten, interaktive Geschichten, Lorebooks, gemeinsame Universen und eine Begleitfigur mit Stimme verlangen unterschiedliche Fragen.",
    methodTitle:"So nutzen Sie die Vergleiche", method:"Benennen Sie zuerst die Aufgabe, die Sie regelmäßig erledigen möchten. Verwenden Sie dieselbe fiktive erwachsene Figur und prüfen Sie Primärquellen sowie die aktuelle Anbieteroberfläche, da Funktionen und Preise wechseln.",
    scoreTitle:"Ein Protokoll statt eines Siegers für alle", score:"Halten Sie Erinnerung, Figurenkonsistenz, brauchbare Bilder und Videos, Wiederholungen, Sichtbarkeit und reale Ausgaben getrennt fest. Wir geben eine empfohlene Testmethode nicht als selbst erzieltes Resultat aus."
  },
  fr: {
    title:"Comparatifs Yollo AI", description:"Cinq comparatifs Yollo AI sur la continuité du dialogue, la création de personnages, les images, les courtes vidéos, la confidentialité et le coût réel.",
    lead:"Il ne s'agit pas de cinq copies avec un nom différent : univers dialogués, fiction interactive, lorebooks, mondes partagés et compagnon avec voix posent des questions distinctes.",
    methodTitle:"Bien lire ces comparatifs", method:"Déterminez d'abord la tâche que vous comptez répéter. Utilisez le même personnage fictif adulte et confrontez les sources primaires aux écrans actuels des fournisseurs : fonctions et tarifs évoluent.",
    scoreTitle:"Un carnet de notes plutôt qu'un vainqueur absolu", score:"Notez séparément rappel des détails, cohérence du personnage, images et vidéos utilisables, relances, visibilité et dépenses. Nous ne présentons pas une méthode conseillée comme un essai que nous aurions réalisé."
  },
  ar: {
    title:"مقارنات Yollo AI", description:"خمس مقارنات لـ Yollo AI في استمرارية الحوار وإنشاء الشخصيات والصور والفيديو القصير والخصوصية والكلفة الفعلية.",
    lead:"ليست هذه خمس نسخ يتغير فيها الاسم فقط؛ فالعوالم الحوارية والقصص التفاعلية ودفاتر التفاصيل والعوالم المشتركة والمرافق الصوتي تتطلب معايير مختلفة.",
    methodTitle:"كيف تستفيد من المقارنات", method:"حدّد المهمة التي ستكررها فعلاً، ثم جرّب الشخصية الخيالية البالغة نفسها في الخدمات المختلفة. راجع المصادر الأصلية والشاشات الرسمية الحالية لأن الميزات والأسعار تتغير.",
    scoreTitle:"سجلّ واضح أفضل من فائز مطلق", score:"قيّم استرجاع التفاصيل وثبات الشخصية وجودة الصور والفيديو القابلة للاستعمال وإعادة المحاولة والظهور للآخرين والمصروف كلّاً على حدة. لا نقدّم طريقة اختبار مقترحة بوصفها تجربة أجريناها."
  }
};
