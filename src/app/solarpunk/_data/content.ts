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
  { custom: true, text: "+ Any PDF → Living mock" },
];

export const features: Feature[] = [
  { icon: "🌱", title: "Composts any paper", text: "MCQs, MSQs, NAT, comprehension, image Qs — even when numbering composts per section." },
  { icon: "☀️", title: "Solar marking", text: "+4 −1, +3 −0.33, part-wise, sectional — all photosynthesized correctly." },
  { icon: "📜", title: "Field guide instructions", text: "Original instructions kept verbatim, displayed like a forager’s guide before you enter." },
  { icon: "⚡", title: "42 seconds to canopy", text: "Plant at 10:00, harvest by 10:01. Soil does the work." },
  { icon: "🍃", title: "Seed palette", text: "Answered / marked / dormant with keys 1-4, M, N — tactile, earthy." },
  { icon: "📊", title: "Harvest analysis", text: "Score, accuracy, time/leaf, soil health per section — after you submit." },
];

export const exams: Exam[] = [
  { name: "JEE Mains & Adv", meta: "PCM • NAT • Para types • PYQs 2012→", tag: "90 Qs • 180m" },
  { name: "NEET UG", meta: "Botany-Zoology-Physics-Chemistry", tag: "200 Qs • 200m" },
  { name: "UPSC CSE", meta: "GS • CSAT • Comprehension groves", tag: "MOST ROOTED" },
  { name: "GATE", meta: "MCQ+MSQ+NAT + solar calc", tag: "30 papers" },
  { name: "UGC NET", meta: "Paper 1+2 • 82 subjects • 3h", tag: "No negative" },
  { name: "SSC CGL", meta: "Quant • Reasoning • GK • English", tag: "100 Qs • 60m" },
  { name: "Banking PO", meta: "SBI/IBPS • sectional monsoons", tag: "ENG/HIN" },
  { name: "CAT • CUET • STATE", meta: "Any PDF — plant it now! 🌿", tag: "TRY →", special: true },
];
