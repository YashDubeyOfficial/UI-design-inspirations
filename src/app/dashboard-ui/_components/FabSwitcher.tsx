import Link from "next/link";
import styles from "../page.module.css";

const links = [
  { label: "Typography-Led", href: "/typography-led" },
  { label: "Expressive Typography", href: "/expressive-typography" },
  { label: "Variable Typography UI", href: "/variable-typography-ui" },
  { label: "Editorial / Magazine", href: "/editorial-magazine" },
  { label: "Bento Grid", href: "/bento" },
  { label: "Bento Stacking", href: "/bento-stacking" },
  { label: "Modular UI", href: "/modular-ui" },
  { label: "Layered UI", href: "/layered-ui" },
  { label: "Dimensional Layering", href: "/dimensional-layering" },
  { label: "Depth UI", href: "/depth-ui" },
  { label: "Parallax UI", href: "/parallax-ui" },
  { label: "Variable Layout UI", href: "/variable-layout-ui" },
  { label: "Data-Dense UI", href: "/data-dense-ui" },
  { label: "Dashboard UI", href: "/dashboard-ui" },
  { label: "Data Visualization UI", href: "/data-visualization-ui" },
];

export default function FabSwitcher() {
  return (
    <details className={styles.fab}>
      <summary>◈</summary>
      <div className={styles["fab-panel"]}>
        <div className={styles["fab-header"]}>EDITORIAL, TYPOGRAPHY & LAYOUT <span>15 STYLES</span></div>
        <div className={styles["fab-grid"]}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={l.href === "/dashboard-ui" ? `${styles["fab-link"]} ${styles.active}` : styles["fab-link"]}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </details>
  );
}
