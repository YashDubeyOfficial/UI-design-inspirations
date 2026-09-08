import Link from "next/link";
import styles from "../page.module.css";

export default function TopBar() {
  return (
    <div className={`${styles['top-bar']}`}>
      <nav className={styles.nav}>
        <div className={styles.logo}><div className={`${styles['logo-mark']}`}>◐</div><div><b>PARAKH</b> <span>— real desk</span></div></div>
        <div className={`${styles['nav-links']}`}><a href="#">How it works</a><a href="#">CBT</a><a href="#">Exams</a></div>
        <div style={{display:'flex', gap:'10px', alignItems:'center', position:'relative'}}>
          <div className={`${styles['version-switch']}`}><Link href="/">V1 SaaS</Link><Link href="/neumorphic">V2 Soft</Link><Link href="/" className={styles.active}>V3 Real</Link><Link href="/neubrutalism">V4 Pop</Link></div>
          <a href="#" className={`${styles['btn-brass']}`}>Create Mock →</a>
        </div>
      </nav>
    </div>
  );
}
