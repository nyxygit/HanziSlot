import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const level11Topic: Level = {
  id: "level-11",
  name: "Topic-Comment",
  description: "Topic + Comment — Learn the topic-prominent sentence structure",
  category: "structure",
  pattern: {
    id: "topic-comment",
    name: "Topic + Comment (Clause)",
    description: "In Chinese, the topic comes first, followed by a comment about it. This is called 'topic-prominent' structure.",
    structure: ["object", "subject", "verb", "particle"],
  },
  starThresholds: [9, 6, 3],
  unlockCondition: "level-10",
  sentences: [
    {
      id: "s1-l11",
      english: "This book, I have read it.",
      parts: [
        { chinese: "这本书", pinyin: "zhè běn shū", english: "this book", partOfSpeech: "object", distractors: ["那本书", "这个", "那个"] },
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "看", pinyin: "kàn", english: "read / watch", partOfSpeech: "verb", distractors: getDistractors("verb", "看", 3) },
        { chinese: "过了", pinyin: "guò le", english: "(already experienced)", partOfSpeech: "particle", distractors: ["完了", "好了", "到了"] },
      ],
    },
    {
      id: "s2-l11",
      english: "That movie, I have seen it.",
      parts: [
        { chinese: "那个电影", pinyin: "nà gè diàn yǐng", english: "that movie", partOfSpeech: "object", distractors: ["这个电影", "那本书", "那个东西"] },
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "看", pinyin: "kàn", english: "read / watch / see", partOfSpeech: "verb", distractors: getDistractors("verb", "看", 3) },
        { chinese: "过了", pinyin: "guò le", english: "(already experienced)", partOfSpeech: "particle", distractors: ["完了", "好了", "到了"] },
      ],
    },
    {
      id: "s3-l11",
      english: "Fish, I don't eat.",
      parts: [
        { chinese: "鱼", pinyin: "yú", english: "fish", partOfSpeech: "object", distractors: getDistractors("object", "鱼", 3) },
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "不吃", pinyin: "bù chī", english: "don't eat", partOfSpeech: "verb", distractors: ["不喝", "不买", "不看"] },
        { chinese: "东西", pinyin: "dōng xi", english: "thing / stuff", partOfSpeech: "particle", distractors: ["什么", "什么", "什么"] },
      ],
    },
    {
      id: "s4-l11",
      english: "This homework, I have finished it.",
      parts: [
        { chinese: "这个作业", pinyin: "zhè gè zuò yè", english: "this homework", partOfSpeech: "object", distractors: ["那个作业", "这本书", "那个东西"] },
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "做", pinyin: "zuò", english: "do / make", partOfSpeech: "verb", distractors: getDistractors("verb", "做", 3) },
        { chinese: "完了", pinyin: "wán le", english: "finished", partOfSpeech: "particle", distractors: ["好了", "到了", "懂了"] },
      ],
    },
  ],
};
