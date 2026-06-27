import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const level26Lian: Level = {
  id: "level-26",
  name: "Even...",
  description: "连 + Noun + 都/也 + Verb — Learn to say 'even'",
  category: "structure",
  pattern: {
    id: "lian-n-dou-ye-v",
    name: "连 + Noun + 都/也 + Verb",
    description: "Use 连 (lián)...都/也 (dōu/yě) to emphasize something, meaning 'even', often in negative or surprising contexts.",
    structure: ["preposition", "noun", "adverb", "verb"],
  },
  starThresholds: [9, 6, 3],
  unlockCondition: "level-25",
  sentences: [
    {
      id: "s1-l26",
      english: "He can't even eat.",
      parts: [
        { chinese: "连", pinyin: "lián", english: "even", partOfSpeech: "preposition", distractors: ["把", "被", "对"] },
        { chinese: "饭", pinyin: "fàn", english: "rice / meal", partOfSpeech: "noun", distractors: ["水", "菜", "书"] },
        { chinese: "都", pinyin: "dōu", english: "even", partOfSpeech: "adverb", distractors: ["也", "还", "就"] },
        { chinese: "不能吃", pinyin: "bù néng chī", english: "cannot eat", partOfSpeech: "verb", distractors: ["不能喝", "不能买", "不能看"] },
      ],
    },
    {
      id: "s2-l26",
      english: "Even a child knows this.",
      parts: [
        { chinese: "连", pinyin: "lián", english: "even", partOfSpeech: "preposition", distractors: ["把", "被", "对"] },
        { chinese: "小孩", pinyin: "xiǎo hái", english: "child", partOfSpeech: "noun", distractors: ["大人", "老人", "学生"] },
        { chinese: "都", pinyin: "dōu", english: "even", partOfSpeech: "adverb", distractors: ["也", "还", "就"] },
        { chinese: "知道", pinyin: "zhī dào", english: "know", partOfSpeech: "verb", distractors: getDistractors("clause", "知道", 3) },
      ],
    },
    {
      id: "s3-l26",
      english: "He doesn't even drink water.",
      parts: [
        { chinese: "连", pinyin: "lián", english: "even", partOfSpeech: "preposition", distractors: ["把", "被", "对"] },
        { chinese: "水", pinyin: "shuǐ", english: "water", partOfSpeech: "noun", distractors: getDistractors("object", "水", 3) },
        { chinese: "也", pinyin: "yě", english: "even", partOfSpeech: "adverb", distractors: ["都", "还", "就"] },
        { chinese: "不喝", pinyin: "bù hē", english: "doesn't drink", partOfSpeech: "verb", distractors: ["不吃", "不买", "不看"] },
      ],
    },
    {
      id: "s4-l26",
      english: "I don't even have one dollar.",
      parts: [
        { chinese: "连", pinyin: "lián", english: "even", partOfSpeech: "preposition", distractors: ["把", "被", "对"] },
        { chinese: "一块钱", pinyin: "yī kuài qián", english: "one dollar", partOfSpeech: "noun", distractors: ["两块钱", "十块钱", "一百块"] },
        { chinese: "都", pinyin: "dōu", english: "even", partOfSpeech: "adverb", distractors: ["也", "还", "就"] },
        { chinese: "没有", pinyin: "méi yǒu", english: "don't have", partOfSpeech: "verb", distractors: ["没有", "没有", "没有"] },
      ],
    },
  ],
};
