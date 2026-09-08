import Link from "next/link";
import styles from "../page.module.css";

export default function SiteNav() {
  return (
    <>
      <div className={`${styles['bg-orbs']}`}><div className={`${styles.orb} ${styles.orb1}`}></div><div className={`${styles.orb} ${styles.orb2}`}></div><div className={`${styles.orb} ${styles.orb3}`}></div></div>

      <div className={`${styles['nav-wrap']}`}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <div className={`${styles['logo-mark']}`}>◐</div>
            <div className={`${styles['logo-type']}`}>PARAKH <span>— practice like real</span></div>
          </div>
          <div className={`${styles['nav-links']}`}>
            <a href="#how">How it works</a>
            <a href="#experience">CBT Experience</a>
            <a href="#exams">Exams</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className={`${styles['nav-cta']}`}>
            <div className={`${styles['version-switch']}`} aria-label="Version switcher">
              <Link href="/" className={styles.active}>V1 SaaS</Link>
              <Link href="/neumorphic">V2 Soft</Link>
              <Link href="/skeuomorphic">V3 Real</Link>
              <Link href="/neubrutalism">V4 Pop</Link>
            </div>
            <a href="#try" className={`${styles['btn-primary']}`}>Create Mock Test <span className={styles.arrow}>↗</span></a>
          </div>
        </nav>
      </div>
    </>
  );
}
