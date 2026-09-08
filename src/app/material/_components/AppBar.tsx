import styles from "../page.module.css";

export default function AppBar() {
  return (
    <header className={`${styles['app-bar']}`}>
      <div className={`${styles['app-bar-inner']}`}>
        <div className={styles.leading}>
          <button className={`${styles['menu-btn']}`}>≡</button>
          <div className={`${styles['logo-wrap']}`}><div className={`${styles['logo-mark']}`}>P</div><div className={`${styles['logo-type']}`}>Parakh <span>Material • M3</span></div></div>
          <nav className={`${styles['tabs-m3']}`}>
            <a href="#how" className={`${styles['tab-m3']} ${styles.active}`}>How it works</a>
            <a href="#features" className={`${styles['tab-m3']}`}>Features</a>
            <a href="#exams" className={`${styles['tab-m3']}`}>Exams</a>
            <a href="#faq" className={`${styles['tab-m3']}`}>Support</a>
          </nav>
        </div>

        <div className={styles.actions}>
          <button className={`${styles['icon-btn']}`}>♡</button>
          <button className={`${styles['icon-btn']}`}>◍</button>
          <a href="#try" className={`${styles['filled-btn']}`}>Create mock <span>↗</span></a>
        </div>
      </div>
    </header>
  );
}
