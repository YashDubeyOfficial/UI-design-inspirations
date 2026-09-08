export interface Feature { num: string; title: string; text: string; }

export interface Exam { name: string; desc: string; meta: string; }

export interface Testimonial { name: string; meta: string; quote: string; }

export interface FaqItem { q: string; a: string; }

export const features: Feature[] = [
  { num: "01", title: 'FT', text: 'FX' },
];

export const exams: Exam[] = [
  { name: 'N', desc: 'D', meta: 'M' },
];

export const testimonials: Testimonial[] = [
  { name: 'N', meta: 'M', quote: 'Q' },
];

export const faqs: FaqItem[] = [
  { q: 'Q', a: 'A' },
];
