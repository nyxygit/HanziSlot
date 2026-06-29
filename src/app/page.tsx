"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Level } from "@/types";
import { fetchLevels, fetchUserProgress, UserProgress } from "@/lib/api";
import LevelSelectCard from "@/components/LevelSelectCard";
import WordBankExplorer from "@/components/WordBankExplorer";

export default function Home() {
  const router = useRouter();
  const [levels, setLevels] = useState<Level[]>([]);
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"structures" | "topics" | "wordbank">("topics");
  const [randomCount, setRandomCount] = useState(10);

  // Read ?tab query param on mount to allow external links (e.g. "Back to Structures")
  // to open the correct tab.
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get("tab");
      if (tabParam === "structures" || tabParam === "topics" || tabParam === "wordbank") {
        setActiveTab(tabParam);
      }
    }
  }, []);

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
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-12 text-center">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            HanziSlot
          </h1>
        </div>
      </div>

      {/* Tab Navigation + Content */}
      <div className="max-w-4xl mx-auto px-4 py-6 md:py-8">
        {/* Tab bar — icons only, full width, centered */}
        <div className="flex gap-1 bg-slate-100 rounded-xl p-1 w-full mb-6 md:mb-8">
          <button
            onClick={() => setActiveTab("topics")}
            className={`
              flex-1 flex items-center justify-center py-3 rounded-lg text-2xl transition-all
              ${activeTab === "topics"
                ? "bg-white text-indigo-600 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
              }
            `}
          >
            📚
          </button>
          <button
            onClick={() => setActiveTab("structures")}
            className={`
              flex-1 flex items-center justify-center py-3 rounded-lg text-2xl transition-all
              ${activeTab === "structures"
                ? "bg-white text-indigo-600 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
              }
            `}
          >
            🏗️
          </button>
          <button
            onClick={() => setActiveTab("wordbank")}
            className={`
              flex-1 flex items-center justify-center py-3 rounded-lg text-2xl transition-all
              ${activeTab === "wordbank"
                ? "bg-white text-indigo-600 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
              }
            `}
          >
            📖
          </button>
        </div>

        {activeTab === "topics" && (
          <>
            <h2 className="text-xl font-bold text-slate-800 mb-2">
              Topics
            </h2>
            <p className="text-sm text-slate-500 mb-6">
              Practice with themed vocabulary in real-world contexts — using multiple sentence patterns
            </p>

            {/* Random Practice Card */}
            <div className="mb-6 bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-700 text-white rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                  <span className="text-lg">🎲</span>
                </div>
                <div>
                  <h3 className="font-semibold">Random Practice</h3>
                  <p className="text-xs text-purple-100">
                    Mixed sentences from all levels
                  </p>
                </div>
              </div>
              <p className="text-sm text-purple-100 mb-4">
                Practice with a random selection of sentences pulled from every level
                and topic.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-white/15 rounded-lg px-3 py-2">
                  <span className="text-xs font-medium text-purple-100">Questions:</span>
                  <select
                    value={randomCount}
                    onChange={(e) => setRandomCount(Number(e.target.value))}
                    className="bg-transparent text-white text-sm font-semibold border-none outline-none cursor-pointer appearance-none [&>option]:text-slate-800"
                  >
                    <option value={5} className="text-slate-800">5</option>
                    <option value={10} className="text-slate-800">10</option>
                    <option value={15} className="text-slate-800">15</option>
                    <option value={20} className="text-slate-800">20</option>
                    <option value={999} className="text-slate-800">All</option>
                  </select>
                </div>
                <button
                  onClick={() => router.push(`/game/random-practice?count=${randomCount}`)}
                  className="bg-white text-purple-700 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors"
                >
                  Start Practice →
                </button>
              </div>
            </div>

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
          <p>Unlock the next level of Mandarin with sentence patterns</p>
        </div>
      </footer>
    </div>
  );
}
