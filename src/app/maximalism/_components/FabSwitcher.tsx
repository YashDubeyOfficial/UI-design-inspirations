import Link from "next/link";
import styles from "../page.module.css";

const links = [
  { label: "Brutalist", href: "/brutalist" },
  { label: "Neubrutalism", href: "/neubrutalism" },
  { label: "Neo-Brutalism", href: "/neo-brutalism" },
  { label: "Soft Brutalism", href: "/soft-brutalism" },
  { label: "Brutalist Elegance", href: "/brutalist-elegance" },
  { label: "Anti-Design", href: "/anti-design" },
  { label: "Anti-Grid", href: "/anti-grid" },
  { label: "Anti-Polish / Raw Aesthetic", href: "/anti-polish-raw-aesthetic" },
  { label: "Lo-Fi UI", href: "/lo-fi-ui" },
  { label: "Wireframe / Skeletal", href: "/wireframe-skeletal" },
  { label: "Glitch Art", href: "/glitch-art" },
  { label: "Experimental Grid", href: "/experimental-grid" },
  { label: "Experimental Navigation", href: "/experimental-navigation" },
  { label: "Asymmetrical UI", href: "/asymmetrical-ui" },
  { label: "Maximalism", href: "/maximalism" },
];

export default function FabSwitcher() {
  return (
    <details className={styles.fab}>
      <summary>◈</summary>
      <div className={styles["fab-panel"]}>
        <div className={styles["fab-header"]}>BRUTALIST & EXPERIMENTAL <span>15 STYLES</span></div>
        <div className={styles["fab-grid"]}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={l.href === "/maximalism" ? `${styles["fab-link"]} ${styles.active}` : styles["fab-link"]}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </details>
  );
}
