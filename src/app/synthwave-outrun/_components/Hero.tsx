import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>{'/// NIGHT DRIVE · 88 MPH · EXAM GRID'}</div>
      <h1>OUTRUN THE<br /><span>TIMER.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs at midnight velocity</strong> — a chrome-and-neon CBT where the countdown burns rubber and the palette leaves light trails.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Hit the grid →</a>
        <a href="#how" className={styles.btn}>Rev engine</a>
      </div>
    </div>
  );
}
