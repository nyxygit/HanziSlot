import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const level24Chule: Level = {
  id: "level-24",
  name: "Besides & Except",
  description: "除了 + Noun + 以外 + Subject + 还/也 + Verb + Object",
  category: "structure",
  pattern: {
    id: "chule-n-yiwai-s-huan-ye-v-o",
    name: "除了 + Noun + 以外 + Subject + 还/也 + Verb + Object",
    description: "Use 除了...以外 (chú le...yǐ wài) to mean 'besides' or 'except', often paired with 还 (hái) or 也 (yě).",
    structure: ["preposition", "noun", "particle", "subject", "adverb", "verb", "object"],
  },
  starThresholds: [9, 6, 3],
  unlockCondition: "level-23",
  sentences: [
    {
      id: "s1-l24",
      english: "Besides Chinese, I also study English.",
      parts: [
        { chinese: "除了", pinyin: "chú le", english: "besides / except", partOfSpeech: "preposition", distractors: ["因为", "虽然", "如果"] },
        { chinese: "中文", pinyin: "zhōng wén", english: "Chinese language", partOfSpeech: "noun", distractors: ["英文", "日文", "法文"] },
        { chinese: "以外", pinyin: "yǐ wài", english: "aside from", partOfSpeech: "particle", distractors: ["以后", "以前", "以上"] },
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "还", pinyin: "hái", english: "also", partOfSpeech: "adverb", distractors: ["也", "都", "就"] },
        { chinese: "学", pinyin: "xué", english: "study", partOfSpeech: "verb", distractors: getDistractors("verb", "学", 3) },
        { chinese: "英文", pinyin: "yīng wén", english: "English", partOfSpeech: "object", distractors: ["日文", "法文", "中文"] },
      ],
    },
    {
      id: "s2-l24",
      english: "Besides apples, I also like eating pears.",
      parts: [
        { chinese: "除了", pinyin: "chú le", english: "besides / except", partOfSpeech: "preposition", distractors: ["因为", "虽然", "如果"] },
        { chinese: "苹果", pinyin: "píng guǒ", english: "apple", partOfSpeech: "noun", distractors: getDistractors("object", "苹果", 3) },
        { chinese: "以外", pinyin: "yǐ wài", english: "aside from", partOfSpeech: "particle", distractors: ["以后", "以前", "以上"] },
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "也", pinyin: "yě", english: "also", partOfSpeech: "adverb", distractors: ["还", "都", "就"] },
        { chinese: "喜欢吃", pinyin: "xǐ huān chī", english: "like to eat", partOfSpeech: "verb", distractors: ["喜欢喝", "喜欢买", "喜欢看"] },
        { chinese: "梨", pinyin: "lí", english: "pear", partOfSpeech: "object", distractors: ["香蕉", "葡萄", "橘子"] },
      ],
    },
    {
      id: "s3-l24",
      english: "Besides me, everyone is going.",
      parts: [
        { chinese: "除了", pinyin: "chú le", english: "besides / except", partOfSpeech: "preposition", distractors: ["因为", "虽然", "如果"] },
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "noun", distractors: getDistractors("subject", "我", 3) },
        { chinese: "以外", pinyin: "yǐ wài", english: "aside from", partOfSpeech: "particle", distractors: ["以后", "以前", "以上"] },
        { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject", distractors: getDistractors("subject", "大家", 3) },
        { chinese: "都", pinyin: "dōu", english: "all", partOfSpeech: "adverb", distractors: ["也", "还", "就"] },
        { chinese: "去", pinyin: "qù", english: "go", partOfSpeech: "verb", distractors: getDistractors("verb", "去", 3) },
        { chinese: "东西", pinyin: "dōng xi", english: "thing / stuff", partOfSpeech: "object", distractors: getDistractors("object", "东西", 3) },
      ],
    },
    {
      id: "s4-l24",
      english: "Besides tea, he also drinks coffee.",
      parts: [
        { chinese: "除了", pinyin: "chú le", english: "besides / except", partOfSpeech: "preposition", distractors: ["因为", "虽然", "如果"] },
        { chinese: "茶", pinyin: "chá", english: "tea", partOfSpeech: "noun", distractors: getDistractors("object", "茶", 3) },
        { chinese: "以外", pinyin: "yǐ wài", english: "aside from", partOfSpeech: "particle", distractors: ["以后", "以前", "以上"] },
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getDistractors("subject", "他", 3) },
        { chinese: "还", pinyin: "hái", english: "also", partOfSpeech: "adverb", distractors: ["也", "都", "就"] },
        { chinese: "喝", pinyin: "hē", english: "drink", partOfSpeech: "verb", distractors: getDistractors("verb", "喝", 3) },
        { chinese: "咖啡", pinyin: "kā fēi", english: "coffee", partOfSpeech: "object", distractors: getDistractors("object", "咖啡", 3) },
      ],
    },
  ],
};
