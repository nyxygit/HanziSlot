import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const level6Time: Level = {
  id: "level-6",
  name: "Adding Time",
  description: "Time + Subject + Verb + Object — Learn to say when things happen",
  category: "structure",
  pattern: {
    id: "t-s-v-o",
    name: "Time + Subject + Verb + Object",
    description: "In Chinese, time words come at the beginning of the sentence, before the subject.",
    structure: ["time", "subject", "verb", "object"],
  },
  starThresholds: [12, 8, 4],
  unlockCondition: "level-5",
  sentences: [
    {
      id: "s1-l6",
      english: "In the morning, I eat breakfast.",
      parts: [
        {
          chinese: "早上",
          pinyin: "zǎo shang",
          english: "morning",
          partOfSpeech: "time",
          distractors: getDistractors("time", "早上", 3),
        },
        {
          chinese: "我",
          pinyin: "wǒ",
          english: "I / me",
          partOfSpeech: "subject",
          distractors: getDistractors("subject", "我", 3),
        },
        {
          chinese: "吃",
          pinyin: "chī",
          english: "eat",
          partOfSpeech: "verb",
          distractors: getDistractors("verb", "吃", 3),
        },
        {
          chinese: "早饭",
          pinyin: "zǎo fàn",
          english: "breakfast",
          partOfSpeech: "object",
          distractors: getDistractors("object", "早饭", 3),
        },
      ],
    },
    {
      id: "s2-l6",
      english: "In the evening, I read a book.",
      parts: [
        {
          chinese: "晚上",
          pinyin: "wǎn shang",
          english: "evening / night",
          partOfSpeech: "time",
          distractors: getDistractors("time", "晚上", 3),
        },
        {
          chinese: "我",
          pinyin: "wǒ",
          english: "I / me",
          partOfSpeech: "subject",
          distractors: getDistractors("subject", "我", 3),
        },
        {
          chinese: "看",
          pinyin: "kàn",
          english: "read / watch",
          partOfSpeech: "verb",
          distractors: getDistractors("verb", "看", 3),
        },
        {
          chinese: "书",
          pinyin: "shū",
          english: "book",
          partOfSpeech: "object",
          distractors: getDistractors("object", "书", 3),
        },
      ],
    },
    {
      id: "s3-l6",
      english: "Tomorrow, he goes to work.",
      parts: [
        {
          chinese: "明天",
          pinyin: "míng tiān",
          english: "tomorrow",
          partOfSpeech: "time",
          distractors: getDistractors("time", "明天", 3),
        },
        {
          chinese: "他",
          pinyin: "tā",
          english: "he / him",
          partOfSpeech: "subject",
          distractors: getDistractors("subject", "他", 3),
        },
        {
          chinese: "去",
          pinyin: "qù",
          english: "go",
          partOfSpeech: "verb",
          distractors: getDistractors("verb", "去", 3),
        },
        {
          chinese: "上班",
          pinyin: "shàng bān",
          english: "go to work",
          partOfSpeech: "object",
          distractors: ["学校", "家", "医院", "商店"],
        },
      ],
    },
    {
      id: "s4-l6",
      english: "Today, she drinks tea.",
      parts: [
        {
          chinese: "今天",
          pinyin: "jīn tiān",
          english: "today",
          partOfSpeech: "time",
          distractors: getDistractors("time", "今天", 3),
        },
        {
          chinese: "她",
          pinyin: "tā",
          english: "she / her",
          partOfSpeech: "subject",
          distractors: getDistractors("subject", "她", 3),
        },
        {
          chinese: "喝",
          pinyin: "hē",
          english: "drink",
          partOfSpeech: "verb",
          distractors: getDistractors("verb", "喝", 3),
        },
        {
          chinese: "茶",
          pinyin: "chá",
          english: "tea",
          partOfSpeech: "object",
          distractors: getDistractors("object", "茶", 3),
        },
      ],
    },
    {
      id: "s5-l6",
      english: "Yesterday, I ate noodles.",
      parts: [
        {
          chinese: "昨天",
          pinyin: "zuó tiān",
          english: "yesterday",
          partOfSpeech: "time",
          distractors: getDistractors("time", "昨天", 3),
        },
        {
          chinese: "我",
          pinyin: "wǒ",
          english: "I / me",
          partOfSpeech: "subject",
          distractors: getDistractors("subject", "我", 3),
        },
        {
          chinese: "吃",
          pinyin: "chī",
          english: "eat",
          partOfSpeech: "verb",
          distractors: getDistractors("verb", "吃", 3),
        },
        {
          chinese: "面条",
          pinyin: "miàn tiáo",
          english: "noodles",
          partOfSpeech: "object",
          distractors: getDistractors("object", "面条", 3),
        },
      ],
    },
  ],
};
