export type Locale = "en" | "vn" | "ja" | "ko"

export const LOCALES: { id: Locale; label: string; name: string }[] = [
  { id: "en", label: "EN", name: "English" },
  { id: "vn", label: "VN", name: "Tiếng Việt" },
  { id: "ja", label: "JA", name: "日本語" },
  { id: "ko", label: "KO", name: "한국어" },
]

export type StoryId = "tropical-origin" | "vietnam-craft"

export interface VenueContent {
  id: StoryId
  number: string
  name: string
  eyebrow: string
  description: string
  image: string
  link: string
  facebook: string
  experience: string
  tone: "coral" | "gold"
  address: string
}

export interface StoryContent {
  title: string
  subtitle: string
  hero: string
  detail: string
  detailAlt: string
  detailCaption: string
  tone: "retro" | "street"
  leadLabel: string
  intro: string
  chapters: { heading: string; body: string }[]
  galleryLabel: string
  galleryTitle: string
  gallery: { src: string; alt: string; caption: string }[]
  quote: string
}

export interface SiteCopy {
  brandSub: string
  nav: {
    branches: string
    story: string
    craft: string
    visit: string
    openMenu: string
    closeMenu: string
  }
  hero: {
    alt: string
    kicker: string
    title1: string
    title2: string
    intro: string
    branchesLabel: string
  }
  intro: {
    sectionNumber: string
    kicker: string
    title1: string
    title2: string
    copy: string
  }
  carousel: {
    ariaLabel: string
    findRoom: string
    readStory: string
    swipeHint: string
    prevLabel: string
    nextLabel: string
  }
  story: {
    imageAlt: string
    stampTop: string
    stampBottom: string
    sectionNumber: string
    kicker: string
    title1: string
    title2: string
    p1: string
    p2: string
    quote: string
  }
  manifesto: {
    imageAlt: string
    sectionNumber: string
    kicker: string
    title1: string
    title2: string
    body: string
    bullets: [string, string, string]
  }
  quoteBand: {
    statement: string
    marquee: string
  }
  visit: {
    sectionNumber: string
    title1: string
    title2: string
    viewLocation: string
  }
  footer: {
    tagline: string
    enquiries: string
    copyright: string
    madeWithLove: string
  }
  storyPage: {
    backToBranches: string
    endingKicker: string
    endingTitle: string
    readOther: string
    enoughReading: string
    openInMaps: string
  }
  venues: VenueContent[]
  stories: Record<StoryId, StoryContent>
}

const TROPICAL_MAP_LINK = "https://share.google/Ppgwmcre6G583Irjb"
const CRAFT_MAP_LINK = "https://share.google/Hb9ooPZBY0onG1ihP"

export const translations: Record<Locale, SiteCopy> = {
  en: {
    brandSub: "Cocktail & more",
    nav: {
      branches: "Two branches",
      story: "Our story",
      craft: "The craft",
      visit: "Find your Firebirds",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      alt: "Guests and bartenders gathered around the glowing terrazzo bar at Firebirds in Da Nang",
      kicker: "We went far. We came home thirsty.",
      title1: "One spirit.",
      title2: "Two ways home.",
      intro:
        "Firebirds began with the things we missed while we were away: loud nights, honest drinks, the smell of rain on a hot road. That same spirit now lives in two very different rooms.",
      branchesLabel: "Choose a Firebirds branch",
    },
    intro: {
      sectionNumber: "Same fire, two rooms",
      kicker: "Pick the night you need",
      title1: "The spirit is the same.",
      title2: "The road there is not.",
      copy:
        "We have no interest in opening the same bar twice. One place is wild around the edges, glowing behind a bronze garden gate near the sea. The other sits down a quiet downtown alley and listens. Swipe through, then trust your mood.",
    },
    carousel: {
      ariaLabel: "Firebirds branches",
      findRoom: "Find this room",
      readStory: "Read its story",
      swipeHint: "Swipe or use the arrows",
      prevLabel: "Previous branch",
      nextLabel: "Next branch",
    },
    story: {
      imageAlt: "The founders behind the bar at Firebirds in Da Nang",
      stampTop: "Welcome home",
      stampBottom: "FB",
      sectionNumber: "How it began",
      kicker: "No grand plan. Just a pull home.",
      title1: "We saw enough of away.",
      title2: "Home kept calling.",
      p1:
        "We left Vietnam to make a living. We crossed borders, worked long shifts, drank in famous rooms and forgettable ones. After enough years under foreign neon, you learn that polished is never the same thing as alive.",
      p2:
        "So we came back to Da Nang. The first Firebirds grew from an old wooden medicine cabinet, bent iron chairs, tables built by our own hands, and honest objects rescued along the road. Nothing matched. Somehow, under warm light and good company, it all belonged.",
      quote:
        "You go far enough, you stop looking for new. You start looking for true.",
    },
    manifesto: {
      imageAlt: "Warm chandelier-lit Firebirds room with guests gathered around the glowing terrazzo bar and bartenders crafting drinks",
      sectionNumber: "In every glass",
      kicker: "Less performance. More flavour.",
      title1: "Vietnam is not our theme.",
      title2: "It is what we know.",
      body:
        "We start nearby: mountain fruit in season, morning-market herbs, bitter roots, char, sea salt, and aromas that wake an old memory. Technique matters deeply to us. But if a drink needs a ten-minute speech before it tastes good, we have gone too far.",
      bullets: [
        "What grows here, picked while it is at its peak",
        "Good hands, clear balance, no unnecessary theatre",
        "A proper welcome at the door, every single night",
      ],
    },
    quoteBand: {
      statement: "Stay for one. Leave after several.",
      marquee: "Firebirds · Đà Nẵng · Vietnam · Cocktail & more · ",
    },
    visit: {
      sectionNumber: "Come find us",
      title1: "One spirit.",
      title2: "Which road tonight?",
      viewLocation: "View location",
    },
    footer: {
      tagline: "One spirit. Two ways home.",
      enquiries: "Reservations & enquiries",
      copyright: "Firebirds Cocktail & More",
      madeWithLove: "Made with love in Đà Nẵng",
    },
    storyPage: {
      backToBranches: "Back to both branches",
      endingKicker: "One spirit, another road",
      endingTitle: "Keep going, or come find the room.",
      readOther: "Read the other story",
      enoughReading: "Enough reading",
      openInMaps: "Open this branch in Maps",
    },
    venues: [
      {
        id: "tropical-origin",
        number: "01",
        name: "Tropical Origin",
        eyebrow: "The old soul · Sơn Trà",
        description:
          "Our first fire, a short walk from My Khe Beach. A green, unruly living room built from an old apothecary cabinet, found chairs, and things we carried home. The drinks run bright and tropical. The nights tend to run late.",
        image: "/images/firebirds-original.jpg",
        link: TROPICAL_MAP_LINK,
        facebook: "https://www.facebook.com/Firebirds.CocktailandMore",
        experience: "Tropical · Loose · Full of stories",
        tone: "coral",
        address: "2D Mỹ Khê 7 · Sơn Trà · Đà Nẵng",
      },
      {
        id: "vietnam-craft",
        number: "02",
        name: "Vietnam Craft Cocktail",
        eyebrow: "The new road · Đà Nẵng",
        description:
          "The quieter sibling tucked down Alley 27 Thai Phien. Here we look harder at Vietnam: its wild fruit, market herbs, bitter edges, and old street flavours, then distill what we find into a glass.",
        image: "/images/vietnam-cocktail.jpg",
        link: CRAFT_MAP_LINK,
        facebook: "https://www.facebook.com/FirebirdsVietnameseCraftCocktail",
        experience: "Vietnamese · Thoughtful · Close to the bone",
        tone: "gold",
        address: "27/1 Thái Phiên · Hải Châu · Đà Nẵng",
      },
    ],
    stories: {
      "tropical-origin": {
        title: "The cabinet that waited",
        subtitle: "Vietnam, before everything became new",
        hero: "/images/firebirds-original.jpg",
        detail: "/images/firebirds-founders.jpg",
        detailAlt: "The founders behind the bar at Firebirds Tropical Origin in Da Nang",
        detailCaption: "Found and made in Vietnam",
        tone: "retro",
        leadLabel: "The thought behind the room",
        intro:
          "Some places are designed on a screen. This one began with a scarred wooden medicine cabinet that had already lived a whole life before us.",
        chapters: [
          {
            heading: "The things that stayed",
            body:
              "While working overseas, the Vietnam we missed most was never a postcard. We missed the ordinary textures we grew up around: bent iron chairs on cool checkered tiles, dark jackfruit timber, rain drumming on corrugated roofs, thermos flasks steaming on a family table. Distance turns small, honest things into an ache that follows you home.",
          },
          {
            heading: "Nothing matched, everything belonged",
            body:
              "When we returned to Da Nang, we refused to hire a sleek interior studio. Instead, we collected piece by piece. A hundred-drawer apothecary cabinet from an old pharmacy. Weathered shutters, brass lamps, a gramophone, and timber tables planed by our own hands. We did not want a museum, and we certainly did not want nostalgia polished until it lost its fingerprints.",
          },
          {
            heading: "The room found its rhythm",
            body:
              "We planted banana palms and bird-of-paradise by the bronze gate, hung warm bulbs over the white terrazzo counter, and started shaking tropical drinks built on fresh coastal fruit and house-made bitters. Strangers leaned across the bar and became regulars. What began as a room of old memories turned into a home for making new ones.",
          },
        ],
        galleryLabel: "Inside the room · Sơn Trà",
        galleryTitle: "Timber, neon, and late-night pours",
        gallery: [
          {
            src: "/images/gallery/to-11.jpg",
            alt: "Bartender throwing a cocktail in front of the wooden apothecary cabinet",
            caption: "A long throw before the apothecary drawers",
          },
          {
            src: "/images/gallery/to-14.jpg",
            alt: "Blue neon Birds sign glowing through the green-framed window",
            caption: "The blue neon cage seen through the garden window",
          },
          {
            src: "/images/gallery/to-19.jpg",
            alt: "Weathered timber entrance gate at Tropical Origin in Son Tra",
            caption: "The hidden timber and bronze gate at 2D My Khe 7",
          },
        ],
        quote:
          "Old Vietnam was never quiet. It had colour, stubbornness and a good deal of soul.",
      },
      "vietnam-craft": {
        title: "The alley after rain",
        subtitle: "Vietnam street craft, with the volume left on",
        hero: "/images/vietnam-cocktail.jpg",
        detail: "/images/gallery/vc-04.jpg",
        detailAlt: "White veined marble bar counter, warm chandelier, and crimson neon under-glow inside Firebirds Vietnam Craft Cocktail",
        detailCaption: "Distilled from the street",
        tone: "street",
        leadLabel: "The thought behind the room",
        intro:
          "The second Firebirds came from the street: practical, improvised, and a little strange in exactly the right way.",
        chapters: [
          {
            heading: "Look down the alley",
            body:
              "Turn off Thai Phien into Alley 27 after a tropical downpour and the city changes frequency. Vietnamese alleys know how to make a world out of anything: a low stool becomes a dining room, a mechanic's chest becomes a bar station, red lanterns and wet pavement turn neon into liquid gold.",
          },
          {
            heading: "Craft without the costume",
            body:
              "That everyday resourcefulness is our kind of bartending. Not precious. Never hidden behind velvet ropes or a rehearsed lecture. We take Vietnamese botanicals, green mango, perilla, smoked tea, toasted rice, and wild mountain pepper, then work them until they reveal something both deeply familiar and startlingly new.",
          },
          {
            heading: "Keep it a little funky",
            body:
              "Heritage does not have to whisper. Beneath a carved wooden temple gable and red floral lanterns stands a sticker-covered upright piano, a veined marble bar lit with crimson glow, and bartenders who love a happy accident. It is half neighbourhood workshop, half late-night sanctuary. Come as you are. Curiosity is enough.",
          },
        ],
        galleryLabel: "Inside the alley · Hải Châu",
        galleryTitle: "Lantern glow, wet stone, and street spirit",
        gallery: [
          {
            src: "/images/gallery/vc-01.jpg",
            alt: "Veined marble bar counter with crimson under-glow at Vietnam Craft Cocktail",
            caption: "The veined stone counter glowing red after dark",
          },
          {
            src: "/images/gallery/vc-02.jpg",
            alt: "Bartender working beneath red floral lanterns and carved wooden gable",
            caption: "Red lanterns and carved timber above the backbar",
          },
          {
            src: "/images/gallery/vc-05.jpg",
            alt: "Sticker-covered upright piano inside the alley bar",
            caption: "The street-stickered upright piano waiting for late hours",
          },
        ],
        quote:
          "The street never asked permission to be beautiful. It simply got on with the job.",
      },
    },
  },
  vn: {
    brandSub: "Cocktail & hơn thế",
    nav: {
      branches: "Hai không gian",
      story: "Chuyện tụi mình",
      craft: "Nghề pha chế",
      visit: "Tìm đến Firebirds",
      openMenu: "Mở menu",
      closeMenu: "Đóng menu",
    },
    hero: {
      alt: "Khách và bartender quây quần bên quầy bar đá mài ấm áp tại Firebirds Đà Nẵng",
      kicker: "Đi thật xa. Về nhà vẫn khát.",
      title1: "Một linh hồn.",
      title2: "Hai lối về nhà.",
      intro:
        "Firebirds bắt đầu từ những điều tụi mình nhớ quay quắt những năm tháng xa xứ: những đêm rộn tiếng cười, ly rượu thật lòng, mùi mưa rào vừa chạm mặt đường còn nóng. Tinh thần ấy giờ sống trong hai căn phòng mang hai cá tính hoàn toàn khác biệt tại Đà Nẵng.",
      branchesLabel: "Chọn không gian Firebirds của bạn",
    },
    intro: {
      sectionNumber: "Chung ngọn lửa, hai căn phòng",
      kicker: "Chọn đúng đêm bạn cần",
      title1: "Tinh thần vẫn là một.",
      title2: "Chỉ lối về khác nhau.",
      copy:
        "Tụi mình không hứng thú với việc mở hai quán bar giống hệt nhau. Một nơi phóng khoáng, xanh rợp bóng cây sau cánh cổng đồng gần biển Mỹ Khê. Nơi kia nằm sâu trong con hẻm nhỏ trung tâm, trầm tĩnh và lắng nghe. Hãy lướt qua và để tâm trạng dẫn lối.",
    },
    carousel: {
      ariaLabel: "Hai chi nhánh Firebirds",
      findRoom: "Tìm đường đến quán",
      readStory: "Đọc câu chuyện",
      swipeHint: "Lướt ngang hoặc dùng mũi tên",
      prevLabel: "Chi nhánh trước",
      nextLabel: "Chi nhánh tiếp",
    },
    story: {
      imageAlt: "Những người sáng lập phía sau quầy bar tại Firebirds Đà Nẵng",
      stampTop: "Mừng về nhà",
      stampBottom: "FB",
      sectionNumber: "Khởi nguồn",
      kicker: "Chẳng có bản vẽ lớn. Chỉ có tiếng gọi về nhà.",
      title1: "Đi xa đã đủ nhiều.",
      title2: "Nhà vẫn luôn gọi về.",
      p1:
        "Tụi mình từng rời Việt Nam đi lập nghiệp, qua nhiều biên giới, đứng sau những quầy bar hào nhoáng lẫn những nơi chóng quên. Đi đủ lâu dưới ánh đèn xứ người, bạn sẽ nhận ra một nơi bóng bẩy chưa chắc đã là một nơi có hồn.",
      p2:
        "Vậy là tụi mình trở về Đà Nẵng. Firebirds đầu tiên lớn lên từ chiếc tủ thuốc Bắc cũ bằng gỗ, những chiếc ghế sắt uốn, bàn gỗ tự tay bào đóng và những món đồ xưa cũ nhặt nhạnh dọc đường. Chẳng thứ gì ăn nhập theo sách vở, nhưng dưới ánh đèn vàng ấm, tất cả lại thuộc về nhau.",
      quote:
        "Đi đủ xa, người ta thôi tìm cái mới lạ. Người ta bắt đầu tìm về cái chân thật.",
    },
    manifesto: {
      imageAlt: "Không gian ấm áp dưới ánh đèn chùm tại Firebirds với khách quây quần bên quầy bar đá mài và các bartender đang pha chế",
      sectionNumber: "Trong từng chiếc ly",
      kicker: "Bớt trình diễn. Thêm hương vị.",
      title1: "Việt Nam không phải chủ đề.",
      title2: "Đó là máu thịt tụi mình.",
      body:
        "Tụi mình bắt đầu từ những gì gần gũi nhất: trái cây đúng mùa, rau thơm chợ sớm, rễ cây đắng, khói bếp, muối biển và những mùi hương đánh thức ký ức xưa. Kỹ thuật rất quan trọng. Nhưng nếu một ly rượu cần cả bài diễn thuyết dài mới thấy ngon, có lẽ tụi mình đã đi quá xa.",
      bullets: [
        "Trái ngọt thảo mộc bản địa, chọn đúng độ chín ngon nhất",
        "Đôi tay lành nghề, vị cân bằng, không màu mè thừa thãi",
        "Lời chào đón chân thành ngay từ bậc cửa, mỗi tối",
      ],
    },
    quoteBand: {
      statement: "Ghé uống một ly. Ở lại thêm vài cuộc vui.",
      marquee: "Firebirds · Đà Nẵng · Việt Nam · Cocktail & hơn thế · ",
    },
    visit: {
      sectionNumber: "Ghé chơi với tụi mình",
      title1: "Một linh hồn.",
      title2: "Đêm nay đi lối nào?",
      viewLocation: "Xem bản đồ",
    },
    footer: {
      tagline: "Một linh hồn. Hai lối về nhà.",
      enquiries: "Đặt bàn & liên hệ",
      copyright: "Firebirds Cocktail & More",
      madeWithLove: "Làm bằng cả trái tim tại Đà Nẵng",
    },
    storyPage: {
      backToBranches: "Quay lại hai chi nhánh",
      endingKicker: "Một linh hồn, một lối rẽ khác",
      endingTitle: "Đọc tiếp chuyện kia, hay ghé quán đêm nay.",
      readOther: "Đọc câu chuyện còn lại",
      enoughReading: "Đọc đủ rồi",
      openInMaps: "Mở địa chỉ trên Google Maps",
    },
    venues: [
      {
        id: "tropical-origin",
        number: "01",
        name: "Tropical Origin",
        eyebrow: "Linh hồn cũ · Sơn Trà",
        description:
          "Ngọn lửa đầu tiên của tụi mình, cách biển Mỹ Khê vài bước chân. Một phòng khách xanh mát, phóng khoáng dựng nên từ tủ thuốc gỗ xưa, ghế cũ và bao kỷ vật mang về. Rượu đậm vị nhiệt đới, còn đêm thì thường kéo dài.",
        image: "/images/firebirds-original.jpg",
        link: TROPICAL_MAP_LINK,
        facebook: "https://www.facebook.com/Firebirds.CocktailandMore",
        experience: "Nhiệt đới · Phóng khoáng · Đầy ắp chuyện kể",
        tone: "coral",
        address: "2D Mỹ Khê 7 · Sơn Trà · Đà Nẵng",
      },
      {
        id: "vietnam-craft",
        number: "02",
        name: "Vietnam Craft Cocktail",
        eyebrow: "Con đường mới · Đà Nẵng",
        description:
          "Người em trầm tĩnh hơn nằm trong con hẻm 27 Thái Phiên. Ở đây tụi mình đi sâu vào nguyên liệu Việt: trái rừng, thảo mộc chợ quê, vị đắng thanh và ký ức phố thị, rồi chưng cất tất cả vào trong một chiếc ly.",
        image: "/images/vietnam-cocktail.jpg",
        link: CRAFT_MAP_LINK,
        facebook: "https://www.facebook.com/FirebirdsVietnameseCraftCocktail",
        experience: "Đậm chất Việt · Sâu sắc · Chạm tới cốt lõi",
        tone: "gold",
        address: "27/1 Thái Phiên · Hải Châu · Đà Nẵng",
      },
    ],
    stories: {
      "tropical-origin": {
        title: "Chiếc tủ gỗ đã đợi sẵn",
        subtitle: "Việt Nam của những ngày chưa kịp cũ",
        hero: "/images/firebirds-original.jpg",
        detail: "/images/firebirds-founders.jpg",
        detailAlt: "Những người sáng lập phía sau quầy bar tại Firebirds Tropical Origin Đà Nẵng",
        detailCaption: "Tìm thấy và làm bằng tay tại Việt Nam",
        tone: "retro",
        leadLabel: "Khởi nguồn của căn phòng",
        intro:
          "Có những quán bar được vẽ ra trên màn hình máy tính. Còn nơi này bắt đầu từ một chiếc tủ thuốc Bắc bằng gỗ đã sống trọn một đời người trước cả tụi mình.",
        chapters: [
          {
            heading: "Những điều ở lại trong ký ức",
            body:
              "Những năm tháng làm việc nơi đất khách, Việt Nam mà tụi mình nhớ nhất chẳng phải những tấm bưu thiếp hào nhoáng. Tụi mình nhớ chiếc ghế sắt uốn trên nền gạch bông mát lạnh sau cơn mưa, màu gỗ mít sẫm, tiếng mưa rơi trên mái tôn và bình thủy nước sôi trên bàn ăn gia đình. Khoảng cách biến những điều bình dị ấy thành nỗi nhớ khôn nguôi.",
          },
          {
            heading: "Chẳng món nào giống món nào",
            body:
              "Khi trở về Đà Nẵng, tụi mình tự tay gom góp từng chút một. Một chiếc tủ thuốc nhiều ngăn từ hiệu thuốc cũ, khung cửa chớp bạc màu, chiếc đèn đồng, máy hát đĩa xưa và những mặt bàn gỗ tự tay bào nhẵn. Tụi mình không muốn dựng nên một viện bảo tàng, càng không muốn đánh bóng hoài niệm đến mức mất đi dấu vân tay của thời gian.",
          },
          {
            heading: "Căn phòng tự tìm thấy nhịp thở",
            body:
              "Rồi tụi mình trồng thêm chuối cảnh, thiên điểu bên cánh cổng đồng, thắp đèn vàng trên mặt quầy đá mài trắng và bắt đầu lắc những ly cocktail nhiệt đới từ trái cây tươi cùng rượu đắng tự ngâm. Những người lạ tựa lưng vào quầy trò chuyện rồi thành khách quen. Từ một nơi cất giữ ký ức cũ, căn phòng trở thành mái nhà cho những kỷ niệm mới.",
          },
        ],
        galleryLabel: "Bên trong căn phòng · Sơn Trà",
        galleryTitle: "Gỗ cũ, đèn neon và những cuộc vui muộn",
        gallery: [
          {
            src: "/images/gallery/to-11.jpg",
            alt: "Bartender tung dòng cocktail trước chiếc tủ thuốc Bắc cổ",
            caption: "Đường rót cocktail dài trước chiếc tủ thuốc gỗ trăm ngăn",
          },
          {
            src: "/images/gallery/to-14.jpg",
            alt: "Ánh đèn neon xanh nhìn qua khung cửa gỗ xanh",
            caption: "Lồng đèn neon xanh nhìn qua khung cửa sổ khu vườn",
          },
          {
            src: "/images/gallery/to-19.jpg",
            alt: "Cánh cổng gỗ và đồng ấm áp tại 2D Mỹ Khê 7",
            caption: "Cánh cổng gỗ nhuốm màu thời gian tại 2D Mỹ Khê 7",
          },
        ],
        quote:
          "Việt Nam xưa chưa bao giờ trầm lặng. Nó rực rỡ sắc màu, ngang tàng và tràn đầy tâm hồn.",
      },
      "vietnam-craft": {
        title: "Con hẻm nhỏ sau cơn mưa",
        subtitle: "Nghề thủ công đường phố Việt, giữ nguyên nhịp đập",
        hero: "/images/vietnam-cocktail.jpg",
        detail: "/images/gallery/vc-04.jpg",
        detailAlt: "Quầy bar đá cẩm thạch trắng, đèn chùm ấm áp và ánh đèn neon đỏ dưới chân quầy tại Firebirds Vietnam Craft Cocktail",
        detailCaption: "Chưng cất từ hơi thở đường phố",
        tone: "street",
        leadLabel: "Khởi nguồn của căn phòng",
        intro:
          "Firebirds thứ hai bước ra từ đường phố: thực tế, ngẫu hứng và có chút kỳ lạ theo một cách rất riêng.",
        chapters: [
          {
            heading: "Rẽ vào con hẻm nhỏ",
            body:
              "Rẽ khỏi đường Thái Phiên vào con hẻm 27 sau một cơn mưa rào, phố thị như chuyển sang một tần số khác. Đường phố Việt Nam luôn biết cách xoay xở kỳ diệu: vài chiếc ghế nhựa thành phòng ăn, thùng đồ nghề thành quầy pha chế, đèn lồng đỏ và mặt đường ướt mưa biến ánh đèn đêm thành một thế giới sống động.",
          },
          {
            heading: "Thủ công không cần hóa trang",
            body:
              "Sự tháo vát và chân thật ấy chính là tinh thần pha chế của tụi mình. Không kiểu cách, không giấu mình sau những lời giới thiệu hoa mỹ. Tụi mình lấy thảo mộc bản địa, xoài xanh, tía tô, trà hun khói, gạo rang và tiêu rừng, rồi kiên nhẫn chế biến cho đến khi bật lên một hương vị vừa thân thuộc vừa khiến bạn phải bất ngờ.",
          },
          {
            heading: "Giữ lại một chút ngẫu hứng",
            body:
              "Hoài cổ không có nghĩa là phải trang nghiêm. Dưới mái đình gỗ chạm khắc và đèn lồng đỏ là cây đàn piano phủ kín sticker đường phố, quầy đá vân mây ánh đỏ trầm và những bartender luôn mở lòng cho những biến tấu bất ngờ. Hãy cứ bước vào tự nhiên, chỉ cần mang theo sự tò mò là đủ.",
          },
        ],
        galleryLabel: "Trong con hẻm nhỏ · Hải Châu",
        galleryTitle: "Ánh đèn lồng, mặt đá ướt và nhịp thở phố thị",
        gallery: [
          {
            src: "/images/gallery/vc-01.jpg",
            alt: "Quầy bar đá vân mây rực ánh đèn đỏ tại Vietnam Craft Cocktail",
            caption: "Quầy bar đá vân mây ánh đỏ trầm khi đêm xuống",
          },
          {
            src: "/images/gallery/vc-02.jpg",
            alt: "Bartender làm việc dưới đèn lồng đỏ và mái gỗ chạm khắc",
            caption: "Đèn lồng hoa đỏ và mái gỗ cổ phía trên quầy rượu",
          },
          {
            src: "/images/gallery/vc-05.jpg",
            alt: "Cây đàn piano đứng phủ đầy sticker trong quán",
            caption: "Cây đàn piano phủ đầy sticker chờ những bản nhạc khuya",
          },
        ],
        quote:
          "Đường phố chưa bao giờ xin phép để được đẹp. Nó cứ thế sống trọn phần mình.",
      },
    },
  },
  ja: {
    brandSub: "Cocktail & more",
    nav: {
      branches: "ふたつの店",
      story: "私たちの物語",
      craft: "クラフトの哲学",
      visit: "Firebirdsを探す",
      openMenu: "メニューを開く",
      closeMenu: "メニューを閉じる",
    },
    hero: {
      alt: "ダナンのFirebirdsで温かなテラゾーカウンターを囲むゲストとバーテンダー",
      kicker: "遠くまで旅をした。渇きを抱いて故郷へ帰った。",
      title1: "ひとつの魂。",
      title2: "ふたつの帰り道。",
      intro:
        "Firebirdsは、故郷を離れていた日々ずっと恋しかったものから始まりました。賑やかな夜、誠実な一杯、熱いアスファルトに降るスコールと土の匂い。その同じ魂が今、ダナンのまったく異なる二つの空間に息づいています。",
      branchesLabel: "Firebirdsの店舗を選ぶ",
    },
    intro: {
      sectionNumber: "同じ炎、ふたつの部屋",
      kicker: "今夜の気分で選ぶ",
      title1: "流れる魂は同じ。",
      title2: "そこへ至る道が違うだけ。",
      copy:
        "同じバーを二つ作るつもりはありませんでした。ひとつはミーケビーチ近くのブロンズ門の奥、熱帯の緑に包まれた自由で賑やかな部屋。もうひとつは街中の路地裏で静かに耳を傾ける隠れ家。スライドして、今夜の気分に聞いてみてください。",
    },
    carousel: {
      ariaLabel: "Firebirdsの2店舗",
      findRoom: "この店の場所を見る",
      readStory: "物語を読む",
      swipeHint: "スワイプまたは矢印で移動",
      prevLabel: "前の店舗",
      nextLabel: "次の店舗",
    },
    story: {
      imageAlt: "Firebirdsのカウンターに立つ創業者たち",
      stampTop: "おかえりなさい",
      stampBottom: "FB",
      sectionNumber: "はじまりの物語",
      kicker: "壮大な計画はなかった。ただ故郷が呼んでいた。",
      title1: "異国の景色はもう十分見た。",
      title2: "故郷がずっと呼んでいた。",
      p1:
        "生計を立てるためベトナムを離れ、いくつもの国境を越え、華やかなバーでも名もなき店でも働きました。異国のネオンの下で長く過ごすうちに、洗練されていることと、生き生きとしていることは別物だと気づかされます。",
      p2:
        "だから私たちはダナンへ帰ってきました。最初のFirebirdsは、古い木製の薬箪笥、曲がった鉄の椅子、自分たちの手で削ったテーブル、そして道々で拾い集めた正直な道具たちから生まれました。何ひとつ揃っていないのに、温かい灯りの下ではすべてがしっくりと馴染んだのです。",
      quote:
        "十分に遠くまで行けば、目新しいものを探すのをやめる。本当に大切なものを探し始めるのだ。",
    },
    manifesto: {
      imageAlt: "温かなシャンデリアの灯りの下、輝くテラゾーカウンターを囲むゲストとカクテルを作るバーテンダーたち",
      sectionNumber: "すべてのグラスに",
      kicker: "演出は控えめに。味わいを深く。",
      title1: "ベトナムはテーマではない。",
      title2: "私たちが生きる土地そのもの。",
      body:
        "私たちは足元にあるものから始めます。旬の南国フルーツ、朝市のハーブ、苦味のある根、燻製の香り、海の塩、そして古い記憶を呼び覚ます香り。技術はもちろん大切です。けれど、飲む前に長い説明が必要なカクテルなら、それはやりすぎなのだと考えます。",
      bullets: [
        "この土地で育ち、最も美味しい瞬間に摘まれた素材",
        "確かな手仕事と調和、余計なショーはしない",
        "毎晩、扉を開けた瞬間から始まる心からの歓迎",
      ],
    },
    quoteBand: {
      statement: "一杯だけのつもりが、いつの間にか数杯に。",
      marquee: "Firebirds · Đà Nẵng · Vietnam · Cocktail & more · ",
    },
    visit: {
      sectionNumber: "お店へのアクセス",
      title1: "ひとつの魂。",
      title2: "今夜はどちらの道へ？",
      viewLocation: "地図を見る",
    },
    footer: {
      tagline: "ひとつの魂。ふたつの帰り道。",
      enquiries: "ご予約・お問い合わせ",
      copyright: "Firebirds Cocktail & More",
      madeWithLove: "ダナンにて愛を込めて",
    },
    storyPage: {
      backToBranches: "2店舗の案内へ戻る",
      endingKicker: "ひとつの魂、もうひとつの道",
      endingTitle: "もうひとつの物語を読むか、今夜その扉を開けるか。",
      readOther: "もうひとつの物語を読む",
      enoughReading: "物語はここまで",
      openInMaps: "Googleマップでこの店を開く",
    },
    venues: [
      {
        id: "tropical-origin",
        number: "01",
        name: "Tropical Origin",
        eyebrow: "オールドソウル · ソンチャー",
        description:
          "ミーケビーチから歩いてすぐ、私たちの最初の炎。古い薬箪笥や見つけてきた椅子、故郷へ持ち帰った品々で作られた緑豊かなリビングルーム。トロピカルな一杯とともに、夜はゆっくりと更けていきます。",
        image: "/images/firebirds-original.jpg",
        link: TROPICAL_MAP_LINK,
        facebook: "https://www.facebook.com/Firebirds.CocktailandMore",
        experience: "トロピカル · 自由気まま · 物語に満ちた空間",
        tone: "coral",
        address: "2D Mỹ Khê 7 · Sơn Trà · Đà Nẵng",
      },
      {
        id: "vietnam-craft",
        number: "02",
        name: "Vietnam Craft Cocktail",
        eyebrow: "ニューロード · ダナン市街",
        description:
          "タイフィエン通り27番の路地裏に佇む、少し静かな弟分。ここではベトナムの果実、市場のハーブ、ほろ苦い根や懐かしい街角の風味をより深く見つめ、グラスの中へと昇華させています。",
        image: "/images/vietnam-cocktail.jpg",
        link: CRAFT_MAP_LINK,
        facebook: "https://www.facebook.com/FirebirdsVietnameseCraftCocktail",
        experience: "ベトナムの風土 · 思慮深い · 核心に迫る一杯",
        tone: "gold",
        address: "27/1 Thái Phiên · Hải Châu · Đà Nẵng",
      },
    ],
    stories: {
      "tropical-origin": {
        title: "待ち続けていた薬箪笥",
        subtitle: "すべてが新しくなる前のベトナム",
        hero: "/images/firebirds-original.jpg",
        detail: "/images/firebirds-founders.jpg",
        detailAlt: "ダナンのFirebirds Tropical Originのカウンターに立つ創業者たち",
        detailCaption: "ベトナムで見つけ、手で作られたもの",
        tone: "retro",
        leadLabel: "この部屋に込めた想い",
        intro:
          "画面の上でデザインされる店もあります。けれどこの場所は、私たちよりずっと前にひとつの時代を生きてきた、古い木製の薬箪笥から始まりました。",
        chapters: [
          {
            heading: "記憶に残り続けた風景",
            body:
              "海外で働いていた頃、私たちが恋しかったベトナムは絵葉書のような観光地ではありませんでした。雨に冷やされた市松模様のタイル、曲がった鉄の椅子、深い色合いの木材、食卓の上の魔法瓶。遠く離れた異国で、そんなありふれた日常の風景が胸を締め付けるほど恋しくなったのです。",
          },
          {
            heading: "不揃いだからこそ、馴染む",
            body:
              "ダナンへ戻った私たちは、少しずつ時間をかけて家具を集めました。古い漢方薬局から譲り受けた引き出しだらけの薬箪笥、修理した椅子、自分たちの手で組み立てたテーブル。博物館にしたかったわけでも、指紋が消えるほど綺麗に磨かれたノスタルジーが欲しかったわけでもありません。",
          },
          {
            heading: "部屋が自らのリズムを見つけるまで",
            body:
              "ブロンズの扉のそばに南国の葉やストレリチアを植え、白いテラゾーカウンターに冷えたグラスを並べ、古い音楽を流しました。カウンター越しに会話が生まれ、部屋の空気がほぐれていく。思い出のコレクションから始まった場所は、こうして新しい記憶を作る場所になりました。",
          },
        ],
        galleryLabel: "店内の風景 · ソンチャー",
        galleryTitle: "古木とネオン、夜更けのカクテル",
        gallery: [
          {
            src: "/images/gallery/to-11.jpg",
            alt: "古い木製の薬箪笥の前でカクテルをスローイングするバーテンダー",
            caption: "薬箪笥の前で弧を描くカクテルスロー",
          },
          {
            src: "/images/gallery/to-14.jpg",
            alt: "緑の窓枠越しに輝く青いBirdsのネオンサイン",
            caption: "庭の窓越しに浮かぶ青いネオンサイン",
          },
          {
            src: "/images/gallery/to-19.jpg",
            alt: "ソンチャー2D My Khe 7の味わい深い木の門構え",
            caption: "2D My Khe 7の温かい灯りに照らされた木の扉",
          },
        ],
        quote:
          "昔のベトナムは決して静かではなかった。色彩と頑固さ、そして豊かな魂に満ちていた。",
      },
      "vietnam-craft": {
        title: "雨上がりの路地裏で",
        subtitle: "ボリュームを下げない、ベトナムのストリートクラフト",
        hero: "/images/vietnam-cocktail.jpg",
        detail: "/images/gallery/vc-04.jpg",
        detailAlt: "白い大理石のカウンターとシャンデリア、赤いネオンのアンダーライトが輝くFirebirds Vietnam Craft Cocktailの店内",
        detailCaption: "路地の息遣いを蒸留する",
        tone: "street",
        leadLabel: "この部屋に込めた想い",
        intro:
          "二つ目のFirebirdsはストリートから生まれました。実用的で、即興性に富み、ちょうどいい具合に少しだけ風変わりな場所です。",
        chapters: [
          {
            heading: "路地の奥をのぞき込む",
            body:
              "スコールのあと、タイフィエン通りから27番の路地へ一歩入ると街の空気が変わります。ベトナムの路地裏はあらゆるものを活かす知恵に満ちています。プラスチックの椅子が食堂になり、工具箱がカウンターになり、赤い提灯と濡れた石畳が夜の世界を鮮やかに染め上げます。",
          },
          {
            heading: "気取らないクラフトマンシップ",
            body:
              "そのたくましい工夫こそ、私たちの考えるクラフトです。気取らず、長い講釈の後ろに隠れないこと。地元の果物、朝市のハーブ、根、燻製香、塩を使い、どこか懐かしいのに思わず二度見してしまうような一杯へと仕上げています。",
          },
          {
            heading: "少しの遊び心を忘れずに",
            body:
              "昔ながらのスタイルは、決して堅苦しいものではありません。彫刻が施された木の梁と赤い花提灯の下には、ステッカーだらけのアップライトピアノと赤い光を放つ大理石のカウンター。洗練された神殿ではなく、街角の工房のようなバーです。どうぞ普段着のまま、好奇心だけ持っていらしてください。",
          },
        ],
        galleryLabel: "路地裏の風景 · ハイチャウ",
        galleryTitle: "提灯の灯り、濡れた石畳、ストリートの魂",
        gallery: [
          {
            src: "/images/gallery/vc-01.jpg",
            alt: "赤いアンダーライトに照らされた大理石のバーカウンター",
            caption: "夜更けに紅く浮かび上がる大理石のカウンター",
          },
          {
            src: "/images/gallery/vc-02.jpg",
            alt: "赤い花提灯と木彫りの破風の下でカクテルを作るバーテンダー",
            caption: "バックバーを彩る赤い提灯と伝統木彫り",
          },
          {
            src: "/images/gallery/vc-05.jpg",
            alt: "ステッカーで埋め尽くされた路地裏バーのアップライトピアノ",
            caption: "深夜のセッションを待つステッカーだらけのピアノ",
          },
        ],
        quote:
          "ストリートは美しくあるために誰の許可も求めなかった。ただ日々の営みを続けただけだ。",
      },
    },
  },
  ko: {
    brandSub: "Cocktail & more",
    nav: {
      branches: "두 개의 공간",
      story: "우리의 이야기",
      craft: "크래프트 철학",
      visit: "Firebirds 찾기",
      openMenu: "메뉴 열기",
      closeMenu: "메뉴 닫기",
    },
    hero: {
      alt: "다낭 Firebirds의 따뜻한 테라조 바 카운터에 모인 손님들과 바텐더",
      kicker: "멀리 떠나 있었다. 갈증을 안고 집으로 돌아왔다.",
      title1: "하나의 영혼.",
      title2: "집으로 가는 두 갈래 길.",
      intro:
        "Firebirds는 타지에 있을 때 사무치게 그리웠던 것들에서 시작되었습니다. 시끌벅적한 밤, 정직한 술 한 잔, 뜨거운 아스팔트 위에 쏟아지던 소나기 냄새. 그 같은 영혼이 지금 다낭의 전혀 다른 두 공간에 살아 숨 쉬고 있습니다.",
      branchesLabel: "Firebirds 지점 선택하기",
    },
    intro: {
      sectionNumber: "같은 불꽃, 두 개의 방",
      kicker: "오늘 밤 당신에게 필요한 무드를 고르세요",
      title1: "영혼은 같습니다.",
      title2: "그곳으로 향하는 길이 다를 뿐.",
      copy:
        "똑같은 바를 두 번 열 생각은 없었습니다. 한 곳은 미케 해변 근처 청동 문 너머 열대 식물로 가득한 자유분방한 거실이고, 다른 한 곳은 도심 골목 안쪽에서 조용히 귀를 기울이는 아지트입니다. 옆으로 넘겨보며 오늘 밤의 기분을 따라가 보세요.",
    },
    carousel: {
      ariaLabel: "Firebirds 두 지점",
      findRoom: "이 공간 위치 보기",
      readStory: "이야기 읽으러 가기",
      swipeHint: "옆으로 밀거나 화살표를 누르세요",
      prevLabel: "이전 지점",
      nextLabel: "다음 지점",
    },
    story: {
      imageAlt: "다낭 Firebirds 바 카운터 뒤의 창업자들",
      stampTop: "집에 오신 걸 환영합니다",
      stampBottom: "FB",
      sectionNumber: "시작된 이야기",
      kicker: "거창한 계획은 없었다. 그저 집이 부르고 있었다.",
      title1: "타지의 밤은 충분히 보았다.",
      title2: "집이 계속 우리를 불렀다.",
      p1:
        "살길을 찾아 베트남을 떠나 여러 국경을 넘었고, 화려한 바에서도 잊히기 쉬운 바에서도 일했습니다. 낯선 네온사인 아래에서 오랜 세월을 보내다 보면, 매끈하게 다듬어진 것과 진짜 살아 숨 쉬는 것은 전혀 다르다는 사실을 깨닫게 됩니다.",
      p2:
        "그래서 우리는 다낭으로 돌아왔습니다. 첫 번째 Firebirds는 오래된 나무 한약장, 휘어진 철제 의자, 직접 대패질해 만든 테이블, 그리고 길 위에서 하나둘 모은 정직한 물건들로 채워졌습니다. 어느 것 하나 짝이 맞지 않았지만, 따뜻한 조명 아래에서는 거짓말처럼 하나로 어우러졌습니다.",
      quote:
        "충분히 멀리 가본 사람은 더 이상 새로운 것을 찾지 않는다. 진짜를 찾기 시작한다.",
    },
    manifesto: {
      imageAlt: "따뜻한 샹들리에 조명 아래 빛나는 테라조 바 카운터에 모인 손님들과 칵테일을 만드는 바텐더들",
      sectionNumber: "모든 잔 속에 담긴 것",
      kicker: "보여주기식 퍼포먼스는 줄이고, 풍미는 깊게.",
      title1: "베트남은 우리의 컨셉이 아닙니다.",
      title2: "우리가 가장 잘 아는 삶 그 자체입니다.",
      body:
        "우리는 가까운 곳에서 출발합니다. 제철을 맞은 열대 과일, 새벽 시장에서 가져온 허브, 쌉싸름한 약초 뿌리, 훈연 향, 바다 소금, 그리고 오래된 기억을 깨우는 향기들. 기술은 물론 중요합니다. 하지만 마시기 전에 긴 설명이 필요한 술이라면, 우리가 너무 멀리 간 셈입니다.",
      bullets: [
        "가장 맛있는 계절에 수확한 로컬 과일과 허브",
        "숙련된 손길과 균형감, 불필요한 쇼맨십은 배제",
        "매일 밤 문을 여는 순간부터 건네는 진심 어린 환영",
      ],
    },
    quoteBand: {
      statement: "한 잔만 마시려다, 몇 잔이고 머물게 되는 밤.",
      marquee: "Firebirds · Đà Nẵng · Vietnam · Cocktail & more · ",
    },
    visit: {
      sectionNumber: "찾아오시는 길",
      title1: "하나의 영혼.",
      title2: "오늘 밤은 어느 길로 갈까요?",
      viewLocation: "구글 지도 보기",
    },
    footer: {
      tagline: "하나의 영혼. 집으로 가는 두 갈래 길.",
      enquiries: "예약 및 문의",
      copyright: "Firebirds Cocktail & More",
      madeWithLove: "다낭에서 진심을 담아 만들었습니다",
    },
    storyPage: {
      backToBranches: "두 지점 소개로 돌아가기",
      endingKicker: "하나의 영혼, 또 다른 길",
      endingTitle: "다음 이야기를 읽거나, 오늘 밤 직접 문을 열어보세요.",
      readOther: "다른 지점 이야기 읽기",
      enoughReading: "이제 직접 가볼 시간",
      openInMaps: "구글 지도에서 이 지점 열기",
    },
    venues: [
      {
        id: "tropical-origin",
        number: "01",
        name: "Tropical Origin",
        eyebrow: "오래된 영혼 · 선짜 (Sơn Trà)",
        description:
          "미케 해변에서 걸어서 금방 닿는 우리의 첫 번째 불꽃. 오래된 한약장과 수집한 빈티지 의자, 집으로 가져온 추억의 물건들로 지은 푸르고 자유분방한 거실입니다. 열대의 풍미가 가득한 칵테일과 함께 밤이 깊어갑니다.",
        image: "/images/firebirds-original.jpg",
        link: TROPICAL_MAP_LINK,
        facebook: "https://www.facebook.com/Firebirds.CocktailandMore",
        experience: "트로피컬 · 자유로운 무드 · 이야기가 가득한 밤",
        tone: "coral",
        address: "2D Mỹ Khê 7 · Sơn Trà · Đà Nẵng",
      },
      {
        id: "vietnam-craft",
        number: "02",
        name: "Vietnam Craft Cocktail",
        eyebrow: "새로운 길 · 다낭 도심",
        description:
          "타이피엔 27번지 골목 안쪽에 자리한 조금 더 차분한 동생 같은 공간. 이곳에서 우리는 베트남의 야생 과일, 시장 허브, 쌉싸름한 여운과 오래된 거리의 맛을 깊이 파고들어 한 잔의 글라스에 담아냅니다.",
        image: "/images/vietnam-cocktail.jpg",
        link: CRAFT_MAP_LINK,
        facebook: "https://www.facebook.com/FirebirdsVietnameseCraftCocktail",
        experience: "베트남 로컬 · 깊이 있는 탐구 · 본질에 가까운 맛",
        tone: "gold",
        address: "27/1 Thái Phiên · Hải Châu · Đà Nẵng",
      },
    ],
    stories: {
      "tropical-origin": {
        title: "우리를 기다려준 오래된 약장",
        subtitle: "모든 것이 새로워지기 전의 베트남",
        hero: "/images/firebirds-original.jpg",
        detail: "/images/firebirds-founders.jpg",
        detailAlt: "다낭 Firebirds Tropical Origin 바 카운터 뒤의 창업자들",
        detailCaption: "베트남에서 찾고 손으로 직접 만든 공간",
        tone: "retro",
        leadLabel: "이 공간에 담긴 생각",
        intro:
          "어떤 공간은 모니터 화면 위에서 디자인됩니다. 하지만 이곳은 우리보다 먼저 한 세월을 살아낸 낡은 나무 약장 하나에서 시작되었습니다.",
        chapters: [
          {
            heading: "기억 속에 남아 있던 것들",
            body:
              "해외에서 일하며 우리가 그리워했던 베트남은 엽서 속 화려한 풍경이 아니었습니다. 비에 식은 체크무늬 타일 바닥, 휘어진 철제 의자, 짙은 나무색 가구, 가족 식탁 위의 보온병 같은 평범하고 따뜻한 사물들이었죠. 타지에서의 시간은 그 소박한 풍경들을 가슴 시린 그리움으로 바꾸어 놓았습니다.",
          },
          {
            heading: "짝이 맞지 않아도 하나로 어우러지다",
            body:
              "다낭에 돌아온 우리는 천천히 물건들을 모았습니다. 오래된 약방에서 가져온 서랍 많은 한약장, 수리한 의자, 우리 손으로 직접 깎고 맞춘 나무 테이블까지. 박물관을 만들고 싶지도 않았고, 손때가 지워질 만큼 매끈하게 포장된 향수를 원하지도 않았습니다.",
          },
          {
            heading: "방이 스스로의 리듬을 찾다",
            body:
              "청동 문가에 열대 식물과 극락조화를 심고, 하얀 테라조 바 카운터 위로 차가운 잔과 오래된 음악을 채웠습니다. 바 너머로 몸을 기울여 대화를 나누는 사람들 덕분에 공간은 금세 편안해졌습니다. 추억의 물건들을 모은 방이 새로운 추억을 만드는 집이 된 것입니다.",
          },
        ],
        galleryLabel: "공간의 기록 · 선짜",
        galleryTitle: "오래된 나무, 네온사인, 그리고 깊어가는 밤",
        gallery: [
          {
            src: "/images/gallery/to-11.jpg",
            alt: "나무 한약장 앞에서 칵테일을 스로잉하는 바텐더",
            caption: "백 개의 서랍이 달린 한약장 앞에서의 칵테일 스로잉",
          },
          {
            src: "/images/gallery/to-14.jpg",
            alt: "초록 창틀 너머로 빛나는 파란 Birds 네온사인",
            caption: "정원 창문 너머로 비치는 파란 네온 새장",
          },
          {
            src: "/images/gallery/to-19.jpg",
            alt: "선짜 2D My Khe 7의 따뜻한 조명이 켜진 나무 대문",
            caption: "2D My Khe 7의 세월이 묻어나는 나무와 청동 대문",
          },
        ],
        quote:
          "옛 베트남은 단 한 번도 조용한 적이 없었다. 선명한 색채와 고집, 그리고 깊은 영혼이 있었을 뿐이다.",
      },
      "vietnam-craft": {
        title: "비 개인 뒤의 골목길",
        subtitle: "볼륨을 줄이지 않은 베트남 스트리트 크래프트",
        hero: "/images/vietnam-cocktail.jpg",
        detail: "/images/gallery/vc-04.jpg",
        detailAlt: "하얀 마블 바 카운터와 샹들리에, 붉은 네온 언더글로우가 어우러진 Firebirds Vietnam Craft Cocktail 내부",
        detailCaption: "거리의 숨결을 증류하다",
        tone: "street",
        leadLabel: "이 공간에 담긴 생각",
        intro:
          "두 번째 Firebirds는 거리에서 태어났습니다. 실용적이고 즉흥적이며, 기분 좋을 만큼 살짝 엉뚱한 매력을 지닌 곳입니다.",
        chapters: [
          {
            heading: "골목 안쪽을 들여다보다",
            body:
              "소나기가 지나간 뒤 타이피엔 거리에서 27번 골목으로 들어서면 도시의 주파수가 바뀝니다. 베트남의 골목은 무엇이든 쓸모 있게 바꾸는 지혜를 알고 있죠. 플라스틱 의자 하나면 식당이 되고, 공구함은 카운터가 되며, 붉은 등불과 젖은 골목길은 밤마다 하나의 작은 우주를 만들어냅니다.",
          },
          {
            heading: "격식을 벗어던진 크래프트",
            body:
              "그 생활력 넘치는 재치야말로 우리가 추구하는 크래프트입니다. 거창한 포장도, 긴 연설도 필요 없습니다. 로컬 과일과 시장 허브, 약초 뿌리, 훈연 향과 소금을 치열하게 다듬어 아주 익숙하면서도 두 번 돌아보게 만드는 낯선 매력을 한 잔에 담아냅니다.",
          },
          {
            heading: "유쾌한 펑키함을 남겨두다",
            body:
              "전통을 존중한다고 해서 진지하기만 할 필요는 없습니다. 조각된 나무 처마와 붉은 꽃등 아래에는 스티커로 뒤덮인 업라이트 피아노와 붉은 빛이 감도는 대리석 바가 자리하고 있습니다. 경건한 칵테일 신전보다는 골목길 공방에 가까운 곳, 호기심 하나만 들고 편하게 찾아오세요.",
          },
        ],
        galleryLabel: "골목 안의 기록 · 하이쩌우",
        galleryTitle: "붉은 등불, 젖은 돌바닥, 그리고 거리의 영혼",
        gallery: [
          {
            src: "/images/gallery/vc-01.jpg",
            alt: "붉은 조명이 감도는 대리석 바 카운터",
            caption: "어둠이 내린 뒤 붉은 빛으로 물드는 대리석 카운터",
          },
          {
            src: "/images/gallery/vc-02.jpg",
            alt: "붉은 꽃등과 나무 조각 지붕 아래에서 칵테일을 만드는 바텐더",
            caption: "백바 위를 밝히는 붉은 꽃등과 전통 나무 처마",
          },
          {
            src: "/images/gallery/vc-05.jpg",
            alt: "골목 바 안쪽에 놓인 스티커 가득한 업라이트 피아노",
            caption: "깊은 밤의 연주를 기다리는 스트리트 스티커 피아노",
          },
        ],
        quote:
          "거리는 아름다워지기 위해 누구의 허락도 구하지 않았다. 그저 묵묵히 자신의 밤을 살아갈 뿐이다.",
      },
    },
  },
}
