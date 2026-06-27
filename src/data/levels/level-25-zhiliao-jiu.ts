import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const level25ZhiliaoJiu: Level = {
  id: "level-25",
  name: "As Long As",
  description: "只要 + Clause + 就 + Clause — Learn to express sufficient conditions",
  category: "structure",
  pattern: {
    id: "zhiliao-clause-jiu-clause",
    name: "只要 + Clause + 就 + Clause",
    description: "Use 只要 (zhǐ yào)...就 (jiù) to say 'as long as X happens, then Y will happen'.",
    structure: ["conjunction", "clause", "adverb", "clause"],
  },
  starThresholds: [9, 6, 3],
  unlockCondition: "level-24",
  sentences: [
    {
      id: "s1-l25",
      english: "As long as you work hard, you will succeed.",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "只要", pinyin: "zhǐ yào", english: "as long as", partOfSpeech: "conjunction", distractors: ["因为", "虽然", "如果"] },
        { chinese: "努力", pinyin: "nǔ lì", english: "work hard", partOfSpeech: "clause", distractors: ["学习", "工作", "帮忙"] },
        { chinese: "就", pinyin: "jiù", english: "then", partOfSpeech: "adverb", distractors: ["也", "都", "还"] },
        { chinese: "能成功", pinyin: "néng chéng gōng", english: "can succeed", partOfSpeech: "clause", distractors: ["能做好", "可以学", "会进步"] },
      ],
    },
    {
      id: "s2-l25",
      english: "As long as you have money, you can buy it.",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "只要", pinyin: "zhǐ yào", english: "as long as", partOfSpeech: "conjunction", distractors: ["因为", "虽然", "如果"] },
        { chinese: "有钱", pinyin: "yǒu qián", english: "have money", partOfSpeech: "clause", distractors: ["有空", "有时间", "有车"] },
        { chinese: "就", pinyin: "jiù", english: "then", partOfSpeech: "adverb", distractors: ["也", "都", "还"] },
        { chinese: "可以买", pinyin: "kě yǐ mǎi", english: "can buy", partOfSpeech: "clause", distractors: ["可以去", "可以吃", "可以看"] },
      ],
    },
    {
      id: "s3-l25",
      english: "As long as it doesn't rain, I will go.",
      parts: [
        { chinese: "只要", pinyin: "zhǐ yào", english: "as long as", partOfSpeech: "conjunction", distractors: ["因为", "虽然", "如果"] },
        { chinese: "不下雨", pinyin: "bú xià yǔ", english: "doesn't rain", partOfSpeech: "clause", distractors: ["不刮风", "不冷", "不热"] },
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "就", pinyin: "jiù", english: "then", partOfSpeech: "adverb", distractors: ["也", "都", "还"] },
        { chinese: "去", pinyin: "qù", english: "go", partOfSpeech: "clause", distractors: ["来", "做", "买"] },
      ],
    },
    {
      id: "s4-l25",
      english: "As long as you are happy, I am happy.",
      parts: [
        { chinese: "只要", pinyin: "zhǐ yào", english: "as long as", partOfSpeech: "conjunction", distractors: ["因为", "虽然", "如果"] },
        { chinese: "你高兴", pinyin: "nǐ gāo xìng", english: "you are happy", partOfSpeech: "clause", distractors: ["你满意", "你舒服", "你愿意"] },
        { chinese: "就", pinyin: "jiù", english: "then", partOfSpeech: "adverb", distractors: ["也", "都", "还"] },
        { chinese: "我高兴", pinyin: "wǒ gāo xìng", english: "I am happy", partOfSpeech: "clause", distractors: ["我满意", "我舒服", "我愿意"] },
      ],
    },
  ],
};
