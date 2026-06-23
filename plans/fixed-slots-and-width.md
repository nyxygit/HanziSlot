# Fixed Slots & Width Adjustment Plan

## Problem 1: Invariant Sentence Parts

Levels like `Subject + 是 + Noun` always have `是` in the particle slot. Players shouldn't need to select it — just display it.

### Detection (data-driven)

A slot is "fixed" if the `chinese` value is identical across **all sentences** in the level:

| Level | Fixed Part | Value |
|-------|-----------|-------|
| L2 Who You Are | particle (index 1) | 是 |
| L3 Describing Things | particle (index 1) | 很 |
| L4 Saying No | negation (index 1) | 不 |
| L5 Expressing Wants | modal (index 1) | 要 |

### Fixed Slot Rendering

```
┌──────────────────┐
│    Particle      │  ← label
│                  │
│      是          │  ← large centered text, no wheel
│     shì          │  ← pinyin
│   is/am/are      │  ← english
│                  │
└──────────────────┘
```

No border, no wheel controls, no interaction — just the character displayed statically.

## Problem 2: 3-Character Words Overflow

Words like `中国人` (3 chars at `text-5xl` ≈ 144px) don't fit in `w-32` (128px).

Fix: increase container width from `w-32` to `w-40` (160px), which accommodates 3 characters comfortably.

## Files to Modify

### [`src/components/SlotColumn.tsx`](src/components/SlotColumn.tsx)
- Add `fixed?: boolean` prop
- When `fixed=true`: render a static display box (no wheel, no border, no interaction)
- Increase container width from `w-32` → `w-40`

### [`src/components/GameBoard.tsx`](src/components/GameBoard.tsx)
- Add `isSlotFixed(level, partIndex)` helper
- Pass `fixed={isSlotFixed(state.level, index)}` to each `SlotColumn`

## Implementation

### `isSlotFixed` function (placed in GameBoard.tsx)
```typescript
function isSlotFixed(level: Level, partIndex: number): boolean {
  if (!level || level.sentences.length === 0) return false;
  const firstVal = level.sentences[0].parts[partIndex]?.chinese;
  if (!firstVal) return false;
  return level.sentences.every(
    (s) => s.parts[partIndex]?.chinese === firstVal
  );
}
```

### SlotColumn fixed rendering
```tsx
{fixed ? (
  <div className="flex flex-col items-center justify-center h-40 w-40">
    <span className="text-5xl font-black font-chinese text-indigo-700">
      {options[selectedIndex]}
    </span>
  </div>
) : (
  // ... existing wheel code
)}
```
