import styles from "../page.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final}>
      <h2>Shall we begin quietly?</h2>
      <p>Three free mocks. No fanfare.</p>
      <div className={styles["final-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Upload PDF</a>
        <a href="#how" className={styles.btn}>How it works</a>
      </div>
    </section>
  );
}
