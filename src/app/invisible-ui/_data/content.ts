export interface Feature { num: string; title: string; text: string; }

export interface Exam { name: string; desc: string; meta: string; }

export interface Testimonial { name: string; meta: string; quote: string; }

export interface FaqItem { q: string; a: string; }

export const features: Feature[] = [
  { num: "01", title: 'Unseen extraction', text: 'Every question type, no ceremony.' },
  { num: "02", title: 'Implied marking', text: 'Negatives simply handled.' },
  { num: "03", title: 'Faint instructions', text: 'Verbatim in small gray.' },
  { num: "04", title: 'Instant hall', text: 'Forty seconds you will not feel.' },
  { num: "05", title: 'Dot palette', text: 'Answered, marked, unvisited dots.' },
  { num: "06", title: 'Ghost analysis', text: 'Scores appear, then the page rests.' },
];

export const exams: Exam[] = [
  { name: 'JEE Mains & Advanced', desc: 'Physics, Chemistry, Maths. Intelligently arranged.', meta: '90 Qs · 180 min' },
  { name: 'NEET UG', desc: 'Botany, Zoology, Physics, Chemistry.', meta: '200 Qs · 200 min' },
  { name: 'UPSC CSE', desc: 'GS and CSAT papers, understood deeply.', meta: 'Prelims & Mains' },
  { name: 'GATE', desc: 'All branches with NAT.', meta: '65 Qs' },
  { name: 'UGC NET', desc: 'Paper 1 and 2.', meta: '82 subjects' },
  { name: 'SSC CGL', desc: 'Quant, reasoning, English, GK.', meta: '100 Qs' },
  { name: 'Banking PO', desc: 'SBI and IBPS patterns.', meta: 'Prelims & Mains' },
  { name: 'CAT · CUET · State', desc: 'Any PDF, intelligently mocked.', meta: 'Try now' },
];

export const testimonials: Testimonial[] = [
  { name: 'Ananya — JEE 2025', meta: 'Delhi · 33 mocks', quote: '“It anticipates what I need before I ask. Studying feels telepathic.”' },
  { name: 'Rohit — UPSC', meta: 'Pune · 25 mocks', quote: '“The interface gets out of the way so completely I forget software is involved.”' },
  { name: 'Sneha — UGC NET', meta: 'Hyderabad · 19 mocks', quote: '“Personal, predictive, polite. My preparation finally feels one-on-one.”' },
];

export const faqs: FaqItem[] = [
  { q: 'Does it parse scanned PDFs?', a: 'Yes — understanding precedes everything here.' },
  { q: 'Is marking automatic?', a: 'Fully. Intelligence handles the details.' },
  { q: 'How fast?', a: 'About forty seconds per full mock.' },
  { q: 'Free?', a: 'Three mocks free. No intelligence test required.' },
];
