import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const level6Modal: Level = {
  id: "level-06",
  name: "Expressing Wants & Abilities",
  description: "Subject + Modal Verb (想/要/会/能/可以) + Verb + Object",
  category: "structure",
  pattern: {
    id: "s-modal-v-o",
    name: "Subject + Modal + Verb + Object",
    description: "Use modal verbs like 想 (xiǎng), 要 (yào), 会 (huì), 能 (néng), 可以 (kě yǐ) before a verb to express wishes, abilities, or possibilities.",
    structure: ["subject", "modal", "verb", "object"],
  },
  starThresholds: [12, 8, 4],
  unlockCondition: "level-05",
  sentences: [
    {
      id: "s1-l06",
      english: "I want to buy a book.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "要", pinyin: "yào", english: "want to", partOfSpeech: "modal", distractors: ["想", "会", "能"] },
        { chinese: "买", pinyin: "mǎi", english: "buy", partOfSpeech: "verb", distractors: getDistractors("verb", "买", 3) },
        { chinese: "书", pinyin: "shū", english: "book", partOfSpeech: "object", distractors: getDistractors("object", "书", 3) },
      ],
    },
    {
      id: "s2-l06",
      english: "She can speak Chinese.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getDistractors("subject", "她", 3) },
        { chinese: "会", pinyin: "huì", english: "can / know how to", partOfSpeech: "modal", distractors: ["能", "要", "想"] },
        { chinese: "说", pinyin: "shuō", english: "speak", partOfSpeech: "verb", distractors: getDistractors("verb", "说", 3) },
        { chinese: "中文", pinyin: "zhōng wén", english: "Chinese language", partOfSpeech: "object", distractors: ["英文", "日文", "法文"] },
      ],
    },
    {
      id: "s3-l06",
      english: "I would like to drink water.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "想", pinyin: "xiǎng", english: "would like to", partOfSpeech: "modal", distractors: ["要", "会", "能"] },
        { chinese: "喝", pinyin: "hē", english: "drink", partOfSpeech: "verb", distractors: getDistractors("verb", "喝", 3) },
        { chinese: "水", pinyin: "shuǐ", english: "water", partOfSpeech: "object", distractors: getDistractors("object", "水", 3) },
      ],
    },
    {
      id: "s4-l06",
      english: "He can eat noodles.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getDistractors("subject", "他", 3) },
        { chinese: "能", pinyin: "néng", english: "can / be able to", partOfSpeech: "modal", distractors: ["会", "想", "要"] },
        { chinese: "吃", pinyin: "chī", english: "eat", partOfSpeech: "verb", distractors: getDistractors("verb", "吃", 3) },
        { chinese: "面条", pinyin: "miàn tiáo", english: "noodles", partOfSpeech: "object", distractors: getDistractors("object", "面条", 3) },
      ],
    },
    {
      id: "s5-l06",
      english: "You may come in.",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: getDistractors("subject", "你", 3) },
        { chinese: "可以", pinyin: "kě yǐ", english: "may / can", partOfSpeech: "modal", distractors: ["能", "会", "要"] },
        { chinese: "进来", pinyin: "jìn lái", english: "come in", partOfSpeech: "verb", distractors: ["出去", "回去", "上来"] },
        { chinese: "东西", pinyin: "dōng xi", english: "thing / stuff", partOfSpeech: "object", distractors: getDistractors("object", "东西", 3) },
      ],
    },
  ],
};
