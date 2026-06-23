import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const level5Yao: Level = {
  id: "level-5",
  name: "Expressing Wants",
  description: "Subject + 要 + Verb + Object — Learn to say what you want",
  category: "structure",
  pattern: {
    id: "s-yao-v-o",
    name: "Subject + 要 + Verb + Object",
    description: "Use 要 (yào) to express wanting or intending to do something.",
    structure: ["subject", "modal", "verb", "object"],
  },
  starThresholds: [12, 8, 4],
  unlockCondition: "level-4",
  sentences: [
    {
      id: "s1-l5",
      english: "I want to buy a book.",
      parts: [
        {
          chinese: "我",
          pinyin: "wǒ",
          english: "I / me",
          partOfSpeech: "subject",
          distractors: getDistractors("subject", "我", 3),
        },
        {
          chinese: "要",
          pinyin: "yào",
          english: "want to",
          partOfSpeech: "modal",
          distractors: ["想", "会", "能"],
        },
        {
          chinese: "买",
          pinyin: "mǎi",
          english: "buy",
          partOfSpeech: "verb",
          distractors: getDistractors("verb", "买", 3),
        },
        {
          chinese: "书",
          pinyin: "shū",
          english: "book",
          partOfSpeech: "object",
          distractors: getDistractors("object", "书", 3),
        },
      ],
    },
    {
      id: "s2-l5",
      english: "I want to drink water.",
      parts: [
        {
          chinese: "我",
          pinyin: "wǒ",
          english: "I / me",
          partOfSpeech: "subject",
          distractors: getDistractors("subject", "我", 3),
        },
        {
          chinese: "要",
          pinyin: "yào",
          english: "want to",
          partOfSpeech: "modal",
          distractors: ["想", "会", "能"],
        },
        {
          chinese: "喝",
          pinyin: "hē",
          english: "drink",
          partOfSpeech: "verb",
          distractors: getDistractors("verb", "喝", 3),
        },
        {
          chinese: "水",
          pinyin: "shuǐ",
          english: "water",
          partOfSpeech: "object",
          distractors: getDistractors("object", "水", 3),
        },
      ],
    },
    {
      id: "s3-l5",
      english: "She wants to eat noodles.",
      parts: [
        {
          chinese: "她",
          pinyin: "tā",
          english: "she / her",
          partOfSpeech: "subject",
          distractors: getDistractors("subject", "她", 3),
        },
        {
          chinese: "要",
          pinyin: "yào",
          english: "want to",
          partOfSpeech: "modal",
          distractors: ["想", "会", "能"],
        },
        {
          chinese: "吃",
          pinyin: "chī",
          english: "eat",
          partOfSpeech: "verb",
          distractors: getDistractors("verb", "吃", 3),
        },
        {
          chinese: "面条",
          pinyin: "miàn tiáo",
          english: "noodles",
          partOfSpeech: "object",
          distractors: getDistractors("object", "面条", 3),
        },
      ],
    },
    {
      id: "s4-l5",
      english: "He wants to watch a movie.",
      parts: [
        {
          chinese: "他",
          pinyin: "tā",
          english: "he / him",
          partOfSpeech: "subject",
          distractors: getDistractors("subject", "他", 3),
        },
        {
          chinese: "要",
          pinyin: "yào",
          english: "want to",
          partOfSpeech: "modal",
          distractors: ["想", "会", "能"],
        },
        {
          chinese: "看",
          pinyin: "kàn",
          english: "read / watch",
          partOfSpeech: "verb",
          distractors: getDistractors("verb", "看", 3),
        },
        {
          chinese: "电影",
          pinyin: "diàn yǐng",
          english: "movie",
          partOfSpeech: "object",
          distractors: getDistractors("object", "电影", 3),
        },
      ],
    },
  ],
};
