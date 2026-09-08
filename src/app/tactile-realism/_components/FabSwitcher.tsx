import Link from "next/link";
import styles from "../page.module.css";

const links = [
  { label: "Neumorphic", href: "/neumorphic", blurb: "Soft extruded" },
  { label: "Skeuomorphic", href: "/skeuomorphic", blurb: "Wood + paper" },
  { label: "Skeuominimalism", href: "/skeuominimalism", blurb: "Minimal tactility" },
  { label: "Glassmorphism", href: "/glassmorphism", blurb: "Frosted glass" },
  { label: "Liquid Glass", href: "/liquid-glass", blurb: "Refraction" },
  { label: "Claymorphism", href: "/claymorphism", blurb: "Soft clay" },
  { label: "Metalmorphism", href: "/metalmorphism", blurb: "Brushed metal" },
  { label: "Liquid Metal / Chrome", href: "/liquid-metal-chrome", blurb: "Mercury shine" },
  { label: "Inflatable 3D", href: "/inflatable-3d-puffy-ui", blurb: "Balloon soft" },
  { label: "Hyperreal 3D", href: "/hyperreal-3d", blurb: "Photoreal" },
  { label: "Low-Poly 3D", href: "/low-poly-3d", blurb: "Faceted" },
  { label: "Isometric UI", href: "/isometric-ui", blurb: "Axonometric" },
  { label: "Paper Cut", href: "/paper-cut", blurb: "Layered paper" },
  { label: "Tactile Realism", href: "/tactile-realism", blurb: "Touch me" },
  { label: "Interactive 3D UI", href: "/interactive-3d-ui", blurb: "Tilt + depth" },
];

export default function FabSwitcher() {
  return (
    <details className={styles.fab}>
      <summary>◈</summary>
      <div className={styles["fab-panel"]}>
        <div className={styles["fab-header"]}>DEPTH & 3D <span>15 STYLES</span></div>
        <div className={styles["fab-grid"]}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={l.href === "/tactile-realism" ? `${styles["fab-link"]} ${styles.active}` : styles["fab-link"]}
            >
              {l.label} <small>{l.blurb}</small>
            </Link>
          ))}
        </div>
      </div>
    </details>
  );
}
