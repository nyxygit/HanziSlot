"use client";

import { GameState, GameAction, SlotState, SentenceProgress } from "@/types";
import { createSlotOptions } from "./shuffle";
import { validateAnswer, calculateStars } from "./validation";
import { lookupChinese } from "@/data/wordBank";

/**
 * Initialize slot states for a given sentence.
 * Each slot gets a shuffled set of options (correct + distractors).
 * Pinyin and English are populated for EVERY option so the slot can
 * display the meaning of whichever word is currently selected.
 */
function initializeSlots(sentence: NonNullable<GameState["currentSentence"]>): SlotState[] {
  return sentence.parts.map((part) => {
    const options = createSlotOptions(part.chinese, part.distractors);
    const optionPinyins: string[] = [];
    const optionEnglishs: string[] = [];
    for (const ch of options) {
      const entry = lookupChinese(ch);
      optionPinyins.push(entry?.pinyin ?? "");
      optionEnglishs.push(entry?.english ?? "");
    }
    return {
      options,
      selectedIndex: 0,
      isCorrect: null,
      hasBeenChecked: false,
      pinyin: part.pinyin,
      english: part.english,
      optionPinyins,
      optionEnglishs,
    };
  });
}

/**
 * Initialize sentence progress tracking for a level.
 */
function initializeSentenceProgress(sentenceCount: number): SentenceProgress[] {
  return Array.from({ length: sentenceCount }, (_, i) => ({
    sentenceIndex: i,
    attempts: 0,
    completed: false,
    stars: 0,
  }));
}

export const initialGameState: GameState = {
  level: null,
  currentSentenceIndex: 0,
  currentSentence: null,
  slots: [],
  sentenceProgress: [],
  phase: "playing",
  overallScore: 0,
  totalSentences: 0,
  completedSentences: 0,
};

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "LOAD_LEVEL": {
      const level = action.level;
      const progress = initializeSentenceProgress(level.sentences.length);
      const firstSentence = level.sentences[0];
      const slots = initializeSlots(firstSentence);

      return {
        ...state,
        level,
        currentSentenceIndex: 0,
        currentSentence: firstSentence,
        slots,
        sentenceProgress: progress,
        phase: "playing",
        overallScore: 0,
        totalSentences: level.sentences.length,
        completedSentences: 0,
      };
    }

    case "INIT_SENTENCE": {
      const sentence = action.sentence;
      const slots = initializeSlots(sentence);
      return {
        ...state,
        currentSentence: sentence,
        slots,
        phase: "playing",
      };
    }

    case "SELECT_OPTION": {
      const { slotIndex, option } = action;
      const optionIndex = state.slots[slotIndex]?.options.indexOf(option);
      if (optionIndex === undefined || optionIndex === -1) return state;

      const newSlots = state.slots.map((slot, i) => {
        if (i !== slotIndex) return slot;
        return { ...slot, selectedIndex: optionIndex, isCorrect: null, hasBeenChecked: false };
      });

      return {
        ...state,
        slots: newSlots,
        phase: "playing",
      };
    }

    case "CONFIRM_ANSWER": {
      if (!state.currentSentence) return state;

      const result = validateAnswer(state.slots, state.currentSentence, action.skipIndices);
      const currentProgress = state.sentenceProgress[state.currentSentenceIndex];
      const newAttempts = currentProgress.attempts + 1;
      const stars = result.allCorrect ? calculateStars(newAttempts) : currentProgress.stars;

      const newSlots = state.slots.map((slot, i) => ({
        ...slot,
        isCorrect: result.slotResults[i],
        hasBeenChecked: true,
      }));

      const newProgress = [...state.sentenceProgress];
      newProgress[state.currentSentenceIndex] = {
        ...currentProgress,
        attempts: newAttempts,
        completed: result.allCorrect,
        stars: result.allCorrect ? stars : currentProgress.stars,
      };

      const newCompleted = result.allCorrect
        ? state.completedSentences + 1
        : state.completedSentences;

      const newScore = result.allCorrect
        ? state.overallScore + stars
        : state.overallScore;

      const isLevelComplete = result.allCorrect && newCompleted >= state.totalSentences;

      return {
        ...state,
        slots: newSlots,
        sentenceProgress: newProgress,
        phase: isLevelComplete
          ? "levelComplete"
          : result.allCorrect
          ? "result"
          : "checking",
        overallScore: newScore,
        completedSentences: newCompleted,
      };
    }

    case "NEXT_SENTENCE": {
      if (!state.level) return state;
      const nextIndex = state.currentSentenceIndex + 1;
      if (nextIndex >= state.totalSentences) {
        return { ...state, phase: "levelComplete" };
      }

      const nextSentence = state.level.sentences[nextIndex];
      const slots = initializeSlots(nextSentence);

      return {
        ...state,
        currentSentenceIndex: nextIndex,
        currentSentence: nextSentence,
        slots,
        phase: "playing",
      };
    }

    case "RETRY_SENTENCE": {
      if (!state.currentSentence) return state;
      // Re-initialize slots but keep attempt count
      const slots = initializeSlots(state.currentSentence);
      return {
        ...state,
        slots,
        phase: "playing",
      };
    }

    case "RESET": {
      return { ...initialGameState };
    }

    default:
      return state;
  }
}
