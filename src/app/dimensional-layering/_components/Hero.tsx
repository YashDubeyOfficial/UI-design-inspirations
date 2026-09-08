import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Z-INDEX: HALL &gt; TIMER &gt; PALETTE &gt; YOU</div>
      <h1>Depth with<br /><span>deadlines.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs extruded into strata</strong> — instructions at the bottom, questions floating, timer hovering closest. Shadows do the wayfinding.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Descend →</a>
        <a href="#how" className={styles.btn}>Check altitude</a>
      </div>
    </div>
  );
}
