export interface StripPill {
  text: string;
  bold?: string;
  live?: boolean;
  hot?: boolean;
}

export interface Feature {
  icon: string;
  title: string;
  text: string;
}

export interface CompareItem {
  title: string;
  text: string;
}

export interface ExpPoint {
  icon: string;
  title: string;
  text: string;
}

export interface Exam {
  name: string;
  desc: string;
  tag: string;
  dark?: boolean;
}

export const stripPills: StripPill[] = [
  { bold: "JEE", text: "Mains & Adv" },
  { bold: "NEET", text: "UG" },
  { live: true, text: "UPSC • CSE" },
  { text: "GATE • 30 papers" },
  { text: "SSC • Banking" },
  { text: "CAT • CUET" },
  { hot: true, text: "ANY PDF → FLAT MOCK" },
];

export const features: Feature[] = [
  { icon: "▣", title: "Finds every Q type", text: "MCQ, MSQ, NAT, comprehension — even when numbering resets per section, we snap to a flat grid." },
  { icon: "◈", title: "Marks & negatives", text: "+4 −1, +3 −0.33, part-wise. Detected and painted as flat pills." },
  { icon: "≡", title: "Instructions verbatim", text: "Original sheets shown exactly, before “Start” — flat, scrollable, honest." },
  { icon: "⚡", title: "36 seconds", text: "Upload at 10:00, attempt by 10:01. No typing." },
  { icon: "▦", title: "Hard palette", text: "Answered / marked / not visited — solid colors, keyboard 1-4 M N." },
  { icon: "✔", title: "Instant analysis", text: "Score, accuracy, time/Q, section chart — flat cards, no gradients." },
];

export const compareOld: CompareItem[] = [
  { title: "Hours of copy-paste.", text: "90Qs × 4 options." },
  { title: "Quiz feel.", text: "No palette, no timer fear." },
  { title: "Errors.", text: "Wrong negatives, broken numbers." },
];

export const compareNew: CompareItem[] = [
  { title: "Drop and done.", text: "Solid parse in 36s." },
  { title: "Real temperament.", text: "Timer, palette, auto-submit." },
  { title: "Exam-accurate.", text: "Every rule kept flat." },
];

export const expPoints: ExpPoint[] = [
  { icon: "◷", title: "Real countdown.", text: "hits 00:00 → auto-submit, no mercy." },
  { icon: "▦", title: "Hard palette.", text: "Solid fills, not pastels — glanceable." },
  { icon: "⇄", title: "Section solid.", text: "Jump with flat tabs, obey locks." },
];

export const exams: Exam[] = [
  { name: "JEE Mains & Adv", desc: "PCM, NAT, paragraph. PYQs 2012→. 90Qs • 180m.", tag: "12.5L / yr" },
  { name: "NEET UG", desc: "Botany-Zoology-Phys-Chem. 200Qs • 200m • +4 −1.", tag: "20L / yr" },
  { name: "UPSC CSE", desc: "GS + CSAT, comprehension sets, exact sheets.", tag: "MOST DETAILED" },
  { name: "GATE", desc: "MCQ + MSQ + NAT • virtual calc • 30 papers.", tag: "65 Qs • 180m" },
  { name: "UGC NET", desc: "Paper 1+2 • 82 subjects • 3h • no negative.", tag: "TEACHING" },
  { name: "SSC CGL", desc: "Quant, reasoning, English, GK • 60m.", tag: "30L+ candidates" },
  { name: "Banking PO", desc: "SBI • IBPS • sectional cutoffs • speed.", tag: "ENG • HIN" },
  { name: "CAT • CUET • STATE", desc: "Any scan, any state TET/PCS. Flat makes it exam.", tag: "TRY NOW →", dark: true },
];
