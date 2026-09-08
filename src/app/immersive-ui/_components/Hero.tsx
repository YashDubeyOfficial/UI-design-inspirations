import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>IMMERSION 100% · EDGES DISSOLVED</div>
      <h1>There is no screen.<br /><span>Only hall.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs dissolved into atmosphere</strong> — ambient timer-light, fog palette, instructions on the air itself. Breathe in, attempt out.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Dissolve in →</a>
        <a href="#how" className={styles.btn}>Feel around</a>
      </div>
    </div>
  );
}
