import styles from "../page.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final}>
      <div className={styles["final-card"]}>
        <h2>Cut for <span>your hall.</span></h2>
        <p>Three free mocks. Measured, cut and finished by hand.</p>
        <div className={styles["final-actions"]}>
          <a href="#try" className={`${styles.btn} ${styles.leather}`}>Upload PDF</a>
          <a href="#how" className={styles.btn}>How it fits</a>
        </div>
      </div>
    </section>
  );
}
