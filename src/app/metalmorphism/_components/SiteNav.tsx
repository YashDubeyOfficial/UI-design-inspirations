import styles from "../page.module.css";

export default function SiteNav() {
  return (
    <div className={`${styles['nav-wrap']}`}>
      <nav className={styles.nav}>
        <div className={`${styles['nav-rivets']}`}><div className={styles.rivet}></div><div className={styles.rivet}></div><div className={styles.rivet}></div></div>
        <div className={styles.logo}><div className={`${styles['logo-mark']}`}>P</div><div className={`${styles['logo-type']}`}>PARAKH <span>METAL • FORGED</span></div><div className={`${styles['plate-label']}`} style={{marginLeft:'12px'}}>PLATE 01 • 1C2228</div></div>
        <div className={`${styles['nav-links']}`}><a href="#how">Forging</a><a href="#experience">CBT</a><a href="#exams">Exams</a><a href="#">Specs</a></div>
        <div className={`${styles['nav-cta']}`}>
          <a href="#try" className={`${styles['btn-gun']}`} style={{display:'none'}}>Docs</a>
          <a href="#try" className={`${styles['btn-steel']}`}>FORGE MOCK <span>↗</span></a>
        </div>
      </nav>
    </div>
  );
}
