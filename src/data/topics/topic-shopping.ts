import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const topicShopping: Level = {
  id: "topic-shopping",
  name: "🛒 Let's Go Shopping",
  description: "Learn to shop, bargain, and talk about buying things in Chinese",
  category: "topic",
  topic: "Shopping",
  pattern: {
    id: "mixed",
    name: "Mixed Patterns",
    description: "Practice shopping-themed sentences using multiple sentence structures",
    structure: ["subject", "verb", "object"],
  },
  starThresholds: [18, 12, 6],
  sentences: [
    {
      id: "tsh-s1",
      english: "I want to buy an apple.",
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
          chinese: "苹果",
          pinyin: "píng guǒ",
          english: "apple",
          partOfSpeech: "object",
          distractors: getDistractors("object", "苹果", 3),
        },
      ],
    },
    {
      id: "tsh-s2",
      english: "This is very expensive.",
      parts: [
        {
          chinese: "这个",
          pinyin: "zhè gè",
          english: "this one",
          partOfSpeech: "subject",
          distractors: ["那个", "一个", "什么"],
        },
        {
          chinese: "很",
          pinyin: "hěn",
          english: "very",
          partOfSpeech: "particle",
          distractors: getDistractors("particle", "很", 2),
        },
        {
          chinese: "贵",
          pinyin: "guì",
          english: "expensive",
          partOfSpeech: "adjective",
          distractors: getDistractors("adjective", "贵", 3),
        },
      ],
    },
    {
      id: "tsh-s3",
      english: "She is a shop assistant.",
      parts: [
        {
          chinese: "她",
          pinyin: "tā",
          english: "she / her",
          partOfSpeech: "subject",
          distractors: getDistractors("subject", "她", 3),
        },
        {
          chinese: "是",
          pinyin: "shì",
          english: "is / am / are",
          partOfSpeech: "particle",
          distractors: getDistractors("particle", "是", 2),
        },
        {
          chinese: "售货员",
          pinyin: "shòu huò yuán",
          english: "shop assistant",
          partOfSpeech: "noun",
          distractors: ["学生", "医生", "老师", "朋友"],
        },
      ],
    },
    {
      id: "tsh-s4",
      english: "He goes to the supermarket.",
      parts: [
        {
          chinese: "他",
          pinyin: "tā",
          english: "he / him",
          partOfSpeech: "subject",
          distractors: getDistractors("subject", "他", 3),
        },
        {
          chinese: "去",
          pinyin: "qù",
          english: "go",
          partOfSpeech: "verb",
          distractors: getDistractors("verb", "去", 3),
        },
        {
          chinese: "超市",
          pinyin: "chāo shì",
          english: "supermarket",
          partOfSpeech: "place",
          distractors: getDistractors("place", "超市", 3),
        },
      ],
    },
    {
      id: "tsh-s5",
      english: "The shirt is very beautiful.",
      parts: [
        {
          chinese: "衬衫",
          pinyin: "chèn shān",
          english: "shirt",
          partOfSpeech: "subject",
          distractors: ["衣服", "裤子", "裙子", "鞋子"],
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
      id: "tsh-s6",
      english: "Today I buy fruit.",
      parts: [
        {
          chinese: "今天",
          pinyin: "jīn tiān",
          english: "today",
          partOfSpeech: "time",
          distractors: getDistractors("time", "今天", 3),
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
          chinese: "水果",
          pinyin: "shuǐ guǒ",
          english: "fruit",
          partOfSpeech: "object",
          distractors: getDistractors("object", "水果", 3),
        },
      ],
    },
  ],
};
