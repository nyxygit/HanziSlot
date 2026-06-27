import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const level28Degree: Level = {
  id: "level-28",
  name: "Describing Degree",
  description: "Subject + Verb + 得 + Complement (degree) — Learn to describe the degree of an action",
  category: "structure",
  pattern: {
    id: "s-v-de-comp-degree",
    name: "Subject + Verb + 得 + Complement (degree)",
    description: "Use 得 (de) after a verb to introduce a complement describing the degree or manner of the action.",
    structure: ["subject", "verb", "particle", "complement"],
  },
  starThresholds: [9, 6, 3],
  unlockCondition: "level-27",
  sentences: [
    {
      id: "s1-l28",
      english: "He runs very fast.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getDistractors("subject", "他", 3) },
        { chinese: "跑", pinyin: "pǎo", english: "run", partOfSpeech: "verb", distractors: ["走", "跳", "飞"] },
        { chinese: "得", pinyin: "de", english: "(complement marker)", partOfSpeech: "particle", distractors: ["的", "了", "过"] },
        { chinese: "很快", pinyin: "hěn kuài", english: "very fast", partOfSpeech: "complement", distractors: ["很慢", "很远", "很高"] },
      ],
    },
    {
      id: "s2-l28",
      english: "She speaks very well.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getDistractors("subject", "她", 3) },
        { chinese: "说", pinyin: "shuō", english: "speak", partOfSpeech: "verb", distractors: getDistractors("verb", "说", 3) },
        { chinese: "得", pinyin: "de", english: "(complement marker)", partOfSpeech: "particle", distractors: ["的", "了", "过"] },
        { chinese: "很好", pinyin: "hěn hǎo", english: "very well", partOfSpeech: "complement", distractors: ["很快", "很慢", "很多"] },
      ],
    },
    {
      id: "s3-l28",
      english: "He eats very quickly.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getDistractors("subject", "他", 3) },
        { chinese: "吃", pinyin: "chī", english: "eat", partOfSpeech: "verb", distractors: getDistractors("verb", "吃", 3) },
        { chinese: "得", pinyin: "de", english: "(complement marker)", partOfSpeech: "particle", distractors: ["的", "了", "过"] },
        { chinese: "很快", pinyin: "hěn kuài", english: "very fast", partOfSpeech: "complement", distractors: ["很慢", "很多", "很少"] },
      ],
    },
    {
      id: "s4-l28",
      english: "She dances very beautifully.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getDistractors("subject", "她", 3) },
        { chinese: "跳舞", pinyin: "tiào wǔ", english: "dance", partOfSpeech: "verb", distractors: ["唱歌", "跑步", "游泳"] },
        { chinese: "得", pinyin: "de", english: "(complement marker)", partOfSpeech: "particle", distractors: ["的", "了", "过"] },
        { chinese: "很漂亮", pinyin: "hěn piào liang", english: "very beautifully", partOfSpeech: "complement", distractors: ["很好", "很快", "很慢"] },
      ],
    },
  ],
};
