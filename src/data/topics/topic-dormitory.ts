import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const topicDormitory: Level = {
  id: "topic-dormitory",
  name: "Dormitory & Housing",
  description: "Talk about your dorm, room, and living situation in Chinese",
  category: "topic",
  topic: "Dormitory",
  pattern: {
    id: "mixed",
    name: "Mixed Patterns",
    description: "Practice housing-related sentences using multiple sentence structures",
    structure: ["subject", "verb", "object"],
  },
  starThresholds: [18, 12, 6],
  sentences: [
    {
      id: "tdm-s1",
      english: "I live in a dormitory.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "住", pinyin: "zhù", english: "live", partOfSpeech: "verb", distractors: ["在", "去", "来", "到"] },
        { chinese: "在宿舍", pinyin: "zài sù shè", english: "in the dormitory", partOfSpeech: "place", distractors: ["在家", "在学校", "在公寓", "在酒店"] },
      ],
    },
    {
      id: "tdm-s2",
      english: "My room is not very big.",
      parts: [
        { chinese: "我的房间", pinyin: "wǒ de fáng jiān", english: "my room", partOfSpeech: "subject", distractors: ["他的房间", "她的房间", "我们的教室", "他的宿舍"] },
        { chinese: "不", pinyin: "bù", english: "not", partOfSpeech: "negation", distractors: getDistractors("negation", "不", 2) },
        { chinese: "很大", pinyin: "hěn dà", english: "very big", partOfSpeech: "adjective", distractors: ["很小", "很新", "很旧", "很好"] },
      ],
    },
    {
      id: "tdm-s3",
      english: "I have a roommate.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "有", pinyin: "yǒu", english: "have", partOfSpeech: "verb", distractors: ["是", "在", "要", "想"] },
        { chinese: "一个室友", pinyin: "yī gè shì yǒu", english: "a roommate", partOfSpeech: "object", distractors: ["一个朋友", "一个同学", "一个邻居", "一个家人"] },
      ],
    },
    {
      id: "tdm-s4",
      english: "The dormitory is close to the school.",
      parts: [
        { chinese: "宿舍", pinyin: "sù shè", english: "dormitory", partOfSpeech: "subject", distractors: getDistractors("place", "宿舍", 3) },
        { chinese: "离", pinyin: "lí", english: "from", partOfSpeech: "preposition", distractors: ["跟", "和", "比", "给"] },
        { chinese: "学校", pinyin: "xué xiào", english: "school", partOfSpeech: "place", distractors: getDistractors("place", "学校", 3) },
        { chinese: "很近", pinyin: "hěn jìn", english: "very close", partOfSpeech: "adjective", distractors: ["很远", "很近", "很方便", "很干净"] },
      ],
    },
    {
      id: "tdm-s5",
      english: "Although the room is small, it is clean.",
      parts: [
        { chinese: "虽然", pinyin: "suī rán", english: "although", partOfSpeech: "conjunction", distractors: getDistractors("conjunction", "虽然", 3) },
        { chinese: "房间很小", pinyin: "fáng jiān hěn xiǎo", english: "the room is small", partOfSpeech: "clause", distractors: ["房间很大", "宿舍很远", "房租很贵", "家具很旧"] },
        { chinese: "但是", pinyin: "dàn shì", english: "but", partOfSpeech: "conjunction", distractors: getDistractors("conjunction", "但是", 3) },
        { chinese: "很干净", pinyin: "hěn gān jìng", english: "very clean", partOfSpeech: "clause", distractors: ["很舒服", "很方便", "很新", "很暖和"] },
      ],
    },
    {
      id: "tdm-s6",
      english: "I want to buy some furniture for my room.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "想", pinyin: "xiǎng", english: "would like to", partOfSpeech: "modal", distractors: ["要", "会", "能", "可以"] },
        { chinese: "买", pinyin: "mǎi", english: "buy", partOfSpeech: "verb", distractors: getDistractors("verb", "买", 3) },
        { chinese: "家具", pinyin: "jiā jù", english: "furniture", partOfSpeech: "object", distractors: ["电器", "日用品", "装饰", "花草"] },
      ],
    },
  ],
};
