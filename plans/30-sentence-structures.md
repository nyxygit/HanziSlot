# Plan: 30 Sentence Structure Levels

## Overview

Replace the existing 6 structure levels with 30 comprehensive Chinese sentence structure levels. This requires expanding the type system, word bank, and creating 30 level data files.

---

## Phase 1: Expand Type System

### 1.1 Add new PartOfSpeech categories

**File:** [`src/types/index.ts`](src/types/index.ts)

Add to the `PartOfSpeech` union:
| New POS | Purpose | Example words |
|---------|---------|--------------|
| `"preposition"` | Location/grammatical markers | 在, 把, 被, 比, 给, 对, 连, 除了 |
| `"conjunction"` | Clause connectors | 因为, 所以, 虽然, 但是, 如果, 只要, 不但, 而且 |
| `"complement"` | Resultative/directional/degree complements | 完, 到, 好, 见, 懂, 清楚 |
| `"clause"` | Complex clause-level chunks for compound sentences | Full clauses in 因为...所以 patterns |

This brings the full set to:
```
"subject" | "verb" | "object" | "adjective" | "noun" | "adverb" | "time" | "place"
| "negation" | "modal" | "particle" | "preposition" | "conjunction" | "complement" | "clause"
```

---

## Phase 2: Expand Word Bank

### 2.1 Add entries for new POS categories

**File:** [`src/data/wordBank.ts`](src/data/wordBank.ts)

Add word bank entries for:
- **preposition:** 在, 把, 被, 比, 给, 对, 连, 除了
- **conjunction:** 因为, 所以, 虽然, 但是, 如果, 只要, 不但, 而且
- **complement:** 完, 到, 好, 见, 懂, 清楚, 走, 起来, 下去, 出来
- Also expand existing categories with new vocabulary needed for the 30 levels (more verbs, objects, adjectives, time words, adverbs)

Add to **adverb** entries: 就, 越, 越来越, 又, 一, 也, 都, 还, 以外, 才

Add to **particle** entries: 了, 过, 的, 得, 来, 去

---

## Phase 3: Create 30 Level Data Files

### File Naming Convention

All files go in [`src/data/levels/`](src/data/levels/):
```
level-01-svo.ts          (S + V + O)
level-02-hen.ts          (S + 很 + Adj)
level-03-shi.ts          (S + 是 + N)
level-04-time.ts         (Time + S + V + O)
level-05-zai-place.ts    (S + 在 + Place + V + O)
level-06-modal.ts        (S + Modal + V + O)
level-07-le.ts           (S + V + 了 + O)
level-08-guo.ts          (S + V + 过 + O)
level-09-negation.ts     (S + 不/没 + V + O)
level-10-zai-prog.ts     (S + 在 + V + O)
level-11-topic.ts        (Topic + Comment)
level-12-ba.ts           (S + 把 + O + V + Complement)
level-13-bei.ts          (S + 被 + V + Complement)
level-14-shi-de.ts       (S + 是 + Detail + V + 的)
level-15-bi.ts           (A + 比 + B + Adj)
level-16-potential.ts    (S + V + 得/不 + Complement)
level-17-direction.ts    (S + V + 来/去)
level-18-yue.ts          (S + 越来越 + Adj / 越+V+越+Adj)
level-19-you-you.ts      (又 + Adj₁ + 又 + Adj₂)
level-20-yinwei-suoyi.ts (因为 + Clause + 所以 + Clause)
level-21-suiran-danshi.ts(虽然 + Clause + 但是 + Clause)
level-22 ruguo-jiu.ts    (如果 + Clause + 就 + Clause)
level-23-yi-jiu.ts       (一 + V₁ + 就 + V₂)
level-24-chule.ts        (除了 + N + 以外 + S + 还/也 + V + O)
level-25-zhiliao-jiu.ts  (只要 + Clause + 就 + Clause)
level-26-lian.ts         (连 + N + 都/也 + V)
level-27-budan-erqie.ts  (不但 + Adj₁ + 而且 + Adj₂)
level-28-degree.ts       (S + V + 得 + Complement degree)
level-29-gei.ts          (S + 给 + Person + V + O)
level-30-dui.ts          (S + 对 + N + 很 + Adj)
```

### Level Numbering & Unlock Chain

Each level unlocks the next. Star thresholds follow existing pattern `[12, 8, 4]` for 4-sentence levels, scaled proportionally for levels with more/fewer sentences.

### Structure & Patterns Per Level

Below is the detailed specification for each level:

| # | Pattern Name | Structure Array | Sentences | Notes |
|---|-------------|----------------|-----------|-------|
| 1 | S + V + O | `[subject, verb, object]` | 5 | Refactor existing level-1 |
| 2 | S + 很 + Adj | `[subject, particle, adjective]` | 4 | Refactor existing level-3, 很 as particle |
| 3 | S + 是 + N | `[subject, particle, noun]` | 4 | Refactor existing level-2, 是 as particle |
| 4 | Time + S + V + O | `[time, subject, verb, object]` | 5 | Refactor existing level-6 |
| 5 | S + 在 + Place + V + O | `[subject, preposition, place, verb, object]` | 4 | 在 as preposition; O can be omitted in some sentences |
| 6 | S + Modal + V + O | `[subject, modal, verb, object]` | 5 | Expand existing level-5; modals: 想/要/会/能/可以 |
| 7 | S + V + 了 + O | `[subject, verb, particle, object]` | 4 | 了 as particle (perfective aspect) |
| 8 | S + V + 过 + O | `[subject, verb, particle, object]` | 4 | 过 as particle (experiential aspect) |
| 9 | S + 不/没 + V + O | `[subject, negation, verb, object]` | 5 | Expand existing level-4 to include 没 |
| 10 | S + 在 + V + O | `[subject, adverb, verb, object]` | 4 | 在 as adverb (progressive aspect) |
| 11 | Topic + Comment | `[object, subject, verb, particle]` or `[noun, clause]` | 4 | Clause-level chunk for comment; e.g., 这本书我看过了 |
| 12 | 把 Construction | `[subject, preposition, object, verb, complement]` | 4 | 把 as preposition |
| 13 | 被 Passive | `[subject, preposition, noun, verb, complement]` | 4 | 被 as preposition; agent as noun |
| 14 | 是...的 Emphasis | `[subject, particle, time, verb, particle]` | 4 | 是 as particle, 的 as particle |
| 15 | 比 Comparison | `[noun, preposition, noun, adjective]` | 4 | 比 as preposition |
| 16 | Potential Complement | `[subject, verb, particle, complement]` | 4 | 得/不 as particle |
| 17 | Directional Complement | `[subject, verb, particle]` | 4 | 来/去 as particle |
| 18 | 越 Pattern | `[subject, adverb, adjective]` or `[adverb, verb, adverb, adjective]` | 4 | 越来越 as adverb chunk OR 越+V+越+Adj |
| 19 | 又...又 | `[adverb, adjective, adverb, adjective]` | 4 | 又 as adverb |
| 20 | 因为...所以 | `[conjunction, clause, conjunction, clause]` | 4 | Clause-level chunks, keep simple |
| 21 | 虽然...但是 | `[conjunction, clause, conjunction, clause]` | 4 | Clause-level chunks |
| 22 | 如果...就 | `[conjunction, clause, adverb, clause]` | 4 | 就 as adverb |
| 23 | 一...就 | `[adverb, verb, adverb, verb]` | 4 | 一 and 就 as adverbs |
| 24 | 除了...以外 | `[preposition, noun, particle, subject, adverb, verb, object]` | 4 | Longer structure, 除了 as preposition |
| 25 | 只要...就 | `[conjunction, clause, adverb, clause]` | 4 | 只要 as conjunction |
| 26 | 连...都/也 | `[preposition, noun, adverb, verb]` | 4 | 连 as preposition |
| 27 | 不但...而且 | `[conjunction, adjective, conjunction, adjective]` | 4 | 不但/而且 as conjunctions |
| 28 | Degree Complement | `[subject, verb, particle, complement]` | 4 | 得 + degree phrase as complement |
| 29 | 给 Construction | `[subject, preposition, noun, verb, object]` | 4 | 给 as preposition |
| 30 | 对 Construction | `[subject, preposition, noun, particle, adjective]` | 4 | 对 as preposition |

### Sentence Count Strategy

- Levels 1, 4, 6, 9: 5 sentences each (matching current patterns, more practice for foundational patterns)
- All other levels: 4 sentences each (26 levels × 4 = 104 + 4 × 5 = 20 → 124 total sentences)

### Star Thresholds

- **Levels with 5 sentences:** `[12, 8, 4]` (max 15)
- **Levels with 4 sentences:** `[9, 6, 3]` (max 12)

---

## Phase 4: Register All Levels

### 4.1 Update [`src/data/levels.ts`](src/data/levels.ts)

- Remove imports for old level files (level-1-svo through level-6-time)
- Add imports for all 30 new level files
- Populate `allLevels` array with all 30 levels in order
- Ensure `unlockCondition` chains sequentially: level-1 → level-2 → ... → level-30

### 4.2 Delete old level files

Remove the 6 old files:
- `src/data/levels/level-1-svo.ts`
- `src/data/levels/level-2-shi.ts`
- `src/data/levels/level-3-hen.ts`
- `src/data/levels/level-4-bu.ts`
- `src/data/levels/level-5-yao.ts`
- `src/data/levels/level-6-time.ts`

---

## Phase 5: Update Topic Levels (if needed)

Topic levels use `"mixed"` pattern with structure `[subject, verb, object]`. If topic levels reference specific level data, update accordingly. Currently they have hardcoded sentences, so no change is strictly needed, but verify they still work.

---

## Phase 6: Validation & Test

### 6.1 Run validation script

```bash
npm run validate
```

This checks every sentence's English translation matches the Chinese parts' English meanings.

### 6.2 Manual review

- Verify all 30 levels display correctly on the home page
- Play through several levels to ensure slot generation works
- Check unlock conditions flow correctly
- Verify star thresholds are reasonable

---

## Architecture Diagram

```mermaid
flowchart TD
    subgraph Types["Type System Expansion"]
        POS[PartOfSpeech Union] --> Existing[subject, verb, object, adjective, noun, adverb, time, place, negation, modal, particle]
        POS --> New[preposition, conjunction, complement, clause]
    end

    subgraph Data["Data Layer"]
        WB[wordBank.ts] -->|expands| NewPOS_Entries[New POS word entries]
        LevelsTS[levels.ts] -->|imports| LevelFiles[30 Level Files]
        LevelFiles -->|each exports| LevelObj[Level Object]
        LevelObj -->|contains| Pattern[SentencePattern]
        LevelObj -->|contains| Sentences[SentenceItem[]]
    end

    subgraph GameLogic["Game Logic"]
        GameReducer[gameReducer.ts] -->|uses| InitializeSlots[initializeSlots]
        Validate[validation.ts] -->|checks| Slots[SlotState]
    end

    Types --> LevelFiles
    Types --> GameReducer
    WB --> LevelFiles
    LevelFiles --> LevelsTS
    LevelsTS --> GamePage[GamePageClient.tsx]
    LevelsTS --> HomePage[page.tsx]
```

---

## File Change Summary

| File | Change Type | Description |
|------|------------|-------------|
| `src/types/index.ts` | **MODIFY** | Add 4 new PartOfSpeech values |
| `src/data/wordBank.ts` | **MODIFY** | Add entries for preposition, conjunction, complement; expand adverb, particle |
| `src/data/levels/level-XX-*.ts` | **CREATE** | 30 new level data files |
| `src/data/levels.ts` | **MODIFY** | Replace old imports with 30 new ones |
| Delete old level files | **DELETE** | Remove 6 old level files |

---

## Key Design Decisions

1. **Clause-level chunks for complex sentences:** Patterns with conjunctions (因为...所以, 虽然...但是, etc.) treat each clause as a single `"clause"` part to keep the slot count manageable. The clause string includes spaces or is a short, self-contained phrase.

2. **Reusing existing POS categories where possible:** 了/过/的/得/来/去 use `"particle"`; 就/又/越/一/也/都/还 use `"adverb"`; rather than creating overly specific types.

3. **Progressive unlock chain:** level-1 → level-2 → ... → level-30, so students progress from simplest (SVO) to most complex (连...都, 不但...而且, etc.).

4. **Word bank expansion is minimal:** Only add words needed for the new patterns. Existing vocabulary is reused extensively to keep the scope manageable.
