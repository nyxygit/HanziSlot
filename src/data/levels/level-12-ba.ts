import { Level } from "@/types";
import { getDistractors } from "@/data/wordBank";

export const level12Ba: Level = {
  id: "level-12",
  name: "The 把 Construction",
  description: "Subject + 把 + Object + Verb + Complement — Learn to handle actions with 把",
  category: "structure",
  pattern: {
    id: "s-ba-o-v-comp",
    name: "Subject + 把 + Object + Verb + Complement",
    description: "The 把 (bǎ) construction moves the object before the verb to emphasize the result or disposal of an action.",
    structure: ["subject", "preposition", "object", "verb", "complement"],
  },
  starThresholds: [9, 6, 3],
  unlockCondition: "level-11",
  sentences: [
    {
      id: "s1-l12",
      english: "I finished eating the apple.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getDistractors("subject", "我", 3) },
        { chinese: "把", pinyin: "bǎ", english: "(object marker)", partOfSpeech: "preposition", distractors: ["被", "对", "给"] },
        { chinese: "苹果", pinyin: "píng guǒ", english: "apple", partOfSpeech: "object", distractors: getDistractors("object", "苹果", 3) },
        { chinese: "吃", pinyin: "chī", english: "eat", partOfSpeech: "verb", distractors: getDistractors("verb", "吃", 3) },
        { chinese: "完了", pinyin: "wán le", english: "finished", partOfSpeech: "complement", distractors: ["好了", "到了", "懂了"] },
      ],
    },
    {
      id: "s2-l12",
      english: "Please close the door.",
      parts: [
        { chinese: "请", pinyin: "qǐng", english: "please", partOfSpeech: "subject", distractors: ["你", "我", "他"] },
        { chinese: "把", pinyin: "bǎ", english: "(object marker)", partOfSpeech: "preposition", distractors: ["被", "对", "给"] },
        { chinese: "门", pinyin: "mén", english: "door", partOfSpeech: "object", distractors: ["窗", "书", "水"] },
        { chinese: "关", pinyin: "guān", english: "close / shut", partOfSpeech: "verb", distractors: ["开", "打", "放"] },
        { chinese: "上", pinyin: "shàng", english: "up / closed", partOfSpeech: "complement", distractors: ["下", "开", "好"] },
      ],
    },
    {
      id: "s3-l12",
      english: "He put the book on the table.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getDistractors("subject", "他", 3) },
        { chinese: "把", pinyin: "bǎ", english: "(object marker)", partOfSpeech: "preposition", distractors: ["被", "对", "给"] },
        { chinese: "书", pinyin: "shū", english: "book", partOfSpeech: "object", distractors: getDistractors("object", "书", 3) },
        { chinese: "放", pinyin: "fàng", english: "put / place", partOfSpeech: "verb", distractors: getDistractors("verb", "放", 3) },
        { chinese: "在桌子上", pinyin: "zài zhuō zi shàng", english: "on the table", partOfSpeech: "complement", distractors: ["在床上", "在椅子上", "在地上"] },
      ],
    },
    {
      id: "s4-l12",
      english: "Please wash the bowls clean.",
      parts: [
        { chinese: "请", pinyin: "qǐng", english: "please", partOfSpeech: "subject", distractors: ["你", "我", "他"] },
        { chinese: "把", pinyin: "bǎ", english: "(object marker)", partOfSpeech: "preposition", distractors: ["被", "对", "给"] },
        { chinese: "碗", pinyin: "wǎn", english: "bowl", partOfSpeech: "object", distractors: getDistractors("object", "碗", 3) },
        { chinese: "洗", pinyin: "xǐ", english: "wash", partOfSpeech: "verb", distractors: getDistractors("verb", "洗", 3) },
        { chinese: "干净", pinyin: "gān jìng", english: "clean", partOfSpeech: "complement", distractors: ["好", "完", "清楚"] },
      ],
    },
  ],
};
