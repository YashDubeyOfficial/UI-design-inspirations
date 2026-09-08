export interface Feature {
  icon: string;
  title: string;
  text: string;
}

export interface ExamCard {
  title: string;
  desc: string;
  tag: string;
  featured?: boolean;
}

export interface FabLink {
  href: string;
  label: string;
  detail: string;
  active?: boolean;
}

export const features: Feature[] = [
  {
    icon: "◫",
    title: "QUESTION ZAP!",
    text: "MCQs, MSQs, NAT, comprehension — even image Qs. Zapped correctly.",
  },
  {
    icon: "◎",
    title: "MARKS & NEGATIVES!",
    text: "+4 −1, +3 −0.33, sectional rules — all POW-detected.",
  },
  {
    icon: "⬙",
    title: "INSTRUCTIONS!",
    text: "Original instruction pages kept verbatim — no surprise.",
  },
  {
    icon: "⚡",
    title: "40 SECONDS!",
    text: "Upload at 10:00, attempt by 10:01. Comic speed.",
  },
  {
    icon: "▦",
    title: "PALETTE POP!",
    text: "Loud answered / marked / not-visited — no confusion.",
  },
  {
    icon: "◈",
    title: "ANALYSIS — KAPOW!",
    text: "Score, accuracy, time per Q, section-wise power.",
  },
];

export const examCards: ExamCard[] = [
  {
    title: "JEE MAINS",
    desc: "90 Qs • 180m • 12.5L aspirants",
    tag: "Physics/Chem/Maths",
  },
  {
    title: "NEET UG",
    desc: "200 Qs • 200m • 20L",
    tag: "Botany/Zoology",
  },
  {
    title: "UPSC CSE",
    desc: "GS • CSAT • Detailed",
    tag: "Most detailed",
  },
  {
    title: "GATE",
    desc: "65 Qs • 30 papers",
    tag: "All branches",
  },
  {
    title: "UGC NET",
    desc: "Paper 1+2 • 82 subjects",
    tag: "No negative",
  },
  {
    title: "SSC CGL",
    desc: "100 Qs • 60m • 30L+ candidates",
    tag: "Quant/GK",
  },
  {
    title: "BANKING PO",
    desc: "SBI/IBPS • sectional",
    tag: "English/Hindi",
  },
  {
    title: "CAT • CUET • STATE",
    desc: "Any PDF — try now! POW!",
    tag: "TRY →",
    featured: true,
  },
];

export const fabLinks: FabLink[] = [
  { href: "/", label: "V1 SaaS", detail: "Premium SaaS" },
  { href: "/neumorphic", label: "Neumorphic", detail: "Soft extruded" },
  { href: "/skeuomorphic", label: "Skeuomorphic", detail: "Wood + paper" },
  { href: "/glassmorphism", label: "Glassmorphism", detail: "Frosted glass" },
  { href: "/claymorphism", label: "Claymorphism", detail: "Soft clay" },
  { href: "/aurora", label: "Aurora", detail: "Glowing gradients" },
  { href: "/metalmorphism", label: "Metalmorphism", detail: "Brushed metal" },
  { href: "/flat", label: "Flat", detail: "Zero depth" },
  { href: "/flat-2", label: "Flat 2.0", detail: "Semi-flat" },
  { href: "/material", label: "Material", detail: "Google depth" },
  { href: "/fluent", label: "Fluent", detail: "Microsoft light" },
  { href: "/hig", label: "HIG", detail: "Apple clean" },
  { href: "/", label: "Neubrutalism", detail: "Raw neon", active: true },
  { href: "/brutalist", label: "Brutalist", detail: "Anti-UX raw" },
  { href: "/cyberpunk", label: "Cyberpunk", detail: "Neon synthwave" },
  { href: "/y2k-aero", label: "Y2K Aero", detail: "Glossy bubbles" },
  { href: "/solarpunk", label: "Solarpunk", detail: "Green futurism" },
  { href: "/bento", label: "Bento Grid", detail: "Boxed layout" },
  { href: "/minimalist", label: "Minimalist", detail: "Whites + type" },
  { href: "/dark", label: "Dark Mode", detail: "OLED first" },
];
