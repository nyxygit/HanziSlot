import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const level20YinweiSuoyi: Level = {
  id: "level-20",
  name: "Cause and Effect",
  description: "因为 + Clause + 所以 + Clause — Learn to express reasons and results",
  category: "structure",
  pattern: {
    id: "yinwei-clause-suoyi-clause",
    name: "因为 + Clause + 所以 + Clause",
    description: "Use 因为 (yīn wèi)...所以 (suǒ yǐ) to connect a reason and its result.",
    structure: ["conjunction", "clause", "conjunction", "clause"],
  },
  starThresholds: [9, 6, 3],
  unlockCondition: "level-19",
  sentences: [
    {
      id: "s1-l20",
      english: "Because it is raining, I am not going.",
      parts: [
        { chinese: "因为", pinyin: "yīn wèi", english: "because", partOfSpeech: "conjunction", distractors: ["虽然", "如果", "但是"] },
        { chinese: "下雨", pinyin: "xià yǔ", english: "it rains", partOfSpeech: "clause", distractors: getDistractors("clause", "下雨", 3) },
        { chinese: "所以", pinyin: "suǒ yǐ", english: "therefore", partOfSpeech: "conjunction", distractors: ["但是", "就", "而且"] },
        { chinese: "我不去", pinyin: "wǒ bú qù", english: "I'm not going", partOfSpeech: "clause", distractors: ["我要去", "他不来", "她走了"] },
      ],
    },
    {
      id: "s2-l20",
      english: "Because it is cold, she wears a coat.",
      parts: [
        { chinese: "因为", pinyin: "yīn wèi", english: "because", partOfSpeech: "conjunction", distractors: ["虽然", "如果", "但是"] },
        { chinese: "冷", pinyin: "lěng", english: "cold", partOfSpeech: "clause", distractors: getDistractors("adjective", "冷", 3) },
        { chinese: "所以", pinyin: "suǒ yǐ", english: "therefore", partOfSpeech: "conjunction", distractors: ["但是", "就", "而且"] },
        { chinese: "她穿大衣", pinyin: "tā chuān dà yī", english: "she wears a coat", partOfSpeech: "clause", distractors: ["他穿毛衣", "我穿衬衫", "你穿裙子"] },
      ],
    },
    {
      id: "s3-l20",
      english: "Because I am busy, I cannot go.",
      parts: [
        { chinese: "因为", pinyin: "yīn wèi", english: "because", partOfSpeech: "conjunction", distractors: ["虽然", "如果", "但是"] },
        { chinese: "我很忙", pinyin: "wǒ hěn máng", english: "I am busy", partOfSpeech: "clause", distractors: ["他很累", "她不舒服", "你没空"] },
        { chinese: "所以", pinyin: "suǒ yǐ", english: "therefore", partOfSpeech: "conjunction", distractors: ["但是", "就", "而且"] },
        { chinese: "不能去", pinyin: "bù néng qù", english: "cannot go", partOfSpeech: "clause", distractors: ["不能来", "不想去", "要回家"] },
      ],
    },
    {
      id: "s4-l20",
      english: "Because I have money, I buy this.",
      parts: [
        { chinese: "因为", pinyin: "yīn wèi", english: "because", partOfSpeech: "conjunction", distractors: ["虽然", "如果", "但是"] },
        { chinese: "我有钱", pinyin: "wǒ yǒu qián", english: "I have money", partOfSpeech: "clause", distractors: ["他没有钱", "她有车", "大家有空"] },
        { chinese: "所以", pinyin: "suǒ yǐ", english: "therefore", partOfSpeech: "conjunction", distractors: ["但是", "就", "而且"] },
        { chinese: "我买这个", pinyin: "wǒ mǎi zhè gè", english: "I buy this", partOfSpeech: "clause", distractors: ["我不买", "他买那个", "她买书"] },
      ],
    },
  ],
};
