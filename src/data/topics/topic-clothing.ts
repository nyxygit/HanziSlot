import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const topicClothing: Level = {
  id: "topic-clothing",
  name: "👕 Clothing & Fashion",
  description: "Describe clothes, colors, and talk about fashion in Chinese",
  category: "topic",
  topic: "Clothing",
  pattern: {
    id: "mixed",
    name: "Mixed Patterns",
    description: "Practice clothing-themed sentences using multiple sentence structures",
    structure: ["subject", "verb", "object"],
  },
  starThresholds: [18, 12, 6],
  sentences: [
    {
      id: "tc-s1",
      english: "I wear clothes.",
      parts: [
        {
          chinese: "我",
          pinyin: "wǒ",
          english: "I / me",
          partOfSpeech: "subject",
          distractors: getDistractors("subject", "我", 3),
        },
        {
          chinese: "穿",
          pinyin: "chuān",
          english: "wear",
          partOfSpeech: "verb",
          distractors: getDistractors("verb", "穿", 3),
        },
        {
          chinese: "衣服",
          pinyin: "yī fu",
          english: "clothes",
          partOfSpeech: "object",
          distractors: getDistractors("object", "衣服", 3),
        },
      ],
    },
    {
      id: "tc-s2",
      english: "The skirt is very beautiful.",
      parts: [
        {
          chinese: "裙子",
          pinyin: "qún zi",
          english: "skirt",
          partOfSpeech: "subject",
          distractors: ["衣服", "裤子", "衬衫", "鞋子"],
        },
        {
          chinese: "很",
          pinyin: "hěn",
          english: "very",
          partOfSpeech: "particle",
          distractors: getDistractors("particle", "很", 2),
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
      id: "tc-s3",
      english: "She wants to buy shoes.",
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
          chinese: "买",
          pinyin: "mǎi",
          english: "buy",
          partOfSpeech: "verb",
          distractors: getDistractors("verb", "买", 3),
        },
        {
          chinese: "鞋子",
          pinyin: "xié zi",
          english: "shoes",
          partOfSpeech: "object",
          distractors: getDistractors("object", "鞋子", 3),
        },
      ],
    },
    {
      id: "tc-s4",
      english: "The pants are very big.",
      parts: [
        {
          chinese: "裤子",
          pinyin: "kù zi",
          english: "pants",
          partOfSpeech: "subject",
          distractors: ["衣服", "裙子", "衬衫", "鞋子"],
        },
        {
          chinese: "很",
          pinyin: "hěn",
          english: "very",
          partOfSpeech: "particle",
          distractors: getDistractors("particle", "很", 2),
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
    {
      id: "tc-s5",
      english: "The shirt is not new.",
      parts: [
        {
          chinese: "衬衫",
          pinyin: "chèn shān",
          english: "shirt",
          partOfSpeech: "subject",
          distractors: ["衣服", "裤子", "裙子", "鞋子"],
        },
        {
          chinese: "不",
          pinyin: "bù",
          english: "not",
          partOfSpeech: "negation",
          distractors: getDistractors("negation", "不", 2),
        },
        {
          chinese: "新",
          pinyin: "xīn",
          english: "new",
          partOfSpeech: "adjective",
          distractors: getDistractors("adjective", "新", 3),
        },
      ],
    },
    {
      id: "tc-s6",
      english: "Yesterday I bought clothes.",
      parts: [
        {
          chinese: "昨天",
          pinyin: "zuó tiān",
          english: "yesterday",
          partOfSpeech: "time",
          distractors: getDistractors("time", "昨天", 3),
        },
        {
          chinese: "我",
          pinyin: "wǒ",
          english: "I / me",
          partOfSpeech: "subject",
          distractors: getDistractors("subject", "我", 3),
        },
        {
          chinese: "买",
          pinyin: "mǎi",
          english: "buy",
          partOfSpeech: "verb",
          distractors: getDistractors("verb", "买", 3),
        },
        {
          chinese: "衣服",
          pinyin: "yī fu",
          english: "clothes",
          partOfSpeech: "object",
          distractors: getDistractors("object", "衣服", 3),
        },
      ],
    },
  ],
};
