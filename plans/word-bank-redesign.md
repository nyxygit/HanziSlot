# Word Bank Explorer — Redesign Plan

## Current Issues
- Pill filters with emojis feel cluttered and not modern
- No educational context — shows words without explaining how they're used
- Hard to browse — pills don't convey meaning or usage

## New Design

### 1. Clean Tab Strip (replaces pill filters)

A horizontal scrollable tab bar with text-only labels. Active tab has a subtle underline indicator.

```
┌──────────────────────────────────────────────────────────┐
│  Subject  │  Verb  │  Object  │  Adjective  │  Noun  │… │
│  ───────                                         │     │
└──────────────────────────────────────────────────────────┘
```

No emojis, no counts in the tabs. Clean and minimal.

### 2. Category Info Section (new — educational context)

Below the tab strip, each category shows:

- **Title** with a brief icon
- **Description** of the part of speech's role in Chinese
- **Example sentence pattern** showing where it fits in a real Chinese sentence structure

### 3. Word Cards Grid (existing, refined)

Grid of word cards, each showing large hanzi, pinyin, and English. Clicking plays audio.

### Content per category

| Category | Description | Example Pattern |
|----------|-------------|----------------|
| Subject | The doer of the action — who performs the verb. In Chinese, the subject always comes first. | Subject + Verb + Object<br>我 + 吃 + 苹果 |
| Verb | The action word — what the subject does. Verbs don't conjugate in Chinese. | Subject + Verb + Object<br>我 + 吃 + 苹果 |
| Object | The receiver of the action — what the verb acts upon. | Subject + Verb + Object<br>我 + 吃 + 苹果 |
| Adjective | Describes nouns. In Chinese, adjectives follow 很 (hěn) and don't change form. | Subject + 很 + Adjective<br>她 + 很 + 漂亮 |
| Noun | Names for people, places, and things. Used with 是 (shì) to identify things. | Subject + 是 + Noun<br>我 + 是 + 学生 |
| Time | When something happens. Time words come at the beginning of the sentence in Chinese. | Time + Subject + Verb + Object<br>早上 + 我 + 喝 + 咖啡 |
| Place | Where something happens or where someone is. | Subject + 在 + Place + Verb<br>我 + 在 + 学校 + 学 |
| Negation | Negation words come before the verb to make negative sentences. | Subject + 不/没 + Verb<br>我 + 不 + 吃 + 肉 |
| Modal | Helper verbs that express ability, desire, or permission. Come before the main verb. | Subject + Modal + Verb + Object<br>我 + 要 + 吃 + 苹果 |
| Particle | Small words that mark grammatical structures. 是 links subjects to nouns, 很 links to adjectives. | Subject + 是/很 + ...<br>我 + 是 + 学生 |
| Adverb | Modifies verbs or adjectives. Adverbs come before the word they modify. | Subject + Adverb + Verb<br>我们 + 都 + 去 |

## Files to Modify

### [`src/components/WordBankExplorer.tsx`](src/components/WordBankExplorer.tsx)
- Replace pill filters with clean tab strip
- Add category info section with description + example pattern
- Keep word cards grid with same audio-on-click behavior

## What Stays the Same
- Word card grid layout and interactivity (click to hear audio)
- Word data source (`wordBank` from `src/data/wordBank.ts`)
- Tab state management (`activeCategory` state)
