import { SentenceItem, SlotState } from "@/types";

export interface ValidationResult {
  allCorrect: boolean;
  slotResults: boolean[];
  correctSentence: string;
}

/**
 * Check if the user's selected options match the correct answer for each slot.
 * Skips indices in `skipIndices` (e.g., fixed/invariant slots that don't need interaction).
 * Returns individual slot correctness and overall result.
 */
export function validateAnswer(
  slots: SlotState[],
  sentence: SentenceItem,
  skipIndices: number[] = []
): ValidationResult {
  const slotResults = slots.map((slot, index) => {
    // Fixed slots are always considered correct
    if (skipIndices.includes(index)) return true;
    const selectedOption = slot.options[slot.selectedIndex];
    const correctAnswer = sentence.parts[index]?.chinese;
    return selectedOption === correctAnswer;
  });

  const allCorrect = slotResults.every(Boolean);
  const correctSentence = sentence.parts.map((p) => p.chinese).join("");

  return { allCorrect, slotResults, correctSentence };
}

/**
 * Calculate stars earned for a sentence based on attempt count.
 * First try = 3 stars, second = 2, third+ = 1.
 */
export function calculateStars(attempts: number): number {
  if (attempts <= 1) return 3;
  if (attempts === 2) return 2;
  return 1;
}

/**
 * Calculate total level score based on stars earned per sentence.
 * Max possible = sentences.length * 3.
 */
export function calculateLevelScore(stars: number[]): number {
  return stars.reduce((total, star) => total + star, 0);
}

/**
 * Determine star rating for a level based on total score.
 */
export function getLevelStarRating(
  score: number,
  thresholds: [number, number, number]
): number {
  const [threeStar, twoStar, oneStar] = thresholds;
  if (score >= threeStar) return 3;
  if (score >= twoStar) return 2;
  if (score >= oneStar) return 1;
  return 0;
}
