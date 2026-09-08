export interface StripPill {
  text: string;
  bold?: string;
  live?: boolean;
  custom?: boolean;
}

export interface Feature {
  icon: string;
  title: string;
  text: string;
}

export interface Exam {
  name: string;
  meta: string;
  tag: string;
  special?: boolean;
}

export const stripPills: StripPill[] = [
  { bold: "JEE", text: "Mains & Adv" },
  { bold: "NEET", text: "UG" },
  { live: true, text: "UPSC • CSE" },
  { text: "GATE" },
  { text: "SSC CGL" },
  { text: "CUET • CAT" },
  { custom: true, text: "+ Any PDF → Bubble mock" },
];

export const features: Feature[] = [
  { icon: "◫", title: "Reads the wet bits", text: "MCQs, MSQs, NAT, comprehension, image diagrams — even when numbering resets per section, we see through the water." },
  { icon: "◎", title: "Marks & bubbles", text: "+4 −1, +3 −0.33, part-wise, sectional cut-offs — all detected and reflected in the aqua hall." },
  { icon: "⬙", title: "Instructions, soaked verbatim", text: "The original instruction pages appear exactly as in your PDF, glossy but faithful." },
  { icon: "⚡", title: "~40 seconds to pool", text: "Upload at 10:00, dive by 10:01. The water does the heavy lifting while you breathe." },
  { icon: "▦", title: "Palette pops", text: "Answered, not answered, marked-for-review with 1-4, M, N keys — bubbly but tactile." },
  { icon: "◈", title: "Analysis in sunlight", text: "After submit: score, accuracy, time per Q, section strength — all in calm, watery cards." },
];

export const exams: Exam[] = [
  { name: "JEE Mains & Adv", meta: "PCM with NAT & paragraph. PYQs back to 2012.", tag: "90 Qs • 180m" },
  { name: "NEET UG", meta: "Botany-Zoology-Physics-Chem. +4 −1 bubbles.", tag: "200 Qs • 200m" },
  { name: "UPSC CSE", meta: "Prelims & Mains, comprehension sets.", tag: "MOST GLOSSY" },
  { name: "GATE", meta: "MCQ+MSQ+NAT with calc.", tag: "30 papers" },
  { name: "UGC NET", meta: "Paper 1+2, 3 hrs, no negative.", tag: "82 subjects" },
  { name: "SSC CGL", meta: "100 Qs • 60m • Quant/Reasoning", tag: "sectional timer" },
  { name: "Banking PO", meta: "SBI/IBPS • sectional cut-offs", tag: "ENG/HIN" },
  { name: "CAT • CUET • STATE", meta: "Any PDF — pop it now! 💧", tag: "TRY →", special: true },
];
