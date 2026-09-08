import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>DENSITY: MAX · ROWS: 90 · SCROLL: EFFICIENT</div>
      <h1>Everything visible.<br /><span>Nothing wasted.</span></h1>
      <p className={styles.sub}>Your <strong>entire PYQ on one screen</strong> — dense tables, compact rows, microcopy that respects experts. Built for people who read fast.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Compress PDF →</a>
        <a href="#how" className={styles.btn}>Expand docs</a>
      </div>
    </div>
  );
}
