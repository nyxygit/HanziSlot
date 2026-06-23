export type PartOfSpeech =
  | "subject"
  | "verb"
  | "object"
  | "adjective"
  | "noun"
  | "adverb"
  | "time"
  | "place"
  | "negation"
  | "modal"
  | "particle";

export type LevelCategory = "structure" | "topic";

export interface SentencePattern {
  id: string;
  name: string;
  description: string;
  structure: PartOfSpeech[];
}

export interface SentencePart {
  chinese: string;
  pinyin: string;
  english: string;
  partOfSpeech: PartOfSpeech;
  distractors: string[];
}

export interface SentenceItem {
  id: string;
  english: string;
  parts: SentencePart[];
}

export interface Level {
  id: string;
  name: string;
  description: string;
  category: LevelCategory;
  topic?: string; // Topic name for topic levels (e.g. "School", "Shopping")
  pattern: SentencePattern;
  sentences: SentenceItem[];
  unlockCondition?: string;
  starThresholds: [number, number, number]; // [3star, 2star, 1star] - minimum score
}

export type GameAction =
  | { type: "SELECT_OPTION"; slotIndex: number; option: string }
  | { type: "CONFIRM_ANSWER"; skipIndices?: number[] }
  | { type: "NEXT_SENTENCE" }
  | { type: "RETRY_SENTENCE" }
  | { type: "LOAD_LEVEL"; level: Level }
  | { type: "INIT_SENTENCE"; sentence: SentenceItem }
  | { type: "RESET" };

export interface SlotState {
  options: string[];
  selectedIndex: number;
  isCorrect: boolean | null;
  hasBeenChecked: boolean;
  pinyin: string;
  english: string;
  optionPinyins: string[];   // pinyin for each option, parallel to options[]
  optionEnglishs: string[];  // english for each option, parallel to options[]
}

export interface SentenceProgress {
  sentenceIndex: number;
  attempts: number;
  completed: boolean;
  stars: number; // 0-3
}

export interface GameState {
  level: Level | null;
  currentSentenceIndex: number;
  currentSentence: SentenceItem | null;
  slots: SlotState[];
  sentenceProgress: SentenceProgress[];
  phase: "playing" | "checking" | "result" | "levelComplete";
  overallScore: number;
  totalSentences: number;
  completedSentences: number;
}

export interface LevelProgress {
  levelId: string;
  bestStars: number;
  bestScore: number;
  completed: boolean;
  unlocked: boolean;
}
