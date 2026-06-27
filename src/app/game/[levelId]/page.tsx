import { allLevels } from "@/data/levels";
import GamePageClient from "./GamePageClient";

// Dynamically generate static params for all levels and random-practice
export function generateStaticParams() {
  const levelIds = allLevels.map((l) => l.id);
  // Also include random-practice for the mixed-practice feature
  return [...new Set([...levelIds, "random-practice"])].map((levelId) => ({
    levelId,
  }));
}

export default function GamePage() {
  return <GamePageClient />;
}
