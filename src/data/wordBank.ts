import { PartOfSpeech } from "@/types";
import { shuffle } from "@/engine/shuffle";

// Distractor words organized by part of speech
// These are used as wrong options in slot columns
// Each word includes pinyin and English meaning for display

interface DistractorEntry {
  chinese: string;
  pinyin: string;
  english: string;
}

export const wordBank: Record<PartOfSpeech, DistractorEntry[]> = {
  subject: [
    { chinese: "他", pinyin: "tā", english: "he / him" },
    { chinese: "她", pinyin: "tā", english: "she / her" },
    { chinese: "它", pinyin: "tā", english: "it" },
    { chinese: "我们", pinyin: "wǒ men", english: "we / us" },
    { chinese: "你们", pinyin: "nǐ men", english: "you (plural)" },
    { chinese: "他们", pinyin: "tā men", english: "they" },
    { chinese: "我", pinyin: "wǒ", english: "I / me" },
    { chinese: "你", pinyin: "nǐ", english: "you" },
    { chinese: "这个", pinyin: "zhè gè", english: "this one" },
    { chinese: "那个", pinyin: "nà gè", english: "that one" },
    { chinese: "一个", pinyin: "yī gè", english: "one" },
    { chinese: "什么", pinyin: "shén me", english: "what" },
    { chinese: "大家", pinyin: "dà jiā", english: "everyone" },
  ],
  verb: [
    { chinese: "吃", pinyin: "chī", english: "eat" },
    { chinese: "喝", pinyin: "hē", english: "drink" },
    { chinese: "看", pinyin: "kàn", english: "read / watch" },
    { chinese: "买", pinyin: "mǎi", english: "buy" },
    { chinese: "去", pinyin: "qù", english: "go" },
    { chinese: "做", pinyin: "zuò", english: "do / make" },
    { chinese: "学", pinyin: "xué", english: "study / learn" },
    { chinese: "写", pinyin: "xiě", english: "write" },
    { chinese: "说", pinyin: "shuō", english: "speak" },
    { chinese: "听", pinyin: "tīng", english: "listen" },
    { chinese: "穿", pinyin: "chuān", english: "wear" },
    { chinese: "卖", pinyin: "mài", english: "sell" },
    { chinese: "教", pinyin: "jiāo", english: "teach" },
    { chinese: "住", pinyin: "zhù", english: "live" },
    { chinese: "来", pinyin: "lái", english: "come" },
    { chinese: "找", pinyin: "zhǎo", english: "look for" },
    { chinese: "放", pinyin: "fàng", english: "put / place" },
    { chinese: "洗", pinyin: "xǐ", english: "wash" },
  ],
  object: [
    { chinese: "苹果", pinyin: "píng guǒ", english: "apple" },
    { chinese: "书", pinyin: "shū", english: "book" },
    { chinese: "水", pinyin: "shuǐ", english: "water" },
    { chinese: "米饭", pinyin: "mǐ fàn", english: "rice" },
    { chinese: "肉", pinyin: "ròu", english: "meat" },
    { chinese: "鱼", pinyin: "yú", english: "fish" },
    { chinese: "面条", pinyin: "miàn tiáo", english: "noodles" },
    { chinese: "茶", pinyin: "chá", english: "tea" },
    { chinese: "咖啡", pinyin: "kā fēi", english: "coffee" },
    { chinese: "电影", pinyin: "diàn yǐng", english: "movie" },
    { chinese: "报纸", pinyin: "bào zhǐ", english: "newspaper" },
    { chinese: "作业", pinyin: "zuò yè", english: "homework" },
    { chinese: "早饭", pinyin: "zǎo fàn", english: "breakfast" },
    { chinese: "午饭", pinyin: "wǔ fàn", english: "lunch" },
    { chinese: "晚饭", pinyin: "wǎn fàn", english: "dinner" },
    { chinese: "酒", pinyin: "jiǔ", english: "alcohol / wine" },
    { chinese: "上班", pinyin: "shàng bān", english: "go to work" },
    { chinese: "衣服", pinyin: "yī fu", english: "clothes" },
    { chinese: "裤子", pinyin: "kù zi", english: "pants" },
    { chinese: "鞋子", pinyin: "xié zi", english: "shoes" },
    { chinese: "衬衫", pinyin: "chèn shān", english: "shirt" },
    { chinese: "裙子", pinyin: "qún zi", english: "skirt" },
    { chinese: "书包", pinyin: "shū bāo", english: "schoolbag / backpack" },
    { chinese: "铅笔", pinyin: "qiān bǐ", english: "pencil" },
    { chinese: "课", pinyin: "kè", english: "class / lesson" },
    { chinese: "东西", pinyin: "dōng xi", english: "thing / stuff" },
    { chinese: "水果", pinyin: "shuǐ guǒ", english: "fruit" },
    { chinese: "碗", pinyin: "wǎn", english: "bowl" },
    { chinese: "筷子", pinyin: "kuài zi", english: "chopsticks" },
    { chinese: "桌子", pinyin: "zhuō zi", english: "table" },
    { chinese: "房间", pinyin: "fáng jiān", english: "room" },
    { chinese: "钱", pinyin: "qián", english: "money" },
    { chinese: "菜", pinyin: "cài", english: "dish / vegetable" },
  ],
  adjective: [
    { chinese: "漂亮", pinyin: "piào liang", english: "beautiful" },
    { chinese: "高兴", pinyin: "gāo xìng", english: "happy" },
    { chinese: "高", pinyin: "gāo", english: "tall" },
    { chinese: "大", pinyin: "dà", english: "big" },
    { chinese: "小", pinyin: "xiǎo", english: "small" },
    { chinese: "好", pinyin: "hǎo", english: "good" },
    { chinese: "忙", pinyin: "máng", english: "busy" },
    { chinese: "累", pinyin: "lèi", english: "tired" },
    { chinese: "冷", pinyin: "lěng", english: "cold" },
    { chinese: "热", pinyin: "rè", english: "hot" },
    { chinese: "便宜", pinyin: "pián yi", english: "cheap" },
    { chinese: "贵", pinyin: "guì", english: "expensive" },
    { chinese: "新", pinyin: "xīn", english: "new" },
    { chinese: "旧", pinyin: "jiù", english: "old (worn)" },
    { chinese: "早", pinyin: "zǎo", english: "early" },
    { chinese: "晚", pinyin: "wǎn", english: "late" },
    { chinese: "快", pinyin: "kuài", english: "fast" },
    { chinese: "慢", pinyin: "màn", english: "slow" },
    { chinese: "多", pinyin: "duō", english: "many / much" },
    { chinese: "少", pinyin: "shǎo", english: "few / little" },
    { chinese: "干净", pinyin: "gān jìng", english: "clean" },
    { chinese: "好吃", pinyin: "hǎo chī", english: "delicious" },
  ],
  noun: [
    { chinese: "学生", pinyin: "xué shēng", english: "student" },
    { chinese: "老师", pinyin: "lǎo shī", english: "teacher" },
    { chinese: "医生", pinyin: "yī shēng", english: "doctor" },
    { chinese: "朋友", pinyin: "péng yǒu", english: "friend" },
    { chinese: "同学", pinyin: "tóng xué", english: "classmate" },
    { chinese: "中国人", pinyin: "zhōng guó rén", english: "Chinese person" },
    { chinese: "美国人", pinyin: "měi guó rén", english: "American person" },
    { chinese: "售货员", pinyin: "shòu huò yuán", english: "shop assistant" },
    { chinese: "哥哥", pinyin: "gē ge", english: "older brother" },
    { chinese: "姐姐", pinyin: "jiě jie", english: "older sister" },
    { chinese: "弟弟", pinyin: "dì di", english: "younger brother" },
    { chinese: "妹妹", pinyin: "mèi mei", english: "younger sister" },
    { chinese: "妈妈", pinyin: "mā ma", english: "mother" },
    { chinese: "爸爸", pinyin: "bà ba", english: "father" },
  ],
  negation: [
    { chinese: "不", pinyin: "bù", english: "not" },
    { chinese: "没", pinyin: "méi", english: "not (have)" },
  ],
  modal: [
    { chinese: "要", pinyin: "yào", english: "want to" },
    { chinese: "想", pinyin: "xiǎng", english: "would like to" },
    { chinese: "会", pinyin: "huì", english: "can / know how to" },
    { chinese: "能", pinyin: "néng", english: "can / be able to" },
    { chinese: "可以", pinyin: "kě yǐ", english: "may / can" },
  ],
  time: [
    { chinese: "早上", pinyin: "zǎo shang", english: "morning" },
    { chinese: "中午", pinyin: "zhōng wǔ", english: "noon" },
    { chinese: "晚上", pinyin: "wǎn shang", english: "evening / night" },
    { chinese: "今天", pinyin: "jīn tiān", english: "today" },
    { chinese: "明天", pinyin: "míng tiān", english: "tomorrow" },
    { chinese: "昨天", pinyin: "zuó tiān", english: "yesterday" },
    { chinese: "现在", pinyin: "xiàn zài", english: "now" },
  ],
  particle: [
    { chinese: "是", pinyin: "shì", english: "is / am / are" },
    { chinese: "很", pinyin: "hěn", english: "very (used before adj)" },
    { chinese: "了", pinyin: "le", english: "(perfective particle)" },
    { chinese: "过", pinyin: "guò", english: "(experiential particle)" },
    { chinese: "的", pinyin: "de", english: "(nominalizer / possessive)" },
    { chinese: "得", pinyin: "de", english: "(complement marker)" },
    { chinese: "来", pinyin: "lái", english: "come" },
    { chinese: "去", pinyin: "qù", english: "go" },
    { chinese: "以外", pinyin: "yǐ wài", english: "aside from / except" },
  ],
  adverb: [
    { chinese: "都", pinyin: "dōu", english: "all / both" },
    { chinese: "也", pinyin: "yě", english: "also / too" },
    { chinese: "还", pinyin: "hái", english: "still / also" },
    { chinese: "就", pinyin: "jiù", english: "then / at once" },
    { chinese: "越", pinyin: "yuè", english: "more / increasingly" },
    { chinese: "越来越", pinyin: "yuè lái yuè", english: "more and more" },
    { chinese: "又", pinyin: "yòu", english: "again / also" },
    { chinese: "一", pinyin: "yī", english: "as soon as / once" },
    { chinese: "才", pinyin: "cái", english: "only then / just" },
    { chinese: "在", pinyin: "zài", english: "(progressive marker)" },
    { chinese: "再", pinyin: "zài", english: "again" },
  ],
  place: [
    { chinese: "学校", pinyin: "xué xiào", english: "school" },
    { chinese: "家", pinyin: "jiā", english: "home" },
    { chinese: "商店", pinyin: "shāng diàn", english: "store" },
    { chinese: "医院", pinyin: "yī yuàn", english: "hospital" },
    { chinese: "超市", pinyin: "chāo shì", english: "supermarket" },
    { chinese: "食堂", pinyin: "shí táng", english: "cafeteria" },
    { chinese: "图书馆", pinyin: "tú shū guǎn", english: "library" },
    { chinese: "教室", pinyin: "jiào shì", english: "classroom" },
    { chinese: "宿舍", pinyin: "sù shè", english: "dormitory" },
    { chinese: "公园", pinyin: "gōng yuán", english: "park" },
    { chinese: "厨房", pinyin: "chú fáng", english: "kitchen" },
    { chinese: "公司", pinyin: "gōng sī", english: "company / office" },
  ],
  preposition: [
    { chinese: "在", pinyin: "zài", english: "at / in / on (location)" },
    { chinese: "把", pinyin: "bǎ", english: "(object marker)" },
    { chinese: "被", pinyin: "bèi", english: "(passive marker)" },
    { chinese: "比", pinyin: "bǐ", english: "than / compared to" },
    { chinese: "给", pinyin: "gěi", english: "for / to / give" },
    { chinese: "对", pinyin: "duì", english: "to / towards / for" },
    { chinese: "连", pinyin: "lián", english: "even" },
    { chinese: "除了", pinyin: "chú le", english: "except / besides" },
  ],
  conjunction: [
    { chinese: "因为", pinyin: "yīn wèi", english: "because" },
    { chinese: "所以", pinyin: "suǒ yǐ", english: "therefore / so" },
    { chinese: "虽然", pinyin: "suī rán", english: "although / though" },
    { chinese: "但是", pinyin: "dàn shì", english: "but / however" },
    { chinese: "如果", pinyin: "rú guǒ", english: "if" },
    { chinese: "只要", pinyin: "zhǐ yào", english: "as long as / provided" },
    { chinese: "不但", pinyin: "bù dàn", english: "not only" },
    { chinese: "而且", pinyin: "ér qiě", english: "but also / moreover" },
  ],
  complement: [
    { chinese: "完", pinyin: "wán", english: "finish / completed" },
    { chinese: "到", pinyin: "dào", english: "reach / arrival" },
    { chinese: "好", pinyin: "hǎo", english: "done / ready" },
    { chinese: "见", pinyin: "jiàn", english: "see / perceive" },
    { chinese: "懂", pinyin: "dǒng", english: "understand" },
    { chinese: "清楚", pinyin: "qīng chu", english: "clearly" },
    { chinese: "走", pinyin: "zǒu", english: "away / off" },
    { chinese: "起来", pinyin: "qǐ lái", english: "up / upward" },
    { chinese: "下去", pinyin: "xià qù", english: "down / continue" },
    { chinese: "出来", pinyin: "chū lái", english: "out / outward" },
  ],
  clause: [
    { chinese: "下雨", pinyin: "xià yǔ", english: "it rains / rain" },
    { chinese: "刮风", pinyin: "guā fēng", english: "wind blows / windy" },
    { chinese: "考试", pinyin: "kǎo shì", english: "take a test / exam" },
    { chinese: "工作", pinyin: "gōng zuò", english: "work" },
    { chinese: "放假", pinyin: "fàng jià", english: "have a vacation" },
    { chinese: "上课", pinyin: "shàng kè", english: "attend class" },
    { chinese: "下课", pinyin: "xià kè", english: "finish class" },
    { chinese: "有空", pinyin: "yǒu kòng", english: "have free time" },
    { chinese: "生病", pinyin: "shēng bìng", english: "get sick" },
    { chinese: "睡觉", pinyin: "shuì jiào", english: "sleep / go to bed" },
    { chinese: "起床", pinyin: "qǐ chuáng", english: "get up" },
    { chinese: "吃饭", pinyin: "chī fàn", english: "eat a meal" },
    { chinese: "回家", pinyin: "huí jiā", english: "go home" },
    { chinese: "知道", pinyin: "zhī dào", english: "know" },
    { chinese: "满意", pinyin: "mǎn yì", english: "satisfied / content" },
  ],
};

export function getDistractors(
  partOfSpeech: PartOfSpeech,
  excludeChinese: string,
  count: number = 3
): string[] {
  const pool = wordBank[partOfSpeech] || [];
  const filtered = pool
    .filter((entry) => entry.chinese !== excludeChinese)
    .map((entry) => entry.chinese);

  // Shuffle (Fisher-Yates) and take requested count
  const shuffled = shuffle(filtered);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Reverse lookup: Chinese character → { pinyin, english }
// Built once from all word bank entries
const chineseLookup: Record<string, { pinyin: string; english: string }> = {};
for (const entries of Object.values(wordBank)) {
  for (const entry of entries) {
    chineseLookup[entry.chinese] = { pinyin: entry.pinyin, english: entry.english };
  }
}

/**
 * Get pinyin and English meaning for any Chinese word in the word bank.
 * Returns undefined if the word is not found.
 */
export function lookupChinese(chinese: string): { pinyin: string; english: string } | undefined {
  return chineseLookup[chinese];
}

export function getDistractorEntries(
  partOfSpeech: PartOfSpeech,
  excludeChinese: string,
  count: number = 3
): { chinese: string; pinyin: string; english: string }[] {
  const pool = wordBank[partOfSpeech] || [];
  const filtered = pool.filter((entry) => entry.chinese !== excludeChinese);
  const shuffled = shuffle(filtered);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
