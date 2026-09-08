import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>★ ISSUE #42 · PHOTOCOPIED · STAPLED TWICE ★</div>
      <h1>CUT! PASTE!<br /><span>MOCK!</span></h1>
      <p className={styles.sub}>Your <strong>PYQs, clipped with scissors</strong> and glued into a punk CBT — ransom-note headlines, taped timer, stapled palette. Still NTA-accurate.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Clip PDF →</a>
        <a href="#how" className={styles.btn}>Read the manifesto</a>
      </div>
    </div>
  );
}
