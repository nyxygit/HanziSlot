import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const topicFood: Level = {
  id: "topic-food",
  name: "Food & Dining",
  description: "Order food, describe tastes, and talk about eating in Chinese",
  category: "topic",
  topic: "Food & Dining",
  pattern: {
    id: "mixed",
    name: "Mixed Patterns",
    description: "Practice food-themed sentences using multiple sentence structures",
    structure: ["subject", "verb", "object"],
  },
  starThresholds: [18, 12, 6],
  sentences: [
    {
      id: "tfd-s1",
      english: "I want to eat beef noodles.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "想", pinyin: "xiǎng", english: "would like to", partOfSpeech: "modal", distractors: ["要", "会", "能", "可以"] },
        { chinese: "吃", pinyin: "chī", english: "eat", partOfSpeech: "verb", distractors: getDistractors("verb", "吃", 3) },
        { chinese: "牛肉面", pinyin: "niú ròu miàn", english: "beef noodles", partOfSpeech: "object", distractors: ["面条", "米饭", "饺子", "火锅"] },
      ],
    },
    {
      id: "tfd-s2",
      english: "This dish is very spicy.",
      parts: [
        { chinese: "这个菜", pinyin: "zhè gè cài", english: "this dish", partOfSpeech: "subject", distractors: ["那个菜", "这个饭", "那个汤", "这个肉"] },
        { chinese: "很", pinyin: "hěn", english: "very", partOfSpeech: "particle", distractors: getDistractors("particle", "很", 2) },
        { chinese: "辣", pinyin: "là", english: "spicy", partOfSpeech: "adjective", distractors: ["好吃", "咸", "甜", "酸"] },
      ],
    },
    {
      id: "tfd-s3",
      english: "I have eaten Beijing roast duck.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "吃过", pinyin: "chī guò", english: "have eaten (before)", partOfSpeech: "verb", distractors: ["吃过", "喝过", "看过", "去过"] },
        { chinese: "北京烤鸭", pinyin: "běi jīng kǎo yā", english: "Beijing roast duck", partOfSpeech: "object", distractors: ["烤鸭", "火锅", "饺子", "炒饭"] },
      ],
    },
    {
      id: "tfd-s4",
      english: "Today I am eating at a restaurant.",
      parts: [
        { chinese: "今天", pinyin: "jīn tiān", english: "today", partOfSpeech: "time", distractors: getDistractors("time", "今天", 3) },
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "在", pinyin: "zài", english: "at", partOfSpeech: "preposition", distractors: ["去", "到", "从", "给"] },
        { chinese: "饭馆", pinyin: "fàn guǎn", english: "restaurant", partOfSpeech: "place", distractors: ["食堂", "家", "宿舍", "教室"] },
        { chinese: "吃饭", pinyin: "chī fàn", english: "eat a meal", partOfSpeech: "verb", distractors: ["喝酒", "喝茶", "吃面", "做菜"] },
      ],
    },
    {
      id: "tfd-s5",
      english: "I don't eat spicy food.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "不", pinyin: "bù", english: "not", partOfSpeech: "negation", distractors: getDistractors("negation", "不", 2) },
        { chinese: "吃", pinyin: "chī", english: "eat", partOfSpeech: "verb", distractors: getDistractors("verb", "吃", 3) },
        { chinese: "辣的东西", pinyin: "là de dōng xi", english: "spicy things", partOfSpeech: "object", distractors: ["辣的菜", "甜的", "酸的", "咸的"] },
      ],
    },
    {
      id: "tfd-s6",
      english: "Not only is it cheap but also delicious.",
      parts: [
        { chinese: "这个", pinyin: "zhè gè", english: "this", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "不但", pinyin: "bù dàn", english: "not only", partOfSpeech: "conjunction", distractors: getDistractors("conjunction", "不但", 3) },
        { chinese: "便宜", pinyin: "pián yi", english: "cheap", partOfSpeech: "adjective", distractors: getDistractors("adjective", "便宜", 3) },
        { chinese: "而且", pinyin: "ér qiě", english: "but also", partOfSpeech: "conjunction", distractors: getDistractors("conjunction", "而且", 3) },
        { chinese: "好吃", pinyin: "hǎo chī", english: "delicious", partOfSpeech: "adjective", distractors: getDistractors("adjective", "好吃", 3) },
      ],
    },
  ],
};
