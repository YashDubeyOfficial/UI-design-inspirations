import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Swiss Design · Grid · Grotesk</div>
      <h1>PDF in.<br /><span>Exam out.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs and question banks</strong> set on a strict asymmetric grid. Ranged left, never centered. Like the centre, only clearer.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Upload PDF</a>
        <a href="#how" className={styles.btn}>How it works</a>
      </div>
    </div>
  );
}
