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
  { num: "01", title: "Axonometric extraction", text: "Every question type, viewed from the perfect 30° angle." },
  { num: "02", title: "Stacked marking", text: "Negatives piled neatly — every layer visible." },
  { num: "03", title: "Tilted instructions", text: "Original pages, laid flat on the plane, verbatim." },
  { num: "04", title: "Forty degrees fast", text: "A full mock raised in under a minute." },
  { num: "05", title: "Cube palette", text: "Answered, marked, unvisited — solid blocks." },
  { num: "06", title: "Measured analysis", text: "Scores dimensioned like a technical drawing." },
];

export const exams: Exam[] = [
  { name: "JEE Mains & Advanced", desc: "Physics, Chemistry, Maths.", meta: "90 Qs · 180 min" },
  { name: "NEET UG", desc: "Botany, Zoology, Physics, Chemistry.", meta: "200 Qs · 200 min" },
  { name: "UPSC CSE", desc: "GS and CSAT papers.", meta: "Prelims & Mains" },
  { name: "GATE", desc: "All branches with NAT.", meta: "65 Qs" },
  { name: "UGC NET", desc: "Paper 1 and 2.", meta: "82 subjects" },
  { name: "SSC CGL", desc: "Quant, reasoning, English, GK.", meta: "100 Qs" },
  { name: "Banking PO", desc: "SBI and IBPS patterns.", meta: "Prelims & Mains" },
  { name: "CAT · CUET · State", desc: "Any PDF, raised into place.", meta: "Try now" },
];

export const testimonials: Testimonial[] = [
  { name: "Ananya — JEE 2025", meta: "Delhi · 34 mocks", quote: "“Everything sits on visible planes. I always know where I am in the paper.”" },
  { name: "Rohit — UPSC", meta: "Pune · 22 mocks", quote: "“The tilted hall has real depth. Sections feel like floors I can walk between.”" },
  { name: "Sneha — UGC NET", meta: "Hyderabad · 17 mocks", quote: "“Playful but precise. My palette has never been this readable.”" },
];

export const faqs: FaqItem[] = [
  { q: "Scanned PDFs?", a: "Yes — laid flat on the plane and parsed accurately." },
  { q: "Marking automatic?", a: "Fully. Every dimension detected." },
  { q: "How fast?", a: "About forty seconds per full mock." },
  { q: "Free?", a: "Three mocks free, no card." },
];
