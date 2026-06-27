import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const level29Gei: Level = {
  id: "level-29",
  name: "Doing Things for Others",
  description: "Subject + 给 + Person + Verb + Object — Learn to express doing something for someone",
  category: "structure",
  pattern: {
    id: "s-gei-person-v-o",
    name: "Subject + 给 + Person + Verb + Object",
    description: "Use 给 (gěi) before a person to indicate doing something for that person.",
    structure: ["subject", "preposition", "noun", "verb", "object"],
  },
  starThresholds: [9, 6, 3],
  unlockCondition: "level-28",
  sentences: [
    {
      id: "s1-l29",
      english: "I bought a book for him.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "给", pinyin: "gěi", english: "for / to", partOfSpeech: "preposition", distractors: ["对", "跟", "和"] },
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "noun", distractors: getDistractors("subject", "他", 3) },
        { chinese: "买", pinyin: "mǎi", english: "buy", partOfSpeech: "verb", distractors: getDistractors("verb", "买", 3) },
        { chinese: "书", pinyin: "shū", english: "book", partOfSpeech: "object", distractors: getDistractors("object", "书", 3) },
      ],
    },
    {
      id: "s2-l29",
      english: "Mother makes dinner for us.",
      parts: [
        { chinese: "妈妈", pinyin: "mā ma", english: "mother", partOfSpeech: "subject", distractors: getDistractors("noun", "妈妈", 3) },
        { chinese: "给", pinyin: "gěi", english: "for / to", partOfSpeech: "preposition", distractors: ["对", "跟", "和"] },
        { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "noun", distractors: getDistractors("subject", "我们", 3) },
        { chinese: "做", pinyin: "zuò", english: "do / make", partOfSpeech: "verb", distractors: getDistractors("verb", "做", 3) },
        { chinese: "晚饭", pinyin: "wǎn fàn", english: "dinner", partOfSpeech: "object", distractors: getDistractors("object", "晚饭", 3) },
      ],
    },
    {
      id: "s3-l29",
      english: "The teacher teaches us Chinese.",
      parts: [
        { chinese: "老师", pinyin: "lǎo shī", english: "teacher", partOfSpeech: "subject", distractors: getDistractors("noun", "老师", 3) },
        { chinese: "给", pinyin: "gěi", english: "for / to", partOfSpeech: "preposition", distractors: ["对", "跟", "和"] },
        { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "noun", distractors: getDistractors("subject", "我们", 3) },
        { chinese: "教", pinyin: "jiāo", english: "teach", partOfSpeech: "verb", distractors: getDistractors("verb", "教", 3) },
        { chinese: "中文", pinyin: "zhōng wén", english: "Chinese", partOfSpeech: "object", distractors: ["英文", "日文", "法文"] },
      ],
    },
    {
      id: "s4-l29",
      english: "I will write a letter for you.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "给", pinyin: "gěi", english: "for / to", partOfSpeech: "preposition", distractors: ["对", "跟", "和"] },
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "noun", distractors: getDistractors("subject", "你", 3) },
        { chinese: "写", pinyin: "xiě", english: "write", partOfSpeech: "verb", distractors: getDistractors("verb", "写", 3) },
        { chinese: "信", pinyin: "xìn", english: "letter", partOfSpeech: "object", distractors: ["书", "作业", "文章"] },
      ],
    },
  ],
};
