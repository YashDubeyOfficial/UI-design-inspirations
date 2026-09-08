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
  { num: "01", title: "Whisper extraction", text: "All question types, heard the first time." },
  { num: "02", title: "Faint marking", text: "Negatives noted without raising volume." },
  { num: "03", title: "Low instructions", text: "Original pages, set small and exact." },
  { num: "04", title: "Hushed speed", text: "Ready in forty quiet seconds." },
  { num: "05", title: "Muted palette", text: "Three near-silent states." },
  { num: "06", title: "Soft analysis", text: "Scores in a murmur, never a shout." },
];

export const exams: Exam[] = [
  { name: "JEE Mains & Advanced", desc: "Physics, Chemistry, Maths.", meta: "90 Qs · 180 min" },
  { name: "NEET UG", desc: "Botany, Zoology, Physics, Chemistry.", meta: "200 Qs · 200 min" },
  { name: "UPSC CSE", desc: "GS and CSAT papers.", meta: "Prelims & Mains" },
  { name: "GATE", desc: "All branches with NAT.", meta: "65 Qs" },
  { name: "UGC NET", desc: "Paper 1 and 2.", meta: "82 subjects" },
  { name: "SSC CGL", desc: "Quant, reasoning, English, GK.", meta: "100 Qs" },
  { name: "Banking PO", desc: "SBI and IBPS patterns.", meta: "Prelims & Mains" },
  { name: "CAT · CUET · State", desc: "Any PDF, quietly mocked.", meta: "Try now" },
];

export const testimonials: Testimonial[] = [
  { name: "Ananya — JEE 2025", meta: "Delhi · 35 mocks", quote: "“It barely speaks, and yet everything is exactly where I look.”" },
  { name: "Rohit — UPSC", meta: "Pune · 24 mocks", quote: "“The quietest exam screen I have used. My mind stays on the question.”" },
  { name: "Sneha — UGC NET", meta: "Hyderabad · 17 mocks", quote: "“Low contrast, high clarity. A strange and wonderful combination.”" },
];

export const faqs: FaqItem[] = [
  { q: "Scanned PDFs?", a: "Yes, quietly and accurately." },
  { q: "Marking automatic?", a: "Entirely. The paper provides everything." },
  { q: "How fast?", a: "About forty seconds." },
  { q: "Free?", a: "Three mocks free." },
];
