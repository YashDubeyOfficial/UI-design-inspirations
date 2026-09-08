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
  { num: "01", title: "Extraction", text: "MCQs, MSQs, NAT — parsed from any PDF, no manual entry." },
  { num: "02", title: "Marking", text: "+4 −1 and section rules detected automatically." },
  { num: "03", title: "Instructions", text: "Original pages shown verbatim before you begin." },
  { num: "04", title: "Speed", text: "Upload and attempt within a minute." },
  { num: "05", title: "Palette", text: "Answered, marked, unvisited. Nothing else." },
  { num: "06", title: "Analysis", text: "Score, accuracy, time per question." },
];

export const exams: Exam[] = [
  { name: "JEE Mains & Advanced", desc: "Physics, Chemistry, Maths.", meta: "90 Qs · 180 min" },
  { name: "NEET UG", desc: "Botany, Zoology, Physics, Chemistry.", meta: "200 Qs · 200 min" },
  { name: "UPSC CSE", desc: "GS and CSAT papers.", meta: "Prelims & Mains" },
  { name: "GATE", desc: "All branches, MSQ and NAT.", meta: "65 Qs" },
  { name: "UGC NET", desc: "Paper 1 and 2.", meta: "82 subjects" },
  { name: "SSC CGL", desc: "Quant, reasoning, English, GK.", meta: "100 Qs" },
  { name: "Banking PO", desc: "SBI and IBPS patterns.", meta: "Prelims & Mains" },
  { name: "CAT · CUET · State", desc: "Any PDF becomes a mock.", meta: "Try now" },
];

export const testimonials: Testimonial[] = [
  { name: "Ananya — JEE 2025", meta: "Delhi · 42 mocks", quote: "“Nothing on screen except the question. My focus has never been better.”" },
  { name: "Rohit — UPSC", meta: "Pune · 31 mocks", quote: "“It respects the paper and stays out of the way. Exactly what I needed.”" },
  { name: "Sneha — UGC NET", meta: "Hyderabad · 19 mocks", quote: "“Scanned PDFs parsed perfectly. No clutter, no distractions.”" },
];

export const faqs: FaqItem[] = [
  { q: "Does it work with scanned PDFs?", a: "Yes. If a human can read it, Parakh can parse it." },
  { q: "Is marking detected automatically?", a: "Yes — duration, negatives and section rules come straight from the PDF." },
  { q: "How fast is it?", a: "About 40 seconds for a 90-question paper." },
  { q: "Is it free?", a: "Three full mocks free. No card required." },
];
