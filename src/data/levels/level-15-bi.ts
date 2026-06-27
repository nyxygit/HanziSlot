import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const level15Bi: Level = {
  id: "level-15",
  name: "Making Comparisons",
  description: "A + 比 + B + Adjective — Learn to compare things",
  category: "structure",
  pattern: {
    id: "a-bi-b-adj",
    name: "A + 比 + B + Adjective",
    description: "Use 比 (bǐ) to compare two things. The structure is: A + 比 + B + Adjective.",
    structure: ["noun", "preposition", "noun", "adjective"],
  },
  starThresholds: [9, 6, 3],
  unlockCondition: "level-14",
  sentences: [
    {
      id: "s1-l15",
      english: "She is taller than him.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "noun", distractors: getDistractors("subject", "她", 3) },
        { chinese: "比", pinyin: "bǐ", english: "than / compared to", partOfSpeech: "preposition", distractors: ["跟", "和", "对"] },
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "noun", distractors: getDistractors("subject", "他", 3) },
        { chinese: "高", pinyin: "gāo", english: "tall", partOfSpeech: "adjective", distractors: getDistractors("adjective", "高", 3) },
      ],
    },
    {
      id: "s2-l15",
      english: "This book is more expensive than that book.",
      parts: [
        { chinese: "这本书", pinyin: "zhè běn shū", english: "this book", partOfSpeech: "noun", distractors: ["那本书", "这个", "那个"] },
        { chinese: "比", pinyin: "bǐ", english: "than / compared to", partOfSpeech: "preposition", distractors: ["跟", "和", "对"] },
        { chinese: "那本书", pinyin: "nà běn shū", english: "that book", partOfSpeech: "noun", distractors: ["这本书", "那些", "这些"] },
        { chinese: "贵", pinyin: "guì", english: "expensive", partOfSpeech: "adjective", distractors: getDistractors("adjective", "贵", 3) },
      ],
    },
    {
      id: "s3-l15",
      english: "I am busier than him.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "noun", distractors: getDistractors("subject", "我", 3) },
        { chinese: "比", pinyin: "bǐ", english: "than / compared to", partOfSpeech: "preposition", distractors: ["跟", "和", "对"] },
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "noun", distractors: getDistractors("subject", "他", 3) },
        { chinese: "忙", pinyin: "máng", english: "busy", partOfSpeech: "adjective", distractors: getDistractors("adjective", "忙", 3) },
      ],
    },
    {
      id: "s4-l15",
      english: "Today is colder than yesterday.",
      parts: [
        { chinese: "今天", pinyin: "jīn tiān", english: "today", partOfSpeech: "noun", distractors: getDistractors("time", "今天", 3) },
        { chinese: "比", pinyin: "bǐ", english: "than / compared to", partOfSpeech: "preposition", distractors: ["跟", "和", "对"] },
        { chinese: "昨天", pinyin: "zuó tiān", english: "yesterday", partOfSpeech: "noun", distractors: getDistractors("time", "昨天", 3) },
        { chinese: "冷", pinyin: "lěng", english: "cold", partOfSpeech: "adjective", distractors: getDistractors("adjective", "冷", 3) },
      ],
    },
  ],
};
