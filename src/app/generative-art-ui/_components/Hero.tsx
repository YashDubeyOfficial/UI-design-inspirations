import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>✿ seeded random · every load repaints · seed #42</div>
      <h1>No two visits<br /><span>paint alike.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs run through the algorithm</strong> — flowing fields, happy accidents — landing as a rigorous CBT wearing generative clothes.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Generate hall →</a>
        <a href="#how" className={styles.btn}>Reroll seed</a>
      </div>
    </div>
  );
}
