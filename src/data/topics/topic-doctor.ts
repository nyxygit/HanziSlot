import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const topicDoctor: Level = {
  id: "topic-doctor",
  name: "Seeing a Doctor",
  description: "Describe symptoms, go to the hospital, and talk about health in Chinese",
  category: "topic",
  topic: "Doctor",
  pattern: {
    id: "mixed",
    name: "Mixed Patterns",
    description: "Practice health-related sentences using multiple sentence structures",
    structure: ["subject", "verb", "object"],
  },
  starThresholds: [18, 12, 6],
  sentences: [
    {
      id: "tdc-s1",
      english: "I am not feeling well.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "不", pinyin: "bù", english: "not", partOfSpeech: "negation", distractors: getDistractors("negation", "不", 2) },
        { chinese: "舒服", pinyin: "shū fu", english: "comfortable / well", partOfSpeech: "adjective", distractors: ["高兴", "好", "累", "忙"] },
      ],
    },
    {
      id: "tdc-s2",
      english: "I have a headache.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "头痛", pinyin: "tóu tòng", english: "have a headache", partOfSpeech: "verb", distractors: ["发烧", "咳嗽", "感冒", "肚子痛"] },
      ],
    },
    {
      id: "tdc-s3",
      english: "I want to see a doctor.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "要", pinyin: "yào", english: "want to", partOfSpeech: "modal", distractors: ["想", "会", "能", "可以"] },
        { chinese: "看病", pinyin: "kàn bìng", english: "see a doctor", partOfSpeech: "verb", distractors: ["买药", "休息", "住院", "检查"] },
      ],
    },
    {
      id: "tdc-s4",
      english: "Yesterday I went to the hospital.",
      parts: [
        { chinese: "昨天", pinyin: "zuó tiān", english: "yesterday", partOfSpeech: "time", distractors: getDistractors("time", "昨天", 3) },
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "去了", pinyin: "qù le", english: "went to", partOfSpeech: "verb", distractors: ["去了", "来了", "到了", "走了"] },
        { chinese: "医院", pinyin: "yī yuàn", english: "hospital", partOfSpeech: "place", distractors: getDistractors("place", "医院", 3) },
      ],
    },
    {
      id: "tdc-s5",
      english: "The doctor told me to rest more.",
      parts: [
        { chinese: "医生", pinyin: "yī shēng", english: "doctor", partOfSpeech: "subject", distractors: ["护士", "老师", "朋友", "家人"] },
        { chinese: "告诉", pinyin: "gào su", english: "tell", partOfSpeech: "verb", distractors: ["让", "叫", "请", "要"] },
        { chinese: "我", pinyin: "wǒ", english: "me", partOfSpeech: "noun", distractors: getDistractors("subject", "我", 3) },
        { chinese: "多休息", pinyin: "duō xiū xi", english: "rest more", partOfSpeech: "verb", distractors: ["多喝水", "多运动", "吃好点", "早点睡"] },
      ],
    },
    {
      id: "tdc-s6",
      english: "Because I am sick, I can't go to class.",
      parts: [
        { chinese: "因为", pinyin: "yīn wèi", english: "because", partOfSpeech: "conjunction", distractors: getDistractors("conjunction", "因为", 3) },
        { chinese: "我生病了", pinyin: "wǒ shēng bìng le", english: "I got sick", partOfSpeech: "clause", distractors: ["我头痛", "我发烧", "我感冒", "我累了"] },
        { chinese: "所以", pinyin: "suǒ yǐ", english: "therefore", partOfSpeech: "conjunction", distractors: getDistractors("conjunction", "所以", 3) },
        { chinese: "不能上课", pinyin: "bù néng shàng kè", english: "cannot go to class", partOfSpeech: "clause", distractors: ["不能去", "不能来", "不能考试", "不能运动"] },
      ],
    },
  ],
};
