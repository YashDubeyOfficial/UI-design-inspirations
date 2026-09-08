import styles from "../page.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final}>
      <div className={styles["final-card"]}>
        <h2>Ready to puff?</h2>
        <p>Three free mocks. Soft shell, hard exam.</p>
        <div className={styles["final-actions"]}>
          <a href="#try" className={`${styles.btn} ${styles.white}`}>Upload PDF</a>
          <a href="#how" className={styles.btn}>How it puffs</a>
        </div>
      </div>
    </section>
  );
}
