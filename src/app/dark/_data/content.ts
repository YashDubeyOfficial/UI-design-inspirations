import type { CSSProperties } from "react";

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

export interface Exam {
  name: string;
  tag: string;
  desc: string;
  meta: string;
  featured?: boolean;
}

export interface Testimonial {
  initial: string;
  avatarStyle: CSSProperties;
  name: string;
  meta: string;
  quote: string;
  tag: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export const stripPills: StripPill[] = [
  { bold: "JEE", text: "Mains" },
  { bold: "NEET", text: "UG" },
  { live: true, text: "UPSC • CSE" },
  { text: "GATE" },
  { text: "SSC CGL" },
  { text: "Banking" },
  { text: "CUET • CAT" },
  { hot: true, text: "+ Any PDF → dark mock" },
];

export const features: Feature[] = [
  { icon: "◫", title: "Dark extraction", text: "MCQs, MSQs, NAT, comprehension, image Qs — caught even in low-light scans." },
  { icon: "◎", title: "Lime marking", text: "+4 −1, +3 −0.33, sectional rules — all glowing correctly." },
  { icon: "⬙", title: "Instructions in dark", text: "Original pages shown verbatim on OLED before you enter." },
  { icon: "⚡", title: "42 seconds flat", text: "Upload at 02:00, attempt by 02:01. No manual setup." },
  { icon: "▦", title: "Palette after dark", text: "Answered / marked / not visited with keys 1-4, M, N — tactile." },
  { icon: "◈", title: "Midnight analytics", text: "Score, accuracy, time/Q, section heatmap — soft lime, no blast." },
];

export const compareOld: CompareItem[] = [
  { title: "Eye burn.", text: "White quiz UI at 1AM — headache." },
  { title: "Manual typing.", text: "Copy 90 Qs by hand." },
  { title: "Fake feel.", text: "No timer weight, no hall." },
];

export const compareNew: CompareItem[] = [
  { title: "OLED calm.", text: "True black, lime glow — 2AM friendly." },
  { title: "Upload done.", text: "AI does structuring — you practice." },
  { title: "Hall pressure.", text: "Timer, palette, auto-submit intact." },
];

export const exams: Exam[] = [
  { name: "JEE Mains", tag: "90 • 180m", desc: "Physics • Chemistry • Maths with NAT & para sets.", meta: "12.5L runners" },
  { name: "NEET UG", tag: "200 • 200m", desc: "Botany • Zoology • Physics • Chemistry.", meta: "20L aspirants" },
  { name: "UPSC CSE", tag: "GS • CSAT", desc: "Prelims & Mains, comprehension, exact screens.", meta: "Most detailed" },
  { name: "GATE", tag: "65 • 180m", desc: "MCQ + MSQ + NAT with virtual calc dark.", meta: "30 papers" },
  { name: "UGC NET", tag: "Paper 1+2", desc: "82 subjects, 3h, no negative — dark edition.", meta: "82 subjects" },
  { name: "SSC CGL", tag: "100 • 60m", desc: "Quant, reasoning, English, GK — sectional.", meta: "30L+ candidates" },
  { name: "CAT • CUET • State", tag: "Any PDF →", desc: "Any PDF — dark-mock it now. Your state TET, your rules.", meta: "Try →", featured: true },
  { name: "Banking PO", tag: "SBI • IBPS", desc: "Prelims + Mains with sectional cut-offs dark.", meta: "Eng / Hin" },
];

export const testimonials: Testimonial[] = [
  { initial: "A", avatarStyle: {background:'var(--lime)', color:'#0A0A0F'}, name: "Ananya • JEE 2025", meta: "Delhi • 97.2 %ile", quote: "“Dark mode saved my eyes. 8 years of PYQs became OLED mocks — same NTA pressure, no glare. Speed up in 3 weeks.”", tag: "JEE • 42 dark mocks" },
  { initial: "R", avatarStyle: {background:'white', color:'#0A0A0F'}, name: "Rohit • UPSC", meta: "Pune • 2nd attempt", quote: "“UPSC PDFs are brutal scans. Dark AI caught every instruction. First tool that respects the paper after midnight.”", tag: "UPSC • 31 dark mocks" },
  { initial: "S", avatarStyle: {background:'var(--panel2)', border:'1px solid var(--line)', color:'white'}, name: "Sneha • UGC NET", meta: "Hyderabad • JRF", quote: "“Scanned images, not text — 68 questions extracted in dark, perfectly. No white flash before exam.”", tag: "NET • 19 dark mocks" },
];

export const faqs: FaqItem[] = [
  { q: "Will it work with scanned PDFs in dark?", a: "Yes. Vision + language models read scanned, photographed and mixed PDFs on true black — even handwritten noise. If you can read it, we can." },
  { q: "Is dark mode just an invert?", a: "No. Built OLED-first: true #0A0A0F, dark cards #14141A, subtle 8% borders, lime glows. Not a light theme inverted." },
  { q: "Does marking stay accurate?", a: "+4 −1, sectional cut-offs, part-wise marking — all detected. Timer and palette glow lime, but rules stay exact." },
  { q: "How fast?", a: "~42 seconds for 90Q. Upload at 01:00, attempt by 01:01. No card for first 3." },
];
