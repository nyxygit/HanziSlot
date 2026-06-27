import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const level10ZaiProg: Level = {
  id: "level-10",
  name: "Actions in Progress",
  description: "Subject + 在 + Verb + Object — Learn to describe ongoing actions",
  category: "structure",
  pattern: {
    id: "s-zai-v-o",
    name: "Subject + 在 + Verb + Object",
    description: "Use 在 (zài) before a verb to indicate an action is in progress, like English 'be doing something'.",
    structure: ["subject", "adverb", "verb", "object"],
  },
  starThresholds: [9, 6, 3],
  unlockCondition: "level-09",
  sentences: [
    {
      id: "s1-l10",
      english: "I am eating lunch.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "在", pinyin: "zài", english: "(action in progress)", partOfSpeech: "adverb", distractors: ["正", "也", "都"] },
        { chinese: "吃", pinyin: "chī", english: "eat", partOfSpeech: "verb", distractors: getDistractors("verb", "吃", 3) },
        { chinese: "午饭", pinyin: "wǔ fàn", english: "lunch", partOfSpeech: "object", distractors: getDistractors("object", "午饭", 3) },
      ],
    },
    {
      id: "s2-l10",
      english: "She is reading a book.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getDistractors("subject", "她", 3) },
        { chinese: "在", pinyin: "zài", english: "(action in progress)", partOfSpeech: "adverb", distractors: ["正", "也", "都"] },
        { chinese: "看", pinyin: "kàn", english: "read / watch", partOfSpeech: "verb", distractors: getDistractors("verb", "看", 3) },
        { chinese: "书", pinyin: "shū", english: "book", partOfSpeech: "object", distractors: getDistractors("object", "书", 3) },
      ],
    },
    {
      id: "s3-l10",
      english: "He is listening to music.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getDistractors("subject", "他", 3) },
        { chinese: "在", pinyin: "zài", english: "(action in progress)", partOfSpeech: "adverb", distractors: ["正", "也", "都"] },
        { chinese: "听", pinyin: "tīng", english: "listen", partOfSpeech: "verb", distractors: getDistractors("verb", "听", 3) },
        { chinese: "音乐", pinyin: "yīn yuè", english: "music", partOfSpeech: "object", distractors: ["歌", "课", "话"] },
      ],
    },
    {
      id: "s4-l10",
      english: "We are drinking tea.",
      parts: [
        { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject", distractors: getDistractors("subject", "我们", 3) },
        { chinese: "在", pinyin: "zài", english: "(action in progress)", partOfSpeech: "adverb", distractors: ["正", "也", "都"] },
        { chinese: "喝", pinyin: "hē", english: "drink", partOfSpeech: "verb", distractors: getDistractors("verb", "喝", 3) },
        { chinese: "茶", pinyin: "chá", english: "tea", partOfSpeech: "object", distractors: getDistractors("object", "茶", 3) },
      ],
    },
  ],
};
