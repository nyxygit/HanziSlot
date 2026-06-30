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

  "level-04": {
    howToUse: `To specify when an action happens, place the **time word** at the very beginning of the sentence, before the subject. Then follow with the standard SVO structure.

In Chinese, time always comes first — at the front of the sentence, not at the end like in English.

> **Formula:** Time + Subject + Verb + Object
> **Example:** 早上 + 我 + 吃 + 早饭 = "In the morning, I eat breakfast"

Time words can be specific (今天 — today, 明天 — tomorrow) or relative (早上 — morning, 晚上 — evening).`,
    whenToUse: `Use this structure whenever you need to say when something happens. Time placement is a fundamental difference between Chinese and English.

It works for:
- Daily routines: "In the morning, I..." "After class, I..."
- Scheduling: "Tomorrow, I..." "Next week, he..."
- Past events: "Yesterday, I..." "Last year, they..."
- Future plans: "Next month, I will..."

You can also use longer time phrases like 今天早上 (this morning) or 明天晚上 (tomorrow evening) — they all go at the beginning.`,
    keyPoints: [
      "Time words ALWAYS come at the beginning of the sentence in Chinese, before the subject — never at the end.",
      "Common time words: 今天 (today), 明天 (tomorrow), 昨天 (yesterday), 早上 (morning), 晚上 (evening).",
      "You can combine time words: 今天早上 (this morning), 明天晚上 (tomorrow evening).",
      "The rest of the sentence stays in normal SVO order after the time word.",
      "Unlike English, you don't need prepositions like 'in', 'on', or 'at' for most time expressions — just place the time word at the front.",
    ],
  },

  "level-05": {
    howToUse: `To say where an action happens, insert **在 (zài)** followed by a **place** between the subject and the verb.

在 (zài) means "at / in / on" and marks the location where the action takes place.

> **Formula:** Subject + 在 + Place + Verb + Object
> **Example:** 我 + 在 + 学校 + 吃 + 午饭 = "I eat lunch at school"

The location always comes before the verb in Chinese — the opposite of English where it comes after.`,
    whenToUse: `Use this structure whenever you need to specify where something happens. This is essential for everyday conversation.

It works for:
- Daily activities: "eat at school," "study at home," "work at an office"
- Locations: "at the library," "at the store," "in the park"
- Events: "meet at the restaurant," "buy at the market"
- Actions: "read at home," "sleep at the hotel"

Note that 在 can also be used as a standalone verb meaning "to be located at" (我在家 = "I am at home"), but here it's used as a preposition before the verb.`,
    keyPoints: [
      "在 (zài) + place always comes BEFORE the verb in Chinese, unlike English where the location comes after.",
      "Common places: 学校 (school), 家 (home), 图书馆 (library), 商店 (store), 医院 (hospital).",
      "在 can also mean 'to be located at' when used as a main verb: 我在家 (I am at home).",
      "The order is: Subject + 在 + Place + Verb. Don't put the place after the verb.",
      "To ask where someone is doing something: 你在哪儿 + Verb? (Where are you...-ing?)",
    ],
  },

  "level-06": {
    howToUse: `To express wanting, ability, or permission, insert a **modal verb** between the subject and the main verb.

Modal verbs modify the main verb by adding meaning like "want to," "can," "should," etc.

> **Formula:** Subject + Modal + Verb + Object
> **Example:** 我 + 要 + 买 + 书 = "I want to buy a book"

Common modal verbs:
- 想 (xiǎng) — would like to / miss
- 要 (yào) — want to / will
- 会 (huì) — can (know how to) / will
- 能 (néng) — can (be able to)
- 可以 (kě yǐ) — may / can (permission)`,
    whenToUse: `Use modal verbs whenever you need to express desire, ability, possibility, or permission. They are extremely common in daily Chinese.

It works for:
- Wants and desires: "I want to eat," "I would like to buy"
- Abilities: "I can speak Chinese," "She knows how to swim"
- Permission: "You may come in," "Can I use this?"
- Possibility: "It can be done," "He can make it"

Each modal verb has a slightly different nuance, so choosing the right one is important for accurate expression.`,
    keyPoints: [
      "Modal verbs go BETWEEN the subject and the main verb — never before the subject.",
      "想 (xiǎng) expresses a wish or desire: 我想喝水 (I would like to drink water).",
      "要 (yào) is stronger — it expresses determination or intention: 我要买 (I want/will buy it).",
      "会 (huì) means 'know how to' or a learned skill: 我会说中文 (I can speak Chinese).",
      "能 (néng) means 'be able to' (physical possibility): 我能吃 (I can eat / am able to eat).",
      "可以 (kě yǐ) expresses permission: 你可以进来 (You may come in).",
      "To negate modals, put 不 before the modal verb: 我不想去 (I don't want to go).",
    ],
  },

  "level-07": {
    howToUse: `To indicate that an action has been completed, add **了 (le)** right after the verb.

了 is a particle that marks completion — it's the closest thing Chinese has to a past tense marker.

> **Formula:** Subject + Verb + 了 + Object
> **Example:** 我 + 吃 + 了 + 苹果 = "I ate an apple"

The sentence without 了 (我吃苹果) means "I eat apples" (habitual/general). Adding 了 changes it to "I ate the apple" (completed action).`,
    whenToUse: `Use 了 when you want to emphasize that an action is completed or has happened. This is crucial for talking about the past.

It works for:
- Completed actions: "I ate," "She bought," "He drank"
- Changes of state: "It's cold now" (wasn't before)
- Actions with results: "I finished," "I found it"

Important: 了 does NOT always equal past tense. It specifically marks COMPLETION. For general past experiences (without emphasis on completion), use 过 (level 08) instead.`,
    keyPoints: [
      "了 (le) goes IMMEDIATELY after the verb to mark completion of the action.",
      "了 does NOT mean 'past tense' — it marks the completion of an action. Without context, 我吃了苹果 means 'I ate the apple' (it's done).",
      "When there is no object, 了 goes at the end of the sentence: 我吃了 (I've eaten).",
      "To negate a completed action, use 没 (méi) and remove 了: 我没吃苹果 (I didn't eat the apple).",
      "Difference between 了 and 过: 了 emphasizes completion of a specific action; 过 emphasizes having had the experience.",
    ],
  },

  "level-08": {
    howToUse: `To talk about past experiences, add **过 (guò)** after the verb.

过 indicates that someone has had the experience of doing something at some point in their life.

> **Formula:** Subject + Verb + 过 + Object
> **Example:** 我 + 吃 + 过 + 中餐 = "I have eaten Chinese food (before)"

Unlike 了 (which marks a specific completed action), 过 is about life experiences — whether something has ever happened to you.`,
    whenToUse: `Use 过 whenever you want to talk about experiences you've had in your life. It's the Chinese equivalent of the English present perfect with "have ever / have never."

It works for:
- Life experiences: "I have been to China," "I have seen that movie"
- Trying things: "I have eaten snake before," "I have tried skiing"
- Asking about experiences: "Have you ever...?"
- Things you've never done: "I have never studied French"

过 is often used in questions with 吗 to ask about past experiences: 你吃过中餐吗？(Have you ever eaten Chinese food?).`,
    keyPoints: [
      "过 (guò) goes AFTER the verb to indicate a past experience, not a completed action.",
      "The difference from 了: 我吃了中餐 means 'I ate Chinese food (just now/just now)', while 我吃过中餐 means 'I have eaten Chinese food before (in my life).'",
      "To negate, use 没 (méi) and remove 过... actually, keep 过: 我没吃过中餐 (I haven't eaten Chinese food before).",
      "To ask about experiences: Verb + 过 + 吗？ e.g., 你去过中国吗？(Have you been to China?)",
      "过 can also be paired with 了 for emphasis on having completed an experience: 我看过了 (I've already seen it).",
    ],
  },

  "level-09": {
    howToUse: `To make a negative sentence, place **不 (bù)** or **没 (méi)** before the verb.

These two negation words have different uses — choosing the right one is a key skill.

> **Formula:** Subject + 不/没 + Verb + Object
> **Example:** 我 + 不 + 吃 + 肉 = "I don't eat meat"
> **Example:** 我 + 没 + 吃 + 早饭 = "I haven't eaten breakfast"

Use 不 for:
- Habitual actions (I don't eat meat)
- Future actions (I won't go)
- Opinions and states (not beautiful, not good)
- With 是: 不是 (is not)

Use 没 for:
- Past actions that didn't happen (I didn't eat breakfast)
- Lack of possession with 有: 没有 (don't have)`,
    whenToUse: `Negation is essential in everyday conversation. Mastering the difference between 不 and 没 is critical.

不 is used when:
- You don't do something habitually: "I don't drink coffee"
- You refuse or won't do something: "I won't go"
- Describing something that isn't true: "This isn't good"
- With modal verbs: "I can't," "I don't want to"

没 is used when:
- Something didn't happen in the past: "I didn't eat breakfast"
- You don't possess something (with 有): "I don't have money"
- You haven't done something (with 过): "I haven't been there"`,
    keyPoints: [
      "不 (bù) is for negating habitual actions, future actions, and states — things that ARE NOT or WILL NOT happen.",
      "没 (méi) is for negating past actions and possession — things that DID NOT happen or that you DON'T HAVE.",
      "不 has tone changes: bù becomes bú before a 4th-tone syllable (e.g., 不是 bú shì, 不对 bú duì).",
      "没 is used with 有 (to have) for 'don't have': 我没有钱 (I don't have money). Never say 不有.",
      "With 了 (completed action), use 没 to negate: 我吃了 → 我没吃 (I ate → I didn't eat).",
    ],
  },

  "level-10": {
    howToUse: `To describe an action that is currently in progress, place **在 (zài)** before the verb.

在 marks that the action is happening right now — like the English "-ing" form.

> **Formula:** Subject + 在 + Verb + Object
> **Example:** 我 + 在 + 吃 + 午饭 = "I am eating lunch"

This is the same 在 from Level 05 (location marker), but here it functions as an adverb indicating ongoing action rather than a preposition indicating location.`,
    whenToUse: `Use 在 before a verb when you want to say what someone IS DOING right now. This is the Chinese equivalent of the present continuous tense in English.

It works for:
- Current activities: "I am eating," "She is reading"
- Ongoing actions: "They are talking," "We are studying"
- Actions in progress right now: "He is sleeping"

You can also use 正在 (zhèng zài) for extra emphasis that the action is happening RIGHT NOW: 我正在吃饭 (I am eating right this moment).

Note that 在 for location and 在 for progressive aspect are the same character — context tells you which meaning is intended.`,
    keyPoints: [
      "在 (zài) for progressive aspect goes BEFORE the verb: 我在看书 (I am reading a book).",
      "This is the same 在 as the location word — just a different function.",
      "You can add 正 (zhèng) before 在 for emphasis: 我正在吃饭 (I am eating right now).",
      "To ask what someone is doing: 你在做什么？(What are you doing?)",
      "To negate, use 没 (méi): 我没在看书 (I am not reading a book). Note: 不 is not used here.",
    ],
  },

  "level-11": {
    howToUse: `In Chinese, you can place the **topic** (what you're talking about) at the very beginning of the sentence, followed by a **comment** (what you're saying about it).

This is called the topic-comment structure — a fundamental feature of Chinese that English doesn't have.

> **Formula:** Topic + Comment
> **Example:** 这本书 + 我看过了 = "This book, I have read it"

The topic is usually an object or a noun that the rest of the sentence comments on. Unlike English, where the subject usually comes first, Chinese allows you to front the topic for emphasis or clarity.`,
    whenToUse: `Use the topic-comment structure when you want to emphasize what you're talking about by putting it first. This is very common in natural Chinese conversation.

It works for:
- Talking about specific items: "This book, I have read it"
- Contrasting topics: "Fish I like, but meat I don't eat"
- Broad statements: "That movie, everyone has seen it"
- Setting up context: "This homework, I finished it already"

The topic-comment structure is often used to maintain a conversation topic or to contrast one thing with another.`,
    keyPoints: [
      "The topic is placed FIRST, before the subject — this is called 'fronting'.",
      "The rest of the sentence (the comment) is a normal complete sentence about the topic.",
      "This structure is very common in spoken Chinese — it's more natural than the standard SVO order when contrasting or emphasizing.",
      "Unlike English, Chinese allows this without any special grammar changes — just move the topic to the front.",
      "The topic is often something already known or being contrasted: 那个电影我看过 (That movie, I've seen it).",
    ],
  },

  "level-12": {
    howToUse: `The 把 (bǎ) construction moves the object BEFORE the verb and adds a complement to show the result of the action.

This is one of the most unique structures in Chinese grammar. It emphasizes what happens TO the object as a result of the action.

> **Formula:** Subject + 把 + Object + Verb + Complement
> **Example:** 我 + 把 + 苹果 + 吃 + 完了 = "I finished eating the apple" (lit. "I took the apple and ate it up")

把 marks the object as the thing that gets handled or affected by the verb. The complement tells you what happened to it.`,
    whenToUse: `Use 把 when you want to emphasize what happens to the object — especially when the action has a clear result or effect on it.

It works for:
- Consuming or using up: "I finished the food," "He drank up the water"
- Moving things: "Put the book on the table," "Close the door"
- Changing things: "Clean the bowls," "Wash the clothes"
- Completing tasks: "I did my homework"

The 把 construction is optional in many cases — you can say both 我吃了苹果 and 我把苹果吃了 — but 把 sounds more natural when emphasizing what happened to the object.`,
    keyPoints: [
      "把 (bǎ) moves the object BEFORE the verb (unlike standard SVO where the object comes after).",
      "把 sentences ALWAYS need a complement or result — you can't just say 我把苹果吃 (I eat the apple — it feels incomplete without the result).",
      "The complement explains what happened to the object: 完了 (finished), 好 (done properly), 干净 (clean).",
      "把 is often used with disposal verbs like 吃 (eat), 喝 (drink), 做 (do), 洗 (wash), 放 (put).",
      "把 cannot be used with stative verbs (like 喜欢, 爱, 知道) — only action verbs with results.",
    ],
  },

  "level-13": {
    howToUse: `To form the passive voice, use **被 (bèi)** to indicate that the subject RECEIVES the action rather than performs it.

被 introduces the agent (who does the action), followed by the verb and a complement.

> **Formula:** Subject + 被 (+ Agent) + Verb + Complement
> **Example:** 苹果 + 被 + 他 + 吃 + 了 = "The apple was eaten by him"

The subject is the receiver of the action (the apple), the agent is the doer (him), and the verb describes what happened.`,
    whenToUse: `Use 被 when you want to emphasize that something happens TO the subject, rather than the subject doing something. This is the Chinese passive voice.

It works for:
- Unwanted or unexpected events: "The apple was eaten," "The money was spent"
- When the agent is important: "The book was taken BY HIM"
- Describing what happened to something: "The clothes were washed by mom"
- Negative consequences: "He was scolded," "The window was broken"

The agent can be omitted if it's obvious or unknown: 苹果被吃了 (The apple was eaten — by someone).`,
    keyPoints: [
      "被 (bèi) marks the passive voice — the subject receives the action, not performs it.",
      "Structure: Receiver + 被 + Doer + Verb + Complement.",
      "The doer (agent) can be omitted if not important: 钱被花了 (The money was spent).",
      "被 is used mostly for actions that have a negative or unexpected result — it's less neutral than English passive.",
      "Respectively: 把 = active focus on the object; 被 = passive focus on the receiver.",
    ],
  },

  "level-14": {
    howToUse: `To emphasize the DETAILS of a past action (how, when, or where it happened), use the **是...的 (shì...de)** construction.

Wrap the detail you want to emphasize between 是 and 的.

> **Formula:** Subject + 是 + Detail + Verb + 的
> **Example:** 我 + 是 + 坐火车 + 来 + 的 = "I came BY TRAIN" (emphasizing the method)

The detail being emphasized can be the method (how), the time (when), the place (where), or the person (who did it).`,
    whenToUse: `Use 是...的 when you want to emphasize a specific detail about a past action. This is especially common when answering questions or clarifying information.

It works for:
- Method: "I came BY TRAIN (not by plane)"
- Time: "He went YESTERDAY (not today)"
- Place: "She bought it AT THE STORE (not online)"
- Manner: "I was born IN CHINA (not somewhere else)"

是...的 is ONLY used for past actions. For present or future actions, use a standard SVO sentence.`,
    keyPoints: [
      "是...的 wraps around the emphasized detail: Subject + 是 + [emphasized detail] + Verb + 的.",
      "This structure is ONLY for past actions — it emphasizes how, when, or where something happened.",
      "The emphasized detail is the key new information, often answering a specific question.",
      "是 can sometimes be omitted in casual speech, but the 的 at the end is required.",
      "Don't confuse this with 是 for identity (Level 03) — this 是...的 is about emphasizing details of past actions.",
    ],
  },

  "level-15": {
    howToUse: `To compare two things, use **比 (bǐ)** between them, followed by the adjective.

比 means "than" or "compared to" — it creates a direct comparison.

> **Formula:** A + 比 + B + Adjective
> **Example:** 她 + 比 + 他 + 高 = "She is taller than him"

Unlike English which adds "-er" or uses "more," Chinese simply uses 比 + adjective with no change to the adjective itself.

To add a degree of difference, you can add a quantifier after the adjective: 她比他高三厘米 (She is 3 cm taller than him).`,
    whenToUse: `Use 比 whenever you need to compare two people, things, or situations. This is the standard comparison structure in Chinese.

It works for:
- Physical comparisons: "taller than," "bigger than," "faster than"
- Quality comparisons: "better than," "more expensive than"
- State comparisons: "busier than," "happier than"
- Time comparisons: "Today is colder than yesterday"

To say "A is less X than B," use 没有 (méi yǒu) instead: 他没有她高 (He is not as tall as her).`,
    keyPoints: [
      "比 (bǐ) means 'than' and goes BETWEEN the two things being compared.",
      "The adjective after 比 doesn't change form — no '-er' ending needed.",
      "To emphasize a big difference, add 得多 (de duō): 她比他高得多 (She is much taller than him).",
      "To say 'A is not as X as B,' use 没有: 我没有他忙 (I am not as busy as him).",
      "To specify how much difference: 她比我大两岁 (She is two years older than me).",
    ],
  },

  "level-16": {
    howToUse: `To express whether an action CAN or CANNOT achieve a result, insert **得 (dé)** or **不 (bù)** between the verb and its resultative complement.

This is called the potential complement. 得 = can (achieve the result), 不 = cannot (fail to achieve).

> **Formula:** Subject + Verb + 得/不 + Complement
> **Example (+):** 我 + 吃 + 得 + 完 = "I can finish eating"
> **Example (-):** 我 + 吃 + 不 + 完 = "I cannot finish eating"

The complement describes the result: 完 (finish), 懂 (understand), 到 (reach), 清楚 (clearly).`,
    whenToUse: `Use this structure when you want to say whether someone CAN or CANNOT achieve a specific result through an action. It's different from modal verbs like 能 (can) because it focuses on the RESULT of the action.

It works for:
- Ability to finish: "I can finish eating," "I can't finish"
- Comprehension: "I can understand (what I hear)," "I can't see clearly"
- Reaching goals: "I can catch it," "I can't get there"
- Perception: "I can hear," "I can't see"

This structure only works with resultative complements — verbs like 吃 (eat), 看 (see), 听 (hear), 做 (do) that can have a measurable result.`,
    keyPoints: [
      "得 (dé) indicates potential/can: 吃得完 (can finish eating). 不 (bù) indicates cannot: 吃不完 (cannot finish eating).",
      "This is different from modal verbs like 能 or 会 — it specifically focuses on achieving the RESULT of the action.",
      "Common complements: 完 (finish), 懂 (understand), 到 (reach/attain), 清楚 (clearly), 见 (perceive).",
      "The structure is Verb + 得/不 + Complement — nothing goes between the verb and the complement.",
      "Watch out for tone change: 不 is pronounced bù normally, but bú before 4th tone (though in this structure it's usually read as bù).",
    ],
  },

  "level-17": {
    howToUse: `To indicate direction of movement — toward or away from the speaker — add **来 (lái)** or **去 (qù)** after a verb of motion.

来 means movement toward the speaker ("come"), and 去 means movement away ("go").

> **Formula:** Subject + Verb + 来/去
> **Example:** 他 + 走 + 过来 = "He is coming over" (walking toward me)
> **Example:** 我 + 回 + 去 = "I am going back" (going away)

These are called directional complements. They combine with motion verbs to show both the action AND the direction.`,
    whenToUse: `Use directional complements whenever you describe movement and need to show direction relative to the speaker or listener.

It works for:
- Movement toward speaker: "come in," "come back," "come over"
- Movement away: "go back," "go out," "run away"
- Combined directions: "bring here," "take away"
- Common verbs: 走 (walk), 跑 (run), 回 (return), 进 (enter), 出 (exit), 上 (ascend), 下 (descend)

Directional complements are extremely common in everyday Chinese conversation.`,
    keyPoints: [
      "来 (lái) = toward the speaker (come). 去 (qù) = away from speaker (go).",
      "Common directional compounds: 过来 (come over), 过去 (go over), 回来 (come back), 回去 (go back), 进来 (come in), 进去 (go in).",
      "When there's a place involved, it goes between the verb and the direction: 回学校去 (go back to school).",
      "Directional complements can combine with 得/不 for potential: 进得来 (can come in), 进不来 (cannot come in).",
      "这些词在口语中非常常用 — practice them as vocabulary chunks.",
    ],
  },

  "level-18": {
    howToUse: `To say that something is "getting more and more" of a quality, use **越来越 (yuè lái yuè)** before an adjective.

越来越 literally means "more and more" — it shows a progressive increase over time.

> **Formula:** Subject + 越来越 + Adjective
> **Example:** 她 + 越来越 + 漂亮 = "She is getting more and more beautiful"
> **Example:** 天气 + 越来越 + 热 = "The weather is getting hotter and hotter"

There is no equivalent to adding "and" between repeated adjectives like in English. 越来越 handles the repetition implicitly.`,
    whenToUse: `Use 越来越 whenever you describe something that is changing or increasing over time in terms of a quality.

It works for:
- Physical changes: "getting taller," "getting more beautiful"
- Weather: "getting hotter," "getting colder"
- Life situations: "getting better," "getting busier"
- Skills and abilities: "getting better at Chinese"
- Emotional states: "getting happier," "getting more tired"

越来越 can also be used with verbs in some contexts: 越来越喜欢 (like more and more).`,
    keyPoints: [
      "越来越 (yuè lái yuè) is a FIXED phrase — don't break it up or change the word order.",
      "It always goes BEFORE the adjective: 越来越 + Adj, never the reverse.",
      "Unlike English 'more and more,' 越来越 doesn't repeat the adjective — the repetition is built into the phrase itself.",
      "Common pairings: 越来越好 (getting better), 越来越贵 (getting more expensive), 越来越忙 (getting busier).",
      "越来越 can also modify verbs: 越来越喜欢 (like more and more), 越来越想吃 (want to eat more and more).",
    ],
  },

  "level-19": {
    howToUse: `To describe something that has two qualities at the same time, use **又...又 (yòu...yòu)** with two adjectives.

又...又 is like saying "both X and Y" — it emphasizes that something has both qualities simultaneously.

> **Formula:** Subject + 又 + Adjective₁ + 又 + Adjective₂
> **Example:** 这个食物 + 又 + 便宜 + 又 + 好吃 = "This food is both cheap and delicious"

Both adjectives are placed after 又, following the subject. The structure works like a pair.`,
    whenToUse: `Use 又...又 when you want to say that something has two positive (or negative) qualities at once. It's great for giving compliments or descriptions.

It works for:
- Positive qualities: "beautiful and tall," "cheap and delicious"
- Negative qualities: "expensive and small," "loud and dirty"
- Complementary attributes: "big and clean," "new and expensive"
- Simultaneous states: "happy and excited"

Note that 又...又 is for adjectives that coexist — not for verbs. For simultaneous actions, use 一边...一边 (yī biān...yī biān).`,
    keyPoints: [
      "又...又 is a PAIRED structure — both 又 must be present, one before each adjective.",
      "Unlike English 'and,' 又...又 emphasizes the COEXISTENCE of both qualities.",
      "The subject comes BEFORE the whole structure: Subject + 又 + Adj₁ + 又 + Adj₂.",
      "Common pairs: 又便宜又好吃 (cheap and tasty), 又大又干净 (big and clean), 又高又漂亮 (tall and beautiful).",
      "For verbs, use 一边...一边 instead: 他一边吃饭一边看书 (He reads while eating).",
    ],
  },

  "level-20": {
    howToUse: `To express a cause-and-effect relationship between two clauses, use **因为 (yīn wèi)...所以 (suǒ yǐ)**.

因为 introduces the REASON, and 所以 introduces the RESULT.

> **Formula:** 因为 + Clause (reason) + 所以 + Clause (result)
> **Example:** 因为 + 下雨 + 所以 + 我不去 = "Because it is raining, I am not going"

Both 因为 and 所以 are usually present in the sentence, though 因为 can sometimes be omitted in casual speech if the reason is obvious.`,
    whenToUse: `Use 因为...所以 whenever you need to explain WHY something happens by giving a reason and its result.

It works for:
- Explaining decisions: "Because I'm busy, I can't go"
- Giving reasons: "Because it's cold, she wears a coat"
- Logical conclusions: "Because I have money, I buy this"
- Answering "why" questions: "Why aren't you going? Because..."

Unlike English where you can use either "because" or "so" alone, Chinese strongly prefers using BOTH 因为 and 所以 together in a single sentence.`,
    keyPoints: [
      "因为 (yīn wèi) = because (reason), 所以 (suǒ yǐ) = therefore (result).",
      "In formal Chinese, BOTH 因为 and 所以 are used together — it's rare to use only one.",
      "The reason clause comes FIRST: 因为... + 所以..., matching Chinese logic order.",
      "In casual speech, 因为 can be dropped: 下雨所以我不去 (It's raining, so I'm not going).",
      "所以 can never begin a sentence on its own — it must follow the reason clause.",
    ],
  },

  "level-21": {
    howToUse: `To express contrast — acknowledging one fact while presenting an opposing one — use **虽然 (suī rán)...但是 (dàn shì)**.

虽然 introduces the conceded fact, and 但是 introduces the contrasting point.

> **Formula:** 虽然 + Clause (concession) + 但是 + Clause (contrast)
> **Example:** 虽然 + 很冷 + 但是 + 他出去 = "Although it is cold, he still goes out"

This is like English "although...but" — though note that English considers these redundant while Chinese uses them together naturally.`,
    whenToUse: `Use 虽然...但是 when you want to present a surprising or contrasting situation — acknowledging an obstacle but showing what happens regardless.

It works for:
- Overcoming obstacles: "Although tired, she still studies"
- Surprising situations: "Although expensive, it's very good"
- Concessions: "Although it's raining, I still go to school"
- Contradicting expectations: "Although he's busy, he helps me"

The contrast can be positive (despite bad circumstances, good outcome) or negative (despite good circumstances, bad outcome).`,
    keyPoints: [
      "虽然 (suī rán) = although (acknowledging a fact), 但是 (dàn shì) = but (presenting the contrast).",
      "Unlike English where you'd use EITHER 'although' OR 'but,' Chinese uses BOTH together.",
      "但是 can be shortened to 但 in writing, or replaced with 可是 (kě shì) in casual speech.",
      "The structure is: 虽然 + [fact] + 但是 + [contrasting fact].",
      "To add emphasis, use 还是 (hái shì) or 仍然 (réng rán) in the second clause: 虽然很冷但是他还是出去了 (Although it's cold, he still went out).",
    ],
  },

  "level-22": {
    howToUse: `To express a conditional "if...then" relationship, use **如果 (rú guǒ)...就 (jiù)**.

如果 introduces the condition, and 就 introduces the result that follows if the condition is met.

> **Formula:** 如果 + Clause (condition) + 就 + Clause (result)
> **Example:** 如果 + 下雨 + 就 + 不去 = "If it rains, (then) I won't go"

就 (jiù) is an adverb meaning "then" that connects the condition to its result. It goes before the verb in the result clause.`,
    whenToUse: `Use 如果...就 whenever you need to talk about hypothetical situations and their consequences.

It works for:
- Conditional plans: "If I have money, I'll buy it"
- Suggestions: "If you have time, come to my place"
- Hypotheticals: "If you work hard, you can do it"
- Warnings: "If it rains, I won't go"
- Polite invitations: "If you're free, let's meet"

就像 can be omitted in short or casual sentences, but it makes the conditional relationship clearer when included.`,
    keyPoints: [
      "如果 (rú guǒ) = if (introduces the condition). 就 (jiù) = then (introduces the result).",
      "就 goes BEFORE the verb in the result clause: 就去 (then go), 就买 (then buy).",
      "Both parts can have their own subject: 如果你有时间 + 就来我家 (If you have time, come to my place).",
      "如果 can be dropped in casual speech: 下雨我就不去 (If it rains, I won't go).",
      "For 'even if' or 'even though,' use 即使 (jí shǐ)...也 (yě) instead.",
    ],
  },

  "level-23": {
    howToUse: `To say "as soon as X happens, Y happens," use **一 (yī)...就 (jiù)** between two actions.

一 marks the first action, and 就 shows that the second action follows immediately.

> **Formula:** Subject + 一 + Verb₁ + 就 + Verb₂
> **Example:** 我 + 一 + 回家 + 就 + 吃 = "As soon as I get home, I eat"

The subject usually applies to both actions but only needs to be stated once at the beginning.

> **Alternative:** 一 + Verb₁ + 就 + Verb₂ (without a separate subject, for general statements)`,
    whenToUse: `Use 一...就 when you want to emphasize that one action happens immediately after another — there's no gap between them.

It works for:
- Daily routines: "As soon as I get home, I eat"
- Immediate reactions: "As soon as I see it, I buy it"
- Sequential events: "As soon as class ends, I go home"
- Habits: "As soon as I arrive, I call you"
- Cause-effect patterns: "As soon as I study, I get sleepy"

This structure is very common in both spoken and written Chinese for expressing immediate sequences.`,
    keyPoints: [
      "一 (yī) marks the first action, 就 (jiù) marks the second — they work together as a pair.",
      "The subject comes before 一 and applies to both actions: 我一下课就回家 (As soon as class ends, I go home).",
      "一 here is pronounced yī (first tone) despite normally being yí before 4th tone — it's an exception.",
      "This structure implies the second action happens IMMEDIATELY after the first, with no delay.",
      "一...就 can also be used with adjectives for sudden changes: 天一亮他就起床 (As soon as it gets light, he gets up).",
    ],
  },

  "level-24": {
    howToUse: `To say "besides" or "except," use **除了 (chú le)...以外 (yǐ wài)**.

The structure sets up a scope (everything except X) and then states what happens.

> **Formula:** 除了 + Noun + 以外 + Subject + 还/也 + Verb + Object
> **Example (besides):** 除了 + 中文 + 以外 + 我 + 还 + 学 + 英文 = "Besides Chinese, I also study English"
> **Example (except):** 除了 + 我 + 以外 + 大家 + 都 + 去 = "Everyone is going except me"

以外 can be omitted in casual speech, but it's more formal and clear with it.`,
    whenToUse: `Use 除了...以外 to include or exclude something from a group or activity.

It has TWO meanings depending on context:

1. **Inclusion (besides/also):** Paired with 还 (hái) or 也 (yě) — adds something to the list.
   - "Besides Chinese, I also study English" (both are studied)

2. **Exclusion (except):** Paired with 都 (dōu) — removes something from the group.
   - "Everyone is going except me" (I am excluded)

The adverb (还/也/都) in the second part determines whether it's inclusion or exclusion.`,
    keyPoints: [
      "除了...以外 = 'besides' or 'except' depending on context and the paired adverb.",
      "以外 can be dropped: 除了中文我学英文 is fine in casual conversation.",
      "Use 还 (hái) or 也 (yě) for inclusion (besides/also): 除了苹果以外我也喜欢吃梨.",
      "Use 都 (dōu) for exclusion (except): 除了我以外大家都去 (Everyone goes except me).",
      "The word order is fixed: 除了 + [noun] + 以外 + [subject] + [adverb] + [verb].",
    ],
  },

  "level-25": {
    howToUse: `To express "as long as" — a sufficient condition — use **只要 (zhǐ yào)...就 (jiù)**.

只要 introduces the minimum condition needed, and 就 introduces the guaranteed result.

> **Formula:** 只要 + Clause (condition) + 就 + Clause (result)
> **Example:** 只要 + 你努力 + 就 + 能成功 = "As long as you work hard, you will succeed"

This is similar to 如果...就 (if...then), but 只要 emphasizes that the condition is SUFFICIENT — if X happens, then Y will definitely happen.`,
    whenToUse: `Use 只要...就 when you want to emphasize that a certain condition is enough to guarantee a result. It's more specific than 如果 (if).

It works for:
- Minimum requirements: "As long as you have money, you can buy it"
- Guarantees: "As long as you work hard, you will succeed"
- Simple conditions: "As long as it doesn't rain, I will go"
- Emotional conditions: "As long as you are happy, I am happy"

The key difference from 如果 is certainty — 只要 implies the result is GUARANTEED when the condition is met.`,
    keyPoints: [
      "只要 (zhǐ yào) = 'as long as' / 'provided that' — introduces a sufficient condition.",
      "就 (jiù) = 'then' — introduces the guaranteed result.",
      "Unlike 如果 (if), 只要 implies certainty: 'if X happens (and it's enough to guarantee Y).'",
      "The condition can be placed before or after the subject: 只要你有钱 (as long as you have money).",
      "For 'only if' (a necessary condition), use 只有 (zhǐ yǒu)...才 (cái) instead.",
    ],
  },

  "level-26": {
    howToUse: `To say "even" — emphasizing something surprising or extreme — use **连 (lián)...都/也 (dōu/yě)**.

连 introduces the emphasized element, and 都 or 也 follows it, with the verb at the end.

> **Formula:** (Subject) + 连 + Noun + 都/也 + Verb
> **Example:** 他 + 连 + 饭 + 都 + 不能吃 = "He can't even eat"
> **Example:** 连 + 小孩 + 都 + 知道 = "Even a child knows this"

The structure creates emphasis by putting the extreme or surprising element in focus.`,
    whenToUse: `Use 连...都/也 when you want to emphasize how extreme or surprising a situation is — often to highlight that even the most basic or expected thing is affected.

It works for:
- Negative emphasis: "He can't even eat" (let alone do other things)
- Surprising facts: "Even a child knows this"
- Unexpected extremes: "I don't even have one dollar"
- Expressing disbelief: "He doesn't even drink water"

连...都 is more common in positive statements; 连...也 is slightly more common in negative ones, though both are used interchangeably in practice.`,
    keyPoints: [
      "连 (lián) = 'even' — introduces the emphasized element.",
      "都 (dōu) or 也 (yě) follows the emphasized element and precedes the verb.",
      "The subject (if any) comes before or after 连: 他连饭都不吃 or 连他都不吃饭.",
      "This structure is often used to show that something basic/unexpected is affected: 他连水都不喝 (He doesn't even drink water).",
      "连...都/也 is different from 甚至 (shèn zhì) which also means 'even' — 连 is more conversational.",
    ],
  },

  "level-27": {
    howToUse: `To say "not only X, but also Y," use **不但 (bù dàn)...而且 (ér qiě)**.

不但 introduces the first quality, and 而且 introduces the additional quality.

> **Formula:** Subject + 不但 + Adjective₁ + 而且 + Adjective₂
> **Example:** 她 + 不但 + 高 + 而且 + 漂亮 = "She is not only tall, but also beautiful"

The subject comes BEFORE the whole structure, and both adjectives describe the same subject.

This can also be used with verbs: 他不但会说中文而且会写 (He can not only speak Chinese but also write it).`,
    whenToUse: `Use 不但...而且 when you want to add emphasis by listing two qualities or actions together, showing that something has MORE than just one notable attribute.

It works for:
- Compliments: "Not only tall, but also beautiful"
- Product features: "Not only cheap, but also delicious"
- Skills: "Not only speaks Chinese, but also writes it"
- Multiple qualities: "Not only big, but also clean"
- Negative qualities: "Not only busy, but also tired"

This is more emphatic than just saying "and" — it draws attention to the fact that there are MULTIPLE notable qualities.`,
    keyPoints: [
      "不但 (bù dàn) = 'not only.' 而且 (ér qiě) = 'but also.'",
      "The subject comes BEFORE 不但: 她不但高而且漂亮 (She is not only tall but also beautiful).",
      "不但...而且 can modify adjectives (as above) or verbs: 他不但会说而且会写.",
      "而且 can be replaced with 还 (hái) for a slightly more casual tone: 她不但高还漂亮.",
      "The structure emphasizes that BOTH qualities are true and noteworthy.",
    ],
  },

  "level-28": {
    howToUse: `To describe the degree or manner of an action, use **得 (de)** after the verb to introduce a complement.

得 connects the verb to a description of how the action is performed.

> **Formula:** Subject + Verb + 得 + Complement
> **Example:** 他 + 跑 + 得 + 很快 = "He runs very fast"
> **Example:** 她 + 说 + 得 + 很好 = "She speaks very well"

The complement is usually an adjective or phrase describing the speed, quality, or manner of the action.

Important: If the verb takes an object, repeat the verb: 他说中文说得很好 (He speaks Chinese very well).`,
    whenToUse: `Use 得 complements whenever you want to describe HOW WELL or in WHAT MANNER someone does something.

It works for:
- Speed: "runs fast," "eats quickly"
- Quality: "speaks well," "dances beautifully"
- Degree: "slept deeply," "laughed happily"
- Skills assessment: "writes neatly," "sings nicely"

This is the standard way to add adverbs of manner in Chinese. Unlike English where adverbs go before the verb ("quickly runs"), in Chinese the manner description comes AFTER the verb with 得.`,
    keyPoints: [
      "得 (de) is the complement marker — it connects the verb to the manner/degree description.",
      "The complement comes AFTER 得: Verb + 得 + [description].",
      "If the verb has an object, repeat the verb: 他做作业做得很快 (He does homework very quickly).",
      "Common complements: 很快 (very fast), 很好 (very well), 很慢 (very slow), 很漂亮 (beautifully).",
      "Don't confuse 得 with 的 (possessive/attributive) or 地 (adverbial) — they're all pronounced de but have different functions.",
    ],
  },

  "level-29": {
    howToUse: `To say you're doing an action FOR someone, use **给 (gěi)** before the person.

给 means "for" or "to" — it indicates that the action benefits or is directed at someone.

> **Formula:** Subject + 给 + Person + Verb + Object
> **Example:** 我 + 给 + 他 + 买 + 书 = "I bought a book for him"
> **Example:** 妈妈 + 给 + 我们 + 做 + 晚饭 = "Mom makes dinner for us"

给 goes between the subject and the verb, introducing the recipient or beneficiary of the action.`,
    whenToUse: `Use 给 when you want to say that someone does something FOR or TO someone else. This is very common in daily Chinese.

It works for:
- Buying for someone: "I bought a book for him"
- Making for someone: "Mom makes dinner for us"
- Teaching/helping: "The teacher teaches us Chinese"
- Doing favors: "I'll write a letter for you"
- Services: "The doctor gave me medicine"

给 is different from 对 (toward) — 给 implies giving/doing something FOR someone, while 对 expresses an attitude toward someone.`,
    keyPoints: [
      "给 (gěi) means 'for' or 'to' — it introduces the beneficiary of the action.",
      "The order is: Subject + 给 + Person + Verb + Object — 给 comes before the person.",
      "给 can also be a main verb meaning 'to give': 我给他一本书 (I give him a book).",
      "Don't confuse 给 (for someone) with 对 (toward someone) — 给他买 = buy for him, 对他好 = be nice to him.",
      "给 sentences can sometimes be ambiguous — context determines if 给 means 'for' or the action of giving.",
    ],
  },

  "level-30": {
    howToUse: `To express an attitude or feeling TOWARD something, use **对 (duì)** to introduce the target of the feeling, followed by 很 + adjective.

对 means "toward" or "regarding" — it points the adjective at a specific person or thing.

> **Formula:** Subject + 对 + Noun + 很 + Adjective
> **Example:** 我 + 对 + 中文 + 很 + 感兴趣 = "I am very interested in Chinese"
> **Example:** 她 + 对 + 我 + 很 + 好 = "She is very nice to me"

The adjective describes the subject's attitude or behavior toward the target noun.`,
    whenToUse: `Use 对 to express someone's attitude, feelings, or behavior toward someone or something. It's essential for talking about opinions and relationships.

It works for:
- Interest: "interested in," "enthusiastic about"
- Personal treatment: "nice to me," "serious about work"
- Attitudes: "strict with students," "patient with children"
- Feelings: "friendly toward," "grateful for"
- Professional: "passionate about teaching," "dedicated to work"

对 is also used in many fixed expressions like 对...感兴趣 (interested in) and 对...好 (nice to).`,
    keyPoints: [
      "对 (duì) = 'toward / regarding' — introduces the target of an attitude or feeling.",
      "Structure: Subject + 对 + Target + 很 + Adjective.",
      "Common patterns: 对...感兴趣 (interested in), 对...好 (nice to), 对...认真 (serious about).",
      "对 is different from 给 — 对 expresses an attitude TOWARD something, while 给 indicates doing something FOR someone.",
      "很 is required here as a neutral connector (like in Level 02), not meaning 'very': 我对他很好 = 'I am nice to him' (neutral statement).",
    ],
  },
};
