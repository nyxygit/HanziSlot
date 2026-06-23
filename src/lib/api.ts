import { Level } from "@/types";
import { loadLevel, loadAllLevels } from "@/data/levels";

// API abstraction layer
// Currently uses static data. When a backend is ready:
// 1. Replace import with fetch() calls
// 2. Keep the same function signatures
// 3. No other code needs to change

export interface UserProgress {
  userId?: string;
  currentLevel: string;
  completedLevels: Record<string, LevelCompletion>;
}

export interface LevelCompletion {
  stars: number;
  score: number;
  completed: boolean;
}

/**
 * Get all available levels
 */
export async function fetchLevels(): Promise<Level[]> {
  // Future: return fetch('/api/levels').then(r => r.json())
  return loadAllLevels();
}

/**
 * Get a single level by ID
 */
export async function fetchLevel(id: string): Promise<Level | undefined> {
  // Future: return fetch(`/api/levels/${id}`).then(r => r.json())
  return loadLevel(id);
}

/**
 * Get user progress (stored in localStorage for now)
 */
export async function fetchUserProgress(): Promise<UserProgress> {
  // Future: return fetch('/api/users/me/progress').then(r => r.json())
  if (typeof window === "undefined") {
    return { currentLevel: "level-1", completedLevels: {} };
  }
  const stored = localStorage.getItem("hanzi-slot-progress");
  if (stored) {
    return JSON.parse(stored);
  }
  return { currentLevel: "level-1", completedLevels: {} };
}

/**
 * Save user progress
 */
export async function saveUserProgress(progress: UserProgress): Promise<void> {
  // Future: return fetch('/api/users/me/progress', { method: 'PUT', body: JSON.stringify(progress) })
  if (typeof window !== "undefined") {
    localStorage.setItem("hanzi-slot-progress", JSON.stringify(progress));
  }
}

/**
 * Submit a score for a level
 */
export async function submitScore(
  levelId: string,
  score: number,
  stars: number
): Promise<void> {
  // Future: return fetch('/api/scores', { method: 'POST', body: JSON.stringify({ levelId, score, stars }) })
  const progress = await fetchUserProgress();
  const existing = progress.completedLevels[levelId];
  if (!existing || score > existing.score) {
    progress.completedLevels[levelId] = { stars, score, completed: true };
    await saveUserProgress(progress);
  }
}
