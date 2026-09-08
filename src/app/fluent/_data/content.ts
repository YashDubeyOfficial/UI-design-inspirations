export interface NavLink {
  href: string;
  label: string;
}

export interface HeroOption {
  code: string;
  text: string;
  selected?: boolean;
}

export interface PaletteDot {
  label: string;
  variant?: "ans" | "mark" | "curr";
}

export interface StripPill {
  bold?: string;
  text: string;
  live?: boolean;
}

export interface Feature {
  icon: string;
  title: string;
  text: string;
}

export interface ExperiencePoint {
  icon: string;
  title: string;
  body: string;
}

export interface ExamCard {
  title: string;
  desc: string;
  meta: string;
  dark?: boolean;
}

export interface FabLink {
  href: string;
  label: string;
  active?: boolean;
}

export const navLinks: NavLink[] = [
  { href: "#how", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#exams", label: "Exams" },
  { href: "#support", label: "Support" },
];

export const heroOptions: HeroOption[] = [
  { code: "A", text: "144" },
  { code: "B", text: "136 — Selected", selected: true },
  { code: "C", text: "128" },
  { code: "D", text: "120" },
];

export const heroPalette: PaletteDot[] = [
  { label: "1", variant: "ans" },
  { label: "2", variant: "mark" },
  { label: "3" },
  { label: "4" },
  { label: "5", variant: "ans" },
  { label: "6" },
  { label: "7", variant: "curr" },
  { label: "8", variant: "ans" },
  { label: "9" },
  { label: "10" },
];

export const stripPills: StripPill[] = [
  { bold: "JEE", text: "• Mains" },
  { bold: "NEET", text: "• UG" },
  { text: "UPSC • CSE", live: true },
  { text: "GATE • 30 papers" },
  { text: "SSC • Banking" },
  { text: "CAT • CUET" },
  { text: "Any PDF → Fluent mock", live: true },
];

export const features: Feature[] = [
  { icon: "▣", title: "Reads every Q", text: "MCQ, MSQ, NAT, comprehension — reveal-soft but accurate." },
  { icon: "◈", title: "Marks & negatives", text: "+4 −1, +3 −0.33 — fluent chips." },
  { icon: "≡", title: "Instructions depth", text: "Verbatim, scrollable, acrylic sheet before Start." },
  { icon: "⚡", title: "~40 seconds", text: "Upload 10:00, attempt 10:01." },
  { icon: "▦", title: "Palette + pivot", text: "Answered / marked — Fluent pivot tabs, keys 1-4 M N." },
  { icon: "✔", title: "Analysis after", text: "Score, accuracy, time/Q — acrylic cards." },
];

export const experiencePoints: ExperiencePoint[] = [
  { icon: "◷", title: "Real countdown.", body: "00:00 → depth collapses and submits." },
  { icon: "▦", title: "Depth palette.", body: "Shadows separate states, mica stays calm." },
  { icon: "⇄", title: "Acrylic sections.", body: "Pivot with reveal, respect locks." },
];

export const examCards: ExamCard[] = [
  { title: "JEE Mains & Adv", desc: "PCM, NAT, paragraph • PYQs 2012→", meta: "12.5L / year" },
  { title: "NEET UG", desc: "200 Qs • Botany-Zoology-Phys-Chem", meta: "20L / year" },
  { title: "UPSC CSE", desc: "GS + CSAT • exact instruction depth", meta: "Most detailed" },
  { title: "GATE", desc: "MCQ + MSQ + NAT • calc • 30 papers", meta: "65 Qs • 180m" },
  { title: "UGC NET", desc: "Paper 1+2 • 82 subjects • 3h", meta: "82 subjects" },
  { title: "SSC CGL", desc: "Quant • Reasoning • English • GK", meta: "30L+ candidates" },
  { title: "Banking PO", desc: "SBI • IBPS • sectional cutoffs", meta: "English & Hindi" },
  { title: "CAT • CUET • STATE", desc: "Any PDF — state TET, PCS, private series.", meta: "Try now →", dark: true },
];

export const fabLinks: FabLink[] = [
  { href: "/", label: "V1 SaaS" },
  { href: "/neumorphic", label: "Neumorphic" },
  { href: "/skeuomorphic", label: "Skeuomorphic" },
  { href: "/glassmorphism", label: "Glassmorphism" },
  { href: "/claymorphism", label: "Claymorphism" },
  { href: "/aurora", label: "Aurora" },
  { href: "/metalmorphism", label: "Metalmorphism" },
  { href: "/flat", label: "Flat" },
  { href: "/flat-2", label: "Flat 2.0" },
  { href: "/material", label: "Material" },
  { href: "/", label: "Fluent", active: true },
  { href: "/hig", label: "HIG" },
  { href: "/neubrutalism", label: "Neubrutalism" },
  { href: "/brutalist", label: "Brutalist" },
  { href: "/cyberpunk", label: "Cyberpunk" },
  { href: "/y2k-aero", label: "Y2K Aero" },
  { href: "/solarpunk", label: "Solarpunk" },
  { href: "/bento", label: "Bento Grid" },
  { href: "/minimalist", label: "Minimalist" },
  { href: "/dark", label: "Dark Mode" },
];
