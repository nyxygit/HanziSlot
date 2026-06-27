import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const level18Yue: Level = {
  id: "level-18",
  name: "Getting Better & Better",
  description: "Subject + 越来越 + Adj — Learn to express increasing qualities",
  category: "structure",
  pattern: {
    id: "s-yue-lai-yue-adj",
    name: "Subject + 越来越 + Adjective",
    description: "Use 越来越 (yuè lái yuè) before an adjective to mean 'more and more' or 'increasingly'.",
    structure: ["subject", "adverb", "adjective"],
  },
  starThresholds: [9, 6, 3],
  unlockCondition: "level-17",
  sentences: [
    {
      id: "s1-l18",
      english: "She is getting more and more beautiful.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getDistractors("subject", "她", 3) },
        { chinese: "越来越", pinyin: "yuè lái yuè", english: "more and more", partOfSpeech: "adverb", distractors: ["非常", "特别", "不太"] },
        { chinese: "漂亮", pinyin: "piào liang", english: "beautiful", partOfSpeech: "adjective", distractors: getDistractors("adjective", "漂亮", 3) },
      ],
    },
    {
      id: "s2-l18",
      english: "The weather is getting hotter and hotter.",
      parts: [
        { chinese: "天气", pinyin: "tiān qì", english: "weather", partOfSpeech: "subject", distractors: ["今天", "温度", "空气"] },
        { chinese: "越来越", pinyin: "yuè lái yuè", english: "more and more", partOfSpeech: "adverb", distractors: ["非常", "特别", "不太"] },
        { chinese: "热", pinyin: "rè", english: "hot", partOfSpeech: "adjective", distractors: getDistractors("adjective", "热", 3) },
      ],
    },
    {
      id: "s3-l18",
      english: "Life is getting better and better.",
      parts: [
        { chinese: "生活", pinyin: "shēng huó", english: "life", partOfSpeech: "subject", distractors: ["学习", "工作", "天气"] },
        { chinese: "越来越", pinyin: "yuè lái yuè", english: "more and more", partOfSpeech: "adverb", distractors: ["非常", "特别", "不太"] },
        { chinese: "好", pinyin: "hǎo", english: "good", partOfSpeech: "adjective", distractors: getDistractors("adjective", "好", 3) },
      ],
    },
    {
      id: "s4-l18",
      english: "I am getting busier and busier.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "越来越", pinyin: "yuè lái yuè", english: "more and more", partOfSpeech: "adverb", distractors: ["非常", "特别", "不太"] },
        { chinese: "忙", pinyin: "máng", english: "busy", partOfSpeech: "adjective", distractors: getDistractors("adjective", "忙", 3) },
      ],
    },
  ],
};
