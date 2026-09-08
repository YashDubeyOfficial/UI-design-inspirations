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
  { num: "01", title: "Tactile extraction", text: "Every question type, pulled from paper with a satisfying click." },
  { num: "02", title: "Brass marking", text: "Negatives and sections stamped in metal, impossible to miss." },
  { num: "03", title: "Stitched instructions", text: "Original pages bound in, verbatim, like a ledger." },
  { num: "04", title: "Forty seconds", text: "From drop to desk in under a minute." },
  { num: "05", title: "Knob palette", text: "Turn through answered, marked and unvisited." },
  { num: "06", title: "Ledger analysis", text: "Scores ruled up neatly when you finish." },
];

export const exams: Exam[] = [
  { name: "JEE Mains & Advanced", desc: "Physics, Chemistry, Maths.", meta: "90 Qs · 180 min" },
  { name: "NEET UG", desc: "Botany, Zoology, Physics, Chemistry.", meta: "200 Qs · 200 min" },
  { name: "UPSC CSE", desc: "GS and CSAT papers.", meta: "Prelims & Mains" },
  { name: "GATE", desc: "All branches with NAT.", meta: "65 Qs" },
  { name: "UGC NET", desc: "Paper 1 and 2.", meta: "82 subjects" },
  { name: "SSC CGL", desc: "Quant, reasoning, English, GK.", meta: "100 Qs" },
  { name: "Banking PO", desc: "SBI and IBPS patterns.", meta: "Prelims & Mains" },
  { name: "CAT · CUET · State", desc: "Any PDF, bound into a mock.", meta: "Try now" },
];

export const testimonials: Testimonial[] = [
  { name: "Ananya — JEE 2025", meta: "Delhi · 33 mocks", quote: "“Buttons that feel pressable and a timer like a desk clock. My mocks feel physical.”" },
  { name: "Rohit — UPSC", meta: "Pune · 24 mocks", quote: "“Minimal layout, maximal tactility. The stitched panels make instructions unmissable.”" },
  { name: "Sneha — UGC NET", meta: "Hyderabad · 18 mocks", quote: "“It is quiet like minimalism but everything begs to be touched. Lovely balance.”" },
];

export const faqs: FaqItem[] = [
  { q: "Scanned PDFs?", a: "Yes — the ledger accepts scans, photos and mixed sources." },
  { q: "Marking automatic?", a: "Fully. Duration, negatives and sections are stamped in." },
  { q: "How fast?", a: "About forty seconds for a full paper." },
  { q: "Free?", a: "Three mocks free, no card." },
];
