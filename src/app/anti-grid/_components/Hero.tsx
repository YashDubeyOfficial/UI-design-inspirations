import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Anti-Grid · Off rails · On exam</div>
      <h1>The grid is<br /><span>a suggestion.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs and scans</strong> scattered with intent — overlapping, offset, off-balance — yet every timer, palette and section lands exactly where the hall needs it.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Scatter PDF →</a>
        <a href="#how" className={styles.btn}>Break rules</a>
      </div>
    </div>
  );
}
