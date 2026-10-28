import type { Localized } from "./locales";

export type MenuCategory =
  | "signature"
  | "lady-trieu"
  | "classics"
  | "spirits"
  | "wine-beer";

export type MenuItem = {
  id: string;
  name: string;
  price: number;
  glassPrice?: number;
  bottlePrice?: number;
  category: MenuCategory;
  subcategory?: string;
  ingredients: string[];
  highlight?: Localized;
  story?: Localized;
};

export const categories: { id: MenuCategory | "all"; label: Localized }[] = [
  { id: "all", label: { en: "All", vn: "Tất cả", ja: "すべて", ko: "전체" } },
  { id: "signature", label: { en: "Signatures", vn: "Đặc trưng", ja: "シグネチャー", ko: "시그니처" } },
  { id: "lady-trieu", label: { en: "Lady Trieu", vn: "Lady Triệu", ja: "レディー・チエウ", ko: "레이디 찌에우" } },
  { id: "classics", label: { en: "Classics", vn: "Cổ điển", ja: "クラシック", ko: "클래식" } },
  { id: "spirits", label: { en: "Spirits", vn: "Rượu mạnh", ja: "スピリッツ", ko: "스피릿" } },
  { id: "wine-beer", label: { en: "Wine & Beer", vn: "Rượu vang và bia", ja: "ワインとビール", ko: "와인과 맥주" } },
];

export const menuItems: MenuItem[] = [
  {
    id: "newton-say-do",
    name: "NEWTON SAY \"DÔ\"",
    price: 229,
    category: "signature",
    ingredients: ["Pisco", "Granny Apple Cordial", "Absinthe 69", "Peychaud's Bitter", "Lime", "Floral Fizzy"],
    highlight: {
      en: "Gravity meets the Vietnamese toast Dô.",
      ja: "引力とベトナムの乾杯「ゾー」が出会う一杯。",
      ko: "중력과 베트남 건배 \"조\"가 만나는 한 잔.",
    },
    story: {
      en: "Inspired by gravity and the Vietnamese toast Dô. Bright apple, anise, and a floral fizz.",
      ja: "ニュートンと乾杯の掛け合わせ。リンゴ、アニス、フローラルな泡。",
      ko: "뉴턴과 건배의 만남. 사과, 아니스, 플로럴 피즈.",
    },
  },
  {
    id: "el-camino",
    name: "EL CAMINO",
    price: 229,
    category: "signature",
    ingredients: ["Lunazul Blanco", "Mezcal", "Ancho Reyes", "Raspberry Shrub", "Pink Ginger & Grapefruit", "Capsicum"],
    highlight: {
      en: "Smoky, spicy transformation.",
      ja: "スモーキーでスパイシーな変容。",
      ko: "스모키하고 매콤한 변신.",
    },
    story: {
      en: "Inspired by Breaking Bad / El Camino. Agave, raspberry heat, and a pink ginger snap.",
      ja: "映画『エル・カミーノ』から。アガベ、ラズベリー、ピンクジンジャー。",
      ko: "브레이킹 배드 / 엘 카미노에서. 아가베, 라즈베리, 핑크 진저.",
    },
  },
  {
    id: "birds-out-of-cage",
    name: "BIRDS OUT OF CAGE",
    price: 229,
    category: "signature",
    ingredients: ["Bulleit Rye", "Disaronno", "Creme de Cassis", "Laphroaig 10", "Oloroso Sherry", "Lychee", "Banana"],
    highlight: {
      en: "Bold, smoky, tropical freedom.",
      ja: "大胆、スモーキー、トロピカルな自由。",
      ko: "대담하고 스모키한 열대의 자유.",
    },
    story: {
      en: "Rye and Islay smoke, then lychee and banana. Named for the neon Birds cage.",
      ja: "ライとアイラの煙にライチとバナナ。ネオンのBirdsケージへ。",
      ko: "라이와 아일라 스모크, 리치와 바나나. 네온 Birds 케이지에서 이름 붙임.",
    },
  },
  {
    id: "nay-wish",
    name: "N.A.Y WISH",
    price: 229,
    category: "signature",
    ingredients: ["Beefeater", "Granny Apple Cordial", "Herbal Liqueur", "Angostura", "Passion", "Rose", "Lime"],
    highlight: {
      en: "You do it. Floral, bright, playful magic.",
      ja: "「やってみろ」。フローラルで明るい遊び。",
      ko: "네가 해. 플로럴하고 밝은 장난.",
    },
    story: {
      en: "A gin wish with apple, passion fruit, rose, and a herbal wink.",
      ja: "ジンにリンゴ、パッション、ローズ、ハーブのウインク。",
      ko: "진에 사과, 패션프루트, 로즈, 허브의 윙크.",
    },
  },
  {
    id: "who-moved-my-cheese",
    name: "WHO MOVED MY CHEESE?",
    price: 229,
    category: "signature",
    ingredients: ["Tito's Handmade Vodka", "Melon", "Feta Goat Cheese", "Sherry", "Dry Vermouth", "Orange Bitter"],
    highlight: {
      en: "Savory-sweet tribute to adaptability.",
      ja: "変化に寄り添う、甘じょっぱい一杯。",
      ko: "변화에 바치는 달콤짭짤한 한 잔.",
    },
    story: {
      en: "Melon and feta, vodka and sherry. Unexpected, then obvious.",
      ja: "メロンとフェタ、ウォッカとシェリー。意外、そして納得。",
      ko: "멜론과 페타, 보드카와 셰리. 뜻밖이다가 당연해진다.",
    },
  },
  {
    id: "whys-the-rhum-gone",
    name: "\"WHY'S THE RHUM GONE?\"",
    price: 229,
    category: "signature",
    ingredients: ["Plantation O.D.", "Bumbu Original", "Caramel", "Ancho Reyes", "Averna Amaro", "Passion", "Pineapple", "Cilantro"],
    highlight: {
      en: "Tiki tribute to Captain Jack Sparrow.",
      ja: "ジャック・スパロウへのティキ・トリビュート。",
      ko: "잭 스패로우에게 바치는 티키 헌정.",
    },
    story: {
      en: "Overproof rum, passion, pineapple, cilantro. Why is the rhum gone? Because you finished it.",
      ja: "オーバープルーフ、パッション、パイナップル、パクチー。ラムは消えた、飲み干したから。",
      ko: "오버프루프, 패션, 파인애플, 고수. 럼이 사라진 이유: 당신이 비웠으니까.",
    },
  },
  {
    id: "follow-the-wind",
    name: "FOLLOW THE WIND",
    price: 229,
    category: "signature",
    ingredients: ["Mezcal Joven", "Lunazul Blanco", "Charred Lemongrass Tincture", "Jackfruit", "Jasmine Mist"],
    highlight: {
      en: "Tribute to Phong, the restless soul of Firebirds.",
      ja: "ファイヤーバーズの魂、Phongへの献杯。",
      ko: "파이어버즈의 영혼 Phong에게 바치는 잔.",
    },
    story: {
      en: "Charred lemongrass, jackfruit, jasmine mist. Follow the wind through the garden door.",
      ja: "焦がしたレモングラス、ジャックフルーツ、ジャスミンの霧。",
      ko: "그을린 레몬그라스, 잭프루트, 재스민 미스트.",
    },
  },
  {
    id: "too-hot-to-handle",
    name: "TOO HOT TO HANDLE",
    price: 229,
    category: "signature",
    ingredients: ["Wild Turkey 81", "Aperol", "Cacao Brown", "Chili Tincture", "Chili Syrup", "Lime"],
    highlight: {
      en: "Bourbon, cacao, and a fiery chili spark.",
      ja: "バーボン、カカオ、チリの火花。",
      ko: "버번, 카카오, 칠리의 불꽃.",
    },
    story: {
      en: "Wild Turkey heat, bitter orange, dark cacao, then chili. Handle with a smile.",
      ja: "ワイルドターキー、ビターオレンジ、カカオ、チリ。笑って受け止めて。",
      ko: "와일드 터키, 비터 오렌지, 카카오, 칠리. 웃으며 받아 주세요.",
    },
  },
  {
    id: "sapa-citrus-tea",
    name: "SAPA CITRUS TEA",
    price: 229,
    category: "lady-trieu",
    subcategory: "Signature Cocktails",
    ingredients: ["Gin", "Mango", "Earl Grey tea", "Lemongrass", "Lime"],
    highlight: {
      en: "North Vietnam: mist, citrus, tea.",
      ja: "北部サパ。霧、柑橘、茶。",
      ko: "북부 사파. 안개, 시트러스, 차.",
    },
  },
  {
    id: "hoi-an-spice-road",
    name: "HOI AN SPICE ROAD",
    price: 229,
    category: "lady-trieu",
    subcategory: "Signature Cocktails",
    ingredients: ["Gin", "Campari", "Tomato", "Rose", "Plum", "Lime"],
    highlight: {
      en: "Central Vietnam: spice-port sweetness.",
      ja: "ホイアン。港町のスパイスと甘み。",
      ko: "호이안. 항구의 스파이스와 단맛.",
    },
  },
  {
    id: "dalat-flowerbomb",
    name: "DALAT FLOWERBOMB",
    price: 229,
    category: "lady-trieu",
    subcategory: "Signature Cocktails",
    ingredients: ["Gin", "Lychee", "Elderflower", "Peychaud's", "Blue & citrus"],
    highlight: {
      en: "Highland blooms in a glass.",
      ja: "ダラットの高原の花をグラスに。",
      ko: "달랏 고원의 꽃을 잔에.",
    },
  },
  {
    id: "mekong-delta",
    name: "MEKONG DELTA",
    price: 229,
    category: "lady-trieu",
    subcategory: "Signature Cocktails",
    ingredients: ["Gin", "Aperol", "D.O.M.", "Hibiscus", "Pink grapefruit", "Lime"],
    highlight: {
      en: "South Vietnam: river fruit and hibiscus.",
      ja: "メコン。川の果実とハイビスカス。",
      ko: "메콩. 강의 과일과 히비스커스.",
    },
  },
  gin("sapa-gin", "Sapa", 199),
  gin("hoi-an-gin", "Hoi An", 199),
  gin("da-lat-gin", "Da Lat", 199),
  gin("mekong-gin", "Mekong", 199),
  gin("east-sea-gin", "East Sea", 199),
  gin("contemporary-gin", "Contemporary", 199),
  classic("gin-fizz", "Gin Fizz", 179, ["Gin", "Lemon", "Sugar", "Soda"]),
  classic("clover-club", "Clover Club", 179, ["Gin", "Raspberry", "Lemon", "Egg white"]),
  classic("aviation", "Aviation", 189, ["Gin", "Maraschino", "Creme de Violette", "Lemon"]),
  classic("negroni", "Negroni", 199, ["Gin", "Campari", "Sweet vermouth"]),
  classic("hemmingway", "Hemmingway's", 179, ["White rum", "Grapefruit", "Lime", "Maraschino"]),
  classic("maitai", "MaiTai", 179, ["Rum", "Orange curacao", "Orgeat", "Lime"]),
  classic("jungle-bird", "Jungle Bird", 189, ["Rum", "Campari", "Pineapple", "Lime", "Sugar"]),
  classic("right-hand", "The Right Hand", 199, ["Rum", "Sweet vermouth", "Campari", "Chocolate bitters"]),
  classic("paloma", "Paloma", 179, ["Tequila", "Grapefruit", "Lime", "Soda"]),
  classic("margarita", "Margarita", 179, ["Tequila", "Triple sec", "Lime"]),
  classic("el-matador", "El Matador", 179, ["Tequila", "Pineapple", "Lime"]),
  classic("rosita", "Rosita", 199, ["Tequila", "Campari", "Sweet vermouth", "Dry vermouth", "Bitters"]),
  classic("whisky-sour", "Whisky Sour", 189, ["Whisky", "Lemon", "Sugar", "Egg white"]),
  classic("rusty-nail", "Rusty Nail", 199, ["Scotch", "Drambuie"]),
  classic("penicillin", "Penicillin", 199, ["Blended Scotch", "Lemon", "Honey-ginger", "Islay float"]),
  classic("godfather", "Godfather", 199, ["Scotch", "Amaretto"]),
  classic("horses-neck", "Horse's Neck", 199, ["Brandy or whisky", "Ginger ale", "Lemon peel"]),
  classic("side-car", "Side Car", 219, ["Cognac", "Triple sec", "Lemon"]),
  classic("pisco-sour", "Pisco Sour", 199, ["Pisco", "Lime", "Sugar", "Egg white", "Bitters"]),
  classic("vieux-carre", "Vieux Carre", 219, ["Rye", "Cognac", "Sweet vermouth", "Benedictine", "Bitters"]),
  ...spiritGroup("Vodka", [
    ["Wyborowa", 169],
    ["Skyy", 169],
    ["Zubrowka", 169],
    ["Tito's", 189],
    ["Ketel One", 189],
    ["GreyGoose", 199],
  ]),
  ...spiritGroup("Gin", [
    ["Bombay Sapphire", 179],
    ["Beefeater", 179],
    ["Tanqueray", 179],
    ["Roku", 179],
    ["Hendrick's", 189],
    ["Bulldog", 189],
    ["Beefeater 24", 189],
    ["Về Để Đi Good Gin", 189],
    ["Plymouth Gin", 199],
    ["Tanqueray No. 10", 199],
    ["Opihr Oriental Spiced", 199],
    ["The Botanist Islay Dry", 199],
    ["Four Pillars Fresh Yuzu", 199],
    ["Four Pillars Spiced Negroni", 199],
    ["Sông Cái Spiced Roselle", 199],
    ["Sông Cái Floral Gin", 199],
    ["Gunpowder Original", 199],
    ["Gunpowder Orange", 199],
    ["Gunpowder Pineapple", 199],
    ["Gunpowder Citrus", 199],
    ["Monkey 47", 349],
  ]),
  ...spiritGroup("Rum", [
    ["Monsoon", 159],
    ["Havana Club 3YO", 169],
    ["Captain Morgan", 169],
    ["Captain Morgan Spiced", 169],
    ["Flor de Caña 4YO", 169],
    ["Bacardi Blanco", 169],
    ["Havana Club 7YO", 179],
    ["Kraken Black", 189],
    ["Mount Gay Black Barrel", 189],
    ["Về Để Đi Right Rum", 189],
    ["Plantation 3 Stars", 189],
    ["Plantation Original Dark", 189],
    ["Plantation Pineapple", 189],
    ["Sampan 43", 189],
    ["Bumbu Original", 199],
    ["Sampan 54", 199],
    ["Plantation Overproof O.F.T.D", 219],
    ["Sampan Cognac Porto Cask", 369],
  ]),
  ...spiritGroup("Agave", [
    ["Two Fingers Silver", 169],
    ["Two Fingers Gold", 169],
    ["Olmeca Reposado", 169],
    ["Lunazul Blanco", 179],
    ["Olmeca Altos Plata", 179],
    ["Creyente", 189],
    ["400 Conejos", 199],
    ["Lunazul Añejo", 199],
    ["Patrón Silver", 199],
    ["Montelobos Espadín", 219],
    ["1800 Cristalino Añejo", 379],
  ]),
  ...spiritGroup("Whisky - American", [
    ["Evan Williams", 169],
    ["Bulleit Bourbon", 179],
    ["Bulleit Rye", 179],
    ["Wild Turkey 81", 179],
    ["Maker's Mark", 189],
    ["Wild Turkey 8YO", 189],
    ["Knob Creek Rye", 189],
    ["Buffalo Trace", 189],
  ]),
  ...spiritGroup("Whisky - Irish", [
    ["Jameson Triple", 169],
    ["Jameson IPA", 169],
    ["Bushmills Original", 169],
    ["Bushmills Black Bush", 189],
    ["The Sexton", 199],
    ["Teeling", 199],
  ]),
  ...spiritGroup("Whisky - Scotch Single Malt", [
    ["Laphroaig 10", 259],
    ["Bruichladdich", 299],
    ["GlenAllachie 12", 299],
    ["The Glen Grant 12", 299],
    ["Macallan 12YO", 379],
    ["Port Charlotte 10", 379],
  ]),
  ...spiritGroup("Whisky - Scotch Blended", [
    ["JW Red Label", 159],
    ["The Famous Grouse", 159],
    ["JW Black Label", 169],
    ["Chivas Extra 13", 169],
    ["Famous Grouse Smoky Black", 179],
    ["The Deacon", 189],
    ["Naked Malt", 199],
  ]),
  ...spiritGroup("Brandy", [
    ["St-Rémy VSOP", 169],
    ["Pisco Demonio de los Andes", 179],
    ["Hennessy VS", 189],
    ["Château du Breuil Calvados", 199],
    ["Rémy Martin 1738", 339],
  ]),
  ...spiritGroup("Liqueurs", [
    ["Làng ETD", 159],
    ["Choya Umeshu", 159],
    ["Jägermeister", 159],
    ["Campari", 169],
    ["Fernet Branca", 169],
    ["Aperol", 169],
    ["Suze", 169],
    ["Cynar", 169],
    ["Disaronno", 169],
    ["Baileys", 169],
    ["Làng Thanh Long", 179],
    ["Làng Classic", 179],
    ["Crème de Cassis", 179],
    ["Về Để Đi Crème de Cacao", 179],
    ["Frangelico", 189],
    ["Italicus", 189],
    ["Absinthe 69", 189],
    ["St-Germain", 189],
  ]),
  {
    id: "tavernello-montepulciano",
    name: "Tavernello Montepulciano",
    price: 159,
    glassPrice: 159,
    bottlePrice: 459,
    category: "wine-beer",
    subcategory: "Wine",
    ingredients: ["Red wine", "Glass 159", "Bottle 459"],
  },
  {
    id: "tavernello-pinot-grigio",
    name: "Tavernello Pinot Grigio",
    price: 159,
    glassPrice: 159,
    bottlePrice: 459,
    category: "wine-beer",
    subcategory: "Wine",
    ingredients: ["White wine", "Glass 159", "Bottle 459"],
  },
  {
    id: "charles-roux",
    name: "Charles Roux Chardonnay / Aligoté",
    price: 189,
    glassPrice: 189,
    bottlePrice: 579,
    category: "wine-beer",
    subcategory: "Wine",
    ingredients: ["White wine", "Glass 189", "Bottle 579"],
  },
  {
    id: "milk-stout",
    name: "Da Nang Craft Beer: Milk Stout IBU 25%",
    price: 139,
    category: "wine-beer",
    subcategory: "Da Nang Craft Beer",
    ingredients: ["Milk Stout", "IBU 25%"],
  },
  {
    id: "neipa",
    name: "Da Nang Craft Beer: NEIPA IBU 19%",
    price: 139,
    category: "wine-beer",
    subcategory: "Da Nang Craft Beer",
    ingredients: ["NEIPA", "IBU 19%"],
  },
];

function gin(id: string, name: string, price: number): MenuItem {
  return {
    id,
    name: `Lady Triệu Gin: ${name}`,
    price,
    category: "lady-trieu",
    subcategory: "Lady Trieu Gin Selection",
    ingredients: ["Lady Trieu gin", name],
    highlight: {
      en: `Vietnamese botanicals, ${name} expression.`,
      ja: `ベトナムのボタニカル、${name}。`,
      ko: `베트남 보태니컬, ${name}.`,
    },
  };
}

function classic(id: string, name: string, price: number, ingredients: string[]): MenuItem {
  return { id, name, price, category: "classics", ingredients };
}

function spiritGroup(subcategory: string, rows: [string, number][]): MenuItem[] {
  return rows.map(([name, price]) => ({
    id: `${subcategory}-${name}`.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    name,
    price,
    category: "spirits" as const,
    subcategory,
    ingredients: [subcategory, "30ml serve"],
  }));
}

