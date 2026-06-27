import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const level17Direction: Level = {
  id: "level-17",
  name: "Coming & Going",
  description: "Subject + Verb + 来/去 — Learn directional complements",
  category: "structure",
  pattern: {
    id: "s-v-lai-qu",
    name: "Subject + Verb + 来/去",
    description: "Add 来 (lái) or 去 (qù) after a verb to indicate direction toward or away from the speaker.",
    structure: ["subject", "verb", "particle"],
  },
  starThresholds: [9, 6, 3],
  unlockCondition: "level-16",
  sentences: [
    {
      id: "s1-l17",
      english: "He is coming over.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getDistractors("subject", "他", 3) },
        { chinese: "走", pinyin: "zǒu", english: "walk", partOfSpeech: "verb", distractors: getDistractors("verb", "走", 3) },
        { chinese: "过来", pinyin: "guò lái", english: "come over", partOfSpeech: "particle", distractors: ["过去", "进去", "出去"] },
      ],
    },
    {
      id: "s2-l17",
      english: "I am going back home.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "回", pinyin: "huí", english: "return", partOfSpeech: "verb", distractors: ["去", "来", "走"] },
        { chinese: "去", pinyin: "qù", english: "go (away)", partOfSpeech: "particle", distractors: ["来", "走", "回"] },
      ],
    },
    {
      id: "s3-l17",
      english: "She bought it back.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getDistractors("subject", "她", 3) },
        { chinese: "买", pinyin: "mǎi", english: "buy", partOfSpeech: "verb", distractors: getDistractors("verb", "买", 3) },
        { chinese: "回来", pinyin: "huí lái", english: "come back", partOfSpeech: "particle", distractors: ["回去", "进来", "出来"] },
      ],
    },
    {
      id: "s4-l17",
      english: "Please come in.",
      parts: [
        { chinese: "请", pinyin: "qǐng", english: "please", partOfSpeech: "subject", distractors: ["你", "我", "他"] },
        { chinese: "进", pinyin: "jìn", english: "enter", partOfSpeech: "verb", distractors: ["出", "回", "走"] },
        { chinese: "来", pinyin: "lái", english: "come (toward)", partOfSpeech: "particle", distractors: ["去", "走", "回"] },
      ],
    },
  ],
};
