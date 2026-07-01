"use client";

import React, { useCallback, useRef, useEffect, useState } from "react";
import { PartOfSpeech } from "@/types";
import { motion, AnimatePresence } from "framer-motion";

interface SlotColumnProps {
  options: string[];
  selectedIndex: number;
  label: string;
  partOfSpeech: PartOfSpeech;
  isCorrect: boolean | null;
  hasBeenChecked: boolean;
  pinyin: string;
  english: string;
  optionPinyins: string[];     // pinyin for each option, parallel to options[]
  optionEnglishs: string[];    // english for each option, parallel to options[]
  onSelect: (option: string) => void;
  disabled?: boolean;
  fixed?: boolean;
}

const partOfSpeechLabels: Record<PartOfSpeech, string> = {
  subject: "Subject",
  verb: "Verb",
  object: "Object",
  adjective: "Adjective",
  noun: "Noun",
  adverb: "Adverb",
  time: "Time",
  place: "Place",
  negation: "Negation",
  modal: "Modal",
  particle: "Particle",
  preposition: "Prep",
  conjunction: "Conj",
  complement: "Comp",
  clause: "Clause",
};

const DEFAULT_ITEM_HEIGHT = 80;

export default function SlotColumn({
  options,
  selectedIndex,
  label,
  partOfSpeech,
  isCorrect,
  hasBeenChecked,
  pinyin,
  english,
  optionPinyins,
  optionEnglishs,
  onSelect,
  disabled = false,
  fixed = false,
}: SlotColumnProps) {
  // Pinyin and English for the currently SELECTED word (not just the correct answer)
  // Use || instead of ?? so that empty-string lookups (word not in wordBank) fall back
  // to the part's pinyin/english which is always defined on SentencePart.
  const selectedPinyin = optionPinyins[selectedIndex] || pinyin;
  const selectedEnglish = optionEnglishs[selectedIndex] || english;
  const directionRef = useRef(1); // 1 = forward (scroll up), -1 = backward (scroll down)
  const reelRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef(0);

  // Dynamically calculate item height as 1/3 of the reel container height
  const [itemHeight, setItemHeight] = useState(DEFAULT_ITEM_HEIGHT);

  useEffect(() => {
    const el = reelRef.current;
    if (!el) return;
    const updateHeight = () => {
      setItemHeight(el.offsetHeight / 3);
    };
    updateHeight();
    const ro = new ResizeObserver(updateHeight);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const handleSelect = useCallback(
    (option: string) => {
      if (!disabled) onSelect(option);
    },
    [disabled, onSelect]
  );

  // Mouse wheel handler
  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault();
      if (disabled || options.length <= 1) return;
      const dir = e.deltaY < 0 ? 1 : -1;
      directionRef.current = dir;
      const N = options.length;
      const newIdx = ((selectedIndex + dir) % N + N) % N;
      onSelect(options[newIdx]);
    },
    [disabled, options, selectedIndex, onSelect]
  );

  // Touch swipe handlers for mobile
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (disabled || options.length <= 1) return;
      touchStartY.current = e.touches[0].clientY;
    },
    [disabled, options.length]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (disabled || options.length <= 1) return;
      const deltaY = e.touches[0].clientY - touchStartY.current;
      if (Math.abs(deltaY) > 30) {
        const dir = deltaY > 0 ? -1 : 1; // swipe down = previous, swipe up = next
        directionRef.current = dir;
        const N = options.length;
        const newIdx = ((selectedIndex + dir) % N + N) % N;
        onSelect(options[newIdx]);
        touchStartY.current = e.touches[0].clientY; // reset for continuous swiping
      }
    },
    [disabled, options.length, selectedIndex, onSelect]
  );

  // Click handler for individual items in the strip
  const handleItemClick = useCallback(
    (option: string) => {
      if (disabled) return;
      onSelect(option);
    },
    [disabled, onSelect]
  );

  // Calculate the 3 visible items with circular wrapping
  const N = options.length;
  const items = [
    options[((selectedIndex - 1) % N + N) % N],
    options[selectedIndex],
    options[((selectedIndex + 1) % N + N) % N],
  ];

  const dir = directionRef.current;

  return (
    <div className="flex flex-col items-center gap-1 sm:gap-2">
      {/* Part of Speech Label */}
      <span className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-widest">
        {partOfSpeechLabels[partOfSpeech] || label}
      </span>

      {fixed ? (
        /* Fixed slot — static display */
        <div className="relative w-24 h-44 sm:w-40 sm:h-60 flex items-center justify-center">
          <span className="font-black font-chinese leading-none text-xl sm:text-4xl md:text-5xl text-indigo-700">
            {options[selectedIndex]}
          </span>
        </div>
      ) : (
        /* Slot Machine Reel */
        <div
          ref={reelRef}
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          className={`relative w-24 h-44 sm:w-40 sm:h-60 overflow-hidden rounded-2xl border-2 transition-all duration-300 select-none touch-none ${
            hasBeenChecked
              ? isCorrect
                ? "border-green-500 shadow-md"
                : "border-red-500 shadow-md"
              : "border-slate-200 shadow-md"
          }`}
        >
          {/* Divider line above center */}
          <div
            className="absolute left-2 right-2 h-px bg-slate-200 z-10 pointer-events-none"
            style={{ top: itemHeight }}
          />
          {/* Divider line below center */}
          <div
            className="absolute left-2 right-2 h-px bg-slate-200 z-10 pointer-events-none"
            style={{ top: itemHeight * 2 }}
          />

          {/* 3 visible positions with synchronized slide animation */}
          {items.map((option, pos) => {
            const isCenter = pos === 1;
            return (
              <AnimatePresence key={`pos-${pos}`} mode="popLayout">
                <motion.div
                    key={option}
                    initial={{ y: dir * itemHeight, opacity: 0 }}
                    animate={{ y: 0, opacity: isCenter ? 1 : 0.25 }}
                    exit={{ opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                    mass: 0.8,
                  }}
                  onClick={() => handleItemClick(option)}
                  className={`
                    absolute left-0 right-0
                    flex items-center justify-center
                    cursor-pointer select-none
                    ${disabled ? "cursor-not-allowed" : "hover:bg-slate-50/50"}
                  `}
                  style={{ top: pos * itemHeight, height: itemHeight }}
                >
                  <span
                    className={`
                      font-black font-chinese leading-none
                      text-xl sm:text-4xl md:text-5xl
                      text-indigo-700
                    `}
                  >
                    {option}
                  </span>
                </motion.div>
              </AnimatePresence>
            );
          })}
        </div>
      )}

      {/* Pinyin — always visible, shows pinyin for currently selected option */}
      <p className="text-[11px] sm:text-sm text-slate-500 font-medium md:mb-2">{selectedPinyin}</p>

      {/* English meaning — only shown after sentence is submitted, shows meaning for selected option */}
      {hasBeenChecked && (
        <p className="text-[10px] sm:text-xs text-slate-400">{selectedEnglish}</p>
      )}
    </div>
  );
}
