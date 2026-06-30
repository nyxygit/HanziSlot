import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const topicDiningOut: Level = {
  id: "topic-dining-out",
  name: "Dining Out",
  description: "Order food, ask for the menu, and pay at restaurants in Chinese",
  category: "topic",
  topic: "Dining Out",
  pattern: {
    id: "mixed",
    name: "Mixed Patterns",
    description: "Practice dining-out sentences using multiple sentence structures",
    structure: ["subject", "verb", "object"],
  },
  starThresholds: [18, 12, 6],
  sentences: [
    {
      id: "tdo-s1",
      english: "I want to order some dishes.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "想", pinyin: "xiǎng", english: "would like to", partOfSpeech: "modal", distractors: ["要", "会", "能", "可以"] },
        { chinese: "点菜", pinyin: "diǎn cài", english: "order dishes", partOfSpeech: "verb", distractors: ["点酒", "点饭", "买单", "打包"] },
      ],
    },
    {
      id: "tdo-s2",
      english: "Please bring me the menu.",
      parts: [
        { chinese: "请", pinyin: "qǐng", english: "please", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "给我", pinyin: "gěi wǒ", english: "give me", partOfSpeech: "verb", distractors: ["拿来", "看看", "送来", "拿给"] },
        { chinese: "菜单", pinyin: "cài dān", english: "menu", partOfSpeech: "object", distractors: ["账单", "筷子", "杯子", "纸巾"] },
      ],
    },
    {
      id: "tdo-s3",
      english: "This dish is not spicy enough.",
      parts: [
        { chinese: "这个菜", pinyin: "zhè gè cài", english: "this dish", partOfSpeech: "subject", distractors: ["那个菜", "这个汤", "这个饭", "这个肉"] },
        { chinese: "不够", pinyin: "bú gòu", english: "not enough", partOfSpeech: "adverb", distractors: ["不太", "不很", "没有", "很不"] },
        { chinese: "辣", pinyin: "là", english: "spicy", partOfSpeech: "adjective", distractors: ["咸", "甜", "酸", "好吃"] },
      ],
    },
    {
      id: "tdo-s4",
      english: "We ate hotpot yesterday.",
      parts: [
        { chinese: "昨天", pinyin: "zuó tiān", english: "yesterday", partOfSpeech: "time", distractors: getDistractors("time", "昨天", 3) },
        { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject", distractors: getDistractors("subject", "我们", 3) },
        { chinese: "吃了", pinyin: "chī le", english: "ate", partOfSpeech: "verb", distractors: ["喝了", "买了", "做了", "要了"] },
        { chinese: "火锅", pinyin: "huǒ guō", english: "hotpot", partOfSpeech: "object", distractors: ["烤鸭", "饺子", "烧烤", "炒菜"] },
      ],
    },
    {
      id: "tdo-s5",
      english: "The dishes here are not only delicious but also cheap.",
      parts: [
        { chinese: "这里的菜", pinyin: "zhè lǐ de cài", english: "the dishes here", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "不但", pinyin: "bù dàn", english: "not only", partOfSpeech: "conjunction", distractors: getDistractors("conjunction", "不但", 3) },
        { chinese: "好吃", pinyin: "hǎo chī", english: "delicious", partOfSpeech: "adjective", distractors: getDistractors("adjective", "好吃", 3) },
        { chinese: "而且", pinyin: "ér qiě", english: "but also", partOfSpeech: "conjunction", distractors: getDistractors("conjunction", "而且", 3) },
        { chinese: "便宜", pinyin: "pián yi", english: "cheap", partOfSpeech: "adjective", distractors: getDistractors("adjective", "便宜", 3) },
      ],
    },
    {
      id: "tdo-s6",
      english: "Waiter, please bring the check.",
      parts: [
        { chinese: "服务员", pinyin: "fú wù yuán", english: "waiter / waitress", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "请", pinyin: "qǐng", english: "please", partOfSpeech: "adverb", distractors: ["来", "要", "想", "给"] },
        { chinese: "买单", pinyin: "mǎi dān", english: "pay the bill", partOfSpeech: "verb", distractors: ["结账", "点菜", "打包", "加菜"] },
      ],
    },
  ],
};
