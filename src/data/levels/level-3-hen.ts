import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const level3Hen: Level = {
  id: "level-3",
  name: "Describing Things",
  description: "Subject + 很 + Adjective — Learn to describe with adjectives",
  category: "structure",
  pattern: {
    id: "s-hen-adj",
    name: "Subject + 很 + Adjective",
    description: "Use 很 (hěn) to connect a subject with an adjective. In Chinese, 很 is usually used even when 'very' isn't intended.",
    structure: ["subject", "particle", "adjective"],
  },
  starThresholds: [12, 8, 4],
  unlockCondition: "level-2",
  sentences: [
    {
      id: "s1-l3",
      english: "She is beautiful.",
      parts: [
        {
          chinese: "她",
          pinyin: "tā",
          english: "she / her",
          partOfSpeech: "subject",
          distractors: getDistractors("subject", "她", 3),
        },
        {
          chinese: "很",
          pinyin: "hěn",
          english: "very (used before adj)",
          partOfSpeech: "particle",
          distractors: ["是", "不", "要"],
        },
        {
          chinese: "漂亮",
          pinyin: "piào liang",
          english: "beautiful",
          partOfSpeech: "adjective",
          distractors: getDistractors("adjective", "漂亮", 3),
        },
      ],
    },
    {
      id: "s2-l3",
      english: "I am happy.",
      parts: [
        {
          chinese: "我",
          pinyin: "wǒ",
          english: "I / me",
          partOfSpeech: "subject",
          distractors: getDistractors("subject", "我", 3),
        },
        {
          chinese: "很",
          pinyin: "hěn",
          english: "very (used before adj)",
          partOfSpeech: "particle",
          distractors: ["是", "不", "要"],
        },
        {
          chinese: "高兴",
          pinyin: "gāo xìng",
          english: "happy",
          partOfSpeech: "adjective",
          distractors: getDistractors("adjective", "高兴", 3),
        },
      ],
    },
    {
      id: "s3-l3",
      english: "He is tall.",
      parts: [
        {
          chinese: "他",
          pinyin: "tā",
          english: "he / him",
          partOfSpeech: "subject",
          distractors: getDistractors("subject", "他", 3),
        },
        {
          chinese: "很",
          pinyin: "hěn",
          english: "very (used before adj)",
          partOfSpeech: "particle",
          distractors: ["是", "不", "要"],
        },
        {
          chinese: "高",
          pinyin: "gāo",
          english: "tall",
          partOfSpeech: "adjective",
          distractors: getDistractors("adjective", "高", 3),
        },
      ],
    },
    {
      id: "s4-l3",
      english: "It is very big.",
      parts: [
        {
          chinese: "它",
          pinyin: "tā",
          english: "it",
          partOfSpeech: "subject",
          distractors: getDistractors("subject", "它", 3),
        },
        {
          chinese: "很",
          pinyin: "hěn",
          english: "very (used before adj)",
          partOfSpeech: "particle",
          distractors: ["是", "不", "要"],
        },
        {
          chinese: "大",
          pinyin: "dà",
          english: "big",
          partOfSpeech: "adjective",
          distractors: getDistractors("adjective", "大", 3),
        },
      ],
    },
  ],
};
