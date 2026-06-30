import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const topicDailyRoutine: Level = {
  id: "topic-daily-routine",
  name: "Daily Routine",
  description: "Talk about your daily schedule, classes, and routines",
  category: "topic",
  topic: "Daily Routine",
  pattern: {
    id: "mixed",
    name: "Mixed Patterns",
    description: "Practice daily routine sentences using multiple sentence structures",
    structure: ["subject", "verb", "object"],
  },
  starThresholds: [18, 12, 6],
  sentences: [
    {
      id: "tdr-s1",
      english: "I wake up at 7 o'clock every morning.",
      parts: [
        { chinese: "我每天早上", pinyin: "wǒ měi tiān zǎo shang", english: "I every morning", partOfSpeech: "time", distractors: [], static: true },
        { chinese: "七点", pinyin: "qī diǎn", english: "7 o'clock", partOfSpeech: "time", distractors: ["八点", "九点", "六点", "五点"] },
        { chinese: "起床", pinyin: "qǐ chuáng", english: "get up", partOfSpeech: "verb", distractors: ["上课", "睡觉", "回家", "吃饭"] },
      ],
    },
    {
      id: "tdr-s2",
      english: "In the morning I go to class.",
      parts: [
        { chinese: "早上", pinyin: "zǎo shang", english: "morning", partOfSpeech: "time", distractors: getDistractors("time", "早上", 3) },
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "去", pinyin: "qù", english: "go", partOfSpeech: "verb", distractors: getDistractors("verb", "去", 3) },
        { chinese: "上课", pinyin: "shàng kè", english: "attend class", partOfSpeech: "clause", distractors: ["下课", "上班", "回家", "睡觉"] },
      ],
    },
    {
      id: "tdr-s3",
      english: "I eat lunch at the cafeteria.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "在", pinyin: "zài", english: "at / in", partOfSpeech: "preposition", distractors: ["去", "到", "从", "跟"] },
        { chinese: "食堂", pinyin: "shí táng", english: "cafeteria", partOfSpeech: "place", distractors: getDistractors("place", "食堂", 3) },
        { chinese: "吃", pinyin: "chī", english: "eat", partOfSpeech: "verb", distractors: getDistractors("verb", "吃", 3) },
        { chinese: "午饭", pinyin: "wǔ fàn", english: "lunch", partOfSpeech: "object", distractors: getDistractors("object", "午饭", 3) },
      ],
    },
    {
      id: "tdr-s4",
      english: "I go to sleep at 11 o'clock at night.",
      parts: [
        { chinese: "我晚上", pinyin: "wǒ wǎn shang", english: "I in the evening", partOfSpeech: "time", distractors: [], static: true },
        { chinese: "十一点", pinyin: "shí yī diǎn", english: "11 o'clock", partOfSpeech: "time", distractors: ["十点", "十二点", "九点", "八点"] },
        { chinese: "睡觉", pinyin: "shuì jiào", english: "sleep / go to bed", partOfSpeech: "verb", distractors: ["起床", "学习", "回家", "吃饭"] },
      ],
    },
    {
      id: "tdr-s5",
      english: "Yesterday I studied Chinese.",
      parts: [
        { chinese: "昨天", pinyin: "zuó tiān", english: "yesterday", partOfSpeech: "time", distractors: getDistractors("time", "昨天", 3) },
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "学习了", pinyin: "xué xí le", english: "studied", partOfSpeech: "verb", distractors: ["学习了", "看了", "做了", "写了"] },
        { chinese: "中文", pinyin: "zhōng wén", english: "Chinese", partOfSpeech: "object", distractors: ["英文", "日文", "法文", "韩文"] },
      ],
    },
    {
      id: "tdr-s6",
      english: "I am doing my homework now.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "正在", pinyin: "zhèng zài", english: "(action in progress)", partOfSpeech: "adverb", distractors: ["已经", "常常", "一起", "还"] },
        { chinese: "做作业", pinyin: "zuò zuò yè", english: "do homework", partOfSpeech: "verb", distractors: ["看书", "听音乐", "吃饭", "睡觉"] },
      ],
    },
  ],
};
