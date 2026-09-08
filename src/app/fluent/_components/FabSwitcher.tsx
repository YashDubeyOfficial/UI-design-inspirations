import Link from "next/link";
import styles from "../page.module.css";
import { fabLinks } from "../_data/content";

export default function FabSwitcher() {
  return (
    <details className={styles.fab}><summary>◈</summary><div className={`${styles['fab-panel']}`}><div className={`${styles['fab-header']}`}>SWITCH STYLE <span>19 STYLES</span></div><div className={`${styles['fab-grid']}`}>
      {fabLinks.map((link) => (
        <Link key={`${link.href}-${link.label}`} href={link.href} className={link.active ? `${styles['fab-link']} ${styles.active}` : `${styles['fab-link']}`}>{link.label}</Link>
      ))}
    </div></div></details>
  );
}
