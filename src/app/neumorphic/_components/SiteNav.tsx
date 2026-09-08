import Link from "next/link";
import styles from "../page.module.css";

export default function SiteNav() {
  return (
    <div className={`${styles['nav-wrap']}`}>
      <nav className={styles.nav}>
        <div className={styles.logo}><div className={`${styles['logo-mark']}`}>◐</div><div><b>PARAKH</b> <span>— soft system</span></div></div>
        <div className={`${styles['nav-links']}`}><a href="#">How it works</a><a href="#">CBT</a><a href="#">Exams</a></div>
        <div style={{display:'flex', gap:'10px', alignItems:'center'}}>
          <div className={`${styles['version-switch']}`}><Link href="/">V1 SaaS</Link><Link href="/" className={styles.active}>V2 Soft</Link><Link href="/skeuomorphic">V3 Real</Link><Link href="/neubrutalism">V4 Pop</Link></div>
          <a href="#" className={`${styles['btn-neu']} ${styles.dark}`}>Create Mock →</a>
        </div>
      </nav>
    </div>
  );
}
