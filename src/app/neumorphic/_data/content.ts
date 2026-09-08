import type { CSSProperties } from "react";

export interface Feature {
  icon: string;
  title: string;
  text: string;
}

export interface Exam {
  name: string;
  desc: string;
  tag: string;
  special?: boolean;
  tagStyle?: CSSProperties;
}

export const features: Feature[] = [
  { icon: "◫", title: "Question extraction", text: "MCQs, MSQs, NAT, image questions — all debossed correctly." },
  { icon: "◎", title: "Marks & negatives", text: "+4 −1, +3 −0.33, sectional cut-offs auto-detected." },
  { icon: "⬙", title: "Instructions verbatim", text: "Original instruction pages kept, displayed inset before start." },
  { icon: "⚡", title: "Ready in 40s", text: "Upload at 10:00, attempt by 10:01. Soft loading, no stress." },
  { icon: "▦", title: "True palette", text: "Raised / pressed / lime states — no colour confusion." },
  { icon: "◈", title: "Analysis", text: "Soft cards show score, accuracy, time per question." },
];

export const exams: Exam[] = [
  { name: "JEE Mains", desc: "Physics/Chemistry/Maths • 90 Qs", tag: "12.5L / yr" },
  { name: "NEET UG", desc: "Botany-Zoology-PC • 200 Qs", tag: "20L / yr" },
  { name: "UPSC CSE", desc: "Prelims & Mains • GS/CSAT", tag: "Most detailed" },
  { name: "GATE", desc: "MCQ+MSQ+NAT • 30 papers", tag: "All branches" },
  { name: "UGC NET", desc: "Paper 1+2 • 82 subjects", tag: "No negative" },
  { name: "SSC CGL", desc: "Quant/Reasoning/GK • 60m", tag: "30L+ candidates" },
  { name: "Banking PO", desc: "SBI/IBPS • sectional", tag: "English/Hindi" },
  { name: "CAT • CUET • State", desc: "Any PDF works — try now.", tag: "Try →", special: true, tagStyle: {background:'var(--lime)', color:'var(--ink)', boxShadow:'none'} },
];
