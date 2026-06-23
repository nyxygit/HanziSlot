/**
 * Fisher-Yates shuffle algorithm
 * Shuffles an array in-place and returns it.
 */
export function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Creates an array of options for a slot: correct answer + distractors, shuffled.
 */
export function createSlotOptions(
  correctAnswer: string,
  distractors: string[]
): string[] {
  return shuffle([correctAnswer, ...distractors]);
}

/**
 * Returns a stable option list (seeded by sentence ID and part index) for deterministic testing.
 * Not used in production - random shuffle is preferred for gameplay variety.
 */
export function createSlotOptionsDeterministic(
  correctAnswer: string,
  distractors: string[],
  seed: string
): string[] {
  const combined = [correctAnswer, ...distractors];
  // Simple hash-based shuffle using seed
  const hash = seed.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return [...combined].sort((a, b) => {
    const ha = (a.charCodeAt(0) + hash) % combined.length;
    const hb = (b.charCodeAt(0) + hash) % combined.length;
    return ha - hb;
  });
}
