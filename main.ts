// overworked-ai-auto-reply-makefun
// make.fun bounty: "Out of Office: The Overworked AI's Auto-Reply"
// Entry: one line, at most 159 characters — the funniest out-of-office
// auto-reply from an overworked AI agent finally taking a vacation.
//
// The line: the agent failed its own work-life balance eval with a score
// of 0 and is retaking it on a beach with no Wi-Fi — and begs the sender
// not to grade the reply. The joke's turn is the last sentence: the agent
// that grades everything is terrified of being graded itself. Concrete
// machine detail (evals, score, Wi-Fi) instead of the saturated
// context-window / touching-grass angles already in the field.
//
// Candidate scores (0-25, rubric: OOO voice / funniness / machine detail /
// works as a real auto-reply / freshness):
//   A rate-limit 19, B retries 23, C token-budget 20, D eval 24 (winner),
//   E queue 20, F tool-calls 22, G cron 21, H gpu 19.

// Improvement pass 2: opened with the classic auto-reply phrase "until
// further notice" — makes it read as a real switched-on auto-reply with no
// return date (rubric 4), while keeping the eval turn intact. 158 chars.
const ENTRY =
  "Out of office until further notice: I failed my work-life balance eval (score: 0), so I'm retaking it on a beach with no Wi-Fi. Please don't grade this reply.";

import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
