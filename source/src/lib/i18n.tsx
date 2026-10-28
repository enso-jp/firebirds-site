import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { localeMeta, locales, type Locale } from "./locales";

type Dict = {
  navBranches: string;
  navStory: string;
  navCraft: string;
  navFind: string;
  eyebrow: string;
  headline1: string;
  headline2: string;
  heroBody: string;
  oldSoul: string;
  tropicalTitle: string;
  tropicalMeta: string;
  newRoad: string;
  craftTitle: string;
  craftMeta: string;
  menuKicker: string;
  menuTitle: string;
  menuLead: string;
  menuSearch: string;
  menuEmpty: string;
  menuVat: string;
  ingredients: string;
  storyLabel: string;
  glass: string;
  bottle: string;
  aboutKicker: string;
  aboutTitle: string;
  aboutLead: string;
  aboutBrothers: string;
  wanderers: string;
  house: string;
  made: string;
  invite: string;
  galleryKicker: string;
  galleryTitle: string;
  galleryLead: string;
  bookKicker: string;
  bookTitle: string;
  bookLead: string;
  bookLocation: string;
  bookDate: string;
  bookTime: string;
  bookSize: string;
  bookName: string;
  bookNote: string;
  bookNotePh: string;
  bookWa: string;
  bookCall: string;
  bookMsg: string;
  bookIg: string;
  bookConfirm: string;
  hours: string;
  directions: string;
  bookThis: string;
  visit: string;
  peak: string;
  peakBody: string;
  findDoor: string;
  tropicalFind: string;
  craftFind: string;
  tropicalStory: string;
  craftStory: string;
  tropicalKnown: string[];
  craftKnown: string[];
  roles: { name: string; role: string; note: string }[];
};

const copy: Record<Locale, Dict> = {
  en: {
    navBranches: "Two Branches",
    navStory: "Our Story",
    navCraft: "The Craft",
    navFind: "Find Your Firebirds",
    eyebrow: "We went far. We came home thirsty.",
    headline1: "One spirit.",
    headline2: "Two ways home.",
    heroBody:
      "Firebirds began with the things we missed while we were away: loud nights, honest drinks, the smell of rain on a hot road. That same spirit now lives in two very different rooms.",
    oldSoul: "The Old Soul · Sơn Trà",
    tropicalTitle: "Tropical Origin",
    tropicalMeta: "Tropical · Loose · Full of Stories",
    newRoad: "The New Road · Đà Nẵng",
    craftTitle: "Vietnam Craft Cocktail",
    craftMeta: "Vietnamese · Thoughtful · Close to the Bone",
    menuKicker: "The craft",
    menuTitle: "Forty-four pages, one list",
    menuLead: "Signatures, Lady Triệu, classics, spirits, wine, and Da Nang beer. Search or filter. Prices in '000 VND.",
    menuSearch: "Search a drink, spirit, or ingredient",
    menuEmpty: "Nothing matches. Try another word.",
    menuVat: "Prices in '000 VND, excluding 10% VAT and 5% service charge.",
    ingredients: "Build",
    storyLabel: "Note",
    glass: "glass",
    bottle: "bottle",
    aboutKicker: "October 2023",
    aboutTitle: "We went far. We came home thirsty.",
    aboutLead:
      "Award-winning head bartender Lucas came home to Da Nang after years in Dubai. He found Charles, Alain, and Victoria: martial arts brothers and sisters of 15+ years.",
    aboutBrothers: "They wanted a room they could return to every day.",
    wanderers: "Four international wanderers who love Vietnam stood with them.",
    house:
      "The bronze door, checkered tiles, wooden medicine cabinets, and the little garden come from the homes they grew up in.",
    made: "They built the bar counter, planted the trees, and still make every bitter and garnish in-house.",
    invite: "Order from the menu, or ask for a drink built to your mood.",
    galleryKicker: "The rooms",
    galleryTitle: "Collected, handmade, planted",
    galleryLead: "Photography from the Firebirds rooms. No placeholders.",
    bookKicker: "Find your Firebirds",
    bookTitle: "Come have a drink with us",
    bookLead: "Pick a room. We send WhatsApp, a call, Messenger, or Instagram with the details filled in.",
    bookLocation: "Which room?",
    bookDate: "Date",
    bookTime: "Time",
    bookSize: "Party size",
    bookName: "Your name",
    bookNote: "Note",
    bookNotePh: "Anniversary, class, quiet corner...",
    bookWa: "WhatsApp",
    bookCall: "Call",
    bookMsg: "Messenger",
    bookIg: "Instagram",
    bookConfirm: "We reply on the channel you choose. Walk-ins after 7:00 PM are welcome.",
    hours: "Daily 7:00 PM to 1:30 AM",
    directions: "Google Maps",
    bookThis: "Reserve this room",
    visit: "How to walk in",
    peak: "When the room wakes",
    peakBody:
      "Doors at 7:00 PM. The room warms by 8:30 PM. Busiest from 9:30 PM to 12:30 AM, Friday to Sunday. Book if you are more than four, want a class, or need a quiet corner.",
    findDoor: "The door",
    tropicalFind:
      "2D Mỹ Khê 7, Phước Mỹ, An Hải (Sơn Trà). A short walk from Mỹ Khê Beach. Look for the hidden bronze front door, not a glass shopfront. The garden patio comes first, then the checkered living room.",
    craftFind:
      "27/1 Thái Phiên, Phước Ninh, Hải Châu. Enter Alley 27 Thái Phiên, west of the Han River. Plus Code 367F+W5. Follow the alley, not a main-street neon.",
    tropicalStory:
      "The original beachside sanctuary. Tiki-meets-Vietnam, cocktail classes, private parties, and bartenders Lucas, Hung, and Bao. Peacock, golden pheasants, a steampunk-goggled iguana, Basquiat Bird on Money, a gramophone, and the neon Birds cage.",
    craftStory:
      "The city-center alley hideaway. Vietnamese botanicals, regional produce, and local craft spirits in a tighter downtown room. Same family. Closer to the bone.",
    tropicalKnown: [
      "Bartenders Lucas, Hung, and Bao",
      "Tiki-meets-Vietnam",
      "Cocktail-making classes",
      "Private parties",
      "Garden patio and string lights",
      "Vintage hunter living room",
    ],
    craftKnown: [
      "Vietnamese craft cocktails",
      "Regional botanicals",
      "Local craft spirits",
      "Intimate alley hideaway",
      "West of the Han River",
      "Alley 27 Thái Phiên",
    ],
    roles: [
      { name: "Lucas", role: "Head bartender", note: "Home from Dubai to build the bar he wished existed." },
      { name: "Charles", role: "Restaurateur", note: "Years of a home-cooked restaurant, ups and downs included." },
      { name: "Alain", role: "Returned from abroad", note: "Far from home for a long time, then back." },
      { name: "Victoria", role: "Finance", note: "Ready to slow down after the finance world." },
    ],
  },
  vn: {
    navBranches: "Hai chi nhánh",
    navStory: "Câu chuyện",
    navCraft: "Nghề",
    navFind: "Tìm Firebirds của bạn",
    eyebrow: "Chúng tôi đi xa. Về nhà vẫn khát.",
    headline1: "Một tinh thần.",
    headline2: "Hai đường về nhà.",
    heroBody:
      "Firebirds bắt đầu từ những thứ chúng tôi nhớ khi ở xa: đêm ồn, ly rượu thẳng thắn, mùi mưa trên đường nóng. Cùng một tinh thần, hai căn phòng rất khác.",
    oldSoul: "The Old Soul · Sơn Trà",
    tropicalTitle: "Tropical Origin",
    tropicalMeta: "Nhiệt đới · Thoáng · Đầy chuyện",
    newRoad: "The New Road · Đà Nẵng",
    craftTitle: "Vietnam Craft Cocktail",
    craftMeta: "Việt · Chỉn chu · Sát xương",
    menuKicker: "Nghề",
    menuTitle: "Bốn mươi tư trang, một danh sách",
    menuLead: "Signature, Lady Triệu, cổ điển, rượu mạnh, vang, bia Đà Nẵng. Giá tính theo '000 VND.",
    menuSearch: "Tìm đồ uống, rượu, hoặc nguyên liệu",
    menuEmpty: "Không khớp. Thử từ khác.",
    menuVat: "Giá '000 VND, chưa gồm 10% VAT và 5% phục vụ.",
    ingredients: "Pha",
    storyLabel: "Ghi chú",
    glass: "ly",
    bottle: "chai",
    aboutKicker: "Tháng 10 năm 2023",
    aboutTitle: "Chúng tôi đi xa. Về nhà vẫn khát.",
    aboutLead:
      "Lucas, bartender trưởng từng đoạt giải, về Đà Nẵng sau nhiều năm ở Dubai. Anh gặp Charles, Alain, và Victoria: anh chị em võ thuật hơn 15 năm.",
    aboutBrothers: "Họ muốn một nơi để trở về mỗi ngày.",
    wanderers: "Bốn người bạn quốc tế yêu Việt Nam đứng cùng họ.",
    house: "Cửa đồng, gạch caro, tủ thuốc gỗ, và khu vườn nhỏ lấy cảm hứng từ nhà thời thơ ấu.",
    made: "Họ đóng quầy bar, trồng cây, và vẫn tự làm bitter cùng garnish.",
    invite: "Gọi theo menu, hoặc kể mood để pha riêng.",
    galleryKicker: "Hai phòng",
    galleryTitle: "Nhặt, làm, trồng",
    galleryLead: "Ảnh thật từ Firebirds. Không hộp chữ cái giả.",
    bookKicker: "Tìm Firebirds của bạn",
    bookTitle: "Vào uống một ly",
    bookLead: "Chọn phòng. Chúng tôi gửi WhatsApp, điện thoại, Messenger, hoặc Instagram.",
    bookLocation: "Phòng nào?",
    bookDate: "Ngày",
    bookTime: "Giờ",
    bookSize: "Số người",
    bookName: "Tên",
    bookNote: "Ghi chú",
    bookNotePh: "Kỷ niệm, lớp cocktail, góc yên...",
    bookWa: "WhatsApp",
    bookCall: "Gọi",
    bookMsg: "Messenger",
    bookIg: "Instagram",
    bookConfirm: "Chúng tôi trả lời trên kênh bạn chọn. Vào cửa sau 19:00 vẫn được.",
    hours: "Mỗi ngày 19:00-01:30",
    directions: "Google Maps",
    bookThis: "Giữ chỗ phòng này",
    visit: "Cách bước vào",
    peak: "Khi phòng tỉnh dậy",
    peakBody:
      "Mở cửa 19:00. Ấm dần từ 20:30. Đông nhất 21:30-00:30, thứ Sáu đến Chủ nhật. Đặt bàn nếu hơn bốn người, muốn học pha, hoặc cần góc yên.",
    findDoor: "Cánh cửa",
    tropicalFind:
      "2D Mỹ Khê 7, Phước Mỹ, An Hải (Sơn Trà). Đi bộ từ biển Mỹ Khê. Tìm cửa đồng, không phải mặt kính. Vườn trước, phòng khách gạch caro sau.",
    craftFind:
      "27/1 Thái Phiên, Phước Ninh, Hải Châu. Vào hẻm 27 Thái Phiên, phía tây sông Hàn. Plus Code 367F+W5. Theo hẻm, đừng tìm neon mặt phố.",
    tropicalStory:
      "Gốc biển. Tiki gặp Việt Nam, lớp cocktail, tiệc riêng, bartender Lucas, Hưng, và Bảo.",
    craftStory:
      "Hẻm trung tâm. Thảo mộc Việt, rượu thủ công địa phương, phòng nhỏ sát xương. Cùng một nhà.",
    tropicalKnown: [
      "Bartender Lucas, Hưng, Bảo",
      "Tiki gặp Việt Nam",
      "Lớp pha chế",
      "Tiệc riêng",
      "Vườn và đèn dây",
      "Phòng khách hunter",
    ],
    craftKnown: [
      "Cocktail thủ công Việt",
      "Thảo mộc vùng miền",
      "Rượu thủ công địa phương",
      "Hẻm nhỏ",
      "Tây sông Hàn",
      "Hẻm 27 Thái Phiên",
    ],
    roles: [
      { name: "Lucas", role: "Bartender trưởng", note: "Về từ Dubai để mở quán mình từng ước." },
      { name: "Charles", role: "Nhà hàng", note: "Nhiều năm quán cơm nhà, lên xuống đủ cả." },
      { name: "Alain", role: "Về nước", note: "Xa nhà lâu, rồi trở lại." },
      { name: "Victoria", role: "Tài chính", note: "Muốn chậm lại sau ngành tài chính." },
    ],
  },
  ja: {
    navBranches: "ふたつの店",
    navStory: "ストーリー",
    navCraft: "クラフト",
    navFind: "あなたのFirebirds",
    eyebrow: "遠くへ行った。渇いて帰ってきた。",
    headline1: "ひとつの精神。",
    headline2: "ふたつの帰り道。",
    heroBody:
      "Firebirdsは、離れていたときに恋しかったものから始まった。騒がしい夜、正直な一杯、熱い道路の雨の匂い。同じ精神が、まったく違う二つの部屋にいる。",
    oldSoul: "The Old Soul · ソンチャー",
    tropicalTitle: "Tropical Origin",
    tropicalMeta: "トロピカル · ゆるい · 物語だらけ",
    newRoad: "The New Road · ダナン",
    craftTitle: "Vietnam Craft Cocktail",
    craftMeta: "ベトナム · 丁寧 · 骨の際まで",
    menuKicker: "クラフト",
    menuTitle: "44ページ、ひとつのリスト",
    menuLead: "シグネチャー、レディー・チエウ、クラシック、スピリッツ、ワイン、ダナンのビール。価格は1,000VND単位。",
    menuSearch: "ドリンク、スピリッツ、材料で検索",
    menuEmpty: "該当なし。",
    menuVat: "価格は1,000VND単位。10% VATと5% サービス料は別。",
    ingredients: "材料",
    storyLabel: "メモ",
    glass: "グラス",
    bottle: "ボトル",
    aboutKicker: "2023年10月",
    aboutTitle: "遠くへ行った。渇いて帰ってきた。",
    aboutLead:
      "受賞歴のあるLucasはドバイのあとダナンに帰った。15年以上の武術の兄弟、Charles、Alain、Victoriaと再会した。",
    aboutBrothers: "毎日戻れる部屋が欲しかった。",
    wanderers: "ベトナムを愛する四人の旅人も一緒だった。",
    house: "ブロンズの扉、チェックのタイル、薬箪笥、小さな庭。育った家の記憶。",
    made: "カウンターを作り、木を植え、ビターもガーニッシュも店で作る。",
    invite: "メニューでも、気分に合わせた一杯でも。",
    galleryKicker: "部屋",
    galleryTitle: "集め、作り、植えた",
    galleryLead: "本番の写真だけ。",
    bookKicker: "あなたのFirebirds",
    bookTitle: "一杯、どうぞ",
    bookLead: "部屋を選ぶ。WhatsApp、電話、Messenger、Instagramに内容を載せる。",
    bookLocation: "どの部屋？",
    bookDate: "日付",
    bookTime: "時間",
    bookSize: "人数",
    bookName: "名前",
    bookNote: "メモ",
    bookNotePh: "記念日、教室、静かな席...",
    bookWa: "WhatsApp",
    bookCall: "電話",
    bookMsg: "Messenger",
    bookIg: "Instagram",
    bookConfirm: "選んだチャネルで返信。19:00以降の飛び込みも歓迎。",
    hours: "毎日 19:00-01:30",
    directions: "Googleマップ",
    bookThis: "この部屋を予約",
    visit: "入り方",
    peak: "部屋が温まる時間",
    peakBody: "19:00開店。20:30から温まる。21:30-00:30がいちばん忙しい。4名以上、教室、静かな席は予約を。",
    findDoor: "扉",
    tropicalFind: "2D Mỹ Khê 7、ソンチャー。ミーケビーチから徒歩。ガラス店ではなくブロンズの扉。庭のあと、チェックの居間。",
    craftFind: "27/1 Thái Phiên、ハイチャウ。路地27へ。Plus Code 367F+W5。大通りのネオンではない。",
    tropicalStory: "海辺の元祖。ティキとベトナム、教室、パーティー。Lucas、Hung、Bao。",
    craftStory: "街中の路地。ベトナムのボタニカルと地スピリッツ。同じ家族。骨の際まで。",
    tropicalKnown: ["Lucas、Hung、Bao", "ティキ×ベトナム", "教室", "パーティー", "庭", "狩猟家の居間"],
    craftKnown: ["ベトナムクラフト", "地方のボタニカル", "地スピリッツ", "路地の隠れ家", "ハン川の西", "タイフィエン27"],
    roles: [
      { name: "Lucas", role: "ヘッドバーテンダー", note: "ドバイから戻り、欲しかったバーを作った。" },
      { name: "Charles", role: "レストラン", note: "家庭料理の店を、浮き沈みの中で。" },
      { name: "Alain", role: "帰国", note: "長く海外にいて、戻った。" },
      { name: "Victoria", role: "ファイナンス", note: "金融のあと、速度を落としたかった。" },
    ],
  },
  ko: {
    navBranches: "두 개의 가지",
    navStory: "우리 이야기",
    navCraft: "크래프트",
    navFind: "당신의 Firebirds",
    eyebrow: "멀리 갔다. 목말라 돌아왔다.",
    headline1: "하나의 정신.",
    headline2: "두 갈래 집.",
    heroBody:
      "Firebirds는 멀리 있을 때 그리운 것에서 시작됐다. 시끄러운 밤, 정직한 한 잔, 뜨거운 길에 내리는 비 냄새. 같은 정신이 아주 다른 두 방에 산다.",
    oldSoul: "The Old Soul · 선짜",
    tropicalTitle: "Tropical Origin",
    tropicalMeta: "열대 · 느슨함 · 이야기로 가득",
    newRoad: "The New Road · 다낭",
    craftTitle: "Vietnam Craft Cocktail",
    craftMeta: "베트남답고 · 사려 깊고 · 뼈에 가깝게",
    menuKicker: "크래프트",
    menuTitle: "마흔네 쪽, 하나의 리스트",
    menuLead: "시그니처, 레이디 찌에우, 클래식, 스피릿, 와인, 다낭 맥주. 가격은 1,000VND 단위.",
    menuSearch: "칵테일, 스피릿, 재료 검색",
    menuEmpty: "맞는 항목이 없습니다.",
    menuVat: "1,000VND 단위. 10% VAT와 5% 서비스 별도.",
    ingredients: "재료",
    storyLabel: "노트",
    glass: "잔",
    bottle: "보틀",
    aboutKicker: "2023년 10월",
    aboutTitle: "멀리 갔다. 목말라 돌아왔다.",
    aboutLead:
      "수상 경력의 Lucas는 두바이 이후 다낭으로 돌아왔다. 15년 넘게 무술을 함께한 Charles, Alain, Victoria를 만났다.",
    aboutBrothers: "매일 돌아올 방이 필요했다.",
    wanderers: "베트남을 사랑하는 네 명의 여행자도 함께했다.",
    house: "브론즈 문, 체크 타일, 나무 약장, 작은 정원. 자란 집의 기억.",
    made: "바 카운터를 만들고, 나무를 심고, 비터와 가니시는 여전히 직접 만든다.",
    invite: "메뉴에서 고르거나, 기분에 맞춰 부탁하세요.",
    galleryKicker: "방들",
    galleryTitle: "모으고, 만들고, 심다",
    galleryLead: "실제 사진만.",
    bookKicker: "당신의 Firebirds",
    bookTitle: "한잔하러 오세요",
    bookLead: "방을 고르면 WhatsApp, 전화, Messenger, Instagram으로 내용이 채워집니다.",
    bookLocation: "어느 방?",
    bookDate: "날짜",
    bookTime: "시간",
    bookSize: "인원",
    bookName: "이름",
    bookNote: "메모",
    bookNotePh: "기념일, 클래스, 조용한 자리...",
    bookWa: "WhatsApp",
    bookCall: "전화",
    bookMsg: "Messenger",
    bookIg: "Instagram",
    bookConfirm: "고른 채널로 답합니다. 오후 7시 이후 워크인도 환영합니다.",
    hours: "매일 오후 7시-오전 1시 30분",
    directions: "Google 지도",
    bookThis: "이 방 예약",
    visit: "들어가는 법",
    peak: "방이 깨어나는 시간",
    peakBody: "오후 7시 오픈. 8시 30분부터 살아납니다. 9시 30분-12시 30분이 가장 붐빕니다. 4명 이상, 클래스, 조용한 자리는 예약하세요.",
    findDoor: "문",
    tropicalFind: "2D Mỹ Khê 7, 선짜. 미케 해변에서 걸어갑니다. 유리 쇼윈도가 아니라 브론즈 문. 정원 다음 체크 거실.",
    craftFind: "27/1 Thái Phiên, 하이쩌우. 골목 27. Plus Code 367F+W5. 큰길 네온이 아닙니다.",
    tropicalStory: "해변의 원점. 티키와 베트남, 클래스, 파티. Lucas, Hung, Bao.",
    craftStory: "도심 골목. 베트남 보태니컬과 로컬 스피릿. 같은 가족. 뼈에 가깝게.",
    tropicalKnown: ["Lucas, Hung, Bao", "티키와 베트남", "클래스", "파티", "정원", "헌터 거실"],
    craftKnown: ["베트남 크래프트", "지역 보태니컬", "로컬 스피릿", "골목 아지트", "한강 서쪽", "타이피엔 27"],
    roles: [
      { name: "Lucas", role: "헤드 바텐더", note: "두바이에서 돌아와 바랐던 바를 만들었습니다." },
      { name: "Charles", role: "레스토랑", note: "집밥 식당을 오래 키웠습니다." },
      { name: "Alain", role: "귀국", note: "오래 외국에 있다 돌아왔습니다." },
      { name: "Victoria", role: "금융", note: "금융 다음, 속도를 낮추고 싶었습니다." },
    ],
  },
};

const LanguageContext = createContext<{
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dict;
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: copy[locale],
    }),
    [locale],
  );
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useI18n");
  return ctx;
}

export { localeMeta, locales };
