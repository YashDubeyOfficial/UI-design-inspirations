import styles from "../page.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final}>
      <h2>Ready to get <span>cutting?</span></h2>
      <p>Three free mocks. Sharp edges, brilliant results.</p>
      <div className={styles["final-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.fill}`}>Upload PDF</a>
        <a href="#how" className={styles.btn}>How it cuts</a>
      </div>
    </section>
  );
}
