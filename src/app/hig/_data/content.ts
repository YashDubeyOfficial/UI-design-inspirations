export interface StripPill {
  text: string;
  bold?: string;
  live?: boolean;
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
  { bold: "JEE", text: "Mains & Adv" },
  { bold: "NEET", text: "UG" },
  { live: true, text: "UPSC • CSE" },
  { text: "GATE • 30 papers" },
  { text: "SSC • Banking" },
  { text: "CAT • CUET" },
  { live: true, text: "Any PDF → Quiet mock" },
];

export const features: Feature[] = [
  { icon: "◫", title: "Finds every Q", text: "MCQ, MSQ, NAT, comprehension — SF-friendly hierarchy." },
  { icon: "◎", title: "Knows marking", text: "+4 −1, +3 −0.33 — rendered with quiet chips." },
  { icon: "⬙", title: "Instructions first", text: "Verbatim, scrollable, before Start — content, not chrome." },
  { icon: "⚡", title: "~39 seconds", text: "Upload 10:00, attempt 10:01 — no forms." },
  { icon: "▦", title: "Palette + keys", text: "Answered / marked / not visited — with 1-4 M N." },
  { icon: "◈", title: "Analysis after", text: "Score, accuracy, time/Q — airy cards, honest." },
];

export const expList: ExpItem[] = [
  { icon: "◷", title: "Real countdown.", text: "hits 00:00 → quietly auto-submits, like centre." },
  { icon: "▦", title: "Palette clarity.", text: "SF-weight distinction, not color noise." },
  { icon: "⇄", title: "Section deference.", text: "Content leads, controls follow." },
];

export const exams: Exam[] = [
  { name: "JEE Mains & Adv", desc: "PCM, NAT, paragraph • PYQs 2012→", meta: "12.5L / year" },
  { name: "NEET UG", desc: "200 Qs • Botany-Zoology-Phys-Chem", meta: "20L / year" },
  { name: "UPSC CSE", desc: "GS + CSAT • exact instruction scroll", meta: "Most detailed" },
  { name: "GATE", desc: "MCQ + MSQ + NAT • calc • 30 papers", meta: "65 Qs • 180m" },
  { name: "UGC NET", desc: "Paper 1+2 • 82 subjects • 3h", meta: "82 subjects" },
  { name: "SSC CGL", desc: "Quant • Reasoning • English • GK", meta: "30L+ candidates" },
  { name: "Banking PO", desc: "SBI • IBPS • sectional cutoffs", meta: "English & Hindi" },
  { name: "CAT • CUET • STATE", desc: "Any PDF — state TET, PCS, private series. Quietly.", meta: "Try now →", dark: true },
];
