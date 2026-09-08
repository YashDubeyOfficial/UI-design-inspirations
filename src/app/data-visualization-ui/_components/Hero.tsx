import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>n=90 · r=0.94 · p&lt;0.001 · charts inside</div>
      <h1>Pretty charts.<br /><span>Serious exam.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs plotted beautifully</strong> — difficulty curves, topic treemaps, pace lines — before a single question is even attempted.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Plot PDF →</a>
        <a href="#how" className={styles.btn}>See sample chart</a>
      </div>
    </div>
  );
}
