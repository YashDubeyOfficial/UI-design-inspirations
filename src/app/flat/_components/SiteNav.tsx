import styles from "../page.module.css";

export default function SiteNav() {
  return (
    <div className={`${styles['nav-wrap']}`}>
      <nav className={styles.nav}>
        <div className={styles.logo}><div className={`${styles['logo-mark']}`}>P</div><div className={`${styles['logo-type']}`}>PARAKH <span>FLAT</span></div></div>
        <div className={`${styles['nav-links']}`}>
          <a href="#how">How it works</a>
          <a href="#features">Features</a>
          <a href="#exams">Exams</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className={`${styles['nav-cta']}`}>
          <a href="#try" className={`${styles['btn-flat']} ${styles.dark}`}>Start Free</a>
          <a href="#try" className={`${styles['btn-flat']} ${styles.yellow}`}>Upload PDF →</a>
        </div>
      </nav>
    </div>
  );
}
