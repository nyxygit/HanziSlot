import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const level30Dui: Level = {
  id: "level-30",
  name: "Attitudes Towards Things",
  description: "Subject + 对 + Noun + 很 + Adjective — Learn to express attitudes",
  category: "structure",
  pattern: {
    id: "s-dui-n-hen-adj",
    name: "Subject + 对 + Noun + 很 + Adjective",
    description: "Use 对 (duì) to indicate the target of a feeling or opinion, paired with an adjective.",
    structure: ["subject", "preposition", "noun", "particle", "adjective"],
  },
  starThresholds: [9, 6, 3],
  unlockCondition: "level-29",
  sentences: [
    {
      id: "s1-l30",
      english: "I am very interested in Chinese.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "对", pinyin: "duì", english: "to / towards", partOfSpeech: "preposition", distractors: ["给", "跟", "和"] },
        { chinese: "中文", pinyin: "zhōng wén", english: "Chinese", partOfSpeech: "noun", distractors: ["英文", "日文", "法文"] },
        { chinese: "很", pinyin: "hěn", english: "very", partOfSpeech: "particle", distractors: ["不", "也", "都"] },
        { chinese: "感兴趣", pinyin: "gǎn xìng qù", english: "interested", partOfSpeech: "adjective", distractors: ["认真", "热情", "高兴"] },
      ],
    },
    {
      id: "s2-l30",
      english: "She is very nice to me.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getDistractors("subject", "她", 3) },
        { chinese: "对", pinyin: "duì", english: "to / towards", partOfSpeech: "preposition", distractors: ["给", "跟", "和"] },
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "noun", distractors: getDistractors("subject", "我", 3) },
        { chinese: "很", pinyin: "hěn", english: "very", partOfSpeech: "particle", distractors: ["不", "也", "都"] },
        { chinese: "好", pinyin: "hǎo", english: "good / nice", partOfSpeech: "adjective", distractors: getDistractors("adjective", "好", 3) },
      ],
    },
    {
      id: "s3-l30",
      english: "He is very serious about his work.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getDistractors("subject", "他", 3) },
        { chinese: "对", pinyin: "duì", english: "to / towards", partOfSpeech: "preposition", distractors: ["给", "跟", "和"] },
        { chinese: "工作", pinyin: "gōng zuò", english: "work", partOfSpeech: "noun", distractors: getDistractors("clause", "工作", 3) },
        { chinese: "很", pinyin: "hěn", english: "very", partOfSpeech: "particle", distractors: ["不", "也", "都"] },
        { chinese: "认真", pinyin: "rèn zhēn", english: "serious / conscientious", partOfSpeech: "adjective", distractors: ["努力", "热情", "高兴"] },
      ],
    },
    {
      id: "s4-l30",
      english: "She is very enthusiastic about teaching.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getDistractors("subject", "她", 3) },
        { chinese: "对", pinyin: "duì", english: "to / towards", partOfSpeech: "preposition", distractors: ["给", "跟", "和"] },
        { chinese: "教学", pinyin: "jiào xué", english: "teaching", partOfSpeech: "noun", distractors: ["学习", "工作", "生活"] },
        { chinese: "很", pinyin: "hěn", english: "very", partOfSpeech: "particle", distractors: ["不", "也", "都"] },
        { chinese: "热情", pinyin: "rè qíng", english: "enthusiastic", partOfSpeech: "adjective", distractors: ["认真", "努力", "高兴"] },
      ],
    },
  ],
};
