"use client";

import React, { useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { getLevelStarRating } from "@/engine/validation";

interface LevelCompleteOverlayProps {
  show: boolean;
  score: number;
  maxScore: number;
  thresholds: [number, number, number];
  onRetry: () => void;
}

export default function LevelCompleteOverlay({
  show,
  score,
  maxScore,
  thresholds,
  onRetry,
}: LevelCompleteOverlayProps) {
  const router = useRouter();
  const stars = getLevelStarRating(score, thresholds);
  const goHome = useCallback(() => router.push("/"), [router]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center"
          >
            <div className="text-6xl mb-4">🏆</div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              Level Complete!
            </h2>

            {/* Total stars earned this session */}
            <div className="flex items-center justify-center gap-1 mb-1">
              <span className="text-3xl font-black text-amber-400">{score}</span>
              <span className="text-lg text-slate-400">/ {maxScore}</span>
            </div>
            <p className="text-sm text-slate-500 mb-4">stars earned</p>

            {/* Single Back to Home button */}
            <button
              onClick={goHome}
              className="block w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors text-center text-lg cursor-pointer"
            >
              Back to Home
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
