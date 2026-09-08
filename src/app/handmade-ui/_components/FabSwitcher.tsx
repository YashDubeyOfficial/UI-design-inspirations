import Link from "next/link";
import styles from "../page.module.css";

const links = [
  { label: "Pixel Art / 8-bit", href: "/pixel-art-8-bit" },
  { label: "Y2K Aero", href: "/y2k-aero" },
  { label: "Frutiger Aero", href: "/frutiger-aero" },
  { label: "Vaporwave", href: "/vaporwave" },
  { label: "Synthwave / Outrun", href: "/synthwave-outrun" },
  { label: "Retro-Futurism / Raygun Gothic", href: "/retro-futurism-raygun-gothic" },
  { label: "Retro-Tech UI", href: "/retro-tech-ui" },
  { label: "Retro Computing UI", href: "/retro-computing-ui" },
  { label: "Digital Nostalgia", href: "/digital-nostalgia" },
  { label: "Zine UI", href: "/zine-ui" },
  { label: "Digital Scrapbook", href: "/digital-scrapbook" },
  { label: "Analog UI", href: "/analog-ui" },
  { label: "Hand-Drawn UI", href: "/hand-drawn-ui" },
  { label: "Handmade UI", href: "/handmade-ui" },
  { label: "Collage / Scrapbook", href: "/collage-scrapbook" },
];

export default function FabSwitcher() {
  return (
    <details className={styles.fab}>
      <summary>◈</summary>
      <div className={styles["fab-panel"]}>
        <div className={styles["fab-header"]}>RETRO & NOSTALGIC <span>15 STYLES</span></div>
        <div className={styles["fab-grid"]}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={l.href === "/handmade-ui" ? `${styles["fab-link"]} ${styles.active}` : styles["fab-link"]}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </details>
  );
}
