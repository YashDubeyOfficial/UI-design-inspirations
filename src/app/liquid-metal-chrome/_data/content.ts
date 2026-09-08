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
  { num: "01", title: "Mirror extraction", text: "Every question type, reflected perfectly from any PDF." },
  { num: "02", title: "Chrome marking", text: "Negatives polished to a shine — impossible to misread." },
  { num: "03", title: "Liquid instructions", text: "Original pages, poured verbatim before you start." },
  { num: "04", title: "Mercury speed", text: "Ninety questions flowing in forty seconds." },
  { num: "05", title: "Molten palette", text: "Answered, marked, unvisited — liquid metal states." },
  { num: "06", title: "Polished analysis", text: "Scores buffed to a mirror finish." },
];

export const exams: Exam[] = [
  { name: "JEE Mains & Advanced", desc: "Physics, Chemistry, Maths.", meta: "90 Qs · 180 min" },
  { name: "NEET UG", desc: "Botany, Zoology, Physics, Chemistry.", meta: "200 Qs · 200 min" },
  { name: "UPSC CSE", desc: "GS and CSAT papers.", meta: "Prelims & Mains" },
  { name: "GATE", desc: "All branches with NAT.", meta: "65 Qs" },
  { name: "UGC NET", desc: "Paper 1 and 2.", meta: "82 subjects" },
  { name: "SSC CGL", desc: "Quant, reasoning, English, GK.", meta: "100 Qs" },
  { name: "Banking PO", desc: "SBI and IBPS patterns.", meta: "Prelims & Mains" },
  { name: "CAT · CUET · State", desc: "Any PDF, chromed into a mock.", meta: "Try now" },
];

export const testimonials: Testimonial[] = [
  { name: "Ananya — JEE 2025", meta: "Delhi · 37 mocks", quote: "“It shines like 2004 and tests like 2026. The chrome timer is weirdly motivating.”" },
  { name: "Rohit — UPSC", meta: "Pune · 25 mocks", quote: "“Mercury blobs aside, the exam accuracy is dead serious. Palette reads instantly.”" },
  { name: "Sneha — UGC NET", meta: "Hyderabad · 19 mocks", quote: "“My PDFs never looked this liquid. Forty seconds and I am inside the hall.”" },
];

export const faqs: FaqItem[] = [
  { q: "Scanned PDFs?", a: "Yes — the chrome reflects scans, photos and mixed sources." },
  { q: "Marking automatic?", a: "Fully. Duration, negatives and sections pour in." },
  { q: "How fast?", a: "About forty seconds per full mock." },
  { q: "Free?", a: "Three mocks free, no card." },
];
