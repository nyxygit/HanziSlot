"use client";

import React, { Suspense, useEffect, useRef } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { GameProvider, useGameContext } from "@/context/GameContext";
import GameBoard from "@/components/GameBoard";
import NavigationHeader from "@/components/NavigationHeader";
import { allLevels } from "@/data/levels";
import { shuffle } from "@/engine/shuffle";
import { Level, SentenceItem } from "@/types";

/** Restore saved game position from sessionStorage after the level loads. */
function useRestoreGamePosition(levelId: string, isLoaded: boolean) {
  const { state, dispatch } = useGameContext();

  const restoredRef = useRef(false);

  useEffect(() => {
    if (!isLoaded || restoredRef.current || typeof window === "undefined") return;

    try {
      const saved = sessionStorage.getItem("hanzi-slot-game-state");
      if (!saved) return;

      const parsed = JSON.parse(saved);
      if (parsed.levelId !== levelId) return;

      const targetIndex = parsed.sentenceIndex;
      if (!targetIndex || targetIndex <= 0) return;

      // Advance the level to the saved sentence index
      restoredRef.current = true;
      for (let i = 0; i < targetIndex; i++) {
        dispatch({ type: "NEXT_SENTENCE" });
      }

      // Clear the saved state so it doesn't restore again
      sessionStorage.removeItem("hanzi-slot-game-state");
    } catch {
      // Ignore malformed state
    }
  }, [isLoaded, levelId, dispatch, state.level]);
}

function GamePageContentInner() {
  const params = useParams();
  const searchParams = useSearchParams();
  const levelId = params?.levelId as string;
  const { state, dispatch, loadLevel } = useGameContext();
  const loadedRef = useRef(false);

  useEffect(() => {
    if (levelId && !loadedRef.current) {
      loadedRef.current = true;

      if (levelId === "random-practice") {
        // Build a random-practice level on the fly
        const countParam = searchParams?.get("count");
        const requestedCount = countParam ? parseInt(countParam, 10) : 10;

        // Collect all sentences from every level
        const allSentences: SentenceItem[] = [];
        for (const level of allLevels) {
          for (const sentence of level.sentences) {
            allSentences.push({
              ...sentence,
              id: `${level.id}-${sentence.id}`,
            });
          }
        }

        // Shuffle and pick requested count
        const shuffled = shuffle(allSentences);
        const selected = requestedCount >= allSentences.length
          ? shuffled
          : shuffled.slice(0, requestedCount);

        const randomLevel: Level = {
          id: "random-practice",
          name: "Random Practice",
          description: "Mixed sentences from all levels",
          category: "topic",
          pattern: {
            id: "random",
            name: "Mixed Patterns",
            description: "Sentences from various patterns",
            structure: [],
          },
          sentences: selected,
          starThresholds: [90, 70, 50],
        };

        dispatch({ type: "LOAD_LEVEL", level: randomLevel });
      } else {
        loadLevel(levelId);
      }
    }
  }, [levelId, searchParams, loadLevel, dispatch]);

  // Restore position after level loads
  const isLoaded = !!state.level;
  useRestoreGamePosition(levelId, isLoaded);

  return (
    <div className="min-h-screen bg-slate-50">
      <NavigationHeader
        levelName={state.level?.name}
        progress={
          state.level
            ? { current: state.currentSentenceIndex, total: state.totalSentences }
            : undefined
        }
      />
      <GameBoard />
    </div>
  );
}

function GamePageContent() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-500 rounded-full animate-spin" />
      </div>
    }>
      <GamePageContentInner />
    </Suspense>
  );
}

export default function GamePageClient() {
  return (
    <GameProvider>
      <GamePageContent />
    </GameProvider>
  );
}
