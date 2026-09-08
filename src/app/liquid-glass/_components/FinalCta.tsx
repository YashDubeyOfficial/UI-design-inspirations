import styles from "../page.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final}>
      <div className={styles["final-card"]}>
        <h2>Look through the glass.</h2>
        <p>Three free mocks. Frosted outside, crystal inside.</p>
        <div className={styles["final-actions"]}>
          <a href="#try" className={`${styles.btn} ${styles.frost}`}>Upload PDF</a>
          <a href="#how" className={styles.btn}>How it flows</a>
        </div>
      </div>
    </section>
  );
}
