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
  { num: "01", title: "One-hue extraction", text: "Every question type parsed from any shade of PDF." },
  { num: "02", title: "Tonal marking", text: "Negatives and sections in perfect blue harmony." },
  { num: "03", title: "Clear instructions", text: "Original pages, verbatim, in crisp blue type." },
  { num: "04", title: "Fast as light", text: "Ninety questions parsed in about forty seconds." },
  { num: "05", title: "Palette in blue", text: "Answered, marked, unvisited — one hue, zero confusion." },
  { num: "06", title: "Cool analysis", text: "Scores and accuracy in calm monochrome cards." },
];

export const exams: Exam[] = [
  { name: "JEE Mains & Advanced", desc: "Physics, Chemistry, Maths.", meta: "90 Qs · 180 min" },
  { name: "NEET UG", desc: "Botany, Zoology, Physics, Chemistry.", meta: "200 Qs · 200 min" },
  { name: "UPSC CSE", desc: "GS and CSAT papers.", meta: "Prelims & Mains" },
  { name: "GATE", desc: "All branches with NAT.", meta: "65 Qs" },
  { name: "UGC NET", desc: "Paper 1 and 2.", meta: "82 subjects" },
  { name: "SSC CGL", desc: "Quant, reasoning, English, GK.", meta: "100 Qs" },
  { name: "Banking PO", desc: "SBI and IBPS patterns.", meta: "Prelims & Mains" },
  { name: "CAT · CUET · State", desc: "Any PDF in any blue.", meta: "Try now" },
];

export const testimonials: Testimonial[] = [
  { name: "Ananya — JEE 2025", meta: "Delhi · 40 mocks", quote: "“One color, total focus. The blue palette tells me everything at a glance.”" },
  { name: "Rohit — UPSC", meta: "Pune · 28 mocks", quote: "“Monochrome sounds plain until you attempt in it. Nothing fights for attention.”" },
  { name: "Sneha — UGC NET", meta: "Hyderabad · 20 mocks", quote: "“Clean, consistent, calm. My scanned PDFs never looked this readable.”" },
];

export const faqs: FaqItem[] = [
  { q: "Does it read scanned PDFs?", a: "Yes — scans, photos and mixed PDFs parse accurately." },
  { q: "Is marking automatic?", a: "Fully. Duration, negatives and sections come from the paper." },
  { q: "How fast?", a: "Around 40 seconds for a full mock." },
  { q: "Is it free?", a: "Three mocks free, no card required." },
];
