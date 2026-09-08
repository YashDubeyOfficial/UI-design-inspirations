export interface ExpItem {
  label: string;
  title: string;
  text: string;
}

export interface Feature {
  num: string;
  title: string;
  text: string;
}

export interface CompareItem {
  title: string;
  text: string;
}

export interface Exam {
  name: string;
  desc: string;
  meta: string;
  featured?: boolean;
}

export interface Testimonial {
  name: string;
  meta: string;
  quote: string;
  by: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export const stripTags: string[] = [
  "JEE Mains & Advanced",
  "NEET UG",
  "UPSC CSE",
  "GATE",
  "SSC CGL",
  "Banking",
  "CAT • CUET",
  "+ State",
];

export const expItems: ExpItem[] = [
  { label: "Countdown", title: "Real timer & auto-submit.", text: "At 00:00, it’s over — as it should be." },
  { label: "Palette", title: "Answered / marked / not visited.", text: "One glance, full picture." },
  { label: "Sections", title: "Sectional navigation & rules.", text: "Jump, but respect the paper’s structure." },
];

export const features: Feature[] = [
  { num: "01", title: "Extraction that works", text: "MCQs, MSQs, NAT, comprehension, images — even when numbering restarts." },
  { num: "02", title: "Marking & sections", text: "+4 −1, +3 −0.33, part-wise, sectional timers — all detected." },
  { num: "03", title: "Instructions verbatim", text: "Original pages shown exactly as in PDF before you start." },
  { num: "04", title: "~40 seconds", text: "Upload at 10:00, start at 10:01. No typing, no setup." },
  { num: "05", title: "True palette", text: "Answered, not answered, marked-for-review — with keys 1–4, M, N." },
  { num: "06", title: "Honest analysis", text: "Score, accuracy, time per question, weak sections. Nothing else." },
];

export const compareOld: CompareItem[] = [
  { title: "Hours wasted.", text: "Copy-paste 90 questions, type 360 options." },
  { title: "Looks like a quiz.", text: "No sections, no pressure, no memory." },
  { title: "Mistakes.", text: "Wrong negatives, broken numbering." },
];

export const compareNew: CompareItem[] = [
  { title: "Upload and done.", text: "AI structures — you practice." },
  { title: "Real hall.", text: "Timer, palette, auto-submit. You learn pressure." },
  { title: "Exam-accurate.", text: "Every rule as the PDF states it." },
];

export const exams: Exam[] = [
  { name: "JEE Mains & Advanced", desc: "Physics • Chemistry • Maths • NAT", meta: "90 Qs • 180 min" },
  { name: "NEET UG", desc: "Botany • Zoology • Physics • Chemistry", meta: "200 Qs • 200 min" },
  { name: "UPSC CSE", desc: "GS • CSAT • Comprehension", meta: "Prelims & Mains" },
  { name: "GATE", desc: "MCQ + MSQ + NAT", meta: "30 papers • 65 Qs" },
  { name: "UGC NET / JRF", desc: "Paper 1 + 2 • 82 subjects", meta: "3 hours • No negative" },
  { name: "SSC CGL & CHSL", desc: "Quant • Reasoning • English • GK", meta: "100 Qs • 60 min" },
  { name: "Banking PO/SO", desc: "SBI • IBPS • Sectional cut-offs", meta: "English & Hindi" },
  { name: "CAT • CUET • State", desc: "Any PDF — we’ll make it a mock. Try your state TET now.", meta: "Try now →", featured: true },
];

export const testimonials: Testimonial[] = [
  { name: "Ananya — JEE 2025", meta: "Delhi • 97.2 percentile • 42 mocks", quote: "“8 years of PYQs as PDFs. Became timed mocks that felt like NTA. Speed improved in three weeks.”", by: "JEE Main • Verified" },
  { name: "Rohit — UPSC CSE", meta: "Pune • 2nd attempt • 31 mocks", quote: "“CSAT has tricky instructions. Parakh caught every rule. First tool that respects UPSC’s format.”", by: "UPSC Prelims • Verified" },
  { name: "Sneha — UGC NET", meta: "Hyderabad • JRF qualified • 19 mocks", quote: "“Scanned images, not text. Still extracted 68 questions perfectly. Under a minute.”", by: "NET Education • Verified" },
];

export const faqs: FaqItem[] = [
  { q: "Will it work with scanned PDFs?", a: "Yes. Vision + language models read scanned, photographed and mixed PDFs — even handwritten annotations. If a human can read it, we can parse it." },
  { q: "Does it get marking and sections right?", a: "+4 −1, +3 −0.33, part-specific marking, sectional cut-offs — detected automatically. We show instruction pages verbatim before you start." },
  { q: "How long does it take?", a: "About 40 seconds for 90 questions. No manual entry." },
  { q: "Is the CBT real?", a: "Countdown, palette, mark-for-review, sectional locks, auto-submit, keyboard shortcuts. Built to NTA / TCS iON spec." },
];
