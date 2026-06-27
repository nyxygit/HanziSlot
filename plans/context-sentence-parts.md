# Plan: Adding Context to Incomplete Chinese Sentences

## Problem

Some sentence patterns in HanziSlot only include the **grammatical pattern** being quizzed, but omit the **subject/context** that the English sentence references. This creates an incomplete Chinese sentence that doesn't match the full English meaning.

### Affected Levels (Audit Results)

| Level | Pattern | Issue | Example |
|-------|---------|-------|---------|
| **19** | 又 + Adj₁ + 又 + Adj₂ | Missing subject in all 4 sentences | English: "This food is both cheap and delicious" → Chinese: `又 便宜 又 好吃` (missing `这个食物`) |
| **23** | 一 + Verb₁ + 就 + Verb₂ | Missing subject in all 4 sentences | English: "As soon as I get home, I eat" → Chinese: `一 回家 就 吃` (missing `我`) |
| **27** | 不但 + Adj₁ + 而且 + Adj₂ | Missing subject in all 4 sentences | English: "Not only is she tall, but also beautiful" → Chinese: `不但 高 而且 漂亮` (missing `她`) |
| **25** | 只要 + Clause + 就 + Clause | Missing subject in s1, s3 (s2, s4 ok) | English: "As long as you work hard..." → Chinese: `只要 努力 就 能成功` (missing `你`) |
| **26** | 连 + Noun + 都/也 + Verb | Missing subject in s1, s3, s4 (s2 ok) | English: "He can't even eat" → Chinese: `连 饭 都 不能吃` (missing `他`) |

### Levels That Are Already Correct

Levels 1-18, 20-22, 24, 28-30 already include subjects/context as part of the pattern itself (e.g., SVO includes subject, 比 includes both nouns, 因为...所以 includes full clauses).

## Solution: Add `static: boolean` to `SentencePart`

### Concept

Add an **optional `static` property** to the [`SentencePart`](src/types/index.ts:27) interface. When a part has `static: true`:

1. It is displayed in the Chinese sentence as **plain text** (not a slot/dropdown)
2. The user does **not** interact with it or guess it
3. It is **not** included in validation
4. It provides context pinyin and english for reference on hover/tap

### Architectural Changes

#### 1. [`src/types/index.ts`](src/types/index.ts) — Add `static` property

```typescript
export interface SentencePart {
  chinese: string;
  pinyin: string;
  english: string;
  partOfSpeech: PartOfSpeech;
  distractors: string[];
  static?: boolean;  // NEW: If true, displayed as context text, not quizzed
}
```

#### 2. [`src/engine/gameReducer.ts`](src/engine/gameReducer.ts) — Skip static parts in slot creation

In [`initializeSlots`](src/engine/gameReducer.ts:14), filter out parts with `static: true`. Only create [`SlotState`](src/types/index.ts:62) objects for non-static parts.

The static parts still need to be accessible for display. We have two options:

**Option A**: Store static parts separately in the sentence data (cleaner, but adds a new field to game state)

**Option B**: Access static parts directly from [`currentSentence.parts`](src/types/index.ts:38) during rendering and skip them (no state changes needed, self-contained)

**Recommended: Option B** — The static parts are already in `currentSentence.parts`. The renderer reads them and distinguishes static vs. quizzed parts when rendering.

#### 3. [`src/components/GameBoard.tsx`](src/components/GameBoard.tsx) — Render static text between slots

The [`slots` render loop](src/components/GameBoard.tsx:160) needs to be augmented to interleave static text parts between the quizzed slot columns.

**Rendering logic**:
- Iterate through `currentSentence.parts`
- If `static: true` → render as styled static text badge
- If `static: false` → render the existing `SlotColumn` component (pop from slots array)

This produces a full Chinese sentence like:

`这个食物` [又] [便宜] [又] [好吃]

Where `这个食物` is static context text and the bracketed items are interactive slot dropdowns.

#### 4. [`src/engine/validation.ts`](src/engine/validation.ts) — Skip static parts

In [`validateAnswer`](src/engine/validation.ts:14), skip parts where `static: true`. The `skipIndices` mechanism already exists for fixed slots — we just need to also include static part indices.

**Better approach**: Pass static indices into the existing `skipIndices` parameter.

### Implementation Steps

#### Step 1: Update Type Definition
Add `static?: boolean` to [`SentencePart`](src/types/index.ts:27).

#### Step 2: Update GameBoard.tsx Rendering
Modify the rendering in [`GameBoard.tsx`](src/components/GameBoard.tsx:147-191) to:
- Filter `currentSentence.parts` into static and quizzed arrays
- Render static parts as styled inline text badges (e.g., a pill with gray background and pinyin tooltip)
- Render quizzed parts using existing `SlotColumn` logic
- Maintain the same responsive layout

**Visual design for static text badges**:
- Light gray/blue background pill
- Chinese characters in same font size as slot answers
- Pinyin shown on hover/tap (using existing tooltip pattern)
- Muted styling to distinguish from interactive slots

#### Step 3: Update Validation
Update [`validateAnswer`](src/engine/validation.ts:14) to compute skip indices from both `fixedSlotIndices` and static part indices. Or, compute static part indices in `GameBoard` alongside `fixedSlotIndices` and pass them to `confirmAnswer`.

Looking at the code flow:

```typescript
// In GameBoard.tsx
const fixedSlotIndices = state.level ? getFixedSlotIndices(state.level) : [];
// NEW: compute static part indices too
const staticIndices = currentSentence.parts
  .map((part, i) => part.static ? i : -1)
  .filter(i => i >= 0);

const handleConfirm = () => {
  confirmAnswer([...fixedSlotIndices, ...staticIndices]);
};
```

This reuses the existing `skipIndices` mechanism in [`confirmAnswer`](src/engine/gameReducer.ts:111) and [`validateAnswer`](src/engine/validation.ts:14).

#### Step 4: Fix Level Data Files

For each affected level, add context parts with `static: true`:

**Level 19** ([`src/data/levels/level-19-you-you.ts`](src/data/levels/level-19-you-you.ts)):
```typescript
// s1 - "This food is both cheap and delicious"
parts: [
  { chinese: "这个食物", pinyin: "zhè gè shí wù", english: "this food", partOfSpeech: "subject", distractors: [], static: true },
  { chinese: "又", ... },
  { chinese: "便宜", ... },
  { chinese: "又", ... },
  { chinese: "好吃", ... },
]
```

**Level 23** ([`src/data/levels/level-23-yi-jiu.ts`](src/data/levels/level-23-yi-jiu.ts)):
```typescript
// s1 - "As soon as I get home, I eat"
parts: [
  { chinese: "我", pinyin: "wǒ", english: "I", partOfSpeech: "subject", distractors: [], static: true },
  { chinese: "一", ... },
  { chinese: "回家", ... },
  { chinese: "就", ... },
  { chinese: "吃", ... },
]
```

**Level 27** ([`src/data/levels/level-27-budan-erqie.ts`](src/data/levels/level-27-budan-erqie.ts)):
```typescript
// s1 - "Not only is it cheap, but also delicious"
parts: [
  { chinese: "这个", pinyin: "zhè gè", english: "it/this", partOfSpeech: "subject", distractors: [], static: true },
  { chinese: "不但", ... },
  { chinese: "便宜", ... },
  { chinese: "而且", ... },
  { chinese: "好吃", ... },
]
```

**Level 25** ([`src/data/levels/level-25-zhiliao-jiu.ts`](src/data/levels/level-25-zhiliao-jiu.ts)) — Fix s1 and s3:
```typescript
// s1 - "As long as you work hard, you will succeed"
parts: [
  { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: [], static: true },
  { chinese: "只要", ... },
  { chinese: "努力", ... },
  { chinese: "就", ... },
  { chinese: "能成功", ... },
]
```

**Level 26** ([`src/data/levels/level-26-lian.ts`](src/data/levels/level-26-lian.ts)) — Fix s1, s3, s4:
```typescript
// s1 - "He can't even eat"
parts: [
  { chinese: "他", pinyin: "tā", english: "he", partOfSpeech: "subject", distractors: [], static: true },
  { chinese: "连", ... },
  { chinese: "饭", ... },
  { chinese: "都", ... },
  { chinese: "不能吃", ... },
]
```

#### Step 5: Run Validation

Run [`src/scripts/validate-levels.ts`](src/scripts/validate-levels.ts) to ensure no regressions.

### Rendering Flow Diagram

```
CurrentSentence.parts (with static: true/false)
         │
         ├── static: true ──→ Render as Static Text Badge
         │                       (gray pill, shows chinese + pinyin on hover)
         │
         └── static: false ──→ Create SlotState → Render SlotColumn
                               (interactive dropdown with options)
```

### Visual Mockup

```
┌──────────────────────────────────────────────┐
│  Translate this sentence                     │
│  "This food is both cheap and delicious."    │
│                                              │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐    │
│  │ 这个  │  │  又  │  │ 便宜 │  │  又  │    │
│  │ 食物  │  │  ▼   │  │  ▼   │  │  ▼   │    │
│  │context│  │  又  │  │ 便宜 │  │  又  │    │
│  └──────┘  │  也  │  │ 贵   │  │  也  │    │
│            │  都  │  │ 大   │  │  都  │    │
│            │  还  │  │ 好吃 │  │  还  │    │
│            └──────┘  └──────┘  └──────┘    │
│                                              │
│  Pattern: 又 + Adjective₁ + 又 + Adjective₂  │
│                    [Check Answer]            │
└──────────────────────────────────────────────┘
```

The context badge (`这个食物`) is:
- Non-interactive (no dropdown)
- Styled with a muted background color
- Shows pinyin on hover/tap
- Cannot be selected or changed by the user
