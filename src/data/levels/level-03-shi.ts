import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const level3Shi: Level = {
  id: "level-03",
  name: "Who You Are",
  description: "Subject + 是 + Noun — Learn to identify people and things",
  category: "structure",
  pattern: {
    id: "s-shi-n",
    name: "Subject + 是 + Noun",
    description: "Use 是 (shì) to say what someone or something is, like English 'is/am/are'.",
    structure: ["subject", "particle", "noun"],
  },
  starThresholds: [9, 6, 3],
  unlockCondition: "level-02",
  sentences: [
    {
      id: "s1-l03",
      english: "I am a student.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "particle", distractors: ["不", "很", "要"] },
        { chinese: "学生", pinyin: "xué shēng", english: "student", partOfSpeech: "noun", distractors: getDistractors("noun", "学生", 3) },
      ],
    },
    {
      id: "s2-l03",
      english: "He is a teacher.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getDistractors("subject", "他", 3) },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "particle", distractors: ["不", "很", "要"] },
        { chinese: "老师", pinyin: "lǎo shī", english: "teacher", partOfSpeech: "noun", distractors: getDistractors("noun", "老师", 3) },
      ],
    },
    {
      id: "s3-l03",
      english: "She is a doctor.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getDistractors("subject", "她", 3) },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "particle", distractors: ["不", "很", "要"] },
        { chinese: "医生", pinyin: "yī shēng", english: "doctor", partOfSpeech: "noun", distractors: getDistractors("noun", "医生", 3) },
      ],
    },
    {
      id: "s4-l03",
      english: "I am a Chinese person.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "particle", distractors: ["不", "很", "要"] },
        { chinese: "中国人", pinyin: "zhōng guó rén", english: "Chinese person", partOfSpeech: "noun", distractors: getDistractors("noun", "中国人", 3) },
      ],
    },
  ],
};
