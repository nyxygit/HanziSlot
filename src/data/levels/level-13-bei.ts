import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const level13Bei: Level = {
  id: "level-13",
  name: "The Passive Voice",
  description: "Subject + 被 (+ Agent) + Verb + Complement — Learn the passive voice",
  category: "structure",
  pattern: {
    id: "s-bei-v-comp",
    name: "Subject + 被 + Verb + Complement",
    description: "Use 被 (bèi) to indicate the passive voice — the subject receives the action.",
    structure: ["subject", "preposition", "noun", "verb", "complement"],
  },
  starThresholds: [9, 6, 3],
  unlockCondition: "level-12",
  sentences: [
    {
      id: "s1-l13",
      english: "The apple was eaten by him.",
      parts: [
        { chinese: "苹果", pinyin: "píng guǒ", english: "apple", partOfSpeech: "subject", distractors: getDistractors("object", "苹果", 3) },
        { chinese: "被", pinyin: "bèi", english: "(passive marker)", partOfSpeech: "preposition", distractors: ["把", "对", "给"] },
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "noun", distractors: getDistractors("subject", "他", 3) },
        { chinese: "吃", pinyin: "chī", english: "eat", partOfSpeech: "verb", distractors: getDistractors("verb", "吃", 3) },
        { chinese: "了", pinyin: "le", english: "(completed)", partOfSpeech: "complement", distractors: ["完", "到", "好"] },
      ],
    },
    {
      id: "s2-l13",
      english: "My book was taken by him.",
      parts: [
        { chinese: "我的书", pinyin: "wǒ de shū", english: "my book", partOfSpeech: "subject", distractors: ["他的书", "她的书", "你的书"] },
        { chinese: "被", pinyin: "bèi", english: "(passive marker)", partOfSpeech: "preposition", distractors: ["把", "对", "给"] },
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "noun", distractors: getDistractors("subject", "他", 3) },
        { chinese: "拿", pinyin: "ná", english: "take / hold", partOfSpeech: "verb", distractors: ["买", "卖", "放"] },
        { chinese: "走了", pinyin: "zǒu le", english: "away / gone", partOfSpeech: "complement", distractors: ["来了", "到了", "好了"] },
      ],
    },
    {
      id: "s3-l13",
      english: "The clothes were washed by mom.",
      parts: [
        { chinese: "衣服", pinyin: "yī fu", english: "clothes", partOfSpeech: "subject", distractors: getDistractors("object", "衣服", 3) },
        { chinese: "被", pinyin: "bèi", english: "(passive marker)", partOfSpeech: "preposition", distractors: ["把", "对", "给"] },
        { chinese: "妈妈", pinyin: "mā ma", english: "mother", partOfSpeech: "noun", distractors: getDistractors("noun", "妈妈", 3) },
        { chinese: "洗", pinyin: "xǐ", english: "wash", partOfSpeech: "verb", distractors: getDistractors("verb", "洗", 3) },
        { chinese: "干净了", pinyin: "gān jìng le", english: "clean / cleaned", partOfSpeech: "complement", distractors: ["好了", "完了", "清楚了"] },
      ],
    },
    {
      id: "s4-l13",
      english: "The money was used up by me.",
      parts: [
        { chinese: "钱", pinyin: "qián", english: "money", partOfSpeech: "subject", distractors: getDistractors("object", "钱", 3) },
        { chinese: "被", pinyin: "bèi", english: "(passive marker)", partOfSpeech: "preposition", distractors: ["把", "对", "给"] },
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "noun", distractors: getDistractors("subject", "我", 3) },
        { chinese: "花", pinyin: "huā", english: "spend", partOfSpeech: "verb", distractors: ["买", "用", "拿"] },
        { chinese: "完了", pinyin: "wán le", english: "all used up", partOfSpeech: "complement", distractors: ["好了", "到了", "清楚了"] },
      ],
    },
  ],
};
