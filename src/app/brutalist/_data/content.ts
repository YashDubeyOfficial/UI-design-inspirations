export interface WhyFeature {
  title: string;
  text: string;
}

export interface ExamRow {
  exam: string;
  details: string;
  format: string;
  special?: boolean;
}

export interface Faq {
  q: string;
  a: string;
  linkText?: string;
}

export const whyFeatures: WhyFeature[] = [
  { title: "01 EXTRACTION", text: "MCQs, MSQs, NAT, comprehension, images — even when numbering restarts per section." },
  { title: "02 MARKS", text: "Detects +4 −1, +3 −0.33, part-wise marking, sectional cut-offs." },
  { title: "03 INSTRUCTIONS", text: "Kept verbatim. Displayed exactly as original before you start." },
  { title: "04 SPEED", text: "Upload 10:00, attempt by 10:01. ~40 seconds." },
  { title: "05 PALETTE", text: "Answered / not-answered / marked — with keys 1-4, M, N." },
  { title: "06 ANALYSIS", text: "Score, accuracy, time/Q, section-wise strength." },
];

export const examRows: ExamRow[] = [
  { exam: "JEE MAINS & ADV", details: "90 Qs • 180 mins • PCM", format: "+4 −1 • NAT • PARA" },
  { exam: "NEET UG", details: "200 Qs • 200 mins • PCB", format: "+4 −1 • 180Q attempt" },
  { exam: "UPSC CSE", details: "GS • CSAT • COMPREHENSION", format: "2 hrs • 1/3 negative" },
  { exam: "GATE", details: "65 Qs • 30 papers • MSQ+NAT", format: "+calc • branch wise" },
  { exam: "UGC NET", details: "Paper 1+2 • 82 subjects", format: "3 hrs • no negative" },
  { exam: "SSC CGL", details: "100 Qs • 60 mins • GS/QUANT", format: "sectional timer" },
  { exam: "BANKING PO", details: "SBI/IBPS • Prelims+Mains", format: "sectional cut-off" },
  { exam: "CAT • CUET • STATE", details: "ANY PDF → MOCK", format: "YOU BRING PDF", special: true },
];

export const faqs: Faq[] = [
  { q: "Q: Will it work with scanned PDFs?", a: "A: Yes. Vision + LLM reads scans, photos, mixed PDFs. If human can read, Parakh can." },
  { q: "Q: Is the CBT really like NTA?", a: "A: Yes. Timer, palette, section jump, auto-submit, instructions screen. Same anxiety." },
  { q: "Q: Free?", a: "A: 3 mocks free. No card. Then ₹299/month.", linkText: "Pricing table →" },
];
