export interface StripPill {
  text: string;
  bold?: string;
  live?: boolean;
  muted?: boolean;
}

export interface CompareItem {
  title: string;
  text: string;
}

export interface Feature {
  icon: string;
  title: string;
  text: string;
}

export interface Exam {
  name: string;
  desc: string;
  meta: string;
  dark?: boolean;
}

export const stripPills: StripPill[] = [
  { bold: "JEE", text: "Mains & Adv" },
  { bold: "NEET", text: "UG" },
  { live: true, text: "CAT • 3 sections" },
  { text: "UPSC • CSE" },
  { text: "GATE" },
  { text: "SSC CGL" },
  { text: "CUET" },
  { muted: true, text: "+ Any PDF → Aurora" },
];

export const compareOld: CompareItem[] = [
  { title: "Hours of manual typing.", text: "66 Qs × 4 options = an evening lost, with typos." },
  { title: "No hall feel.", text: "No sections, no palette, no timer fear — false confidence." },
  { title: "Broken rules.", text: "Wrong negatives, missed instructions, zero section locks." },
];

export const compareNew: CompareItem[] = [
  { title: "Drop and glow.", text: "Aurora AI reads the paper while you watch the bands move — 41 seconds." },
  { title: "Real temperament.", text: "Countdown, palette, mark-for-review, sectional flow, auto-submit." },
  { title: "Exam-accurate.", text: "Every rule lifted exactly as your PDF prints it." },
];

export const features: Feature[] = [
  { icon: "◫", title: "Reads every format", text: "MCQs, MSQs, NAT, comprehension, image Qs — even when numbering restarts, aurora tracks it." },
  { icon: "◎", title: "Marks & section locks", text: "+4 −1, +3 −0.66, sectional timers, cut-offs — all detected at aurora speed." },
  { icon: "⬙", title: "Instructions stay true", text: "Original instruction pages appear exactly as in PDF, dimmed but faithful." },
  { icon: "⚡", title: "~41 seconds to hall", text: "Upload at 10:00, attempt by 10:01. Lights do the lifting." },
  { icon: "▦", title: "Palette & keys", text: "Answered, marked, not visited with 1-4, M, N — all with aurora haptics." },
  { icon: "◈", title: "Analysis after dark", text: "Score, accuracy, time per Q, section strength — in calm, after-glow cards." },
];

export const exams: Exam[] = [
  { name: "JEE Mains & Adv", desc: "PCM with NAT & paragraphs. PYQs back to 2012, all slots.", meta: "12.5L / year • 90 Qs" },
  { name: "NEET UG", desc: "Botany-Zoology-Physics-Chemistry with +4 −1 glow.", meta: "20L / year • 200 Qs" },
  { name: "UPSC CSE", desc: "Prelims & Mains, comprehension sets, exact screens.", meta: "Most detailed" },
  { name: "GATE", desc: "MCQ + MSQ + NAT with virtual calc, 30 papers.", meta: "All branches" },
  { name: "CAT • XAT • SNAP", desc: "VARC • DILR • QA with aurora section flow.", meta: "120 mins • 66 Qs" },
  { name: "UGC NET / JRF", desc: "Paper 1+2 • 82 subjects, no negative, 3 hrs.", meta: "Teaching & research" },
  { name: "SSC CGL & CHSL", desc: "Quant, reasoning, English, GK — aurora sectional.", meta: "30L+ candidates" },
  { name: "CUET • Banking • State", desc: "Any PDF — state PCS, TET, private series. Drop it now.", meta: "Try now →", dark: true },
];
