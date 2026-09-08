import styles from "../page.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final}>
      <div className={styles["final-card"]}>
        <h2>Less, but better.</h2>
        <p>Three free mocks. Black, white, and one red decision.</p>
        <div className={styles["final-actions"]}>
          <a href="#try" className={`${styles.btn} ${styles.white}`}>Upload PDF</a>
          <a href="#how" className={styles.btn}>How it works</a>
        </div>
      </div>
    </section>
  );
}
