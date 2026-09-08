import Link from "next/link";
import styles from "../page.module.css";

const links = [
  { label: "Memphis Design", href: "/memphis-design" },
  { label: "Kawaii / Soft Pop", href: "/kawaii-soft-pop" },
  { label: "Corporate Memphis (Alegria)", href: "/corporate-memphis-alegria" },
  { label: "Explorecore", href: "/explorecore" },
  { label: "Grainy UI", href: "/grainy-ui" },
  { label: "Soft UI", href: "/soft-ui" },
];

export default function FabSwitcher() {
  return (
    <details className={styles.fab}>
      <summary>◈</summary>
      <div className={styles["fab-panel"]}>
        <div className={styles["fab-header"]}>PLAYFUL & EXPRESSIVE <span>6 STYLES</span></div>
        <div className={styles["fab-grid"]}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={l.href === "/memphis-design" ? `${styles["fab-link"]} ${styles.active}` : styles["fab-link"]}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </details>
  );
}
