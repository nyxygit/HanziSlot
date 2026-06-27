import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const level7Le: Level = {
  id: "level-07",
  name: "Completed Actions",
  description: "Subject + Verb + 了 + Object — Learn to express completed actions",
  category: "structure",
  pattern: {
    id: "s-v-le-o",
    name: "Subject + Verb + 了 + Object",
    description: "Add 了 (le) after a verb to indicate an action has been completed.",
    structure: ["subject", "verb", "particle", "object"],
  },
  starThresholds: [9, 6, 3],
  unlockCondition: "level-06",
  sentences: [
    {
      id: "s1-l07",
      english: "I ate an apple.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "吃", pinyin: "chī", english: "eat", partOfSpeech: "verb", distractors: getDistractors("verb", "吃", 3) },
        { chinese: "了", pinyin: "le", english: "(completed action)", partOfSpeech: "particle", distractors: ["过", "的", "着"] },
        { chinese: "苹果", pinyin: "píng guǒ", english: "apple", partOfSpeech: "object", distractors: getDistractors("object", "苹果", 3) },
      ],
    },
    {
      id: "s2-l07",
      english: "He drank water.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getDistractors("subject", "他", 3) },
        { chinese: "喝", pinyin: "hē", english: "drink", partOfSpeech: "verb", distractors: getDistractors("verb", "喝", 3) },
        { chinese: "了", pinyin: "le", english: "(completed action)", partOfSpeech: "particle", distractors: ["过", "的", "着"] },
        { chinese: "水", pinyin: "shuǐ", english: "water", partOfSpeech: "object", distractors: getDistractors("object", "水", 3) },
      ],
    },
    {
      id: "s3-l07",
      english: "She bought a book.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getDistractors("subject", "她", 3) },
        { chinese: "买", pinyin: "mǎi", english: "buy", partOfSpeech: "verb", distractors: getDistractors("verb", "买", 3) },
        { chinese: "了", pinyin: "le", english: "(completed action)", partOfSpeech: "particle", distractors: ["过", "的", "着"] },
        { chinese: "书", pinyin: "shū", english: "book", partOfSpeech: "object", distractors: getDistractors("object", "书", 3) },
      ],
    },
    {
      id: "s4-l07",
      english: "I wrote my homework.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "写", pinyin: "xiě", english: "write", partOfSpeech: "verb", distractors: getDistractors("verb", "写", 3) },
        { chinese: "了", pinyin: "le", english: "(completed action)", partOfSpeech: "particle", distractors: ["过", "的", "着"] },
        { chinese: "作业", pinyin: "zuò yè", english: "homework", partOfSpeech: "object", distractors: getDistractors("object", "作业", 3) },
      ],
    },
  ],
};
