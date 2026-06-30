import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const topicTravel: Level = {
  id: "topic-travel",
  name: "Travel",
  description: "Plan trips, buy tickets, and talk about travel in Chinese",
  category: "topic",
  topic: "Travel",
  pattern: {
    id: "mixed",
    name: "Mixed Patterns",
    description: "Practice travel-themed sentences using multiple sentence structures",
    structure: ["subject", "verb", "object"],
  },
  starThresholds: [18, 12, 6],
  sentences: [
    {
      id: "ttv-s1",
      english: "I want to travel to Shanghai.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "想", pinyin: "xiǎng", english: "would like to", partOfSpeech: "modal", distractors: ["要", "会", "能", "可以"] },
        { chinese: "去", pinyin: "qù", english: "go", partOfSpeech: "verb", distractors: getDistractors("verb", "去", 3) },
        { chinese: "上海旅游", pinyin: "shàng hǎi lǚ yóu", english: "travel to Shanghai", partOfSpeech: "object", distractors: ["北京旅游", "广州旅行", "香港玩", "日本旅行"] },
      ],
    },
    {
      id: "ttv-s2",
      english: "I have been to Shanghai before.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "去过", pinyin: "qù guò", english: "have been to", partOfSpeech: "verb", distractors: ["去过", "去过", "去过", "去过"] },
        { chinese: "上海", pinyin: "shàng hǎi", english: "Shanghai", partOfSpeech: "place", distractors: ["北京", "广州", "深圳", "香港"] },
      ],
    },
    {
      id: "ttv-s3",
      english: "Traveling by train is cheaper than by plane.",
      parts: [
        { chinese: "坐火车", pinyin: "zuò huǒ chē", english: "by train", partOfSpeech: "clause", distractors: ["坐飞机", "坐高铁", "坐汽车", "坐船"] },
        { chinese: "比", pinyin: "bǐ", english: "than", partOfSpeech: "preposition", distractors: ["跟", "和", "对", "给"] },
        { chinese: "坐飞机", pinyin: "zuò fēi jī", english: "by plane", partOfSpeech: "clause", distractors: ["坐火车", "坐高铁", "坐汽车", "坐船"] },
        { chinese: "便宜", pinyin: "pián yi", english: "cheap", partOfSpeech: "adjective", distractors: ["贵", "快", "慢", "方便"] },
      ],
    },
    {
      id: "ttv-s4",
      english: "I will buy a ticket tomorrow.",
      parts: [
        { chinese: "明天", pinyin: "míng tiān", english: "tomorrow", partOfSpeech: "time", distractors: getDistractors("time", "明天", 3) },
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "要", pinyin: "yào", english: "will / want to", partOfSpeech: "modal", distractors: ["想", "会", "能", "可以"] },
        { chinese: "买票", pinyin: "mǎi piào", english: "buy a ticket", partOfSpeech: "verb", distractors: ["订票", "退票", "取票", "换票"] },
      ],
    },
    {
      id: "ttv-s5",
      english: "If I have time, I will travel to China.",
      parts: [
        { chinese: "如果", pinyin: "rú guǒ", english: "if", partOfSpeech: "conjunction", distractors: getDistractors("conjunction", "如果", 3) },
        { chinese: "我有时间", pinyin: "wǒ yǒu shí jiān", english: "I have time", partOfSpeech: "clause", distractors: ["我有钱", "我放假", "我毕业", "我下课"] },
        { chinese: "就", pinyin: "jiù", english: "then", partOfSpeech: "adverb", distractors: ["也", "还", "都", "不"] },
        { chinese: "去中国旅游", pinyin: "qù zhōng guó lǚ yóu", english: "travel to China", partOfSpeech: "clause", distractors: ["去中国学习", "去中国工作", "去日本玩", "去美国看朋友"] },
      ],
    },
    {
      id: "ttv-s6",
      english: "Because the ticket is cheap, I will go.",
      parts: [
        { chinese: "因为", pinyin: "yīn wèi", english: "because", partOfSpeech: "conjunction", distractors: getDistractors("conjunction", "因为", 3) },
        { chinese: "票很便宜", pinyin: "piào hěn pián yi", english: "the ticket is cheap", partOfSpeech: "clause", distractors: ["票很贵", "机票打折", "酒店很便宜", "时间很好"] },
        { chinese: "所以", pinyin: "suǒ yǐ", english: "therefore", partOfSpeech: "conjunction", distractors: getDistractors("conjunction", "所以", 3) },
        { chinese: "我要去", pinyin: "wǒ yào qù", english: "I will go", partOfSpeech: "clause", distractors: ["我要买", "我决定去", "我想去", "我去了"] },
      ],
    },
  ],
};
