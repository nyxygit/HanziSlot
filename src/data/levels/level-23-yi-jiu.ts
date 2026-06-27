import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const level23YiJiu: Level = {
  id: "level-23",
  name: "As Soon As",
  description: "一 + Verb₁ + 就 + Verb₂ — Learn to express immediate sequences",
  category: "structure",
  pattern: {
    id: "yi-v1-jiu-v2",
    name: "一 + Verb₁ + 就 + Verb₂",
    description: "Use 一 (yī)...就 (jiù) to say 'as soon as X happens, then Y happens'.",
    structure: ["adverb", "verb", "adverb", "verb"],
  },
  starThresholds: [9, 6, 3],
  unlockCondition: "level-22",
  sentences: [
    {
      id: "s1-l23",
      english: "As soon as I get home, I eat.",
      parts: [
        { chinese: "一", pinyin: "yī", english: "as soon as", partOfSpeech: "adverb", distractors: ["又", "都", "再"] },
        { chinese: "回家", pinyin: "huí jiā", english: "return home", partOfSpeech: "verb", distractors: ["到学校", "来这儿", "出去"] },
        { chinese: "就", pinyin: "jiù", english: "then", partOfSpeech: "adverb", distractors: ["也", "都", "还"] },
        { chinese: "吃", pinyin: "chī", english: "eat", partOfSpeech: "verb", distractors: getDistractors("verb", "吃", 3) },
      ],
    },
    {
      id: "s2-l23",
      english: "As soon as class ends, I go home.",
      parts: [
        { chinese: "一", pinyin: "yī", english: "as soon as", partOfSpeech: "adverb", distractors: ["又", "都", "再"] },
        { chinese: "下课", pinyin: "xià kè", english: "finish class", partOfSpeech: "verb", distractors: getDistractors("clause", "下课", 3) },
        { chinese: "就", pinyin: "jiù", english: "then", partOfSpeech: "adverb", distractors: ["也", "都", "还"] },
        { chinese: "回家", pinyin: "huí jiā", english: "go home", partOfSpeech: "verb", distractors: ["去学校", "来这儿", "出去"] },
      ],
    },
    {
      id: "s3-l23",
      english: "As soon as I arrive, I call you.",
      parts: [
        { chinese: "一", pinyin: "yī", english: "as soon as", partOfSpeech: "adverb", distractors: ["又", "都", "再"] },
        { chinese: "到", pinyin: "dào", english: "arrive", partOfSpeech: "verb", distractors: ["来", "去", "走"] },
        { chinese: "就", pinyin: "jiù", english: "then", partOfSpeech: "adverb", distractors: ["也", "都", "还"] },
        { chinese: "给你打电话", pinyin: "gěi nǐ dǎ diàn huà", english: "call you", partOfSpeech: "verb", distractors: ["给你写信", "来看你", "去你的家"] },
      ],
    },
    {
      id: "s4-l23",
      english: "As soon as I see it, I buy it.",
      parts: [
        { chinese: "一", pinyin: "yī", english: "as soon as", partOfSpeech: "adverb", distractors: ["又", "都", "再"] },
        { chinese: "看见", pinyin: "kàn jiàn", english: "see", partOfSpeech: "verb", distractors: ["听到", "找到", "买到"] },
        { chinese: "就", pinyin: "jiù", english: "then", partOfSpeech: "adverb", distractors: ["也", "都", "还"] },
        { chinese: "买", pinyin: "mǎi", english: "buy", partOfSpeech: "verb", distractors: getDistractors("verb", "买", 3) },
      ],
    },
  ],
};
