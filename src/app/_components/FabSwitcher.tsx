import Link from "next/link";
import styles from "../page.module.css";
import { fabLinks } from "../_data/content";

export default function FabSwitcher() {
  return (
    <details className={styles.fab} id="fab">
      <summary aria-label="Switch version">◈</summary>
      <div className={`${styles['fab-panel']}`}>
        <div className={`${styles['fab-header']}`}>SWITCH STYLE <span>19 STYLES</span></div>
        <div className={`${styles['fab-grid']}`}>
          {fabLinks.map((l, i) => (
            <Link key={i} href={l.href} className={l.active ? `${styles['fab-link']} ${styles.active}` : `${styles['fab-link']}`}>{l.label} <small>{l.sub}</small></Link>
          ))}
        </div>
        <div className={`${styles['fab-footer']}`}>Tap any style → instant switch • Bottom-right FAB</div>
      </div>
    </details>
  );
}
