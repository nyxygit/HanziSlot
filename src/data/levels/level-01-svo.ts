import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const level1SVO: Level = {
  id: "level-01",
  name: "Basic Actions",
  description: "Subject + Verb + Object — Learn to form simple action sentences",
  category: "structure",
  pattern: {
    id: "s-v-o",
    name: "Subject + Verb + Object",
    description: "The most fundamental Chinese sentence structure: Who does what to what.",
    structure: ["subject", "verb", "object"],
  },
  starThresholds: [12, 8, 4],
  sentences: [
    {
      id: "s1-l01",
      english: "I eat an apple.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "吃", pinyin: "chī", english: "eat", partOfSpeech: "verb", distractors: getDistractors("verb", "吃", 3) },
        { chinese: "苹果", pinyin: "píng guǒ", english: "apple", partOfSpeech: "object", distractors: getDistractors("object", "苹果", 3) },
      ],
    },
    {
      id: "s2-l01",
      english: "He reads a book.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getDistractors("subject", "他", 3) },
        { chinese: "看", pinyin: "kàn", english: "read / watch", partOfSpeech: "verb", distractors: getDistractors("verb", "看", 3) },
        { chinese: "书", pinyin: "shū", english: "book", partOfSpeech: "object", distractors: getDistractors("object", "书", 3) },
      ],
    },
    {
      id: "s3-l01",
      english: "She drinks water.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getDistractors("subject", "她", 3) },
        { chinese: "喝", pinyin: "hē", english: "drink", partOfSpeech: "verb", distractors: getDistractors("verb", "喝", 3) },
        { chinese: "水", pinyin: "shuǐ", english: "water", partOfSpeech: "object", distractors: getDistractors("object", "水", 3) },
      ],
    },
    {
      id: "s4-l01",
      english: "I eat rice.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "吃", pinyin: "chī", english: "eat", partOfSpeech: "verb", distractors: getDistractors("verb", "吃", 3) },
        { chinese: "米饭", pinyin: "mǐ fàn", english: "rice", partOfSpeech: "object", distractors: getDistractors("object", "米饭", 3) },
      ],
    },
    {
      id: "s5-l01",
      english: "He reads a newspaper.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getDistractors("subject", "他", 3) },
        { chinese: "看", pinyin: "kàn", english: "read / watch", partOfSpeech: "verb", distractors: getDistractors("verb", "看", 3) },
        { chinese: "报纸", pinyin: "bào zhǐ", english: "newspaper", partOfSpeech: "object", distractors: getDistractors("object", "报纸", 3) },
      ],
    },
  ],
};
