/**
 * Detailed educational guides for sentence structures.
 * Each guide explains how and when to use the pattern.
 */

export interface StructureGuide {
  /** Step-by-step guide on how to form the sentence */
  howToUse: string;
  /** When to use this structure — contexts and situations */
  whenToUse: string;
  /** Key grammar points to remember */
  keyPoints: string[];
}

export const structureGuides: Record<string, StructureGuide> = {
  "level-01": {
    howToUse: `To form a basic SVO sentence, start with the **subject** (who does the action), then add the **verb** (the action), and finish with the **object** (what receives the action).

In Chinese, word order is strict — there are no case endings or conjugations to tell you which word is which. Every word stays in its base form.

> **Formula:** Subject + Verb + Object
> **Example:** 我 + 吃 + 苹果 = "I eat an apple"`,
    whenToUse: `Use this structure for any simple action sentence where someone does something to something else. This is the most common sentence pattern in Chinese — you'll use it constantly.

It works for:
- Everyday actions: eating, drinking, reading, buying
- Activities: going to places, doing homework, watching movies
- Any transitive verb (a verb that takes an object)

Unlike English, Chinese never changes the word order for questions or negation — those are handled by adding words like 吗 (ma) or 不 (bù) without rearranging the sentence.`,
    keyPoints: [
      "Chinese word order is Subject-Verb-Object — the same as English, so it's intuitive for beginners.",
      "Verbs never conjugate — 吃 (chī) means 'eat', 'eats', 'eating', and 'ate' depending on context.",
      "To make a question, add 吗 (ma) at the end of the sentence. The word order stays exactly the same.",
      "To negate, put 不 (bù) before the verb: 我不吃苹果 (I don't eat apples).",
      "Time words (今天, 明天, etc.) usually come at the beginning of the sentence, before the subject.",
    ],
  },

  "level-02": {
    howToUse: `To describe something with an adjective, start with the **subject**, then add **很 (hěn)**, and finish with the **adjective**.

In Chinese, adjectives function more like verbs — they don't need a separate linking word like English "is" or "are". However, 很 is used as a neutral connector that doesn't necessarily mean "very."

> **Formula:** Subject + 很 + Adjective
> **Example:** 她 + 很 + 漂亮 = "She is beautiful"

When you want to express that something truly IS "very" + adjective, you can add emphasis through tone of voice or use adverbs like 非常 (fēicháng) for "very" or 特别 (tèbié) for "especially."`,
    whenToUse: `Use this structure whenever you want to describe a person, place, or thing with an adjective. This is the standard way to make descriptive statements in Chinese.

It works for:
- Physical descriptions: tall, short, big, small, beautiful
- Emotional states: happy, tired, busy, satisfied
- Qualities: good, expensive, clean, delicious
- Conditions: hot, cold, early, late

Without 很, the adjective takes on a comparative meaning. For example, 她漂亮 implies "She is prettier" (comparison), while 她很漂亮 is the neutral "She is beautiful." This is a unique feature of Chinese grammar.`,
    keyPoints: [
      "很 (hěn) is a neutral connector in this pattern — it often doesn't mean 'very'. 她很漂亮 simply means 'She is beautiful.'",
      "If you omit 很, the adjective becomes comparative: 她漂亮 suggests 'She is prettier (than someone else).'",
      "To negate, put 不 (bù) before 很: 她不漂亮 (She is not beautiful). Note: 不 replaces 很 in negation.",
      "You can replace 很 with other degree adverbs for emphasis: 非常 (very), 特别 (especially), 有点 (a bit).",
      "Adjectives can be intensified by reduplication: 大大的 (big — with emphasis), 高高 (tall-ish).",
    ],
  },

  "level-03": {
    howToUse: `To identify or define something, start with the **subject**, then add **是 (shì)**, and finish with a **noun**.

是 (shì) works like English "am / is / are" — it links the subject to a noun that identifies or categorizes it.

> **Formula:** Subject + 是 + Noun
> **Example:** 我 + 是 + 学生 = "I am a student"

Note that 是 is only used with nouns, never with adjectives. To describe something with an adjective, use the Subject + 很 + Adjective pattern (Structure 02).`,
    whenToUse: `Use this structure whenever you want to state what something IS — your identity, profession, nationality, or the category something belongs to.

It works for:
- Introducing yourself: name, nationality, occupation
- Identifying objects: "This is a book," "That is a pen"
- Defining relationships: "He is my teacher," "She is my friend"
- Stating facts: "Pandas are animals," "Beijing is the capital"

Unlike English, Chinese doesn't use articles (a/an/the), so 我是学生 means both "I am a student" and "I am the student" depending on context.`,
    keyPoints: [
      "是 (shì) is ONLY used with nouns — never with adjectives. For adjectives, use the 很 pattern instead.",
      "There are no articles in Chinese — 我是学生 means 'I am a student' without needing 'a.'",
      "是 stays the same for all subjects — no conjugation like English 'am/is/are'.",
      "To negate, put 不 before 是: 我不是学生 (I am not a student).",
      "To ask a question, add 吗 at the end: 你是学生吗？(Are you a student?)",
      "是 can also be used for emphasis before other verbs in certain contexts (是...的 pattern), but that's an advanced topic.",
    ],
  },
};
