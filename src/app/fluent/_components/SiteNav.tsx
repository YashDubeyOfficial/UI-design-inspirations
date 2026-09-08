import styles from "../page.module.css";
import { navLinks } from "../_data/content";

export default function SiteNav() {
  return (
    <>
      <div className={styles.mica}></div>

      <div className={`${styles['nav-wrap']}`}>
        <nav className={styles.nav}>
          <div className={styles.brand}><div className={`${styles['brand-mark']}`}>P</div><div className={`${styles['brand-type']}`}>Parakh <span>Fluent • acrylic</span></div></div>
          <div className={`${styles['nav-links']}`}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </div>
          <div className={`${styles['nav-cta']}`}>
            <button className={`${styles['btn-fluent']}`}>Sign in</button>
            <a href="#try" className={`${styles['btn-fluent']} ${styles.primary}`}>Create mock <span>↗</span></a>
          </div>
        </nav>
      </div>
    </>
  );
}
