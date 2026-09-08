export interface Feature { num: string; title: string; text: string; }

export interface Exam { name: string; desc: string; meta: string; }

export interface Testimonial { name: string; meta: string; quote: string; }

export interface FaqItem { q: string; a: string; }

export const features: Feature[] = [
  { num: "01", title: 'Loot extraction', text: 'Every question type drops loot.' },
  { num: "02", title: 'Debuff marking', text: 'Negatives damage exactly as printed.' },
  { num: "03", title: 'Quest instructions', text: 'Verbatim quest text. Read it.' },
  { num: "04", title: 'Speedrun strats', text: 'Forty seconds, any percent.' },
  { num: "05", title: 'Party palette', text: 'Answered, marked, unvisited members.' },
  { num: "06", title: 'Victory analysis', text: 'Scores with fanfare.' },
];

export const exams: Exam[] = [
  { name: 'JEE Mains & Advanced', desc: 'Physics, Chemistry, Maths. Keep up.', meta: '90 Qs · 180 min' },
  { name: 'NEET UG', desc: 'Botany, Zoology, Physics, Chemistry.', meta: '200 Qs · 200 min' },
  { name: 'UPSC CSE', desc: 'GS and CSAT papers in motion.', meta: 'Prelims & Mains' },
  { name: 'GATE', desc: 'All branches with NAT.', meta: '65 Qs' },
  { name: 'UGC NET', desc: 'Paper 1 and 2.', meta: '82 subjects' },
  { name: 'SSC CGL', desc: 'Quant, reasoning, English, GK.', meta: '100 Qs' },
  { name: 'Banking PO', desc: 'SBI and IBPS patterns.', meta: 'Prelims & Mains' },
  { name: 'CAT · CUET · State', desc: 'Any PDF, set in motion.', meta: 'Try now' },
];

export const testimonials: Testimonial[] = [
  { name: 'Ananya — JEE 2025', meta: 'Delhi · 26 mocks', quote: '“Static pages put me to sleep. This one moves like my thoughts during a mock.”' },
  { name: 'Rohit — UPSC', meta: 'Pune · 19 mocks', quote: '“Every hover, every transition teaches. The interface itself coaches.”' },
  { name: 'Sneha — UGC NET', meta: 'Hyderabad · 13 mocks', quote: '“Motion with meaning. Nothing moves without telling me something.”' },
];

export const faqs: FaqItem[] = [
  { q: 'Does it parse scanned PDFs?', a: 'Yes — even blurry action shots of paper.' },
  { q: 'Is marking automatic?', a: 'Fully. The motion never touches accuracy.' },
  { q: 'How fast?', a: 'About forty seconds per full mock.' },
  { q: 'Free?', a: 'Three mocks free. Settle down optional.' },
];
