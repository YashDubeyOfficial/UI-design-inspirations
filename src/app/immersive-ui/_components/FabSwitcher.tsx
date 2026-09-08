import Link from "next/link";
import styles from "../page.module.css";

const links = [
  { label: "Cyberpunk", href: "/cyberpunk" },
  { label: "Holographic / AR-inspired", href: "/holographic-ar-inspired" },
  { label: "HUD / Sci-Fi Interface", href: "/hud-sci-fi-interface" },
  { label: "Spatial UI", href: "/spatial-ui" },
  { label: "Spatial Computing UI", href: "/spatial-computing-ui" },
  { label: "Spatial Depth UI", href: "/spatial-depth-ui" },
  { label: "Immersive UI", href: "/immersive-ui" },
  { label: "Blueprint UI", href: "/blueprint-ui" },
  { label: "Technical / Engineering UI", href: "/technical-engineering-ui" },
  { label: "Terminal UI", href: "/terminal-ui" },
  { label: "Console UI", href: "/console-ui" },
  { label: "Monospace UI", href: "/monospace-ui" },
  { label: "Photorealistic UI", href: "/photorealistic-ui" },
  { label: "Generative Art UI", href: "/generative-art-ui" },
  { label: "Algorithmic UI", href: "/algorithmic-ui" },
];

export default function FabSwitcher() {
  return (
    <details className={styles.fab}>
      <summary>◈</summary>
      <div className={styles["fab-panel"]}>
        <div className={styles["fab-header"]}>FUTURISTIC & DIGITAL <span>15 STYLES</span></div>
        <div className={styles["fab-grid"]}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={l.href === "/immersive-ui" ? `${styles["fab-link"]} ${styles.active}` : styles["fab-link"]}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </details>
  );
}
