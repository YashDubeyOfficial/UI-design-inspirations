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
  { num: "01", title: "Extraction, in prose", text: "Every question type, lifted from the page and set in readable type." },
  { num: "02", title: "Marking, footnoted", text: "Negatives and sections explained like margin notes." },
  { num: "03", title: "Instructions, verbatim", text: "The original sheet, reproduced exactly before you begin." },
  { num: "04", title: "Set in forty seconds", text: "From upload to composed hall in under a minute." },
  { num: "05", title: "A quiet palette", text: "Answered, marked, unvisited — noted in the margin." },
  { num: "06", title: "A considered report", text: "Scores and accuracy, written up like an editor's letter." },
];

export const exams: Exam[] = [
  { name: "JEE Mains & Advanced", desc: "Physics, Chemistry, Maths.", meta: "90 Qs · 180 min" },
  { name: "NEET UG", desc: "Botany, Zoology, Physics, Chemistry.", meta: "200 Qs · 200 min" },
  { name: "UPSC CSE", desc: "GS and CSAT papers.", meta: "Prelims & Mains" },
  { name: "GATE", desc: "All branches with NAT.", meta: "65 Qs" },
  { name: "UGC NET", desc: "Paper 1 and 2.", meta: "82 subjects" },
  { name: "SSC CGL", desc: "Quant, reasoning, English, GK.", meta: "100 Qs" },
  { name: "Banking PO", desc: "SBI and IBPS patterns.", meta: "Prelims & Mains" },
  { name: "CAT · CUET · State", desc: "Any PDF, typeset into a mock.", meta: "Try now" },
];

export const testimonials: Testimonial[] = [
  { name: "Ananya — JEE 2025", meta: "Delhi · 34 mocks", quote: "“It reads like the finest explainer journalism — except the subject is my own preparation.”" },
  { name: "Rohit — UPSC", meta: "Pune · 23 mocks", quote: "“As a humanities student, this is the first exam tool that respects long-form reading.”" },
  { name: "Sneha — UGC NET", meta: "Hyderabad · 16 mocks", quote: "“Drop caps, pull quotes, wide margins. I almost forget I am being tested.”" },
];

export const faqs: FaqItem[] = [
  { q: "Will it handle scanned PDFs?", a: "Yes — scans, photos and mixed sources, all typeset accurately." },
  { q: "Is marking detected?", a: "Fully. Duration, negatives and sections arrive with the text." },
  { q: "How long does it take?", a: "Roughly forty seconds for a complete paper." },
  { q: "Is it free?", a: "Three mocks free, no card required." },
];
