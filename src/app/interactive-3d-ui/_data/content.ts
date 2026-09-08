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
  { num: "01", title: "Dimensional extraction", text: "Every question type, lifted off the page into space." },
  { num: "02", title: "Tilted marking", text: "Negatives banked at angles you cannot miss." },
  { num: "03", title: "Layered instructions", text: "Original pages floating at readable depth." },
  { num: "04", title: "Forty frames", text: "A full mock rendered in under a minute." },
  { num: "05", title: "Hover palette", text: "Answered, marked, unvisited — lean in to inspect." },
  { num: "06", title: "Depth analysis", text: "Scores with real dimensionality." },
];

export const exams: Exam[] = [
  { name: "JEE Mains & Advanced", desc: "Physics, Chemistry, Maths.", meta: "90 Qs · 180 min" },
  { name: "NEET UG", desc: "Botany, Zoology, Physics, Chemistry.", meta: "200 Qs · 200 min" },
  { name: "UPSC CSE", desc: "GS and CSAT papers.", meta: "Prelims & Mains" },
  { name: "GATE", desc: "All branches with NAT.", meta: "65 Qs" },
  { name: "UGC NET", desc: "Paper 1 and 2.", meta: "82 subjects" },
  { name: "SSC CGL", desc: "Quant, reasoning, English, GK.", meta: "100 Qs" },
  { name: "Banking PO", desc: "SBI and IBPS patterns.", meta: "Prelims & Mains" },
  { name: "CAT · CUET · State", desc: "Any PDF, tilted into a mock.", meta: "Try now" },
];

export const testimonials: Testimonial[] = [
  { name: "Ananya — JEE 2025", meta: "Delhi · 34 mocks", quote: "“Cards lift when I hover and the deck tilts as I scroll. Studying feels spatial.”" },
  { name: "Rohit — UPSC", meta: "Pune · 22 mocks", quote: "“Depth you can feel. Sections sit on different planes and my brain maps them.”" },
  { name: "Sneha — UGC NET", meta: "Hyderabad · 17 mocks", quote: "“Playful 3D, serious exam. The tilt never gets in the way.”" },
];

export const faqs: FaqItem[] = [
  { q: "Scanned PDFs?", a: "Yes — lifted into 3D whatever their condition." },
  { q: "Marking automatic?", a: "Fully. Every angle detected." },
  { q: "How fast?", a: "About forty seconds per full mock." },
  { q: "Free?", a: "Three mocks free, no card." },
];
