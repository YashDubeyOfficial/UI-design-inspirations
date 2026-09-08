import styles from "../page.module.css";

export default function SiteNav() {
  return (
    <div className={`${styles['nav-wrap']}`}>
      <nav className={styles.nav}>
        <div className={styles.logo}><div className={`${styles['logo-mark']}`}>🌿</div><div><b>PARAKH</b> <span>SOLARPUNK • 2026</span></div></div>
        <div className={`${styles['nav-links']}`}>
          <a href="#">How it grows</a>
          <a href="#">Living CBT</a>
          <a href="#">Exams</a>
          <a href="#">Roots</a>
        </div>
        <div style={{display:'flex', gap:'8px', alignItems:'center'}}>
          <a href="#" className={`${styles['btn-leaf']}`}>Plant a mock <span>→</span></a>
        </div>
      </nav>
    </div>
  );
}
