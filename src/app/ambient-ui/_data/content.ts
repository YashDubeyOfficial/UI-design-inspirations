export interface Feature { num: string; title: string; text: string; }

export interface Exam { name: string; desc: string; meta: string; }

export interface Testimonial { name: string; meta: string; quote: string; }

export interface FaqItem { q: string; a: string; }

export const features: Feature[] = [
  { num: "01", title: 'Hushed extraction', text: 'Every question type, whispered in.' },
  { num: "02", title: 'Glowing marking', text: 'Negatives like embers.' },
  { num: "03", title: 'Veiled instructions', text: 'Verbatim through sheer curtains.' },
  { num: "04", title: 'Slow forty', text: 'Seconds pass like honey.' },
  { num: "05", title: 'Breathing palette', text: 'Answered, marked, unvisited sighs.' },
  { num: "06", title: 'Dream analysis', text: 'Scores recalled gently.' },
];

export const exams: Exam[] = [
  { name: 'JEE Mains & Advanced', desc: 'Physics, Chemistry, Maths. Still rigorous in the wild.', meta: '90 Qs · 180 min' },
  { name: 'NEET UG', desc: 'Botany, Zoology, Physics, Chemistry. Naturally.', meta: '200 Qs · 200 min' },
  { name: 'UPSC CSE', desc: 'GS and CSAT papers, foraged.', meta: 'Prelims & Mains' },
  { name: 'GATE', desc: 'All branches with NAT.', meta: '65 Qs' },
  { name: 'UGC NET', desc: 'Paper 1 and 2.', meta: '82 subjects' },
  { name: 'SSC CGL', desc: 'Quant, reasoning, English, GK.', meta: '100 Qs' },
  { name: 'Banking PO', desc: 'SBI and IBPS patterns.', meta: 'Prelims & Mains' },
  { name: 'CAT · CUET · State', desc: 'Any PDF, grown wild.', meta: 'Try now' },
];

export const testimonials: Testimonial[] = [
  { name: 'Ananya — JEE 2025', meta: 'Delhi · 29 mocks', quote: '“It feels alive without moving. My preparation finally has seasons.”' },
  { name: 'Rohit — UPSC', meta: 'Pune · 22 mocks', quote: '“Nature outside, NTA inside. The calmest hard exam I know.”' },
  { name: 'Sneha — UGC NET', meta: 'Hyderabad · 15 mocks', quote: '“My PDFs composted into something beautiful and exact.”' },
];

export const faqs: FaqItem[] = [
  { q: 'Does it parse scanned PDFs?', a: 'Yes — even sun-bleached field scans.' },
  { q: 'Is marking automatic?', a: 'Fully. Nature finds a way, automatically.' },
  { q: 'How fast?', a: 'About forty seconds per full mock.' },
  { q: 'Free?', a: 'Three mocks free. No pesticides.' },
];
