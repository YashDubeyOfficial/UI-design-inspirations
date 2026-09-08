import styles from "../page.module.css";

export default function SiteNav() {
  return (
    <div className={`${styles['nav-wrap']}`}>
      <nav className={styles.nav}>
        <div className={styles.logo}><div className={`${styles['logo-mark']}`}>◐</div><div className={`${styles['logo-type']}`}>Parakh <span>— Practice like real</span></div></div>
        <div className={`${styles['nav-links']}`}>
          <a href="#how">How it works</a>
          <a href="#exams">Exams</a>
          <a href="#features">Features</a>
          <a href="#support">Support</a>
        </div>
        <div className={`${styles['nav-cta']}`}>
          <a href="#try" className={`${styles['btn-ghost']}`}>Sign In</a>
          <a href="#try" className={`${styles['btn-blue']}`}>Create Mock — Free</a>
        </div>
      </nav>
    </div>
  );
}
