import { PartOfSpeech } from "@/types";

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
  ],
  time: [
    { chinese: "早上", pinyin: "zǎo shang", english: "morning" },
    { chinese: "中午", pinyin: "zhōng wǔ", english: "noon" },
    { chinese: "晚上", pinyin: "wǎn shang", english: "evening / night" },
    { chinese: "今天", pinyin: "jīn tiān", english: "today" },
    { chinese: "明天", pinyin: "míng tiān", english: "tomorrow" },
    { chinese: "昨天", pinyin: "zuó tiān", english: "yesterday" },
  ],
  particle: [
    { chinese: "是", pinyin: "shì", english: "is / am / are" },
    { chinese: "很", pinyin: "hěn", english: "very (used before adj)" },
  ],
  adverb: [
    { chinese: "都", pinyin: "dōu", english: "all / both" },
    { chinese: "也", pinyin: "yě", english: "also / too" },
    { chinese: "还", pinyin: "hái", english: "still / also" },
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

  // Shuffle and take requested count
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
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
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
