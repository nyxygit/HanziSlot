import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const topicHobbies: Level = {
  id: "topic-hobbies",
  name: "Hobbies & Interests",
  description: "Talk about your hobbies, sports, and free time activities in Chinese",
  category: "topic",
  topic: "Hobbies",
  pattern: {
    id: "mixed",
    name: "Mixed Patterns",
    description: "Practice hobby-themed sentences using multiple sentence structures",
    structure: ["subject", "verb", "object"],
  },
  starThresholds: [18, 12, 6],
  sentences: [
    {
      id: "thb-s1",
      english: "I like listening to music.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "喜欢", pinyin: "xǐ huān", english: "like / enjoy", partOfSpeech: "verb", distractors: ["爱", "想", "会", "要"] },
        { chinese: "听音乐", pinyin: "tīng yīn yuè", english: "listen to music", partOfSpeech: "clause", distractors: ["看书", "看电影", "打篮球", "唱歌"] },
      ],
    },
    {
      id: "thb-s2",
      english: "I can play basketball.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "会", pinyin: "huì", english: "can / know how to", partOfSpeech: "modal", distractors: ["能", "要", "想", "可以"] },
        { chinese: "打篮球", pinyin: "dǎ lán qiú", english: "play basketball", partOfSpeech: "verb", distractors: ["踢足球", "打网球", "游泳", "跑步"] },
      ],
    },
    {
      id: "thb-s3",
      english: "I am more interested in music than him.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "noun", distractors: getDistractors("subject", "我", 3) },
        { chinese: "比", pinyin: "bǐ", english: "than", partOfSpeech: "preposition", distractors: ["跟", "和", "对", "给"] },
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "noun", distractors: getDistractors("subject", "他", 3) },
        { chinese: "感兴趣", pinyin: "gǎn xìng qù", english: "interested", partOfSpeech: "adjective", distractors: ["认真", "热情", "努力", "高兴"] },
      ],
    },
    {
      id: "thb-s4",
      english: "My hobby is reading books.",
      parts: [
        { chinese: "我的爱好", pinyin: "wǒ de ài hào", english: "my hobby", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "particle", distractors: getDistractors("particle", "是", 2) },
        { chinese: "看书", pinyin: "kàn shū", english: "reading books", partOfSpeech: "clause", distractors: ["听音乐", "看电影", "打篮球", "唱歌"] },
      ],
    },
    {
      id: "thb-s5",
      english: "I have been to a concert.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "去过", pinyin: "qù guò", english: "have been to", partOfSpeech: "verb", distractors: ["去过", "看过", "听过", "做过"] },
        { chinese: "音乐会", pinyin: "yīn yuè huì", english: "concert", partOfSpeech: "object", distractors: ["演唱会", "电影院", "体育馆", "博物馆"] },
      ],
    },
    {
      id: "thb-s6",
      english: "As long as I have free time, I read.",
      parts: [
        { chinese: "只要", pinyin: "zhǐ yào", english: "as long as", partOfSpeech: "conjunction", distractors: getDistractors("conjunction", "只要", 3) },
        { chinese: "我有空", pinyin: "wǒ yǒu kòng", english: "I have free time", partOfSpeech: "clause", distractors: ["我有钱", "我在家", "我下课", "我放假"] },
        { chinese: "就", pinyin: "jiù", english: "then", partOfSpeech: "adverb", distractors: ["也", "还", "都", "不"] },
        { chinese: "看书", pinyin: "kàn shū", english: "read books", partOfSpeech: "clause", distractors: ["听音乐", "看电影", "睡觉", "运动"] },
      ],
    },
  ],
};
