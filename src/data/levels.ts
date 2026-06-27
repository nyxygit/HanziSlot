import { Level, LevelCategory } from "@/types";

// Import all level data files
import { level1SVO } from "./levels/level-01-svo";
import { level2Hen } from "./levels/level-02-hen";
import { level3Shi } from "./levels/level-03-shi";
import { level4Time } from "./levels/level-04-time";
import { level5ZaiPlace } from "./levels/level-05-zai-place";
import { level6Modal } from "./levels/level-06-modal";
import { level7Le } from "./levels/level-07-le";
import { level8Guo } from "./levels/level-08-guo";
import { level9Negation } from "./levels/level-09-negation";
import { level10ZaiProg } from "./levels/level-10-zai-prog";
import { level11Topic } from "./levels/level-11-topic";
import { level12Ba } from "./levels/level-12-ba";
import { level13Bei } from "./levels/level-13-bei";
import { level14ShiDe } from "./levels/level-14-shi-de";
import { level15Bi } from "./levels/level-15-bi";
import { level16Potential } from "./levels/level-16-potential";
import { level17Direction } from "./levels/level-17-direction";
import { level18Yue } from "./levels/level-18-yue";
import { level19YouYou } from "./levels/level-19-you-you";
import { level20YinweiSuoyi } from "./levels/level-20-yinwei-suoyi";
import { level21SuiranDanshi } from "./levels/level-21-suiran-danshi";
import { level22RuguoJiu } from "./levels/level-22-ruguo-jiu";
import { level23YiJiu } from "./levels/level-23-yi-jiu";
import { level24Chule } from "./levels/level-24-chule";
import { level25ZhiliaoJiu } from "./levels/level-25-zhiliao-jiu";
import { level26Lian } from "./levels/level-26-lian";
import { level27BudanErqie } from "./levels/level-27-budan-erqie";
import { level28Degree } from "./levels/level-28-degree";
import { level29Gei } from "./levels/level-29-gei";
import { level30Dui } from "./levels/level-30-dui";

// Import topic level data files
import { topicSchool } from "./topics/topic-school";
import { topicShopping } from "./topics/topic-shopping";
import { topicClothing } from "./topics/topic-clothing";

// All levels in order
export const allLevels: Level[] = [
  level1SVO,
  level2Hen,
  level3Shi,
  level4Time,
  level5ZaiPlace,
  level6Modal,
  level7Le,
  level8Guo,
  level9Negation,
  level10ZaiProg,
  level11Topic,
  level12Ba,
  level13Bei,
  level14ShiDe,
  level15Bi,
  level16Potential,
  level17Direction,
  level18Yue,
  level19YouYou,
  level20YinweiSuoyi,
  level21SuiranDanshi,
  level22RuguoJiu,
  level23YiJiu,
  level24Chule,
  level25ZhiliaoJiu,
  level26Lian,
  level27BudanErqie,
  level28Degree,
  level29Gei,
  level30Dui,
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
