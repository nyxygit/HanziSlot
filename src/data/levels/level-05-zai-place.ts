import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const level5ZaiPlace: Level = {
  id: "level-05",
  name: "Location Actions",
  description: "Subject + 在 + Place + Verb (+ Object) — Learn to say where things happen",
  category: "structure",
  pattern: {
    id: "s-zai-place-v-o",
    name: "Subject + 在 + Place + Verb + Object",
    description: "Use 在 (zài) to indicate the location where an action takes place. The location comes before the verb.",
    structure: ["subject", "preposition", "place", "verb", "object"],
  },
  starThresholds: [9, 6, 3],
  unlockCondition: "level-04",
  sentences: [
    {
      id: "s1-l05",
      english: "I eat at school.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "preposition", distractors: ["去", "到", "从"] },
        { chinese: "学校", pinyin: "xué xiào", english: "school", partOfSpeech: "place", distractors: getDistractors("place", "学校", 3) },
        { chinese: "吃", pinyin: "chī", english: "eat", partOfSpeech: "verb", distractors: getDistractors("verb", "吃", 3) },
        { chinese: "午饭", pinyin: "wǔ fàn", english: "lunch", partOfSpeech: "object", distractors: getDistractors("object", "午饭", 3) },
      ],
    },
    {
      id: "s2-l05",
      english: "He reads books at the library.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getDistractors("subject", "他", 3) },
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "preposition", distractors: ["去", "到", "从"] },
        { chinese: "图书馆", pinyin: "tú shū guǎn", english: "library", partOfSpeech: "place", distractors: getDistractors("place", "图书馆", 3) },
        { chinese: "看", pinyin: "kàn", english: "read / watch", partOfSpeech: "verb", distractors: getDistractors("verb", "看", 3) },
        { chinese: "书", pinyin: "shū", english: "book", partOfSpeech: "object", distractors: getDistractors("object", "书", 3) },
      ],
    },
    {
      id: "s3-l05",
      english: "She drinks coffee at the store.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getDistractors("subject", "她", 3) },
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "preposition", distractors: ["去", "到", "从"] },
        { chinese: "商店", pinyin: "shāng diàn", english: "store", partOfSpeech: "place", distractors: getDistractors("place", "商店", 3) },
        { chinese: "喝", pinyin: "hē", english: "drink", partOfSpeech: "verb", distractors: getDistractors("verb", "喝", 3) },
        { chinese: "咖啡", pinyin: "kā fēi", english: "coffee", partOfSpeech: "object", distractors: getDistractors("object", "咖啡", 3) },
      ],
    },
    {
      id: "s4-l05",
      english: "I study at home.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "preposition", distractors: ["去", "到", "从"] },
        { chinese: "家", pinyin: "jiā", english: "home", partOfSpeech: "place", distractors: getDistractors("place", "家", 3) },
        { chinese: "学", pinyin: "xué", english: "study / learn", partOfSpeech: "verb", distractors: getDistractors("verb", "学", 3) },
        { chinese: "中文", pinyin: "zhōng wén", english: "Chinese language", partOfSpeech: "object", distractors: ["英文", "日文", "法文"] },
      ],
    },
  ],
};
