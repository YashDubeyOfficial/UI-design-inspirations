import styles from "../page.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final}>
      <div className={styles["final-card"]}>
        <h2>Step into <span>depth.</span></h2>
        <p>Three free mocks. Flat price — just kidding, free.</p>
        <div className={styles["final-actions"]}>
          <a href="#try" className={`${styles.btn} ${styles.lift}`}>Upload PDF</a>
          <a href="#how" className={styles.btn}>How it tilts</a>
        </div>
      </div>
    </section>
  );
}
