import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Layout #4821 of ∞ — refreshed, never repeated</div>
      <h1>Same exam.<br /><span>New shape daily.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs reshuffled into fresh layouts</strong> — wide hero today, stacked cards tomorrow — while timer, palette and pressure stay exactly put.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Shuffle PDF →</a>
        <a href="#how" className={styles.btn}>Yesterday’s shape</a>
      </div>
    </div>
  );
}
