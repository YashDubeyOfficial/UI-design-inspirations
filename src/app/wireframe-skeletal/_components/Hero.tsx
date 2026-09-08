import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>[ WIREFRAME v0.1 — ANNOTATED ]</div>
      <h1>[ HERO: PDF →<br /><span>CBT HEADLINE ]</span></h1>
      <p className={styles.sub}>Your <strong>[08 Asian question papers]</strong> become <strong>[CBT mock: timer + palette + sections]</strong>. Brackets denote real functionality.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>[ UPLOAD PDF → ]</a>
        <a href="#how" className={styles.btn}>[ HOW IT WORKS ]</a>
      </div>
    </div>
  );
}
