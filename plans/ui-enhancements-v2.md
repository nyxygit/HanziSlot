# HanziSlot UI Enhancements — Revised Plan v2

## Issues to Address

1. **Wheel animation isn't slot-machine-like** — Current implementation shows 3 separate divs (prev/selected/next) with independent fade animations. Need a true scrolling reel.
2. **Popup overlays for feedback** — ResultOverlay modals should be replaced with inline feedback on the main screen.

---

## Change 1: SlotColumn — True Slot Machine Reel

### How a real slot machine works:
- A vertical strip of items scrolls inside a fixed window
- The strip decelerates and settles on the selected item
- Items above/below are partially visible through the window

### New Implementation:

```
┌─────────────────────┐
│      Subject        │  ← PoS label
├─────────────────────┤
│  ┌───────────────┐  │
│  │   你           │  │  ← fixed window (overflow hidden)
│  │   ┌─────────┐  │  │
│  │   │   我    │  │  │  ← scrollable strip moves with spring
│  │   └─────────┘  │  │
│  │   他           │  │
│  └───────────────┘  │
│      wǒ             │  ← pinyin
│      I / me         │  ← english
└─────────────────────┘
```

### Technical Approach:

Render **all options as a vertical strip** inside a fixed-height container (`overflow-hidden`). Animate the strip's `translateY` to scroll the selected option to center.

```tsx
// Fixed window: 3 item slots visible
<div className="overflow-hidden rounded-xl border-2 ... h-[204px] w-32">
  {/* Scrolling strip of all options */}
  <motion.div
    animate={{ y: -selectedIndex * 68 + 68 }}
    transition={{ type: "spring", stiffness: 200, damping: 22 }}
    className="flex flex-col items-center"
  >
    {options.map((option, i) => (
      <div key={option} className="h-[68px] flex items-center justify-center text-4xl font-black font-chinese">
        {option}
      </div>
    ))}
  </motion.div>
</div>
```

**Key details:**
- Item height: `68px`, container height: `204px` (3 items)
- Spring animation (`stiffness: 200, damping: 22`) gives a natural deceleration with slight overshoot
- All items same size — the **center highlight frame** stays fixed to indicate selection
- After check: green/red border + glow on the frame

### Interaction:
- Each option in the strip is clickable
- Clicking scrolls the strip to center that item
- The slot machine "spin" feel comes from the spring physics

---

## Change 2: GameBoard — Inline Feedback (No Modals)

### Current Flow:
1. Submit answer → ResultOverlay modal appears (overlay)
2. Click "Try Again" or "Next Sentence" → modal closes

### New Flow:
1. Submit answer → 
   - Slots immediately highlight green/red
   - **Inline feedback panel** appears below the submit button:
     - If correct: "🎉 Correct!" + stars + correct sentence + "Next →" button
     - If incorrect: "🤔 Not quite right" + correct sentence + "Try Again ↻" button
   - Submit button becomes disabled and shows "Answered ✓"
2. Click "Try Again" → slots reset, feedback panel disappears
3. Click "Next" → advances to next sentence

### Inline Feedback Layout:

```
  [Submit Button: Answered ✓]  ← disabled after submission
  ┌─────────────────────────────┐
  │  🎉 Correct!               │
  │  ★ ★ ★                     │
  │  我吃苹果                  │
  │  Perfect! First try!       │
  │  [Next Sentence →]         │
  └─────────────────────────────┘

  OR

  ┌─────────────────────────────┐
  │  🤔 Not quite right         │
  │  Correct: 我吃苹果          │
  │  [Try Again ↻]              │
  └─────────────────────────────┘
```

### Files Modified:

| File | Change |
|------|--------|
| [`src/components/SlotColumn.tsx`](src/components/SlotColumn.tsx) | Full rewrite: vertical strip with spring scroll |
| [`src/components/GameBoard.tsx`](src/components/GameBoard.tsx) | Remove ResultOverlay × 2, add inline feedback section |
| [`src/app/globals.css`](src/app/globals.css) | Add shake animation for incorrect (no change needed to existing) |

### Files Unchanged:

| File | Reason |
|------|--------|
| [`src/components/ResultOverlay.tsx`](src/components/ResultOverlay.tsx) | No longer imported |
| [`src/engine/gameReducer.ts`](src/engine/gameReducer.ts) | Game state unchanged |
| [`src/engine/validation.ts`](src/engine/validation.ts) | Validation logic unchanged |
| [`src/context/GameContext.tsx`](src/context/GameContext.tsx) | Context API unchanged |
| [`src/types/index.ts`](src/types/index.ts) | Types unchanged |

---

## Mermaid: New Interaction Flow

```mermaid
stateDiagram-v2
    Playing --> Playing: Scroll wheel / select option
    Playing --> Checking: Press Check Answer
    
    Checking --> ShowingFeedback: All slots highlighted inline
    
    state ShowingFeedback {
        [*] --> Correct: All correct
        [*]-> Incorrect: Any wrong
        Correct --> NextSentence: Press Next
        Incorrect --> Playing: Press Try Again
    }
    
    NextSentence --> Playing: Load next sentence
    NextSentence --> LevelComplete: Last sentence
    LevelComplete --> [*]: Back to level select
```

---

## Edge Cases

- **1 option**: Strip has single item, no scroll needed, container still shows it centered
- **2 options**: Strip scrolls between the two, spring physics handles it naturally
- **After incorrect → retry**: Feedback panel is removed, slots reset to unchecked state with new shuffled options
- **Level complete**: `LevelCompleteOverlay` still uses modal (kept as-is since it's a different screen state)
