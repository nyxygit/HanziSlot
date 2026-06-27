import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const level19YouYou: Level = {
  id: "level-19",
  name: "Both This and That",
  description: "又 + Adjective₁ + 又 + Adjective₂ — Describe multiple qualities",
  category: "structure",
  pattern: {
    id: "you-adj1-you-adj2",
    name: "又 + Adjective₁ + 又 + Adjective₂",
    description: "Use 又...又 (yòu...yòu) to say something has two qualities at the same time, like 'both X and Y'.",
    structure: ["adverb", "adjective", "adverb", "adjective"],
  },
  starThresholds: [9, 6, 3],
  unlockCondition: "level-18",
  sentences: [
    {
      id: "s1-l19",
      english: "This food is both cheap and delicious.",
      parts: [
        { chinese: "这个食物", pinyin: "zhè gè shí wù", english: "this food", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "又", pinyin: "yòu", english: "both (and)", partOfSpeech: "adverb", distractors: ["也", "都", "还"] },
        { chinese: "便宜", pinyin: "pián yi", english: "cheap", partOfSpeech: "adjective", distractors: getDistractors("adjective", "便宜", 3) },
        { chinese: "又", pinyin: "yòu", english: "both (and)", partOfSpeech: "adverb", distractors: ["也", "都", "还"] },
        { chinese: "好吃", pinyin: "hǎo chī", english: "delicious", partOfSpeech: "adjective", distractors: getDistractors("adjective", "好吃", 3) },
      ],
    },
    {
      id: "s2-l19",
      english: "She is both beautiful and tall.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "又", pinyin: "yòu", english: "both (and)", partOfSpeech: "adverb", distractors: ["也", "都", "还"] },
        { chinese: "漂亮", pinyin: "piào liang", english: "beautiful", partOfSpeech: "adjective", distractors: getDistractors("adjective", "漂亮", 3) },
        { chinese: "又", pinyin: "yòu", english: "both (and)", partOfSpeech: "adverb", distractors: ["也", "都", "还"] },
        { chinese: "高", pinyin: "gāo", english: "tall", partOfSpeech: "adjective", distractors: getDistractors("adjective", "高", 3) },
      ],
    },
    {
      id: "s3-l19",
      english: "It is both big and clean.",
      parts: [
        { chinese: "它", pinyin: "tā", english: "it", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "又", pinyin: "yòu", english: "both (and)", partOfSpeech: "adverb", distractors: ["也", "都", "还"] },
        { chinese: "大", pinyin: "dà", english: "big", partOfSpeech: "adjective", distractors: getDistractors("adjective", "大", 3) },
        { chinese: "又", pinyin: "yòu", english: "both (and)", partOfSpeech: "adverb", distractors: ["也", "都", "还"] },
        { chinese: "干净", pinyin: "gān jìng", english: "clean", partOfSpeech: "adjective", distractors: getDistractors("adjective", "干净", 3) },
      ],
    },
    {
      id: "s4-l19",
      english: "It is both new and expensive.",
      parts: [
        { chinese: "它", pinyin: "tā", english: "it", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "又", pinyin: "yòu", english: "both (and)", partOfSpeech: "adverb", distractors: ["也", "都", "还"] },
        { chinese: "新", pinyin: "xīn", english: "new", partOfSpeech: "adjective", distractors: getDistractors("adjective", "新", 3) },
        { chinese: "又", pinyin: "yòu", english: "both (and)", partOfSpeech: "adverb", distractors: ["也", "都", "还"] },
        { chinese: "贵", pinyin: "guì", english: "expensive", partOfSpeech: "adjective", distractors: getDistractors("adjective", "贵", 3) },
      ],
    },
  ],
};
