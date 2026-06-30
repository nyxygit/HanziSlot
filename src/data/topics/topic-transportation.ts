import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const topicTransportation: Level = {
  id: "topic-transportation",
  name: "Transportation",
  description: "Take buses, subway, and talk about getting around in Chinese",
  category: "topic",
  topic: "Transportation",
  pattern: {
    id: "mixed",
    name: "Mixed Patterns",
    description: "Practice transportation sentences using multiple sentence structures",
    structure: ["subject", "verb", "object"],
  },
  starThresholds: [18, 12, 6],
  sentences: [
    {
      id: "ttr-s1",
      english: "I take the subway to school.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "坐", pinyin: "zuò", english: "take / ride", partOfSpeech: "verb", distractors: ["骑", "开", "走", "用"] },
        { chinese: "地铁", pinyin: "dì tiě", english: "subway", partOfSpeech: "object", distractors: ["公共汽车", "出租车", "自行车", "火车"] },
        { chinese: "去学校", pinyin: "qù xué xiào", english: "go to school", partOfSpeech: "clause", distractors: ["去公司", "回家", "去商店", "去食堂"] },
      ],
    },
    {
      id: "ttr-s2",
      english: "The subway is faster than the bus.",
      parts: [
        { chinese: "地铁", pinyin: "dì tiě", english: "subway", partOfSpeech: "noun", distractors: ["公共汽车", "出租车", "自行车", "火车"] },
        { chinese: "比", pinyin: "bǐ", english: "than", partOfSpeech: "preposition", distractors: ["跟", "和", "对", "给"] },
        { chinese: "公共汽车", pinyin: "gōng gòng qì chē", english: "bus", partOfSpeech: "noun", distractors: ["出租车", "自行车", "地铁", "飞机"] },
        { chinese: "快", pinyin: "kuài", english: "fast", partOfSpeech: "adjective", distractors: ["慢", "好", "贵", "方便"] },
      ],
    },
    {
      id: "ttr-s3",
      english: "I can ride a bicycle.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "会", pinyin: "huì", english: "can / know how to", partOfSpeech: "modal", distractors: ["能", "要", "想", "可以"] },
        { chinese: "骑", pinyin: "qí", english: "ride", partOfSpeech: "verb", distractors: ["坐", "开", "走", "用"] },
        { chinese: "自行车", pinyin: "zì xíng chē", english: "bicycle", partOfSpeech: "object", distractors: ["摩托车", "电动车", "汽车", "三轮车"] },
      ],
    },
    {
      id: "ttr-s4",
      english: "Because the bus is slow, I take the subway.",
      parts: [
        { chinese: "因为", pinyin: "yīn wèi", english: "because", partOfSpeech: "conjunction", distractors: getDistractors("conjunction", "因为", 3) },
        { chinese: "公共汽车很慢", pinyin: "gōng gòng qì chē hěn màn", english: "the bus is slow", partOfSpeech: "clause", distractors: ["地铁很快", "出租车很贵", "走路很远", "骑车很累"] },
        { chinese: "所以", pinyin: "suǒ yǐ", english: "therefore", partOfSpeech: "conjunction", distractors: getDistractors("conjunction", "所以", 3) },
        { chinese: "我坐地铁", pinyin: "wǒ zuò dì tiě", english: "I take the subway", partOfSpeech: "clause", distractors: ["我坐公交", "我骑车", "我走路", "我打车"] },
      ],
    },
    {
      id: "ttr-s5",
      english: "Yesterday I took a taxi to school.",
      parts: [
        { chinese: "昨天", pinyin: "zuó tiān", english: "yesterday", partOfSpeech: "time", distractors: getDistractors("time", "昨天", 3) },
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "坐", pinyin: "zuò", english: "take / ride", partOfSpeech: "verb", distractors: ["骑", "开", "走", "打"] },
        { chinese: "出租车", pinyin: "chū zū chē", english: "taxi", partOfSpeech: "object", distractors: ["地铁", "公共汽车", "自行车", "火车"] },
        { chinese: "去了学校", pinyin: "qù le xué xiào", english: "went to school", partOfSpeech: "clause", distractors: ["去了公司", "回了家", "去了商店", "去了医院"] },
      ],
    },
    {
      id: "ttr-s6",
      english: "The school is close to the subway station.",
      parts: [
        { chinese: "学校", pinyin: "xué xiào", english: "school", partOfSpeech: "noun", distractors: getDistractors("place", "学校", 3) },
        { chinese: "离", pinyin: "lí", english: "from", partOfSpeech: "preposition", distractors: ["跟", "和", "比", "对"] },
        { chinese: "地铁站", pinyin: "dì tiě zhàn", english: "subway station", partOfSpeech: "place", distractors: ["公交站", "火车站", "学校", "商店"] },
        { chinese: "很近", pinyin: "hěn jìn", english: "very close", partOfSpeech: "adjective", distractors: ["很远", "很近", "很方便", "很干净"] },
      ],
    },
  ],
};
