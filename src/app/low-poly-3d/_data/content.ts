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
  { num: "01", title: "Faceted extraction", text: "Every question type, cut cleanly from any PDF." },
  { num: "02", title: "Angular marking", text: "Negatives with sharp edges — no soft errors." },
  { num: "03", title: "Crystal instructions", text: "Original pages, flawlessly faceted." },
  { num: "04", title: "Forty facets per second", text: "A full mock cut in under a minute." },
  { num: "05", title: "Polygon palette", text: "Answered, marked, unvisited — hard edges." },
  { num: "06", title: "Gem analysis", text: "Scores with brilliant clarity." },
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
  { name: "Ananya — JEE 2025", meta: "Delhi · 35 mocks", quote: "“Sharp, geometric, fast. The faceted palette is the clearest I have used.”" },
  { name: "Rohit — UPSC", meta: "Pune · 24 mocks", quote: "“No curves to hide behind — everything is exact, like the exam itself.”" },
  { name: "Sneha — UGC NET", meta: "Hyderabad · 18 mocks", quote: "“Crystal UI, crystal results. My timing sharpened within weeks.”" },
];

export const faqs: FaqItem[] = [
  { q: "Scanned PDFs?", a: "Yes — facets cut scans, photos and mixed sources." },
  { q: "Marking automatic?", a: "Fully. Every edge detected." },
  { q: "How fast?", a: "About forty seconds per full mock." },
  { q: "Free?", a: "Three mocks free, no card." },
];
