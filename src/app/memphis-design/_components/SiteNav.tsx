import styles from "../page.module.css";

export default function SiteNav() {
  return (
    <div className={styles["nav-wrap"]}>
      <nav className={styles.nav}>
        <div className={styles.logo}>Parakh <span>memphis</span></div>
        <div className={styles["nav-links"]}>
          <a href="#how">How</a>
          <a href="#exams">Exams</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className={styles["nav-cta"]}>
          <a href="#try" className={styles.btn}>Sign in</a>
          <a href="#try" className={`${styles.btn} ${styles.solid}`}>Create mock</a>
        </div>
      </nav>
    </div>
  );
}
