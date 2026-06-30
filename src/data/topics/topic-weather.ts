import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const topicWeather: Level = {
  id: "topic-weather",
  name: "Weather & Seasons",
  description: "Describe the weather, seasons, and temperature in Chinese",
  category: "topic",
  topic: "Weather",
  pattern: {
    id: "mixed",
    name: "Mixed Patterns",
    description: "Practice weather-themed sentences using multiple sentence structures",
    structure: ["subject", "verb", "object"],
  },
  starThresholds: [18, 12, 6],
  sentences: [
    {
      id: "twt-s1",
      english: "Today's weather is very good.",
      parts: [
        { chinese: "今天天气", pinyin: "jīn tiān tiān qì", english: "today's weather", partOfSpeech: "subject", distractors: ["昨天天气", "明天天气", "北京天气", "上海天气"] },
        { chinese: "很", pinyin: "hěn", english: "very", partOfSpeech: "particle", distractors: getDistractors("particle", "很", 2) },
        { chinese: "好", pinyin: "hǎo", english: "good", partOfSpeech: "adjective", distractors: getDistractors("adjective", "好", 3) },
      ],
    },
    {
      id: "twt-s2",
      english: "It is hotter today than yesterday.",
      parts: [
        { chinese: "今天", pinyin: "jīn tiān", english: "today", partOfSpeech: "noun", distractors: getDistractors("time", "今天", 3) },
        { chinese: "比", pinyin: "bǐ", english: "than", partOfSpeech: "preposition", distractors: ["跟", "和", "对", "离"] },
        { chinese: "昨天", pinyin: "zuó tiān", english: "yesterday", partOfSpeech: "noun", distractors: getDistractors("time", "昨天", 3) },
        { chinese: "热", pinyin: "rè", english: "hot", partOfSpeech: "adjective", distractors: ["冷", "暖", "凉快", "舒服"] },
      ],
    },
    {
      id: "twt-s3",
      english: "Because it's raining, I stay at home.",
      parts: [
        { chinese: "因为", pinyin: "yīn wèi", english: "because", partOfSpeech: "conjunction", distractors: getDistractors("conjunction", "因为", 3) },
        { chinese: "下雨", pinyin: "xià yǔ", english: "it rains", partOfSpeech: "clause", distractors: ["刮风", "下雪", "天冷", "天热"] },
        { chinese: "所以", pinyin: "suǒ yǐ", english: "therefore", partOfSpeech: "conjunction", distractors: getDistractors("conjunction", "所以", 3) },
        { chinese: "我在家", pinyin: "wǒ zài jiā", english: "I am at home", partOfSpeech: "clause", distractors: ["我去学校", "我出去", "我上班", "我上课"] },
      ],
    },
    {
      id: "twt-s4",
      english: "If it rains tomorrow, I won't go out.",
      parts: [
        { chinese: "如果", pinyin: "rú guǒ", english: "if", partOfSpeech: "conjunction", distractors: getDistractors("conjunction", "如果", 3) },
        { chinese: "明天下雨", pinyin: "míng tiān xià yǔ", english: "tomorrow it rains", partOfSpeech: "clause", distractors: ["明天刮风", "明天下雪", "明天晴天", "明天暖和"] },
        { chinese: "就", pinyin: "jiù", english: "then", partOfSpeech: "adverb", distractors: ["也", "还", "都", "不"] },
        { chinese: "不出去", pinyin: "bù chū qù", english: "not go out", partOfSpeech: "clause", distractors: ["不去了", "不出来", "不上课", "不回家"] },
      ],
    },
    {
      id: "twt-s5",
      english: "The weather is getting warmer and warmer.",
      parts: [
        { chinese: "天气", pinyin: "tiān qì", english: "weather", partOfSpeech: "subject", distractors: ["今天", "温度", "空气", "季节"] },
        { chinese: "越来越", pinyin: "yuè lái yuè", english: "more and more", partOfSpeech: "adverb", distractors: ["非常", "特别", "不太", "已经"] },
        { chinese: "暖和", pinyin: "nuǎn huo", english: "warm", partOfSpeech: "adjective", distractors: ["热", "冷", "凉快", "舒服"] },
      ],
    },
    {
      id: "twt-s6",
      english: "Although it's cold, I still go outside.",
      parts: [
        { chinese: "虽然", pinyin: "suī rán", english: "although", partOfSpeech: "conjunction", distractors: getDistractors("conjunction", "虽然", 3) },
        { chinese: "很冷", pinyin: "hěn lěng", english: "very cold", partOfSpeech: "clause", distractors: ["很热", "下雨", "刮风", "下雪"] },
        { chinese: "但是", pinyin: "dàn shì", english: "but", partOfSpeech: "conjunction", distractors: getDistractors("conjunction", "但是", 3) },
        { chinese: "我去外面", pinyin: "wǒ qù wài miàn", english: "I go outside", partOfSpeech: "clause", distractors: ["我去学校", "我出去", "我上班", "我上课"] },
      ],
    },
  ],
};
