"use client";

import React, { useState, useRef, useEffect } from "react";
import { PartOfSpeech } from "@/types";
import { wordBank } from "@/data/wordBank";

// Ordered by relevance to gameplay
const categoryOrder: PartOfSpeech[] = [
  "subject", "verb", "object", "adjective", "noun",
  "time", "place", "negation", "modal", "particle", "adverb",
  "preposition", "conjunction", "complement", "clause"
];

const categoryLabels: Record<PartOfSpeech, string> = {
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

interface CategoryInfo {
  description: string;
}

const categoryInfo: Record<PartOfSpeech, CategoryInfo> = {
  subject: {
    description: "The doer of the action — who performs the verb. In Chinese, the subject always comes first, just like in English.",
  },
  verb: {
    description: "The action word — what the subject does. Chinese verbs don't conjugate for person or tense — the form stays the same.",
  },
  object: {
    description: "The receiver of the action — what the verb acts upon. Objects come after the verb, just like in English.",
  },
  adjective: {
    description: "Describes nouns or states of being. In Chinese, adjectives follow 很 (hěn) and don't change form for comparison.",
  },
  noun: {
    description: "Names for people, places, and things. Used with 是 (shì) to identify or define something.",
  },
  time: {
    description: "When something happens. Unlike English, time words always come at the beginning of the sentence in Chinese.",
  },
  place: {
    description: "Where something happens or where someone is located. Places follow the verb with 在 (zài).",
  },
  negation: {
    description: "Makes sentences negative. 不 (bù) negates actions and states, 没 (méi) negates possession and past actions.",
  },
  modal: {
    description: "Helper verbs that express ability, desire, or permission. They come before the main verb in Chinese.",
  },
  particle: {
    description: "Small grammatical markers. 是 (shì) links subjects to nouns. 很 (hěn) links subjects to adjectives.",
  },
  adverb: {
    description: "Modifies verbs or adjectives to add detail. Adverbs come before the word they modify in Chinese.",
  },
  preposition: {
    description: "Words like 在, 把, 被, 比, 给, 对 that introduce location, objects, or comparisons in a sentence.",
  },
  conjunction: {
    description: "Connects clauses or sentences. Words like 因为 (because), 所以 (so), 但是 (but), 如果 (if), 虽然 (although).",
  },
  complement: {
    description: "Describes the result, degree, or direction of an action. Placed after a verb, often with 得 (de).",
  },
  clause: {
    description: "A short, self-contained clause used in compound sentence patterns. Often paired with conjunctions.",
  },
};

export default function WordBankExplorer() {
  const [activeCategory, setActiveCategory] = useState<PartOfSpeech>("subject");
  const tabsRef = useRef<HTMLDivElement>(null);

  const words = wordBank[activeCategory];
  const info = categoryInfo[activeCategory];

  // Scroll active tab into view
  useEffect(() => {
    const container = tabsRef.current;
    if (!container) return;
    const activeButton = container.querySelector(`[data-cat="${activeCategory}"]`) as HTMLElement;
    if (activeButton) {
      activeButton.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [activeCategory]);

  return (
    <div>
      {/* Clean horizontal tab strip */}
      <div
        ref={tabsRef}
        className="flex gap-1 overflow-x-auto pb-2 mb-6 scrollbar-thin border-b border-slate-200 scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {categoryOrder.map((cat) => (
          <button
            key={cat}
            data-cat={cat}
            onClick={() => setActiveCategory(cat)}
            className={`
              relative px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors
              ${activeCategory === cat
                ? "text-indigo-600"
                : "text-slate-500 hover:text-slate-700"
              }
            `}
          >
            {categoryLabels[cat]}
            {activeCategory === cat && (
              <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-indigo-500 rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Category info section */}
      <div className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-xl p-5 mb-6">
        <h3 className="text-lg font-bold text-slate-800 mb-1">
          {categoryLabels[activeCategory]}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          {info.description}
        </p>
        <p className="text-xs text-slate-400 mt-2">
          Click any word below to hear its pronunciation
        </p>
      </div>

      {/* Word cards grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {words.map((entry) => (
          <button
            key={entry.chinese}
            onClick={() => {
              try {
                const utterance = new SpeechSynthesisUtterance(entry.chinese);
                utterance.lang = "zh-CN";
                utterance.rate = 0.75;
                window.speechSynthesis.cancel();
                window.speechSynthesis.speak(utterance);
              } catch {
                // Speech not available
              }
            }}
            className="group bg-white rounded-xl border border-slate-200 p-4 text-center hover:border-indigo-300 hover:shadow-md active:scale-[0.97] transition-all cursor-pointer"
            title={`Listen to ${entry.chinese}`}
          >
            <p className="text-3xl font-black font-chinese text-indigo-700 mb-1 group-hover:text-indigo-500 transition-colors">
              {entry.chinese}
            </p>
            <p className="text-sm text-slate-500 italic">{entry.pinyin}</p>
            <p className="text-xs text-slate-400 mt-0.5">{entry.english}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
