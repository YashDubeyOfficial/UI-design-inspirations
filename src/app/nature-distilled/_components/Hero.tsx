import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Nature, distilled to one leaf</div>
      <h1>Less, but<br /><span>alive.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs reduced to essence</strong> — a single green accent on white, hairline rules, and an exam hall with nothing to hide behind.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Distill PDF →</a>
        <a href="#how" className={styles.btn}>See essence</a>
      </div>
    </div>
  );
}
