export interface StripPill {
  text: string;
  primary?: boolean;
}

export interface Feature {
  icon: string;
  title: string;
  text: string;
}

export interface ExpItem {
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
  { text: "JEE • Mains", primary: true },
  { text: "NEET • UG" },
  { text: "UPSC • CSE", primary: true },
  { text: "GATE • 30 papers" },
  { text: "SSC • Banking" },
  { text: "CAT • CUET" },
  { text: "Any PDF → M3 mock", primary: true },
];

export const features: Feature[] = [
  { icon: "◫", title: "Finds every Q type", text: "MCQ, MSQ, NAT, comprehension — chips for each, correct elevation." },
  { icon: "◎", title: "Marks & negatives", text: "+4 −1, +3 −0.33 — tonal chips, always visible." },
  { icon: "⬙", title: "Instructions sheet", text: "Bottom sheet at 3dp, verbatim scroll before Start." },
  { icon: "⚡", title: "~40 seconds", text: "Surface → elevated → hall. No manual steps." },
  { icon: "▦", title: "Palette + segmented", text: "State layers for answered/marked. Keys 1-4 M N." },
  { icon: "◈", title: "Analysis after", text: "Cards at 1dp, FAB at 3dp — clear hierarchy." },
];

export const expList: ExpItem[] = [
  { icon: "◷", title: "Real countdown.", text: "FAB elevates at 00:00 and submits — like centre." },
  { icon: "▦", title: "Palette elevation.", text: "1dp resting, 2dp pressed — read at glance." },
  { icon: "⇄", title: "Section motion.", text: "Shared-axis transition between sections." },
];

export const exams: Exam[] = [
  { name: "JEE Mains & Adv", desc: "PCM, NAT, paragraph • PYQs 2012→", meta: "12.5L / year" },
  { name: "NEET UG", desc: "200 Qs • Botany-Zoology-Phys-Chem", meta: "20L / year" },
  { name: "UPSC CSE", desc: "GS + CSAT • comprehension sheets", meta: "Most detailed" },
  { name: "GATE", desc: "MCQ + MSQ + NAT • calc • 30 papers", meta: "65 Qs • 180m" },
  { name: "UGC NET", desc: "Paper 1+2 • 82 subjects • 3h", meta: "82 subjects" },
  { name: "SSC CGL", desc: "Quant • Reasoning • English • GK", meta: "30L+ candidates" },
  { name: "Banking PO", desc: "SBI • IBPS • sectional cutoffs", meta: "English & Hindi" },
  { name: "CAT • CUET • STATE", desc: "Any PDF — state TET, PCS, private series.", meta: "Try now →", dark: true },
];
