"use client";

import React from "react";

interface EnglishSentenceProps {
  sentence: string;
  sentenceIndex: number;
  totalSentences: number;
}

export default function EnglishSentence({
  sentence,
}: EnglishSentenceProps) {
  return (
    <div className="w-full text-center py-3 md:py-6 px-4">
      <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mb-1 md:mb-2 font-medium">
        Translate this sentence
      </p>
      <h2 className="text-base sm:text-lg md:text-3xl font-bold text-slate-800 leading-relaxed">
        &ldquo;{sentence}&rdquo;
      </h2>
    </div>
  );
}
