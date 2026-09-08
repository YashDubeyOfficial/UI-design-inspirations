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
  { hot: true, text: "+ Any PDF → Bento" },
];

export const features: Feature[] = [
  { icon: "◫", title: "Boxes that parse", text: "MCQs, MSQs, NAT, comprehension, image Qs — boxed even when layout is chaos." },
  { icon: "◎", title: "Marking per box", text: "+4 −1, +3 −0.33, part-wise cut-offs — each compartment keeps its rule." },
  { icon: "⬙", title: "Instructions boxed verbatim", text: "Original instruction pages served exactly as in PDF before start." },
  { icon: "⚡", title: "Packed in 42 seconds", text: "Upload at 10:00, start boxing by 10:01. No manual typing." },
  { icon: "▦", title: "Palette bento", text: "Answered / marked / not visited with keys 1-4, M, N — tactile." },
  { icon: "◈", title: "Box analysis", text: "Score, accuracy, time per box and weak compartments to re-pack." },
];

export const compareOld: CompareItem[] = [
  { title: "Manual chaos.", text: "Copy 90 Qs, 360 options, set marks by hand." },
  { title: "Flat quiz.", text: "No boxes, no sections, no pressure." },
  { title: "Spilled marks.", text: "Wrong negatives, missed instructions." },
];

export const compareNew: CompareItem[] = [
  { title: "Boxed automatically.", text: "AI sorts — you just arrange." },
  { title: "Hall-ready.", text: "Timer, palette, sectional flow and auto-submit." },
  { title: "Exact portions.", text: "Every rule preserved per compartment." },
];

export const exams: Exam[] = [
  { name: "JEE Mains & Adv", tag: "90 • 180m", desc: "Physics • Chemistry • Maths with NAT & paragraph bento boxes.", meta: "12.5L aspirants" },
  { name: "NEET UG", tag: "200 • 200m", desc: "Botany • Zoology • Chemistry with sectional bento.", meta: "20L aspirants" },
  { name: "UPSC CSE", tag: "GS • CSAT", desc: "Prelims & Mains, comprehension sets, exact instruction screens.", meta: "Most detailed" },
  { name: "GATE", tag: "65 • 180m", desc: "MCQ + MSQ + NAT with virtual calculator bento.", meta: "30 papers" },
  { name: "UGC NET", tag: "Paper 1+2", desc: "Teaching & research aptitude, 82 subjects boxed.", meta: "82 subjects" },
  { name: "SSC CGL", tag: "100 • 60m", desc: "Quant, reasoning, English, GK — sectional timers.", meta: "30L+ candidates" },
  { name: "CAT • CUET • State PCS", tag: "Any PDF → Bento", desc: "Any bento you bring — if you have the PDF, we’ll compartmentalise it. Try a state TET now.", meta: "Try now →", featured: true },
  { name: "Banking PO/SO", tag: "SBI • IBPS", desc: "Prelims + Mains with sectional cut-offs boxed.", meta: "English & Hindi" },
];

export const testimonials: Testimonial[] = [
  { initial: "A", avatarStyle: {background:'var(--terracotta)'}, name: "Ananya • JEE 2025", meta: "Delhi • 97.2 %ile", quote: "“I had 8 years of PYQs as loose PDFs. Parakh boxed them into timed bento mocks — my speed jumped in 3 weeks. Palette feels like NTA.”", tag: "JEE • 42 bentos" },
  { initial: "R", avatarStyle: {background:'var(--sage)', color:'white'}, name: "Rohit • UPSC", meta: "Pune • 2nd attempt", quote: "“UPSC’s instructions and sectional quirks always broke other tools. Bento kept every rule in its compartment — perfect replication.”", tag: "UPSC • 31 bentos" },
  { initial: "S", avatarStyle: {background:'var(--ink)'}, name: "Sneha • UGC NET", meta: "Hyderabad • JRF", quote: "“Scanned images, not text — thought it’d fail. Parakh boxed 68 questions perfectly in under a minute. Bento just works.”", tag: "NET • 19 bentos" },
];

export const faqs: FaqItem[] = [
  { q: "Will it work with scanned PDFs?", a: "Yes. Vision + language models read scanned, photographed and messy PDFs. If a human can see it, the bento packs it." },
  { q: "Does it preserve marking?", a: "Every +4 −1, part-wise negative and sectional rule is detected and boxed per section. Palette respects it." },
  { q: "How fast is it?", a: "Average 42 seconds for 90Q. Upload at 10:00, attempt by 10:01. No typing." },
  { q: "Is the CBT really real?", a: "Countdown, auto-submit, palette, mark-for-review, sectional locks — built to NTA/TCS iON spec. Keys 1-4, M, N." },
];
