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
  { num: "01", title: "Layered extraction", text: "Every question type, cut cleanly from any PDF." },
  { num: "02", title: "Pasted marking", text: "Negatives glued exactly where they belong." },
  { num: "03", title: "Cut-out instructions", text: "Original pages, snipped verbatim." },
  { num: "04", title: "Forty snips", text: "A full mock cut out in under a minute." },
  { num: "05", title: "Stacked palette", text: "Answered, marked, unvisited — layered sheets." },
  { num: "06", title: "Collage analysis", text: "Scores pasted up beautifully." },
];

export const exams: Exam[] = [
  { name: "JEE Mains & Advanced", desc: "Physics, Chemistry, Maths.", meta: "90 Qs · 180 min" },
  { name: "NEET UG", desc: "Botany, Zoology, Physics, Chemistry.", meta: "200 Qs · 200 min" },
  { name: "UPSC CSE", desc: "GS and CSAT papers.", meta: "Prelims & Mains" },
  { name: "GATE", desc: "All branches with NAT.", meta: "65 Qs" },
  { name: "UGC NET", desc: "Paper 1 and 2.", meta: "82 subjects" },
  { name: "SSC CGL", desc: "Quant, reasoning, English, GK.", meta: "100 Qs" },
  { name: "Banking PO", desc: "SBI and IBPS patterns.", meta: "Prelims & Mains" },
  { name: "CAT · CUET · State", desc: "Any PDF, cut into a mock.", meta: "Try now" },
];

export const testimonials: Testimonial[] = [
  { name: "Ananya — JEE 2025", meta: "Delhi · 33 mocks", quote: "“Handmade feeling, machine precision. The layered palette is a delight.”" },
  { name: "Rohit — UPSC", meta: "Pune · 22 mocks", quote: "“Every screen looks crafted, yet everything works exactly like the centre.”" },
  { name: "Sneha — UGC NET", meta: "Hyderabad · 17 mocks", quote: "“Paper shadows and all — my mocks finally have character.”" },
];

export const faqs: FaqItem[] = [
  { q: "Scanned PDFs?", a: "Yes — snipped and parsed whatever the source." },
  { q: "Marking automatic?", a: "Fully. Pasted in exactly right." },
  { q: "How fast?", a: "About forty seconds per full mock." },
  { q: "Free?", a: "Three mocks free, no card." },
];
