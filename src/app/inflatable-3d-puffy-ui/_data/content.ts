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
  { num: "01", title: "Inflated extraction", text: "Every question type, blown up from any PDF." },
  { num: "02", title: "Bouncy marking", text: "Negatives that boing into place automatically." },
  { num: "03", title: "Puffy instructions", text: "Original pages, round and verbatim." },
  { num: "04", title: "Forty puffy seconds", text: "From flat file to inflated hall." },
  { num: "05", title: "Balloon palette", text: "Answered, marked, unvisited — soft orbs." },
  { num: "06", title: "Squishy analysis", text: "Scores you can practically squeeze." },
];

export const exams: Exam[] = [
  { name: "JEE Mains & Advanced", desc: "Physics, Chemistry, Maths.", meta: "90 Qs · 180 min" },
  { name: "NEET UG", desc: "Botany, Zoology, Physics, Chemistry.", meta: "200 Qs · 200 min" },
  { name: "UPSC CSE", desc: "GS and CSAT papers.", meta: "Prelims & Mains" },
  { name: "GATE", desc: "All branches with NAT.", meta: "65 Qs" },
  { name: "UGC NET", desc: "Paper 1 and 2.", meta: "82 subjects" },
  { name: "SSC CGL", desc: "Quant, reasoning, English, GK.", meta: "100 Qs" },
  { name: "Banking PO", desc: "SBI and IBPS patterns.", meta: "Prelims & Mains" },
  { name: "CAT · CUET · State", desc: "Any PDF, inflated into a mock.", meta: "Try now" },
];

export const testimonials: Testimonial[] = [
  { name: "Ananya — JEE 2025", meta: "Delhi · 36 mocks", quote: "“Everything looks huggable, yet the exam bite is real. I love this tension.”" },
  { name: "Rohit — UPSC", meta: "Pune · 23 mocks", quote: "“Buttons you want to poke. Palette like candy. Preparation like steel.”" },
  { name: "Sneha — UGC NET", meta: "Hyderabad · 17 mocks", quote: "“My PDFs inflate into the friendliest hall I have ever attempted in.”" },
];

export const faqs: FaqItem[] = [
  { q: "Scanned PDFs?", a: "Yes — the puffs inflate scans, photos and mixed sources." },
  { q: "Marking automatic?", a: "Fully. It boings into place by itself." },
  { q: "How fast?", a: "About forty seconds per full mock." },
  { q: "Free?", a: "Three mocks free, no card." },
];
