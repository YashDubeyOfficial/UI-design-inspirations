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
  { num: "01", title: "Gentle extraction", text: "Every question type lifted softly from any PDF." },
  { num: "02", title: "Kind marking", text: "Negatives and sections found without any setup." },
  { num: "03", title: "Warm instructions", text: "Original pages shown exactly, in soft type." },
  { num: "04", title: "Unhurried speed", text: "Ready in under a minute, calmly." },
  { num: "05", title: "Puffy palette", text: "Answered, marked, unvisited — soft and clear." },
  { num: "06", title: "Cozy analysis", text: "Scores and accuracy in warm, round cards." },
];

export const exams: Exam[] = [
  { name: "JEE Mains & Advanced", desc: "Physics, Chemistry, Maths.", meta: "90 Qs · 180 min" },
  { name: "NEET UG", desc: "Botany, Zoology, Physics, Chemistry.", meta: "200 Qs · 200 min" },
  { name: "UPSC CSE", desc: "GS and CSAT papers.", meta: "Prelims & Mains" },
  { name: "GATE", desc: "All branches with NAT.", meta: "65 Qs" },
  { name: "UGC NET", desc: "Paper 1 and 2.", meta: "82 subjects" },
  { name: "SSC CGL", desc: "Quant, reasoning, English, GK.", meta: "100 Qs" },
  { name: "Banking PO", desc: "SBI and IBPS patterns.", meta: "Prelims & Mains" },
  { name: "CAT · CUET · State", desc: "Any PDF becomes a soft mock.", meta: "Try now" },
];

export const testimonials: Testimonial[] = [
  { name: "Ananya — JEE 2025", meta: "Delhi · 38 mocks", quote: "“It feels like studying on a warm desk. My late-night mocks finally feel kind.”" },
  { name: "Rohit — UPSC", meta: "Pune · 27 mocks", quote: "“Soft on the eyes, strict on the syllabus. The palette is a joy.”" },
  { name: "Sneha — UGC NET", meta: "Hyderabad · 21 mocks", quote: "“Even scanned PDFs come out clean and readable. Lovely.”" },
];

export const faqs: FaqItem[] = [
  { q: "Does it handle scanned PDFs?", a: "Yes — scans, photos and mixed PDFs all parse cleanly." },
  { q: "Is marking automatic?", a: "Completely. Duration, negatives and sections come from the paper itself." },
  { q: "How fast is it?", a: "About 40 seconds for a full 90-question mock." },
  { q: "Is it free?", a: "Three mocks free, no card needed." },
];
