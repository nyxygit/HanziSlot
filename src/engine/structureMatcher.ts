import { allLevels } from "@/data/levels";
import { PartOfSpeech, SentenceItem } from "@/types";

export interface StructureMatch {
  levelId: string;
  patternName: string;
}

/**
 * Build a lookup from a PartOfSpeech pattern (stringified) to the structure level id.
 * Only considers non-static parts since static parts are invariant context.
 */
function buildStructureLookup(): Map<string, StructureMatch> {
  const lookup = new Map<string, StructureMatch>();

  for (const level of allLevels) {
    if (level.category !== "structure") continue;
    const key = JSON.stringify(level.pattern.structure);
    if (!lookup.has(key)) {
      lookup.set(key, {
        levelId: level.id,
        patternName: level.pattern.name,
      });
    }
  }

  return lookup;
}

const structureLookup = buildStructureLookup();

/**
 * Given a sentence, determine which sentence structure pattern it uses
 * by comparing its non-static part-of-speech sequence against known patterns.
 * Returns the matching structure level info, or null if no match is found.
 */
export function matchSentenceToStructure(sentence: SentenceItem): StructureMatch | null {
  // Extract the partOfSpeech sequence for non-static parts
  const posSequence = sentence.parts
    .filter((part) => !part.static)
    .map((part) => part.partOfSpeech);

  const key = JSON.stringify(posSequence);
  return structureLookup.get(key) ?? null;
}
