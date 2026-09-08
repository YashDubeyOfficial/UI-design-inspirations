import styles from "../page.module.css";

export default function SiteNav() {
  return (
    <div className={`${styles['nav-wrap']}`}>
      <nav className={styles.nav}>
        <div className={styles.logo}><b>Parakh <em>—</em></b><span>Minimal • 2026</span></div>
        <div className={`${styles['nav-links']}`}>
          <a href="#how">How it works</a>
          <a href="#cbt">CBT</a>
          <a href="#exams">Exams</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className={`${styles['nav-cta']}`}>
          <a href="#" className={styles.ghost}>Sign in</a>
          <a href="#try" className={`${styles['btn-minimal']}`}>Create mock</a>
        </div>
      </nav>
    </div>
  );
}
