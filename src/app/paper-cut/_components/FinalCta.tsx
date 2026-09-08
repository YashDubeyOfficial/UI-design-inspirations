import styles from "../page.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final}>
      <div className={styles["final-card"]}>
        <h2>Ready to cut?</h2>
        <p>Three free mocks. Handmade feeling, machine precision.</p>
        <div className={styles["final-actions"]}>
          <a href="#try" className={`${styles.btn} ${styles.cut}`}>Upload PDF</a>
          <a href="#how" className={`${styles.btn} ${styles.plain}`}>How it cuts</a>
        </div>
      </div>
    </section>
  );
}
