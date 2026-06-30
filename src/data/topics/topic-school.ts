import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const topicSchool: Level = {
  id: "topic-school",
  name: "School Life",
  description: "Talk about school, classes, and studying in Chinese",
  category: "topic",
  topic: "School",
  pattern: {
    id: "mixed",
    name: "Mixed Patterns",
    description: "Practice school-themed sentences using multiple sentence structures",
    structure: ["subject", "verb", "object"],
  },
  starThresholds: [18, 12, 6],
  sentences: [
    {
      id: "ts-s1",
      english: "I am a student.",
      parts: [
        {
          chinese: "我",
          pinyin: "wǒ",
          english: "I / me",
          partOfSpeech: "subject",
          distractors: getDistractors("subject", "我", 3),
        },
        {
          chinese: "是",
          pinyin: "shì",
          english: "is / am / are",
          partOfSpeech: "particle",
          distractors: getDistractors("particle", "是", 2),
        },
        {
          chinese: "学生",
          pinyin: "xué shēng",
          english: "student",
          partOfSpeech: "noun",
          distractors: ["老师", "医生", "同学", "中国人"],
        },
      ],
    },
    {
      id: "ts-s2",
      english: "He writes homework.",
      parts: [
        {
          chinese: "他",
          pinyin: "tā",
          english: "he / him",
          partOfSpeech: "subject",
          distractors: getDistractors("subject", "他", 3),
        },
        {
          chinese: "写",
          pinyin: "xiě",
          english: "write",
          partOfSpeech: "verb",
          distractors: getDistractors("verb", "写", 3),
        },
        {
          chinese: "作业",
          pinyin: "zuò yè",
          english: "homework",
          partOfSpeech: "object",
          distractors: getDistractors("object", "作业", 3),
        },
      ],
    },
    {
      id: "ts-s3",
      english: "The teacher is very good.",
      parts: [
        {
          chinese: "老师",
          pinyin: "lǎo shī",
          english: "teacher",
          partOfSpeech: "subject",
          distractors: ["学生", "医生", "同学", "朋友"],
        },
        {
          chinese: "很",
          pinyin: "hěn",
          english: "very",
          partOfSpeech: "particle",
          distractors: getDistractors("particle", "很", 2),
        },
        {
          chinese: "好",
          pinyin: "hǎo",
          english: "good",
          partOfSpeech: "adjective",
          distractors: getDistractors("adjective", "好", 3),
        },
      ],
    },
    {
      id: "ts-s4",
      english: "I want to read a book.",
      parts: [
        {
          chinese: "我",
          pinyin: "wǒ",
          english: "I / me",
          partOfSpeech: "subject",
          distractors: getDistractors("subject", "我", 3),
        },
        {
          chinese: "要",
          pinyin: "yào",
          english: "want to",
          partOfSpeech: "modal",
          distractors: ["想", "会", "能"],
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
      id: "ts-s5",
      english: "Tomorrow I go to school.",
      parts: [
        {
          chinese: "明天",
          pinyin: "míng tiān",
          english: "tomorrow",
          partOfSpeech: "time",
          distractors: getDistractors("time", "明天", 3),
        },
        {
          chinese: "我",
          pinyin: "wǒ",
          english: "I / me",
          partOfSpeech: "subject",
          distractors: getDistractors("subject", "我", 3),
        },
        {
          chinese: "去",
          pinyin: "qù",
          english: "go",
          partOfSpeech: "verb",
          distractors: getDistractors("verb", "去", 3),
        },
        {
          chinese: "学校",
          pinyin: "xué xiào",
          english: "school",
          partOfSpeech: "place",
          distractors: getDistractors("place", "学校", 3),
        },
      ],
    },
    {
      id: "ts-s6",
      english: "I don't eat meat.",
      parts: [
        {
          chinese: "我",
          pinyin: "wǒ",
          english: "I / me",
          partOfSpeech: "subject",
          distractors: getDistractors("subject", "我", 3),
        },
        {
          chinese: "不",
          pinyin: "bù",
          english: "not",
          partOfSpeech: "negation",
          distractors: getDistractors("negation", "不", 2),
        },
        {
          chinese: "吃",
          pinyin: "chī",
          english: "eat",
          partOfSpeech: "verb",
          distractors: getDistractors("verb", "吃", 3),
        },
        {
          chinese: "肉",
          pinyin: "ròu",
          english: "meat",
          partOfSpeech: "object",
          distractors: getDistractors("object", "肉", 3),
        },
      ],
    },
  ],
};
