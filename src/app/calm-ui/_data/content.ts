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
  { num: "01", title: "Breathe-in extraction", text: "All question types, inhaled from any PDF." },
  { num: "02", title: "Soft marking", text: "Negatives and sections, exhaled automatically." },
  { num: "03", title: "Restful instructions", text: "Original pages in calm, airy type." },
  { num: "04", title: "Forty calm seconds", text: "From upload to hall without a rush." },
  { num: "05", title: "Airy palette", text: "Answered, marked, unvisited — light as air." },
  { num: "06", title: "Still analysis", text: "Scores in quiet, spacious cards." },
];

export const exams: Exam[] = [
  { name: "JEE Mains & Advanced", desc: "Physics, Chemistry, Maths.", meta: "90 Qs · 180 min" },
  { name: "NEET UG", desc: "Botany, Zoology, Physics, Chemistry.", meta: "200 Qs · 200 min" },
  { name: "UPSC CSE", desc: "GS and CSAT papers.", meta: "Prelims & Mains" },
  { name: "GATE", desc: "All branches with NAT.", meta: "65 Qs" },
  { name: "UGC NET", desc: "Paper 1 and 2.", meta: "82 subjects" },
  { name: "SSC CGL", desc: "Quant, reasoning, English, GK.", meta: "100 Qs" },
  { name: "Banking PO", desc: "SBI and IBPS patterns.", meta: "Prelims & Mains" },
  { name: "CAT · CUET · State", desc: "Any PDF, peacefully mocked.", meta: "Try now" },
];

export const testimonials: Testimonial[] = [
  { name: "Ananya — JEE 2025", meta: "Delhi · 37 mocks", quote: "“My shoulders drop when this opens. Three-hour mocks feel like one.”" },
  { name: "Rohit — UPSC", meta: "Pune · 26 mocks", quote: "“Calm UI, strict exam. The combination works — my CSAT timing improved.”" },
  { name: "Sneha — UGC NET", meta: "Hyderabad · 20 mocks", quote: "“Airy, legible, kind. Even dense comprehensions feel approachable.”" },
];

export const faqs: FaqItem[] = [
  { q: "Scanned PDFs?", a: "Yes — calmly parsed, whatever the source quality." },
  { q: "Marking automatic?", a: "Fully. The paper tells us everything." },
  { q: "How fast?", a: "About 40 seconds per full mock." },
  { q: "Free?", a: "Three mocks free, no card." },
];
