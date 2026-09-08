import styles from "../page.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final}>
      <div className={styles["final-card"]}>
        <h2>Pour yourself in.</h2>
        <p>Three free mocks. Liquid outside, solid exam inside.</p>
        <div className={styles["final-actions"]}>
          <a href="#try" className={`${styles.btn} ${styles.chrome}`}>Upload PDF</a>
          <a href="#how" className={styles.btn}>How it pours</a>
        </div>
      </div>
    </section>
  );
}
