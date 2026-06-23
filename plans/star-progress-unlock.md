# Star Progress & Unlock System Plan

## Current State

- `submitScore` in [`src/lib/api.ts`](src/lib/api.ts) is **never called** — scores aren't saved
- Unlock logic checks `completed === true` on previous level
- Level cards show `score` as "X pts" with 0-3 star icons

## Required Changes

### 1. Save Scores on Level Complete

**File: [`src/components/GameBoard.tsx`](src/components/GameBoard.tsx)**

Add a `useEffect` that detects `phase === "levelComplete"` and calls `submitScore`:

```typescript
useEffect(() => {
  if (phase === "levelComplete" && state.level) {
    const stars = getLevelStarRating(overallScore, state.level.starThresholds);
    submitScore(state.level.id, overallScore, stars);
  }
}, [phase]);
```

This saves the `overallScore` (sum of sentence stars, e.g., 12/15) and the star rating (0-3) to localStorage.

### 2. Update Unlock Logic — 80% Threshold

**File: [`src/app/page.tsx`](src/app/page.tsx)**

Replace `isLevelUnlocked` with percentage-based check:

```typescript
function isLevelUnlocked(
  levelId: string,
  levels: Level[],
  progress: UserProgress
): boolean {
  const level = levels.find((l) => l.id === levelId);
  if (!level) return false;
  // First level is always unlocked
  if (!level.unlockCondition) return true;
  
  // Get progress on the required previous level
  const prevProgress = progress.completedLevels[level.unlockCondition];
  if (!prevProgress) return false;
  
  // Calculate 80% threshold of max possible stars for previous level
  const prevLevel = levels.find((l) => l.id === level.unlockCondition);
  if (!prevLevel) return false;
  const maxStars = prevLevel.sentences.length * 3;
  const threshold = Math.ceil(maxStars * 0.8);
  
  return prevProgress.score >= threshold;
}
```

Also pass `maxScore` to `LevelSelectCard`:
```typescript
const maxScore = level.sentences.length * 3;
// ...
<LevelSelectCard
  maxScore={maxScore}
  // ...existing props
/>
```

### 3. Update Level Card Display

**File: [`src/components/LevelSelectCard.tsx`](src/components/LevelSelectCard.tsx)**

Changes:
- Add `maxScore` prop
- Show "X/15" instead of "X pts"
- Show star icons based on level star rating (already works)
- For locked levels: show the requirement (e.g., "Earn 12/15 stars on previous level")

```typescript
interface LevelSelectCardProps {
  level: Level;
  stars: number;
  unlocked: boolean;
  completed: boolean;
  score: number;
  maxScore: number; // NEW
}

// Replace score display:
{completed && (
  <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
    {score}/{maxScore}
  </span>
)}
{!completed && unlocked && (
  <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full group-hover:bg-indigo-100 transition-colors">
    Play →
  </span>
)}
```

### Files to Modify

| File | Changes |
|------|---------|
| [`src/components/GameBoard.tsx`](src/components/GameBoard.tsx) | Add `useEffect` to call `submitScore` on level complete |
| [`src/app/page.tsx`](src/app/page.tsx) | Rewrite `isLevelUnlocked` with 80% threshold, pass `maxScore` |
| [`src/components/LevelSelectCard.tsx`](src/components/LevelSelectCard.tsx) | Add `maxScore` prop, show "X/15" format |

### Data Flow

```
Player completes level → GameBoard detects phase="levelComplete"
  → submitScore(levelId, overallScore, stars) called
    → saves to localStorage: { stars, score, completed: true }

Home page loads → fetchUserProgress() reads localStorage
  → isLevelUnlocked checks: prevLevel.score >= ceil(prevMaxStars * 0.8)
    → if yes: level is unlocked, card shows "Play →"
    → if no: level is locked with lock icon

LevelSelectCard shows: [Level Name] [★ ★ ★] [12/15]
```

### Star Thresholds per Level

| Level | Sentences | Max Stars | 80% Threshold |
|-------|-----------|-----------|---------------|
| L1 Basic Actions | 5 | 15 | 12 |
| L2 Who You Are | 4 | 12 | 10 |
| L3 Describing Things | 4 | 12 | 10 |
| L4 Saying No | 5 | 15 | 12 |
| L5 Expressing Wants | 5 | 15 | 12 |
| L6 Adding Time | 4 | 12 | 10 |
