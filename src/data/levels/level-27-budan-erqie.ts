import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const level27BudanErqie: Level = {
  id: "level-27",
  name: "Not Only... But Also",
  description: "不但 + Adjective₁ + 而且 + Adjective₂ — Learn to add emphasis",
  category: "structure",
  pattern: {
    id: "budan-adj1-erqie-adj2",
    name: "不但 + Adjective₁ + 而且 + Adjective₂",
    description: "Use 不但 (bù dàn)...而且 (ér qiě) to say 'not only X, but also Y'.",
    structure: ["conjunction", "adjective", "conjunction", "adjective"],
  },
  starThresholds: [9, 6, 3],
  unlockCondition: "level-26",
  sentences: [
    {
      id: "s1-l27",
      english: "Not only is it cheap, but also delicious.",
      parts: [
        { chinese: "不但", pinyin: "bù dàn", english: "not only", partOfSpeech: "conjunction", distractors: ["虽然", "因为", "如果"] },
        { chinese: "便宜", pinyin: "pián yi", english: "cheap", partOfSpeech: "adjective", distractors: getDistractors("adjective", "便宜", 3) },
        { chinese: "而且", pinyin: "ér qiě", english: "but also", partOfSpeech: "conjunction", distractors: ["但是", "所以", "就"] },
        { chinese: "好吃", pinyin: "hǎo chī", english: "delicious", partOfSpeech: "adjective", distractors: getDistractors("adjective", "好吃", 3) },
      ],
    },
    {
      id: "s2-l27",
      english: "Not only is she tall, but also beautiful.",
      parts: [
        { chinese: "不但", pinyin: "bù dàn", english: "not only", partOfSpeech: "conjunction", distractors: ["虽然", "因为", "如果"] },
        { chinese: "高", pinyin: "gāo", english: "tall", partOfSpeech: "adjective", distractors: getDistractors("adjective", "高", 3) },
        { chinese: "而且", pinyin: "ér qiě", english: "but also", partOfSpeech: "conjunction", distractors: ["但是", "所以", "就"] },
        { chinese: "漂亮", pinyin: "piào liang", english: "beautiful", partOfSpeech: "adjective", distractors: getDistractors("adjective", "漂亮", 3) },
      ],
    },
    {
      id: "s3-l27",
      english: "Not only is this big, but also cheap.",
      parts: [
        { chinese: "不但", pinyin: "bù dàn", english: "not only", partOfSpeech: "conjunction", distractors: ["虽然", "因为", "如果"] },
        { chinese: "大", pinyin: "dà", english: "big", partOfSpeech: "adjective", distractors: getDistractors("adjective", "大", 3) },
        { chinese: "而且", pinyin: "ér qiě", english: "but also", partOfSpeech: "conjunction", distractors: ["但是", "所以", "就"] },
        { chinese: "便宜", pinyin: "pián yi", english: "cheap", partOfSpeech: "adjective", distractors: getDistractors("adjective", "便宜", 3) },
      ],
    },
    {
      id: "s4-l27",
      english: "Not only is he busy, but also tired.",
      parts: [
        { chinese: "不但", pinyin: "bù dàn", english: "not only", partOfSpeech: "conjunction", distractors: ["虽然", "因为", "如果"] },
        { chinese: "忙", pinyin: "máng", english: "busy", partOfSpeech: "adjective", distractors: getDistractors("adjective", "忙", 3) },
        { chinese: "而且", pinyin: "ér qiě", english: "but also", partOfSpeech: "conjunction", distractors: ["但是", "所以", "就"] },
        { chinese: "累", pinyin: "lèi", english: "tired", partOfSpeech: "adjective", distractors: getDistractors("adjective", "累", 3) },
      ],
    },
  ],
};
