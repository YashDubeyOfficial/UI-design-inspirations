import Link from "next/link";
import styles from "../page.module.css";

const links = [
  { label: "Kinetic UI", href: "/kinetic-ui" },
  { label: "Motion-First UI", href: "/motion-first-ui" },
  { label: "Micro-Interaction-Driven UI", href: "/micro-interaction-driven-ui" },
  { label: "Scrollytelling", href: "/scrollytelling" },
  { label: "Scroll-Driven UI", href: "/scroll-driven-ui" },
  { label: "Gamified UI", href: "/gamified-ui" },
  { label: "Gesture-Based UI", href: "/gesture-based-ui" },
  { label: "Haptic UI", href: "/haptic-ui" },
  { label: "Sound-Enhanced UI", href: "/sound-enhanced-ui" },
  { label: "Ambient Computing UI", href: "/ambient-computing-ui" },
];

export default function FabSwitcher() {
  return (
    <details className={styles.fab}>
      <summary>◈</summary>
      <div className={styles["fab-panel"]}>
        <div className={styles["fab-header"]}>MOTION, INTERACTION & IMMERSIVE <span>10 STYLES</span></div>
        <div className={styles["fab-grid"]}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={l.href === "/sound-enhanced-ui" ? `${styles["fab-link"]} ${styles.active}` : styles["fab-link"]}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </details>
  );
}
