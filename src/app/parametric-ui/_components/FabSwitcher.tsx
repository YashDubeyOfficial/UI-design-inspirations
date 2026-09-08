import Link from "next/link";
import styles from "../page.module.css";

const links = [
  { label: "Organic / Biomimetic", href: "/organic-biomimetic" },
  { label: "Biomorphism", href: "/biomorphism" },
  { label: "Nature Distilled", href: "/nature-distilled" },
  { label: "Solarpunk", href: "/solarpunk" },
  { label: "Eco-Conscious / Sustainable UI", href: "/eco-conscious-sustainable-ui" },
  { label: "Sustainable Web Design", href: "/sustainable-web-design" },
  { label: "Aurora", href: "/aurora" },
  { label: "Fluid UI", href: "/fluid-ui" },
  { label: "Responsive Fluid UI", href: "/responsive-fluid-ui" },
  { label: "Parametric UI", href: "/parametric-ui" },
  { label: "Procedural UI", href: "/procedural-ui" },
  { label: "Generative UI", href: "/generative-ui" },
  { label: "Ambient UI", href: "/ambient-ui" },
  { label: "Sensory UI", href: "/sensory-ui" },
];

export default function FabSwitcher() {
  return (
    <details className={styles.fab}>
      <summary>◈</summary>
      <div className={styles["fab-panel"]}>
        <div className={styles["fab-header"]}>NATURE & ORGANIC <span>14 STYLES</span></div>
        <div className={styles["fab-grid"]}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={l.href === "/parametric-ui" ? `${styles["fab-link"]} ${styles.active}` : styles["fab-link"]}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </details>
  );
}
