import styles from "../page.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final}>
      <div className={styles["final-card"]}>
        <h2>Take a breath. Then begin.</h2>
        <p>Three free mocks. The calmest hall you will ever attempt in.</p>
        <div className={styles["final-actions"]}>
          <a href="#try" className={`${styles.btn} ${styles.white}`}>Upload PDF</a>
          <a href="#how" className={`${styles.btn} ${styles.ghostline}`}>How it works</a>
        </div>
      </div>
    </section>
  );
}
