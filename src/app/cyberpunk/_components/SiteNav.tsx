import styles from "../page.module.css";

export default function SiteNav() {
  return (
    <div className={`${styles['nav-wrap']}`}>
      <nav className={styles.nav}>
        <div className={styles.logo}><div className={`${styles['logo-mark']}`}></div><div><b>PARAKH</b><br /><span style={{fontSize:'10px'}}>NEURAL // 2026</span></div><span>CYBER EDITION v4.1</span></div>
        <div className={`${styles['nav-links']}`}>
          <a href="#">{'// UPLINK'}</a>
          <a href="#">{'// CBT_CORE'}</a>
          <a href="#">{'// EXAMS_DB'}</a>
          <a href="#">{'// FAQ_SYS'}</a>
        </div>
        <div style={{display:'flex', gap:'8px', alignItems:'center'}}>
          <a href="#" className={`${styles['btn-neon']}`}>JACK IN →</a>
        </div>
      </nav>
    </div>
  );
}
