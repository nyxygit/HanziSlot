import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const level9Negation: Level = {
  id: "level-09",
  name: "Saying No",
  description: "Subject + 不/没 + Verb + Object — Learn to make negative sentences",
  category: "structure",
  pattern: {
    id: "s-neg-v-o",
    name: "Subject + 不/没 + Verb + Object",
    description: "Use 不 (bù) to negate habitual or future actions. Use 没 (méi) to negate past actions or possession.",
    structure: ["subject", "negation", "verb", "object"],
  },
  starThresholds: [12, 8, 4],
  unlockCondition: "level-08",
  sentences: [
    {
      id: "s1-l09",
      english: "I don't eat meat.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "不", pinyin: "bù", english: "not", partOfSpeech: "negation", distractors: ["没", "很", "是"] },
        { chinese: "吃", pinyin: "chī", english: "eat", partOfSpeech: "verb", distractors: getDistractors("verb", "吃", 3) },
        { chinese: "肉", pinyin: "ròu", english: "meat", partOfSpeech: "object", distractors: getDistractors("object", "肉", 3) },
      ],
    },
    {
      id: "s2-l09",
      english: "I haven't eaten breakfast.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "没", pinyin: "méi", english: "not (have)", partOfSpeech: "negation", distractors: ["不", "很", "是"] },
        { chinese: "吃", pinyin: "chī", english: "eat", partOfSpeech: "verb", distractors: getDistractors("verb", "吃", 3) },
        { chinese: "早饭", pinyin: "zǎo fàn", english: "breakfast", partOfSpeech: "object", distractors: getDistractors("object", "早饭", 3) },
      ],
    },
    {
      id: "s3-l09",
      english: "He doesn't drink alcohol.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getDistractors("subject", "他", 3) },
        { chinese: "不", pinyin: "bù", english: "not", partOfSpeech: "negation", distractors: ["没", "很", "是"] },
        { chinese: "喝", pinyin: "hē", english: "drink", partOfSpeech: "verb", distractors: getDistractors("verb", "喝", 3) },
        { chinese: "酒", pinyin: "jiǔ", english: "alcohol / wine", partOfSpeech: "object", distractors: [...getDistractors("object", "酒", 2), "水"] },
      ],
    },
    {
      id: "s4-l09",
      english: "She didn't buy clothes.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getDistractors("subject", "她", 3) },
        { chinese: "没", pinyin: "méi", english: "not (have)", partOfSpeech: "negation", distractors: ["不", "很", "是"] },
        { chinese: "买", pinyin: "mǎi", english: "buy", partOfSpeech: "verb", distractors: getDistractors("verb", "买", 3) },
        { chinese: "衣服", pinyin: "yī fu", english: "clothes", partOfSpeech: "object", distractors: getDistractors("object", "衣服", 3) },
      ],
    },
    {
      id: "s5-l09",
      english: "I don't drink coffee.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "不", pinyin: "bù", english: "not", partOfSpeech: "negation", distractors: ["没", "很", "是"] },
        { chinese: "喝", pinyin: "hē", english: "drink", partOfSpeech: "verb", distractors: getDistractors("verb", "喝", 3) },
        { chinese: "咖啡", pinyin: "kā fēi", english: "coffee", partOfSpeech: "object", distractors: getDistractors("object", "咖啡", 3) },
      ],
    },
  ],
};
