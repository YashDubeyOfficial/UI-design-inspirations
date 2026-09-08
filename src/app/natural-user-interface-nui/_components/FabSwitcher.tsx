import Link from "next/link";
import styles from "../page.module.css";

const links = [
  { label: "AI-Native UI", href: "/ai-native-ui" },
  { label: "Agentic UI", href: "/agentic-ui" },
  { label: "Agentic UX", href: "/agentic-ux" },
  { label: "Human-Centered AI UI", href: "/human-centered-ai-ui" },
  { label: "Adaptive UI", href: "/adaptive-ui" },
  { label: "Multimodal UI", href: "/multimodal-ui" },
  { label: "Voice UI", href: "/voice-ui" },
  { label: "Conversational UI", href: "/conversational-ui" },
  { label: "Invisible UI", href: "/invisible-ui" },
  { label: "Context-Aware UI", href: "/context-aware-ui" },
  { label: "Intent-Driven UI", href: "/intent-driven-ui" },
  { label: "Predictive UI", href: "/predictive-ui" },
  { label: "Personalised UI", href: "/personalised-ui" },
  { label: "Natural User Interface (NUI)", href: "/natural-user-interface-nui" },
];

export default function FabSwitcher() {
  return (
    <details className={styles.fab}>
      <summary>◈</summary>
      <div className={styles["fab-panel"]}>
        <div className={styles["fab-header"]}>AI, ADAPTIVE & NEXT-GEN <span>14 STYLES</span></div>
        <div className={styles["fab-grid"]}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={l.href === "/natural-user-interface-nui" ? `${styles["fab-link"]} ${styles.active}` : styles["fab-link"]}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </details>
  );
}
