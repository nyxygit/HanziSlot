import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const level8Guo: Level = {
  id: "level-08",
  name: "Past Experiences",
  description: "Subject + Verb + 过 + Object — Learn to talk about past experiences",
  category: "structure",
  pattern: {
    id: "s-v-guo-o",
    name: "Subject + Verb + 过 + Object",
    description: "Use 过 (guò) after a verb to indicate having had the experience of doing something.",
    structure: ["subject", "verb", "particle", "object"],
  },
  starThresholds: [9, 6, 3],
  unlockCondition: "level-07",
  sentences: [
    {
      id: "s1-l08",
      english: "I have eaten Chinese food before.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "吃", pinyin: "chī", english: "eat", partOfSpeech: "verb", distractors: getDistractors("verb", "吃", 3) },
        { chinese: "过", pinyin: "guò", english: "(past experience)", partOfSpeech: "particle", distractors: ["了", "的", "着"] },
        { chinese: "中餐", pinyin: "zhōng cān", english: "Chinese food", partOfSpeech: "object", distractors: ["西餐", "日餐", "早饭"] },
      ],
    },
    {
      id: "s2-l08",
      english: "She has seen that movie.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getDistractors("subject", "她", 3) },
        { chinese: "看", pinyin: "kàn", english: "read / watch / see", partOfSpeech: "verb", distractors: getDistractors("verb", "看", 3) },
        { chinese: "过", pinyin: "guò", english: "(past experience)", partOfSpeech: "particle", distractors: ["了", "的", "着"] },
        { chinese: "电影", pinyin: "diàn yǐng", english: "movie", partOfSpeech: "object", distractors: getDistractors("object", "电影", 3) },
      ],
    },
    {
      id: "s3-l08",
      english: "He has been to China.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getDistractors("subject", "他", 3) },
        { chinese: "去", pinyin: "qù", english: "go", partOfSpeech: "verb", distractors: getDistractors("verb", "去", 3) },
        { chinese: "过", pinyin: "guò", english: "(past experience)", partOfSpeech: "particle", distractors: ["了", "的", "着"] },
        { chinese: "中国", pinyin: "zhōng guó", english: "China", partOfSpeech: "object", distractors: ["美国", "日本", "法国"] },
      ],
    },
    {
      id: "s4-l08",
      english: "I have studied Chinese.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "学", pinyin: "xué", english: "study / learn", partOfSpeech: "verb", distractors: getDistractors("verb", "学", 3) },
        { chinese: "过", pinyin: "guò", english: "(past experience)", partOfSpeech: "particle", distractors: ["了", "的", "着"] },
        { chinese: "中文", pinyin: "zhōng wén", english: "Chinese language", partOfSpeech: "object", distractors: ["英文", "日文", "法文"] },
      ],
    },
  ],
};
