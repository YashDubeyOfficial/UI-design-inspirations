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
  { num: "01", title: "Photographic extraction", text: "Every question type rendered true to the source scan." },
  { num: "02", title: "Studio marking", text: "Negatives lit dramatically — impossible to misread." },
  { num: "03", title: "Cinematic instructions", text: "Original pages, presented like title cards." },
  { num: "04", title: "Forty seconds", text: "From upload to premiere in under a minute." },
  { num: "05", title: "Spotlit palette", text: "Answered, marked, unvisited under one beam." },
  { num: "06", title: "Director's analysis", text: "Scores graded like a final cut." },
];

export const exams: Exam[] = [
  { name: "JEE Mains & Advanced", desc: "Physics, Chemistry, Maths.", meta: "90 Qs · 180 min" },
  { name: "NEET UG", desc: "Botany, Zoology, Physics, Chemistry.", meta: "200 Qs · 200 min" },
  { name: "UPSC CSE", desc: "GS and CSAT papers.", meta: "Prelims & Mains" },
  { name: "GATE", desc: "All branches with NAT.", meta: "65 Qs" },
  { name: "UGC NET", desc: "Paper 1 and 2.", meta: "82 subjects" },
  { name: "SSC CGL", desc: "Quant, reasoning, English, GK.", meta: "100 Qs" },
  { name: "Banking PO", desc: "SBI and IBPS patterns.", meta: "Prelims & Mains" },
  { name: "CAT · CUET · State", desc: "Any PDF, shot in full realism.", meta: "Try now" },
];

export const testimonials: Testimonial[] = [
  { name: "Ananya — JEE 2025", meta: "Delhi · 38 mocks", quote: "“It looks rendered and feels real. The spotlight timer genuinely raises my pulse.”" },
  { name: "Rohit — UPSC", meta: "Pune · 26 mocks", quote: "“Cinematic but never gimmicky. Every control sits exactly where a hall would put it.”" },
  { name: "Sneha — UGC NET", meta: "Hyderabad · 20 mocks", quote: "“Dark studio, warm light, zero glare. My longest mocks feel shortest here.”" },
];

export const faqs: FaqItem[] = [
  { q: "Scanned PDFs?", a: "Yes — the studio lights up scans, photos and mixed sources." },
  { q: "Marking automatic?", a: "Fully. Duration, negatives and sections arrive graded in." },
  { q: "How fast?", a: "About forty seconds per full mock." },
  { q: "Free?", a: "Three mocks free, no card." },
];
