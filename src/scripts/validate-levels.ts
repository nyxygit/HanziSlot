/**
 * Level Validation Script
 *
 * Run: npm run validate
 * Run single file: npx tsx src/scripts/validate-levels.ts src/data/topics/topic-food.ts
 *
 * Checks that every significant word in each sentence's English translation
 * corresponds to at least one Chinese part's English meaning.
 * This catches errors where the English describes content not present in the Chinese (e.g.
 * "I don't eat meat at school" but the Chinese has no location part).
 */

import { allLevels } from "../data/levels";
import { Level } from "../types";

// Grammar / function words that may appear in English without a matching Chinese part.
const GRAMMAR_WORDS = new Set([
  "a", "an", "the",
  "is", "am", "are", "was", "were", "be", "been", "being",
  "do", "does", "did", "have", "has", "had",
  "can", "could", "will", "would", "shall", "should", "may", "might",
  "in", "on", "at", "to", "for", "with", "by", "of", "from",
  "about", "into", "through", "during", "before", "after",
  "i", "you", "he", "she", "it", "we", "they",
  "me", "him", "her", "us", "them",
  "my", "your", "his", "its", "our", "their",
  "this", "that", "these", "those",
  "and", "or", "but", "so", "because",
  "not", "no", "very", "also", "too", "just",
  "here", "there",
  "some", "any", "all", "every", "each", "both",
  "please", "yes",
]);

// Irregular verb forms: inflected → base
const IRREGULAR_VERBS: Record<string, string> = {
  "ate": "eat",
  "eaten": "eat",
  "bought": "buy",
  "boughten": "buy",
  "drank": "drink",
  "drunk": "drink",
  "wrote": "write",
  "written": "write",
  "spoke": "speak",
  "spoken": "speak",
  "taught": "teach",
  "taughten": "teach",
  "sold": "sell",
  "told": "tell",
  "went": "go",
  "gone": "go",
  "read": "read", // past tense same as base
  "made": "make",
  "said": "say",
  "saw": "see",
  "seen": "see",
  "took": "take",
  "taken": "take",
  "wore": "wear",
  "worn": "wear",
  "lived": "live",
  // Also handle third-person forms of irregulars
  "has": "have",
  "does": "do",
  "says": "say",
  "buys": "buy",
  "sells": "sell",
  "teaches": "teach",
  "writes": "write",
  "reads": "read",
  "drinks": "drink",
  "eats": "eat",
  "goes": "go",
  "makes": "make",
  "takes": "take",
  "wears": "wear",
  "lives": "live",
  "studies": "study",
  "studied": "study",
  "buied": "buy", // typo safeguard
};

// Contracted forms expanded
const CONTRACTIONS: Record<string, string> = {
  "don't": "do not",
  "doesn't": "does not",
  "didn't": "did not",
  "won't": "will not",
  "wouldn't": "would not",
  "can't": "cannot",
  "couldn't": "could not",
  "isn't": "is not",
  "aren't": "are not",
  "wasn't": "was not",
  "weren't": "were not",
  "haven't": "have not",
  "hasn't": "has not",
  "hadn't": "had not",
  "shouldn't": "should not",
  "mightn't": "might not",
  "i'm": "i am",
  "you're": "you are",
  "he's": "he is",
  "she's": "she is",
  "it's": "it is",
  "we're": "we are",
  "they're": "they are",
  "i'll": "i will",
  "you'll": "you will",
  "he'll": "he will",
  "she'll": "she will",
  "we'll": "we will",
  "they'll": "they will",
  "i've": "i have",
  "you've": "you have",
  "we've": "we have",
  "they've": "they have",
};

interface ValidationError {
  levelId: string;
  sentenceId: string;
  english: string;
  message: string;
}

/**
 * Tokenize an English string into lowercase words, removing punctuation
 * and expanding contractions.
 */
function tokenize(text: string): string[] {
  let cleaned = text.toLowerCase();
  // Expand contractions FIRST (before removing apostrophes)
  for (const [contracted, expanded] of Object.entries(CONTRACTIONS)) {
    cleaned = cleaned.replace(contracted, expanded);
  }
  // Then remove punctuation
  cleaned = cleaned.replace(/[.,!?;:'"()/\\[\]{}]/g, " ");
  return cleaned.split(/\s+/).filter(Boolean);
}

/**
 * Try to reduce an inflected English word to its base form.
 * Checks irregular verbs first, then tries suffix stripping.
 */
function stem(word: string): string {
  // Check irregular forms
  if (IRREGULAR_VERBS[word]) return IRREGULAR_VERBS[word];

  // Regular suffix stripping (order matters!)
  if (word.endsWith("ies") && word.length > 4) return word.slice(0, -3) + "y"; // "studies" → "study"
  if (word.endsWith("es") && word.length > 4) return word.slice(0, -2);       // "goes" → "go"
  if (word.endsWith("s") && word.length > 3 && !word.endsWith("ss")) return word.slice(0, -1); // "reads" → "read", but NOT "pass" → "pas"
  if (word.endsWith("ing") && word.length > 5) {
    const base = word.slice(0, -3);
    if (base.length > 2) return base; // "reading" → "read"
  }
  if (word.endsWith("ed") && word.length > 4) {
    const base = word.slice(0, -2);
    if (base.length > 2) return base; // "watched" → "watch"
  }
  if (word.endsWith("d") && word.length > 3) {
    const base = word.slice(0, -1);
    if (base.length > 2) return base; // "lived" → "live" (if "liv" doesn't help, but it's close)
  }

  return word;
}

/**
 * Collect all base-form English words from a sentence's parts.
 */
function collectPartWords(sentence: { parts: { english: string }[] }): Set<string> {
  const words = new Set<string>();
  for (const part of sentence.parts) {
    const alternatives = part.english.split("/");
    for (const alt of alternatives) {
      for (const w of tokenize(alt.trim())) {
        words.add(stem(w));
      }
    }
  }
  return words;
}

/**
 * Validate a single level. Returns array of error messages.
 */
function validateLevel(level: Level): ValidationError[] {
  const errors: ValidationError[] = [];

  for (const sentence of level.sentences) {
    const sentenceWords = new Set(tokenize(sentence.english));
    const partWords = collectPartWords(sentence);

    // Forward check: every significant word in sentence English must appear in some part's English
    for (const word of sentenceWords) {
      if (GRAMMAR_WORDS.has(word)) continue;
      const stemmed = stem(word);
      if (partWords.has(stemmed)) continue;
      if (partWords.has(word)) continue;

      errors.push({
        levelId: level.id,
        sentenceId: sentence.id,
        english: sentence.english,
        message: `Word "${word}" (stem: "${stemmed}") appears in sentence English but not in any part's English meaning. ` +
          `Part meanings: [${[...partWords].sort().join(", ")}]`,
      });
    }
  }

  return errors;
}

// ---- Main ----

const allErrors: ValidationError[] = [];

for (const level of allLevels) {
  const errors = validateLevel(level);
  allErrors.push(...errors);
}

if (allErrors.length === 0) {
  const totalSentences = allLevels.reduce((s, l) => s + l.sentences.length, 0);
  console.log(`✅ All ${allLevels.length} levels passed validation (${totalSentences} sentences checked).`);
} else {
  console.error(`\n❌ Found ${allErrors.length} validation error(s):\n`);

  for (const err of allErrors) {
    console.error(`  [${err.levelId}] "${err.english}"`);
    console.error(`       ${err.message}`);
    console.error();
  }

  process.exit(1);
}
