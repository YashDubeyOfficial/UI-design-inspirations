export interface Feature { num: string; title: string; text: string; }

export interface Exam { name: string; desc: string; meta: string; }

export interface Testimonial { name: string; meta: string; quote: string; }

export interface FaqItem { q: string; a: string; }

export const features: Feature[] = [
  { num: "01", title: 'True extraction', text: 'Every question type, no filter.' },
  { num: "02", title: 'Honest marking', text: 'Negatives in natural light.' },
  { num: "03", title: 'Contact instructions', text: 'Verbatim thumbnails first.' },
  { num: "04", title: 'Golden speed', text: 'Forty seconds of magic hour.' },
  { num: "05", title: 'Natural palette', text: 'Answered, marked, unvisited tones.' },
  { num: "06", title: 'Matt analysis', text: 'Scores, non-glossy.' },
];

export const exams: Exam[] = [
  { name: 'JEE Mains & Advanced', desc: 'Physics, Chemistry, Maths. Future papers, present pressure.', meta: '90 Qs · 180 min' },
  { name: 'NEET UG', desc: 'Botany, Zoology, Physics, Chemistry.', meta: '200 Qs · 200 min' },
  { name: 'UPSC CSE', desc: 'GS and CSAT papers, uplinked.', meta: 'Prelims & Mains' },
  { name: 'GATE', desc: 'All branches with NAT.', meta: '65 Qs' },
  { name: 'UGC NET', desc: 'Paper 1 and 2.', meta: '82 subjects' },
  { name: 'SSC CGL', desc: 'Quant, reasoning, English, GK.', meta: '100 Qs' },
  { name: 'Banking PO', desc: 'SBI and IBPS patterns.', meta: 'Prelims & Mains' },
  { name: 'CAT · CUET · State', desc: 'Any PDF, beamed into the future.', meta: 'Try now' },
];

export const testimonials: Testimonial[] = [
  { name: 'Ananya — JEE 2025', meta: 'Delhi · 32 mocks', quote: '“It feels five years ahead and exactly on syllabus. The future arrived early.”' },
  { name: 'Rohit — UPSC', meta: 'Pune · 24 mocks', quote: '“Interfaces I have only seen in films — with real NTA logic underneath.”' },
  { name: 'Sneha — UGC NET', meta: 'Hyderabad · 18 mocks', quote: '“My PDFs look like mission briefings now. Preparation feels cinematic.”' },
];

export const faqs: FaqItem[] = [
  { q: 'Does it parse scanned PDFs?', a: 'Yes — even paper from the past uploads to the future.' },
  { q: 'Is marking automatic?', a: 'Fully. Duration, negatives and sections detected.' },
  { q: 'How fast?', a: 'About forty seconds per full mock.' },
  { q: 'Free?', a: 'Three mocks free. No credits required.' },
];
