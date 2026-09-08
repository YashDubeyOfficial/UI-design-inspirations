import type { CSSProperties } from "react";

export interface ExamPill {
  bold?: string;
  text: string;
  live?: boolean;
  style?: CSSProperties;
}

export const examPills: ExamPill[] = [
  { bold: "GATE", text: " • All 30 papers" },
  { bold: "JEE", text: " • 90 Qs" },
  { text: "SSC • JE", live: true },
  { text: "NEET" },
  { text: "UPSC" },
  { text: "Banking" },
  { text: "CAT" },
  {
    text: "+ Any PDF → Forge",
    style: {
      background: "rgba(255,107,44,.12)",
      borderColor: "rgba(255,107,44,.18)",
      color: "#FF8A4D",
    },
  },
];

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: "◫",
    title: "Reads every blueprint",
    description:
      "MCQs, MSQs, NAT, comprehension, diagrams — even when numbering resets per section, we rivet it straight.",
  },
  {
    icon: "◎",
    title: "Marks & section rivets",
    description:
      "+4 −1, +3 −0.66, sectional locks, cut-offs — all cast at forge speed.",
  },
  {
    icon: "⬙",
    title: "Instructions cold-pressed",
    description:
      "Original instruction plates pressed exactly as in PDF, before you strike “Start”.",
  },
  {
    icon: "⚡",
    title: "~44 seconds to anvil",
    description: "Load at 10:00, strike by 10:01. Heavy work, light wait.",
  },
  {
    icon: "▦",
    title: "Riveted palette & keys",
    description: "Set, hold, empty with 1-4, M, N — all with steel haptics.",
  },
  {
    icon: "◈",
    title: "Analysis after quench",
    description:
      "Score, accuracy, time per Q, section strength — cooled into chrome cards.",
  },
];

export interface ExamCard {
  title: string;
  titleStyle?: CSSProperties;
  description: string;
  tag: string;
  tagStyle?: CSSProperties;
  dark?: boolean;
}

export const examCards: ExamCard[] = [
  {
    title: "GATE",
    description: "65 Qs • 180 min • 30 papers • virtual calc, riveted.",
    tag: "All branches",
  },
  {
    title: "JEE Mains & Adv",
    description: "90 Qs • PCM with NAT, PYQs back to 2012, hardened.",
    tag: "12.5L / yr",
  },
  {
    title: "SSC JE / CGL",
    description: "Technical + General • 200 Qs, sectional steel.",
    tag: "30L+ forging",
  },
  {
    title: "NEET UG",
    description: "200 Qs • Bio-Physics-Chemistry with +4 −1 temper.",
    tag: "20L / yr",
  },
  {
    title: "UPSC CSE",
    description: "GS • CSAT • cold-pressed instruction steel.",
    tag: "Most detailed",
  },
  {
    title: "UGC NET / JRF",
    description: "82 subjects • 3 hrs • no negative, brushed.",
    tag: "Teaching + Research",
  },
  {
    title: "Banking PO/SO",
    description: "SBI • IBPS • speed-forged sections.",
    tag: "English & Hindi",
  },
  {
    title: "CAT • CUET • STATE",
    titleStyle: { color: "white" },
    description: "Any PDF — state PCS, TET, private series. Forge it now.",
    tag: "Try now →",
    tagStyle: {
      background: "rgba(255,255,255,.12)",
      color: "white",
      borderColor: "rgba(255,255,255,.14)",
    },
    dark: true,
  },
];

export interface FabLink {
  href: string;
  label: string;
  small?: string;
  active?: boolean;
}

export const fabLinks: FabLink[] = [
  { href: "/", label: "V1 SaaS", small: "Premium SaaS" },
  { href: "/neumorphic", label: "Neumorphic" },
  { href: "/skeuomorphic", label: "Skeuomorphic" },
  { href: "/glassmorphism", label: "Glassmorphism" },
  { href: "/claymorphism", label: "Claymorphism" },
  { href: "/aurora", label: "Aurora" },
  { href: "/", label: "Metalmorphism", active: true },
  { href: "/flat", label: "Flat" },
  { href: "/flat-2", label: "Flat 2.0" },
  { href: "/material", label: "Material" },
  { href: "/fluent", label: "Fluent" },
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
