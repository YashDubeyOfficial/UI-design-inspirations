import type { CSSProperties } from "react";

export interface Feature {
  icon: string;
  iconStyle: CSSProperties;
  title: string;
  text: string;
}

export interface Exam {
  name: string;
  meta: string;
  tag: string;
  cardStyle?: CSSProperties;
  metaStyle?: CSSProperties;
  tagStyle?: CSSProperties;
}

export const features: Feature[] = [
  { icon: "◫", iconStyle: {background:'linear-gradient(180deg, #FFF1C7, #FFE9A8)'}, title: "Question extraction", text: "MCQs, MSQs, NAT, image questions — lifted from paper grain correctly." },
  { icon: "◎", iconStyle: {background:'linear-gradient(180deg, #DCFCE7, #86EFAC)'}, title: "Marks & negatives", text: "+4 −1, sectional cut-offs auto-stamped by ledger." },
  { icon: "⬙", iconStyle: {background:'linear-gradient(180deg, #E0E7FF, #C7D2FE)'}, title: "Instructions verbatim", text: "Original instruction sheet placed on desk before start." },
  { icon: "⚡", iconStyle: {background:'linear-gradient(180deg, #FFE4E6, #FECACA)'}, title: "Ready in 40s", text: "Paper to monitor in under a minute — no typing." },
  { icon: "▦", iconStyle: {background:'linear-gradient(180deg, #FEF3C7, #FDE68A)'}, title: "True palette", text: "Brass pins on paper — answered / marked / not visited." },
  { icon: "◈", iconStyle: {background:'linear-gradient(180deg, #E0F2FE, #BAE6FD)'}, title: "Analysis", text: "Desk report card: score, accuracy, time per question." },
];

export const exams: Exam[] = [
  { name: "JEE Mains", meta: "90 Qs • 180m • 12.5L/yr", tag: "Physics/Chem/Maths" },
  { name: "NEET UG", meta: "200 Qs • 200m • 20L/yr", tag: "Botany/Zoology" },
  { name: "UPSC CSE", meta: "GS • CSAT • Detailed", tag: "Most detailed" },
  { name: "GATE", meta: "65 Qs • 30 papers", tag: "All branches" },
  { name: "UGC NET", meta: "Paper 1+2 • 82 subjects", tag: "No negative" },
  { name: "SSC CGL", meta: "100 Qs • 60m • 30L+", tag: "Quant/GK" },
  { name: "Banking", meta: "SBI/IBPS • sectional", tag: "English/Hindi" },
  { name: "CAT • CUET • State", meta: "Any PDF — try now.", tag: "Try →", cardStyle: {background:'linear-gradient(180deg, #FFD88A, #C9A86A)', color:'#1A1208', borderColor:'#8C6A2E'}, metaStyle: {color:'#5A3E1A'}, tagStyle: {background:'#1A1208', color:'#FFD88A'} },
];
