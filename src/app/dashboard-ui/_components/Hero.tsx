import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>● LIVE · SYNCED 12s AGO · ALL SYSTEMS NOMINAL</div>
      <h1>Your prep,<br /><span>instrumented.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs as live KPIs</strong> — accuracy dials, pace charts, streak counters — wrapped around the same ruthless CBT.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Connect PDF →</a>
        <a href="#how" className={styles.btn}>View sample board</a>
      </div>
    </div>
  );
}
