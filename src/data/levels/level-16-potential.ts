import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const level16Potential: Level = {
  id: "level-16",
  name: "Can & Cannot",
  description: "Subject + Verb + 得/不 + Complement — Learn to express potential",
  category: "structure",
  pattern: {
    id: "s-v-de-bu-comp",
    name: "Subject + Verb + 得/不 + Complement",
    description: "Insert 得 (dé) or 不 (bù) between a verb and its resultative complement to express can/cannot.",
    structure: ["subject", "verb", "particle", "complement"],
  },
  starThresholds: [9, 6, 3],
  unlockCondition: "level-15",
  sentences: [
    {
      id: "s1-l16",
      english: "I can finish eating.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "吃", pinyin: "chī", english: "eat", partOfSpeech: "verb", distractors: getDistractors("verb", "吃", 3) },
        { chinese: "得", pinyin: "de", english: "(potential marker)", partOfSpeech: "particle", distractors: ["不", "了", "的"] },
        { chinese: "完", pinyin: "wán", english: "finish", partOfSpeech: "complement", distractors: ["到", "好", "懂"] },
      ],
    },
    {
      id: "s2-l16",
      english: "I cannot finish eating.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "吃", pinyin: "chī", english: "eat", partOfSpeech: "verb", distractors: getDistractors("verb", "吃", 3) },
        { chinese: "不", pinyin: "bù", english: "not", partOfSpeech: "particle", distractors: ["得", "了", "的"] },
        { chinese: "完", pinyin: "wán", english: "finish", partOfSpeech: "complement", distractors: ["到", "好", "懂"] },
      ],
    },
    {
      id: "s3-l16",
      english: "I can understand what I hear.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "听", pinyin: "tīng", english: "listen", partOfSpeech: "verb", distractors: getDistractors("verb", "听", 3) },
        { chinese: "得", pinyin: "de", english: "(potential marker)", partOfSpeech: "particle", distractors: ["不", "了", "的"] },
        { chinese: "懂", pinyin: "dǒng", english: "understand", partOfSpeech: "complement", distractors: ["清楚", "见", "到"] },
      ],
    },
    {
      id: "s4-l16",
      english: "I cannot see clearly.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "看", pinyin: "kàn", english: "look / see", partOfSpeech: "verb", distractors: getDistractors("verb", "看", 3) },
        { chinese: "不", pinyin: "bù", english: "not", partOfSpeech: "particle", distractors: ["得", "了", "的"] },
        { chinese: "清楚", pinyin: "qīng chu", english: "clearly", partOfSpeech: "complement", distractors: ["见", "到", "懂"] },
      ],
    },
  ],
};
