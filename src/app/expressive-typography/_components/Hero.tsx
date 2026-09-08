import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>★ MIXED FONTS ★ MIXED SIZES ★ ZERO FEAR ★</div>
      <h1>BIG! small! BOLD!<br /><span>italic! EXAM!</span></h1>
      <p className={styles.sub}>Your <strong>PYQs as a typographic playground</strong> — shouting headlines whispering captions — with exam logic straighter than the baselines.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Shout PDF →</a>
        <a href="#how" className={styles.btn}>Whisper how</a>
      </div>
    </div>
  );
}
