import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const topicSelfIntro: Level = {
  id: "topic-self-intro",
  name: "Self-Introduction",
  description: "Introduce yourself, your major, and where you're from",
  category: "topic",
  topic: "Self-Introduction",
  pattern: {
    id: "mixed",
    name: "Mixed Patterns",
    description: "Practice self-introduction sentences using multiple sentence structures",
    structure: ["subject", "verb", "object"],
  },
  starThresholds: [18, 12, 6],
  sentences: [
    {
      id: "tsi-s1",
      english: "I am a first-year student.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "particle", distractors: getDistractors("particle", "是", 2) },
        { chinese: "大一新生", pinyin: "dà yī xīn shēng", english: "first-year student", partOfSpeech: "noun", distractors: ["学生", "老师", "同学", "医生"] },
      ],
    },
    {
      id: "tsi-s2",
      english: "My major is Chinese.",
      parts: [
        { chinese: "我的专业", pinyin: "wǒ de zhuān yè", english: "my major", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "particle", distractors: getDistractors("particle", "是", 2) },
        { chinese: "中文", pinyin: "zhōng wén", english: "Chinese", partOfSpeech: "noun", distractors: ["英文", "日文", "法文", "韩文"] },
      ],
    },
    {
      id: "tsi-s3",
      english: "I am from America.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "是从", pinyin: "shì cóng", english: "(am from)", partOfSpeech: "particle", distractors: getDistractors("particle", "是", 2) },
        { chinese: "美国", pinyin: "měi guó", english: "America", partOfSpeech: "place", distractors: ["中国", "日本", "法国", "英国"] },
        { chinese: "来的", pinyin: "lái de", english: "came from", partOfSpeech: "particle", distractors: ["去了", "来了", "走了", "到了"] },
      ],
    },
    {
      id: "tsi-s4",
      english: "My name is Wang Ming.",
      parts: [
        { chinese: "我的名字", pinyin: "wǒ de míng zi", english: "my name", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "叫", pinyin: "jiào", english: "to be called", partOfSpeech: "verb", distractors: ["是", "有", "去", "来"] },
        { chinese: "王明", pinyin: "wáng míng", english: "Wang Ming (name)", partOfSpeech: "noun", distractors: ["李华", "张伟", "刘芳", "陈静"] },
      ],
    },
    {
      id: "tsi-s5",
      english: "I can speak a little Chinese.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "会", pinyin: "huì", english: "can / know how to", partOfSpeech: "modal", distractors: ["能", "要", "可以", "想"] },
        { chinese: "说", pinyin: "shuō", english: "speak", partOfSpeech: "verb", distractors: getDistractors("verb", "说", 3) },
        { chinese: "一点中文", pinyin: "yī diǎn zhōng wén", english: "a little Chinese", partOfSpeech: "object", distractors: ["很多中文", "一点英文", "很多话", "什么"] },
      ],
    },
    {
      id: "tsi-s6",
      english: "I am very happy to meet you.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "很", pinyin: "hěn", english: "very", partOfSpeech: "particle", distractors: getDistractors("particle", "很", 2) },
        { chinese: "高兴", pinyin: "gāo xìng", english: "happy", partOfSpeech: "adjective", distractors: getDistractors("adjective", "高兴", 3) },
        { chinese: "认识你", pinyin: "rèn shi nǐ", english: "meet you", partOfSpeech: "clause", distractors: ["认识他", "认识她", "看你", "听你"] },
      ],
    },
  ],
};
