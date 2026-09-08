import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>LAYER 0 · LAYER 1 · LAYER 2 — scroll optional, depth mandatory</div>
      <h1>Background drifts.<br /><span>Foreground tests.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs across sliding planes</strong> — scenery crawls, questions sprint — while the timer stays pinned like a good HUD.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Scroll sideways →</a>
        <a href="#how" className={styles.btn}>Hold still</a>
      </div>
    </div>
  );
}
