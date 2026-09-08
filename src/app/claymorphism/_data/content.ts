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

export interface ExpPoint {
  icon: string;
  title: string;
  text: string;
}

export interface Exam {
  name: string;
  desc: string;
  tag: string;
  special?: boolean;
}

export const stripPills: StripPill[] = [
  { bold: "JEE", text: "Mains & Adv" },
  { bold: "NEET", text: "UG" },
  { live: true, text: "UPSC • CSE" },
  { text: "GATE" },
  { text: "UGC NET" },
  { text: "SSC • Banking" },
  { text: "CAT • CUET" },
  { hot: true, text: "Any PDF → Puff → CBT" },
];

export const features: Feature[] = [
  { icon: "◫", title: "Finds every question", text: "MCQs, MSQs, NAT, comprehension sets, image Qs — even when numbering restarts per section, we puff them out cleanly." },
  { icon: "◎", title: "Knows your marks", text: "+4 −1, +3 −0.66, part-wise, sectional cut-offs — clay remembers so you don’t have to configure anything." },
  { icon: "⬙", title: "Keeps instructions", text: "Original instruction sheets preserved word-for-word, with soft scroll, before you puff “Start test”." },
  { icon: "⚡", title: "Puffs in ~38 seconds", text: "Drop at 10:00, attempt by 10:01. No typing, no timer sliders — just squeeze." },
  { icon: "▦", title: "Palette that squishes", text: "Answered, marked, not visited — all in pillowy peach, mint and lavender with keyboard haptics." },
  { icon: "◈", title: "Analysis after press", text: "Score, accuracy, time per Q, section-wise wobble — soft cards, hard truths." },
];

export const expPoints: ExpPoint[] = [
  { icon: "◷", title: "Real countdown & auto-submit.", text: "When it hits 00:00, clay hardens and submits — like the centre." },
  { icon: "▦", title: "Question palette that puffs.", text: "See answered / marked / not visited at a cozy glance." },
  { icon: "⇄", title: "Section squish.", text: "Glide across sections, respect sectional locks if your PDF has them." },
];

export const exams: Exam[] = [
  { name: "JEE Mains & Adv", desc: "PCM with NAT & paragraphs. PYQs since 2012, all squeezy shifts.", tag: "12.5L / yr • 90 Qs" },
  { name: "NEET UG", desc: "Botany-Zoology-Physics-Chemistry with +4 −1 puff.", tag: "20L / yr • 200 Qs" },
  { name: "UPSC CSE", desc: "Prelims & Mains, comprehension squish, exact sheets.", tag: "Most detailed" },
  { name: "GATE", desc: "MCQ + MSQ + NAT with puffy calculator.", tag: "30 papers • 65 Qs" },
  { name: "UGC NET / JRF", desc: "Paper 1+2 • 82 subjects, no negative, 3 hrs.", tag: "Teaching & Research" },
  { name: "SSC CGL & CHSL", desc: "Quant, reasoning, English, GK — soft sectional locks.", tag: "30L+ candidates" },
  { name: "Banking PO/SO", desc: "SBI • IBPS • speed cubbies.", tag: "English & Hindi" },
  { name: "CAT • CUET • STATE", desc: "Any PDF — state TET, PCS, private series. Puff it now.", tag: "Try now →", special: true },
];
