import type { CSSProperties } from "react";

export interface ExamPill {
  bold?: string;
  text: string;
  live?: boolean;
  style?: CSSProperties;
}

export const examPills: ExamPill[] = [
  { bold: "JEE", text: " • Mains & Adv" },
  { bold: "NEET", text: " • UG" },
  { text: "UPSC • CSE", live: true },
  { text: "GATE" },
  { text: "SSC CGL" },
  { text: "CUET • CAT" },
  { text: "UGC NET" },
  {
    text: "+ Any PDF → Mock",
    style: { background: "var(--ink)", color: "white", borderColor: "var(--ink)" },
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
    title: "Reads the messy bits",
    description:
      "MCQs, MSQs, NAT, comprehension, image diagrams — even when numbering resets per section, we see through it.",
  },
  {
    icon: "◎",
    title: "Marks & negatives intact",
    description:
      "+4 −1, +3 −0.33, part-wise, sectional cut-offs — all detected and reflected in the CBT glass.",
  },
  {
    icon: "⬙",
    title: "Instructions, verbatim",
    description:
      "The original instruction pages appear exactly as in your PDF, frosted but faithful.",
  },
  {
    icon: "⚡",
    title: "~40 seconds to hall",
    description:
      "Upload at 10:00, attempt by 10:01. The glass does the heavy lifting while you breathe.",
  },
  {
    icon: "▦",
    title: "True palette & shortcuts",
    description:
      "Answered, not answered, marked-for-review with 1-4, M, N keys — translucent but tactile.",
  },
  {
    icon: "◈",
    title: "Analysis in soft light",
    description:
      "After submit: score, accuracy, time per question, section strength — all in calm, glassy cards.",
  },
];

export interface ExamCard {
  title: string;
  titleStyle?: CSSProperties;
  tag: string;
  tagStyle?: CSSProperties;
  description: string;
  meta: string;
  dark?: boolean;
}

export const examCards: ExamCard[] = [
  {
    title: "JEE Mains & Adv",
    tag: "90 Qs • 180m",
    description: "PCM with NAT & paragraph types. PYQs back to 2012, all shifts.",
    meta: "12.5L aspirants / year",
  },
  {
    title: "NEET UG",
    tag: "200 Qs • 200m",
    description: "Botany-Zoology-Physics-Chemistry with +4 −1 frost.",
    meta: "20L aspirants / year",
  },
  {
    title: "UPSC CSE",
    tag: "GS • CSAT",
    description: "Prelims & Mains, comprehension sets, exact instruction screens.",
    meta: "Most detailed",
  },
  {
    title: "GATE",
    tag: "65 Qs • 180m",
    description: "MCQ + MSQ + NAT with virtual calculator, all 30 papers.",
    meta: "All branches",
  },
  {
    title: "UGC NET / JRF",
    tag: "Paper 1+2",
    description: "Teaching & research + subject papers, 3 hrs, no negative.",
    meta: "82 subjects",
  },
  {
    title: "SSC CGL & CHSL",
    tag: "100 Qs • 60m",
    description: "Quant, reasoning, English, GK — sectional glass where needed.",
    meta: "30L+ candidates",
  },
  {
    title: "Banking PO/SO",
    tag: "SBI • IBPS",
    description: "Prelims + Mains, sectional cut-offs, speed palette.",
    meta: "English & Hindi",
  },
  {
    title: "CAT • CUET • State",
    titleStyle: { color: "white" },
    tag: "Any PDF",
    tagStyle: {
      background: "rgba(255,255,255,.14)",
      color: "white",
      borderColor: "rgba(255,255,255,.18)",
    },
    description:
      "If you have the PDF, glass will hold it. State TET, PCS, private series — all.",
    meta: "Try it now →",
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
  { href: "/", label: "Glassmorphism", active: true },
  { href: "/claymorphism", label: "Claymorphism" },
  { href: "/aurora", label: "Aurora" },
  { href: "/metalmorphism", label: "Metalmorphism" },
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
