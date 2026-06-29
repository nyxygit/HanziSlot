"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Level, PartOfSpeech } from "@/types";
import { structureGuides } from "@/data/structureGuides";

// Human-readable labels for each part of speech in the pattern
const posLabels: Record<PartOfSpeech, string> = {
  subject: "Subject",
  verb: "Verb",
  object: "Object",
  adjective: "Adjective",
  noun: "Noun",
  time: "Time",
  place: "Place",
  negation: "Negation",
  modal: "Modal",
  particle: "Particle",
  adverb: "Adverb",
  preposition: "Preposition",
  conjunction: "Conjunction",
  complement: "Complement",
  clause: "Clause",
};

interface StructureDetailPageProps {
  level: Level;
}

export default function StructureDetailPage({ level }: StructureDetailPageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Check if navigated from a game session (e.g. topic level pattern tag)
  const fromGame = searchParams?.get("from") === "game";
  const backLabel = fromGame ? "Back to Question" : "Back to Structures";

  // Build a visual pattern string from the structure array
  const patternString = level.pattern.structure
    .map((pos) => posLabels[pos])
    .join(" + ");

  // Look up the detailed educational guide for this level
  const guide = structureGuides[level.id];

  // Pick example sentences (first 3–5)
  const examples = level.sentences.slice(0, Math.min(5, level.sentences.length));

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header section */}
      <div className="bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-700 text-white">
        <div className="max-w-3xl mx-auto px-4 py-10 md:py-14">
          {/* Back link — uses browser history to preserve game state when coming from a game session */}
          {fromGame ? (
            <button
              onClick={() => router.back()}
              className="inline-flex items-center gap-1 text-sm text-indigo-100 hover:text-white mb-6 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              {backLabel}
            </button>
          ) : (
            <Link
              href="/?tab=structures"
              className="inline-flex items-center gap-1 text-sm text-indigo-100 hover:text-white mb-6 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              Back to Structures
            </Link>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
            {level.name}
          </h1>

          {/* Pattern formula */}
          <div className="bg-white/10 rounded-xl px-5 py-3 inline-block mb-4">
            <p className="text-lg md:text-xl font-mono font-semibold tracking-wide">
              {patternString}
            </p>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-indigo-100 leading-relaxed max-w-2xl">
            {level.pattern.description}
          </p>
        </div>
      </div>

      {/* Content section */}
      <div className="max-w-3xl mx-auto px-4 py-8 md:py-10">
        {/* How to Use */}
        {guide && (
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                <span className="text-sm font-bold text-indigo-600">1</span>
              </div>
              <h2 className="text-xl font-bold text-slate-800">How to Use This Pattern</h2>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-5 md:p-6">
              <div className="text-sm md:text-base text-slate-700 leading-relaxed whitespace-pre-line">
                {guide.howToUse}
              </div>
            </div>
          </section>
        )}

        {/* When to Use */}
        {guide && (
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                <span className="text-sm font-bold text-emerald-600">2</span>
              </div>
              <h2 className="text-xl font-bold text-slate-800">When to Use It</h2>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-5 md:p-6">
              <div className="text-sm md:text-base text-slate-700 leading-relaxed whitespace-pre-line">
                {guide.whenToUse}
              </div>
            </div>
          </section>
        )}

        {/* Key Points */}
        {guide && guide.keyPoints.length > 0 && (
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                <span className="text-sm font-bold text-amber-600">3</span>
              </div>
              <h2 className="text-xl font-bold text-slate-800">Key Points to Remember</h2>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-5 md:p-6">
              <ul className="space-y-3">
                {guide.keyPoints.map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm md:text-base text-slate-700">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Example sentences */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-6">
            Example Sentences
          </h2>

          <div className="space-y-4">
            {examples.map((sentence) => (
              <div
                key={sentence.id}
                className="bg-white rounded-xl border border-slate-200 p-5 hover:border-indigo-200 hover:shadow-sm transition-all"
              >
                {/* Chinese */}
                <p className="text-2xl md:text-3xl font-black text-indigo-700 mb-2 font-chinese">
                  {sentence.parts.map((p) => p.chinese).join("")}
                </p>

                {/* Pinyin breakdown */}
                <div className="flex flex-wrap gap-x-3 gap-y-1 mb-2">
                  {sentence.parts.map((part, i) => (
                    <span key={i} className="text-sm text-slate-500 italic">
                      {part.pinyin}
                      <span className="text-xs text-slate-400 ml-1 not-italic">
                        ({part.english})
                      </span>
                    </span>
                  ))}
                </div>

                {/* English meaning */}
                <p className="text-sm text-slate-600 font-medium">
                  {sentence.english}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA section */}
        <div className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-xl p-6 md:p-8 text-center">
          <h3 className="text-lg font-bold text-slate-800 mb-2">
            Ready to practice?
          </h3>
          <p className="text-sm text-slate-500 mb-5">
            Put your knowledge to the test by building these sentences yourself.
          </p>
          <button
            onClick={() => router.push(`/game/${level.id}`)}
            className="
              bg-indigo-500 hover:bg-indigo-600 text-white font-bold
              py-3 px-10 rounded-xl text-lg
              transition-all duration-200
              hover:shadow-xl hover:shadow-indigo-200/50 active:scale-95
            "
          >
            Start Practice →
          </button>
        </div>
      </div>
    </div>
  );
}
