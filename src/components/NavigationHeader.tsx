"use client";

import React from "react";
import Link from "next/link";

interface NavigationHeaderProps {
  levelName?: string;
  progress?: { current: number; total: number };
  score?: number;
  showBack?: boolean;
}

export default function NavigationHeader({
  levelName,
  progress,
  score,
  showBack = true,
}: NavigationHeaderProps) {
  return (
    <header className="w-full bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 h-12 md:h-14 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3 min-w-0">
          {showBack && (
            <Link
              href="/"
              className="text-slate-500 hover:text-slate-700 transition-colors p-2 md:p-1 rounded-lg hover:bg-slate-100 active:bg-slate-200"
              aria-label="Back to level select"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
              </svg>
            </Link>
          )}
          <Link href="/" className="font-bold text-base md:text-lg text-indigo-600 shrink-0">
            HanziSlot
          </Link>
          {levelName && (
            <>
              <span className="text-slate-300 shrink-0">/</span>
              <span className="text-slate-700 font-medium text-sm truncate max-w-[100px] sm:max-w-[200px]">
                {levelName}
              </span>
            </>
          )}
        </div>

        <div className="flex items-center gap-4">
          {progress && (
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span>
                {progress.current + 1} / {progress.total}
              </span>
              <div className="w-16 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-500 rounded-full transition-all duration-300"
                  style={{
                    width: `${((progress.current + 1) / progress.total) * 100}%`,
                  }}
                />
              </div>
            </div>
          )}
          {score !== undefined && (
            <div className="flex items-center gap-1 text-amber-500 font-semibold text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              {score}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
