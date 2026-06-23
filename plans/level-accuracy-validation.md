# Level Accuracy & Validation System

## Problem

Topic levels were hand-written, introducing English/Chinese mismatches. Common failure modes:
1. English describes location/context not reflected in Chinese parts (`"at school"` but no 在学校)
2. English adds demonstratives/possessives not in Chinese (`"this shirt"` but no 这个)
3. English uses past/continuous tense but Chinese is present (`"bought"` vs 买)

## Solution: Three-Pronged Approach

### 1. Fix Existing Topic Levels

Correct all three topic levels to have 100% accurate English/Chinese pairs:

**topic-school.ts fixes:**
- s6: Change English to `"I don't eat meat."` (matches 我不吃肉)

**topic-shopping.ts fixes:**
- s5: Change English to `"The shirt is very beautiful."` (matches 衬衫很漂亮)
- s6: Change English to `"Today I buy fruit."` (matches 今天我买水果)

**topic-clothing.ts fixes:**
- s2: Change English to `"The skirt is very beautiful."` (matches 裙子很漂亮)
- s3: Add 新 to the Chinese or change English to `"She wants to buy shoes."`
- s4: Change English to `"The pants are very big."` (matches 裤子很大)
- s5: Change English to `"The shirt is not new."` (matches 衬衫不新)
- s6: Change English to `"Yesterday I buy clothes."` (matches 昨天我买衣服). Or better, change Chinese: 昨天我买了衣服 (add 了 for past tense). But 了 isn't in our grammar patterns yet. Simpler: `"Yesterday I bought clothes."` is wrong since Chinese doesn't have past tense marker. Change to `"Yesterday I buy clothes."` 

Wait, actually "Yesterday I buy clothes" is grammatically incorrect English. The issue is deeper - Chinese doesn't inflect for tense, but English does. We have two options:
a) Keep the English grammatically correct and make the Chinese match (harder - requires more vocab/grammar)
b) Accept slight tense differences as pedagogical (Chinese sentences have no tense, so present-tense English is fine)

I think option (b) is acceptable for a learning app, but we should be transparent about it. However, the current issue is worse than tense - it's about missing content (location words, demonstratives). Let me fix the levels properly.

### 2. Create a Validation Script

Add a script that validates all level data at build/test time:

```
src/scripts/validate-levels.ts
```

The script checks each sentence in every level:
1. **Part coverage**: For each part's `english` value, verify that at least one word appears in the sentence-level `english` field. This catches missing content.
2. **Part count match**: Verify that `SentenceItem.english` doesn't describe more things than there are parts (e.g., "at school" with no place part).
3. **Word bank linkage**: Verify that each part's `chinese` exists in the `wordBank` under the assigned `partOfSpeech` (soft warning, since topic levels may use words in different roles).

**Validation rules:**

```
For each sentence:
  1. Extract all individual English meanings from parts
  2. For each part's english, check at least one word appears in sentence english
  3. If sentence english contains a word not covered by any part's english, flag it
  4. Report WARNING for tense differences (e.g., English past tense, Chinese present)
```

This script runs as part of `npm run build` or a new `npm run validate` script.

### 3. Level Creation Checklist

Document a process for creating accurate levels:

**Chinese-first approach:**
1. Write the Chinese sentence parts first
2. Concatenate individual part English meanings to get a rough English sentence
3. Polish the English sentence into natural English WITHOUT adding new content
4. Review: every concept in the English translation must correspond to a Chinese part

**Review checklist:**
- [ ] Every noun/verb/adjective in the English has a matching Chinese part
- [ ] Location phrases ("at school", "in the store") have matching Chinese place words
- [ ] Demonstratives ("this", "that") have matching Chinese (这个, 那个)
- [ ] Possessives ("my", "his") have matching Chinese (我的, 他的) or are justified
- [ ] Tense is consistent (both present, or Chinese pattern supports the tense)
- [ ] Plurality doesn't differ between English and Chinese

## Implementation Plan

### Phase 1: Fix existing levels
Correct English translations in all three topic files to match the Chinese.

### Phase 2: Validation script
Create `src/scripts/validate-levels.ts` that:
- Imports all levels from `src/data/levels.ts`
- For each sentence, extracts parts' english values and checks sentence english coverage
- Reports mismatches with file/line info
- Exits with non-zero code on hard errors

### Phase 3: Build integration
Add `"validate": "npx tsx src/scripts/validate-levels.ts"` to `package.json` scripts.
Optionally integrate into the build pipeline.

## Mermaid: Validation Flow

```mermaid
flowchart TD
    A[All Levels] --> B[For each sentence]
    B --> C[Extract part english values]
    C --> D[Tokenize sentence english]
    D --> E{Each part english<br/>found in sentence?}
    E -->|No| F[FLAG: missing content]
    E -->|Yes| G{Extra content in<br/>sentence english?}
    G -->|Yes| H{Is it an article/<br/>auxiliary verb?}
    H -->|No| I[FLAG: unmatched content]
    H -->|Yes| J[OK - skip article]
    G -->|No| K[PASS]
    F --> L[Report error]
    I --> L
    K --> M[Next sentence]
    L --> M
