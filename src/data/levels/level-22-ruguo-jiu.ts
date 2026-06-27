import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const level22RuguoJiu: Level = {
  id: "level-22",
  name: "If...Then",
  description: "如果 + Clause + 就 + Clause — Learn to express conditions",
  category: "structure",
  pattern: {
    id: "ruguo-clause-jiu-clause",
    name: "如果 + Clause + 就 + Clause",
    description: "Use 如果 (rú guǒ)...就 (jiù) to express 'if...then' conditional sentences.",
    structure: ["conjunction", "clause", "adverb", "clause"],
  },
  starThresholds: [9, 6, 3],
  unlockCondition: "level-21",
  sentences: [
    {
      id: "s1-l22",
      english: "If it rains, I won't go.",
      parts: [
        { chinese: "如果", pinyin: "rú guǒ", english: "if", partOfSpeech: "conjunction", distractors: ["因为", "虽然", "只要"] },
        { chinese: "下雨", pinyin: "xià yǔ", english: "it rains", partOfSpeech: "clause", distractors: getDistractors("clause", "下雨", 3) },
        { chinese: "就", pinyin: "jiù", english: "then", partOfSpeech: "adverb", distractors: ["也", "都", "还"] },
        { chinese: "不去", pinyin: "bú qù", english: "not go", partOfSpeech: "clause", distractors: ["不去", "来", "走"] },
      ],
    },
    {
      id: "s2-l22",
      english: "If you have time, come to my place.",
      parts: [
        { chinese: "如果", pinyin: "rú guǒ", english: "if", partOfSpeech: "conjunction", distractors: ["因为", "虽然", "只要"] },
        { chinese: "你有空", pinyin: "nǐ yǒu kòng", english: "you have free time", partOfSpeech: "clause", distractors: ["他有钱", "她在家", "大家高兴"] },
        { chinese: "就", pinyin: "jiù", english: "then", partOfSpeech: "adverb", distractors: ["也", "都", "还"] },
        { chinese: "来我家", pinyin: "lái wǒ jiā", english: "come to my home", partOfSpeech: "clause", distractors: ["去学校", "来这儿", "去那儿"] },
      ],
    },
    {
      id: "s3-l22",
      english: "If you work hard, you can do it.",
      parts: [
        { chinese: "如果", pinyin: "rú guǒ", english: "if", partOfSpeech: "conjunction", distractors: ["因为", "虽然", "只要"] },
        { chinese: "你努力", pinyin: "nǐ nǔ lì", english: "you work hard", partOfSpeech: "clause", distractors: ["你学习", "你工作", "他帮忙"] },
        { chinese: "就", pinyin: "jiù", english: "then", partOfSpeech: "adverb", distractors: ["也", "都", "还"] },
        { chinese: "能做到", pinyin: "néng zuò dào", english: "can do it", partOfSpeech: "clause", distractors: ["不能做", "可以学", "会成功"] },
      ],
    },
    {
      id: "s4-l22",
      english: "If I have money, I will buy this.",
      parts: [
        { chinese: "如果", pinyin: "rú guǒ", english: "if", partOfSpeech: "conjunction", distractors: ["因为", "虽然", "只要"] },
        { chinese: "我有钱", pinyin: "wǒ yǒu qián", english: "I have money", partOfSpeech: "clause", distractors: ["他有车", "她有空", "大家来"] },
        { chinese: "就", pinyin: "jiù", english: "then", partOfSpeech: "adverb", distractors: ["也", "都", "还"] },
        { chinese: "买这个", pinyin: "mǎi zhè gè", english: "buy this", partOfSpeech: "clause", distractors: ["买那个", "买书", "买衣服"] },
      ],
    },
  ],
};
