import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>★ INSERT COIN · 8-BIT EDITION ★</div>
      <h1>PRESS START<br /><span>TO MOCK.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs and scans</strong> crunched into chunky pixels — a 16-color CBT with chiptune timer and zero anti-aliasing.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>▶ START →</a>
        <a href="#how" className={styles.btn}>CONTINUE?</a>
      </div>
    </div>
  );
}
