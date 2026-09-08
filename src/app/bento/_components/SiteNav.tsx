import styles from "../page.module.css";

export default function SiteNav() {
  return (
    <div className={`${styles['nav-wrap']}`}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <div className={`${styles['logo-mark']}`}>◈</div>
          <div className={`${styles['logo-type']}`}><b>PARAKH</b><span>Bento — 2026</span></div>
        </div>
        <div className={`${styles['nav-center']}`}>
          <a href="#how" className={styles.active}>How</a>
          <a href="#cbt">CBT</a>
          <a href="#exams">Exams</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className={`${styles['nav-actions']}`}>
          <button className={`${styles['btn-ghost']}`} style={{display:'none'}}>Preview</button>
          <a href="#try" className={`${styles['btn-primary']}`}>Create mock <span className={styles.arrow}>→</span></a>
        </div>
      </nav>
    </div>
  );
}
