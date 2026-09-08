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
  meta: string;
  dark?: boolean;
}

export const stripPills: StripPill[] = [
  { bold: "JEE", text: "90 Qs • 180m" },
  { bold: "NEET", text: "200 Qs" },
  { live: true, text: "UPSC • CSE" },
  { text: "GATE • 65 Qs" },
  { text: "SSC • Banking" },
  { text: "CAT • CUET" },
  { hot: true, text: "Any PDF → Soft Mock" },
];

export const features: Feature[] = [
  { icon: "▣", title: "Reads every type", text: "MCQ, MSQ, NAT, comprehension — numbering restarts? We still align." },
  { icon: "◎", title: "Knows marking", text: "+4 −1, +3 −0.33, sectional — all parsed with gentle pills." },
  { icon: "≡", title: "Instructions kept", text: "Original pages, soft scroll, before Start — exactly like PDF." },
  { icon: "⚡", title: "38 seconds", text: "Upload 10:00, start 10:01. No typing." },
  { icon: "▦", title: "Soft palette", text: "Rounded, shadowed, glanceable. Keys 1-4 M N." },
  { icon: "✔", title: "Calm analysis", text: "Score, accuracy, time/Q — soft cards after submit." },
];

export const expPoints: ExpPoint[] = [
  { icon: "◷", title: "Real countdown.", text: "00:00 auto-submits, softly but firmly." },
  { icon: "▦", title: "Soft palette.", text: "Shadows separate answered / marked at a glance." },
  { icon: "⇄", title: "Section glide.", text: "Tabs lift on hover, lock when needed." },
];

export const exams: Exam[] = [
  { name: "JEE Mains & Adv", desc: "PCM, NAT, paragraph • PYQs 2012→", meta: "12.5L / year" },
  { name: "NEET UG", desc: "200 Qs • Botany-Zoology-Phys-Chem", meta: "20L / year" },
  { name: "UPSC CSE", desc: "GS + CSAT • exact instruction scroll", meta: "Most detailed" },
  { name: "GATE", desc: "MCQ + MSQ + NAT • calc • 30 papers", meta: "65 Qs • 180m" },
  { name: "UGC NET", desc: "Paper 1+2 • 82 subjects • 3h", meta: "Teaching & Res." },
  { name: "SSC CGL", desc: "Quant • Reasoning • English • GK", meta: "30L+ candidates" },
  { name: "Banking PO", desc: "SBI • IBPS • sectional cutoffs", meta: "English & Hindi" },
  { name: "CAT • CUET • STATE", desc: "Any scan, any state. Soft makes it exam.", meta: "Try now →", dark: true },
];
