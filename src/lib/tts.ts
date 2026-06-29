/**
 * Text-to-Speech utility for Chinese.
 *
 * Uses the Web Speech API with automatic voice selection.
 * Prefers neural / natural-sounding Chinese voices on the user's system.
 */

let cachedVoice: SpeechSynthesisVoice | null | "pending" = null;
let voiceCacheAttempted = false;

/**
 * Get the best available voice for Chinese speech synthesis.
 * Prioritizes neural voices, then any zh-CN voice, then any Chinese-dialect voice.
 * The result is cached after the first call to avoid repeated getVoices() invocations.
 */
function getBestChineseVoice(): SpeechSynthesisVoice | null {
  if (cachedVoice !== null && cachedVoice !== "pending") return cachedVoice;
  if (voiceCacheAttempted) return cachedVoice === "pending" ? null : cachedVoice;

  voiceCacheAttempted = true;
  const voices = window.speechSynthesis.getVoices();

  // Filter to Chinese voices (zh-CN, zh-TW, zh-HK, etc.)
  const chineseVoices = voices.filter((v) => v.lang.startsWith("zh"));

  if (chineseVoices.length === 0) {
    cachedVoice = null;
    return null;
  }

  // Preference order:
  // 1. Neural voices (contain "Neural" in name — Windows 11 / Edge)
  // 2. Microsoft Desktop voices (contain "Microsoft" — Windows)
  // 3. Any zh-CN voice
  // 4. Any Chinese voice

  const neural = chineseVoices.find((v) => v.name.includes("Neural"));
  if (neural) {
    cachedVoice = neural;
    return neural;
  }

  const msDesktop = chineseVoices.find(
    (v) => v.name.includes("Microsoft") && v.lang === "zh-CN"
  );
  if (msDesktop) {
    cachedVoice = msDesktop;
    return msDesktop;
  }

  const zhCN = chineseVoices.find((v) => v.lang === "zh-CN");
  if (zhCN) {
    cachedVoice = zhCN;
    return zhCN;
  }

  cachedVoice = chineseVoices[0];
  return chineseVoices[0];
}

/**
 * Speak a Chinese text string aloud using the best available voice.
 * Cancels any ongoing speech before starting.
 */
export function speakChinese(text: string): void {
  if (!text || typeof window === "undefined") return;

  try {
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-CN";
    utterance.rate = 0.85;  // Slightly faster than 0.75 for more natural cadence
    utterance.pitch = 1.0;  // Default pitch — natural
    utterance.volume = 1.0;

    // Attempt to select the best Chinese voice
    const voice = getBestChineseVoice();
    if (voice) {
      utterance.voice = voice;
    }

    window.speechSynthesis.speak(utterance);
  } catch {
    // Speech synthesis not available — silently ignore
  }
}

/**
 * Check if speech synthesis is available in the current browser.
 */
export function isSpeechAvailable(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}
