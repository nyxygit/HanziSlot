import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const level14ShiDe: Level = {
  id: "level-14",
  name: "Emphasizing Details",
  description: "Subject + 是 + Detail + Verb + 的 — Learn to emphasize how/when/where something happened",
  category: "structure",
  pattern: {
    id: "s-shi-detail-v-de",
    name: "Subject + 是 + Detail + Verb + 的",
    description: "The 是...的 (shì...de) structure emphasizes details like time, place, or manner of a past action.",
    structure: ["subject", "particle", "time", "verb", "particle"],
  },
  starThresholds: [9, 6, 3],
  unlockCondition: "level-13",
  sentences: [
    {
      id: "s1-l14",
      english: "I came by train.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "是", pinyin: "shì", english: "(emphasis marker)", partOfSpeech: "particle", distractors: ["不", "很", "也"] },
        { chinese: "坐火车", pinyin: "zuò huǒ chē", english: "by train", partOfSpeech: "time", distractors: ["坐飞机", "坐汽车", "走路"] },
        { chinese: "来", pinyin: "lái", english: "come", partOfSpeech: "verb", distractors: ["去", "走", "回"] },
        { chinese: "的", pinyin: "de", english: "(emphasis particle)", partOfSpeech: "particle", distractors: ["了", "过", "着"] },
      ],
    },
    {
      id: "s2-l14",
      english: "He went yesterday.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getDistractors("subject", "他", 3) },
        { chinese: "是", pinyin: "shì", english: "(emphasis marker)", partOfSpeech: "particle", distractors: ["不", "很", "也"] },
        { chinese: "昨天", pinyin: "zuó tiān", english: "yesterday", partOfSpeech: "time", distractors: getDistractors("time", "昨天", 3) },
        { chinese: "去", pinyin: "qù", english: "go", partOfSpeech: "verb", distractors: getDistractors("verb", "去", 3) },
        { chinese: "的", pinyin: "de", english: "(emphasis particle)", partOfSpeech: "particle", distractors: ["了", "过", "着"] },
      ],
    },
    {
      id: "s3-l14",
      english: "She bought this at the store.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getDistractors("subject", "她", 3) },
        { chinese: "是", pinyin: "shì", english: "(emphasis marker)", partOfSpeech: "particle", distractors: ["不", "很", "也"] },
        { chinese: "在商店", pinyin: "zài shāng diàn", english: "at the store", partOfSpeech: "time", distractors: ["在学校", "在家", "在医院"] },
        { chinese: "买", pinyin: "mǎi", english: "buy", partOfSpeech: "verb", distractors: getDistractors("verb", "买", 3) },
        { chinese: "的", pinyin: "de", english: "(emphasis particle)", partOfSpeech: "particle", distractors: ["了", "过", "着"] },
      ],
    },
    {
      id: "s4-l14",
      english: "I was born in China.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "是", pinyin: "shì", english: "(emphasis marker)", partOfSpeech: "particle", distractors: ["不", "很", "也"] },
        { chinese: "在中国", pinyin: "zài zhōng guó", english: "in China", partOfSpeech: "time", distractors: ["在美国", "在日本", "在法国"] },
        { chinese: "出生", pinyin: "chū shēng", english: "be born", partOfSpeech: "verb", distractors: ["长大", "生活", "学习"] },
        { chinese: "的", pinyin: "de", english: "(emphasis particle)", partOfSpeech: "particle", distractors: ["了", "过", "着"] },
      ],
    },
  ],
};
