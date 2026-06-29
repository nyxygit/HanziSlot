"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useGameContext } from "@/context/GameContext";
import { Level, PartOfSpeech, SentencePart } from "@/types";
import SlotColumn from "./SlotColumn";
import EnglishSentence from "./EnglishSentence";
import LevelCompleteOverlay from "./LevelCompleteOverlay";
import { validateAnswer, calculateStars, getLevelStarRating } from "@/engine/validation";
import { submitScore } from "@/lib/api";
import { speakChinese } from "@/lib/tts";
import { matchSentenceToStructure } from "@/engine/structureMatcher";

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

// Labels for part-of-speech tags, matching SlotColumn's scheme
const posLabels: Record<PartOfSpeech, string> = {
  subject: "Subject",
  verb: "Verb",
  object: "Object",
  adjective: "Adjective",
  noun: "Noun",
  adverb: "Adverb",
  time: "Time",
  place: "Place",
  negation: "Negation",
  modal: "Modal",
  particle: "Particle",
  preposition: "Prep",
  conjunction: "Conj",
  complement: "Comp",
  clause: "Clause",
};

/** Displays a static context part styled like a locked slot column, with label and content-based width. */
function StaticPartBadge({ part }: { part: SentencePart }) {
  const posLabel = posLabels[part.partOfSpeech] || part.partOfSpeech;
  return (
    <div className="flex flex-col items-center gap-1 sm:gap-2 select-none snap-start shrink-0">
      {/* Part of speech label — same as SlotColumn */}
      <span className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-widest">
        {posLabel}
      </span>
      {/* Content box — sized to fit text, no wrapping */}
      <div className="relative min-w-24 h-44 sm:h-60 flex items-center justify-center px-4">
        <span className="font-black font-chinese leading-none text-xl sm:text-4xl md:text-5xl text-indigo-700 whitespace-nowrap">
          {part.chinese}
        </span>
      </div>
      <span className="text-[11px] sm:text-sm text-slate-500 font-medium">
        {part.pinyin}
      </span>
    </div>
  );
}

export default function GameBoard() {
  const { state, selectOption, confirmAnswer, nextSentence, retrySentence, isLoading } =
    useGameContext();
  const slotsContainerRef = useRef<HTMLDivElement>(null);
  const [slotsOverflow, setSlotsOverflow] = useState(false);

  // Detect if the slot columns overflow the viewport.
  // When they fit, center them. When they overflow, left-align so nothing is clipped.
  useEffect(() => {
    const el = slotsContainerRef.current;
    if (!el) return;
    const check = () => setSlotsOverflow(el.scrollWidth > el.clientWidth);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, [state.currentSentence]);

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

  // Memoize fixed slot indices (computed across all sentences in the level)
  // NOTE: Called unconditionally (before any early return) to comply with Rules of Hooks.
  // When playing a topic level, find which sentence structure the current sentence uses
  const structureMatch = useMemo(
    () => (state.currentSentence ? matchSentenceToStructure(state.currentSentence) : null),
    [state.currentSentence]
  );

  const fixedSlotIndices = useMemo(
    () => (state.level ? getFixedSlotIndices(state.level) : []),
    [state.level]
  );

  // Compute static part indices — safe default when currentSentence is null
  const staticIndices = useMemo(
    () =>
      state.currentSentence
        ? state.currentSentence.parts
            .map((part, i) => (part.static ? i : -1))
            .filter((i) => i >= 0)
        : [],
    [state.currentSentence]
  );

  // Combine both sets of indices to skip during validation
  const skipIndices = useMemo(
    () => [...fixedSlotIndices, ...staticIndices],
    [fixedSlotIndices, staticIndices]
  );

  const handleConfirm = useMemo(
    () => () => confirmAnswer(skipIndices),
    [confirmAnswer, skipIndices]
  );

  // Memoize validation result so it's not recomputed on every render
  const validationResult = useMemo(() => {
    if (!state.currentSentence || !state.level) return null;
    if (state.phase === "result" || state.phase === "checking") {
      return validateAnswer(state.slots, state.currentSentence, skipIndices);
    }
    return null;
  }, [state.phase, state.slots, state.currentSentence, skipIndices, state.level]);

  // ---- Early returns (after all hooks) ----

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

  let resultStars = 0;
  let correctSentenceStr = "";
  if (validationResult) {
    resultStars = validationResult.allCorrect ? calculateStars(currentAttempts) : 0;
    correctSentenceStr = validationResult.correctSentence;
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

  // Build the slot/static-part elements array before rendering
  const slotElements: React.ReactNode[] = [];
  let quizzedIndex = 0;
  for (let i = 0; i < currentSentence.parts.length; i++) {
    const part = currentSentence.parts[i];
    if (part.static) {
      slotElements.push(
        <StaticPartBadge key={`static-${currentSentence.id}-${i}`} part={part} />
      );
    } else {
      const slot = slots[i];
      const structureIndex = quizzedIndex;
      quizzedIndex++;
      const fixed = state.level ? isSlotFixed(state.level, i) : false;
      const fixedSelectedIndex = fixed && currentSentence
        ? slot.options.indexOf(currentSentence.parts[i]?.chinese)
        : slot.selectedIndex;

      slotElements.push(
        <div key={`slot-${currentSentence.id}-${i}`} className="snap-start shrink-0">
          <SlotColumn
            options={slot.options}
            selectedIndex={fixedSelectedIndex >= 0 ? fixedSelectedIndex : slot.selectedIndex}
            label={state.level!.pattern.structure[structureIndex]}
            partOfSpeech={currentSentence.parts[i]?.partOfSpeech as PartOfSpeech}
            isCorrect={slot.isCorrect}
            hasBeenChecked={slot.hasBeenChecked}
            pinyin={slot.pinyin}
            english={slot.english}
            optionPinyins={slot.optionPinyins}
            optionEnglishs={slot.optionEnglishs}
            onSelect={(option) => selectOption(i, option)}
            // In "checking" phase, only lock correct slots; incorrect slots stay editable
            disabled={phase === "result" || (phase === "checking" && slot.isCorrect === true)}
            fixed={fixed}
          />
        </div>
      );
    }
  }

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto px-4 py-3 md:py-6 min-h-dvh md:min-h-0">
      {/* English Sentence */}
      <EnglishSentence
        sentence={currentSentence.english}
        sentenceIndex={currentSentenceIndex}
        totalSentences={totalSentences}
      />

      {/* Pattern / Topic hint */}
      <div className="mb-2 md:mb-6 flex items-center gap-2">
        {state.level.category === "topic" ? (
          <Link
            href={`/structure/${structureMatch?.levelId ?? "#"}?from=game&return=${state.level.id}`}
            onClick={() => {
              // Save current game position before navigating away
              if (typeof window !== "undefined") {
                sessionStorage.setItem(
                  "hanzi-slot-game-state",
                  JSON.stringify({
                    levelId: state.level!.id,
                    sentenceIndex: state.currentSentenceIndex,
                    sentenceProgress: state.sentenceProgress,
                    overallScore: state.overallScore,
                  })
                );
              }
            }}
            className="text-[10px] sm:text-xs font-medium text-indigo-500 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-full transition-colors"
          >
            {structureMatch?.patternName ?? "Pattern"}
          </Link>
        ) : (
          <span className="text-[10px] sm:text-xs font-medium text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full">
            Pattern: {state.level.pattern.name}
          </span>
        )}
      </div>

      {/* Scroll zone — flex-1 fills all space between content and sticky button on mobile */}
      {/* Note: -mx-4 extends past the parent px-4 so scroll isn't clipped on the left */}
      <div className="flex-1 w-[calc(100%+2rem)] -mx-4 overflow-x-auto overscroll-x-contain scrollbar-thick md:mx-0 md:w-full md:flex-none md:min-h-0 md:mb-8">
        <div
          ref={slotsContainerRef}
          className={`
            flex flex-nowrap gap-3 md:gap-6
            pl-6 pr-4 md:px-4
            ${slotsOverflow ? "justify-start" : "justify-center"}
          `}
        >
          {slotElements}
        </div>
      </div>

      {/* Submit / Action Button — sticky at bottom on mobile, static on desktop */}
      <div className="
        sticky bottom-0
        w-full
        bg-gradient-to-t from-slate-50 via-slate-50/95 to-transparent
        pt-3 pb-4 md:pb-0 md:pt-0
        md:bg-none md:static md:w-auto
        flex flex-col items-center
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
