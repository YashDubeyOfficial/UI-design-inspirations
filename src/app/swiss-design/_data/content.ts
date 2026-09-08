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
  { num: "01", title: "Extraction", text: "All question types, set on a strict grid." },
  { num: "02", title: "Marking", text: "Negatives and sections with typographic clarity." },
  { num: "03", title: "Instructions", text: "Verbatim pages, ranged left, never centered." },
  { num: "04", title: "Speed", text: "Forty seconds. Like clockwork." },
  { num: "05", title: "Palette", text: "Three states in black, white and red." },
  { num: "06", title: "Analysis", text: "Tabular figures, aligned right." },
];

export const exams: Exam[] = [
  { name: "JEE Mains & Advanced", desc: "Physics, Chemistry, Maths.", meta: "90 Qs · 180 min" },
  { name: "NEET UG", desc: "Botany, Zoology, Physics, Chemistry.", meta: "200 Qs · 200 min" },
  { name: "UPSC CSE", desc: "GS and CSAT papers.", meta: "Prelims & Mains" },
  { name: "GATE", desc: "All branches with NAT.", meta: "65 Qs" },
  { name: "UGC NET", desc: "Paper 1 and 2.", meta: "82 subjects" },
  { name: "SSC CGL", desc: "Quant, reasoning, English, GK.", meta: "100 Qs" },
  { name: "Banking PO", desc: "SBI and IBPS patterns.", meta: "Prelims & Mains" },
  { name: "CAT · CUET · State", desc: "Any PDF, same grid.", meta: "Try now" },
];

export const testimonials: Testimonial[] = [
  { name: "Ananya — JEE 2025", meta: "Delhi · 39 mocks", quote: "“Everything aligns. The eye never searches — the grid simply delivers.”" },
  { name: "Rohit — UPSC", meta: "Pune · 30 mocks", quote: "“Helvetica, rules, red. It feels engineered, and it is.”" },
  { name: "Sneha — UGC NET", meta: "Hyderabad · 18 mocks", quote: "“Asymmetric but never chaotic. My mocks finally feel designed.”" },
];

export const faqs: FaqItem[] = [
  { q: "Scanned PDFs?", a: "Yes. Readable means parseable — the grid accepts all input." },
  { q: "Marking automatic?", a: "Duration, negatives, sections — extracted, aligned, done." },
  { q: "How fast?", a: "About 40 seconds per full paper." },
  { q: "Free?", a: "Three mocks free. No card." },
];
