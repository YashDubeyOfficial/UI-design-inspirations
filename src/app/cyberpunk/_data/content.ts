export interface Feature {
  icon: string;
  title: string;
  text: string;
}

export interface Exam {
  name: string;
  meta: string;
  tag: string;
  mag?: boolean;
  special?: boolean;
}

export const features: Feature[] = [
  { icon: "◫", title: "GHOST EXTRACTION", text: "MCQs, MSQs, NAT, para sets, image Qs — even when numbering resets per section, we track the ghost." },
  { icon: "◎", title: "MARKING MATRIX", text: "+4 −1, +3 −0.33, sectional cut-offs — all sniffed and wired to palette." },
  { icon: "⬙", title: "INSTRUCTIONS // VERBATIM", text: "Original instruction pages mirrored exactly — you accept before you jack in." },
  { icon: "⚡", title: "42 SECONDS TO JACK", text: "Upload at 10:00, dive by 10:01. Chrome speed." },
  { icon: "▦", title: "PALETTE /// RGB", text: "Answered / marked / not visited in neon — with keys 1-4, M, N." },
  { icon: "◈", title: "NEON ANALYTICS", text: "Score, accuracy, time/Q, section heatmap — all glowing after submit." },
];

export const exams: Exam[] = [
  { name: "JEE MAINS", meta: "90 Qs • 180m • 12.5L runners", tag: "PHYSICS / CHEM" },
  { name: "NEET UG", meta: "200 Qs • 200m • 20L", tag: "BOTANY / ZOOLOGY", mag: true },
  { name: "UPSC CSE", meta: "GS • CSAT • Comprehension", tag: "MOST COMPLEX" },
  { name: "GATE", meta: "65 Qs • 30 papers", tag: "ALL BRANCHES", mag: true },
  { name: "UGC NET", meta: "Paper 1+2 • 82 subjects", tag: "NO NEGATIVE" },
  { name: "SSC CGL", meta: "100 Qs • 60m • 30L+", tag: "QUANT / GK", mag: true },
  { name: "BANKING PO", meta: "SBI / IBPS • sectional", tag: "ENG / HIN" },
  { name: "CAT • CUET • STATE", meta: "ANY PDF — JACK IT NOW", tag: "TRY →", special: true },
];
