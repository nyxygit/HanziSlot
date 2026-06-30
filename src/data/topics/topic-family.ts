import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const topicFamily: Level = {
  id: "topic-family",
  name: "Family",
  description: "Introduce your family members and describe them in Chinese",
  category: "topic",
  topic: "Family",
  pattern: {
    id: "mixed",
    name: "Mixed Patterns",
    description: "Practice family-themed sentences using multiple sentence structures",
    structure: ["subject", "verb", "object"],
  },
  starThresholds: [18, 12, 6],
  sentences: [
    {
      id: "tfm-s1",
      english: "There are four people in my family.",
      parts: [
        { chinese: "我家", pinyin: "wǒ jiā", english: "my family", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "有", pinyin: "yǒu", english: "have / exist", partOfSpeech: "verb", distractors: ["是", "在", "要", "去"] },
        { chinese: "四口人", pinyin: "sì kǒu rén", english: "four people", partOfSpeech: "object", distractors: ["三口人", "五口人", "两口人", "六口人"] },
      ],
    },
    {
      id: "tfm-s2",
      english: "My older sister is a teacher.",
      parts: [
        { chinese: "我姐姐", pinyin: "wǒ jiě jie", english: "my older sister", partOfSpeech: "subject", distractors: ["我哥哥", "我妹妹", "我弟弟", "我妈妈"] },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "particle", distractors: getDistractors("particle", "是", 2) },
        { chinese: "老师", pinyin: "lǎo shī", english: "teacher", partOfSpeech: "noun", distractors: ["学生", "医生", "售货员", "经理"] },
      ],
    },
    {
      id: "tfm-s3",
      english: "My father is taller than me.",
      parts: [
        { chinese: "我爸爸", pinyin: "wǒ bà ba", english: "my father", partOfSpeech: "noun", distractors: ["我妈妈", "我哥哥", "我朋友", "我老师"] },
        { chinese: "比", pinyin: "bǐ", english: "than", partOfSpeech: "preposition", distractors: ["跟", "和", "对", "给"] },
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "noun", distractors: getDistractors("subject", "我", 3) },
        { chinese: "高", pinyin: "gāo", english: "tall", partOfSpeech: "adjective", distractors: ["矮", "大", "胖", "瘦"] },
      ],
    },
    {
      id: "tfm-s4",
      english: "My mother is very busy with work.",
      parts: [
        { chinese: "我妈妈", pinyin: "wǒ mā ma", english: "my mother", partOfSpeech: "subject", distractors: ["我爸爸", "我姐姐", "我妹妹", "我朋友"] },
        { chinese: "很", pinyin: "hěn", english: "very", partOfSpeech: "particle", distractors: getDistractors("particle", "很", 2) },
        { chinese: "忙", pinyin: "máng", english: "busy", partOfSpeech: "adjective", distractors: getDistractors("adjective", "忙", 3) },
      ],
    },
    {
      id: "tfm-s5",
      english: "My younger brother is a student.",
      parts: [
        { chinese: "我弟弟", pinyin: "wǒ dì di", english: "my younger brother", partOfSpeech: "subject", distractors: ["我哥哥", "我妹妹", "我姐姐", "我同学"] },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "particle", distractors: getDistractors("particle", "是", 2) },
        { chinese: "学生", pinyin: "xué shēng", english: "student", partOfSpeech: "noun", distractors: ["老师", "医生", "上班族", "经理"] },
      ],
    },
    {
      id: "tfm-s6",
      english: "My family and I live in Beijing.",
      parts: [
        { chinese: "我和家人", pinyin: "wǒ hé jiā rén", english: "my family and I", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "在", pinyin: "zài", english: "at / in", partOfSpeech: "preposition", distractors: ["去", "来", "从", "到"] },
        { chinese: "北京", pinyin: "běi jīng", english: "Beijing", partOfSpeech: "place", distractors: ["上海", "广州", "深圳", "成都"] },
        { chinese: "住", pinyin: "zhù", english: "live", partOfSpeech: "verb", distractors: ["工作", "学习", "生活", "玩儿"] },
      ],
    },
  ],
};
