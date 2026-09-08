import styles from "../page.module.css";

export default function SiteNav() {
  return (
    <div className={`${styles['nav-wrap']}`}>
      <nav className={styles.nav}>
        <div className={styles.logo}><div className={`${styles['logo-mark']}`}>◈</div><div><b>PARAKH</b> <span style={{marginLeft:'6px'}}>AERO 2004</span></div></div>
        <div className={`${styles['nav-links']}`}>
          <a href="#">How it pops</a>
          <a href="#">CBT gloss</a>
          <a href="#">Exams</a>
          <a href="#">FAQ</a>
        </div>
        <div style={{display:'flex', gap:'8px', alignItems:'center'}}>
          <a href="#" className={`${styles['btn-ghost-bubble']}`} style={{display:'none'}}>Sign in</a>
          <a href="#" className={`${styles['btn-aqua']}`}>Make it glossy →</a>
        </div>
      </nav>
    </div>
  );
}
