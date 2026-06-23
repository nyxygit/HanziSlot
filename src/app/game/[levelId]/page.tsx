import GamePageClient from "./GamePageClient";

// List all level IDs for static generation
export function generateStaticParams() {
  return [
    { levelId: "level-1" },
    { levelId: "level-2" },
    { levelId: "level-3" },
    { levelId: "level-4" },
    { levelId: "level-5" },
    { levelId: "level-6" },
    { levelId: "topic-school" },
    { levelId: "topic-shopping" },
    { levelId: "topic-clothing" },
  ];
}

export default function GamePage() {
  return <GamePageClient />;
}
