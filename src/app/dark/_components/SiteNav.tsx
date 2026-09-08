import styles from "../page.module.css";

export default function SiteNav() {
  return (
    <div className={`${styles['nav-wrap']}`}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <div className={`${styles['logo-mark']}`}>◈</div>
          <div className={`${styles['logo-type']}`}><b>PARAKH</b><span>Dark • OLED 2026</span></div>
        </div>
        <div className={`${styles['nav-links']}`}>
          <a href="#how">How it works</a>
          <a href="#cbt">CBT</a>
          <a href="#exams">Exams</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className={`${styles['nav-actions']}`}>
          <a href="#" className={`${styles['btn-ghost-dark']}`} style={{display:'none'}}>Sign in</a>
          <a href="#try" className={`${styles['btn-lime']}`}>Create mock →</a>
        </div>
      </nav>
    </div>
  );
}
