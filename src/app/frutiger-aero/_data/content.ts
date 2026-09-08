export interface Feature { num: string; title: string; text: string; }

export interface Exam { name: string; desc: string; meta: string; }

export interface Testimonial { name: string; meta: string; quote: string; }

export interface FaqItem { q: string; a: string; }

export const features: Feature[] = [
  { num: "01", title: 'Droplet extraction', text: 'Every question type, beaded perfectly.' },
  { num: "02", title: 'Dewy marking', text: 'Negatives glistening, never missed.' },
  { num: "03", title: 'Glass instructions', text: 'Original pages behind dewy glass.' },
  { num: "04", title: 'Morning speed', text: 'Forty seconds at sunrise pace.' },
  { num: "05", title: 'Puddle palette', text: 'Answered, marked, unvisited — rippling.' },
  { num: "06", title: 'Clear analysis', text: 'Scores like a clean windshield.' },
];

export const exams: Exam[] = [
  { name: 'JEE Mains & Advanced', desc: 'Physics, Chemistry, Maths. Old papers, timeless pressure.', meta: '90 Qs · 180 min' },
  { name: 'NEET UG', desc: 'Botany, Zoology, Physics, Chemistry.', meta: '200 Qs · 200 min' },
  { name: 'UPSC CSE', desc: 'GS and CSAT papers from the archives.', meta: 'Prelims & Mains' },
  { name: 'GATE', desc: 'All branches with NAT.', meta: '65 Qs' },
  { name: 'UGC NET', desc: 'Paper 1 and 2.', meta: '82 subjects' },
  { name: 'SSC CGL', desc: 'Quant, reasoning, English, GK.', meta: '100 Qs' },
  { name: 'Banking PO', desc: 'SBI and IBPS patterns.', meta: 'Prelims & Mains' },
  { name: 'CAT · CUET · State', desc: 'Any PDF, blasted from the past.', meta: 'Try now' },
];

export const testimonials: Testimonial[] = [
  { name: 'Ananya — JEE 2025', meta: 'Delhi · 30 mocks', quote: '“Nostalgia got me in; the exam accuracy made me stay. My childhood PC never tested me this well.”' },
  { name: 'Rohit — UPSC', meta: 'Pune · 23 mocks', quote: '“Every pixel feels intentional. The timer beeps like 1998 and I answer like 2026.”' },
  { name: 'Sneha — UGC NET', meta: 'Hyderabad · 16 mocks', quote: '“Retro looks, modern parser. Scanned PDFs from any decade welcome.”' },
];

export const faqs: FaqItem[] = [
  { q: 'Does it parse old scanned PDFs?', a: 'Yes — the older and dustier, the more at home it feels.' },
  { q: 'Is marking automatic?', a: 'Fully. Duration, negatives and sections detected.' },
  { q: 'How fast?', a: 'About forty seconds per full mock.' },
  { q: 'Free?', a: 'Three mocks free. No card, no time machine required.' },
];
