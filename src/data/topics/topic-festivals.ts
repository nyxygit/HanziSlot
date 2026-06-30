import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const topicFestivals: Level = {
  id: "topic-festivals",
  name: "Festivals & Holidays",
  description: "Talk about Chinese holidays, traditions, and celebrations",
  category: "topic",
  topic: "Festivals",
  pattern: {
    id: "mixed",
    name: "Mixed Patterns",
    description: "Practice festival-themed sentences using multiple sentence structures",
    structure: ["subject", "verb", "object"],
  },
  starThresholds: [18, 12, 6],
  sentences: [
    {
      id: "tft-s1",
      english: "Chinese New Year is very important.",
      parts: [
        { chinese: "春节", pinyin: "chūn jié", english: "Spring Festival", partOfSpeech: "subject", distractors: ["中秋节", "端午节", "国庆节", "圣诞节"] },
        { chinese: "很", pinyin: "hěn", english: "very", partOfSpeech: "particle", distractors: getDistractors("particle", "很", 2) },
        { chinese: "重要", pinyin: "zhòng yào", english: "important", partOfSpeech: "adjective", distractors: ["热闹", "好玩", "特别", "有意思"] },
      ],
    },
    {
      id: "tft-s2",
      english: "During Spring Festival, I go home.",
      parts: [
        { chinese: "春节", pinyin: "chūn jié", english: "Spring Festival", partOfSpeech: "time", distractors: ["中秋节", "国庆节", "寒假", "暑假"] },
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "回家", pinyin: "huí jiā", english: "go home", partOfSpeech: "verb", distractors: ["去旅行", "出去玩", "去吃饭", "去拜访"] },
      ],
    },
    {
      id: "tft-s3",
      english: "My favorite holiday is National Day.",
      parts: [
        { chinese: "我最喜欢的节日", pinyin: "wǒ zuì xǐ huān de jié rì", english: "my favorite holiday", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "是", pinyin: "shì", english: "is", partOfSpeech: "particle", distractors: getDistractors("particle", "是", 2) },
        { chinese: "国庆节", pinyin: "guó qìng jié", english: "National Day", partOfSpeech: "noun", distractors: ["春节", "中秋节", "元旦", "劳动节"] },
      ],
    },
    {
      id: "tft-s4",
      english: "I have watched the Spring Festival Gala.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "看过", pinyin: "kàn guò", english: "have watched", partOfSpeech: "verb", distractors: ["看过", "听过", "去过", "做过"] },
        { chinese: "春晚", pinyin: "chūn wǎn", english: "Spring Festival Gala", partOfSpeech: "object", distractors: ["春节电影", "元宵晚会", "中秋节目", "国庆表演"] },
      ],
    },
    {
      id: "tft-s5",
      english: "I will travel with friends during the holiday.",
      parts: [
        { chinese: "放假的时候", pinyin: "fàng jià de shí hòu", english: "during the holiday", partOfSpeech: "time", distractors: [], static: true },
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "要", pinyin: "yào", english: "will / want to", partOfSpeech: "modal", distractors: ["想", "会", "能", "可以"] },
        { chinese: "跟朋友一起旅游", pinyin: "gēn péng yǒu yī qǐ lǚ yóu", english: "travel with friends", partOfSpeech: "verb", distractors: ["跟家人一起去玩", "跟同学去吃饭", "一个人去旅行", "在家休息"] },
      ],
    },
    {
      id: "tft-s6",
      english: "If I have vacation, I will go back home.",
      parts: [
        { chinese: "如果", pinyin: "rú guǒ", english: "if", partOfSpeech: "conjunction", distractors: getDistractors("conjunction", "如果", 3) },
        { chinese: "我放假", pinyin: "wǒ fàng jià", english: "I have vacation", partOfSpeech: "clause", distractors: ["我有时间", "我有钱", "我毕业", "我下课"] },
        { chinese: "就", pinyin: "jiù", english: "then", partOfSpeech: "adverb", distractors: ["也", "还", "都", "不"] },
        { chinese: "回家", pinyin: "huí jiā", english: "go back home", partOfSpeech: "verb", distractors: ["去旅游", "去玩", "去看朋友", "去吃饭"] },
      ],
    },
  ],
};
