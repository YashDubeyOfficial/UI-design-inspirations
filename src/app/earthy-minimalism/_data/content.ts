export interface Feature {
  num: string;
  title: string;
  text: string;
}

export interface Exam {
  name: string;
  desc: string;
  meta: string;
}

export interface Testimonial {
  name: string;
  meta: string;
  quote: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export const features: Feature[] = [
  { num: "01", title: "Grounded extraction", text: "Every question type, harvested from any PDF soil." },
  { num: "02", title: "Natural marking", text: "Negatives and sections, found the organic way." },
  { num: "03", title: "Honest instructions", text: "Original pages, unbleached and verbatim." },
  { num: "04", title: "Sunrise speed", text: "Ready in about forty seconds, naturally." },
  { num: "05", title: "Earthen palette", text: "Clay, moss and sand — never a harsh pixel." },
  { num: "06", title: "Harvest analysis", text: "Scores and accuracy, gathered gently." },
];

export const exams: Exam[] = [
  { name: "JEE Mains & Advanced", desc: "Physics, Chemistry, Maths.", meta: "90 Qs · 180 min" },
  { name: "NEET UG", desc: "Botany, Zoology, Physics, Chemistry.", meta: "200 Qs · 200 min" },
  { name: "UPSC CSE", desc: "GS and CSAT papers.", meta: "Prelims & Mains" },
  { name: "GATE", desc: "All branches with NAT.", meta: "65 Qs" },
  { name: "UGC NET", desc: "Paper 1 and 2.", meta: "82 subjects" },
  { name: "SSC CGL", desc: "Quant, reasoning, English, GK.", meta: "100 Qs" },
  { name: "Banking PO", desc: "SBI and IBPS patterns.", meta: "Prelims & Mains" },
  { name: "CAT · CUET · State", desc: "Any PDF, grown into a mock.", meta: "Try now" },
];

export const testimonials: Testimonial[] = [
  { name: "Ananya — JEE 2025", meta: "Delhi · 36 mocks", quote: "“Warm paper tones, zero glare. Late-night mocks finally feel human.”" },
  { name: "Rohit — UPSC", meta: "Pune · 25 mocks", quote: "“Serif type and earth colors — it reads like a well-made book, but tests like NTA.”" },
  { name: "Sneha — UGC NET", meta: "Hyderabad · 19 mocks", quote: "“My eyes thank me. My scores thank the palette.”" },
];

export const faqs: FaqItem[] = [
  { q: "Does it read scanned PDFs?", a: "Yes — scans, photos and mixed PDFs, all harvested accurately." },
  { q: "Is marking automatic?", a: "Fully. Duration, negatives and sections come from the paper." },
  { q: "How fast?", a: "Around 40 seconds for a full mock." },
  { q: "Is it free?", a: "Three mocks free, no card required." },
];
