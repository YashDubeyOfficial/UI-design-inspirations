import styles from "../page.module.css";

export default function SiteNav() {
  return (
    <div className={`${styles['nav-wrap']}`}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <div className={`${styles['logo-mark']}`}>◈</div>
          <div className={`${styles['logo-type']}`}>PARAKH <span>glass</span></div>
        </div>
        <div className={`${styles['nav-links']}`}>
          <a href="#how">How it flows</a>
          <a href="#experience">CBT preview</a>
          <a href="#exams">Exams</a>
          <a href="#pricing">Pricing</a>
        </div>
        <div className={`${styles['nav-cta']}`}>
          <a href="#how" className={`${styles['btn-ghost-glass']}`} style={{display:'none'}}>Sign in</a>
          <a href="#try" className={`${styles['btn-primary-glass']}`}>Launch mock <span>↗</span></a>
        </div>
      </nav>
    </div>
  );
}
