"use client";

import React, { useEffect, useState } from "react";
import { Level } from "@/types";
import { fetchLevels, fetchUserProgress, UserProgress } from "@/lib/api";
import LevelSelectCard from "@/components/LevelSelectCard";
import WordBankExplorer from "@/components/WordBankExplorer";

export default function Home() {
  const [levels, setLevels] = useState<Level[]>([]);
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"structures" | "topics" | "wordbank">("structures");

  useEffect(() => {
    async function load() {
      try {
        const [fetchedLevels, userProgress] = await Promise.all([
          fetchLevels(),
          fetchUserProgress(),
        ]);
        setLevels(fetchedLevels);
        setProgress(userProgress);
      } catch (error) {
        console.error("Failed to load levels:", error);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const structureLevels = levels.filter((l) => l.category === "structure");
  const topicLevels = levels.filter((l) => l.category === "topic");

  const totalSentences = levels.reduce((sum, l) => sum + l.sentences.length, 0);
  const uniquePatterns = new Set(
    levels.filter((l) => l.category === "structure").map((l) => l.pattern.id)
  ).size;
  const topicCount = topicLevels.length;

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
        <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-500 rounded-full animate-spin mb-4" />
        <p className="text-slate-500 font-medium">Loading HanziSlot...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 py-10 md:py-16 text-center">
          <h1 className="text-3xl md:text-5xl font-black mb-2 md:mb-3 tracking-tight">
            HanziSlot
          </h1>
          <p className="text-base md:text-xl text-indigo-100 max-w-xl mx-auto mb-4 px-2">
            Build Chinese sentences like a slot machine! Spin through words and
            master sentence patterns.
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs sm:text-sm text-indigo-200">
            <span>🎯 {levels.length} Levels</span>
            <span>📖 {totalSentences} Sentences</span>
            <span>🏆 {uniquePatterns} Patterns</span>
            {topicCount > 0 && <span>📚 {topicCount} Topics</span>}
          </div>
        </div>
      </div>

      {/* Tab Navigation + Content */}
      <div className="max-w-4xl mx-auto px-4 py-6 md:py-8">
        {/* Tab bar */}
        <div className="flex gap-1 bg-slate-100 rounded-xl p-1 w-full sm:w-fit mb-6 md:mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab("structures")}
            className={`
              px-4 py-2 rounded-lg text-sm font-semibold transition-all
              ${activeTab === "structures"
                ? "bg-white text-indigo-600 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
              }
            `}
          >
            🏗️ Sentence Structures
          </button>
          <button
            onClick={() => setActiveTab("topics")}
            className={`
              px-4 py-2 rounded-lg text-sm font-semibold transition-all
              ${activeTab === "topics"
                ? "bg-white text-indigo-600 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
              }
            `}
          >
            📚 Topics
          </button>
          <button
            onClick={() => setActiveTab("wordbank")}
            className={`
              px-4 py-2 rounded-lg text-sm font-semibold transition-all
              ${activeTab === "wordbank"
                ? "bg-white text-indigo-600 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
              }
            `}
          >
            📖 Word Bank
          </button>
        </div>

        {activeTab === "structures" && (
          <>
            <h2 className="text-xl font-bold text-slate-800 mb-2">
              Sentence Structures
            </h2>
            <p className="text-sm text-slate-500 mb-6">
              Learn fundamental Chinese sentence patterns, from simple to complex
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {structureLevels.map((level) => {
                const completedLevel = progress?.completedLevels[level.id];
                const bestStars = completedLevel?.stars ?? 0;
                const bestScore = completedLevel?.score ?? 0;
                const maxScore = level.sentences.length * 3;

                return (
                  <LevelSelectCard
                    key={level.id}
                    level={level}
                    stars={bestStars}
                    completed={completedLevel?.completed ?? false}
                    score={bestScore}
                    maxScore={maxScore}
                  />
                );
              })}
            </div>
          </>
        )}

        {activeTab === "topics" && (
          <>
            <h2 className="text-xl font-bold text-slate-800 mb-2">
              Topics
            </h2>
            <p className="text-sm text-slate-500 mb-6">
              Practice with themed vocabulary in real-world contexts — using multiple sentence patterns
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {topicLevels.map((level) => {
                const completedLevel = progress?.completedLevels[level.id];
                const bestStars = completedLevel?.stars ?? 0;
                const bestScore = completedLevel?.score ?? 0;
                const maxScore = level.sentences.length * 3;

                return (
                  <LevelSelectCard
                    key={level.id}
                    level={level}
                    stars={bestStars}
                    completed={completedLevel?.completed ?? false}
                    score={bestScore}
                    maxScore={maxScore}
                  />
                );
              })}
            </div>
          </>
        )}

        {activeTab === "wordbank" && (
          <>
            <h2 className="text-xl font-bold text-slate-800 mb-6">
              Word Bank
            </h2>
            <WordBankExplorer />
          </>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 mt-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-sm text-slate-400">
          <p>HanziSlot — Learn Chinese sentence patterns the fun way 🎰</p>
        </div>
      </footer>
    </div>
  );
}
