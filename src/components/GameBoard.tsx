"use client";

import React, { useEffect } from "react";
import { useGameContext } from "@/context/GameContext";
import { Level, PartOfSpeech } from "@/types";
import SlotColumn from "./SlotColumn";
import EnglishSentence from "./EnglishSentence";
import LevelCompleteOverlay from "./LevelCompleteOverlay";
import { validateAnswer, calculateStars, getLevelStarRating } from "@/engine/validation";
import { submitScore } from "@/lib/api";
import { speakChinese } from "@/lib/tts";

// Check if a slot part is invariant across all sentences in the level.
// Fixed parts (e.g. "是" in Subject + 是 + Noun) are shown as static text.
// For topic levels with mixed structures, sentences may have different slot counts,
// so only check sentences that have the given index.
function isSlotFixed(level: Level, partIndex: number): boolean {
  if (!level || level.sentences.length === 0) return false;
  // Only consider sentences that actually have this slot index
  const sentencesWithIndex = level.sentences.filter(
    (s) => s.parts.length > partIndex
  );
  // If not all sentences have this slot, it's not fixed
  if (sentencesWithIndex.length < level.sentences.length) return false;
  const firstVal = sentencesWithIndex[0].parts[partIndex]?.chinese;
  if (!firstVal) return false;
  return sentencesWithIndex.every(
    (s) => s.parts[partIndex]?.chinese === firstVal
  );
}

// Get indices of all fixed (invariant) slots in the level
function getFixedSlotIndices(level: Level): number[] {
  const indices: number[] = [];
  if (!level || level.sentences.length === 0) return indices;
  const maxParts = Math.max(...level.sentences.map((s) => s.parts.length));
  for (let i = 0; i < maxParts; i++) {
    if (isSlotFixed(level, i)) indices.push(i);
  }
  return indices;
}

export default function GameBoard() {
  const { state, selectOption, confirmAnswer, nextSentence, retrySentence, isLoading } =
    useGameContext();

  // Save score when level is completed
  useEffect(() => {
    if (state.phase === "levelComplete" && state.level) {
      const stars = getLevelStarRating(state.overallScore, state.level.starThresholds);
      submitScore(state.level.id, state.overallScore, stars);
    }
  }, [state.phase, state.level, state.overallScore]);

  // Speak the correct Chinese sentence aloud when answered correctly
  // Also trigger on levelComplete for the last sentence
  useEffect(() => {
    if ((state.phase === "result" || state.phase === "levelComplete") && state.currentSentence) {
      const sentence = state.currentSentence.parts.map((p) => p.chinese).join("");
      speakChinese(sentence);
    }
  }, [state.phase, state.currentSentence]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-indigo-200 border-t-indigo-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-500">Loading level...</p>
        </div>
      </div>
    );
  }

  if (!state.level || !state.currentSentence) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-slate-500">Level not found.</p>
      </div>
    );
  }

  const { currentSentence, slots, currentSentenceIndex, totalSentences, phase, overallScore } =
    state;
  const isAnswered = phase === "result" || phase === "checking";
  const isCorrect = phase === "result";

  // Get current attempt count
  const currentProgress = state.sentenceProgress[currentSentenceIndex];
  const currentAttempts = currentProgress.attempts;

  const handleConfirm = () => {
    confirmAnswer(fixedSlotIndices);
  };

  // Compute fixed slot indices once (they don't change per sentence)
  const fixedSlotIndices = state.level ? getFixedSlotIndices(state.level) : [];

  let resultStars = 0;
  let correctSentenceStr = "";
  if (phase === "result" || phase === "checking") {
    const result = validateAnswer(slots, currentSentence, fixedSlotIndices);
    resultStars = result.allCorrect ? calculateStars(currentAttempts) : 0;
    correctSentenceStr = result.correctSentence;
  }

  const speakSentence = () => {
    if (correctSentenceStr) {
      speakChinese(correctSentenceStr);
    }
  };

  const handleNext = () => {
    if (phase === "levelComplete") return;
    nextSentence();
  };

  const handleRetry = () => {
    retrySentence();
  };

  const handleLevelRetry = () => {
    if (state.level) {
      retrySentence();
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto px-4 py-4 md:py-6 min-h-dvh md:min-h-0">
      {/* English Sentence */}
      <EnglishSentence
        sentence={currentSentence.english}
        sentenceIndex={currentSentenceIndex}
        totalSentences={totalSentences}
      />

      {/* Pattern / Topic hint */}
      <div className="mb-4 md:mb-6">
        <span className="text-[10px] sm:text-xs font-medium text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full">
          {state.level.category === "topic"
            ? `Topic: ${state.level.topic || state.level.name}`
            : `Pattern: ${state.level.pattern.name}`
          }
        </span>
      </div>

      {/* Slot Machine Columns — horizontal scroll on mobile, wrap on desktop */}
      <div
        className="
          flex flex-nowrap overflow-x-auto gap-3 md:gap-12
          pb-3 px-2 w-full
          snap-x snap-mandatory snap-proximity
          overscroll-x-contain scrollbar-thin-mobile
          md:flex-wrap md:justify-center md:overflow-visible
          md:snap-none md:pb-0 md:px-0
          mb-4 md:mb-10
        "
      >
        {slots.map((slot, index) => {
          const fixed = state.level ? isSlotFixed(state.level, index) : false;
          // For fixed slots, ensure selectedIndex points to the correct answer
          const fixedSelectedIndex = fixed && currentSentence
            ? slot.options.indexOf(currentSentence.parts[index]?.chinese)
            : slot.selectedIndex;

          return (
            <div
              key={`slot-${currentSentence.id}-${index}`}
              className="snap-start shrink-0"
            >
              <SlotColumn
                options={slot.options}
                selectedIndex={fixedSelectedIndex >= 0 ? fixedSelectedIndex : slot.selectedIndex}
                label={state.level!.pattern.structure[index]}
                partOfSpeech={currentSentence.parts[index]?.partOfSpeech as PartOfSpeech}
                isCorrect={slot.isCorrect}
                hasBeenChecked={slot.hasBeenChecked}
                pinyin={slot.pinyin}
                english={slot.english}
                optionPinyins={slot.optionPinyins}
                optionEnglishs={slot.optionEnglishs}
                onSelect={(option) => selectOption(index, option)}
                // In "checking" phase, only lock correct slots; incorrect slots stay editable
                disabled={phase === "result" || (phase === "checking" && slot.isCorrect === true)}
                fixed={fixed}
              />
            </div>
          );
        })}
      </div>

      {/* Submit / Action Button — sticky on mobile, static on desktop */}
      <div className="
        sticky bottom-0
        w-full
        bg-gradient-to-t from-slate-50 via-slate-50/95 to-transparent
        pt-3 pb-4 md:pb-0 md:pt-0
        md:bg-none md:static md:w-auto
        flex flex-col items-center
        mt-auto md:mt-0
      ">
        {!isAnswered ? (
          <button
            onClick={handleConfirm}
            className="
              bg-indigo-500 hover:bg-indigo-600 text-white font-bold
              py-3 md:py-4 px-10 md:px-14 rounded-xl text-lg md:text-xl
              transition-all duration-200
              hover:shadow-xl hover:shadow-indigo-200/50 active:scale-95
              w-full max-w-xs md:w-auto
            "
          >
            Check Answer
          </button>
        ) : isCorrect ? (
          <>
            <button
              onClick={handleNext}
              className="
                bg-green-500 hover:bg-green-600 text-white font-bold
                py-3 md:py-4 px-10 md:px-14 rounded-xl text-lg md:text-xl
                transition-all duration-200
                hover:shadow-xl hover:shadow-green-200/50 active:scale-95
                w-full max-w-xs md:w-auto
              "
            >
              {currentSentenceIndex >= totalSentences - 1
                ? "Complete Level 🏆"
                : "Next Sentence →"}
            </button>
            <button
              onClick={speakSentence}
              className="
                mt-2 md:mt-3 text-slate-400 hover:text-indigo-500
                transition-colors duration-200 text-xl md:text-2xl
                active:scale-95
              "
              aria-label="Replay audio"
              title="Listen again"
            >
              🔊
            </button>
          </>
        ) : (
          <button
            onClick={handleConfirm}
            className="
              bg-amber-500 hover:bg-amber-600 text-white font-bold
              py-3 md:py-4 px-10 md:px-14 rounded-xl text-lg md:text-xl
              transition-all duration-200
              hover:shadow-xl hover:shadow-amber-200/50 active:scale-95
              w-full max-w-xs md:w-auto
            "
          >
            Check Again
          </button>
        )}
      </div>

      {/* Level Complete Overlay */}
      <LevelCompleteOverlay
        show={phase === "levelComplete"}
        score={overallScore}
        maxScore={totalSentences * 3}
        thresholds={state.level.starThresholds}
        onRetry={handleLevelRetry}
      />
    </div>
  );
}
