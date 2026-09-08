export interface Feature { num: string; title: string; text: string; }

export interface Exam { name: string; desc: string; meta: string; }

export interface Testimonial { name: string; meta: string; quote: string; }

export interface FaqItem { q: string; a: string; }

export const features: Feature[] = [
  { num: "01", title: 'Row extraction', text: 'Every question type, one row each.' },
  { num: "02", title: 'Cell marking', text: 'Negatives in 10px cells.' },
  { num: "03", title: 'Footnote instructions', text: 'Verbatim, 11px, gray.' },
  { num: "04", title: 'Fast ingest', text: 'Forty seconds, pipe-delimited.' },
  { num: "05", title: 'Grid palette', text: '90 cells, three colors.' },
  { num: "06", title: 'Pivot analysis', text: 'Scores sliceable six ways.' },
];

export const exams: Exam[] = [
  { name: 'JEE Mains & Advanced', desc: 'Physics, Chemistry, Maths. Set in the house style.', meta: '90 Qs · 180 min' },
  { name: 'NEET UG', desc: 'Botany, Zoology, Physics, Chemistry.', meta: '200 Qs · 200 min' },
  { name: 'UPSC CSE', desc: 'GS and CSAT papers, well edited.', meta: 'Prelims & Mains' },
  { name: 'GATE', desc: 'All branches with NAT.', meta: '65 Qs' },
  { name: 'UGC NET', desc: 'Paper 1 and 2.', meta: '82 subjects' },
  { name: 'SSC CGL', desc: 'Quant, reasoning, English, GK.', meta: '100 Qs' },
  { name: 'Banking PO', desc: 'SBI and IBPS patterns.', meta: 'Prelims & Mains' },
  { name: 'CAT · CUET · State', desc: 'Any PDF, laid out beautifully.', meta: 'Try now' },
];

export const testimonials: Testimonial[] = [
  { name: 'Ananya — JEE 2025', meta: 'Delhi · 28 mocks', quote: '“Typography nerds, rejoice. An exam tool with genuine opinions about type.”' },
  { name: 'Rohit — UPSC', meta: 'Pune · 21 mocks', quote: '“Layout so considered it makes revision feel like reading a good magazine.”' },
  { name: 'Sneha — UGC NET', meta: 'Hyderabad · 14 mocks', quote: '“Every screen could be framed. The timer has never looked this good.”' },
];

export const faqs: FaqItem[] = [
  { q: 'Does it parse scanned PDFs?', a: 'Yes — even rough scans get the full editorial treatment.' },
  { q: 'Is marking automatic?', a: 'Fully. Duration, negatives and sections detected.' },
  { q: 'How fast?', a: 'About forty seconds per full mock.' },
  { q: 'Free?', a: 'Three mocks free. No subscription to the periodical required.' },
];
