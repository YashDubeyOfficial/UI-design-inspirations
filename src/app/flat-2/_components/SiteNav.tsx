import styles from "../page.module.css";

export default function SiteNav() {
  return (
    <div className={`${styles['nav-wrap']}`}>
      <nav className={styles.nav}>
        <div className={styles.logo}><div className={`${styles['logo-mark']}`}>P</div><div className={`${styles['logo-type']}`}>PARAKH <span>flat 2.0</span></div></div>
        <div className={`${styles['nav-links']}`}>
          <a href="#how">How it works</a>
          <a href="#features">Features</a>
          <a href="#exams">Exams</a>
          <a href="#pricing">Pricing</a>
        </div>
        <div className={`${styles['nav-cta']}`}>
          <a href="#try" className={`${styles['btn-ghost']}`}>Sign in</a>
          <a href="#try" className={`${styles['btn-primary']}`}>Create mock <span>↗</span></a>
        </div>
      </nav>
    </div>
  );
}
