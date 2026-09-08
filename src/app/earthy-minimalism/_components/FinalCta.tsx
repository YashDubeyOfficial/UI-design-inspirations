import styles from "../page.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final}>
      <div className={styles["final-card"]}>
        <h2>Come home to the hall.</h2>
        <p>Three free mocks. Warm light, honest pressure.</p>
        <div className={styles["final-actions"]}>
          <a href="#try" className={`${styles.btn} ${styles.clay}`}>Upload PDF</a>
          <a href="#how" className={`${styles.btn} ${styles.ghost}`}>How it grows</a>
        </div>
      </div>
    </section>
  );
}
