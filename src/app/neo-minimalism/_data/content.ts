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
  { num: "01", title: "Extraction", text: "Every question type, parsed. No manual work." },
  { num: "02", title: "Marking", text: "Negatives and sections detected on sight." },
  { num: "03", title: "Instructions", text: "Original pages, verbatim, up front." },
  { num: "04", title: "Speed", text: "Forty seconds from upload to hall." },
  { num: "05", title: "Palette", text: "Three states. No decoration." },
  { num: "06", title: "Analysis", text: "Score, accuracy, pace. Done." },
];

export const exams: Exam[] = [
  { name: "JEE Mains & Advanced", desc: "Physics, Chemistry, Maths.", meta: "90 Qs · 180 min" },
  { name: "NEET UG", desc: "Botany, Zoology, Physics, Chemistry.", meta: "200 Qs · 200 min" },
  { name: "UPSC CSE", desc: "GS and CSAT papers.", meta: "Prelims & Mains" },
  { name: "GATE", desc: "All branches with NAT.", meta: "65 Qs" },
  { name: "UGC NET", desc: "Paper 1 and 2.", meta: "82 subjects" },
  { name: "SSC CGL", desc: "Quant, reasoning, English, GK.", meta: "100 Qs" },
  { name: "Banking PO", desc: "SBI and IBPS patterns.", meta: "Prelims & Mains" },
  { name: "CAT · CUET · State", desc: "Any PDF. No exceptions.", meta: "Try now" },
];

export const testimonials: Testimonial[] = [
  { name: "Ananya — JEE 2025", meta: "Delhi · 41 mocks", quote: "“Black, white, red. Nothing else competes for attention — exactly what an exam screen should be.”" },
  { name: "Rohit — UPSC", meta: "Pune · 29 mocks", quote: "“The grid makes everything findable. Instructions, palette, timer — always where you expect.”" },
  { name: "Sneha — UGC NET", meta: "Hyderabad · 22 mocks", quote: "“Stark but never cold. My accuracy went up because nothing distracts.”" },
];

export const faqs: FaqItem[] = [
  { q: "Scanned PDFs?", a: "Yes. Readable by humans means parseable by Parakh." },
  { q: "Marking automatic?", a: "Yes. Duration, negatives, sections — straight from the paper." },
  { q: "How fast?", a: "Roughly 40 seconds for 90 questions." },
  { q: "Free?", a: "Three mocks free. No card." },
];
