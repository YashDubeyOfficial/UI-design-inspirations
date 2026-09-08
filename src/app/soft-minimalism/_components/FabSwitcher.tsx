import Link from "next/link";
import styles from "../page.module.css";

const links = [
  { label: "V1 SaaS", href: "/", blurb: "Classic SaaS" },
  { label: "Minimalist", href: "/minimalist", blurb: "Whites + type" },
  { label: "Hyperminimalism", href: "/hyperminimalism", blurb: "Nothing extra" },
  { label: "Soft Minimalism", href: "/soft-minimalism", blurb: "Warm + round" },
  { label: "Neo-Minimalism", href: "/neo-minimalism", blurb: "Stark + grid" },
  { label: "Monochromatic", href: "/monochromatic", blurb: "One hue" },
  { label: "Flat", href: "/flat", blurb: "Zero depth" },
  { label: "Flat 2.0", href: "/flat-2", blurb: "Semi-flat" },
  { label: "Swiss Design", href: "/swiss-design", blurb: "Grid + grotesk" },
  { label: "Material", href: "/material", blurb: "Google depth" },
  { label: "Fluent", href: "/fluent", blurb: "Microsoft light" },
  { label: "HIG", href: "/hig", blurb: "Apple clean" },
  { label: "Earthy Minimalism", href: "/earthy-minimalism", blurb: "Warm earth" },
  { label: "Calm UI", href: "/calm-ui", blurb: "Soft + airy" },
  { label: "Quiet UI", href: "/quiet-ui", blurb: "Whisper UI" },
  { label: "Content-First UI", href: "/content-first-ui", blurb: "Type-led" },
  { label: "Dark Mode", href: "/dark", blurb: "OLED first" },
];

export default function FabSwitcher() {
  return (
    <details className={styles.fab}>
      <summary>◈</summary>
      <div className={styles["fab-panel"]}>
        <div className={styles["fab-header"]}>SWITCH STYLE <span>17 STYLES</span></div>
        <div className={styles["fab-grid"]}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={l.href === "/soft-minimalism" ? `${styles["fab-link"]} ${styles.active}` : styles["fab-link"]}
            >
              {l.label} <small>{l.blurb}</small>
            </Link>
          ))}
        </div>
      </div>
    </details>
  );
}
