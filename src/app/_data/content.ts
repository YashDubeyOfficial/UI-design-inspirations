import type { CSSProperties } from "react";

export interface ExamPill {
  bold?: string;
  rest: string;
  live?: boolean;
}

export interface Feature {
  icon: string;
  title: string;
  desc: string;
}

export interface ExamCard {
  title: string;
  tag: string;
  desc: string;
  meta: string;
  cardStyle?: CSSProperties;
  titleStyle?: CSSProperties;
  tagStyle?: CSSProperties;
  descStyle?: CSSProperties;
  metaStyle?: CSSProperties;
}

export interface Testimonial {
  avatar: string;
  avatarStyle: CSSProperties;
  name: string;
  detail: string;
  quote: string;
  tag: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FabLink {
  href: string;
  label: string;
  sub: string;
  active?: boolean;
}

export const examPills: ExamPill[] = [
  { bold: "JEE", rest: " • Mains & Advanced" },
  { bold: "NEET", rest: " • UG" },
  { rest: "UPSC • CSE", live: true },
  { rest: "GATE" },
  { rest: "UGC NET / JRF" },
  { rest: "SSC CGL" },
  { rest: "Banking" },
  { rest: "CAT" },
  { rest: "CUET" },
  { rest: "+ State Exams" },
];

export const features: Feature[] = [
  {
    icon: "◫",
    title: "Question extraction that works",
    desc: "MCQs, MSQs, NAT, comprehension sets, image-based questions — even when numbering restarts per section.",
  },
  {
    icon: "◎",
    title: "Marks, negatives & section rules",
    desc: "Detects +4 −1, +3 −0.33, part-specific marking, sectional cut-offs and instruction pages.",
  },
  {
    icon: "⬙",
    title: "Instructions kept verbatim",
    desc: "Original exam instructions displayed exactly as in PDF before you start — no surprises.",
  },
  {
    icon: "⚡",
    title: "Ready in ~40 seconds",
    desc: "Upload at 10:00, start attempting by 10:01. No manual question entry, no timer setup.",
  },
  {
    icon: "▦",
    title: "True CBT palette & controls",
    desc: "Answered, not answered, marked-for-review, not visited — with keyboard shortcuts (1-4, M, N).",
  },
  {
    icon: "◈",
    title: "Analysis after submit",
    desc: "Score, accuracy, time per question, section-wise strength, and which questions to revisit.",
  },
];

export const examCards: ExamCard[] = [
  {
    title: "JEE Mains & Advanced",
    tag: "90 Qs • 180m",
    desc: "Physics, Chemistry, Maths with NAT & paragraph types. PYQs back to 2012.",
    meta: "12.5L aspirants / year",
  },
  {
    title: "NEET UG",
    tag: "200 Qs • 200m",
    desc: "Botany-Zoology-Physics-Chemistry with section-wise flow and +4 −1.",
    meta: "20L aspirants / year",
  },
  {
    title: "UPSC CSE",
    tag: "GS • CSAT",
    desc: "Prelims & Mains papers, comprehension sets, exact instruction screens.",
    meta: "Most detailed",
  },
  {
    title: "GATE",
    tag: "65 Qs • 180m",
    desc: "MCQ + MSQ + NAT with virtual calculator and branch-wise sections.",
    meta: "All 30 papers",
  },
  {
    title: "UGC NET / JRF",
    tag: "Paper 1+2",
    desc: "Teaching & research aptitude + subject papers, 3 hrs, no negative.",
    meta: "82 subjects",
  },
  {
    title: "SSC CGL & CHSL",
    tag: "100 Qs • 60m",
    desc: "Quant, reasoning, English, GK — sectional timers where applicable.",
    meta: "30L+ candidates",
  },
  {
    title: "Banking PO/SO",
    tag: "SBI • IBPS",
    desc: "Prelims + Mains with sectional cut-offs and speed-focused palette.",
    meta: "English & Hindi",
  },
  {
    title: "CAT • CUET • State",
    tag: "Any PDF",
    desc: "If you have the PDF, Parakh will read it. Upload any state exam, TET, or private test series.",
    meta: "Try it now →",
    cardStyle: {
      background: "var(--ink)",
      color: "white",
      borderColor: "var(--ink)",
    },
    titleStyle: { color: "white" },
    tagStyle: {
      background: "var(--lime)",
      color: "var(--ink)",
      borderColor: "var(--lime)",
    },
    descStyle: { color: "rgba(255,255,255,.7)" },
    metaStyle: { color: "var(--lime)" },
  },
];

export const testimonials: Testimonial[] = [
  {
    avatar: "A",
    avatarStyle: { background: "#0E1424" },
    name: "Ananya • JEE 2025",
    detail: "Delhi • 97.2 percentile",
    quote:
      "“I had 8 years of PYQs as PDFs. Parakh turned them into mocks that felt exactly like my actual JEE screen. My speed improved in 3 weeks.”",
    tag: "JEE Main • 42 mocks created",
  },
  {
    avatar: "R",
    avatarStyle: { background: "#C8F000", color: "#0E1424" },
    name: "Rohit • UPSC CSE",
    detail: "Pune • 2nd attempt",
    quote:
      "“CSAT papers have tricky instructions and sectional quirks. Parakh caught every rule automatically. It’s the first tool that respects UPSC’s format.”",
    tag: "UPSC Prelims • 31 mocks",
  },
  {
    avatar: "S",
    avatarStyle: { background: "#FFE9A8", color: "#0E1424" },
    name: "Sneha • UGC NET",
    detail: "Hyderabad • JRF qualified",
    quote:
      "“My coaching material was scanned images, not text. I thought it wouldn’t work — but it did. 68 questions extracted perfectly in under a minute.”",
    tag: "NET Education • 19 mocks",
  },
];

export const faqs: FaqItem[] = [
  {
    q: "Will it work with scanned PDFs / images?",
    a: "Yes. Parakh uses vision + language models to read scanned, photographed and mixed PDFs — even handwritten annotations don’t break it. If a human can read it, Parakh can parse it.",
  },
  {
    q: "Do I need to tell it the marking scheme or time?",
    a: "No. If your PDF mentions duration, marks, negatives or section rules, Parakh detects them. You can review and edit in one click before starting.",
  },
  {
    q: "Is the test really like TCS iON / NTA?",
    a: "We rebuilt the CBT interaction — palette states, mark-for-review, section jumps, on-screen calculator flag, and auto-submit on timeout. It’s built to build temperament.",
  },
  {
    q: "Is it free? What about my PDFs?",
    a: "Start free — 3 full mocks, no card needed. Your PDFs stay private, encrypted at rest, and never used for training without permission. Delete anytime.",
  },
];

export const fabLinks: FabLink[] = [
  { href: "/", label: "V1 SaaS", sub: "Premium SaaS • Current", active: true },
  { href: "/neumorphic", label: "Neumorphic", sub: "Soft extruded" },
  { href: "/skeuomorphic", label: "Skeuomorphic", sub: "Wood + paper" },
  { href: "/glassmorphism", label: "Glassmorphism", sub: "Frosted glass" },
  { href: "/claymorphism", label: "Claymorphism", sub: "Soft clay" },
  { href: "/aurora", label: "Aurora", sub: "Glowing gradients" },
  { href: "/metalmorphism", label: "Metalmorphism", sub: "Brushed metal" },
  { href: "/flat", label: "Flat", sub: "Zero depth" },
  { href: "/flat-2", label: "Flat 2.0", sub: "Semi-flat" },
  { href: "/material", label: "Material", sub: "Google depth" },
  { href: "/fluent", label: "Fluent", sub: "Microsoft light" },
  { href: "/hig", label: "HIG", sub: "Apple clean" },
  { href: "/neubrutalism", label: "Neubrutalism", sub: "Raw neon" },
  { href: "/brutalist", label: "Brutalist", sub: "Anti-UX raw" },
  { href: "/cyberpunk", label: "Cyberpunk", sub: "Neon synthwave" },
  { href: "/y2k-aero", label: "Y2K Aero", sub: "Glossy bubbles" },
  { href: "/solarpunk", label: "Solarpunk", sub: "Green futurism" },
  { href: "/bento", label: "Bento Grid", sub: "Boxed layout" },
  { href: "/minimalist", label: "Minimalist", sub: "Whites + type" },
  { href: "/dark", label: "Dark Mode", sub: "OLED first" },
];
