"use client";

import React, { createContext, useContext, useReducer, useCallback, useEffect, useState } from "react";
import { GameState, GameAction, Level } from "@/types";
import { gameReducer, initialGameState } from "@/engine/gameReducer";
import { fetchLevel } from "@/lib/api";

interface GameContextValue {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
  loadLevel: (levelId: string) => Promise<void>;
  selectOption: (slotIndex: number, option: string) => void;
  confirmAnswer: (skipIndices?: number[]) => void;
  nextSentence: () => void;
  retrySentence: () => void;
  isLoading: boolean;
}

const GameContext = createContext<GameContextValue | null>(null);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);
  const [isLoading, setIsLoading] = useState(false);

  const loadLevel = useCallback(async (levelId: string) => {
    setIsLoading(true);
    try {
      const level = await fetchLevel(levelId);
      if (level) {
        dispatch({ type: "LOAD_LEVEL", level });
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  const selectOption = useCallback((slotIndex: number, option: string) => {
    dispatch({ type: "SELECT_OPTION", slotIndex, option });
  }, []);

  const confirmAnswer = useCallback((skipIndices?: number[]) => {
    dispatch({ type: "CONFIRM_ANSWER", skipIndices });
  }, []);

  const nextSentence = useCallback(() => {
    dispatch({ type: "NEXT_SENTENCE" });
  }, []);

  const retrySentence = useCallback(() => {
    dispatch({ type: "RETRY_SENTENCE" });
  }, []);

  return (
    <GameContext.Provider
      value={{
        state,
        dispatch,
        loadLevel,
        selectOption,
        confirmAnswer,
        nextSentence,
        retrySentence,
        isLoading,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGameContext(): GameContextValue {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext must be used within a GameProvider");
  }
  return context;
}
