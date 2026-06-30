# Plan: 15 New Topic Levels for First-Year Students in China

## Overview

Create 15 topic-based practice levels, each with 6 sentences using multiple sentence structures from the 30 existing structure levels. Each topic focuses on real-life situations a first-year student in China would encounter. New vocabulary will be added to the word bank for distractor generation.

## Data Model

Each topic level follows the existing pattern in `src/data/topics/`:

```typescript
{
  id: "topic-{slug}",
  name: "🎯 Topic Name",
  description: "Description of the topic",
  category: "topic",
  topic: "TopicName",
  pattern: {
    id: "mixed",
    name: "Mixed Patterns",
    description: "Practice {topic} sentences using multiple sentence structures",
    structure: ["subject", "verb", "object"],
  },
  starThresholds: [18, 12, 6],  // 6 sentences × 3 stars each = 18 max
  sentences: [
    // 6 sentence items, each with parts using various structures
  ],
}
```

## Topic List

### 1. Self-Introduction (自我介绍)

**Sentences (6):**

| # | English | Target Structure | Key Vocab to Add to Word Bank |
|---|---------|-----------------|-------------------------------|
| 1 | I am a first-year student. | 是 (Level 3 identity) | 大一新生 |
| 2 | My major is Chinese. | 是 + Noun | 专业 |
| 3 | I am from America. | 是...的 + Place (Level 14) | 国家 |
| 4 | My name is Wang Ming. | 叫 (Verb) | 叫, 名字 |
| 5 | I can speak a little Chinese. | Modal 会 (Level 6) | 一点 |
| 6 | I am very happy to meet you. | 很 + Adj (Level 2) | 认识, 高兴 |

**New word bank entries:** `{ chinese: "大一新生", pinyin: "dà yī xīn shēng", english: "first-year student" }`, `{ chinese: "专业", pinyin: "zhuān yè", english: "major / specialty" }`, `{ chinese: "名字", pinyin: "míng zi", english: "name" }`, `{ chinese: "叫", pinyin: "jiào", english: "to be called / to call" }`, `{ chinese: "认识", pinyin: "rèn shi", english: "meet / know someone" }`, `{ chinese: "一点", pinyin: "yī diǎn", english: "a little" }`, `{ chinese: "国家", pinyin: "guó jiā", english: "country" }`, `{ chinese: "美国", pinyin: "měi guó", english: "America" }`

### 2. Daily Routine (日常作息)

**Sentences (6):**

| # | English | Target Structure | Key Vocab to Add |
|---|---------|-----------------|------------------|
| 1 | I wake up at 7 every morning. | Time + Subject + Verb (Level 4) | 起床, 点, 每天 |
| 2 | In the morning I go to class. | Time + S + V + O (Level 4) | 上课, 去 |
| 3 | I eat lunch at the cafeteria. | 在 + Place + V (Level 5) | 食堂, 餐厅 |
| 4 | I can sleep at 10pm. | Modal + Time + V (Level 6) | 睡觉, 晚上, 十点 |
| 5 | Yesterday I studied Chinese. | Time + V + 了 (Level 7) | 昨天, 学习 |
| 6 | I am doing homework now. | 在 + V (Progressive, Level 10) | 做作业 |

**New word bank entries:** `{ chinese: "起床", pinyin: "qǐ chuáng", english: "get up" }` - exists in clause, move/add to verb, `{ chinese: "点", pinyin: "diǎn", english: "o'clock" }` - add to time, `{ chinese: "每天", pinyin: "měi tiān", english: "every day" }` - add to time, `{ chinese: "上课", pinyin: "shàng kè", english: "go to class" }` - exists in clause, `{ chinese: "睡觉", pinyin: "shuì jiào", english: "sleep" }` - exists in clause, `{ chinese: "学习", pinyin: "xué xí", english: "study / learn" }` - add to verb, `{ chinese: "做作业", pinyin: "zuò zuò yè", english: "do homework" }` - add to clause

### 3. Food & Dining (饮食)

**Sentences (6):**

| # | English | Target Structure | Key Vocab to Add |
|---|---------|-----------------|------------------|
| 1 | I want to eat noodles. | Modal + V + O (Level 6) | 牛肉面 |
| 2 | This dish is very spicy. | 很 + Adj (Level 2) | 辣, 味道 |
| 3 | I have eaten Beijing duck. | V + 过 (Level 8) | 北京烤鸭 |
| 4 | Today I eat at a restaurant. | Time + 在 + Place + V (L4+L5) | 饭馆 |
| 5 | I don't eat spicy food. | Negation 不 + V (Level 9) | 辣的食物 |
| 6 | Not only is it cheap but also delicious. | 不但...而且 (Level 27) | 好吃 |

**New word bank entries:** `{ chinese: "牛肉面", pinyin: "niú ròu miàn", english: "beef noodles" }` - object, `{ chinese: "辣", pinyin: "là", english: "spicy" }` - adjective, `{ chinese: "北京烤鸭", pinyin: "běi jīng kǎo yā", english: "Beijing roast duck" }` - object, `{ chinese: "饭馆", pinyin: "fàn guǎn", english: "restaurant" }` - place, `{ chinese: "餐厅", pinyin: "cān tīng", english: "dining hall / restaurant" }` - place, `{ chinese: "味道", pinyin: "wèi dào", english: "flavor / taste" }` - noun, `{ chinese: "好吃", pinyin: "hǎo chī", english: "delicious" }` - already exists

### 4. Transportation (交通)

**Sentences (6):**

| # | English | Target Structure | Key Vocab to Add |
|---|---------|-----------------|------------------|
| 1 | I take the subway to school. | Subject + V + O (Level 1 SVO) | 坐, 地铁 |
| 2 | She goes to school by bus. | 坐 + Vehicle + V (Level 1 SVO) | 公共汽车, 坐 |
| 3 | The subway is faster than the bus. | 比 comparison (Level 15) | 快 |
| 4 | I can ride a bicycle. | Modal + V + O (Level 6) | 骑, 自行车 |
| 5 | Because the bus is slow, I take the subway. | 因为...所以 (Level 20) | 慢 |
| 6 | Yesterday I took a taxi to school. | Time + V + 了 (Level 7) | 出租车 |

**New word bank entries:** `{ chinese: "坐", pinyin: "zuò", english: "take / ride / sit" }` - verb, `{ chinese: "地铁", pinyin: "dì tiě", english: "subway" }` - object, `{ chinese: "公共汽车", pinyin: "gōng gòng qì chē", english: "bus" }` - object, `{ chinese: "快", pinyin: "kuài", english: "fast" }` - already exists in adjective, `{ chinese: "慢", pinyin: "màn", english: "slow" }` - already exists, `{ chinese: "骑", pinyin: "qí", english: "ride" }` - verb, `{ chinese: "自行车", pinyin: "zì xíng chē", english: "bicycle" }` - object, `{ chinese: "出租车", pinyin: "chū zū chē", english: "taxi" }` - object

### 5. Weather (天气)

**Sentences (6):**

| # | English | Target Structure | Key Vocab to Add |
|---|---------|-----------------|------------------|
| 1 | Today's weather is very good. | 很 + Adj (Level 2) | 天气 |
| 2 | It is hotter today than yesterday. | 比 comparison (Level 15) | 比 |
| 3 | Because it's raining, I stay home. | 因为...所以 (Level 20) | 下雨 |
| 4 | If it rains tomorrow, I won't go out. | 如果...就 (Level 22) | 出去 |
| 5 | The weather is getting warmer. | 越来越 + Adj (Level 18) | 暖, 暖和 |
| 6 | Although it's cold, I go outside. | 虽然...但是 (Level 21) | 外面 |

**New word bank entries:** `{ chinese: "天气", pinyin: "tiān qì", english: "weather" }` - noun, `{ chinese: "暖", pinyin: "nuǎn", english: "warm" }` - adjective, `{ chinese: "暖和", pinyin: "nuǎn huo", english: "warm / nice weather" }` - adjective, `{ chinese: "出去", pinyin: "chū qù", english: "go out" }` - verb, `{ chinese: "外面", pinyin: "wài miàn", english: "outside" }` - place, `{ chinese: "天气很好", pinyin: "tiān qì hěn hǎo", english: "weather is good" }` - clause

### 6. Hobbies & Interests (爱好)

**Sentences (6):**

| # | English | Target Structure | Key Vocab to Add |
|---|---------|-----------------|------------------|
| 1 | I like listening to music. | Subject + V + O (Level 1) | 喜欢, 听音乐 |
| 2 | I can play basketball. | Modal + V + O (Level 6) | 打篮球 |
| 3 | He is more interested in music than me. | 比 comparison (Level 15) | 感兴趣 |
| 4 | My hobby is reading books. | 是 + Noun (Level 3) | 爱好, 看书 |
| 5 | I have been to a concert. | V + 过 (Level 8) | 音乐会 |
| 6 | As long as I have free time, I read. | 只要...就 (Level 25) | 有空 |

**New word bank entries:** `{ chinese: "喜欢", pinyin: "xǐ huān", english: "like / enjoy" }` - verb, `{ chinese: "听音乐", pinyin: "tīng yīn yuè", english: "listen to music" }` - clause, `{ chinese: "打篮球", pinyin: "dǎ lán qiú", english: "play basketball" }` - clause, `{ chinese: "感兴趣", pinyin: "gǎn xìng qù", english: "interested" }` - adjective, `{ chinese: "爱好", pinyin: "ài hào", english: "hobby" }` - noun, `{ chinese: "看书", pinyin: "kàn shū", english: "read a book" }` - clause, `{ chinese: "音乐会", pinyin: "yīn yuè huì", english: "concert" }` - object

### 7. Family (家庭)

**Sentences (6):**

| # | English | Target Structure | Key Vocab to Add |
|---|---------|-----------------|------------------|
| 1 | I have three people in my family. | 有 (possession) | 有, 口, 人 |
| 2 | My elder sister is a teacher. | 是 + Noun (Level 3) | 姐姐 |
| 3 | My father is taller than me. | 比 comparison (Level 15) | 爸爸, 高 |
| 4 | My mother is very busy with work. | 很 + Adj (Level 2) | 妈妈, 工作 |
| 5 | My younger brother is a student. | 是 + Noun (Level 3) | 弟弟 |
| 6 | My family and I live in Beijing. | 在 + Place + V (Level 5) | 住, 北京 |

**New word bank entries:** `{ chinese: "有", pinyin: "yǒu", english: "have / exist" }` - verb, `{ chinese: "口", pinyin: "kǒu", english: "counter for family members" }` - noun, `{ chinese: "人", pinyin: "rén", english: "person / people" }` - noun, `{ chinese: "姐姐", pinyin: "jiě jie", english: "older sister" }` - already exists in noun, `{ chinese: "弟弟", pinyin: "dì di", english: "younger brother" }` - already exists, `{ chinese: "爸爸", pinyin: "bà ba", english: "father" }` - already exists, `{ chinese: "妈妈", pinyin: "mā ma", english: "mother" }` - already exists, `{ chinese: "住", pinyin: "zhù", english: "live / reside" }` - already exists in verb, `{ chinese: "北京", pinyin: "běi jīng", english: "Beijing" }` - place

### 8. Asking for Directions (问路)

**Sentences (6):**

| # | English | Target Structure | Key Vocab to Add |
|---|---------|-----------------|------------------|
| 1 | Where is the library? | 在 + Place (question) | 哪儿, 在 |
| 2 | Go straight and turn left. | Imperative (V + O) | 直走, 左转, 右转 |
| 3 | The library is behind the teaching building. | 在 + Place + Location (Level 5) | 后面, 教学楼 |
| 4 | How far is it from here to the subway station? | Distance question | 多远, 地铁站 |
| 5 | Walk forward about 100 meters. | V + Numeric + Measure | 往前, 米, 一百 |
| 6 | If you go straight, you'll see it. | 如果...就 (Level 22) | 看见, 一直 |

**New word bank entries:** `{ chinese: "哪儿", pinyin: "nǎr", english: "where" }` - place, `{ chinese: "直走", pinyin: "zhí zǒu", english: "go straight" }` - verb, `{ chinese: "左转", pinyin: "zuǒ zhuǎn", english: "turn left" }` - verb, `{ chinese: "右转", pinyin: "yòu zhuǎn", english: "turn right" }` - verb, `{ chinese: "后面", pinyin: "hòu miàn", english: "behind" }` - place, `{ chinese: "教学楼", pinyin: "jiào xué lóu", english: "teaching building" }` - place, `{ chinese: "地铁站", pinyin: "dì tiě zhàn", english: "subway station" }` - place, `{ chinese: "往前", pinyin: "wǎng qián", english: "forward / ahead" }` - adverb, `{ chinese: "米", pinyin: "mǐ", english: "meter" }` - noun, `{ chinese: "看见", pinyin: "kàn jiàn", english: "see / catch sight of" }` - verb, `{ chinese: "一直", pinyin: "yī zhí", english: "straight / continuously" }` - adverb

### 9. Seeing a Doctor (看病)

**Sentences (6):**

| # | English | Target Structure | Key Vocab to Add |
|---|---------|-----------------|------------------|
| 1 | I am not feeling well. | 很 + Adj (Level 2) negated | 舒服 |
| 2 | I have a headache. | 有 + Noun (possession) | 头痛, 发烧 |
| 3 | I want to see a doctor. | Modal + V + O (Level 6) | 看病, 医生 |
| 4 | Yesterday I went to the hospital. | Time + V + 了 (Level 7) | 医院 |
| 5 | The doctor said I should rest more. | Topic comment / reported speech | 告诉, 多休息 |
| 6 | Because I am sick, I can't go to class. | 因为...所以 (Level 20) | 生病, 上课 |

**New word bank entries:** `{ chinese: "舒服", pinyin: "shū fu", english: "comfortable / well" }` - adjective, `{ chinese: "头痛", pinyin: "tóu tòng", english: "headache" }` - noun/object, `{ chinese: "发烧", pinyin: "fā shāo", english: "have a fever" }` - clause, `{ chinese: "看病", pinyin: "kàn bìng", english: "see a doctor" }` - verb, `{ chinese: "医生", pinyin: "yī shēng", english: "doctor" }` - already exists in noun, `{ chinese: "告诉", pinyin: "gào su", english: "tell" }` - verb, `{ chinese: "多休息", pinyin: "duō xiū xi", english: "rest more" }` - verb, `{ chinese: "生病", pinyin: "shēng bìng", english: "get sick" }` - already exists in clause

### 10. Dormitory & Housing (住宿)

**Sentences (6):**

| # | English | Target Structure | Key Vocab to Add |
|---|---------|-----------------|------------------|
| 1 | I live in a dormitory. | 在 + Place + V (Level 5) | 宿舍 |
| 2 | My room is not very big. | 很 + Adj negation (Level 2+9) | 房间 |
| 3 | I have a roommate. | 有 (possession) | 室友 |
| 4 | The dormitory is close to the school. | 离 + Place + Adj | 离, 近 |
| 5 | Although the room is small, it's clean. | 虽然...但是 (Level 21) | 小 |
| 6 | I want to buy some furniture for my room. | Modal + V + O (Level 6) | 家具 |

**New word bank entries:** `{ chinese: "宿舍", pinyin: "sù shè", english: "dormitory" }` - already exists in place, `{ chinese: "房间", pinyin: "fáng jiān", english: "room" }` - already exists in object, `{ chinese: "室友", pinyin: "shì yǒu", english: "roommate" }` - noun, `{ chinese: "离", pinyin: "lí", english: "from / away from" }` - preposition, `{ chinese: "近", pinyin: "jìn", english: "near / close" }` - adjective, `{ chinese: "小", pinyin: "xiǎo", english: "small" }` - already exists in adjective, `{ chinese: "家具", pinyin: "jiā jù", english: "furniture" }` - object

### 11. Travel (旅游)

**Sentences (6):**

| # | English | Target Structure | Key Vocab to Add |
|---|---------|-----------------|------------------|
| 1 | I want to travel to Shanghai. | Modal + V + Place (Level 6) | 旅游, 上海 |
| 2 | I have been to Shanghai. | V + 过 (Level 8) | 去过 |
| 3 | Traveling by train is cheaper than by plane. | 比 comparison (Level 15) | 火车, 飞机 |
| 4 | I will buy a ticket tomorrow. | Time + Modal + V + O (Level 4+6) | 票 |
| 5 | If I have time, I will go to China. | 如果...就 (Level 22) | 去 |
| 6 | Because the ticket is cheap, I will go. | 因为...所以 (Level 20) | 便宜, 贵 |

**New word bank entries:** `{ chinese: "旅游", pinyin: "lǚ yóu", english: "travel / tour" }` - verb, `{ chinese: "上海", pinyin: "shàng hǎi", english: "Shanghai" }` - place, `{ chinese: "火车", pinyin: "huǒ chē", english: "train" }` - object, `{ chinese: "飞机", pinyin: "fēi jī", english: "airplane" }` - object, `{ chinese: "票", pinyin: "piào", english: "ticket" }` - object, `{ chinese: "去过", pinyin: "qù guò", english: "have been to" }` - verb, `{ chinese: "便宜", pinyin: "pián yi", english: "cheap" }` - already exists in adjective

### 12. Dining Out (餐厅)

**Sentences (6):**

| # | English | Target Structure | Key Vocab to Add |
|---|---------|-----------------|------------------|
| 1 | I want to order food. | Modal + V + O (Level 6) | 点菜 |
| 2 | Please bring me the menu. | Imperative (V + O) | 菜单 |
| 3 | This dish is not spicy enough. | 很 + Adj negation (Level 2+9) | 够 |
| 4 | Not only is it delicious but also cheap. | 不但...而且 (Level 27) | 好吃, 便宜 |
| 5 | We ate hotpot yesterday. | Time + V + 了 (Level 7) | 火锅 |
| 6 | Please bring the check. | Imperative | 买单 |

**New word bank entries:** `{ chinese: "点菜", pinyin: "diǎn cài", english: "order dishes" }` - verb, `{ chinese: "菜单", pinyin: "cài dān", english: "menu" }` - object, `{ chinese: "够", pinyin: "gòu", english: "enough" }` - adjective, `{ chinese: "火锅", pinyin: "huǒ guō", english: "hotpot" }` - object, `{ chinese: "买单", pinyin: "mǎi dān", english: "pay the bill" }` - verb

### 13. Festivals & Holidays (节日)

**Sentences (6):**

| # | English | Target Structure | Key Vocab to Add |
|---|---------|-----------------|------------------|
| 1 | Chinese New Year is very important. | 很 + Adj (Level 2) | 春节, 重要 |
| 2 | During Spring Festival, I go home. | Time + S + V (Level 4) | 过年 |
| 3 | My favorite holiday is National Day. | 是 + Noun (Level 3) | 最喜欢, 国庆节 |
| 4 | I have seen the Spring Festival Gala. | V + 过 (Level 8) | 春晚 |
| 5 | During the holiday, I will travel with friends. | Time + Modal + V (Level 4+6) | 跟...一起 |
| 6 | If I have vacation, I will go back home. | 如果...就 (Level 22) | 放假, 回家 |

**New word bank entries:** `{ chinese: "春节", pinyin: "chūn jié", english: "Spring Festival / Chinese New Year" }` - noun/time, `{ chinese: "重要", pinyin: "zhòng yào", english: "important" }` - adjective, `{ chinese: "过年", pinyin: "guò nián", english: "celebrate New Year" }` - verb/clause, `{ chinese: "最喜欢", pinyin: "zuì xǐ huān", english: "favorite / like most" }` - verb, `{ chinese: "国庆节", pinyin: "guó qìng jié", english: "National Day" }` - noun/time, `{ chinese: "春晚", pinyin: "chūn wǎn", english: "Spring Festival Gala" }` - object, `{ chinese: "放假", pinyin: "fàng jià", english: "have a vacation" }` - already exists in clause

### 14. Making Friends (交友)

**Sentences (6):**

| # | English | Target Structure | Key Vocab to Add |
|---|---------|-----------------|------------------|
| 1 | I have a friend from China. | 有 (possession) | 朋友 |
| 2 | I am very happy to meet you. | 很 + Adj (Level 2) | 高兴, 认识 |
| 3 | We often study Chinese together. | Adverb + V + O | 一起, 常常 |
| 4 | He is very friendly to me. | 对 + Person + 很 + Adj (Level 30) | 友好 |
| 5 | She likes playing basketball. | V + V + O (serial verbs) | 喜欢打篮球 |
| 6 | Although we are busy, we still meet. | 虽然...但是 (Level 21) | 见面 |

**New word bank entries:** `{ chinese: "朋友", pinyin: "péng yǒu", english: "friend" }` - already exists in noun, `{ chinese: "高兴", pinyin: "gāo xìng", english: "happy" }` - already exists, `{ chinese: "一起", pinyin: "yī qǐ", english: "together" }` - adverb, `{ chinese: "常常", pinyin: "cháng cháng", english: "often" }` - adverb, `{ chinese: "友好", pinyin: "yǒu hǎo", english: "friendly" }` - adjective, `{ chinese: "喜欢打篮球", pinyin: "xǐ huān dǎ lán qiú", english: "like playing basketball" }` - clause, `{ chinese: "见面", pinyin: "jiàn miàn", english: "meet each other" }` - verb

### 15. Campus Life (校园生活)

**Sentences (6):**

| # | English | Target Structure | Key Vocab to Add |
|---|---------|-----------------|------------------|
| 1 | There is a library on campus. | 有 + Place / 在 + Place | 校园, 图书馆 |
| 2 | I want to join a student club. | Modal + V + O (Level 6) | 参加, 社团 |
| 3 | The library is next to the cafeteria. | 在 + Place + Locative (Level 5) | 旁边, 食堂 |
| 4 | I didn't do my homework yesterday. | Negation 没 + V (Level 9) | 做作业 |
| 5 | As soon as class ends, I go to the library. | 一...就 (Level 23) | 下课 |
| 6 | Because the exam is coming, I study hard. | 因为...所以 (Level 20) | 考试, 努力 |

**New word bank entries:** `{ chinese: "校园", pinyin: "xiào yuán", english: "campus" }` - place, `{ chinese: "图书馆", pinyin: "tú shū guǎn", english: "library" }` - already exists, `{ chinese: "参加", pinyin: "cān jiā", english: "participate / join" }` - verb, `{ chinese: "社团", pinyin: "shè tuán", english: "student club / society" }` - noun, `{ chinese: "旁边", pinyin: "páng biān", english: "next to / beside" }` - place, `{ chinese: "食堂", pinyin: "shí táng", english: "cafeteria" }` - already exists, `{ chinese: "做作业", pinyin: "zuò zuò yè", english: "do homework" }` - clause, `{ chinese: "努力", pinyin: "nǔ lì", english: "hardworking / diligent" }` - adjective

## Structure Distribution Across Topics

Ensuring that topic levels practice structures from across the 30 levels:

| Structure Level | Topic Levels Using It |
|----------------|----------------------|
| L1 SVO | All (base) |
| L2 很 + Adj | 1-SelfIntro, 5-Weather, 6-Hobbies, 7-Family, 9-Doctor, 11-Travel, 13-Festivals, 14-Friends |
| L3 是 + Noun | 1-SelfIntro, 7-Family, 13-Festivals |
| L4 Time word | 2-Daily, 4-Transport, 7-Family, 11-Travel, 13-Festivals |
| L5 在 + Place | 2-Daily, 8-Directions, 10-Dorm, 15-Campus |
| L6 Modal V | 1-SelfIntro, 3-Food, 4-Transport, 6-Hobbies, 9-Doctor, 11-Travel, 12-Dining, 15-Campus |
| L7 了 completed | 2-Daily, 4-Transport, 8-Directions, 9-Doctor, 12-Dining |
| L8 过 experience | 3-Food, 6-Hobbies, 11-Travel, 13-Festivals |
| L9 Negation 不/没 | 3-Food, 10-Dorm, 15-Campus |
| L10 在 progressive | 2-Daily |
| L14 是...的 | 1-SelfIntro |
| L15 比 comparison | 4-Transport, 5-Weather, 6-Hobbies, 7-Family, 11-Travel |
| L18 越来越 | 5-Weather |
| L20 因为...所以 | 4-Transport, 5-Weather, 7-Family, 9-Doctor, 11-Travel, 15-Campus |
| L21 虽然...但是 | 5-Weather, 10-Dorm, 14-Friends |
| L22 如果...就 | 5-Weather, 8-Directions, 11-Travel, 13-Festivals |
| L23 一...就 | 15-Campus |
| L25 只要...就 | 6-Hobbies |
| L27 不但...而且 | 3-Food, 12-Dining |
| L30 对 + Adj | 14-Friends |

## Implementation Steps

### Step 1: Update Word Bank
Add all new vocabulary entries to `src/data/wordBank.ts` before creating topic files, so `getDistractors()` can use them.

### Step 2: Create 15 Topic Level Files
Each file in `src/data/topics/topic-{slug}.ts` following the existing pattern:
- 6 sentences with proper distractors using `getDistractors()`
- Custom distractors where word bank doesn't have enough entries
- `static: true` on subject parts where needed for topic-comment style

### Step 3: Register in levels.ts
Add imports and array entries for all 15 new topic levels after the existing 3 topic levels.

### Step 4: Verify Build
Run `npm run build` to ensure TypeScript compiles and all pages generate successfully.

## Key Quality Rules

1. **Every sentence must sound natural** — prioritize what a Chinese person would actually say over direct English-to-Chinese translation
2. **Use high-frequency words** — avoid rare or overly formal vocabulary
3. **Distractors must be plausible** — use `getDistractors()` for common cases, custom arrays for topic-specific vocab
4. **Static parts** — use `static: true` for subject parts that provide topic context and shouldn't be quizzed
5. **Accurate pinyin** — all pinyin must be correctly toned
6. **Mix of structures per topic** — each topic should use 3-4 different structure patterns across its 6 sentences
