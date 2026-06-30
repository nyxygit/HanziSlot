import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const topicDirections: Level = {
  id: "topic-directions",
  name: "Asking for Directions",
  description: "Ask for and give directions around campus and the city in Chinese",
  category: "topic",
  topic: "Directions",
  pattern: {
    id: "mixed",
    name: "Mixed Patterns",
    description: "Practice direction-related sentences using multiple sentence structures",
    structure: ["subject", "verb", "object"],
  },
  starThresholds: [18, 12, 6],
  sentences: [
    {
      id: "tdi-s1",
      english: "Where is the library?",
      parts: [
        { chinese: "图书馆", pinyin: "tú shū guǎn", english: "library", partOfSpeech: "subject", distractors: getDistractors("place", "图书馆", 3) },
        { chinese: "在", pinyin: "zài", english: "is located at", partOfSpeech: "verb", distractors: ["去", "到", "有", "是"] },
        { chinese: "哪儿", pinyin: "nǎr", english: "where", partOfSpeech: "place", distractors: ["这儿", "那儿", "里面", "外面"] },
      ],
    },
    {
      id: "tdi-s2",
      english: "Go straight and turn left.",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "直走", pinyin: "zhí zǒu", english: "go straight", partOfSpeech: "verb", distractors: ["往前走", "往回走", "向右走", "向上走"] },
        { chinese: "然后", pinyin: "rán hòu", english: "then / after that", partOfSpeech: "adverb", distractors: ["所以", "可是", "而且", "因为"] },
        { chinese: "左转", pinyin: "zuǒ zhuǎn", english: "turn left", partOfSpeech: "verb", distractors: ["右转", "直走", "后退", "调头"] },
      ],
    },
    {
      id: "tdi-s3",
      english: "The library is behind the teaching building.",
      parts: [
        { chinese: "图书馆", pinyin: "tú shū guǎn", english: "library", partOfSpeech: "subject", distractors: getDistractors("place", "图书馆", 3) },
        { chinese: "在", pinyin: "zài", english: "is at", partOfSpeech: "preposition", distractors: ["去", "到", "从", "往"] },
        { chinese: "教学楼", pinyin: "jiào xué lóu", english: "teaching building", partOfSpeech: "place", distractors: ["宿舍楼", "办公楼", "食堂", "体育馆"] },
        { chinese: "后面", pinyin: "hòu miàn", english: "behind", partOfSpeech: "place", distractors: ["前面", "旁边", "对面", "里面"] },
      ],
    },
    {
      id: "tdi-s4",
      english: "The cafeteria is next to the dormitory.",
      parts: [
        { chinese: "食堂", pinyin: "shí táng", english: "cafeteria", partOfSpeech: "subject", distractors: getDistractors("place", "食堂", 3) },
        { chinese: "在", pinyin: "zài", english: "is at", partOfSpeech: "preposition", distractors: ["去", "到", "从", "往"] },
        { chinese: "宿舍", pinyin: "sù shè", english: "dormitory", partOfSpeech: "place", distractors: getDistractors("place", "宿舍", 3) },
        { chinese: "旁边", pinyin: "páng biān", english: "next to", partOfSpeech: "place", distractors: ["前面", "后面", "对面", "里面"] },
      ],
    },
    {
      id: "tdi-s5",
      english: "Walk forward about 100 meters.",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "往前走", pinyin: "wǎng qián zǒu", english: "walk forward", partOfSpeech: "verb", distractors: ["往回走", "往右走", "往左走", "直走"] },
        { chinese: "大概", pinyin: "dà gài", english: "about / approximately", partOfSpeech: "adverb", distractors: ["正好", "一定", "已经", "一共"] },
        { chinese: "一百米", pinyin: "yī bǎi mǐ", english: "100 meters", partOfSpeech: "object", distractors: ["五十米", "两百米", "三百米", "十米"] },
      ],
    },
    {
      id: "tdi-s6",
      english: "If you go straight, you will see it.",
      parts: [
        { chinese: "如果", pinyin: "rú guǒ", english: "if", partOfSpeech: "conjunction", distractors: getDistractors("conjunction", "如果", 3) },
        { chinese: "你直走", pinyin: "nǐ zhí zǒu", english: "you go straight", partOfSpeech: "clause", distractors: ["你左转", "你右转", "你往前走", "你回头"] },
        { chinese: "就", pinyin: "jiù", english: "then", partOfSpeech: "adverb", distractors: ["也", "还", "都", "不"] },
        { chinese: "能看见", pinyin: "néng kàn jiàn", english: "can see", partOfSpeech: "verb", distractors: ["能找到", "能去", "会看", "会到"] },
      ],
    },
  ],
};
