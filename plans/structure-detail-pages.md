# Structure Detail Pages Plan

## Goal
Instead of launching directly into a game session when clicking a structure card, show a detail page that describes the sentence structure with examples. Implement for structures 1-3 initially.

## Architecture

### New Route: `/structure/[levelId]`
**File:** `src/app/structure/[levelId]/page.tsx`

A new route that displays a detail page for a sentence structure. This page will:
- Accept a `levelId` param and look up the level data
- Show the structure name, pattern formula, and description
- Display example sentences from the level data
- Have a prominent "Start Practice" button linking to `/game/${levelId}`

### New Component: `StructureDetailPage`
**File:** `src/components/StructureDetailPage.tsx` (client component)

This component will:
- Display a header with structure number, name, and pattern formula
- Show a detailed explanation section
- Render example sentences with Chinese, pinyin, and English
- Include a "Start Practice" CTA button
- Have a "Back to Structures" link

### Changes to `LevelSelectCard`
**File:** `src/components/LevelSelectCard.tsx`

For **structure** cards:
- Change `href` from `/game/${level.id}` to `/structure/${level.id}`
- Remove the description (`level.description`)
- Remove the "X sentences" tag
- Show only: number badge, title, and pattern name

For **topic** cards: remain unchanged (still go directly to game).

### Changes to `page.tsx`
**File:** `src/app/page.tsx`

- Structure section can continue rendering `LevelSelectCard` for structure cards
- No changes needed to the structure section itself if `LevelSelectCard` handles the logic internally

## Data Flow
```
Home Page (page.tsx)
  └─ LevelSelectCard (structures)
       └─ href="/structure/level-01"
            └─ StructureDetailPage
                 └─ Shows pattern description
                 └─ Shows example sentences from level data
                 └─ "Start Practice" → /game/level-01
```

## Files to Create
1. `src/app/structure/[levelId]/page.tsx` — route page (server component)
2. `src/components/StructureDetailPage.tsx` — detail page UI (client component)

## Files to Modify
1. `src/components/LevelSelectCard.tsx` — update href and card content for structures

## Example Sentences Rendering
Each level already has sentence data with Chinese, pinyin, and English. The detail page will render 3-5 example sentences as:
```
Chinese text
pinyin
English meaning
```

## Styling Approach
- Clean, informative layout matching the existing design system
- Gradient header area (similar to the Random Practice card on home page)
- Example sentences in cards with Chinese prominently displayed
- "Start Practice" button in the accent color
