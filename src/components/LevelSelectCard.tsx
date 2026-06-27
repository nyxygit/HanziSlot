"use client";

import React from "react";
import Link from "next/link";
import { Level } from "@/types";

interface LevelSelectCardProps {
  level: Level;
  stars: number;
  completed: boolean;
  score: number;
  maxScore: number;
}

// Topic emoji lookup by topic name
const topicEmojis: Record<string, string> = {
  School: "🏫",
  Shopping: "🛒",
  Clothing: "👕",
};

export default function LevelSelectCard({
  level,
  stars,
  completed,
  score,
  maxScore,
}: LevelSelectCardProps) {
  const isTopic = level.category === "topic";

  const isStructure = level.category === "structure";

  return (
    <Link
      href={`/game/${level.id}`}
      className="block bg-white rounded-xl p-5 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all group"
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
            isTopic
              ? "bg-emerald-100 group-hover:bg-emerald-200"
              : "bg-indigo-100 group-hover:bg-indigo-200"
          }`}
        >
          {isTopic ? (
            <span className="text-lg">{topicEmojis[level.topic || ""] || "📚"}</span>
          ) : (
            <span className="text-lg font-bold text-indigo-600">
              {level.id.split("-")[1]}
            </span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors truncate">
            {level.name}
          </h3>
          <p className="text-xs text-slate-500 truncate">
            {isTopic ? "Topic" : level.pattern.name}
          </p>
        </div>
      </div>

      <p className="text-sm text-slate-600 mb-3 line-clamp-2">
        {level.description}
      </p>

      <div className="flex items-center justify-between">
        {isStructure ? (
          <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
            {level.sentences.length} sentence{level.sentences.length !== 1 ? "s" : ""}
          </span>
        ) : (
          <>
            <div className="flex gap-0.5">
              {[1, 2, 3].map((s) => (
                <span
                  key={s}
                  className={`text-lg ${
                    s <= stars ? "text-amber-400" : "text-slate-200"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            {completed && (
              <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                {score}/{maxScore}
              </span>
            )}
            {!completed && (
              <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full group-hover:bg-indigo-100 transition-colors">
                Play →
              </span>
            )}
          </>
        )}
      </div>
    </Link>
  );
}
