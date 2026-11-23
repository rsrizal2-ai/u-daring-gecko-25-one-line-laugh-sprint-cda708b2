import { mkdirSync, writeFileSync } from "node:fs";

// One-Line Laugh Sprint: a single original funny line about everyday life.
// Revised: the joke now lands twice — the phone as an unhired boss, then the
// missing raise as the payoff on the last word.
const LINE =
  "My phone sent my weekly screen-time report like a performance review from a boss I never hired, and I still didn't get a raise.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
