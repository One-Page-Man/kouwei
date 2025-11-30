// 熱門熱炒菜單資料
const hotDishes = [
  // === 小菜類 ===
  {
    "name": "梅汁番茄",
    "price": "80",
    "desc": "一顆顆去皮的小番茄，吸飽了特調的梅子醬汁。咬下瞬間酸甜果汁在口中爆漿，冰涼透心，是夏日最解膩的開胃涼菜。",
    "image": "data/picture/PlumSauceTomato.jpg",
    "tag": "酸甜爆漿",
    "category": "小菜",
    "spicyLevel": 0
  },
  {
    "name": "冰梅苦瓜",
    "price": "待定",
    "desc": "嚴選新鮮青苦瓜，片薄後冰鎮以保留爽脆口感。佐以冰梅醬醃漬入味，酸甜的滋味巧妙中和了苦味，入口回甘清爽。",
    "image": "data/picture/PlumSauceBitterMelon.jpg",
    "tag": "清脆回甘",
    "category": "小菜",
    "spicyLevel": 0
  },
  {
    "name": "韓式泡菜",
    "price": "55",
    "desc": "選用口感脆甜的山東大白菜，經鹽巴殺青脫水。加入蒜末、辣椒與特調糖醋醬汁醃漬，酸辣帶勁的滋味，越吃越順口。",
    "image": "data/picture/Kimchi.jpg",
    "tag": "開胃辛辣",
    "category": "小菜",
    "spicyLevel": 2
  },
  // === 青菜類 ====
  {
    "name": "酸筍空心菜",
    "price": "130",
    "desc": "選用道地客家酸筍與鮮嫩空心菜大火快炒，酸筍獨特的發酵酸香與濃郁蒜末完美融合，口感清脆爽口，酸香開胃，解膩又下飯。",
    "image": "data/picture/WaterSpinachWithSourBamboo.jpg",
    "tag": "酸香開胃",
    "category": "青菜",
    "spicyLevel": 1
  },

  // === 雞肉類 ===
  {
    "name": "流口水雞",
    "price": "180",
    "desc": "嚴選帶骨雞腿手工去骨，保留皮脆肉嫩的絕佳口感，淋上特製紅油醬汁，搭配爽脆黃瓜絲與花生碎，集麻、辣、鮮、香於一身，讓人食指大動。",
    "image": "data/picture/MouthWateringChicken.jpg",
    "tag": "麻辣鮮香",
    "category": "雞肉",
    "spicyLevel": 3
  },
  {
    "name": "口味油雞",
    "price": "170",
    "desc": "堅持採用帶骨雞腿手工去骨，肉質鮮嫩多汁，鋪上滿滿特製蔥油醬，蔥香濃郁撲鼻，鹹香滋味完全滲透進雞肉中，清爽不油膩。",
    "image": "data/picture/ScallionOilChicken.jpg",
    "tag": "蔥香濃郁",
    "category": "雞肉",
    "spicyLevel": 0
  },
  {
    "name": "宮保雞丁",
    "price": "160",
    "desc": "大火快炒雞丁、乾辣椒與花生，雞肉滑嫩帶有鑊氣，醬汁鹹甜微辣，花生的酥脆豐富了口感，經典熱炒滋味。",
    "image": "data/picture/KungPaoChicken.jpg",
    "tag": "經典熱炒",
    "category": "雞肉",
    "spicyLevel": 2
  },
  {
    "name": "梅子雞丁",
    "price": "160",
    "desc": "嚴選鮮嫩去骨雞腿肉，裹上濃郁的梅子醬汁翻炒。酸甜滋味適中，色澤油亮誘人，入口帶有淡淡梅香，口感軟嫩多汁。",
    "image": "data/picture/PlumSauceChicken.jpg",
    "tag": "酸甜下飯",
    "category": "雞肉",
    "spicyLevel": 0
  },
  {
    "name": "麻油雞湯",
    "price": "280",
    "desc": "嚴選麻油與老薑爆香，搭配鮮嫩雞腿肉燉煮。湯頭帶有濃厚迷人的酒香與麻油香氣，肉質彈牙，入口暖胃更暖心，是滋補聖品。",
    "image": "data/picture/SesameOilChickenSoup.jpg",
    "tag": "暖胃補身",
    "category": "雞肉",
    "spicyLevel": 0
  },

  // === 豬肉類 ===
  {
    "name": "古早味控肉",
    "price": "200",
    "desc": "經典傳統滷法，選用肥瘦相間的五花肉慢火滷製，色澤紅亮，肥肉入口即化，瘦肉軟嫩入味，佐以蔥絲提味。",
    "image": "data/picture/BraisedPork.jpg",
    "tag": "軟嫩入味",
    "category": "豬肉",
    "spicyLevel": 0
  },

  // === 海鮮類 ===
  {
    "name": "金沙中卷",
    "price": "190",
    "desc": "新鮮中卷酥炸後，拌入炒至發泡呈現泡沫狀的鹹蛋黃（金沙）。金沙均勻包裹沾附在食材表面，口感Q彈鹹香，且能長時間保持酥脆不洩油。",
    "image": "data/picture/SaltedEggSquid.jpg",
    "tag": "Q彈鹹香",
    "category": "海鮮",
    "spicyLevel": 0
  },
  {
    "name": "金沙蝦球",
    "price": "200",
    "desc": "酥脆的大蝦球裹滿濃郁鹹蛋黃（金沙），搭配四季豆增添清爽，每一口都能吃到鹹香沙質口感與蝦肉的鮮甜。",
    "image": "data/picture/SaltedEggShrimp.jpg",
    "tag": "鹹香酥脆",
    "category": "海鮮",
    "spicyLevel": 0
  },
  {
    "name": "酸湯烤魚",
    "price": "450",
    "desc": "大份量烤魚佐以大量酸菜與蔥花燉煮，湯頭酸香開胃，魚肉吸滿精華湯汁，鮮美中帶有酸菜的爽脆口感。",
    "image": "data/picture/SourSoupGrilledFish.jpg",
    "tag": "酸爽鮮美",
    "category": "海鮮",
    "spicyLevel": 1
  },
  {
    "name": "麻辣烤魚",
    "price": "450",
    "desc": "源自四川重慶的傳統名吃，選用肉質細緻的金目鱸魚，佐以自製麻辣醬。雖紅通通一片，但風味溫和順暢，魚肉鮮嫩入味，香辣過癮。",
    "image": "data/picture/SpicyGrilledFish.jpg",
    "tag": "香辣過癮",
    "category": "海鮮",
    "spicyLevel": 3
  }
];
