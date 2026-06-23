# Mobile Responsive Plan — HanziSlot

## Problem

The [`GameBoard`](src/components/GameBoard.tsx:148) renders slot columns in a `flex-wrap` container. Each [`SlotColumn`](src/components/SlotColumn.tsx:117) has a fixed width of `w-40` (160px) and height of `h-60` (240px). On mobile viewports (~375px), only 2 slots fit horizontally.

With 3-4 slot sentences (all 6 levels), the `flex-wrap` forces slots to stack vertically, pushing the English sentence off-screen. The user needs that sentence as a reference while arranging words, so this breaks the mobile UX.

## Approach: Option A — Horizontal-scroll slots

Slots stay in a single horizontal scrollable row on mobile (no wrapping). The English sentence remains visible at the top. Slot columns become more compact on small screens so more are visible at once.

### Mobile Layout

```
┌─────────────────────────────┐
│ ← HanziSlot / Level Name    │  ← NavigationHeader (sticky top)
│                 2/6  ★5     │
├─────────────────────────────┤
│  "Translate this sentence"  │
│  "I don't eat meat."        │  ← EnglishSentence (always visible)
│                              │
│  Pattern: S + 不 + V + O    │  ← Pattern/Topic hint
│                              │
│  ┌──┐ ┌──┐ ┌──┐ ┌──┐      │
│  │我│ │不│ │吃│ │肉│      │  ← Horizontal scroll row
│  │  │ │  │ │  │ │  │      │     overflow-x-auto, flex-nowrap
│  └──┘ └──┘ └──┘ └──┘      │     scroll-snap-type: x mandatory
│  wǒ   bù   chī  ròu       │  ← Pinyin under each
│                              │
│     [  Check Answer  ]      │  ← Button (sticky bottom on mobile)
│                              │
└─────────────────────────────┘
```

---

## Files to Modify

### 1. [`SlotColumn.tsx`](src/components/SlotColumn.tsx) — Responsive slot sizing + touch swipe

**Changes:**
- **Responsive dimensions**: Replace fixed `w-40 h-60` with responsive classes:
  - Slot reel: `w-24 h-44 sm:w-40 sm:h-60` (96x176 on mobile, 160x240 on desktop)
  - Fixed slot: same width/height adjustments
- **Responsive font sizes**: `text-xl sm:text-4xl` for Chinese characters
- **Responsive ITEM_HEIGHT**: Calculate dynamically or use CSS-based approach. Change `ITEM_HEIGHT` from constant 80 to a value derived from container height, or use responsive CSS with `h-1/3` approach instead of hardcoded pixel positioning.
- **Touch swipe handlers**: Add `onTouchStart`, `onTouchMove`, `onTouchEnd` handlers to the reel div. Track touch Y delta and convert to slot navigation (similar to wheel logic but for touch).
  - On `touchstart`: record start Y position
  - On `touchmove`: if delta exceeds threshold (e.g., 30px), cycle slot and reset delta
  - On `touchend`: no special action needed
- **Responsive gap**: Reduce gap between label/pinyin on mobile

**Key CSS class changes on the reel div (line 117):**
```tsx
// Before:
className={`relative w-40 h-60 ...`}
// After:
className={`relative w-24 h-44 sm:w-40 sm:h-60 ...`}
```

**Key font changes on the character spans (lines 109, 157):**
```tsx
// Before:
className={`font-black font-chinese leading-none text-4xl md:text-5xl ...`}
// After:
className={`font-black font-chinese leading-none text-xl sm:text-4xl md:text-5xl ...`}
```

**Touch support** (new code to add, roughly lines 67-78 after wheel handler):
```typescript
const touchStartY = useRef(0);

const handleTouchStart = useCallback((e: React.TouchEvent) => {
  if (disabled || options.length <= 1) return;
  touchStartY.current = e.touches[0].clientY;
}, [disabled, options.length]);

const handleTouchMove = useCallback((e: React.TouchEvent) => {
  if (disabled || options.length <= 1) return;
  const deltaY = e.touches[0].clientY - touchStartY.current;
  if (Math.abs(deltaY) > 30) {
    const dir = deltaY > 0 ? -1 : 1;  // swipe down = previous, swipe up = next
    directionRef.current = dir;
    const N = options.length;
    const newIdx = ((selectedIndex + dir) % N + N) % N;
    onSelect(options[newIdx]);
    touchStartY.current = e.touches[0].clientY;  // reset for continuous swiping
  }
}, [disabled, options.length, selectedIndex, onSelect]);
```

---

### 2. [`GameBoard.tsx`](src/components/GameBoard.tsx) — Horizontal scroll layout + sticky button

**Changes:**
- **Slot container** (line 148): Replace `flex-wrap` with horizontal scroll behavior
  ```tsx
  // Before:
  <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-10">
  // After:
  <div className="flex flex-nowrap overflow-x-auto gap-3 md:gap-12 mb-10 pb-2 px-2
                  snap-x snap-mandatory scrollbar-thin
                  md:flex-wrap md:justify-center md:overflow-visible md:snap-none md:px-0
                  scrollbar-thin-mobile">
  ```

- **Scroll snap on individual slot columns**: Add `snap-start shrink-0` to each `SlotColumn` wrapper so scrolling snaps to each slot

- **Sticky action button on mobile**: Wrap the button section (lines 179-231) in a container that sticks to the bottom on mobile:
  ```tsx
  <div className="sticky bottom-0 md:static bg-gradient-to-t from-slate-50 via-slate-50/95 to-transparent 
                  pt-4 pb-6 md:pb-0 md:pt-0 md:bg-none md:static mt-auto">
    {/* existing button code */}
  </div>
  ```

- **Overall layout** (line 129): The main container already uses `flex flex-col`. Ensure it takes full viewport height on mobile:
  ```tsx
  // Before:
  <div className="flex flex-col items-center w-full max-w-4xl mx-auto px-4 py-6">
  // After:
  <div className="flex flex-col items-center w-full max-w-4xl mx-auto px-4 py-6 min-h-screen md:min-h-0">
  ```

- **SlotColumn wrapper snap** (around line 157): Add snap classes
  ```tsx
  <div key={`slot-${currentSentence.id}-${index}`} className="snap-start shrink-0">
    <SlotColumn ... />
  </div>
  ```

---

### 3. [`globals.css`](src/app/globals.css) — Custom scrollbar styles

**Add:**
```css
/* Thin scrollbar for horizontal slot container */
.scrollbar-thin::-webkit-scrollbar {
  height: 4px;
}
.scrollbar-thin::-webkit-scrollbar-track {
  background: transparent;
}
.scrollbar-thin::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 2px;
}

/* Only show scrollbar on devices that support hover (non-touch) */
@media (hover: hover) {
  .scrollbar-thin-mobile::-webkit-scrollbar {
    height: 4px;
  }
}
@media (hover: none) {
  .scrollbar-thin-mobile::-webkit-scrollbar {
    display: none;
  }
}

/* Snap scroll */
.snap-x {
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}
.snap-start {
  scroll-snap-align: start;
}
.snap-none {
  scroll-snap-type: none;
}
```

---

### 4. [`EnglishSentence.tsx`](src/components/EnglishSentence.tsx) — Minor responsive text sizing

**Changes:**
- Reduce top/bottom padding on mobile: `py-6` → `py-4 md:py-6`
- Slightly reduce quote font size on mobile: `text-2xl` → `text-lg md:text-2xl md:text-3xl`

```tsx
// Before:
<div className="w-full text-center py-6 px-4">
  <p className="text-xs ...">Translate this sentence</p>
  <h2 className="text-2xl md:text-3xl font-bold ...">&ldquo;{sentence}&rdquo;</h2>
</div>
// After:
<div className="w-full text-center py-4 md:py-6 px-4">
  <p className="text-xs ...">Translate this sentence</p>
  <h2 className="text-lg sm:text-xl md:text-3xl font-bold ...">&ldquo;{sentence}&rdquo;</h2>
</div>
```

---

### 5. [`NavigationHeader.tsx`](src/components/NavigationHeader.tsx) — Mobile touch targets

**Changes:**
- Increase back button touch target: already has `p-1`, make it `p-2` on mobile
- Ensure progress bar and score don't overflow on small screens
- The level name truncation with `truncate max-w-[200px]` is good; consider `max-w-[120px]` on mobile

---

### 6. Home page (`page.tsx`) — Tab bar mobile scroll + hero sizing

**Changes:**
- **Tab bar** (lines 75-112): On very small screens, the 3 tabs might overflow. Make the tab container horizontally scrollable:
  ```tsx
  // Before:
  <div className="flex gap-1 bg-slate-100 rounded-xl p-1 w-fit mb-8">
  // After:
  <div className="flex gap-1 bg-slate-100 rounded-xl p-1 w-fit mb-8 overflow-x-auto">
  ```
- **Hero section** (line 56): Reduce padding on mobile: `py-16` → `py-10 md:py-16`

---

### 7. [`WordBankExplorer.tsx`](src/components/WordBankExplorer.tsx) — Mobile-friendly

Let me check if this component needs updates too.

---

## Implementation Order

1. **SlotColumn.tsx** — Responsive dimensions + touch swipe (most critical for mobile interaction)
2. **GameBoard.tsx** — Horizontal scroll layout + sticky button (core layout change)
3. **globals.css** — Scrollbar and snap styles (needed for #2 to work well)
4. **EnglishSentence.tsx** — Responsive text sizing
5. **NavigationHeader.tsx** — Touch target tweaks
6. **page.tsx** — Tab bar + hero mobile tweaks (secondary priority)

## Key Considerations

- **`-webkit-overflow-scrolling: touch`** — ensures smooth inertial scrolling on iOS
- **`overscroll-behavior: contain`** — prevents pull-to-refresh interference when scrolling slots horizontally
- **Touch event `passive: false`** — may be needed on wheel handler to prevent page scroll on mobile
- **Safe area insets** — if the app is added to home screen on iOS, the sticky bottom button needs `pb-[env(safe-area-inset-bottom)]`
- **No wrapping on mobile** — `flex-nowrap` combined with `overflow-x-auto` ensures slots never wrap on mobile, while desktop retains the original `flex-wrap` behavior via `md:flex-wrap`
