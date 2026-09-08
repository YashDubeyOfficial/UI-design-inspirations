import styles from "../page.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final}>
      <div className={styles["final-card"]}>
        <h2>Set in motion, held still.</h2>
        <p>Three free settings. Axes included.</p>
        <div className={styles["final-actions"]}>
          <a href="#try" className={`${styles.btn} ${styles.solid}`}>Upload PDF</a>
          <a href="#how" className={styles.btn}>How it works</a>
        </div>
      </div>
    </section>
  );
}
