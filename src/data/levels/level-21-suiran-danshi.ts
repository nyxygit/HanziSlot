import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const level21SuiranDanshi: Level = {
  id: "level-21",
  name: "Although & But",
  description: "虽然 + Clause + 但是 + Clause — Learn to express contrast",
  category: "structure",
  pattern: {
    id: "suiran-clause-danshi-clause",
    name: "虽然 + Clause + 但是 + Clause",
    description: "Use 虽然 (suī rán)...但是 (dàn shì) to acknowledge something but then present a contrasting point.",
    structure: ["conjunction", "clause", "conjunction", "clause"],
  },
  starThresholds: [9, 6, 3],
  unlockCondition: "level-20",
  sentences: [
    {
      id: "s1-l21",
      english: "Although it is cold, he still goes out.",
      parts: [
        { chinese: "虽然", pinyin: "suī rán", english: "although", partOfSpeech: "conjunction", distractors: ["因为", "如果", "只要"] },
        { chinese: "很冷", pinyin: "hěn lěng", english: "very cold", partOfSpeech: "clause", distractors: ["很热", "下雨", "刮风"] },
        { chinese: "但是", pinyin: "dàn shì", english: "but", partOfSpeech: "conjunction", distractors: ["所以", "就", "而且"] },
        { chinese: "他出去", pinyin: "tā chū qù", english: "he goes out", partOfSpeech: "clause", distractors: ["他进来", "他回家", "他上课"] },
      ],
    },
    {
      id: "s2-l21",
      english: "Although she is tired, she still studies.",
      parts: [
        { chinese: "虽然", pinyin: "suī rán", english: "although", partOfSpeech: "conjunction", distractors: ["因为", "如果", "只要"] },
        { chinese: "她很累", pinyin: "tā hěn lèi", english: "she is tired", partOfSpeech: "clause", distractors: ["他很忙", "她不高兴", "他没空"] },
        { chinese: "但是", pinyin: "dàn shì", english: "but", partOfSpeech: "conjunction", distractors: ["所以", "就", "而且"] },
        { chinese: "她学", pinyin: "tā xué", english: "she studies", partOfSpeech: "clause", distractors: ["她吃", "她看", "她买"] },
      ],
    },
    {
      id: "s3-l21",
      english: "Although this is expensive, it is very good.",
      parts: [
        { chinese: "虽然", pinyin: "suī rán", english: "although", partOfSpeech: "conjunction", distractors: ["因为", "如果", "只要"] },
        { chinese: "这个很贵", pinyin: "zhè gè hěn guì", english: "this is expensive", partOfSpeech: "clause", distractors: ["那个很便宜", "这个很小", "那个很大"] },
        { chinese: "但是", pinyin: "dàn shì", english: "but", partOfSpeech: "conjunction", distractors: ["所以", "就", "而且"] },
        { chinese: "很好", pinyin: "hěn hǎo", english: "very good", partOfSpeech: "clause", distractors: ["很大", "很小", "很新"] },
      ],
    },
    {
      id: "s4-l21",
      english: "Although it is raining, I still go to school.",
      parts: [
        { chinese: "虽然", pinyin: "suī rán", english: "although", partOfSpeech: "conjunction", distractors: ["因为", "如果", "只要"] },
        { chinese: "下雨", pinyin: "xià yǔ", english: "it rains", partOfSpeech: "clause", distractors: getDistractors("clause", "下雨", 3) },
        { chinese: "但是", pinyin: "dàn shì", english: "but", partOfSpeech: "conjunction", distractors: ["所以", "就", "而且"] },
        { chinese: "我去学校", pinyin: "wǒ qù xué xiào", english: "I go to school", partOfSpeech: "clause", distractors: ["我去商店", "我回家", "我去医院"] },
      ],
    },
  ],
};
