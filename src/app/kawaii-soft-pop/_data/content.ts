export interface Feature { num: string; title: string; text: string; }

export interface Exam { name: string; desc: string; meta: string; }

export interface Testimonial { name: string; meta: string; quote: string; }

export interface FaqItem { q: string; a: string; }

export const features: Feature[] = [
  { num: "01", title: 'Huggy extraction', text: 'Every question type, embraced.' },
  { num: "02", title: 'Blush marking', text: 'Negatives, gently pink.' },
  { num: "03", title: 'Diary instructions', text: 'Verbatim with stickers.' },
  { num: "04", title: 'Sparkle speed', text: 'Forty seconds of glitter.' },
  { num: "05", title: 'Candy palette', text: 'Answered, marked, unvisited sweets.' },
  { num: "06", title: 'Star analysis', text: 'Scores with gold stars.' },
];

export const exams: Exam[] = [
  { name: 'JEE Mains & Advanced', desc: 'Physics, Chemistry, Maths. Fun papers, serious pressure.', meta: '90 Qs · 180 min' },
  { name: 'NEET UG', desc: 'Botany, Zoology, Physics, Chemistry.', meta: '200 Qs · 200 min' },
  { name: 'UPSC CSE', desc: 'GS and CSAT papers, joyfully.', meta: 'Prelims & Mains' },
  { name: 'GATE', desc: 'All branches with NAT.', meta: '65 Qs' },
  { name: 'UGC NET', desc: 'Paper 1 and 2.', meta: '82 subjects' },
  { name: 'SSC CGL', desc: 'Quant, reasoning, English, GK.', meta: '100 Qs' },
  { name: 'Banking PO', desc: 'SBI and IBPS patterns.', meta: 'Prelims & Mains' },
  { name: 'CAT · CUET · State', desc: 'Any PDF, played with gladly.', meta: 'Try now' },
];

export const testimonials: Testimonial[] = [
  { name: 'Ananya — JEE 2025', meta: 'Delhi · 27 mocks', quote: '“Studying finally feels like play without losing a drop of rigor. My streak is alive.”' },
  { name: 'Rohit — UPSC', meta: 'Pune · 20 mocks', quote: '“Joyful, bouncy, exact. The timer winks and I answer faster.”' },
  { name: 'Sneha — UGC NET', meta: 'Hyderabad · 14 mocks', quote: '“Who knew exam prep could giggle? Scores up, spirits up.”' },
];

export const faqs: FaqItem[] = [
  { q: 'Does it parse scanned PDFs?', a: 'Yes — doodles, stickers and all.' },
  { q: 'Is marking automatic?', a: 'Fully. Fun never touches accuracy.' },
  { q: 'How fast?', a: 'About forty seconds per full mock.' },
  { q: 'Free?', a: 'Three mocks free. Smiles included.' },
];
