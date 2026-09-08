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
  { num: "01", title: "Woven extraction", text: "Every question type, threaded from any PDF fabric." },
  { num: "02", title: "Embossed marking", text: "Negatives pressed deep — felt, not just seen." },
  { num: "03", title: "Stitched instructions", text: "Original pages sewn in, verbatim." },
  { num: "04", title: "Forty heartbeats", text: "A full mock tailored in under a minute." },
  { num: "05", title: "Button palette", text: "Answered, marked, unvisited — real pressable states." },
  { num: "06", title: "Tailored analysis", text: "Scores cut to fit, seams and all." },
];

export const exams: Exam[] = [
  { name: "JEE Mains & Advanced", desc: "Physics, Chemistry, Maths.", meta: "90 Qs · 180 min" },
  { name: "NEET UG", desc: "Botany, Zoology, Physics, Chemistry.", meta: "200 Qs · 200 min" },
  { name: "UPSC CSE", desc: "GS and CSAT papers.", meta: "Prelims & Mains" },
  { name: "GATE", desc: "All branches with NAT.", meta: "65 Qs" },
  { name: "UGC NET", desc: "Paper 1 and 2.", meta: "82 subjects" },
  { name: "SSC CGL", desc: "Quant, reasoning, English, GK.", meta: "100 Qs" },
  { name: "Banking PO", desc: "SBI and IBPS patterns.", meta: "Prelims & Mains" },
  { name: "CAT · CUET · State", desc: "Any PDF, tailored into a mock.", meta: "Try now" },
];

export const testimonials: Testimonial[] = [
  { name: "Ananya — JEE 2025", meta: "Delhi · 32 mocks", quote: "“I can almost feel the buttons. Everything presses, stitches and holds.”" },
  { name: "Rohit — UPSC", meta: "Pune · 21 mocks", quote: "“Fabric, leather, brass — yet the exam logic is razor sharp.”" },
  { name: "Sneha — UGC NET", meta: "Hyderabad · 16 mocks", quote: "“The most touchable interface I have studied with. And accurate.”" },
];

export const faqs: FaqItem[] = [
  { q: "Scanned PDFs?", a: "Yes — woven in whatever their condition." },
  { q: "Marking automatic?", a: "Fully. Pressed in with the rest." },
  { q: "How fast?", a: "About forty seconds per full mock." },
  { q: "Free?", a: "Three mocks free, no card." },
];
