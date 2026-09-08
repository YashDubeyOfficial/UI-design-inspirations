import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Layer 01 / 02 / 03 — peel to reveal exam</div>
      <h1>Peel back<br /><span>the paper.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs in translucent sheets</strong> — lift instructions to find questions, lift questions to find the timer. Depth you can shuffle.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Lift sheet →</a>
        <a href="#how" className={styles.btn}>Peek under</a>
      </div>
    </div>
  );
}
