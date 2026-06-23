"use client";

import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { GameProvider, useGameContext } from "@/context/GameContext";
import GameBoard from "@/components/GameBoard";
import NavigationHeader from "@/components/NavigationHeader";

function GamePageContent() {
  const params = useParams();
  const levelId = params?.levelId as string;
  const { state, loadLevel } = useGameContext();

  useEffect(() => {
    if (levelId) {
      loadLevel(levelId);
    }
  }, [levelId, loadLevel]);

  return (
    <div className="min-h-screen bg-slate-50">
      <NavigationHeader
        levelName={state.level?.name}
        progress={
          state.level
            ? { current: state.currentSentenceIndex, total: state.totalSentences }
            : undefined
        }
        score={state.overallScore}
      />
      <GameBoard />
    </div>
  );
}

export default function GamePageClient() {
  return (
    <GameProvider>
      <GamePageContent />
    </GameProvider>
  );
}
