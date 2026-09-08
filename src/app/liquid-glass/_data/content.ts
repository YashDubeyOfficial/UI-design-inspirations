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
  { num: "01", title: "Refractive extraction", text: "Every question type, bent into focus through liquid glass." },
  { num: "02", title: "Specular marking", text: "Negatives catch the light — impossible to misread." },
  { num: "03", title: "Frosted instructions", text: "Original pages behind a gentle blur, verbatim." },
  { num: "04", title: "Forty fluid seconds", text: "From upload to floating hall in under a minute." },
  { num: "05", title: "Floating palette", text: "Answered, marked, unvisited — hovering sheets." },
  { num: "06", title: "Crystal analysis", text: "Scores refracted into clean, glowing cards." },
];

export const exams: Exam[] = [
  { name: "JEE Mains & Advanced", desc: "Physics, Chemistry, Maths.", meta: "90 Qs · 180 min" },
  { name: "NEET UG", desc: "Botany, Zoology, Physics, Chemistry.", meta: "200 Qs · 200 min" },
  { name: "UPSC CSE", desc: "GS and CSAT papers.", meta: "Prelims & Mains" },
  { name: "GATE", desc: "All branches with NAT.", meta: "65 Qs" },
  { name: "UGC NET", desc: "Paper 1 and 2.", meta: "82 subjects" },
  { name: "SSC CGL", desc: "Quant, reasoning, English, GK.", meta: "100 Qs" },
  { name: "Banking PO", desc: "SBI and IBPS patterns.", meta: "Prelims & Mains" },
  { name: "CAT · CUET · State", desc: "Any PDF, floating in glass.", meta: "Try now" },
];

export const testimonials: Testimonial[] = [
  { name: "Ananya — JEE 2025", meta: "Delhi · 39 mocks", quote: "“It looks like the future and behaves like the centre. The frosted timer is gorgeous.”" },
  { name: "Rohit — UPSC", meta: "Pune · 27 mocks", quote: "“Depth without weight. Everything floats exactly where my eyes expect.”" },
  { name: "Sneha — UGC NET", meta: "Hyderabad · 21 mocks", quote: "“Glass that never gets in the way. My focus has never been clearer.”" },
];

export const faqs: FaqItem[] = [
  { q: "Scanned PDFs?", a: "Yes — the glass clarifies scans, photos and mixed sources." },
  { q: "Marking automatic?", a: "Fully. Duration, negatives and sections refract into view." },
  { q: "How fast?", a: "About forty seconds per full mock." },
  { q: "Free?", a: "Three mocks free, no card." },
];
