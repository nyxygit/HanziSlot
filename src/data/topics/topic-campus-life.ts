import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const topicCampusLife: Level = {
  id: "topic-campus-life",
  name: "Campus Life",
  description: "Talk about the library, clubs, exams, and student life in Chinese",
  category: "topic",
  topic: "Campus Life",
  pattern: {
    id: "mixed",
    name: "Mixed Patterns",
    description: "Practice campus life sentences using multiple sentence structures",
    structure: ["subject", "verb", "object"],
  },
  starThresholds: [18, 12, 6],
  sentences: [
    {
      id: "tcl-s1",
      english: "There is a library on campus.",
      parts: [
        { chinese: "校园里", pinyin: "xiào yuán lǐ", english: "on campus", partOfSpeech: "place", distractors: ["学校旁边", "宿舍附近", "教室外面", "图书馆后面"] },
        { chinese: "有", pinyin: "yǒu", english: "there is / have", partOfSpeech: "verb", distractors: ["是", "在", "要", "看"] },
        { chinese: "图书馆", pinyin: "tú shū guǎn", english: "library", partOfSpeech: "object", distractors: getDistractors("place", "图书馆", 3) },
      ],
    },
    {
      id: "tcl-s2",
      english: "I want to join a student club.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "想", pinyin: "xiǎng", english: "would like to", partOfSpeech: "modal", distractors: ["要", "会", "能", "可以"] },
        { chinese: "参加", pinyin: "cān jiā", english: "join / participate", partOfSpeech: "verb", distractors: ["组织", "成立", "找", "去"] },
        { chinese: "社团", pinyin: "shè tuán", english: "student club", partOfSpeech: "object", distractors: ["学生会", "活动", "比赛", "课程"] },
      ],
    },
    {
      id: "tcl-s3",
      english: "The library is next to the cafeteria.",
      parts: [
        { chinese: "图书馆", pinyin: "tú shū guǎn", english: "library", partOfSpeech: "subject", distractors: getDistractors("place", "图书馆", 3) },
        { chinese: "在", pinyin: "zài", english: "is at", partOfSpeech: "preposition", distractors: ["去", "到", "从", "往"] },
        { chinese: "食堂", pinyin: "shí táng", english: "cafeteria", partOfSpeech: "place", distractors: getDistractors("place", "食堂", 3) },
        { chinese: "旁边", pinyin: "páng biān", english: "next to", partOfSpeech: "place", distractors: ["前面", "后面", "对面", "里面"] },
      ],
    },
    {
      id: "tcl-s4",
      english: "I didn't do my homework yesterday.",
      parts: [
        { chinese: "昨天", pinyin: "zuó tiān", english: "yesterday", partOfSpeech: "time", distractors: getDistractors("time", "昨天", 3) },
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "没", pinyin: "méi", english: "didn't", partOfSpeech: "negation", distractors: getDistractors("negation", "没", 2) },
        { chinese: "做作业", pinyin: "zuò zuò yè", english: "do homework", partOfSpeech: "verb", distractors: ["写作业", "交作业", "做功课", "复习"] },
      ],
    },
    {
      id: "tcl-s5",
      english: "As soon as class ends, I go to the library.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "一下课", pinyin: "yī xià kè", english: "as soon as class ends", partOfSpeech: "adverb", distractors: ["一放学", "一考完", "一上完", "一吃完"] },
        { chinese: "就", pinyin: "jiù", english: "then", partOfSpeech: "adverb", distractors: ["也", "还", "都", "不"] },
        { chinese: "去图书馆", pinyin: "qù tú shū guǎn", english: "go to the library", partOfSpeech: "verb", distractors: ["回宿舍", "去食堂", "去教室", "回家"] },
      ],
    },
    {
      id: "tcl-s6",
      english: "Because the exam is coming, I study hard.",
      parts: [
        { chinese: "因为", pinyin: "yīn wèi", english: "because", partOfSpeech: "conjunction", distractors: getDistractors("conjunction", "因为", 3) },
        { chinese: "要考试了", pinyin: "yào kǎo shì le", english: "exam is coming", partOfSpeech: "clause", distractors: ["要上课了", "要开学了", "要交作业了", "要放假了"] },
        { chinese: "所以", pinyin: "suǒ yǐ", english: "therefore", partOfSpeech: "conjunction", distractors: getDistractors("conjunction", "所以", 3) },
        { chinese: "我很努力", pinyin: "wǒ hěn nǔ lì", english: "I am very hardworking", partOfSpeech: "clause", distractors: ["我很认真", "我很忙", "我很着急", "我天天学习"] },
      ],
    },
  ],
};
