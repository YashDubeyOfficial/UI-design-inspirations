export interface Feature { num: string; title: string; text: string; }

export interface Exam { name: string; desc: string; meta: string; }

export interface Testimonial { name: string; meta: string; quote: string; }

export interface FaqItem { q: string; a: string; }

export const features: Feature[] = [
  { num: "01", title: '[ EXTRACTION ]', text: 'MCQ/MSQ/NAT boxes go here.' },
  { num: "02", title: '[ MARKING ]', text: 'Negative-marking annotation here.' },
  { num: "03", title: '[ INSTRUCTIONS ]', text: 'Verbatim text block here.' },
  { num: "04", title: '[ SPEED ]', text: '40s label goes here.' },
  { num: "05", title: '[ PALETTE ]', text: 'State boxes go here.' },
  { num: "06", title: '[ ANALYSIS ]', text: 'Score boxes go here.' },
];

export const exams: Exam[] = [
  { name: 'JEE Mains & Advanced', desc: 'Physics, Chemistry, Maths. No decoration.', meta: '90 Qs · 180 min' },
  { name: 'NEET UG', desc: 'Botany, Zoology, Physics, Chemistry.', meta: '200 Qs · 200 min' },
  { name: 'UPSC CSE', desc: 'GS and CSAT papers, raw.', meta: 'Prelims & Mains' },
  { name: 'GATE', desc: 'All branches with NAT.', meta: '65 Qs' },
  { name: 'UGC NET', desc: 'Paper 1 and 2.', meta: '82 subjects' },
  { name: 'SSC CGL', desc: 'Quant, reasoning, English, GK.', meta: '100 Qs' },
  { name: 'Banking PO', desc: 'SBI and IBPS patterns.', meta: 'Prelims & Mains' },
  { name: 'CAT · CUET · State', desc: 'Any PDF. No polish applied.', meta: 'Try now' },
];

export const testimonials: Testimonial[] = [
  { name: 'Ananya — JEE 2025', meta: 'Delhi · 31 mocks', quote: '“It refuses to be pretty and that is exactly why I trust it. The timer screams, I answer.”' },
  { name: 'Rohit — UPSC', meta: 'Pune · 24 mocks', quote: '“Every other tool felt like an ad. This feels like the exam hall basement — in a good way.”' },
  { name: 'Sneha — UGC NET', meta: 'Hyderabad · 17 mocks', quote: '“Ugly on purpose, accurate by design. My scores went up while my eyes adjusted.”' },
];

export const faqs: FaqItem[] = [
  { q: 'Is it supposed to look like this?', a: 'Yes. Nothing decorative survives here — only the exam does.' },
  { q: 'Does it parse scanned PDFs?', a: 'Yes. Messy scans welcome; the parser does not judge aesthetics.' },
  { q: 'How fast?', a: 'About forty seconds per full mock.' },
  { q: 'Free?', a: 'Three mocks free. No card, no onboarding tour.' },
];
