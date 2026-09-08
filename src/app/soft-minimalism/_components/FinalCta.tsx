import styles from "../page.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final}>
      <div className={styles["final-card"]}>
        <h2>Come in, it&apos;s warm.</h2>
        <p>Three free mocks. No card, no chill.</p>
        <div className={styles["final-actions"]}>
          <a href="#try" className={`${styles.btn} ${styles.solid} ${styles.light}`}>Upload PDF</a>
          <a href="#how" className={`${styles.btn} ${styles.light}`}>How it works</a>
        </div>
      </div>
    </section>
  );
}
