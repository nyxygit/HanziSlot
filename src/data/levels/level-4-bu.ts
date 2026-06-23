import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const level4Bu: Level = {
  id: "level-4",
  name: "Saying No",
  description: "Subject + 不 + Verb + Object — Learn to make negative sentences",
  category: "structure",
  pattern: {
    id: "s-bu-v-o",
    name: "Subject + 不 + Verb + Object",
    description: "Use 不 (bù) before a verb to negate it — 'I do not do something'. This is one of the most important grammar patterns.",
    structure: ["subject", "negation", "verb", "object"],
  },
  starThresholds: [12, 8, 4],
  unlockCondition: "level-3",
  sentences: [
    {
      id: "s1-l4",
      english: "I don't eat meat.",
      parts: [
        {
          chinese: "我",
          pinyin: "wǒ",
          english: "I / me",
          partOfSpeech: "subject",
          distractors: getDistractors("subject", "我", 3),
        },
        {
          chinese: "不",
          pinyin: "bù",
          english: "not",
          partOfSpeech: "negation",
          distractors: ["没", "很", "是"],
        },
        {
          chinese: "吃",
          pinyin: "chī",
          english: "eat",
          partOfSpeech: "verb",
          distractors: getDistractors("verb", "吃", 3),
        },
        {
          chinese: "肉",
          pinyin: "ròu",
          english: "meat",
          partOfSpeech: "object",
          distractors: getDistractors("object", "肉", 3),
        },
      ],
    },
    {
      id: "s2-l4",
      english: "He doesn't drink alcohol.",
      parts: [
        {
          chinese: "他",
          pinyin: "tā",
          english: "he / him",
          partOfSpeech: "subject",
          distractors: getDistractors("subject", "他", 3),
        },
        {
          chinese: "不",
          pinyin: "bù",
          english: "not",
          partOfSpeech: "negation",
          distractors: ["没", "很", "是"],
        },
        {
          chinese: "喝",
          pinyin: "hē",
          english: "drink",
          partOfSpeech: "verb",
          distractors: getDistractors("verb", "喝", 3),
        },
        {
          chinese: "酒",
          pinyin: "jiǔ",
          english: "alcohol / wine",
          partOfSpeech: "object",
          distractors: [...getDistractors("object", "酒", 2), "水"],
        },
      ],
    },
    {
      id: "s3-l4",
      english: "She doesn't eat fish.",
      parts: [
        {
          chinese: "她",
          pinyin: "tā",
          english: "she / her",
          partOfSpeech: "subject",
          distractors: getDistractors("subject", "她", 3),
        },
        {
          chinese: "不",
          pinyin: "bù",
          english: "not",
          partOfSpeech: "negation",
          distractors: ["没", "很", "是"],
        },
        {
          chinese: "吃",
          pinyin: "chī",
          english: "eat",
          partOfSpeech: "verb",
          distractors: getDistractors("verb", "吃", 3),
        },
        {
          chinese: "鱼",
          pinyin: "yú",
          english: "fish",
          partOfSpeech: "object",
          distractors: getDistractors("object", "鱼", 3),
        },
      ],
    },
    {
      id: "s4-l4",
      english: "I don't drink coffee.",
      parts: [
        {
          chinese: "我",
          pinyin: "wǒ",
          english: "I / me",
          partOfSpeech: "subject",
          distractors: getDistractors("subject", "我", 3),
        },
        {
          chinese: "不",
          pinyin: "bù",
          english: "not",
          partOfSpeech: "negation",
          distractors: ["没", "很", "是"],
        },
        {
          chinese: "喝",
          pinyin: "hē",
          english: "drink",
          partOfSpeech: "verb",
          distractors: getDistractors("verb", "喝", 3),
        },
        {
          chinese: "咖啡",
          pinyin: "kā fēi",
          english: "coffee",
          partOfSpeech: "object",
          distractors: getDistractors("object", "咖啡", 3),
        },
      ],
    },
  ],
};
