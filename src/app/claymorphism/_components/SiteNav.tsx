import styles from "../page.module.css";

export default function SiteNav() {
  return (
    <div className={`${styles['nav-wrap']}`}>
      <nav className={styles.nav}>
        <div className={styles.logo}><div className={`${styles['logo-mark']}`}>◐</div><div className={`${styles['logo-type']}`}>PARAKH <span>clay • soft</span></div></div>
        <div className={`${styles['nav-links']}`}><a href="#features">Features</a><a href="#how">How it works</a><a href="#exams">Exams</a><a href="#">Pricing</a></div>
        <div className={`${styles['nav-cta']}`}>
          <a href="#try" className={`${styles['btn-clay']}`}>Squeeze a mock <span className={styles.arrow}>↗</span></a>
        </div>
      </nav>
    </div>
  );
}
