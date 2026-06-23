import { Level, LevelCategory } from "@/types";

// Import all level data files
import { level1SVO } from "./levels/level-1-svo";
import { level2Shi } from "./levels/level-2-shi";
import { level3Hen } from "./levels/level-3-hen";
import { level4Bu } from "./levels/level-4-bu";
import { level5Yao } from "./levels/level-5-yao";
import { level6Time } from "./levels/level-6-time";

// Import topic level data files
import { topicSchool } from "./topics/topic-school";
import { topicShopping } from "./topics/topic-shopping";
import { topicClothing } from "./topics/topic-clothing";

// All levels in order
export const allLevels: Level[] = [
  level1SVO,
  level2Shi,
  level3Hen,
  level4Bu,
  level5Yao,
  level6Time,
  topicSchool,
  topicShopping,
  topicClothing,
];

// Index levels by ID for quick lookup
export const levelMap: Record<string, Level> = {};
for (const level of allLevels) {
  levelMap[level.id] = level;
}

export function getLevelById(id: string): Level | undefined {
  return levelMap[id];
}

export function getLevels(): Level[] {
  return allLevels;
}

export function getLevelsByCategory(category: LevelCategory): Level[] {
  return allLevels.filter((l) => l.category === category);
}

// For future backend: this function simulates async loading
export async function loadLevel(id: string): Promise<Level | undefined> {
  // Simulate network delay
  // In the future, this will be: return fetch(`/api/levels/${id}`).then(r => r.json())
  return Promise.resolve(getLevelById(id));
}

export async function loadAllLevels(): Promise<Level[]> {
  return Promise.resolve(getLevels());
}
