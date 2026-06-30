import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const topicFriends: Level = {
  id: "topic-friends",
  name: "Making Friends",
  description: "Meet people, make friends, and socialize in Chinese",
  category: "topic",
  topic: "Making Friends",
  pattern: {
    id: "mixed",
    name: "Mixed Patterns",
    description: "Practice socializing sentences using multiple sentence structures",
    structure: ["subject", "verb", "object"],
  },
  starThresholds: [18, 12, 6],
  sentences: [
    {
      id: "tfr-s1",
      english: "I have a friend from China.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "有", pinyin: "yǒu", english: "have", partOfSpeech: "verb", distractors: ["是", "在", "要", "想"] },
        { chinese: "一个中国朋友", pinyin: "yī gè zhōng guó péng yǒu", english: "a Chinese friend", partOfSpeech: "object", distractors: ["一个美国朋友", "一个日本同学", "一个韩国朋友", "一个中国同学"] },
      ],
    },
    {
      id: "tfr-s2",
      english: "I am very happy to meet you.",
      parts: [
        { chinese: "认识你", pinyin: "rèn shi nǐ", english: "meet you", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "很", pinyin: "hěn", english: "very", partOfSpeech: "particle", distractors: getDistractors("particle", "很", 2) },
        { chinese: "高兴", pinyin: "gāo xìng", english: "happy", partOfSpeech: "adjective", distractors: ["开心", "荣幸", "幸运", "好"] },
      ],
    },
    {
      id: "tfr-s3",
      english: "We often study Chinese together.",
      parts: [
        { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject", distractors: getDistractors("subject", "我们", 3) },
        { chinese: "常常", pinyin: "cháng cháng", english: "often", partOfSpeech: "adverb", distractors: ["一起", "都", "还", "也"] },
        { chinese: "一起学习中文", pinyin: "yī qǐ xué xí zhōng wén", english: "study Chinese together", partOfSpeech: "verb", distractors: ["一起吃饭", "一起打球", "一起看电影", "一起听音乐"] },
      ],
    },
    {
      id: "tfr-s4",
      english: "He is very friendly to me.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getDistractors("subject", "他", 3) },
        { chinese: "对", pinyin: "duì", english: "toward", partOfSpeech: "preposition", distractors: ["跟", "和", "给", "比"] },
        { chinese: "我", pinyin: "wǒ", english: "me", partOfSpeech: "noun", distractors: getDistractors("subject", "我", 3) },
        { chinese: "很友好", pinyin: "hěn yǒu hǎo", english: "very friendly", partOfSpeech: "adjective", distractors: ["很好", "很热情", "很关心", "很耐心"] },
      ],
    },
    {
      id: "tfr-s5",
      english: "She likes playing basketball.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getDistractors("subject", "她", 3) },
        { chinese: "喜欢", pinyin: "xǐ huān", english: "like / enjoy", partOfSpeech: "verb", distractors: ["爱", "想", "要", "会"] },
        { chinese: "打篮球", pinyin: "dǎ lán qiú", english: "play basketball", partOfSpeech: "clause", distractors: ["踢足球", "打网球", "游泳", "跑步"] },
      ],
    },
    {
      id: "tfr-s6",
      english: "Although we are busy, we still meet up.",
      parts: [
        { chinese: "虽然", pinyin: "suī rán", english: "although", partOfSpeech: "conjunction", distractors: getDistractors("conjunction", "虽然", 3) },
        { chinese: "我们很忙", pinyin: "wǒ men hěn máng", english: "we are busy", partOfSpeech: "clause", distractors: ["他很累", "她很忙", "大家没时间", "他们很远"] },
        { chinese: "但是", pinyin: "dàn shì", english: "but", partOfSpeech: "conjunction", distractors: getDistractors("conjunction", "但是", 3) },
        { chinese: "我们见面", pinyin: "wǒ men jiàn miàn", english: "we meet up", partOfSpeech: "clause", distractors: ["我们联系", "我们一起玩", "我们聊天", "我们吃饭"] },
      ],
    },
  ],
};
